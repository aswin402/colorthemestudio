# ColorTheme Studio

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://colorthemestudio.vercel.app/)
[![Website](https://img.shields.io/badge/website-live-success.svg)](https://colorthemestudio.vercel.app/)

ColorTheme Studio is a powerful, elegant, and developer-friendly color theme generator. It allows designers and developers to create, customize, and preview comprehensive color palettes, and seamlessly export them to modern frameworks like Tailwind CSS and Flutter.

## 🚀 Features

- **Intuitive Color Generation:** Pick a base color and automatically generate a harmonious, accessible color palette.
- **Theme Temperature Adjustment:** Fine-tune your theme's feel by adjusting between natural, warmer, and cooler variations.
- **Real-Time Preview:** Instantly see how your generated theme looks in both Web (Tailwind component) and Mobile (Flutter component) contexts.
- **Dark & Light Modes:** Comprehensive support for both light and dark mode versions of your generated themes.
- **One-Click Code Export:** Easily copy the generated configuration code for:
  - Tailwind CSS `theme` setup
  - Native Web CSS Variables
  - Flutter `ThemeData`

## 📸 Screenshots

### Web & Tailwind CSS Preview
![Tailwind CSS Preview](screenshots/forTailwinds.png)

### Flutter Preview
![Flutter Preview](screenshots/forFlutter.png)

## 📖 Documentation

To understand the core project workings and how different pieces fit together, please refer to our documentation directory:

- [explain.md](./docs/explain.md) - Detailed explanation of the project capabilities and usage.
- [architecture.md](./docs/architecture.md) - Deep dive into the component architecture, state management, and file structure.
- [getting-started.md](./docs/getting-started.md) - How to run and test the project locally.

## 🔗 Live Demo

Visit the live website here: [https://colorthemestudio.vercel.app/](https://colorthemestudio.vercel.app/)

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS, ShadCN UI
- **Icons:** Lucide React
- **State Management:** Zustand
- **Color Manipulation:** culori, chroma-js