export type ColorMode = 'light' | 'dark';
export type ThemeTemperature = 'natural' | 'warmer' | 'cooler';

export interface BaseColorInfo {
  hex: string;
  hsl: string;
  oklch: string;
}

export interface ColorToken {
  name: string;
  cssVar: string;
  oklchValue: string;
  hexValue: string;
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

export type BorderRadiusSize = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type LineHeightType = 'compact' | 'normal' | 'relaxed' | 'loose';
export type ShadowSize = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DensityType = 'compact' | 'normal' | 'spacious';
export type BorderWidthType = '0' | '1' | '2' | '4' | '8' | '12';
export type AnimationType = 'none' | 'quick' | 'smooth' | 'bounce' | 'pulse';
export type LayoutType = 'stack' | 'grid' | 'masonry';

export interface ComponentConfig {
  buttonRadius: BorderRadiusSize;
  cardRadius: BorderRadiusSize;
  inputRadius: BorderRadiusSize;
  headingFont: string;
  bodyFont: string;
  headingWeight: string;
  bodyWeight: string;
  fontSizeHeading: FontSize;
  fontSizeBody: FontSize;
  lineHeight: LineHeightType;
  shadow: ShadowSize;
  density: DensityType;
  borderWidth: BorderWidthType;
  animation: AnimationType;
  layout: LayoutType;
}