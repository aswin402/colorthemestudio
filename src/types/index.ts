// ==================== COLOR MODES ====================
export type ColorMode = 'light' | 'dark';
export type ThemeTemperature = 'natural' | 'warmer' | 'cooler';

// ==================== COLOR INFO ====================
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

// ==================== THEME COLORS ====================
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
  // Sidebar tokens (shadcn v2+)
  sidebarBackground: ColorToken;
  sidebarForeground: ColorToken;
  sidebarPrimary: ColorToken;
  sidebarPrimaryForeground: ColorToken;
  sidebarAccent: ColorToken;
  sidebarAccentForeground: ColorToken;
  sidebarBorder: ColorToken;
  sidebarRing: ColorToken;
  // Chart tokens
  chart1: ColorToken;
  chart2: ColorToken;
  chart3: ColorToken;
  chart4: ColorToken;
  chart5: ColorToken;
}

export interface ThemeOutput {
  light: ThemeColors;
  dark: ThemeColors;
}

// ==================== COMPONENT CONFIG TYPES ====================
export type BorderRadiusSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type LineHeightType = 'compact' | 'normal' | 'relaxed' | 'loose';
export type ShadowSize = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DensityType = 'compact' | 'normal' | 'spacious';
export type BorderWidthType = '0' | '1' | '2' | '4' | '8' | '12';
export type FontWeightType = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type LetterSpacingType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export type OpacityType = '0' | '25' | '50' | '75' | '100';
export type BlurSize = 'none' | 'sm' | 'md' | 'lg' | 'xl';


// ==================== COMPONENT CONFIG ====================
export interface ComponentConfig {
  // Border radius
  buttonRadius: BorderRadiusSize;
  cardRadius: BorderRadiusSize;
  inputRadius: BorderRadiusSize;

  // Typography
  headingFont: string;
  bodyFont: string;
  headingWeight: FontWeightType;
  bodyWeight: FontWeightType;
  fontSizeHeading: FontSize;
  fontSizeBody: FontSize;
  lineHeight: LineHeightType;
  letterSpacing: LetterSpacingType;

  // Layout & Spacing
  shadow: ShadowSize;
  density: DensityType;
  borderWidth: BorderWidthType;

  // Per-component opacity
  buttonOpacity: OpacityType;
  cardOpacity: OpacityType;
  navbarOpacity: OpacityType;
  inputOpacity: OpacityType;
  badgeOpacity: OpacityType;
  overlayOpacity: OpacityType;
  blurAmount: BlurSize;
}


// ==================== FONT CATEGORY TYPES ====================
export type FontCategory =
  | 'sans-serif'
  | 'serif'
  | 'display'
  | 'monospace'
  | 'handwriting'
  | 'geometric'
  | 'humanist'
  | 'neo-grotesque';

export interface FontInfo {
  name: string;
  category: FontCategory;
  weights: FontWeightType[];
  fallback: string;
  description?: string;
}

// ==================== PRESET TYPES ====================
export type PresetCategory =
  | 'shadcn'
  | 'daisy'
  | 'modern'
  | 'minimal'
  | 'dark'
  | 'playful'
  | 'professional'
  | 'nature'
  | 'vintage'
  | 'futuristic'
  | 'luxury'
  | 'artistic'
  | 'editorial'
  | 'brutalist'
  | 'retro'
  | 'pastel'
  | 'monochrome'
  | 'warm'
  | 'cool'
  | 'neon';

export interface Preset {
  name: string;
  baseColor: string;
  temperature: ThemeTemperature;
  componentConfig: Partial<ComponentConfig>;
  category: PresetCategory;
  description?: string;
  tags?: string[];
}