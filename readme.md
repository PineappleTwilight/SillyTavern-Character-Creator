# SillyTavern Character Creator (CREC)

## Overview

A [SillyTavern](https://docs.sillytavern.app/) extension that helps you create character cards based on your ST data with LLMs using [connection profiles](https://docs.sillytavern.app/usage/core-concepts/connection-profiles/).

![popup](images/popup.png)

---

![settings](images/settings.png)

---

**If you are using a _Text Completion_ profile, make sure your profile contains API, preset, model, and instruct.**

**If you are using a _Chat Completion_ profile; API, settings, model would be enough.**

---

## Features

- **Generate individual fields** — Generate `name`, `description`, `personality`, `scenario`, `first_mes`, `mes_example`, draft fields, and alternate greetings with one click each, using your selected connection profile.
- **Generate All** — Bulk-generate every core field in a single pass, writing results into the form as it goes.
- **Continue** — Append to existing field content instead of replacing.
- **Per-field prompts** — Add field-specific instructions that apply only to that field's generation.
- **Context control** — Choose exactly what to send: ST description, user persona, selected characters, selected lorebooks, existing field content, and which chat messages to include.
- **Output formats** — Plain text, XML (`<response>`), or JSON (`{"response":"..."}`).
- **Compare with loaded character** — Visual diff between current content and the loaded character card.
- **Debug view** — Toggle a per-field debug view that captures the EXACT prompt messages (role + content) sent to the LLM and the raw response returned. Copy as plain text or JSON for bug reports and prompt tuning.
- **Import / Export** —
  - Export the assembled character card as a V3 JSON file.
  - Import a V3 JSON character card back into the form.
  - Export and re-import draft field definitions separately.
- **Save as World Info entry** — Optional setting to push the assembled card into a lorebook as a WI entry.
- **Override or save as new** — Apply edits to an existing card or save a brand new one.

## Installation

Install via the SillyTavern extension installer:

```txt
https://github.com/bmen25124/SillyTavern-Character-Creator
```

To open the CREC popup, click the extension icon:

![icon](images/icon.png)

## Demo Video

**Simple usage**

https://github.com/user-attachments/assets/4ed6fbb3-c2a4-4cdc-8692-406af9094266

**Chat with LLM**

https://github.com/user-attachments/assets/d8db5d82-fa8e-4332-97e6-43f8529b7f60

## Debug View

Enable the debug toggle in **Generation Options** (or in the extension settings panel). After enabling, every character field gets a small bug icon. Generate a field, then click the bug icon to see:

1. **Prompt** — every message sent to the LLM, with role labels (SYSTEM / USER / ASSISTANT) and approximate token counts per message and in total. Copy the prompt as plain text or as a JSON array.
2. **Response** — the raw text returned by the LLM alongside the parsed content that was inserted into the field.

This makes it easy to spot malformed outputs, debug prompt issues, and tune your prompt presets.

## FAQ

>Can I use this with my local 8B/12B RP model?

Most likely, yes. If you can't, try changing _Output Format_.

>Can you suggest a model?

Gemini models are cheap, fast, and efficient. I usually use Gemini Flash 2.0. But most models should work fine.

>What is the difference compared to alternatives?

In general, alternatives are just websites. This means you can't feed the AI with your ST character/lorebook data. They mostly use a single model. Their customization is limited.

>What is the difference compared to [chargen](https://chargen.kubes-lab.com/)?

The one thing chargen might be better is it can give better results because it uses [chargen-v2](https://huggingface.co/kubernetes-bad/chargen-v2) model that trained from character cards.  But since CROC is customizable, you can even use _chargen-v2_ on your local.

>What is the difference compared to [pookies](https://pookies.ai/create)?

There are 2 advantages of pookie. 1. You can give a fandom website so it can analyze it. 2. It has detailed fields like _age, gender, running outfit_. Currently, I'm not planning to implement detailed fields because their quality differs from LLM to LLM.

