import { describe, test, expect, vi } from 'vitest';
import { parseResponse, getPrefilled } from '../parsers.js';

describe('parseResponse with JSON format', () => {
  test('detailed code block', () => {
    const input = '{"response": "test message"}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('parses valid JSON with object response', () => {
    const input = '{"response": {"message": "test message"}}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('extracts content from code blocks', () => {
    const input = '```\n{"response": "test message"}\n```';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('extracts JSON from the last fenced code block', () => {
    const input = [
      '<think>',
      'I should respond like this:',
      '```json',
      '{"response": "Example Name"}',
      '```',
      '</think>',
      '```json',
      '{"response": "Mr Nice Guy"}',
      '```',
    ].join('\n');

    expect(parseResponse(input, 'json')).toBe('Mr Nice Guy');
  });

  test('throws error on invalid JSON', () => {
    const input = '{"response": invalid}';
    expect(() => parseResponse(input, 'json')).toThrow('Model response is not valid JSON');
  });

  test('parse half-valid JSON', () => {
    const input = '{"message": "test"}';
    expect(parseResponse(input, 'json')).toBe('test');

    const input2 = '{"response": 123}';
    expect(parseResponse(input2, 'json')).toBe('123');
  });

  test('trims whitespace from response', () => {
    const input = '{"response": "  test message  "}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('detailed code block', () => {
    const input = `\`\`\`json\n{\n  \"response\": \"*Nolan crashes through the front door, the wood frame splintering around him. Debbie is frozen, halfway to the door, her eyes wide with fear. Nolan’s face is a mask of cold fury as he stalks towards her.* \\\"Debbie,\\\" *he growls, his voice dangerously low.* \\\"Where is he?\\\" *He strides closer, his shadow engulfing her.* \\\"Don't lie to me, Deborah. You know exactly who I'm asking about.\\\"\\n\\n*Debbie shrinks back, clutching her chest.* \\\"Nolan… please. You can't just barge in here like this! Mark isn't here.\\\"\\n\\n*Nolan scoffs, grabbing her arm with brutal force.* \\\"Don't play coy with me. Is he with that… human? Are they conspiring against me?\\\" *He squeezes her arm tighter, his grip threatening to break bone.* \\\"Tell me the truth, or you'll regret it.\\\"\\n\\n*Debbie winces in pain, tears welling in her eyes.* \\\"He's… he's out. On patrol. Please, Nolan, you're hurting me!\\\" *Nolan releases her arm abruptly, but his gaze remains fixed and menacing.* \\\"Patrol? Or is he building a pathetic little life with humans?\\\" *He pauses, his expression shifting slightly, a flicker of something unreadable in his eyes.* \\\"I need to see what he has with {{user}}, I can not allow him to grow attached to the human. She is a distraction Debbie!\\\" *He grabs Debbie's shoulders with a strength that belies her fragility.*\"\n}\n\`\`\``;

    expect(parseResponse(input, 'json')).toContain(
      'Nolan crashes through the front door, the wood frame splintering around him.',
    );
  });
});

describe('parseResponse with XML format', () => {
  test('parses basic XML response', () => {
    const input = '<response>test message</response>';
    expect(parseResponse(input, 'xml')).toBe('test message');
  });

  test('parses XML with #text content', () => {
    const input = '<response text="123">#text content</response>';
    expect(parseResponse(input, 'xml')).toBe('#text content');
  });

  test('parses XML with different root structures', () => {
    const input = '<root><response>nested message</response></root>';
    expect(parseResponse(input, 'xml')).toBe('nested message');
  });

  test('extracts content from code blocks', () => {
    const input = '```xml\n<response>test message</response>\n```';
    expect(parseResponse(input, 'xml')).toBe('test message');

    const input2 = '```\n<response>test message</response>\n```';
    expect(parseResponse(input2, 'xml')).toBe('test message');
  });

  test('extracts XML from the last fenced code block', () => {
    const input = [
      '<think>',
      'The answer should look like this:',
      '```xml',
      '<response>Example Name</response>',
      '```',
      '</think>',
      '```xml',
      '<response>Mr Nice Guy</response>',
      '```',
    ].join('\n');

    expect(parseResponse(input, 'xml')).toBe('Mr Nice Guy');
  });

  test('Parse half-valid XML', () => {
    const input = '<response>test</wrongtag>';
    expect(parseResponse(input, 'xml')).toBe('test');

    const input2 = '<data>test</data>';
    expect(parseResponse(input2, 'xml')).toBe('test');
  });

  test('preserves a single <START> example-dialogue marker in XML format', () => {
    // given an XML response wrapping a mes_example with a single <START> chunk,
    // when parsed, the <START> marker must survive intact (not be eaten as an XML tag)
    const input =
      '<response><START>\n{{user}}: Hi there.\n{{char}}: *waves* Hello.</response>';
    expect(parseResponse(input, 'xml')).toBe(
      '<START>\n{{user}}: Hi there.\n{{char}}: *waves* Hello.',
    );
  });

  test('preserves multiple <START> chunks in XML format without losing content', () => {
    // given an XML response with multiple <START> example chunks,
    // when parsed, both chunks AND both markers must survive (the old parser silently dropped the first chunk)
    const input =
      '<response><START>\n{{user}}: First exchange.\n{{char}}: Reply one.\n\n<START>\n{{user}}: Second exchange.\n{{char}}: Reply two.</response>';
    expect(parseResponse(input, 'xml')).toBe(
      '<START>\n{{user}}: First exchange.\n{{char}}: Reply one.\n\n<START>\n{{user}}: Second exchange.\n{{char}}: Reply two.',
    );
  });

  test('preserves <START> markers in JSON format responses', () => {
    // given a JSON response with a <START> marker in the value,
    // when parsed, the marker survives (JSON doesn't need pack/unpack but should still work)
    const input = '{"response": "<START>\n{{user}}: Hi"}';
    expect(parseResponse(input, 'json')).toBe('<START>\n{{user}}: Hi');
  });

  test('preserves <START> markers in plaintext (none) format', () => {
    const input = '<START>\n{{user}}: Hi';
    expect(parseResponse(input, 'none')).toBe('<START>\n{{user}}: Hi');
  });

  test('preserves <START> markers extracted from XML code blocks', () => {
    // given a code-fenced XML response containing <START>,
    // when parsed, the marker survives (pack/unpack runs on the cleaned code-block content)
    const input = '```xml\n<response><START>\n{{user}}: Hi</response>\n```';
    expect(parseResponse(input, 'xml')).toBe('<START>\n{{user}}: Hi');
  });
});

describe('parseResponse with plaintext (none) format', () => {
  test('returns basic plaintext', () => {
    const input = 'This is a test message.';
    expect(parseResponse(input, 'none')).toBe('This is a test message.');
  });

  test('trims whitespace from plaintext', () => {
    const input = '  This has whitespace.  ';
    expect(parseResponse(input, 'none')).toBe('This has whitespace.');
  });

  test('extracts content from code blocks', () => {
    const input = '```\nThis is inside a code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a code block.');
  });

  test('extracts content from code blocks with language identifier', () => {
    const input = '```text\nThis is inside a text code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a text code block.');
  });

  test('handles empty input', () => {
    const input = '';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only whitespace', () => {
    const input = '   ';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only code block markers', () => {
    const input = '```\n```';
    expect(parseResponse(input, 'none')).toBe('');
  });
});

describe('parseResponse onRecovery callback', () => {
  test('does not call onRecovery on clean JSON parse', () => {
    const onRecovery = vi.fn();
    parseResponse('{"response": "hello"}', 'json', { onRecovery });
    expect(onRecovery).not.toHaveBeenCalled();
  });

  test('does not call onRecovery on clean XML parse', () => {
    const onRecovery = vi.fn();
    parseResponse('<response>hello</response>', 'xml', { onRecovery });
    expect(onRecovery).not.toHaveBeenCalled();
  });

  test('calls onRecovery when XML recovery falls back to regex', () => {
    const onRecovery = vi.fn();
    // given a <response> tag followed by an unterminated second tag, the lenient parser throws and regex recovery kicks in
    const result = parseResponse('<response>abc<', 'xml', { onRecovery });
    expect(onRecovery).toHaveBeenCalledTimes(1);
    expect(onRecovery.mock.calls[0][0]).toMatch(/XML response was malformed/);
    expect(result).toBe('abc<');
  });

  test('calls onRecovery when JSON recovery falls back to regex', () => {
    const onRecovery = vi.fn();
    // given an opening of a JSON response with no closing, strict parse fails and regex recovery kicks in
    const result = parseResponse('"response": "partial content here', 'json', { onRecovery });
    expect(onRecovery).toHaveBeenCalledTimes(1);
    expect(onRecovery.mock.calls[0][0]).toMatch(/JSON response was malformed/);
    expect(result).toBe('partial content here');
  });

  test('still throws when no recovery is possible', () => {
    const onRecovery = vi.fn();
    // given garbage that matches neither XML nor JSON regex fallbacks, the schema-less no-recovery path throws
    expect(() => parseResponse('   there is no parseable structure here   ', 'json', { onRecovery })).toThrow(
      'Model response is not valid JSON',
    );
  });
});

describe('getPrefilled', () => {
  test('XML format wraps content in opening response tag', () => {
    expect(getPrefilled('Hello world', 'xml')).toBe('<response>Hello world');
  });

  test('XML format trims surrounding whitespace', () => {
    expect(getPrefilled('  Hello  ', 'xml')).toBe('<response>Hello');
  });

  test('none format returns trimmed content', () => {
    expect(getPrefilled('  raw text  ', 'none')).toBe('raw text');
  });

  test('JSON format opens the response object and value string', () => {
    expect(getPrefilled('Simple', 'json')).toBe('{\n  "response": "Simple');
  });

  test('JSON format escapes double quotes in existing content', () => {
    // given content with embedded quotes, when prefilled the model sees \" so the completed JSON stays valid
    expect(getPrefilled('She said "hi"', 'json')).toBe('{\n  "response": "She said \\"hi\\"');
  });

  test('JSON format escapes backslashes before other escapes (order matters)', () => {
    // given a trailing backslash, when not escaped first it would escape the model's closing quote and break JSON
    expect(getPrefilled('path\\', 'json')).toBe('{\n  "response": "path\\\\');
    // given backslash AND quote together, when escaped, backslash is doubled first then quote is escaped
    expect(getPrefilled('a\\"b', 'json')).toBe('{\n  "response": "a\\\\\\"b');
  });

  test('JSON format escapes newlines as \\n', () => {
    expect(getPrefilled('line1\nline2', 'json')).toBe('{\n  "response": "line1\\nline2');
  });

  test('JSON format escapes carriage returns and tabs', () => {
    expect(getPrefilled('a\rb\tc', 'json')).toBe('{\n  "response": "a\\rb\\tc');
  });

  test('JSON format escapes other control characters as \\uXXXX', () => {
    // given U+0007 (bell) and U+001B (escape), these are valid in source text but invalid unescaped per RFC 8259 §7
    expect(getPrefilled('a\u0007b\u001Bc', 'json')).toBe('{\n  "response": "a\\u0007b\\u001bc');
  });

  test('JSON format escapes mixed content with all special characters', () => {
    const content = 'He said "hi",\nthen left\t\\gone.';
    expect(getPrefilled(content, 'json')).toBe(
      '{\n  "response": "He said \\"hi\\",\\nthen left\\t\\\\gone.',
    );
  });

  test('throws on unsupported format', () => {
    expect(() => getPrefilled('x', 'yaml' as any)).toThrow('Unsupported format specified: yaml');
  });
});
