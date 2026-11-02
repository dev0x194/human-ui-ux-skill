# Electron desktop sample (macOS / Windows / Linux)

This is an intentionally small, local-only Electron demo with a functional task list, section navigation and Ctrl/⌘+K command palette. **Not** a production signing/updating template.

Use a desktop OS supported by Electron. In this folder:

```sh
npm install --save-dev electron
npm start
```

Termux running on Android does not provide a supported Electron Windows/macOS/Linux desktop toolchain; the source can still be edited on Android and run later on a desktop host.

Security choices in `main.cjs`: node integration disabled, context isolation enabled, sandbox enabled, loading local static HTML. For future native capabilities, create a minimal preload bridge, validate IPC inputs and keep secrets outside the renderer.
