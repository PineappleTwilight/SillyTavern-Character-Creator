import { FC, useState, useEffect, useMemo } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { GenerationMode } from '../generate.js';

const globalContext = SillyTavern.getContext();

export interface Greeting {
  value: string;
  prompt: string;
}

interface AlternateGreetingsProps {
  greetings: Greeting[];
  onGreetingsChange: (newGreetings: Greeting[]) => void;
  onGenerate: (greetingIndex: number, mode?: GenerationMode, continueFrom?: string) => void;
  onUndo?: (greetingIndex: number) => void;
  canUndo?: (greetingIndex: number) => boolean;
  onCompare: (greetingIndex: number) => void;
  onShowDebug?: (fieldId: string) => void;
  isGenerating: boolean;
}

const greetingFieldId = (index: number) => `alternate_greetings_${index + 1}`;

export const AlternateGreetings: FC<AlternateGreetingsProps> = ({
  greetings,
  onGreetingsChange,
  onGenerate,
  onUndo,
  canUndo,
  onCompare,
  onShowDebug,
  isGenerating,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    if (activeTabIndex >= greetings.length && greetings.length > 0) {
      setActiveTabIndex(greetings.length - 1);
    } else if (greetings.length === 0) {
      setActiveTabIndex(0);
    }
  }, [greetings, activeTabIndex]);

  const activeGreeting = greetings[activeTabIndex];
  const activeCharCount = useMemo(() => activeGreeting?.value.length ?? 0, [activeGreeting?.value]);

  const handleAddGreeting = () => {
    const newGreetings = [...greetings, { value: '', prompt: '' }];
    onGreetingsChange(newGreetings);
    setActiveTabIndex(newGreetings.length - 1);
  };

  const handleDeleteGreeting = async () => {
    if (greetings.length === 0) return;
    const confirm = await globalContext.Popup.show.confirm('Delete Greeting', 'Are you sure?');
    if (confirm) {
      const newGreetings = greetings.filter((_, index) => index !== activeTabIndex);
      onGreetingsChange(newGreetings);
    }
  };

  const handleGreetingChange = (index: number, field: 'value' | 'prompt', newContent: string) => {
    const newGreetings = [...greetings];
    newGreetings[index][field] = newContent;
    onGreetingsChange(newGreetings);
  };

  return (
    <div className="character-field alternate-greetings-field">
      <div className="character-field-label-row">
        <label>Alternate Greetings</label>
        <span className="character-field-char-count" title="Character count">
          {greetings.length > 0 ? `${activeCharCount} ch` : ''}
        </span>
      </div>
      <div className="crec-greetings-bar">
        <div className="alternate-greetings-tabs">
          {greetings.map((_, index) => (
            <STButton
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`menu_button ${index === activeTabIndex ? 'active' : ''}`}
            >
              Greeting {index + 1}
            </STButton>
          ))}
        </div>
        <STButton onClick={handleAddGreeting} title="Add a new alternate greeting">
          <i className="fa-solid fa-plus"></i> Add
        </STButton>
      </div>

      {greetings.length === 0 ? (
        <p className="subtle">No alternate greetings defined. Click "Add" to create one.</p>
      ) : (
        <div className="field-container crec-greeting-container">
          <div style={{ flexGrow: 1 }}>
            <textarea
              className="text_pole crec-field-textarea"
              value={activeGreeting?.value ?? ''}
              onChange={(e) => handleGreetingChange(activeTabIndex, 'value', e.target.value)}
              rows={8}
              placeholder="Enter greeting content…"
            />
            <div className="field-prompt-container crec-greeting-prompt">
              <div className="field-prompt-label">Field-specific prompt</div>
              <textarea
                className="text_pole crec-field-textarea crec-field-prompt-textarea"
                value={activeGreeting?.prompt ?? ''}
                onChange={(e) => handleGreetingChange(activeTabIndex, 'prompt', e.target.value)}
                rows={2}
                placeholder="Enter specific prompt for this greeting…"
              />
            </div>
          </div>
          <div className="field-actions">
            {(!activeGreeting?.value || activeGreeting.value.trim().length === 0) ? (
              <STButton
                onClick={() => onGenerate(activeTabIndex, 'generate')}
                disabled={isGenerating}
                title="Generate greeting from scratch"
                className="crec-btn-generate-primary"
              >
                {isGenerating ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  <>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span className="crec-btn-label">Generate</span>
                  </>
                )}
              </STButton>
            ) : (
              <>
                <STButton
                  onClick={() => onGenerate(activeTabIndex, 'continue', activeGreeting.value)}
                  disabled={isGenerating}
                  title="Continue from current content (append)"
                  className="crec-btn-secondary"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  <span className="crec-btn-label">Continue</span>
                </STButton>
                <STButton
                  onClick={() => onGenerate(activeTabIndex, 'revise', activeGreeting.value)}
                  disabled={isGenerating}
                  title="Revise using the field-specific prompt below as your feedback direction"
                  className="crec-btn-secondary"
                >
                  <i className="fa-solid fa-pen"></i>
                  <span className="crec-btn-label">Revise</span>
                </STButton>
                <STButton
                  onClick={() => onGenerate(activeTabIndex, 'improve', activeGreeting.value)}
                  disabled={isGenerating}
                  title="Improve quality, clarity, and consistency without changing intent"
                  className="crec-btn-secondary"
                >
                  <i className="fa-solid fa-wand-sparkles"></i>
                  <span className="crec-btn-label">Improve</span>
                </STButton>
              </>
            )}
            {onUndo && canUndo?.(activeTabIndex) && (
              <STButton
                onClick={() => onUndo(activeTabIndex)}
                disabled={isGenerating}
                title="Undo last AI generation (restore previous content)"
                className="crec-btn-undo"
              >
                <i className="fa-solid fa-rotate-left"></i>
              </STButton>
            )}
            <STButton
              onClick={() => handleGreetingChange(activeTabIndex, 'value', '')}
              disabled={isGenerating}
              title="Clear greeting"
            >
              <i className="fa-solid fa-eraser"></i>
            </STButton>
            <STButton onClick={() => onCompare(activeTabIndex)} disabled={isGenerating} title="Compare greeting">
              <i className="fa-solid fa-code-compare"></i>
            </STButton>
            {onShowDebug && (
              <STButton
                onClick={() => onShowDebug(greetingFieldId(activeTabIndex))}
                disabled={isGenerating}
                title="View debug (last prompt + response)"
              >
                <i className="fa-solid fa-bug"></i>
              </STButton>
            )}
            <STButton
              onClick={handleDeleteGreeting}
              disabled={isGenerating}
              title="Delete greeting"
              className="danger_button"
            >
              <i className="fa-solid fa-trash-can"></i>
            </STButton>
          </div>
        </div>
      )}
    </div>
  );
};
