import chroma from 'chroma-js';
import { formatHex, oklch as culoriOklch } from 'culori';
import type { ThemeTemperature } from '../types';

export const hexToOklchString = (hex: string): string => {
  const oklchColor = culoriOklch(hex);
  if (!oklchColor) return '0 0 0';
  const l = (oklchColor.l || 0).toFixed(3);
  const c = (oklchColor.c || 0).toFixed(3);
  const h = (oklchColor.h || 0).toFixed(3);
  return `${l} ${c} ${h}`;
};

export const hexToHslString = (hex: string): string => {
  // chroma().hsl() returns [h, s, l] where h is 0-360 or NaN (for greys), and s/l are 0-1
  const [h, s, l] = chroma(hex).hsl();
  const hue = isNaN(h) ? 0 : Math.round(h);
  return `${hue}° ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const oklchStringToHex = (oklchStr: string): string => {
  const [l, c, h] = oklchStr.split(' ').map(Number);
  const color = { mode: 'oklch' as const, l, c, h: isNaN(h) ? 0 : h };
  return formatHex(color) || '#000000';
};

export const calculateContrastRatio = (color1: string, color2: string): number => {
  return chroma.contrast(color1, color2);
};

export const getAccessibleTextColor = (hex: string): string => {
  // Provide reliable contrast against the background hex
  return chroma(hex).luminance() > 0.45 ? '#000000' : '#ffffff';
};

export const adjustTemperature = (hex: string, temp: ThemeTemperature): string => {
  if (temp === 'natural') return hex;
  const mixColor = temp === 'warmer' ? '#ffaa00' : '#00aaff';
  return chroma.mix(hex, mixColor, 0.08, 'rgb').hex();
};
