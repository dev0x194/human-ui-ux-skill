# React Native + Expo — human-directed native UI

Read for Expo / React Native Android, iOS, and Expo web projects.

## Initial inspection

- Look for `app/` routes, `_layout.tsx`, `expo-router`, `app.json/app.config.*`, `package.json`, theme tokens, current navigation, and existing component libraries.
- Preserve current Expo SDK and React Native versions; use `npx expo install <package>` so packages align with the project SDK. Don't randomly upgrade or replace navigation.
- Check whether target is Android, iOS, web or all three, and whether native modules require an Expo development build.

## Design language that respects native

- Use `View`, `Text`, `Pressable`, `ScrollView`, `FlatList`, `TextInput`, `Image` rather than DOM tags in shared components.
- Implement responsive/adaptive styles with `useWindowDimensions` and `StyleSheet` / project-approved style solution. Do not use CSS classes unless the project already has a properly configured native styling library.
- Use `react-native-safe-area-context` when present for safe-area edges; prefer platform-specific navigation treatment over a universal fake header.
- For long lists use `FlatList` (or a compatible virtualized list), stable keys, clear empty states, and avoid nesting heavy scroll views.
- For Android hardware back and iOS navigation gestures, use the project router's conventions and avoid hijacking platform behavior.
- Use `Pressable` hit targets at least ~44×44 points (iOS) and ~48×48 dp (Android) where possible; suitable accessibility props (`accessibilityRole`, `accessibilityLabel`, `accessibilityState`).
- Respect dynamic font scaling; test long titles, localized strings and keyboard cover. Icons/text must not be truncated when font sizes grow.
- Use explicit disabled, loading, error, retry and success states for async flows. Handle insets, translucent status bars and dark/light appearance where applicable.
- Compose native controls for tap feedback; do not port web hover effects as mobile interaction affordances.

## Expo Router & universal

- Expo Router uses filesystem routes; respect `_layout.tsx`, route groups, `Link`, `Stack`, `Tabs` etc. before introducing navigation changes.
- With web support, prefer portable RN components; isolate DOM-only UI in `.web.tsx` when appropriate.
- Web dependencies (when missing): `npx expo install react-dom react-native-web @expo/metro-runtime`.
- Run the web target with `npx expo start --web`, and only claim it works after running/testing.
- Native dependencies not included in Expo Go typically require a development build. Don't promise custom native modules will run in Expo Go.
- Use `npx expo start` for existing projects; do not assume local Android/iOS native compilers are available in Termux. Cloud EAS builds may be an option; verify auth and project build setup first.

## Visual review checklist

- Portrait small phone, modern phone, tablet/web width where applicable; safe areas; rotated device where relevant.
- Tap actions can be reached; on-screen keyboard does not hide submit; scroll positions are natural; no clipped list rows; screen-reader labels and traversal are sensible.
- The primary screen does useful work and never looks like an empty fake analytics dashboard.

## Minimal demo

`examples/expo-router/app/index.tsx` demonstrates a responsive task-focused screen with a functioning checklist and progress, no CSS, no extra fonts and no fake backend. Copy its `app/` files into an **existing Expo Router app** rather than assuming it is a fully bootstrapped application. The demo depends on the Expo Router stack provided by your app.

Official docs: https://docs.expo.dev/router/introduction/ ; https://docs.expo.dev/workflow/web/ ; https://docs.expo.dev/develop/development-builds/introduction/
