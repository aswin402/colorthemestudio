import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { Copy, Check } from 'lucide-react';
import type { ThemeColors } from '../../types';

interface CodeSnippetProps {
    filename: string;
    code: string;
}

const CodeSnippet = ({ filename, code }: CodeSnippetProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group flex flex-col bg-zinc-950 p-6 rounded-xl border border-white/10 shadow-sm shrink-0 mt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">{filename}</h3>
                <button
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <pre className="overflow-x-auto w-full text-zinc-300 text-sm font-mono leading-relaxed scrollbar-hide pb-4">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export const FlutterExport = () => {
    const { theme } = useThemeStore();

    const getDartColor = (hex: string) => `Color(0xFF${hex.replace('#', '').toUpperCase()})`;

    const appColorExtensionDart = `import 'package:flutter/material.dart';
import 'app_colors.dart';

@immutable
class AppColorExtension extends ThemeExtension<AppColorExtension> {

  //Card ==========================================================
  final Color card;
  final Color cardForeground;

  //Navbar================================================
  final Color navbar;

  //Input================================================
  final Color inputBackground;
  final Color inputBorder;

  //Button=====================================================
  final Color buttonBackground;
  final Color buttonForeground;
  final Color secondaryButtonBackground;
  final Color secondaryButtonForeground;

  //Misc =====================================================
  final Color muted;
  final Color mutedForeground;
  final Color border;

  const AppColorExtension({
    required this.card,
    required this.cardForeground,
    required this.navbar,
    required this.inputBackground,
    required this.inputBorder,
    required this.buttonBackground,
    required this.buttonForeground,
    required this.secondaryButtonBackground,
    required this.secondaryButtonForeground,
    required this.muted,
    required this.mutedForeground,
    required this.border,
  });

  //Presets =========================================================

  static const light = AppColorExtension(
    card:                       LightColors.card,
    cardForeground:             LightColors.cardForeground,
    navbar:                     LightColors.navbar,
    inputBackground:            LightColors.inputBackground,
    inputBorder:                LightColors.inputBorder,
    buttonBackground:           LightColors.buttonBackground,
    buttonForeground:           LightColors.buttonForeground,
    secondaryButtonBackground:  LightColors.secondaryButtonBackground,
    secondaryButtonForeground:  LightColors.secondaryButtonForeground,
    muted:                      LightColors.muted,
    mutedForeground:            LightColors.mutedForeground,
    border:                     LightColors.border,
  );

  static const dark = AppColorExtension(
    card:                       DarkColors.card,
    cardForeground:             DarkColors.cardForeground,
    navbar:                     DarkColors.navbar,
    inputBackground:            DarkColors.inputBackground,
    inputBorder:                DarkColors.inputBorder,
    buttonBackground:           DarkColors.buttonBackground,
    buttonForeground:           DarkColors.buttonForeground,
    secondaryButtonBackground:  DarkColors.secondaryButtonBackground,
    secondaryButtonForeground:  DarkColors.secondaryButtonForeground,
    muted:                      DarkColors.muted,
    mutedForeground:            DarkColors.mutedForeground,
    border:                     DarkColors.border,
  );

  //Required overrides =============================================

  @override
  AppColorExtension copyWith({
    Color? card,
    Color? cardForeground,
    Color? navbar,
    Color? inputBackground,
    Color? inputBorder,
    Color? buttonBackground,
    Color? buttonForeground,
    Color? secondaryButtonBackground,
    Color? secondaryButtonForeground,
    Color? muted,
    Color? mutedForeground,
    Color? border,
  }) => AppColorExtension(
    card:                      card                      ?? this.card,
    cardForeground:            cardForeground            ?? this.cardForeground,
    navbar:                    navbar                    ?? this.navbar,
    inputBackground:           inputBackground           ?? this.inputBackground,
    inputBorder:               inputBorder               ?? this.inputBorder,
    buttonBackground:          buttonBackground          ?? this.buttonBackground,
    buttonForeground:          buttonForeground          ?? this.buttonForeground,
    secondaryButtonBackground: secondaryButtonBackground ?? this.secondaryButtonBackground,
    secondaryButtonForeground: secondaryButtonForeground ?? this.secondaryButtonForeground,
    muted:                     muted                     ?? this.muted,
    mutedForeground:           mutedForeground           ?? this.mutedForeground,
    border:                    border                    ?? this.border,
  );

  @override
  AppColorExtension lerp(AppColorExtension? other, double t) {
    if (other == null) return this;
    return AppColorExtension(
      card:                      Color.lerp(card,                      other.card,                      t)!,
      cardForeground:            Color.lerp(cardForeground,            other.cardForeground,            t)!,
      navbar:                    Color.lerp(navbar,                    other.navbar,                    t)!,
      inputBackground:           Color.lerp(inputBackground,           other.inputBackground,           t)!,
      inputBorder:               Color.lerp(inputBorder,               other.inputBorder,               t)!,
      buttonBackground:          Color.lerp(buttonBackground,          other.buttonBackground,          t)!,
      buttonForeground:          Color.lerp(buttonForeground,          other.buttonForeground,          t)!,
      secondaryButtonBackground: Color.lerp(secondaryButtonBackground, other.secondaryButtonBackground, t)!,
      secondaryButtonForeground: Color.lerp(secondaryButtonForeground, other.secondaryButtonForeground, t)!,
      muted:                     Color.lerp(muted,                     other.muted,                     t)!,
      mutedForeground:           Color.lerp(mutedForeground,           other.mutedForeground,           t)!,
      border:                    Color.lerp(border,                    other.border,                    t)!,
    );
  }
}`;

    const generateAppColorsDart = (light: ThemeColors, dark: ThemeColors) => `import 'package:flutter/material.dart';

abstract final class LightColors {
  //colorscheme==========================================
  static const primary             = ${getDartColor(light.primary.hexValue)};
  static const onPrimary           = ${getDartColor(light.primaryForeground.hexValue)};
  static const primaryContainer    = ${getDartColor(light.primary.hexValue)};
  static const onPrimaryContainer  = ${getDartColor(light.primaryForeground.hexValue)};
  static const secondary           = ${getDartColor(light.secondary.hexValue)};
  static const onSecondary         = ${getDartColor(light.secondaryForeground.hexValue)};
  static const secondaryContainer  = ${getDartColor(light.secondary.hexValue)};
  static const onSecondaryContainer= ${getDartColor(light.secondaryForeground.hexValue)};
  static const surface             = ${getDartColor(light.background.hexValue)};
  static const onSurface           = ${getDartColor(light.foreground.hexValue)};
  static const error               = ${getDartColor(light.destructive.hexValue)};
  static const onError             = ${getDartColor(light.destructiveForeground.hexValue)};
  static const outline             = ${getDartColor(light.border.hexValue)};
  static const outlineVariant      = ${getDartColor(light.input.hexValue)};
  static const surfaceTint         = ${getDartColor(light.primary.hexValue)};
  
  //extension================================================
  static const card                      = ${getDartColor(light.card.hexValue)};
  static const cardForeground            = ${getDartColor(light.cardForeground.hexValue)};
  static const navbar                    = ${getDartColor(light.muted.hexValue)}; // Mapping muted or popover to navbar
  static const inputBackground           = ${getDartColor(light.background.hexValue)};
  static const inputBorder               = ${getDartColor(light.border.hexValue)};
  static const buttonBackground          = ${getDartColor(light.primary.hexValue)};
  static const buttonForeground          = ${getDartColor(light.primaryForeground.hexValue)};
  static const secondaryButtonBackground = ${getDartColor(light.secondary.hexValue)};
  static const secondaryButtonForeground = ${getDartColor(light.secondaryForeground.hexValue)};
  static const muted                     = ${getDartColor(light.muted.hexValue)};
  static const mutedForeground           = ${getDartColor(light.mutedForeground.hexValue)};
  static const border                    = ${getDartColor(light.border.hexValue)};
}

abstract final class DarkColors {
  //colorscheme=============================================
  static const primary             = ${getDartColor(dark.primary.hexValue)};
  static const onPrimary           = ${getDartColor(dark.primaryForeground.hexValue)};
  static const primaryContainer    = ${getDartColor(dark.primary.hexValue)};
  static const onPrimaryContainer  = ${getDartColor(dark.primaryForeground.hexValue)};
  static const secondary           = ${getDartColor(dark.secondary.hexValue)};
  static const onSecondary         = ${getDartColor(dark.secondaryForeground.hexValue)};
  static const secondaryContainer  = ${getDartColor(dark.secondary.hexValue)};
  static const onSecondaryContainer= ${getDartColor(dark.secondaryForeground.hexValue)};
  static const surface             = ${getDartColor(dark.background.hexValue)};
  static const onSurface           = ${getDartColor(dark.foreground.hexValue)};
  static const error               = ${getDartColor(dark.destructive.hexValue)};
  static const onError             = ${getDartColor(dark.destructiveForeground.hexValue)};
  static const outline             = ${getDartColor(dark.border.hexValue)};
  static const outlineVariant      = ${getDartColor(dark.input.hexValue)};
  static const surfaceTint         = ${getDartColor(dark.primary.hexValue)};
  
  //lightcolors=============================================
  static const card                      = ${getDartColor(dark.card.hexValue)};
  static const cardForeground            = ${getDartColor(dark.cardForeground.hexValue)};
  static const navbar                    = ${getDartColor(dark.muted.hexValue)}; // Mapping muted
  static const inputBackground           = ${getDartColor(dark.background.hexValue)};
  static const inputBorder               = ${getDartColor(dark.border.hexValue)};
  static const buttonBackground          = ${getDartColor(dark.primary.hexValue)};
  static const buttonForeground          = ${getDartColor(dark.primaryForeground.hexValue)};
  static const secondaryButtonBackground = ${getDartColor(dark.secondary.hexValue)};
  static const secondaryButtonForeground = ${getDartColor(dark.secondaryForeground.hexValue)};
  static const muted                     = ${getDartColor(dark.muted.hexValue)};
  static const mutedForeground           = ${getDartColor(dark.mutedForeground.hexValue)};
  static const border                    = ${getDartColor(dark.border.hexValue)};
}`;

    const appTextStylesDart = `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'app_colors.dart';

abstract final class AppTextStyles {

  static TextTheme get light => _build(LightColors.onSurface);
  static TextTheme get dark  => _build(DarkColors.onSurface);

  static TextTheme _build(Color textColor) => TextTheme(
    headlineLarge: GoogleFonts.poppins(
      fontSize: 32, fontWeight: FontWeight.w700, color: textColor,
    ),
    headlineMedium: GoogleFonts.poppins(
      fontSize: 24, fontWeight: FontWeight.w600, color: textColor,
    ),
    titleLarge: GoogleFonts.poppins(
      fontSize: 20, fontWeight: FontWeight.w600, color: textColor,
    ),
    bodyLarge: GoogleFonts.roboto(
      fontSize: 16, fontWeight: FontWeight.w400, color: textColor,
    ),
    bodyMedium: GoogleFonts.roboto(
      fontSize: 14, fontWeight: FontWeight.w400, color: textColor,
    ),
    labelLarge: GoogleFonts.roboto(
      fontSize: 14, fontWeight: FontWeight.w700, color: textColor,
    ),
  );
}`;

    const appThemesDart = `import 'package:flutter/material.dart';
import 'light_theme.dart';
import 'dark_theme.dart';

class AppTheme {
  static ThemeData get light => lightTheme;
  static ThemeData get dark => darkTheme;
}`;

    const componentThemesDart = `import 'package:flutter/material.dart';

class ComponentThemes {
  static AppBarTheme appBarTheme({
    required Color backgroundColor,
    required Color foregroundColor,
  }) => AppBarTheme(
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    elevation: 0,
    centerTitle: false,
  );

  static ElevatedButtonThemeData elevatedButtonTheme({
    required Color backgroundColor,
    required Color foregroundColor,
  }) => ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      foregroundColor: foregroundColor,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
    ),
  );
}`;

    const darkThemeDart = `import 'package:flutter/material.dart';

import 'app_colors.dart';
import 'app_text_styles.dart';
import 'component_themes.dart';
import 'app_color_extension.dart';

final ThemeData darkTheme = ThemeData(
  useMaterial3: true,
  colorScheme: const ColorScheme.dark(
    primary:              DarkColors.primary,
    onPrimary:            DarkColors.onPrimary,
    primaryContainer:     DarkColors.primaryContainer,
    onPrimaryContainer:   DarkColors.onPrimaryContainer,
    secondary:            DarkColors.secondary,
    onSecondary:          DarkColors.onSecondary,
    secondaryContainer:   DarkColors.secondaryContainer,
    onSecondaryContainer: DarkColors.onSecondaryContainer,
    surface:              DarkColors.surface,
    onSurface:            DarkColors.onSurface,
    error:                DarkColors.error,
    onError:              DarkColors.onError,
    outline:              DarkColors.outline,
    outlineVariant:       DarkColors.outlineVariant,
    surfaceTint:          DarkColors.surfaceTint,
  ),
  extensions: const [AppColorExtension.dark],
  scaffoldBackgroundColor: DarkColors.surface,    
  textTheme:               AppTextStyles.dark,
  appBarTheme: ComponentThemes.appBarTheme(
    backgroundColor: DarkColors.surface,
    foregroundColor: DarkColors.onSurface,
  ),
  elevatedButtonTheme: ComponentThemes.elevatedButtonTheme(
    backgroundColor: DarkColors.primary,
    foregroundColor: DarkColors.onPrimary,
  ),
);`;

    const lightThemeDart = `import 'package:flutter/material.dart';

import 'app_colors.dart';
import 'app_text_styles.dart';
import 'component_themes.dart';
import 'app_color_extension.dart';

final ThemeData lightTheme = ThemeData(
  useMaterial3: true,
  colorScheme: const ColorScheme.light(
    primary:              LightColors.primary,
    onPrimary:            LightColors.onPrimary,
    primaryContainer:     LightColors.primaryContainer,
    onPrimaryContainer:   LightColors.onPrimaryContainer,
    secondary:            LightColors.secondary,
    onSecondary:          LightColors.onSecondary,
    secondaryContainer:   LightColors.secondaryContainer,
    onSecondaryContainer: LightColors.onSecondaryContainer,
    surface:              LightColors.surface,
    onSurface:            LightColors.onSurface,
    error:                LightColors.error,
    onError:              LightColors.onError,
    outline:              LightColors.outline,
    outlineVariant:       LightColors.outlineVariant,
    surfaceTint:          LightColors.surfaceTint,
  ),
  extensions: const [AppColorExtension.light],
  scaffoldBackgroundColor: LightColors.surface,   
  textTheme: AppTextStyles.light,   
  appBarTheme: ComponentThemes.appBarTheme(
    backgroundColor: LightColors.surface,
    foregroundColor: LightColors.onSurface,
  ),
  elevatedButtonTheme: ComponentThemes.elevatedButtonTheme(
    backgroundColor: LightColors.primary,
    foregroundColor: LightColors.onPrimary,
  ),
);`;

    const themeProviderDart = `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final themeModeProvider = StateProvider<ThemeMode>((ref) {
  return ThemeMode.system;
});

class ThemeNotifier extends StateNotifier<ThemeMode> {
  ThemeNotifier() : super(ThemeMode.system);

  void setThemeMode(ThemeMode mode) {
    state = mode;
  }

  void toggleTheme() {
    if (state == ThemeMode.light) {
      state = ThemeMode.dark;
    } else {
      state = ThemeMode.light;
    }
  }
}

final themeProvider = StateNotifierProvider<ThemeNotifier, ThemeMode>((ref) {
  return ThemeNotifier();
});`;

    const contextExtensionDart = `import 'package:flutter/material.dart';
import '../theme/app_color_extension.dart';

extension ThemeContext on BuildContext {
  ThemeData get theme => Theme.of(this);
  TextTheme get textTheme => theme.textTheme;
  ColorScheme get cs => theme.colorScheme;
  AppColorExtension get ac => theme.extension<AppColorExtension>()!;
}`;

    return (
        <div>
            <CodeSnippet filename="app_color_extension.dart" code={appColorExtensionDart} />
            <CodeSnippet filename="app_colors.dart" code={generateAppColorsDart(theme.light, theme.dark)} />
            <CodeSnippet filename="app_text_styles.dart" code={appTextStylesDart} />
            <CodeSnippet filename="app_themes.dart" code={appThemesDart} />
            <CodeSnippet filename="component_themes.dart" code={componentThemesDart} />
            <CodeSnippet filename="dark_theme.dart" code={darkThemeDart} />
            <CodeSnippet filename="light_theme.dart" code={lightThemeDart} />
            <CodeSnippet filename="theme_provider.dart" code={themeProviderDart} />
            <CodeSnippet filename="context_extension.dart" code={contextExtensionDart} />
        </div>
    );
};
