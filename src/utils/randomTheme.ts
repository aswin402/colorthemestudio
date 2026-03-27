import type {
  ThemeTemperature,
  ComponentConfig,
  BorderRadiusSize,
  FontSize,
  LineHeightType,
  ShadowSize,
  DensityType,
  BorderWidthType,
  AnimationType,
  LayoutType,
} from '../types';

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

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

export const randomComponentConfig = (): Partial<ComponentConfig> => ({
  buttonRadius: pick<BorderRadiusSize>(['none', 'sm', 'md', 'lg', 'full']),
  cardRadius: pick<BorderRadiusSize>(['none', 'sm', 'md', 'lg', 'full']),
  inputRadius: pick<BorderRadiusSize>(['none', 'sm', 'md', 'lg', 'full']),
  headingFont: pick([
    'Poppins', 'Inter', 'Manrope', 'Playfair Display', 'Oswald', 'Geist',
    'Work Sans', 'DM Sans', 'Space Grotesk', 'Plus Jakarta Sans', 'Outfit',
    'Syne', 'Bebas Neue', 'Fraunces', 'Quicksand',
  ]),
  bodyFont: pick([
    'Roboto', 'Inter', 'Open Sans', 'DM Sans', 'Work Sans', 'Lato',
    'Nunito', 'Karla', 'Rubik', 'Figtree', 'Lexend', 'Urbanist',
  ]),
  headingWeight: pick(['400', '500', '600', '700', '800']),
  bodyWeight: pick(['400', '500', '600', '700']),
  fontSizeHeading: pick<FontSize>(['sm', 'base', 'lg', 'xl', '2xl']),
  fontSizeBody: pick<FontSize>(['xs', 'sm', 'base', 'lg']),
  lineHeight: pick<LineHeightType>(['compact', 'normal', 'relaxed']),
  shadow: pick<ShadowSize>(['none', 'sm', 'md', 'lg', 'xl']),
  density: pick<DensityType>(['compact', 'normal', 'spacious']),
  borderWidth: pick<BorderWidthType>(['0', '1', '2', '4']),
  animation: pick<AnimationType>(['none', 'quick', 'smooth', 'bounce']),
  layout: pick<LayoutType>(['stack', 'grid', 'masonry']),
});

export const generateRandomTheme = () => ({
  baseColor: randomHex(),
  temperature: randomTemperature(),
});

export const generateRandomStyles = () => ({
  ...generateRandomTheme(),
  componentConfig: randomComponentConfig(),
});