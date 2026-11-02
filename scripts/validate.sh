#!/usr/bin/env bash
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILL="$HERE/.agents/skills/human-ui-ux"
required=(
  "$SKILL/SKILL.md"
  "$SKILL/references/platform-strategy.md"
  "$SKILL/references/react-native-expo.md"
  "$SKILL/references/react-web.md"
  "$SKILL/references/web-vanilla.md"
  "$SKILL/references/desktop.md"
  "$SKILL/references/quality-gates.md"
  "$HERE/AGENTS.md"
  "$HERE/examples/daymark-comparison.html"
  "$HERE/examples/expo-router/app/index.tsx"
  "$HERE/examples/expo-router/app/_layout.tsx"
  "$HERE/examples/react-web/src/App.tsx"
  "$HERE/examples/react-web/src/App.css"
  "$HERE/examples/electron-desktop/main.cjs"
  "$HERE/prompts/README.md"
)
for p in "${required[@]}"; do
  if [[ ! -s "$p" ]]; then echo "Missing or empty: $p" >&2; exit 1; fi
done
head -n 5 "$SKILL/SKILL.md" | grep -q '^name: human-ui-ux$'
head -n 6 "$SKILL/SKILL.md" | grep -q '^description:'
echo "OK: Human UI/UX skill + mobile, web and desktop references/examples found."
