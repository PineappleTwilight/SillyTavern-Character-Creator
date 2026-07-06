import { FC, useMemo } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { useTextareaResize } from '../hooks/useTextareaResize.js';

export interface CharacterFieldProps {
  fieldId: string;
  label: string;
  value: string;
  prompt: string;
  large?: boolean;
  rows?: number;
  promptEnabled?: boolean;
  isDraft?: boolean;
  isGenerating?: boolean;
  isDebug?: boolean;
  primary?: boolean;
  onValueChange: (fieldId: string, newValue: string) => void;
  onPromptChange: (fieldId: string, newPrompt: string) => void;
  onGenerate: (fieldId: string) => void;
  onContinue: (fieldId: string) => void;
  onClear: (fieldId: string) => void;
  onCompare?: (fieldId: string) => void;
  onDelete?: (fieldId: string) => void;
  onShowDebug?: (fieldId: string) => void;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard?.writeText(text).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
    } catch {
      /* ignore */
    }
    document.body.removeChild(ta);
  });
};

export const CharacterField: FC<CharacterFieldProps> = ({
  fieldId,
  label,
  value,
  prompt,
  large = false,
  rows = 3,
  promptEnabled = true,
  isDraft = false,
  isGenerating = false,
  isDebug = false,
  primary = false,
  onValueChange,
  onPromptChange,
  onGenerate,
  onContinue,
  onClear,
  onCompare,
  onDelete,
  onShowDebug,
}) => {
  const charCount = useMemo(() => value.length, [value]);
  const canGenerate = !isGenerating;
  const textareaRef = useTextareaResize(`value:${fieldId}`);
  const promptTextareaRef = useTextareaResize(`prompt:${fieldId}`);

  return (
    <div
      className={`character-field ${isDraft ? 'draft-field' : 'core-field'} ${primary ? 'character-field-primary' : ''}`}
    >
      <div className="character-field-label-row">
        <label>
          {primary && <i className="fa-solid fa-user crec-primary-icon" aria-hidden="true" />}
          {label}
        </label>
        {isGenerating ? (
          <span className="character-field-status">
            <i className="fa-solid fa-spinner fa-spin" /> generating…
          </span>
        ) : (
          <span className="character-field-char-count" title="Character count">
            {charCount} ch
          </span>
        )}
      </div>
      <div className={`field-container ${large ? 'large-field' : ''}`}>
        <textarea
          ref={textareaRef}
          className="text_pole crec-field-textarea"
          value={value}
          onChange={(e) => onValueChange(fieldId, e.target.value)}
          rows={rows}
          placeholder={`Enter ${label.toLowerCase()}…`}
        />
        <div className="field-actions">
          <STButton onClick={() => onGenerate(fieldId)} disabled={!canGenerate} title="Generate field content">
            {isGenerating ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            )}
          </STButton>
          <STButton onClick={() => onContinue(fieldId)} disabled={!canGenerate} title="Continue from current content">
            <i className="fa-solid fa-arrow-right"></i>
          </STButton>
          <STButton onClick={() => copyToClipboard(value)} disabled={!value} title="Copy content">
            <i className="fa-solid fa-copy"></i>
          </STButton>
          <STButton onClick={() => onClear(fieldId)} disabled={!value} title="Clear field content">
            <i className="fa-solid fa-eraser"></i>
          </STButton>
          {!isDraft && onCompare && (
            <STButton onClick={() => onCompare(fieldId)} title="Compare with loaded character">
              <i className="fa-solid fa-code-compare"></i>
            </STButton>
          )}
          {isDebug && onShowDebug && (
            <STButton onClick={() => onShowDebug(fieldId)} title="View debug (last prompt + response)">
              <i className="fa-solid fa-bug"></i>
            </STButton>
          )}
          {isDraft && onDelete && (
            <STButton onClick={() => onDelete(fieldId)} title="Delete Draft Field" className="danger_button">
              <i className="fa-solid fa-trash-can"></i>
            </STButton>
          )}
        </div>
      </div>
      {promptEnabled && (
        <div className="field-prompt-container">
          <div className="field-prompt-label">Field-specific prompt</div>
          <textarea
            ref={promptTextareaRef}
            className="text_pole crec-field-textarea crec-field-prompt-textarea"
            value={prompt}
            onChange={(e) => onPromptChange(fieldId, e.target.value)}
            placeholder={`Enter additional prompt for ${label.toLowerCase()}…`}
            rows={2}
          />
        </div>
      )}
    </div>
  );
};
