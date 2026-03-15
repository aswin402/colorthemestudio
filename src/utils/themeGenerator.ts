import chroma from 'chroma-js';
import type { ThemeOutput, ThemeColors, ThemeTemperature, ColorToken } from '../types';
import { adjustTemperature, hexToOklchString, getAccessibleTextColor } from './colorConversions';

const createToken = (name: string, hex: string, cssVar: string): ColorToken => {
  return {
    name,
    cssVar,
    hexValue: hex,
    oklchValue: hexToOklchString(hex)
  };
};

export const generateTheme = (baseColor: string, temperature: ThemeTemperature): ThemeOutput => {
  const primaryHex = adjustTemperature(baseColor, temperature);

  // -- Light Theme --
  const lightBg = '#ffffff';
  const lightFg = '#09090b';
  const primaryFgLight = getAccessibleTextColor(primaryHex);

  const secondaryLight = chroma(primaryHex).desaturate(2).brighten(2.5).hex();
  const secondaryFgLight = '#18181b';

  const destructiveLight = '#ef4444';
  const destructiveFgLight = '#fafafa';

  const borderLight = chroma(primaryHex).desaturate(3).brighten(2.8).hex();

  const light: ThemeColors = {
    background: createToken('Background', lightBg, '--background'),
    foreground: createToken('Foreground', lightFg, '--foreground'),
    primary: createToken('Primary', primaryHex, '--primary'),
    primaryForeground: createToken('Primary Foreground', primaryFgLight, '--primary-foreground'),
    secondary: createToken('Secondary', secondaryLight, '--secondary'),
    secondaryForeground: createToken('Secondary Foreground', secondaryFgLight, '--secondary-foreground'),
    muted: createToken('Muted', chroma(secondaryLight).brighten(0.1).hex(), '--muted'),
    mutedForeground: createToken('Muted Foreground', chroma(lightFg).brighten(2).hex(), '--muted-foreground'),
    accent: createToken('Accent', secondaryLight, '--accent'),
    accentForeground: createToken('Accent Foreground', secondaryFgLight, '--accent-foreground'),
    destructive: createToken('Destructive', destructiveLight, '--destructive'),
    destructiveForeground: createToken('Destructive Foreground', destructiveFgLight, '--destructive-foreground'),
    border: createToken('Border', borderLight, '--border'),
    input: createToken('Input', borderLight, '--input'),
    ring: createToken('Ring', primaryHex, '--ring'),
    card: createToken('Card', lightBg, '--card'),
    cardForeground: createToken('Card Foreground', lightFg, '--card-foreground'),
    popover: createToken('Popover', lightBg, '--popover'),
    popoverForeground: createToken('Popover Foreground', lightFg, '--popover-foreground')
  };

  // -- Dark Theme --
  const darkBg = '#09090b';
  const darkFg = '#fafafa';

  const darkPrimary = chroma(primaryHex).desaturate(0.5).brighten(0.5).hex();
  const primaryFgDark = getAccessibleTextColor(darkPrimary);

  const secondaryDark = chroma(primaryHex).desaturate(2).darken(2.5).hex();
  const secondaryFgDark = '#fafafa';

  const destructiveDark = '#7f1d1d';
  const destructiveFgDark = '#fafafa';

  const borderDark = chroma(primaryHex).desaturate(3).darken(3.5).hex();

  const dark: ThemeColors = {
    background: createToken('Background', darkBg, '--background'),
    foreground: createToken('Foreground', darkFg, '--foreground'),
    primary: createToken('Primary', darkPrimary, '--primary'),
    primaryForeground: createToken('Primary Foreground', primaryFgDark, '--primary-foreground'),
    secondary: createToken('Secondary', secondaryDark, '--secondary'),
    secondaryForeground: createToken('Secondary Foreground', secondaryFgDark, '--secondary-foreground'),
    muted: createToken('Muted', chroma(secondaryDark).darken(0.2).hex(), '--muted'),
    mutedForeground: createToken('Muted Foreground', chroma(darkFg).darken(2).hex(), '--muted-foreground'),
    accent: createToken('Accent', secondaryDark, '--accent'),
    accentForeground: createToken('Accent Foreground', secondaryFgDark, '--accent-foreground'),
    destructive: createToken('Destructive', destructiveDark, '--destructive'),
    destructiveForeground: createToken('Destructive Foreground', destructiveFgDark, '--destructive-foreground'),
    border: createToken('Border', borderDark, '--border'),
    input: createToken('Input', borderDark, '--input'),
    ring: createToken('Ring', darkPrimary, '--ring'),
    card: createToken('Card', darkBg, '--card'),
    cardForeground: createToken('Card Foreground', darkFg, '--card-foreground'),
    popover: createToken('Popover', darkBg, '--popover'),
    popoverForeground: createToken('Popover Foreground', darkFg, '--popover-foreground')
  };

  return { light, dark };
};
