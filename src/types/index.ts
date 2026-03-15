export type ColorMode = 'light' | 'dark';
export type ThemeTemperature = 'natural' | 'warmer' | 'cooler';

export interface BaseColorInfo {
  hex: string;
  hsl: string;
  oklch: string;
}

export interface ColorToken {
  name: string;        // e.g., 'primary'
  cssVar: string;      // e.g., '--primary'
  oklchValue: string;  // e.g., '0.620 0.150 145.000'
  hexValue: string;    // e.g., '#16A34A'
}

export interface ThemeColors {
  background: ColorToken;
  foreground: ColorToken;
  primary: ColorToken;
  primaryForeground: ColorToken;
  secondary: ColorToken;
  secondaryForeground: ColorToken;
  muted: ColorToken;
  mutedForeground: ColorToken;
  accent: ColorToken;
  accentForeground: ColorToken;
  destructive: ColorToken;
  destructiveForeground: ColorToken;
  border: ColorToken;
  input: ColorToken;
  ring: ColorToken;
  card: ColorToken;
  cardForeground: ColorToken;
  popover: ColorToken;
  popoverForeground: ColorToken;
}

export interface ThemeOutput {
  light: ThemeColors;
  dark: ThemeColors;
}
