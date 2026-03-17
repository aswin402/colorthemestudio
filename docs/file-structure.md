# Detailed File Structure & Responsibilities

## Root

- **package.json/bun.lock/package-lock.json:** Dependencies (React, Vite, Tailwind, ShadCN, Zustand, culori/chroma-js, lucide-react).
- **vite.config.ts:** Vite setup with React/TS plugins.
- **tsconfig\*.json:** TypeScript configs.
- **index.html:** Entry point.
- **README.md:** Project overview, features, screenshots, docs links.
- **TODO.md:** Task tracking.

## docs/

- **architecture.md:** High-level folders, data flow.
- **explain.md:** Core capabilities (color engine, exports).
- **components.md:** New Components customization details.
- **file-structure.md:** This file.
- **getting-started.md:** Setup guide.

## public/

- Static assets: favicon.ico, icons.svg.

## screenshots/

- UI captures: exports, previews.

## src/

### App.tsx

- Main app router: Routes to Preview+CodeGen (default), ExportPage, ComponentsPage.
- Renders panels: ColorPickerPanel, PreviewPanel, CodeGenPanel.

### store/useThemeStore.ts

- Zustand store: `baseColor`, `temperature`, `mode` (light/dark), `theme` (generated palettes), `componentConfig` (typography/geometry).
- Actions: `setBaseColor`, `setTemperature`, `setMode`, `setComponentConfig`, `generateTheme`.

### types/index.ts

- Interfaces: `ThemeColors`, `ThemeOutput` (light/dark), `ComponentConfig` (fonts, sizes, radius, etc.), enums (BorderRadiusSize, FontSize, etc.).

### utils/

- **colorConversions.ts:** hexToHsl/Oklch utils.
- **themeGenerator.ts:** Core logic: Generate scales from base, apply temperature (warmer/cooler grays), accessibility adjustments.

### components/

#### Layout/Header.tsx

- Nav tabs: Preview/Code, Export Setup, Components; mode toggle.

#### ColorPicker/

- **ColorPickerPanel.tsx:** Wrapper.
- **ColorWheel.tsx:** HexColorPicker integration.
- **TemperatureSelector.tsx:** Natural/Warm/Cool buttons.
- **ColorCategories.tsx:** Displays generated scales.

#### Preview/

- **PreviewPanel.tsx:** Tabs Web/Flutter, mode toggle.
- **WebPreview.tsx/FlutterPreview.tsx:** Mock UIs with theme vars inline.

#### CodeGenerator/CodeGenPanel.tsx

- Tabs: FlutterTheme, TailwindConfig, WebCSS → stringified snippets from theme.

#### Components/

- See docs/components.md.

#### Export/

- **ExportPage.tsx:** Tabs Flutter/Tailwind.
- **FlutterExport.tsx/TailwindExport.tsx:** Full boilerplate code (tailwind.config.js, Flutter 9 files), uses componentConfig.

## Flow Summary

User picks color/temp → Store generates theme → Previews/Code/Exports/Components consume reactively.
