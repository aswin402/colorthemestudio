import chroma from 'chroma-js';
import { formatHex, oklch as culoriOklch } from 'culori';
import type { ThemeTemperature } from '../types';

export const hexToOklchString = (hex: string): string => {
  try {
    const oklchColor = culoriOklch(hex);
    if (!oklchColor) return '0 0 0';
    const l = (oklchColor.l || 0).toFixed(3);
    const c = (oklchColor.c || 0).toFixed(3);
    const h = (oklchColor.h || 0).toFixed(3);
    return `${l} ${c} ${h}`;
  } catch {
    return '0 0 0';
  }
};

export const hexToHslString = (hex: string): string => {
  try {
    const [h, s, l] = chroma(hex).hsl();
    const hue = isNaN(h) ? 0 : Math.round(h);
    return `${hue}° ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  } catch {
    return '0° 0% 0%';
  }
};

export const oklchStringToHex = (oklchStr: string): string => {
  try {
    const [l, c, h] = oklchStr.split(' ').map(Number);
    const color = { mode: 'oklch' as const, l, c, h: isNaN(h) ? 0 : h };
    return formatHex(color) || '#000000';
  } catch {
    return '#000000';
  }
};

export const calculateContrastRatio = (color1: string, color2: string): number => {
  try {
    return chroma.contrast(color1, color2);
  } catch {
    return 1;
  }
};

export const getAccessibleTextColor = (hex: string): string => {
  try {
    return chroma(hex).luminance() > 0.45 ? '#000000' : '#ffffff';
  } catch {
    return '#ffffff';
  }
};

export const adjustTemperature = (hex: string, temp: ThemeTemperature): string => {
  if (temp === 'natural') return hex;
  try {
    const mixColor = temp === 'warmer' ? '#ffaa00' : '#00aaff';
    return chroma.mix(hex, mixColor, 0.08, 'rgb').hex();
  } catch {
    return hex;
  }
};