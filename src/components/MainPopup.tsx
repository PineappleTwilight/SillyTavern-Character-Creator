import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import {
  STButton,
  STConnectionProfileSelect,
  STFancyDropdown,
  STPresetSelect,
  STTextarea,
  Popup,
  DropdownItem,
  PresetItem,
} from 'sillytavern-utils-lib/components/react';
import { applyWorldInfoEntry, createCharacter, saveCharacter, BuildPromptOptions } from 'sillytavern-utils-lib';
import { selected_group, st_echo, this_chid, world_names } from 'sillytavern-utils-lib/config';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { Character, FullExportData } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import * as Handlebars from 'handlebars';
import '../handlebars-helpers.js';

import { runCharacterFieldGeneration, Session, CHARACTER_FIELDS, CHARACTER_LABELS, DEFAULT_FIELD_MAX_RESPONSE_TOKENS, DebugCapture } from '../generate.js';
import { ExtensionSettings, settingsManager, convertToVariableName, VERSION } from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';
import { CharacterField } from './CharacterField.js';
import { AlternateGreetings, Greeting } from './AlternateGreetings.js';
import { CompareFieldPopup } from './CompareFieldPopup.js';
import { DebugView } from './DebugView.js';
import { buildWorldInfoCharacter } from '../world-info-export.js';
import { buildWorldInfoDropdownItems } from '../world-info-selection.js';
import { getWorldInfoEntries } from '../world-info-entries.js';
import { loadCharacterSession, saveCharacterSession } from '../browser-storage.js';

const globalContext = SillyTavern.getContext();

const createDefaultSession = (): Session => ({
  selectedCharacterIndexes: this_chid ? [String(this_chid)] : [],
  selectedWorldNames: [],
  fields: CHARACTER_FIELDS.reduce(
    (acc, field) => {
      acc[field] = { value: '', prompt: '', label: CHARACTER_LABELS[field] };
      return acc;
    },
    {} as Session['fields'],
  ),
  draftFields: {},
  lastLoadedCharacterId: '',
});

const fieldConfigs = {
  name: { label: CHARACTER_LABELS.name, rows: 2, large: false, promptEnabled: false, primary: true },
  description: { label: CHARACTER_LABELS.description, rows: 5, large: true, promptEnabled: true },
  personality: { label: CHARACTER_LABELS.personality, rows: 4, large: true, promptEnabled: true },
  scenario: { label: CHARACTER_LABELS.scenario, rows: 3, large: true, promptEnabled: true },
  first_mes: { label: CHARACTER_LABELS.first_mes, rows: 3, large: true, promptEnabled: true },
  mes_example: { label: CHARACTER_LABELS.mes_example, rows: 6, large: true, promptEnabled: true },
};

type DebugMap = Record<string, DebugCapture>;

export const MainPopup: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [session, setSession] = useState<Session>(createDefaultSession());
  const [isGenerating, setIsGenerating] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'core' | 'draft'>('core');

  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [allWorldNames, setAllWorldNames] = useState<string[]>([]);
  const [loadedCharacter, setLoadedCharacter] = useState<Character | null>(null);
  const [compareData, setCompareData] = useState<{ original: string; current: string; fieldName: string } | null>(null);
  const [debugCapture, setDebugCapture] = useState<DebugMap>({});
  const [openDebugFor, setOpenDebugFor] = useState<string | null>(null);
  const [generatingAll, setGeneratingAll] = useState(false);
  const [collapsed, setCollapsed] = useState({
    profile: false,
    context: true,
    options: true,
    instructions: true,
  });

  // --- Effects for Data Loading and Session Management ---
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setAllCharacters(globalContext.characters);
      setAllWorldNames(world_names);
      const savedSession = (await loadCharacterSession()).value ?? {};
      const initialSession = createDefaultSession();
      if (savedSession.fields) initialSession.fields = { ...initialSession.fields, ...savedSession.fields };
      if (savedSession.draftFields) initialSession.draftFields = savedSession.draftFields;
      if (savedSession.selectedCharacterIndexes)
        initialSession.selectedCharacterIndexes = savedSession.selectedCharacterIndexes;
      if (savedSession.selectedWorldNames) initialSession.selectedWorldNames = savedSession.selectedWorldNames;
      if (savedSession.lastLoadedCharacterId) {
        initialSession.lastLoadedCharacterId = savedSession.lastLoadedCharacterId;
        const char = globalContext.characters.find((c: Character) => c.avatar === savedSession.lastLoadedCharacterId);
        if (char) setLoadedCharacter(char);
      }
      setSession(initialSession);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveCharacterSession(session).then((result) => {
        if (!result.persisted) {
          console.warn('Failed to save Character Creator session:', result.error);
          st_echo('warning', 'Character Creator session could not be saved. Browser storage may be full.');
        }
      });
    }
  }, [session, isLoading]);

  // --- Generic Setting Handlers ---
  const updateSetting = <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) => {
    settingsManager.getSettings()[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };
  const updateContextToSend = <K extends keyof ExtensionSettings['contextToSend']>(
    key: K,
    value: ExtensionSettings['contextToSend'][K],
  ) => {
    settingsManager.getSettings().contextToSend[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  // --- Field and Greeting State Handlers ---
  const handleFieldChange = useCallback(
    (fieldId: string, value: string, type: 'value' | 'prompt', isDraft: boolean) => {
      setSession((prev) => {
        const fieldGroup = isDraft ? 'draftFields' : 'fields';
        const newGroup = { ...prev[fieldGroup] };
        if (!newGroup[fieldId]) newGroup[fieldId] = { value: '', prompt: '', label: fieldId };
        newGroup[fieldId][type] = value;
        return { ...prev, [fieldGroup]: newGroup };
      });
    },
    [],
  );

  const greetings = useMemo(
    (): Greeting[] =>
      Object.keys(session.fields)
        .filter((k) => k.startsWith('alternate_greetings_'))
        .sort((a, b) => parseInt(a.split('_')[2]) - parseInt(b.split('_')[2]))
        .map((k) => session.fields[k]),
    [session.fields],
  );

  const handleGreetingsChange = useCallback((newGreetings: Greeting[]) => {
    setSession((prev) => {
      const newFields = { ...prev.fields };
      Object.keys(newFields).forEach((key) => {
        if (key.startsWith('alternate_greetings_')) delete newFields[key];
      });
      newGreetings.forEach((greeting, index) => {
        const fieldName = `alternate_greetings_${index + 1}`;
        newFields[fieldName] = { ...greeting, label: `Alternate Greeting ${index + 1}` };
      });
      return { ...prev, fields: newFields };
    });
  }, []);

  const handleClearField = useCallback(
    (fieldId: string, isDraft: boolean) => {
      handleFieldChange(fieldId, '', 'value', isDraft);
    },
    [handleFieldChange],
  );

  const handleDeleteDraftField = useCallback(
    async (fieldId: string) => {
      const confirm = await globalContext.Popup.show.confirm(
        'Delete Draft Field',
        `Are you sure you want to delete "${session.draftFields[fieldId].label}"?`,
      );
      if (confirm)
        setSession((prev) => {
          const newDrafts = { ...prev.draftFields };
          delete newDrafts[fieldId];
          return { ...prev, draftFields: newDrafts };
        });
    },
    [session.draftFields],
  );

  const handleAddDraftField = useCallback(async () => {
    const name = await globalContext.Popup.show.input('Enter Draft Field Name', '');
    if (!name?.trim()) return;
    const id = convertToVariableName(name.trim());
    if (!id) return st_echo('error', 'Invalid field name.');
    if (session.draftFields[id] || CHARACTER_FIELDS.includes(id as any))
      return st_echo('warning', 'Field name already exists.');
    setSession((prev) => ({
      ...prev,
      draftFields: { ...prev.draftFields, [id]: { value: '', prompt: '', label: name } },
    }));
    setActiveTab('draft');
  }, [session.draftFields]);

  // --- Core Generation Logic ---
  const buildOptionsForRequest = useCallback((): BuildPromptOptions => {
    const buildPromptOptions: BuildPromptOptions = {
      presetName: settings.profileId
        ? globalContext.extensionSettings.connectionManager?.profiles?.find((p) => p.id === settings.profileId)?.preset
        : undefined,
      contextName: settings.profileId
        ? globalContext.extensionSettings.connectionManager?.profiles?.find((p) => p.id === settings.profileId)?.context
        : undefined,
      instructName: settings.profileId
        ? globalContext.extensionSettings.connectionManager?.profiles?.find((p) => p.id === settings.profileId)
            ?.instruct
        : undefined,
      targetCharacterId: this_chid,
      ignoreCharacterFields: true,
      ignoreWorldInfo: true,
      ignoreAuthorNote: true,
      maxContext:
        settings.maxContextType === 'custom'
          ? settings.maxContextValue
          : settings.maxContextType === 'profile'
            ? 'preset'
            : 'active',
      includeNames: !!selected_group,
    };

    const msgContext = settings.contextToSend.messages;
    switch (msgContext.type) {
      case 'none':
        buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case 'first':
        buildPromptOptions.messageIndexesBetween = { start: 0, end: msgContext.first ?? 10 };
        break;
      case 'last':
        const chatLength = globalContext.chat?.length ?? 0;
        const lastCount = msgContext.last ?? 10;
        buildPromptOptions.messageIndexesBetween = {
          end: Math.max(0, chatLength - 1),
          start: Math.max(0, chatLength - lastCount),
        };
        break;
      case 'range':
        buildPromptOptions.messageIndexesBetween = {
          start: msgContext.range?.start ?? 0,
          end: msgContext.range?.end ?? 10,
        };
        break;
      case 'all':
      default:
        break;
    }
    if (this_chid === undefined && !selected_group) {
      buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
    }
    return buildPromptOptions;
  }, [settings]);

  const loadWorldInfoEntries = useCallback(async () => {
    const entriesGroupByWorldName: Record<string, WIEntry[]> = {};
    await Promise.all(
      world_names
        .filter((name: string) => !entriesGroupByWorldName[name])
        .map(async (name: string) => {
          const worldInfo = await globalContext.loadWorldInfo(name);
          if (worldInfo) {
            entriesGroupByWorldName[name] = getWorldInfoEntries(worldInfo, { includeDisabled: true });
          }
        }),
    );
    return entriesGroupByWorldName;
  }, []);

  const buildPromptSettings = useCallback(() => {
    const promptSettings: Partial<typeof settings.prompts> = structuredClone(settings.prompts);
    if (!settings.contextToSend.stDescription) {
      delete promptSettings.stDescription;
    }
    if (!settings.contextToSend.charCard || session.selectedCharacterIndexes.length === 0) {
      delete promptSettings.charDefinitions;
    }
    if (!settings.contextToSend.worldInfo || session.selectedWorldNames.length === 0) {
      delete promptSettings.lorebookDefinitions;
    }
    if (!settings.contextToSend.existingFields) {
      delete promptSettings.existingFieldDefinitions;
    }
    if (!settings.contextToSend.persona) {
      delete promptSettings.personaDescription;
    }
    // World Info Character Definition is only consumed when saving as a WI entry.
    delete promptSettings.worldInfoCharDefinition;
    return promptSettings;
  }, [settings, session.selectedCharacterIndexes, session.selectedWorldNames]);

  const runGeneration = useCallback(
    async (targetField: string, continueFrom?: string): Promise<string> => {
      if (!settings.profileId) {
        throw new Error('No connection profile selected.');
      }
      const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
        (p) => p.id === settings.profileId,
      );
      if (!profile) {
        throw new Error('Connection profile not found.');
      }

      const buildPromptOptions = buildOptionsForRequest();
      const entriesGroupByWorldName = await loadWorldInfoEntries();
      const promptSettings = buildPromptSettings();

      const result = await runCharacterFieldGeneration({
        profileId: settings.profileId,
        userPrompt: settings.promptPresets[settings.promptPreset].content,
        buildPromptOptions,
        continueFrom,
        session,
        allCharacters,
        entriesGroupByWorldName,
        promptSettings,
        formatDescription: { content: settings.prompts[`${settings.outputFormat}Format`].content },
        mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.filter(
          (p) => p.enabled,
        ),
        includeUserMacro: settings.contextToSend.persona,
        maxResponseToken: settings.maxResponseToken,
        fieldMaxResponseTokens: settings.fieldMaxResponseTokens,
        useWorldInfoActivationScan: settings.useWorldInfoActivationScan,
        targetField: targetField,
        outputFormat: settings.outputFormat,
      });

      if (result.debug) {
        setDebugCapture((prev) => ({ ...prev, [targetField]: result.debug! }));
      }

      return result.content;
    },
    [session, settings, allCharacters, buildOptionsForRequest, loadWorldInfoEntries, buildPromptSettings],
  );

  const handleGenerate = useCallback(
    async (targetField: string, continueFrom?: string) => {
      setIsGenerating((prev) => [...prev, targetField]);
      try {
        const generatedContent = await runGeneration(targetField, continueFrom);

        const isGreeting = targetField.startsWith('alternate_greetings_');
        const isDraft = !isGreeting && !CHARACTER_FIELDS.includes(targetField as any);
        if (isGreeting) {
          const index = parseInt(targetField.split('_')[2]) - 1;
          const newGreetings = [...greetings];
          if (newGreetings[index]) newGreetings[index].value = generatedContent;
          handleGreetingsChange(newGreetings);
        } else {
          handleFieldChange(targetField, generatedContent, 'value', isDraft);
        }
      } catch (e: any) {
        console.error(e);
        st_echo('error', e.message || String(e));
      } finally {
        setIsGenerating((prev) => prev.filter((id) => id !== targetField));
      }
    },
    [runGeneration, greetings, handleFieldChange, handleGreetingsChange],
  );

  const handleGenerateAll = useCallback(async () => {
    if (!settings.profileId) {
      st_echo('warning', 'Please select a connection profile.');
      return;
    }
    const fieldsToGenerate = ['name', 'description', 'personality', 'scenario', 'first_mes', 'mes_example'].filter(
      (f) => !isGenerating.includes(f),
    );
    if (fieldsToGenerate.length === 0) return;
    setGeneratingAll(true);
    setIsGenerating((prev) => [...prev, ...fieldsToGenerate]);
    try {
      const generated: Record<string, string> = {};
      for (const fieldId of fieldsToGenerate) {
        const content = await runGeneration(fieldId);
        generated[fieldId] = content;
        setSession((prev) => {
          const newFields = { ...prev.fields };
          if (newFields[fieldId]) newFields[fieldId] = { ...newFields[fieldId], value: content };
          return { ...prev, fields: newFields };
        });
        setIsGenerating((prev) => prev.filter((id) => id !== fieldId));
      }
      st_echo('success', `Generated ${Object.keys(generated).length} fields.`);
    } catch (e: any) {
      console.error(e);
      st_echo('error', `Generate all failed: ${e.message}`);
    } finally {
      setGeneratingAll(false);
      setIsGenerating([]);
    }
  }, [settings.profileId, runGeneration, isGenerating]);

  // --- Character Actions ---
  const handleReset = useCallback(async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Fields', 'This will clear all fields. Are you sure?');
    if (confirm) {
      setSession(createDefaultSession());
      setLoadedCharacter(null);
      setDebugCapture({});
    }
  }, []);

  const handleCompare = useCallback(
    (fieldId: string | number) => {
      if (!loadedCharacter) return st_echo('warning', 'Please load a character to compare against.');
      let current, original, fieldName: string;
      if (typeof fieldId === 'number') {
        current = greetings[fieldId]?.value ?? '';
        original = loadedCharacter.data?.alternate_greetings?.[fieldId] ?? '';
        fieldName = `Alternate Greeting ${fieldId + 1}`;
      } else {
        current = session.fields[fieldId]?.value ?? '';
        original = (loadedCharacter as any)[fieldId] ?? loadedCharacter.data?.[fieldId] ?? '';
        fieldName = CHARACTER_LABELS[fieldId as keyof typeof CHARACTER_LABELS];
      }
      setCompareData({ original, current, fieldName });
    },
    [loadedCharacter, session.fields, greetings],
  );

  const handleLoadCharacter = useCallback(
    async (charIndexStr: string) => {
      const char = allCharacters[parseInt(charIndexStr)];
      if (!char) return;
      const isDirty = CHARACTER_FIELDS.some((f) => session.fields[f].value.trim() !== '');
      if (isDirty) {
        const confirm = await globalContext.Popup.show.confirm('Load Character', 'Overwrite current fields?');
        if (!confirm) return;
      }
      const newFields = { ...session.fields };
      CHARACTER_FIELDS.forEach((f) => {
        newFields[f] = { value: (char as any)[f] ?? char.data?.[f] ?? '', prompt: '', label: CHARACTER_LABELS[f] };
      });
      const newGreetings = (char.data?.alternate_greetings ?? []).map((v: string) => ({ value: v, prompt: '' }));
      setLoadedCharacter(char);
      setSession((prev) => ({ ...prev, fields: newFields, lastLoadedCharacterId: char.avatar }));
      handleGreetingsChange(newGreetings);
    },
    [allCharacters, session.fields, handleGreetingsChange],
  );

  const handleLoadCurrentCharacter = useCallback(async () => {
    if (selected_group) {
      st_echo('warning', 'Cannot load the current character while a group chat is open.');
      return;
    }
    if (this_chid === undefined) {
      st_echo('warning', 'No character chat is currently open.');
      return;
    }
    await handleLoadCharacter(String(this_chid));
  }, [handleLoadCharacter]);

  const getGreetingsArray = () => greetings.map((g) => g.value).filter((v) => v.trim() !== '');

  const buildFullExportData = useCallback((): FullExportData => {
    return {
      name: session.fields.name.value,
      description: session.fields.description.value,
      personality: session.fields.personality.value,
      scenario: session.fields.scenario.value,
      first_mes: session.fields.first_mes.value,
      mes_example: session.fields.mes_example.value,
      data: {
        alternate_greetings: getGreetingsArray(),
        tags: [],
        avatar: 'none',
        name: session.fields.name.value,
        description: session.fields.description.value,
        first_mes: session.fields.first_mes.value,
        mes_example: session.fields.mes_example.value,
        personality: session.fields.personality.value,
        scenario: session.fields.scenario.value,
      },
      avatar: 'none',
      tags: [],
      spec: 'chara_card_v3',
      spec_version: '3.0',
    };
  }, [session.fields, greetings]);

  const handleSaveAsNew = async () => {
    if (!session.fields.name.value) return st_echo('warning', 'Please provide a character name.');
    const confirm = await globalContext.Popup.show.confirm('Save as New Character', 'Are you sure?');
    if (!confirm) return;
    try {
      await createCharacter(buildFullExportData(), true);
      st_echo('success', 'Character created.');
    } catch (e: any) {
      st_echo('error', `Failed to create character: ${e.message}`);
    }
  };

  const handleOverride = async () => {
    if (!loadedCharacter) return st_echo('warning', 'Please load a character to override.');
    const confirm = await globalContext.Popup.show.confirm(
      'Override Character',
      `Override "${loadedCharacter.name}"? This cannot be undone.`,
    );
    if (!confirm) return;
    const data: Character = {
      ...loadedCharacter,
      name: session.fields.name.value,
      description: session.fields.description.value,
      personality: session.fields.personality.value,
      scenario: session.fields.scenario.value,
      first_mes: session.fields.first_mes.value,
      mes_example: session.fields.mes_example.value,
      data: {
        alternate_greetings: getGreetingsArray(),
        name: session.fields.name.value,
        description: session.fields.description.value,
        first_mes: session.fields.first_mes.value,
        mes_example: session.fields.mes_example.value,
        personality: session.fields.personality.value,
        scenario: session.fields.scenario.value,
      },
    };
    try {
      await saveCharacter(data, true);
      st_echo('success', `Character "${data.name}" updated!`);
    } catch (e: any) {
      st_echo('error', `Failed to override character: ${e.message}`);
    }
  };

  const handleExportJson = () => {
    if (!session.fields.name.value) return st_echo('warning', 'Please provide a character name before exporting.');
    const data = buildFullExportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${session.fields.name.value || 'character'}-card.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleImportJson = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        const isDirty = CHARACTER_FIELDS.some((f) => session.fields[f].value.trim() !== '');
        if (isDirty) {
          const confirm = await globalContext.Popup.show.confirm('Import Character', 'Overwrite current fields?');
          if (!confirm) return;
        }
        const newFields = { ...session.fields };
        CHARACTER_FIELDS.forEach((f) => {
          newFields[f] = {
            value: data[f] ?? data.data?.[f] ?? '',
            prompt: '',
            label: CHARACTER_LABELS[f],
          };
        });
        const importedGreetings: Greeting[] = (data.data?.alternate_greetings ?? data.alternate_greetings ?? []).map(
          (v: string) => ({ value: v, prompt: '' }),
        );
        setSession((prev) => ({ ...prev, fields: newFields }));
        handleGreetingsChange(importedGreetings);
        st_echo('success', `Imported "${data.name ?? 'character'}".`);
      } catch (e: any) {
        st_echo('error', `Import failed: ${e.message}`);
      }
    };
    input.click();
  };

  const handleExportDrafts = () => {
    const data = JSON.stringify({ draftFields: session.draftFields, version: VERSION }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `crec-draft-fields-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleImportDrafts = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!data.draftFields) throw new Error('Invalid file format.');
        const confirm =
          Object.keys(session.draftFields).length > 0
            ? await globalContext.Popup.show.confirm(
                'Import Drafts',
                'This will replace current draft fields. Continue?',
              )
            : true;
        if (confirm) {
          setSession((p) => ({ ...p, draftFields: data.draftFields }));
          st_echo('success', 'Draft fields imported.');
        }
      } catch (e: any) {
        st_echo('error', `Import failed: ${e.message}`);
      }
    };
    input.click();
  };

  // --- Memoized Derived Data ---
  const characterDropdownItems = useMemo(
    (): DropdownItem[] => allCharacters.map((c, i) => ({ value: String(i), label: c.name })),
    [allCharacters],
  );
  const worldInfoDropdownItems = useMemo(
    (): DropdownItem[] => allWorldNames.map((n) => ({ value: n, label: n })),
    [allWorldNames],
  );
  const selectableWorldInfoDropdownItems = useMemo(
    (): DropdownItem[] => buildWorldInfoDropdownItems(allWorldNames, session.selectedWorldNames),
    [allWorldNames, session.selectedWorldNames],
  );
  const promptPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.promptPresets).map((k) => ({ value: k, label: k })),
    [settings.promptPresets],
  );
  const mainContextPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.mainContextTemplatePresets).map((k) => ({ value: k, label: k })),
    [settings.mainContextTemplatePresets],
  );

  const toggleSection = (key: keyof typeof collapsed) => setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  const debugEnabled = settings.showDebugView;
  const openDebugCapture = openDebugFor ? debugCapture[openDebugFor] : null;

  if (isLoading) return <div className="crec-loading">Loading…</div>;

  return (
    <div id="charCreatorPopup">
      <div className="crec-popup-head">
        <div className="crec-title-row">
          <h2>
            <i className="fa-solid fa-user-astronaut crec-title-icon" aria-hidden="true" />
            Character Creator
          </h2>
          <div className="crec-character-subtitle" title="Active character for this card">
            {loadedCharacter ? (
              <>
                <span className="crec-character-subtitle-label">Editing:</span>{' '}
                <span className="crec-character-subtitle-name">{session.fields.name.value || loadedCharacter.name}</span>
              </>
            ) : session.fields.name.value ? (
              <>
                <span className="crec-character-subtitle-label">New character:</span>{' '}
                <span className="crec-character-subtitle-name">{session.fields.name.value}</span>
              </>
            ) : (
              <span className="crec-character-subtitle-placeholder">Untitled character</span>
            )}
          </div>
        </div>
        <div className="crec-toolbar">
          <STButton onClick={handleGenerateAll} disabled={generatingAll} title="Generate every core field in sequence">
            {generatingAll ? (
              <>
                <i className="fa-solid fa-spinner fa-spin" /> Generating…
              </>
            ) : (
              <>
                <i className="fa-solid fa-bolt" /> Generate All
              </>
            )}
          </STButton>
          <STButton onClick={handleSaveAsNew}>Save as New</STButton>
          <STButton onClick={handleOverride} disabled={!loadedCharacter}>
            Override Char
          </STButton>
          <STButton onClick={handleExportJson}>Export JSON</STButton>
          <STButton onClick={handleImportJson}>Import JSON</STButton>
          {settings.showSaveAsWorldInfoEntry.show && (
            <STFancyDropdown
              items={worldInfoDropdownItems}
              placeholder="Save as WI Entry"
              closeOnSelect
              value={[]}
              onChange={(v) => {}}
              onBeforeSelection={async (_current, proposed) => {
                if (!session.fields.name.value) {
                  st_echo('warning', 'Please enter a name first.');
                  return false;
                }
                const worldName = proposed[0];
                const template = Handlebars.compile(settings.prompts.worldInfoCharDefinition.content);
                const content = template({
                  character: buildWorldInfoCharacter(session.fields, greetings),
                });
                const entry: WIEntry = {
                  uid: -1,
                  key: [session.fields.name.value],
                  content,
                  comment: session.fields.name.value,
                  disable: false,
                  keysecondary: [],
                };
                try {
                  await applyWorldInfoEntry({ entry, selectedWorldName: worldName, operation: 'add' });
                  st_echo('success', `Entry added to ${worldName}.`);
                } catch (err: any) {
                  st_echo('error', `Failed to add WI Entry: ${err.message}`);
                }
                return false;
              }}
            />
          )}
          <STButton onClick={handleReset} title="Clear all fields">
            <i className="fa-solid fa-rotate-left" /> Reset
          </STButton>
          <STButton
            onClick={handleLoadCurrentCharacter}
            title="Load the character from the currently open chat"
            disabled={!!selected_group || this_chid === undefined}
          >
            Current Char
          </STButton>
          <div style={{ width: '220px' }} title="Load Character Data">
            <STFancyDropdown
              items={characterDropdownItems}
              value={loadedCharacter ? [String(allCharacters.indexOf(loadedCharacter))] : []}
              onChange={(v) => handleLoadCharacter(v[0])}
              multiple={false}
              enableSearch
              placeholder="Load Character…"
            />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Left Column - Configuration */}
        <div className="column">
          <div className={`card crec-collapsible ${collapsed.profile ? '' : 'expanded'}`}>
            <div
              className="crec-card-head"
              role="button"
              tabIndex={0}
              onClick={() => toggleSection('profile')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('profile');
                }
              }}
            >
              <h3>
                <i className="fa-solid fa-plug crec-card-section-icon" aria-hidden="true" /> Connection Profile
              </h3>
              <i className={`fa-solid crec-card-chevron ${collapsed.profile ? 'fa-chevron-right' : 'fa-chevron-down'}`} />
            </div>
            {!collapsed.profile && (
              <div className="crec-card-body">
                <STConnectionProfileSelect
                  initialSelectedProfileId={settings.profileId}
                  onChange={(p) => updateSetting('profileId', p?.id ?? '')}
                />
              </div>
            )}
          </div>

          <div className={`card crec-collapsible ${collapsed.context ? '' : 'expanded'}`}>
            <div
              className="crec-card-head"
              role="button"
              tabIndex={0}
              onClick={() => toggleSection('context')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('context');
                }
              }}
            >
              <h3>
                <i className="fa-solid fa-circle-info crec-card-section-icon" aria-hidden="true" /> Context to Send
              </h3>
              <i className={`fa-solid crec-card-chevron ${collapsed.context ? 'fa-chevron-right' : 'fa-chevron-down'}`} />
            </div>
            {!collapsed.context && (
              <div className="crec-card-body context-options">
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.stDescription}
                    onChange={(e) => updateContextToSend('stDescription', e.target.checked)}
                  />{' '}
                  Description of SillyTavern & Char Card
                </label>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.persona}
                    onChange={(e) => updateContextToSend('persona', e.target.checked)}
                  />{' '}
                  User's Persona
                </label>

                {(this_chid !== undefined || selected_group) && (
                  <div className="message-options">
                    <h4>Messages to Include</h4>
                    <select
                      className="text_pole"
                      value={settings.contextToSend.messages.type}
                      onChange={(e) =>
                        updateContextToSend('messages', {
                          ...settings.contextToSend.messages,
                          type: e.target.value as any,
                        })
                      }
                    >
                      <option value="none">None</option>
                      <option value="all">All Messages</option>
                      <option value="first">First X Messages</option>
                      <option value="last">Last X Messages</option>
                      <option value="range">Range</option>
                    </select>
                    {settings.contextToSend.messages.type === 'first' && (
                      <div className="crec-inline-number">
                        First{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          value={settings.contextToSend.messages.first ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              first: parseInt(e.target.value) || 10,
                            })
                          }
                        />{' '}
                        Messages
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'last' && (
                      <div className="crec-inline-number">
                        Last{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          value={settings.contextToSend.messages.last ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              last: parseInt(e.target.value) || 10,
                            })
                          }
                        />{' '}
                        Messages
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'range' && (
                      <div className="crec-inline-number">
                        Range{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="0"
                          placeholder="Start"
                          value={settings.contextToSend.messages.range?.start ?? 0}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              range: {
                                ...settings.contextToSend.messages.range!,
                                start: parseInt(e.target.value) || 0,
                              },
                            })
                          }
                        />{' '}
                        to{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          placeholder="End"
                          value={settings.contextToSend.messages.range?.end ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              range: {
                                ...settings.contextToSend.messages.range!,
                                end: parseInt(e.target.value) || 10,
                              },
                            })
                          }
                        />
                      </div>
                    )}
                  </div>
                )}

                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.charCard}
                    onChange={(e) => updateContextToSend('charCard', e.target.checked)}
                  />{' '}
                  Selected Characters' Data
                </label>
                {settings.contextToSend.charCard && (
                  <STFancyDropdown
                    items={characterDropdownItems}
                    value={session.selectedCharacterIndexes}
                    onChange={(v) => setSession((s) => ({ ...s, selectedCharacterIndexes: v }))}
                    multiple
                    enableSearch
                  />
                )}

                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.worldInfo}
                    onChange={(e) => updateContextToSend('worldInfo', e.target.checked)}
                  />{' '}
                  Selected World Info
                </label>
                {settings.contextToSend.worldInfo && (
                  <STFancyDropdown
                    items={selectableWorldInfoDropdownItems}
                    value={session.selectedWorldNames}
                    onChange={(v) => setSession((s) => ({ ...s, selectedWorldNames: v }))}
                    multiple
                    enableSearch
                  />
                )}

                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.existingFields}
                    onChange={(e) => updateContextToSend('existingFields', e.target.checked)}
                  />{' '}
                  Existing Field Content
                </label>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.dontSendOtherGreetings}
                    onChange={(e) => updateContextToSend('dontSendOtherGreetings', e.target.checked)}
                  />{' '}
                  Don't send other alternate greetings
                </label>
              </div>
            )}
          </div>

          <div className={`card crec-collapsible ${collapsed.options ? '' : 'expanded'}`}>
            <div
              className="crec-card-head"
              role="button"
              tabIndex={0}
              onClick={() => toggleSection('options')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('options');
                }
              }}
            >
              <h3>
                <i className="fa-solid fa-sliders crec-card-section-icon" aria-hidden="true" /> Generation Options
              </h3>
              <i className={`fa-solid crec-card-chevron ${collapsed.options ? 'fa-chevron-right' : 'fa-chevron-down'}`} />
            </div>
            {!collapsed.options && (
              <div className="crec-card-body">
                <label title="You can edit in extension settings">
                  Main Context Template
                  <STPresetSelect
                    onItemsChange={() => {}}
                    label="Main Context Template"
                    items={mainContextPresetItems}
                    value={settings.mainContextTemplatePreset}
                    onChange={(v) => updateSetting('mainContextTemplatePreset', v ?? 'default')}
                  />
                </label>
                <label>
                  Max Context Tokens
                  <select
                    className="text_pole"
                    value={settings.maxContextType}
                    onChange={(e) => updateSetting('maxContextType', e.target.value as any)}
                  >
                    <option value="profile">Use profile preset</option>
                    <option value="sampler">Use active preset</option>
                    <option value="custom">Custom</option>
                  </select>
                </label>
                {settings.maxContextType === 'custom' && (
                  <input
                    type="number"
                    className="text_pole"
                    value={settings.maxContextValue}
                    onChange={(e) => updateSetting('maxContextValue', parseInt(e.target.value) || 16384)}
                  />
                )}
                <label>
                  Max Response Tokens
                  <input
                    type="number"
                    className="text_pole"
                    value={settings.maxResponseToken}
                    onChange={(e) => updateSetting('maxResponseToken', parseInt(e.target.value) || 1024)}
                  />
                </label>
                <label>
                  Output Format
                  <select
                    className="text_pole"
                    value={settings.outputFormat}
                    onChange={(e) => updateSetting('outputFormat', e.target.value as any)}
                  >
                    <option value="none">Plain Text</option>
                    <option value="xml">XML</option>
                    <option value="json">JSON</option>
                  </select>
                </label>
                <label className="checkbox_label crec-debug-toggle">
                  <input
                    type="checkbox"
                    checked={settings.showDebugView}
                    onChange={(e) => updateSetting('showDebugView', e.target.checked)}
                  />{' '}
                  Show per-field debug view (captured last prompt + response)
                </label>
                <div className="crec-field-token-grid">
                  <div className="crec-field-token-grid-header">
                    <span>Per-field max response tokens</span>
                    <button
                      type="button"
                      className="menu_button crec-field-token-reset"
                      title="Reset all per-field overrides to built-in defaults (clears overrides, falls back to DEFAULT_FIELD_MAX_RESPONSE_TOKENS)"
                      onClick={() => updateSetting('fieldMaxResponseTokens', {})}
                    >
                      <i className="fa-solid fa-arrow-rotate-left" aria-hidden="true" /> Reset
                    </button>
                  </div>
                  {CHARACTER_FIELDS.map((field) => {
                    const overrides = settings.fieldMaxResponseTokens ?? {};
                    const current = overrides[field];
                    const builtin = DEFAULT_FIELD_MAX_RESPONSE_TOKENS[field];
                    const isOverride = current !== undefined;
                    return (
                      <label key={field} className="crec-field-token-row" title={isOverride ? `Override (built-in default: ${builtin})` : `Built-in default`}>
                        <span className="crec-field-token-label">{CHARACTER_LABELS[field]}</span>
                        <input
                          type="number"
                          className="text_pole crec-field-token-input"
                          min={64}
                          max={8192}
                          placeholder={String(builtin)}
                          value={isOverride ? String(current) : ''}
                          onChange={(e) => {
                            const raw = e.target.value;
                            const parsed = parseInt(raw, 10);
                            const next = Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
                            const prevOverrides = { ...(settings.fieldMaxResponseTokens ?? {}) };
                            if (next === undefined) {
                              delete prevOverrides[field];
                            } else {
                              prevOverrides[field] = next;
                            }
                            updateSetting('fieldMaxResponseTokens', prevOverrides);
                          }}
                        />
                      </label>
                    );
                  })}
                </div>
                <label className="checkbox_label crec-wi-scan-toggle" title="When enabled, only lorebook entries whose keys activated for the current chat are sent to the LLM. Falls back to sending all enabled entries of selected lorebooks if this SillyTavern version does not expose the World Info scan API.">
                  <input
                    type="checkbox"
                    checked={settings.useWorldInfoActivationScan}
                    onChange={(e) => updateSetting('useWorldInfoActivationScan', e.target.checked)}
                  />{' '}
                  Use World Info activation scan (only send lorebook entries whose keys triggered for the current chat)
                </label>
              </div>
            )}
          </div>

          <div className={`card crec-collapsible ${collapsed.instructions ? '' : 'expanded'}`}>
            <div
              className="crec-card-head"
              role="button"
              tabIndex={0}
              onClick={() => toggleSection('instructions')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('instructions');
                }
              }}
            >
              <h3>
                <i className="fa-solid fa-pen crec-card-section-icon" aria-hidden="true" /> Additional Instructions
              </h3>
              <i
                className={`fa-solid crec-card-chevron ${collapsed.instructions ? 'fa-chevron-right' : 'fa-chevron-down'}`}
              />
            </div>
            {!collapsed.instructions && (
              <div className="crec-card-body">
                <STPresetSelect
                  label="Prompt Preset"
                  items={promptPresetItems}
                  value={settings.promptPreset}
                  onChange={(v) => updateSetting('promptPreset', v ?? 'default')}
                  onItemsChange={(items) =>
                    updateSetting(
                      'promptPresets',
                      items.reduce(
                        (acc, i) => ({ ...acc, [i.value]: settings.promptPresets[i.value] ?? { content: '' } }),
                        {},
                      ),
                    )
                  }
                  enableCreate
                  enableDelete
                  enableRename
                  readOnlyValues={['default']}
                />
                <STTextarea
                  value={settings.promptPresets[settings.promptPreset]?.content ?? ''}
                  onChange={(e) =>
                    updateSetting('promptPresets', {
                      ...settings.promptPresets,
                      [settings.promptPreset]: { content: e.target.value },
                    })
                  }
                  rows={4}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Fields */}
        <div className="wide-column">
          <div className="tab-buttons">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-file-lines" aria-hidden="true" /> Core Fields
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('draft')}
              className={`tab-button ${activeTab === 'draft' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-pen-to-square" aria-hidden="true" /> Draft Fields
            </button>
            <div className="right-aligned">
              {activeTab === 'draft' && (
                <>
                  <STButton onClick={handleAddDraftField}>
                    <i className="fa-solid fa-plus"></i> Add
                  </STButton>
                  <STButton onClick={handleExportDrafts}>Export</STButton>
                  <STButton onClick={handleImportDrafts}>Import</STButton>
                </>
              )}
            </div>
          </div>
          <div className="tab-content-area">
            {activeTab === 'core' && (
              <div className="card tab-content active">
                <h3 className="crec-tab-section-title">Core Character Fields</h3>
                {CHARACTER_FIELDS.map((fieldId) => {
                  const config = fieldConfigs[fieldId as keyof typeof fieldConfigs];
                  if (!config) return null;
                  return (
                    <CharacterField
                      key={fieldId}
                      fieldId={fieldId}
                      label={config.label}
                      value={session.fields[fieldId]?.value ?? ''}
                      prompt={session.fields[fieldId]?.prompt ?? ''}
                      large={config.large}
                      rows={config.rows}
                      promptEnabled={config.promptEnabled}
                      primary={(config as any).primary}
                      isGenerating={isGenerating.includes(fieldId)}
                      isDebug={debugEnabled}
                      onValueChange={(id, v) => handleFieldChange(id, v, 'value', false)}
                      onPromptChange={(id, p) => handleFieldChange(id, p, 'prompt', false)}
                      onGenerate={handleGenerate}
                      onContinue={(id) => handleGenerate(id, session.fields[id].value)}
                      onClear={(id) => handleClearField(id, false)}
                      onCompare={handleCompare}
                      onShowDebug={(id) => setOpenDebugFor(id)}
                    />
                  );
                })}
                <AlternateGreetings
                  greetings={greetings}
                  onGreetingsChange={handleGreetingsChange}
                  isGenerating={isGenerating.some((id) => id.startsWith('alternate_greetings_'))}
                  onGenerate={(i) => handleGenerate(`alternate_greetings_${i + 1}`)}
                  onContinue={(i) => handleGenerate(`alternate_greetings_${i + 1}`, greetings[i].value)}
                  onCompare={handleCompare}
                  onShowDebug={(id) => setOpenDebugFor(id)}
                />
              </div>
            )}
            {activeTab === 'draft' && (
              <div className="card tab-content active">
                <h3 className="crec-tab-section-title">Draft Fields</h3>
                {Object.entries(session.draftFields).map(([fieldId, data]) => (
                  <CharacterField
                    key={fieldId}
                    fieldId={fieldId}
                    label={data.label}
                    value={data.value}
                    prompt={data.prompt}
                    isDraft
                    rows={5}
                    isGenerating={isGenerating.includes(fieldId)}
                    isDebug={debugEnabled}
                    onValueChange={(id, v) => handleFieldChange(id, v, 'value', true)}
                    onPromptChange={(id, p) => handleFieldChange(id, p, 'prompt', true)}
                    onGenerate={handleGenerate}
                    onContinue={(id) => handleGenerate(id, session.draftFields[id].value)}
                    onClear={(id) => handleClearField(id, true)}
                    onDelete={handleDeleteDraftField}
                    onShowDebug={(id) => setOpenDebugFor(id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {compareData && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <CompareFieldPopup
              originalContent={compareData.original}
              newContent={compareData.current}
              fieldName={compareData.fieldName}
            />
          }
          onComplete={() => setCompareData(null)}
          options={{ wide: true }}
        />
      )}

      {debugEnabled && openDebugCapture && openDebugFor && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<DebugView capture={openDebugCapture} />}
          onComplete={() => setOpenDebugFor(null)}
          options={{ wide: true, large: true }}
        />
      )}
    </div>
  );
};
