import chroma from 'chroma-js';
import type { ThemeOutput, ThemeColors, ThemeTemperature, ColorToken } from '../types';
import { adjustTemperature, hexToOklchString, getAccessibleTextColor } from './colorConversions';

const createToken = (name: string, hex: string, cssVar: string): ColorToken => ({
  name,
  cssVar,
  hexValue: hex,
  oklchValue: hexToOklchString(hex),
});

export const generateTheme = (baseColor: string, temperature: ThemeTemperature): ThemeOutput => {
  let primaryHex: string;
  try {
    primaryHex = adjustTemperature(baseColor, temperature);
  } catch {
    primaryHex = '#16A34A';
  }

  // Light Theme
  const lightBg = '#ffffff';
  const lightFg = '#09090b';
  const primaryFgLight = getAccessibleTextColor(primaryHex);

  let secondaryLight: string, borderLight: string;
  try {
    secondaryLight = chroma(primaryHex).desaturate(2).brighten(2.5).hex();
    borderLight = chroma(primaryHex).desaturate(3).brighten(2.8).hex();
  } catch {
    secondaryLight = '#f1f5f9';
    borderLight = '#e2e8f0';
  }

  const secondaryFgLight = '#18181b';
  const destructiveLight = '#ef4444';
  const destructiveFgLight = '#fafafa';

  let mutedLight: string, mutedFgLight: string;
  try {
    mutedLight = chroma(secondaryLight).brighten(0.1).hex();
    mutedFgLight = chroma(lightFg).brighten(2).hex();
  } catch {
    mutedLight = '#f1f5f9';
    mutedFgLight = '#64748b';
  }

  const light: ThemeColors = {
    background: createToken('Background', lightBg, '--background'),
    foreground: createToken('Foreground', lightFg, '--foreground'),
    primary: createToken('Primary', primaryHex, '--primary'),
    primaryForeground: createToken('Primary Foreground', primaryFgLight, '--primary-foreground'),
    secondary: createToken('Secondary', secondaryLight, '--secondary'),
    secondaryForeground: createToken('Secondary Foreground', secondaryFgLight, '--secondary-foreground'),
    muted: createToken('Muted', mutedLight, '--muted'),
    mutedForeground: createToken('Muted Foreground', mutedFgLight, '--muted-foreground'),
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
    popoverForeground: createToken('Popover Foreground', lightFg, '--popover-foreground'),
  };

  // Dark Theme
  const darkBg = '#09090b';
  const darkFg = '#fafafa';

  let darkPrimary: string, secondaryDark: string, borderDark: string;
  try {
    darkPrimary = chroma(primaryHex).desaturate(0.5).brighten(0.5).hex();
    secondaryDark = chroma(primaryHex).desaturate(2).darken(2.5).hex();
    borderDark = chroma(primaryHex).desaturate(3).darken(3.5).hex();
  } catch {
    darkPrimary = '#22c55e';
    secondaryDark = '#1e293b';
    borderDark = '#1e293b';
  }

  const primaryFgDark = getAccessibleTextColor(darkPrimary);
  const secondaryFgDark = '#fafafa';
  const destructiveDark = '#7f1d1d';
  const destructiveFgDark = '#fafafa';

  let mutedDark: string, mutedFgDark: string;
  try {
    mutedDark = chroma(secondaryDark).darken(0.2).hex();
    mutedFgDark = chroma(darkFg).darken(2).hex();
  } catch {
    mutedDark = '#27272a';
    mutedFgDark = '#a1a1aa';
  }

  const dark: ThemeColors = {
    background: createToken('Background', darkBg, '--background'),
    foreground: createToken('Foreground', darkFg, '--foreground'),
    primary: createToken('Primary', darkPrimary, '--primary'),
    primaryForeground: createToken('Primary Foreground', primaryFgDark, '--primary-foreground'),
    secondary: createToken('Secondary', secondaryDark, '--secondary'),
    secondaryForeground: createToken('Secondary Foreground', secondaryFgDark, '--secondary-foreground'),
    muted: createToken('Muted', mutedDark, '--muted'),
    mutedForeground: createToken('Muted Foreground', mutedFgDark, '--muted-foreground'),
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
    popoverForeground: createToken('Popover Foreground', darkFg, '--popover-foreground'),
  };

  return { light, dark };
};