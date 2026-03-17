import type { ThemeTemperature, ComponentConfig, BorderRadiusSize, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType } from '../types';


// Generate random hex color (bright, saturated for nice themes)
export const randomHex = (): string => {
  // HSV-like: random hue, high sat/val for vibrant
  const hue = Math.floor(Math.random() * 360);
  const sat = 0.6 + Math.random() * 0.3; // 60-90%
  const val = 0.7 + Math.random() * 0.2; // 70-90%
  const chroma = val * sat;
  const h = hue / 60;
  const x = chroma * (1 - Math.abs((h % 2) - 1));
  let r = 0, g = 0, b = 0;
  if (0 <= h && h < 1) { r = chroma; g = x; b = 0; }
  else if (1 <= h && h < 2) { r = x; g = chroma; b = 0; }
  else if (2 <= h && h < 3) { r = 0; g = chroma; b = x; }
  else if (3 <= h && h < 4) { r = 0; g = x; b = chroma; }
  else if (4 <= h && h < 5) { r = x; g = 0; b = chroma; }
  else { r = chroma; g = 0; b = x; }
  const m = val - chroma;
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return '#' + [r,g,b].map(n => n.toString(16).padStart(2,'0')).join('');
};

// Random temperature
export const randomTemperature = (): ThemeTemperature => {
  const temps: ThemeTemperature[] = ['natural', 'warmer', 'cooler'];
  return temps[Math.floor(Math.random() * temps.length)] as ThemeTemperature;
};

// Random component config matching selectors
export const randomComponentConfig = (): Partial<ComponentConfig> => ({
  buttonRadius: (['none', 'sm', 'md', 'lg', 'full'] as BorderRadiusSize[])[Math.floor(Math.random() * 5)] ,
  cardRadius: (['none', 'sm', 'md', 'lg', 'full'] as BorderRadiusSize[])[Math.floor(Math.random() * 5)] ,
  inputRadius: (['none', 'sm', 'md', 'lg', 'full'] as BorderRadiusSize[])[Math.floor(Math.random() * 5)] ,
  headingFont: (['Poppins', 'Inter', 'Manrope', 'Playfair Display', 'Oswald', 'Geist'])[Math.floor(Math.random() * 6)],
  bodyFont: (['Roboto', 'Inter', 'Open Sans', 'DM Sans', 'Source Sans Pro', 'Work Sans'])[Math.floor(Math.random() * 6)],
  headingWeight: (['400', '500', '600', '700', '800'] as string[])[Math.floor(Math.random() * 5)],
  bodyWeight: (['400', '500', '600', '700', '800'] as string[])[Math.floor(Math.random() * 5)],
  fontSizeHeading: (['xs', 'sm', 'base', 'lg', 'xl', '2xl'] as FontSize[])[Math.floor(Math.random() * 6)],
  fontSizeBody: (['xs', 'sm', 'base', 'lg', 'xl', '2xl'] as FontSize[])[Math.floor(Math.random() * 6)],
  lineHeight: (['compact', 'normal', 'relaxed'] as LineHeightType[])[Math.floor(Math.random() * 3)],
  shadow: (['none', 'sm', 'md', 'lg', 'xl'] as ShadowSize[])[Math.floor(Math.random() * 5)],
  density: (['compact', 'normal', 'spacious'] as DensityType[])[Math.floor(Math.random() * 3)],
  borderWidth: (['0', '1', '2', '4', '8'] as BorderWidthType[])[Math.floor(Math.random() * 5)],
});

// Random theme payload
export const generateRandomTheme = () => ({
  baseColor: randomHex(),
  temperature: randomTemperature(),
});

// Random full (for components page)
export const generateRandomStyles = () => ({
  ...generateRandomTheme(),
  componentConfig: randomComponentConfig(),
});

