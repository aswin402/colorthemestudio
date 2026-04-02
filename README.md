# ColorTheme Studio

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://colorthemestudio.vercel.app/)
[![React](https://img.shields.io/badge/React-19-green.svg)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue.svg)](https://tailwindcss.com)
[![Website](https://img.shields.io/badge/website-live-success.svg)](https://colorthemestudio.vercel.app/)

ColorTheme Studio is a powerful, elegant, and developer-friendly color theme generator built with React + Vite. It enables designers and developers to create, customize, and preview comprehensive, accessible color palettes with light/dark modes, then seamlessly export production-ready configurations for modern frameworks including Tailwind CSS, Shadcn UI, Flutter, and Web CSS.

## 🚀 Features

- **Intuitive Color Palette Generation**: Select a base color via interactive wheel or categories, auto-generate harmonious scales with temperature adjustments (warm/cool/natural).
- **Real-Time Previews**: Live rendering of themes in modern Web (Tailwind/Shadcn components) and Flutter UI mockups.
- **Advanced Components Customization**: 48+ built-in presets (Core, Thematic like Retro Arcade/Neo Brutalism, DaisyUI replicas). Customize typography, geometry, effects, layout with live previews.
- **Dark & Light Mode Support**: Full dual-mode theme generation and previews.
- **One-Click Code Exports**:
  - Tailwind `tailwind.config.js` + CSS vars.
  - Shadcn UI configs.
  - Complete Flutter theme (9+ Dart files with AppTheme context).
  - Clean React/Flutter snippets using semantic classes (no inline styles).
- **Professional Outputs**: Semantic, framework-native code ready for production apps.

## 📸 Screenshots

### Web & Tailwind Preview

![Tailwind CSS Preview](screenshots/forTailwinds.png)

### Flutter Preview

![Flutter Preview](screenshots/forFlutter.png)

### Export Setup

![Export Setup](screenshots/exportSetup.png)
![Tailwind Export](screenshots/exportSetupTw.png)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Yarn/NPM/Bun

### Installation & Run

```bash
git clone <repo>
cd colorthemestudio
bun install  # or npm/yarn install
bun dev      # or npm run dev
```

- Opens at [http://localhost:5173](http://localhost:5173)
- Hot reload enabled.

### Build for Production

```bash
bun build  # dist/ folder ready for deployment
```

[Live Demo](https://colorthemestudio.vercel.app/)

## 🛠️ Tech Stack

- **Core**: React 19, Vite 8, TypeScript 6
- **Styling**: Tailwind CSS 4 (@tailwindcss/vite), Shadcn UI 0.9, clsx, tailwind-merge
- **State/UI**: Zustand 5, Framer Motion 12, Lucide React
- **Colors**: culori 4, chroma-js 3, react-colorful
- **Dev**: ESLint 9, PostCSS, Autoprefixer

Full deps in [package.json](package.json).

## 📖 Documentation

- [Getting Started](./docs/getting-started.md) - Setup & testing.
- [Architecture](./docs/architecture.md) - Data flow & structure.
- [File Structure](./docs/file-structure.md) - Per-file details.
- [Components](./docs/components.md) - Customization guide.
- [Themes](./docs/themes.md) - Preset details.

Recent: Enhanced Components export (semantic snippets), DaisyUI presets.

### vibe coded by aswin

## 🤝 Contributing

1. Fork & clone.
2. `bun install && bun dev`.
3. Make changes, test locally.
4. Commit/PR to `main`.

## 📄 License

MIT License - see [LICENSE](LICENSE) (add if missing).

---

⭐ Star on GitHub | [Deployed on Vercel](https://colorthemestudio.vercel.app/)
