# Architecture Overview

## Tech Stack
- **Frontend Framework:** React 18, Vite
- **Styling:** Tailwind CSS + custom UI components.
- **State Management:** Zustand (for globally managing the current base color, temperature, derived palettes, and light/dark preview mode).
- **Icons:** Lucide React.
- **Utilities:** `culori` and `chroma-js` for advanced color math.

## Folder Structure

- `src/components/Layout`: Core scaffolding like Header and main app layout wrappers.
- `src/components/ColorPicker`: The input components where users pick their base color and adjust temperature.
- `src/components/Preview`: Contains the mock UI components that react to the theme (e.g., `FlutterPreview`, `WebPreview`).
- `src/components/CodeGenerator`: Responsible for turning the state values into stringified CSS, Tailwind config, or Dart code.
- `src/store`: Contains the Zustand store (`useThemeStore.ts`) that holds the active application state.
- `src/utils`: Helper functions for color conversions, palette generation, and temperature adjustments.
- `src/types`: TypeScript interfaces describing the Theme and Color structures.

## Core Data Flow

1. User interacts with `ColorPickerPanel` or `TemperatureSelector` to choose a base `hex` or temperature modifier.
2. `useThemeStore` triggers the logic to rebuild the theme.
3. A complete structured `ThemeOutput` object is generated with both `light` and `dark` color token combinations (background, foreground, primary, secondary, border, etc.).
4. `PreviewPanel` immediately reflects the changes by passing the updated theme variables directly into inline styles or CSS variables.
5. `CodeGenPanel` dynamically builds output code strings (CSS, TS, Dart) using the latest generated palette.
