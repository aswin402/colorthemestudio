import { useThemeStore } from '../../store/useThemeStore';
import type { ThemeColors } from '../../types';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const formatFlutterTheme = (light: ThemeColors, dark: ThemeColors) => {
  const getDartColor = (hex: string) => `Color(0xFF${hex.replace('#', '').toUpperCase()})`;

  return `import 'package:flutter/material.dart';

class AppTheme {
  static const ColorScheme lightColorScheme = ColorScheme(
    brightness: Brightness.light,
    primary: ${getDartColor(light.primary.hexValue)},
    onPrimary: ${getDartColor(light.primaryForeground.hexValue)},
    primaryContainer: ${getDartColor(light.primary.hexValue)},
    onPrimaryContainer: ${getDartColor(light.primaryForeground.hexValue)},
    secondary: ${getDartColor(light.accent.hexValue)},
    onSecondary: ${getDartColor(light.accentForeground.hexValue)},
    secondaryContainer: ${getDartColor(light.secondary.hexValue)},
    onSecondaryContainer: ${getDartColor(light.secondaryForeground.hexValue)},
    surface: ${getDartColor(light.background.hexValue)},
    onSurface: ${getDartColor(light.foreground.hexValue)},
    error: ${getDartColor(light.destructive.hexValue)},
    onError: ${getDartColor(light.destructiveForeground.hexValue)},
    outline: ${getDartColor(light.border.hexValue)},
    outlineVariant: ${getDartColor(light.input.hexValue)},
    surfaceTint: ${getDartColor(light.primary.hexValue)},
  );

  static const ColorScheme darkColorScheme = ColorScheme(
    brightness: Brightness.dark,
    primary: ${getDartColor(dark.primary.hexValue)},
    onPrimary: ${getDartColor(dark.primaryForeground.hexValue)},
    primaryContainer: ${getDartColor(dark.primary.hexValue)},
    onPrimaryContainer: ${getDartColor(dark.primaryForeground.hexValue)},
    secondary: ${getDartColor(dark.accent.hexValue)},
    onSecondary: ${getDartColor(dark.accentForeground.hexValue)},
    secondaryContainer: ${getDartColor(dark.secondary.hexValue)},
    onSecondaryContainer: ${getDartColor(dark.secondaryForeground.hexValue)},
    surface: ${getDartColor(dark.background.hexValue)},
    onSurface: ${getDartColor(dark.foreground.hexValue)},
    error: ${getDartColor(dark.destructive.hexValue)},
    onError: ${getDartColor(dark.destructiveForeground.hexValue)},
    outline: ${getDartColor(dark.border.hexValue)},
    outlineVariant: ${getDartColor(dark.input.hexValue)},
    surfaceTint: ${getDartColor(dark.primary.hexValue)},
  );

  static ThemeData get lightTheme => ThemeData(
    useMaterial3: true,
    colorScheme: lightColorScheme,
  );

  static ThemeData get darkTheme => ThemeData(
    useMaterial3: true,
    colorScheme: darkColorScheme,
  );
}`;
};

export const FlutterTheme = () => {
  const { theme } = useThemeStore();
  const [copied, setCopied] = useState(false);

  const flutterString = formatFlutterTheme(theme.light, theme.dark);

  const handleCopy = () => {
    navigator.clipboard.writeText(flutterString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group h-full flex flex-col">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-1.5 text-xs font-medium"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="flex-1 bg-zinc-950 text-zinc-300 p-5 rounded-xl overflow-x-auto overflow-y-auto text-xs font-mono leading-relaxed border border-white/10 scrollbar-thin">
        <code>{flutterString}</code>
      </pre>
    </div>
  );
};