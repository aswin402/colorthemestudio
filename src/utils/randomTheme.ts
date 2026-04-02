import type {
  ThemeTemperature,
  ComponentConfig,
  BorderRadiusSize,
  FontSize,
  LineHeightType,
  ShadowSize,
  DensityType,
  BorderWidthType,
  FontWeightType,
  LetterSpacingType,
  OpacityType,
  BlurSize,
} from '../types';


const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/**
 * Generate a random hex color with constrained saturation/value for pleasing results
 */
export const randomHex = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const sat = 0.6 + Math.random() * 0.3;
  const val = 0.7 + Math.random() * 0.2;
  const c = val * sat;
  const h = hue / 60;
  const x = c * (1 - Math.abs((h % 2) - 1));
  let r = 0, g = 0, b = 0;
  if (h >= 0 && h < 1) { r = c; g = x; }
  else if (h >= 1 && h < 2) { r = x; g = c; }
  else if (h >= 2 && h < 3) { g = c; b = x; }
  else if (h >= 3 && h < 4) { g = x; b = c; }
  else if (h >= 4 && h < 5) { r = x; b = c; }
  else { r = c; b = x; }
  const m = val - c;
  const toHex = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const randomTemperature = (): ThemeTemperature =>
  pick<ThemeTemperature>(['natural', 'warmer', 'cooler']);

// ==================== FONT LISTS ====================

export const HEADING_FONTS = [
  // Geometric / Modern (most popular)
  'Inter', 'Poppins', 'Montserrat', 'Manrope',
  // Display / Bold
  'Oswald', 'Bebas Neue',
  // Serif / Elegant
  'Playfair Display', 'Fraunces',
  // Clean alternatives
  'DM Sans', 'Raleway',
];

/** Body fonts optimized for readability */
export const BODY_FONTS = [
  'Inter', 'Roboto', 'Open Sans', 'DM Sans', 'Lato',
  'Nunito', 'Karla', 'Rubik',
  'Source Sans 3', 'Mulish',
  'Noto Sans', 'IBM Plex Sans',
];


// ==================== RANDOM CONFIG ====================

export const randomComponentConfig = (): Partial<ComponentConfig> => {
  const isGlassy = Math.random() < 0.25; // 25% chance of dedicated Glassmorphism mode

  return {
    // Border radius
    buttonRadius: pick<BorderRadiusSize>(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
    cardRadius: pick<BorderRadiusSize>(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    inputRadius: pick<BorderRadiusSize>(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),

    // Typography
    headingFont: pick(HEADING_FONTS),
    bodyFont: pick(BODY_FONTS),
    headingWeight: pick<FontWeightType>(['100', '200', '300', '400', '500', '600', '700', '800', '900']),
    bodyWeight: pick<FontWeightType>(['100', '200', '300', '400', '500', '600', '700', '800', '900']),
    fontSizeHeading: pick<FontSize>(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']),
    fontSizeBody: pick<FontSize>(['xs', 'sm', 'base', 'lg']),
    lineHeight: pick<LineHeightType>(['compact', 'normal', 'relaxed', 'loose']),
    letterSpacing: pick<LetterSpacingType>(['tighter', 'tight', 'normal', 'wide']),

    // Layout & Spacing
    shadow: pick<ShadowSize>(['none', 'sm', 'md', 'lg', 'xl']),
    density: pick<DensityType>(['compact', 'normal', 'spacious']),
    borderWidth: isGlassy ? '1' : pick<BorderWidthType>(['0', '1', '1']), // Glass requires borders

    // Per-component opacity & glass sync
    buttonOpacity: isGlassy
      ? pick<OpacityType>(['75', '100']) // Buttons stay partially opaque for visibility
      : '100',
    cardOpacity: isGlassy
      ? pick<OpacityType>(['50', '75'])
      : '100',
    navbarOpacity: isGlassy
      ? pick<OpacityType>(['25', '50', '75'])
      : '100',
    inputOpacity: isGlassy
      ? pick<OpacityType>(['50', '75'])
      : '100',
    badgeOpacity: isGlassy
      ? pick<OpacityType>(['75', '100'])
      : '100',
    overlayOpacity: isGlassy
      ? pick<OpacityType>(['25', '50', '75'])
      : pick<OpacityType>(['75', '100']),
    
    blurAmount: isGlassy
      ? pick<BlurSize>(['md', 'lg', 'xl']) // Intense blur for glassy look
      : pick<BlurSize>(['none', 'none', 'sm']), // Subtle or no blur for solid look
  };
};


export const generateRandomTheme = () => ({
  baseColor: randomHex(),
  temperature: randomTemperature(),
});

export const generateRandomStyles = () => ({
  ...generateRandomTheme(),
  componentConfig: randomComponentConfig(),
});