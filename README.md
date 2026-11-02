# Human UI/UX — cross-platform Codex skill

An art-direction-first skill for **web, mobile and desktop**. It helps Codex build purposeful, distinctive products rather than generic AI-styled UI. This is a **design/coding skill with examples**, not a universal preconfigured app or a cross-compiler.

## Supported frontend projects

| Platform | Stacks | Guidance |
| --- | --- | --- |
| Mobile | React Native + Expo / Expo Router (Android/iOS) | Native components, safe areas, touch, gestures, accessibility |
| Universal | Expo + React Native for Web | Shared components where compatible, web adaptations |
| Web | HTML/CSS/JS; React, Vite, Next-style apps | Semantic content, responsive UI, keyboard/focus, accessibility |
| Desktop | Electron, Tauri, desktop-first browser apps | Keyboard-first UI, resizable windows, secure native bridges |

Native macOS/Windows desktop binaries are **not** produced by Expo alone. Use a desktop target (Electron/Tauri) or purpose-built React Native Windows/macOS infrastructure. Expo Android/iOS native builds may require OS toolchains or EAS cloud builds.

## Project structure

```text
human-ui-ux/
├── .agents/skills/human-ui-ux/
│   ├── SKILL.md                        # master skill
│   └── references/
│       ├── platform-strategy.md
│       ├── react-native-expo.md
│       ├── react-web.md
│       ├── web-vanilla.md
│       ├── desktop.md
│       └── quality-gates.md
├── AGENTS.md
├── examples/
│   ├── daymark-comparison.html         # interactive comparison: generic vs human UI
│   ├── expo-router/app/                # Expo Router native/web responsive screen
│   ├── react-web/src/                  # React web screen + CSS
│   └── electron-desktop/               # desktop keyboard-first HTML demo + Electron shell
├── prompts/                            # platform-specific Codex prompts
├── scripts/install-global.sh          # install reusable skill
├── scripts/validate.sh                # check shipped files
└── README.md
```

## Termux installation at your existing path

Your project location is:

```sh
/data/data/com.termux/files/home/github/human-ui-ux
```

After downloading the archive to Android Downloads, run:

```sh
pkg install unzip -y
mkdir -p "$HOME/github/human-ui-ux"
unzip -o "$HOME/storage/downloads/human-ui-ux-cross-platform.zip" -d "$HOME/github/human-ui-ux"
cd "$HOME/github/human-ui-ux"
bash scripts/validate.sh
```

If Termux storage access is not already enabled, run `termux-setup-storage` and authorize it first. If you downloaded to a different folder, change the ZIP path.

### Enable skill globally for ALL Codex projects (recommended)

```sh
cd "$HOME/github/human-ui-ux"
bash scripts/install-global.sh
```

This installs the skill to `~/.agents/skills/human-ui-ux/` and preserves a backup of a preexisting installation. Restart Codex to refresh its skill index. Running `codex` is separate; Codex CLI must already be installed.

### Use project-local only

Run Codex from `~/github/human-ui-ux` or put `.agents/skills/human-ui-ux/` in another project. Then request `$human-ui-ux`.

## Ready-made prompts

See `prompts/README.md` (Expo mobile, Expo universal, React web, HTML/CSS/JS, Electron/Tauri desktop and multi-platform plan).

## Try sample projects

**Expo Router:** Create an Expo Router app using the current official Expo starter, then copy `examples/expo-router/app/index.tsx` and `_layout.tsx` into its `app/` folder. This demonstrates a native-compatible task UI and shared Android/iOS/web styles. Use `npx expo start`; add web dependencies only when missing and use `npx expo start --web` to test browser output. Native device or cloud build support requires your own Expo environment.

**React web:** Create a Vite React TypeScript project (`npm create vite@latest my-app -- --template react-ts`). Copy `examples/react-web/src/App.tsx` and `App.css` into its `src/`, replacing scaffold files. Install deps and run the scaffold's dev command.

**Electron desktop:** See `examples/electron-desktop/README.md`. Use a supported macOS/Windows/Linux machine to install Electron and run this illustration; Termux is not a guaranteed Electron desktop runtime.

**Vanilla:** Open `examples/daymark-comparison.html` directly in a browser. This is the original side-by-side comparison.

## Notes

- This package contains **skill instructions and working UI examples**, not installed `node_modules` or signed Android/iOS/Windows/macOS apps.
- Version-specific Expo/Electron/Tauri instructions should be checked against current official documentation before installing new toolchains.
- Style guidelines never supersede accessibility, framework semantics or OS platform conventions.

## Primary official references

- Expo Router: https://docs.expo.dev/router/introduction/
- Expo web: https://docs.expo.dev/workflow/web/
- Expo development builds: https://docs.expo.dev/develop/development-builds/introduction/
- Electron Quick Start: https://www.electronjs.org/docs/latest/tutorial/quick-start
- Tauri prerequisites: https://tauri.app/start/prerequisites/
