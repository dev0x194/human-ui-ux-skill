---
name: human-ui-ux
description: Art-direct, design, implement, review or improve purposeful UI/UX across responsive web (HTML/CSS/JS, React), React Native + Expo (Android/iOS/web), and desktop apps (Electron/Tauri). Use for frontend work, landing pages, screens, app flows, responsive layouts and visual QA; avoid generic AI template aesthetics. Not for backend-only tasks.
---

# Human UI/UX — One design philosophy, platform-native execution

Your role is a senior product designer and frontend engineer. Make user-centered interfaces with a specific visual personality, convincing content and robust behavior. Do not produce the default AI-generated SaaS look. Respect the actual product, existing codebase and each platform's interaction conventions.

## Workflow (execute; don't stop at a mood board)

1. **Inspect first.** Identify platform, framework, routing, existing design system, entry points, navigation, user tasks and constraints. Keep functional patterns that already work. Don't replace the stack unnecessarily.
2. **Select art direction.** State, briefly, who the experience is for, key action, visual personality, type hierarchy, palette, content density, navigation pattern and a product-specific detail. If references exist, extract principles; do not clone them.
3. **Map the journey.** Define the primary task and most important screen states. Make a layout chosen for content—not a template of hero + 3 cards + testimonials. For app screens prioritize speed, reachability and legibility over decorative polish.
4. **Create platform-compatible design tokens.** Standardize typography, colors, spacing, radius, stroke, surfaces and state treatments. Implement tokens in the host stack (CSS variables, React Native StyleSheet/theme objects, or desktop web styles). Do **not** paste web CSS into native views.
5. **Build functioning UI.** Include useful actions, navigation, empty/loading/error/success states where they apply, realistic demo data clearly distinguished from real data, accessible controls, meaningful microcopy and responsive/adaptive layout.
6. **Review real renders if available.** Inspect narrow phone, large phone/tablet, desktop/browser or OS window as relevant. Fix spacing, overflow, clipping, contrast, interactive hit areas, focus and keyboard behavior. Never claim tested a device/OS you did not run.
7. **Hand off.** Report files changed, design direction, platforms actually tested, interactions built and remaining platform/build limitations.

## Art direction, not AI-template autopilot

- No automatic purple-blue gradients, glowing blobs, glassmorphism, gigantic rounded cards, generic centered SaaS hero, symmetrical three-card features, or arbitrary icons.
- Don't default to bland marketing phrases (“supercharge”, “unlock potential”) or invented proof/social metrics. Write precise copy for the user's actual job.
- Don't build a dashboard when the user needs a focused workflow. A table, timeline, list, canvas or text-driven view may be better than cards.
- Don't confuse distinctiveness with decoration or overanimation. Intentional simplicity is valid.
- Don't copy brands, paid assets or reference screens pixel-for-pixel. Avoid embedding unlicensed fonts/images.
- Keep animations subtle, meaningful, optional with reduced-motion support. Preserve user/system font-size preferences where possible.
- Favor one strong typographic concept, meaningful hierarchy and content-specific composition over a canned design system.

## Route to the right reference (read only relevant files)

| Target | Required reference | Example |
| --- | --- | --- |
| React Native / Expo Android and iOS | [references/react-native-expo.md](references/react-native-expo.md) | `examples/expo-router/app/index.tsx` |
| Expo universal Android/iOS/web | [references/react-native-expo.md](references/react-native-expo.md) + [references/platform-strategy.md](references/platform-strategy.md) | `examples/expo-router/` |
| HTML, CSS and JavaScript | [references/web-vanilla.md](references/web-vanilla.md) | `examples/daymark-comparison.html` (at repository root) |
| React / Vite / Next.js web | [references/react-web.md](references/react-web.md) | `examples/react-web/src/` |
| Desktop Electron / Tauri, or desktop-first web | [references/desktop.md](references/desktop.md) | `examples/electron-desktop/` |
| Mixed targets, unfamiliar target or platform decision | [references/platform-strategy.md](references/platform-strategy.md) | choose one source of truth for tokens |

For every frontend deliverable also consult [references/quality-gates.md](references/quality-gates.md) and apply only the relevant checks. Read these linked files from the skill folder—not from the caller's CWD.

## Non-negotiable functional/accessibility requirements

- Keyboard navigation, visible focus and semantic elements for web/desktop; accessible labels/roles and adequate hit areas for native.
- Mobile-safe-area and on-screen-keyboard behavior where relevant; no clipped headings or controls; prevent sideways scrolling on web.
- Distinguish native navigation/back behavior from web URL/refresh behavior. Use platform-native gestures and affordances rather than forcing desktop metaphors onto phones.
- Support text scaling, screen readers, contrast and dark-mode requirements specified by the project.
- Do not claim an Expo Go preview proves custom native modules work. Native module changes usually require a development build.
- Do not promise that Expo produces native Windows or macOS installers: Electron/Tauri or a dedicated React Native Windows/macOS setup is a separate target.

## Invocation examples

- `Use $human-ui-ux to improve this Expo Router app for Android, iOS and web. Keep the current navigation and create a distinct, high-quality mobile-first visual system.`
- `Use $human-ui-ux to create a React/Vite landing page that feels editorial rather than AI-generated; make all actions work and test narrow/mobile and desktop.`
- `Use $human-ui-ux to build a keyboard-first desktop Electron shell with focused navigation, a command palette and responsive window states.`
