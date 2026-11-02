# Human UI/UX — Codex project instructions

For a frontend task in this repository, use the `human-ui-ux` skill located at `.agents/skills/human-ui-ux/SKILL.md`. Its cross-platform references cover:
- React Native + Expo (Android / iOS / Expo web)
- React and vanilla HTML/CSS/JavaScript web
- Electron / Tauri desktop applications

Always infer/identify the target stack first, then read only its relevant platform reference and the quality gates. Design the task flow, art direction and tokens before implementing. Keep existing working behavior; don't convert one framework into another unless requested. Avoid default vibe-code UI patterns, inaccessible controls and pretend demo data. Treat responsiveness, native conventions and visual QA as real deliverables.

Use `$human-ui-ux` to invoke explicitly. Native Android/iOS/desktop builds are not guaranteed runnable from Termux; explain untested platforms accurately.
