# Platform strategy: mobile, web, desktop

Read when a project has more than one target, or the user says “works everywhere.” Set a **platform matrix** before writing components.

| Goal | Recommended route | Key caveat |
| --- | --- | --- |
| Android + iOS app | Expo / React Native; Expo Router where already used | Prefer development build for native extensions; simulator/device availability depends on host OS |
| Android + iOS + browser | Expo + React Native for Web (and Expo Router if appropriate) | Some components/third-party libraries have platform limits; web-only code needs separate files |
| Website / marketing landing page | Semantic HTML/CSS or React/Next/Vite | Search/SEO, links, keyboard, performance, responsive content |
| Native-feeling desktop app for macOS/Windows/Linux | Existing Electron or Tauri project | These are desktop wrappers around web UI with OS-specific integrations; build toolchains required |
| Browser UI optimized for desktop | Responsive web with desktop-first density | Not the same as a distributable native desktop app |
| React Native directly on Windows/macOS | Dedicated community/microsoft RN macOS/Windows infrastructure if project uses it | Not automatic in Expo; verify current ecosystem/compatibility before adoption |

## Reasonable code reuse

- Share product concepts, copy, brand tokens (as structured data), icon language and business rules.
- Share React Native screen/components across iOS/Android/web **when supported**. Import `View`, `Text`, `Pressable` rather than assuming DOM elements work on native.
- Use `.web.tsx`, `.native.tsx`, `.ios.tsx`, `.android.tsx` for genuinely platform-specific behavior, not every visual change.
- Share React web/desktop components across desktop web and Electron/Tauri where sensible.
- Do **not** promise a single React Native screen will run unmodified as a packaged Electron/Tauri app. Plan an adapter/web entry point if required.

## Platform experience rules

- Phone: thumb-reachable primary actions, platform-consistent tab/stack navigation, safe areas, touch targets, efficient forms and keyboards.
- Tablet: adaptive master/detail or wider content grids where truly helpful, not stretched phone UI.
- Web: semantic headings, meaningful links/URLs, responsive breakpoints and mouse/keyboard/touch parity.
- Desktop: usable resizable windows, denser information, strong focus states, right-click/keyboard conventions if relevant, and correct app menu/shortcuts.
- In all: prioritize authentic task flows and high information value over glowy visual effects.

## What to say about execution

Specify tested targets separately from target support. Example: “Code structured for Expo Android/iOS/web; checked browser width 375 and 1280; device builds and OS-specific native functionality were not verified.”

Official references (verify version-sensitive details before running commands):
- https://docs.expo.dev/router/introduction/
- https://docs.expo.dev/workflow/web/
- https://docs.expo.dev/develop/development-builds/introduction/
- https://www.electronjs.org/docs/latest/tutorial/quick-start
- https://tauri.app/start/prerequisites/
