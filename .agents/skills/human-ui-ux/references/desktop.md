# Desktop UI/UX — Electron, Tauri, desktop-first web

## Identify the actual desktop target

- Electron/Tauri = desktop shell with web UI + OS integrations and platform-specific packaging.
- Desktop browser = web app optimized for big screens, resizable windows and keyboards.
- Expo does **not** automatically package a native Windows/macOS app. Don't imply Android/iOS/web support means native desktop distribution.

## Desktop interaction design

- Treat keyboard as first-class: shortcut discovery, focus order, visible focus, Escape to dismiss, enter to submit.
- Use resizing gracefully: test compact (~800 px) windows, normal laptop (~1280 px) and large monitors. Avoid max-width marketing hero framing inside task UIs.
- Information density should reflect productivity needs: sidebar, command palette, table, split-view or inspectors only if useful.
- Handle window chrome and safe drag regions appropriately; do not place interactive controls in draggable regions. Respect native menu/back conventions.
- Maintain accessible labels and cursor targets; right-click/drag-drop only when they improve real workflows.
- Handle permission/system dialogs and external links with explicit safe behavior.

## Electron-specific

- Use secure defaults: `contextIsolation: true`, `nodeIntegration: false`, sandbox when compatible, no `eval`, don't load untrusted content with privileged access.
- Use preload with `contextBridge` for any approved native capabilities; minimize IPC surface. External links require explicit safe allow-listing.
- Avoid enabling remote content access to Node.js and never put secrets in renderer bundles.
- Example `examples/electron-desktop/` is an intentionally small local-only demo with a custom HTML/CSS/JS shell and keyboard shortcut. It is not a production signing/auto-update template.

## Tauri-specific

- Inspect `src-tauri/` and capabilities/permissions. Expose minimal commands; keep Rust/backend privileges narrow.
- Keep frontend web tokens/style consistent with platform menus/window sizing, but do not blindly emulate native OS chrome.
- A Tauri build requires Rust/system dependencies on the supported host; Termux does not guarantee desktop compilation.

Official docs: https://www.electronjs.org/docs/latest/tutorial/quick-start ; https://tauri.app/start/prerequisites/
