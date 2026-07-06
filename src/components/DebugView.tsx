import { FC, useState, useMemo } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { DebugCapture } from '../generate.js';

interface DebugViewProps {
  capture: DebugCapture;
  showInline?: boolean;
}

const ROLE_LABELS: Record<string, string> = {
  system: 'SYSTEM',
  user: 'USER',
  assistant: 'ASSISTANT',
};

const emptyIfZero = (n: number) => (n <= 0 ? '' : n.toLocaleString());

function roughTokens(text: string): number {
  return Math.max(0, Math.ceil(text.length / 4));
}

function copyToClipboard(text: string) {
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
}

export const DebugView: FC<DebugViewProps> = ({ capture }) => {
  const [activeSection, setActiveSection] = useState<'prompt' | 'response'>('prompt');
  const [expandedMessages, setExpandedMessages] = useState<Record<string, boolean>>({});

  const totalInputTokens = useMemo(
    () => roughTokens(capture.messages.reduce((acc, m) => acc + m.content, '')),
    [capture.messages],
  );

  const responseTokens = useMemo(() => roughTokens(capture.rawResponse), [capture.rawResponse]);

  const elapsedMs = useMemo(() => {
    const start = new Date(capture.startedAt).getTime();
    const end = new Date(capture.finishedAt).getTime();
    return Math.max(0, end - start);
  }, [capture.startedAt, capture.finishedAt]);

  const copyPromptJson = () => {
    copyToClipboard(JSON.stringify(capture.messages, null, 2));
  };

  const copyPromptPlain = () => {
    const text = capture.messages
      .map((m) => `=== ${ROLE_LABELS[m.role] || m.role.toUpperCase()} ===\n${m.content}`)
      .join('\n\n');
    copyToClipboard(text);
  };

  const copyResponse = () => {
    copyToClipboard(capture.rawResponse);
  };

  const toggleMessage = (index: number) => setExpandedMessages((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <div className="crec-debug">
      <div className="crec-debug-header">
        <div className="crec-debug-meta">
          <span className="crec-debug-meta-item" title="Target field">
            <i className="fa-solid fa-bullseye" /> {capture.targetField}
          </span>
          <span className="crec-debug-meta-item" title="Output format">
            <i className="fa-solid fa-code" /> {capture.outputFormat}
          </span>
          {capture.continueFrom && (
            <span className="crec-debug-meta-item" title="Continue from">
              <i className="fa-solid fa-arrow-right" /> continue
            </span>
          )}
          <span className="crec-debug-meta-item" title="Input tokens (~chars/4)">
            <i className="fa-solid fa-sign-in-alt" /> in ~{emptyIfZero(totalInputTokens)}
          </span>
          <span className="crec-debug-meta-item" title="Output tokens (~chars/4)">
            <i className="fa-solid fa-sign-out-alt" /> out ~{emptyIfZero(responseTokens)}
          </span>
          <span className="crec-debug-meta-item" title="Elapsed time">
            <i className="fa-solid fa-stopwatch" /> {elapsedMs}ms
          </span>
        </div>
        <div className="crec-debug-tabs">
          <button
            type="button"
            className={`menu_button ${activeSection === 'prompt' ? 'active' : ''}`}
            onClick={() => setActiveSection('prompt')}
          >
            Prompt ({capture.messages.length})
          </button>
          <button
            type="button"
            className={`menu_button ${activeSection === 'response' ? 'active' : ''}`}
            onClick={() => setActiveSection('response')}
          >
            Response
          </button>
        </div>
      </div>

      {activeSection === 'prompt' ? (
        <div className="crec-debug-section">
          <div className="crec-debug-actions">
            <STButton onClick={copyPromptPlain} title="Copy prompt as plain text">
              <i className="fa-solid fa-copy" /> Copy (text)
            </STButton>
            <STButton onClick={copyPromptJson} title="Copy prompt array as JSON">
              <i className="fa-solid fa-code" /> Copy (JSON)
            </STButton>
          </div>
          <div className="crec-debug-messages">
            {capture.messages.length === 0 ? (
              <p className="subtle" style={{ textAlign: 'center' }}>
                No prompt messages were sent.
              </p>
            ) : (
              capture.messages.map((msg, i) => {
                const expanded = expandedMessages[i] ?? true;
                const preview = msg.content.length > 300 ? `${msg.content.slice(0, 300)}…` : msg.content;
                return (
                  <div key={i} className={`crec-debug-message crec-debug-message-${msg.role}`}>
                    <div
                      className="crec-debug-message-head"
                      onClick={() => toggleMessage(i)}
                      role="button"
                      tabIndex={0}
                    >
                      <span className={`crec-debug-role crec-debug-role-${msg.role}`}>
                        {ROLE_LABELS[msg.role] || msg.role.toUpperCase()}
                      </span>
                      <span className="crec-debug-meta-item">~{emptyIfZero(roughTokens(msg.content))} tok</span>
                      <i className={`fa-solid ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    </div>
                    <pre className="crec-debug-message-body">{expanded ? msg.content : preview}</pre>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div className="crec-debug-section">
          <div className="crec-debug-actions">
            <STButton onClick={copyResponse} title="Copy the raw LLM response">
              <i className="fa-solid fa-copy" /> Copy raw response
            </STButton>
          </div>
          <div className="crec-debug-response-grid">
            <div className="crec-debug-response-pane">
              <h4>
                Raw Response <span className="subtle">({capture.rawResponse.length} chars)</span>
              </h4>
              <pre className="crec-debug-message-body">{capture.rawResponse}</pre>
            </div>
            <div className="crec-debug-response-divider" />
            <div className="crec-debug-response-pane">
              <h4>Parsed Content ({capture.parsedContent.length} chars)</h4>
              <pre className="crec-debug-message-body">{capture.parsedContent}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
