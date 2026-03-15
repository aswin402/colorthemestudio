# Project Explanation

ColorTheme Studio is specifically crafted to bridge the gap between initial color selection and actual implementation in codebases.

## Core Capabilities

1. **Intelligent Color Engine:** Instead of asking the user to manually pick 50 different shades, the application uses advanced color manipulation techniques to generate full 11-shade color scales (from semantic weights `50` to `950`). This approach mirrors established design systems like Tailwind's default palette, ensuring color scales have consistent perceived lightness and saturation.
2. **Temperature Controls:** One of the hardest parts of creating a theme is getting the "grays" right. The temperature selector allows users to choose between Natural, Warmer, and Cooler tones. This shifts the hue of gray/neutral scales slightly to match the desired temperature, ensuring that neutral borders and background surfaces feel cohesive with the primary brand color.
3. **Dual-Environment Preview:** Hex codes are abstract, and it can be difficult to visualize how they translate to an actual UI. The app provides a tabbed preview showing a modern web dashboard and a mobile app interface (mimicking Flutter's Material Design). Both are rendered instantly using the exact generated theme tokens.
4. **Frictionless Code Generation:** The primary output isn't just a list of hex values, but highly structured integration code. The tool supports generating:
   - Modern Tailwind Configurations (v4+ compatible structures or extended TS configs).
   - Native Web CSS Variables (`:root` definitions).
   - Fully formatted Flutter `ThemeData` blocks that can be pasted directly into a `MaterialApp`.
