# Components Page (Enhanced)

## Overview

**New Features Added:**

- **Live Preview Tab**: Expanded previews now include 12+ basic components (Buttons, Cards, Inputs, Alerts, Badges, Avatars, Progress Bars, Toggles, Checkboxes, Accordions).
- **Exports Tab**: New React+Tailwind/Flutter code generator with copy buttons for each component. Dynamic snippets using CSS vars and config (radius-md, shadow-lg, fonts).

The Components page provides:

**Live Previews**: Real-time themed previews for Web (Tailwind/CSS vars) and Flutter (Material3).

**Config Controls**: Typography (over 30+ bundled curations like Geist, Satoshi, Press Start 2P), geometry (radius/density), effects (shadows/borders). Features a massive library of 48 instantly-applicable UI permutations/presets.

**Component Exports**: Clean, semantic framework-specific code (React TSX+Tailwind, Flutter Material) that inherently relies on your generated base `Export Setup` rather than using messy inline styles.

All live-updating. Accessible via Header Components tab.

The Components feature provides a dedicated page (`ComponentsPage.tsx`) for customizing and previewing UI components using the generated theme colors combined with independent geometry, typography, and layout configurations. This allows designers to fine-tune component styles (buttons, inputs, cards) in real-time without affecting the core color theme.

Accessible via the Header navigation (third tab after Preview and CodeGen).

## Key Files

### `src/components/Components/ComponentsPage.tsx`

- **Purpose:** Layout container splitting the page into two columns:
  - Left (col-span-4): `ConfigControls` for settings.
  - Right (col-span-8): `ComponentsLivePreview` for real-time rendering.
- **Props:** `panelClass` for consistent styling.
- **Structure:** Simple grid layout with overflow handling.

### `src/components/Components/ConfigControls.tsx`

- **Purpose:** Interactive controls updating `componentConfig` in `useThemeStore`.
- **Quick Actions (above controls):**
  - **Random Styles:** Generates random theme + component config (emerald button).
- **Preset Styles:** Click to toggle dropdown with 12 professional presets (shadcn/DaisyUI-inspired). Click preset to apply and close.
  - **Add Preset:** Saves current config as custom preset to localStorage (purple button).
- **Sections:**
  - **Typography:** Heading/Body fonts (50+ options incl. Inter, Roboto, JetBrains Mono), weights (400-800), sizes (xs-2xl), line-height (compact/normal/relaxed).
  - **Layout:** Density (compact/normal/spacious → padding), Border Width (0-8px).
  - **Effects:** Shadow (none-xl).
  - **Geometry:** Radius selectors (none/full) for button/card/input.
- **UI:** Selects, button chips for quick switches; updates store via `setComponentConfig`.
  Fonts:\*\* Curated list (~40) of common web-safe & Google Fonts (Inter, Roboto, Poppins, JetBrains Mono etc.) for reliable rendering in live preview. Rare fonts removed to fix non-rendering issue.
- **Config Options:**
  - `headingFont`, `bodyFont`: Curated array of 30+ Google fonts natively mapped in `index.html` (e.g. *Inter*, *Playfair*, *Syne*, *Geist*, *Comic Neue*, *Orbitron*, *VT323*).
  - Weights, custom radii (`none` to `full`), layout density, shadow depth, and border width toggles.
- **Presets Engine:** A powerful dropdown holding 48 distinct configurations precisely mimicking leading UI architectures (e.g. Supabase Bold Tech, Retro Arcade, DaisyUI Night, Lofi). Applying a preset comprehensively reflows the UI structure.

### `src/components/Components/ComponentsLivePreview.tsx`

- **Purpose:** Renders live buttons, inputs, cards applying `theme` (from store) + `componentConfig`.
- **Dynamic Classes/Styles:**
  - Fonts/weights/sizes/line-height via `getFontSizeClass`, `getLineHeightClass`, inline styles.
  - Padding via `getDensityPadding`.
  - Shadows/radius/borders via getters.
  - Colors: `activeTheme` (light/dark) for bg, fg, primary, border, etc.
- **Previews:**
  - **Buttons:** Primary/Secondary with theme colors, config styles.
  - **Inputs:** Styled with theme.input/ring, config padding/radius.
  - **Cards:** Complex demo with heading/body text, buttons; uses card/cardFg/border.
- **Helpers:** `getRadiusClass`, `getShadowClass`, etc., mapping config to Tailwind classes/inline.

### `src/components/Components/ComponentsExportSection.tsx`

- **Purpose:** Generates ready-to-copy code snippets for UI components (React/Tailwind and Flutter).
- **Core Principle:** Designed to operate harmoniously with the `TailwindExport.tsx` and `FlutterExport.tsx` setup boilerplates.
  - Instead of generating messy inline styles matching the specific configuration pixel-by-pixel, this component outputs clean, semantic classes (e.g., `bg-primary rounded-button`) or base widgets (e.g., `ElevatedButton()`). 
  - This guarantees the snippets instantly render perfectly when dropped into a codebase that is utilizing the generated Export Setup themes.
- **Tabbing:** Switch between Flutter and React exports seamlessly.

## Integration

- Depends on `useThemeStore` for `theme`, `mode`, `componentConfig`.
- Types: `ComponentConfig`, `BorderRadiusSize`, `FontSize`, etc. from `src/types/index.ts`.
- Enhances theme workflow: Generate colors → Switch to Components tab → Tweak geometry/typo → See live UI.

This feature bridges theme generation to practical component theming.
