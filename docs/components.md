# Components Customization Feature

## Overview

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
- **Fonts:** Extensive list covering system, Google Fonts, monospaces.
- **Presets List:** Shadcn Slate/Zinc, Daisy Emerald/Sky, Modern Blue, Warm Orange, Dark Purple, Neutral Gray, Vibrant Red, Cool Mint, Pro Indigo, Sunny Yellow.

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

## Integration

- Depends on `useThemeStore` for `theme`, `mode`, `componentConfig`.
- Types: `ComponentConfig`, `BorderRadiusSize`, `FontSize`, etc. from `src/types/index.ts`.
- Enhances theme workflow: Generate colors → Switch to Components tab → Tweak geometry/typo → See live UI.

This feature bridges theme generation to practical component theming.
