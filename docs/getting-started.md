# Getting Started

## Prerequisites

- Node.js 18+ or Bun.
- VSCode recommended.

## Installation

```bash
cd /home/aswin/programming/vscode/myProjects/colorthemestudio
bun install  # or npm install
```

## Run Development Server

```bash
bun dev  # or npm run dev
```

- Opens at http://localhost:5173.
- Edit files → Hot reload.

## Key Pages to Test

1. **Default (Color Picker + Preview + CodeGen):** Pick hex/temp → See previews/snippets update.
2. **Export Setup (Header tab):** Generate full Tailwind/Flutter configs.
3. **Components (Header tab):** Use **Preset Styles** button (click toggle), customize typography/geometry → Live buttons/inputs/cards.

## Testing New Features

- **Components Customization:** Switch to Components tab, tweak fonts (e.g., JetBrains Mono), density (spacious), shadows → Instant preview changes.
- **Dark/Light:** Toggle in Preview or Header.
- **Exports:** Use recent theme, copy configs.

## Build for Production

```bash
bun build  # or npm run build
```

## Troubleshooting

- Tailwind styles missing? Restart dev server.
- Type errors? `bun tsc --noEmit`.
- Fonts not loading? Browser cache or Tailwind purge.

Live demo: https://colorthemestudio.vercel.app/
