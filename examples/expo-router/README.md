# Expo Router example — mobile and web

This is an **example screen** for an existing Expo Router project, not a full Expo CLI scaffold and not an Android/iOS binary. No external assets or custom native libraries are needed.

1. Follow current Expo official instructions to create an Expo Router project (`npx create-expo-app@latest`), using the SDK template compatible with your intended test environment.
2. Copy `app/index.tsx` into the app's root `app/` route, and `app/_layout.tsx` only if you want to replace the scaffold's layout. If your starter uses route groups (`app/(tabs)`), integrate the screen into the existing route rather than deleting navigation unintentionally.
3. Run `npx expo start` in the Expo project root. Test device preview with a supported Expo Go version or dev build depending on your project setup.
4. To test web, install web packages if missing: `npx expo install react-dom react-native-web @expo/metro-runtime`; run `npx expo start --web`.

The screen uses React Native, Expo Router and `react-native-safe-area-context` (provided in typical Expo Router starters). It adapts layout at larger widths, maintains a functional checklist and progress, includes accessible checkbox semantics and avoids boilerplate AI template styling.

For real production apps: use a safe-area context provider, design system tokens, persistence, navigation flows, localizations and real error/loading handling where applicable. The example is deliberately self-contained.
