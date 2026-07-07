import { buildPrompt, BuildPromptOptions, Message } from 'sillytavern-utils-lib';
import { parseResponse, getPrefilled } from './parsers.js';
import { ExtractedData } from 'sillytavern-utils-lib/types';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { name1, st_echo } from 'sillytavern-utils-lib/config';
import { MessageRole, OutputFormat, settingsManager } from './settings.js';
import { DEFAULT_SETTINGS } from './settings.js';
import { DEFAULT_FIELD_MAX_RESPONSE_TOKENS, resolveMaxResponseTokens } from './field-tokens.js';

import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';

export const globalContext = SillyTavern.getContext();

export type CharacterFieldName = 'name' | 'description' | 'personality' | 'scenario' | 'first_mes' | 'mes_example';

export const CHARACTER_FIELDS: CharacterFieldName[] = [
  'name',
  'description',
  'personality',
  'scenario',
  'first_mes',
  'mes_example',
];

export const CHARACTER_LABELS: Record<CharacterFieldName, string> = {
  name: 'Name',
  description: 'Description',
  personality: 'Personality',
  scenario: 'Scenario',
  first_mes: 'First Message',
  mes_example: 'Example Dialogue',
};

export const FIELD_GUIDANCE: Record<string, string> = {
  name: 'A short, evocative character name. Aim for 2-6 words. Strong example: "Kaelen, the Whisperwood Scout". Weak example: "Xy\'zth\'gor" (hard to spell/pronounce).',
  description:
    'A single concise paragraph (~200-350 words / ~300 tokens) blending appearance, demeanor, and one memorable quirk. Strong example: "A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves."',
  personality:
    'Direct, declarative statements about motivations, fears, moral alignment, behavioral traits. No contradictions. ~200-400 words / ~350 tokens. Strong example: "A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city\'s greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words."',
  scenario:
    'Sets the scene in ~150-300 words / ~250 tokens: where, when, what is happening, and the initial {{char}}/{{user}} relationship. Strong example: "The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a \'console cowboy,\' a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job."',
  first_mes:
    "The character's opening line. ~150-400 words / ~350 tokens. Open with a physical action, include dialogue that reveals personality, end with a hook that prompts {{user}}'s response. Use {{char}} and {{user}}. Strong example: '*{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn\'t meet {{user}}\'s eyes, instead focusing on the condensation on his glass.* \"They\'re just questions. It\'s a test, designed to provoke an emotional response. Shall we continue?\"'",
  mes_example:
    'A 2-3 turn style guide (~300-600 words / ~500 tokens) showing how the character speaks and acts. Separate example chunks with a `<START>` line. Use {{user}} and {{char}}. Mix *asterisk actions* with dialogue. Strong example: `<START>\\n{{user}}: "What makes you think your plan will work?"\\n{{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."\\n\\n{{user}}: "I\'m not sure I can do this."\\n{{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}\'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let\'s protect it together."`',
};

export { DEFAULT_FIELD_MAX_RESPONSE_TOKENS, resolveMaxResponseTokens };


export interface CharacterField {
  prompt: string;
  value: string;
  label: string;
}

export interface Session {
  selectedCharacterIndexes: string[];
  selectedWorldNames: string[];
  fields: Record<string, CharacterField>;
  draftFields: Record<string, CharacterField>;
  lastLoadedCharacterId: string;
}

export type PromptSettings = typeof DEFAULT_SETTINGS.prompts;

export interface DebugCapture {
  targetField: string;
  outputFormat: OutputFormat;
  continueFrom?: string;
  generationMode?: GenerationMode;
  messages: { role: MessageRole; content: string }[];
  rawResponse: string;
  parsedContent: string;
  startedAt: string;
  finishedAt: string;
  profileId: string;
}

export type GenerationMode = 'generate' | 'continue' | 'revise' | 'improve';

export interface RunCharacterFieldGenerationParams {
  profileId: string;
  userPrompt: string;
  buildPromptOptions: BuildPromptOptions;
  continueFrom?: string;
  generationMode?: GenerationMode;
  existingContent?: string;
  session: Session;
  allCharacters: Character[];
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  promptSettings: Partial<PromptSettings>;
  formatDescription: {
    content: string;
  };
  mainContextList: {
    promptName: string;
    role: MessageRole;
  }[];
  includeUserMacro: boolean;
  maxResponseToken: number;
  fieldMaxResponseTokens?: Record<string, number>;
  useWorldInfoActivationScan: boolean;
  targetField: CharacterFieldName | string;
  outputFormat: OutputFormat;
}

export interface RunCharacterFieldGenerationResult {
  content: string;
  debug: DebugCapture | null;
}

export async function runCharacterFieldGeneration({
  profileId,
  userPrompt,
  buildPromptOptions,
  continueFrom,
  generationMode = 'generate',
  existingContent,
  session,
  allCharacters,
  entriesGroupByWorldName,
  promptSettings,
  formatDescription,
  mainContextList,
  includeUserMacro,
  maxResponseToken,
  fieldMaxResponseTokens,
  useWorldInfoActivationScan,
  targetField,
  outputFormat,
}: RunCharacterFieldGenerationParams): Promise<RunCharacterFieldGenerationResult> {
  if (!profileId) {
    throw new Error('No connection profile selected.');
  }
  const profile = globalContext.extensionSettings.connectionManager?.profiles?.find((p: any) => p.id === profileId);
  if (!profile) {
    throw new Error(`Connection profile with ID "${profileId}" not found.`);
  }

  const selectedApi = profile.api ? globalContext.CONNECT_API_MAP[profile.api].selected : undefined;
  if (!selectedApi) {
    throw new Error(`Could not determine API for profile "${profile.name}".`);
  }

  const resolvedMaxResponseTokens = resolveMaxResponseTokens(
    targetField,
    maxResponseToken,
    fieldMaxResponseTokens,
  );

  const templateData: Record<string, any> = {};

  templateData['char'] = session.fields.name.value ?? '{{char}}';
  templateData['user'] = includeUserMacro && name1 ? name1 : '{{user}}';
  // Bake the actual persona description so {{persona}} in user/field prompts
  // resolves here. Deferring to substituteParams downstream would leak persona
  // text even when persona context is OFF. When disabled, leave the macro intact
  // so ST replacement yields empty (no-op).
  const personaDescription = includeUserMacro ? ((globalContext as any).power_user?.persona_description as string | undefined) : undefined;
  templateData['persona'] = personaDescription && personaDescription.trim() ? personaDescription : '{{persona}}';

  templateData['targetField'] = targetField;
  templateData['fieldGuidance'] =
    FIELD_GUIDANCE[targetField] ?? 'No specific guidance for this field. Use the surrounding context.';
  templateData['userInstructions'] = Handlebars.compile(userPrompt.trim(), { noEscape: true })(templateData);
  templateData['fieldSpecificInstructions'] = Handlebars.compile(
    session.draftFields[targetField]?.prompt ?? session.fields[targetField as CharacterFieldName]?.prompt,
    { noEscape: true },
  )({
    ...templateData,
    char: targetField === 'mes_example' ? '{{char}}' : templateData.char,
    user: targetField === 'mes_example' ? '{{user}}' : templateData.user,
  });
  templateData['activeFormatInstructions'] = Handlebars.compile(formatDescription.content, { noEscape: true })(
    templateData,
  );

  // Add Definitions of Selected Characters (if enabled and characters selected)
  {
    const charactersData: Array<Character> = [];
    session.selectedCharacterIndexes.forEach((charIndex) => {
      const charIndexNumber = parseInt(charIndex);
      const char = allCharacters[charIndexNumber];
      if (char) {
        charactersData.push(char);
      }
    });

    templateData['characters'] = charactersData;
  }

  // Add Definitions of Selected Lorebooks (World Info)
  {
    const lorebooksData: Record<string, WIEntry[]> = {};

    // Resolve the set of activated WI uids, when the user opted into the activation
    // scan AND the running ST exposes checkWorldInfo. Falls back to "send every
    // enabled entry of the user-selected worlds" (the legacy behavior) on: scan
    // disabled, ST API missing, scan threw, or scan returned no activations.
    let activatedUids: Set<number> | null = null;
    if (useWorldInfoActivationScan) {
      try {
        const checkWorldInfo = (globalContext as any).checkWorldInfo;
        if (typeof checkWorldInfo === 'function') {
          const chat = globalContext.chat ?? [];
          const maxContext = buildPromptOptions.maxContext ?? 16384;
          const result = await checkWorldInfo(chat, maxContext, true);
          const activatedEntries =
            result && (result.entries ?? result.value ?? result.activatedEntries ?? result);
          if (activatedEntries && typeof activatedEntries === 'object') {
            const uids: number[] = [];
            const collect = (e: any) => {
              if (e && typeof e.uid === 'number') uids.push(e.uid);
            };
            if (Array.isArray(activatedEntries)) {
              activatedEntries.forEach(collect);
            } else if (typeof activatedEntries === 'object') {
              if (Array.isArray(activatedEntries.entries)) {
                activatedEntries.entries.forEach(collect);
              } else {
                Object.values(activatedEntries).forEach((e: any) => {
                  if (Array.isArray(e)) e.forEach(collect);
                  else collect(e);
                });
              }
            }
            if (uids.length > 0) activatedUids = new Set(uids);
          }
        } else {
          st_echo(
            'info',
            '[Character Creator] World Info activation scan requested but this SillyTavern version does not expose checkWorldInfo(); sending all enabled entries of selected lorebooks instead.',
          );
        }
      } catch (err: any) {
        console.error('[Character Creator] WI activation scan failed; falling back to all-enabled-entries:', err);
        activatedUids = null;
      }
    }

    // Two-pass: include a lorebook iff it has any enabled entry, then strip the
    // disabled entries themselves. When the activation scan produced an
    // activatedUids set, additionally filter to only entries whose uid activated.
    Object.entries(entriesGroupByWorldName)
      .filter(
        ([worldName, entries]) =>
          entries.length > 0 &&
          session.selectedWorldNames.includes(worldName) &&
          entries.some((entry) => !entry.disable),
      )
      .forEach(([worldName, entries]) => {
        let activeEntries = entries.filter((entry) => !entry.disable);
        if (activatedUids !== null) {
          activeEntries = activeEntries.filter((entry) => activatedUids!.has(entry.uid));
        }
        if (activeEntries.length > 0) {
          lorebooksData[worldName] = activeEntries;
        }
      });

    templateData['lorebooks'] = lorebooksData;
  }

  // Add Current Field Values (if enabled)
  {
    // Separate core fields, alternate greetings, and draft fields for template context
    const coreFields: Record<string, string> = {};
    const alternateGreetingsFields: Record<string, string> = {};
    const draftFields: Record<string, string> = {};

    const isTargetAlternateGreeting = targetField.startsWith('alternate_greetings_');
    const dontSendOtherGreetings = settingsManager.getSettings().contextToSend.dontSendOtherGreetings;

    Object.entries(session.fields).forEach(([fieldName, field]) => {
      // There are 2 case.
      // 1. If the target is non-alternate greeting, we send all fields except alternate greetings.
      // 2. If the target is alternate greeting, we send only the target field and skip all other alternate greetings. We also skip the first message field in this case.
      let shouldSkip = false;
      if (dontSendOtherGreetings) {
        const isAlternateGreeting = fieldName.startsWith('alternate_greetings_');
        if (isTargetAlternateGreeting) {
          // If the target is an alternate greeting, skip all other alternate greetings and first message
          shouldSkip = (isAlternateGreeting && fieldName !== targetField) || fieldName === 'first_mes';
        } else {
          // If the target is not an alternate greeting, skip all alternate greetings and first message
          shouldSkip = isAlternateGreeting;
        }
      }

      if (!shouldSkip) {
        const compiledValue = Handlebars.compile(field.value, { noEscape: true })({
          ...templateData,

          char: fieldName === 'mes_example' ? '{{char}}' : templateData.char,
          user: fieldName === 'mes_example' ? '{{user}}' : templateData.user,
        });

        if (CHARACTER_FIELDS.includes(fieldName as CharacterFieldName)) {
          coreFields[field.label] = compiledValue;
        } else if (fieldName.startsWith('alternate_greetings_')) {
          alternateGreetingsFields[fieldName] = compiledValue;
        }
      }
    });

    Object.entries(session.draftFields || {}).forEach(([_fieldName, field]) => {
      draftFields[field.label] = Handlebars.compile(field.value, { noEscape: true })(templateData);
    });

    const allFields: Record<string, any> = {};
    if (Object.keys(coreFields).length > 0) {
      allFields.core = coreFields;
    }
    if (Object.keys(alternateGreetingsFields).length > 0) {
      allFields.alternate_greetings = alternateGreetingsFields;
    }
    if (Object.keys(draftFields).length > 0) {
      allFields.draft = draftFields;
    }

    templateData['fields'] = allFields;
  }

  const messages: Message[] = [];
  const sentMessages: { role: MessageRole; content: string }[] = [];
  const existing = existingContent ?? continueFrom;
  const effectiveMode: GenerationMode = continueFrom && generationMode === 'generate' ? 'continue' : generationMode;
  const isContinueMode = effectiveMode === 'continue' && !!existing;
  {
    for (const mainContext of mainContextList) {
      // Chat history is exception, since it is not a template
      if (mainContext.promptName === 'chatHistory') {
        const prompt = await buildPrompt(selectedApi, buildPromptOptions);
        if (prompt.warnings && prompt.warnings.length > 0) {
          for (const warning of prompt.warnings) {
            st_echo('warning', warning);
          }
        }
        messages.push(...prompt.result);
        sentMessages.push(...prompt.result.map((m) => ({ role: m.role as MessageRole, content: m.content as string })));
        continue;
      }

      // Only stDescription needs char/user swapped to {{char}}/{{user}} macros
      // (so substituteParams can resolve them next). Other blocks reuse templateData
      // directly — skipping the per-iteration deep clone avoids duplicating large
      // character/lorebook payloads on every block.
      const needsMacroSwap = mainContext.promptName === 'stDescription';
      const localTemplateData = needsMacroSwap
        ? { ...templateData, char: '{{char}}', user: '{{user}}' }
        : templateData;

      const prompt = promptSettings[mainContext.promptName];
      if (!prompt) {
        continue;
      }
      const message: Message = {
        role: mainContext.role,
        content: Handlebars.compile(prompt.content, { noEscape: true })(localTemplateData),
      };
      message.content = message.content.replaceAll('{{user}}', '[[[crec_veryUniqueUserPlaceHolder]]]');
      message.content = message.content.replaceAll('{{char}}', '[[[crec_veryUniqueCharPlaceHolder]]]');
      message.content = globalContext.substituteParams(message.content);
      message.content = message.content.replaceAll('[[[crec_veryUniqueUserPlaceHolder]]]', '{{user}}');
      message.content = message.content.replaceAll('[[[crec_veryUniqueCharPlaceHolder]]]', '{{char}}');
      if (message.content) {
        messages.push(message);
        sentMessages.push({ role: message.role as MessageRole, content: message.content });
      }
    }

    if (isContinueMode && existing) {
      const prefilled = getPrefilled(existing, outputFormat);
      messages.push({
        role: 'assistant',
        content: prefilled,
      });
      sentMessages.push({ role: 'assistant', content: prefilled });
    } else if ((effectiveMode === 'revise' || effectiveMode === 'improve') && existing) {
      const reviseInstruction =
        effectiveMode === 'revise'
          ? (templateData['fieldSpecificInstructions'] as string | undefined)?.trim()
          : '';
      const directive =
        effectiveMode === 'improve'
          ? 'Rewrite the existing content below to improve its quality, clarity, internal consistency, and stylistic polish. Preserve the original intent, facts, and character voice. Do not introduce new facts, traits, or relationships that are not already implied. Return only the rewritten content, in the same output format as the existing content.'
          : `Revise the existing content below per the user's direction. Stay faithful to intent and facts already established; only change what the feedback asks for. Return only the revised content, in the same output format as the existing content.\n\nUser's revision direction:\n${reviseInstruction || '(no specific direction given — clean up and tighten only)'}`;
      messages.push({
        role: 'user',
        content: `${directive}\n\n--- EXISTING CONTENT ---\n${existing}\n--- END EXISTING CONTENT ---`,
      });
      sentMessages.push({
        role: 'user',
        content: `${directive}\n\n--- EXISTING CONTENT ---\n${existing}\n--- END EXISTING CONTENT ---`,
      });
    }
  }

  const startedAt = new Date().toISOString();
  const response = (await globalContext.ConnectionManagerRequestService.sendRequest(
    profileId,
    messages,
    resolvedMaxResponseTokens,
  )) as ExtractedData;
  const finishedAt = new Date().toISOString();

  // For "continue" requests, the model only returns the new part.
  // We must combine the start of the structure with the model's completion to parse it correctly.
  const contentToParse = isContinueMode && existing ? getPrefilled(existing, outputFormat) + response.content : response.content;

  const result = parseResponse(contentToParse, outputFormat, {
    onRecovery: (reason) => {
      st_echo('warning', `[Character Creator] ${reason}. Open the Debug View for this field to inspect the raw response.`);
    },
  });

  let finalContent: string;
  if (typeof result === 'string') {
    finalContent = result;
  } else if (typeof result === 'object' && result !== null) {
    // For single-field generation, extract the string from the object.
    if ('response' in result && typeof result.response === 'string') {
      finalContent = result.response;
    } else {
      const firstValue = Object.values(result)[0];
      finalContent = firstValue ? String(firstValue) : '';
    }
  } else {
    finalContent = '';
  }

  const settings = settingsManager.getSettings();
  const debug: DebugCapture | null = settings.showDebugView
    ? {
        targetField,
        outputFormat,
        continueFrom,
        generationMode: effectiveMode,
        messages: sentMessages,
        rawResponse: response.content,
        parsedContent: finalContent,
        startedAt,
        finishedAt,
        profileId,
      }
    : null;

  return { content: finalContent, debug };
}
