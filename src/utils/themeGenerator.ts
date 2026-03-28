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

  const chartLight = [primaryHex, '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
  try {
    chartLight[1] = chroma(primaryHex).set('hsl.h', '+60').hex();
    chartLight[2] = chroma(primaryHex).set('hsl.h', '+120').hex();
    chartLight[3] = chroma(primaryHex).set('hsl.h', '+180').hex();
    chartLight[4] = chroma(primaryHex).set('hsl.h', '+240').hex();
  } catch {}

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
    sidebarBackground: createToken('Sidebar Background', '#fafafa', '--sidebar-background'),
    sidebarForeground: createToken('Sidebar Foreground', lightFg, '--sidebar-foreground'),
    sidebarPrimary: createToken('Sidebar Primary', primaryHex, '--sidebar-primary'),
    sidebarPrimaryForeground: createToken('Sidebar Primary Foreground', primaryFgLight, '--sidebar-primary-foreground'),
    sidebarAccent: createToken('Sidebar Accent', secondaryLight, '--sidebar-accent'),
    sidebarAccentForeground: createToken('Sidebar Accent Foreground', secondaryFgLight, '--sidebar-accent-foreground'),
    sidebarBorder: createToken('Sidebar Border', borderLight, '--sidebar-border'),
    sidebarRing: createToken('Sidebar Ring', primaryHex, '--sidebar-ring'),
    chart1: createToken('Chart 1', chartLight[0], '--chart-1'),
    chart2: createToken('Chart 2', chartLight[1], '--chart-2'),
    chart3: createToken('Chart 3', chartLight[2], '--chart-3'),
    chart4: createToken('Chart 4', chartLight[3], '--chart-4'),
    chart5: createToken('Chart 5', chartLight[4], '--chart-5'),
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

  const chartDark = [darkPrimary, '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
  try {
    chartDark[1] = chroma(darkPrimary).set('hsl.h', '+60').hex();
    chartDark[2] = chroma(darkPrimary).set('hsl.h', '+120').hex();
    chartDark[3] = chroma(darkPrimary).set('hsl.h', '+180').hex();
    chartDark[4] = chroma(darkPrimary).set('hsl.h', '+240').hex();
  } catch {}

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
    sidebarBackground: createToken('Sidebar Background', darkBg, '--sidebar-background'),
    sidebarForeground: createToken('Sidebar Foreground', darkFg, '--sidebar-foreground'),
    sidebarPrimary: createToken('Sidebar Primary', darkPrimary, '--sidebar-primary'),
    sidebarPrimaryForeground: createToken('Sidebar Primary Foreground', primaryFgDark, '--sidebar-primary-foreground'),
    sidebarAccent: createToken('Sidebar Accent', secondaryDark, '--sidebar-accent'),
    sidebarAccentForeground: createToken('Sidebar Accent Foreground', secondaryFgDark, '--sidebar-accent-foreground'),
    sidebarBorder: createToken('Sidebar Border', borderDark, '--sidebar-border'),
    sidebarRing: createToken('Sidebar Ring', darkPrimary, '--sidebar-ring'),
    chart1: createToken('Chart 1', chartDark[0], '--chart-1'),
    chart2: createToken('Chart 2', chartDark[1], '--chart-2'),
    chart3: createToken('Chart 3', chartDark[2], '--chart-3'),
    chart4: createToken('Chart 4', chartDark[3], '--chart-4'),
    chart5: createToken('Chart 5', chartDark[4], '--chart-5'),
  };

  return { light, dark };
};