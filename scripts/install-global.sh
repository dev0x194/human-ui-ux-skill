#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE="$PROJECT_DIR/.agents/skills/human-ui-ux"
TARGET="$HOME/.agents/skills/human-ui-ux"
if [[ ! -f "$SOURCE/SKILL.md" ]]; then
  printf 'Error: missing source skill %s/SKILL.md\n' "$SOURCE" >&2
  exit 1
fi
mkdir -p "$(dirname "$TARGET")"
if [[ -d "$TARGET" ]]; then
  stamp="$(date +%Y%m%d-%H%M%S)"
  backup="${TARGET}.backup-${stamp}"
  if [[ -e "$backup" ]]; then backup="${backup}-$$"; fi
  mv "$TARGET" "$backup"
  printf 'Previous skill backed up to: %s\n' "$backup"
fi
mkdir -p "$TARGET"
cp -R "$SOURCE/." "$TARGET/"
printf 'Installed Human UI/UX cross-platform skill: %s\n' "$TARGET"
printf 'Restart Codex and invoke it with: $human-ui-ux\n'
