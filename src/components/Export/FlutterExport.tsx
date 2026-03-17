import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { Copy, Check } from 'lucide-react';

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
    const { theme, componentConfig } = useThemeStore();

    const getDartColor = (hex: string) => `Color(0xFF${hex.replace('#', '').toUpperCase()})`;
    
    const formatGoogleFontMethod = (fontName: string) => {
        const parts = fontName.split(' ');
        if (parts.length === 0) return 'poppins';
        const first = parts[0].toLowerCase();
        const rest = parts.slice(1).map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());
        return [first, ...rest].join('');
    };

    const getRadiusPixels = (size: string) => {
        switch (size) {
            case 'none': return 0;
            case 'sm': return 4;
            case 'md': return 8;
            case 'lg': return 12;
            case 'full': return 99;
            default: return 8;
        }
    };

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

    const appColorsDart = `import 'package:flutter/material.dart';

abstract final class LightColors {
  //colorscheme==========================================
  static const primary             = \`${getDartColor(theme.light.primary.hexValue)}\`;
  static const onPrimary           = \`${getDartColor(theme.light.primaryForeground.hexValue)}\`;
  static const primaryContainer    = \`${getDartColor(theme.light.primary.hexValue)}\`;
  static const onPrimaryContainer  = \`${getDartColor(theme.light.primaryForeground.hexValue)}\`;
  static const secondary           = \`${getDartColor(theme.light.secondary.hexValue)}\`;
  static const onSecondary         = \`${getDartColor(theme.light.secondaryForeground.hexValue)}\`;
  static const secondaryContainer  = \`${getDartColor(theme.light.secondary.hexValue)}\`;
  static const onSecondaryContainer= \`${getDartColor(theme.light.secondaryForeground.hexValue)}\`;
  static const surface             = \`${getDartColor(theme.light.background.hexValue)}\`;
  static const onSurface           = \`${getDartColor(theme.light.foreground.hexValue)}\`;
  static const error               = \`${getDartColor(theme.light.destructive.hexValue)}\`;
  static const onError             = \`${getDartColor(theme.light.destructiveForeground.hexValue)}\`;
  static const outline             = \`${getDartColor(theme.light.border.hexValue)}\`;
  static const outlineVariant      = \`${getDartColor(theme.light.border.hexValue)}\`;
  static const surfaceTint         = \`${getDartColor(theme.light.primary.hexValue)}\`;
  
  
  //extension================================================
  static const card                      = \`${getDartColor(theme.light.card.hexValue)}\`;
  static const cardForeground            = \`${getDartColor(theme.light.cardForeground.hexValue)}\`;
  static const navbar                    = \`${getDartColor(theme.light.muted.hexValue)}\`;
  static const inputBackground           = \`${getDartColor(theme.light.background.hexValue)}\`;
  static const inputBorder               = \`${getDartColor(theme.light.border.hexValue)}\`;
  static const buttonBackground          = \`${getDartColor(theme.light.primary.hexValue)}\`;
  static const buttonForeground          = ${getDartColor(theme.light.primaryForeground.hexValue)};
  static const secondaryButtonBackground = ${getDartColor(theme.light.secondary.hexValue)};
  static const secondaryButtonForeground = ${getDartColor(theme.light.secondaryForeground.hexValue)};
  static const muted                     = ${getDartColor(theme.light.muted.hexValue)};
  static const mutedForeground           = ${getDartColor(theme.light.mutedForeground.hexValue)};
  static const border                    = ${getDartColor(theme.light.border.hexValue)};
}

abstract final class DarkColors {
  //colorscheme=============================================
  static const primary             = ${getDartColor(theme.dark.primary.hexValue)};
  static const onPrimary           = ${getDartColor(theme.dark.primaryForeground.hexValue)};
  static const primaryContainer    = ${getDartColor(theme.dark.primary.hexValue)};
  static const onPrimaryContainer  = ${getDartColor(theme.dark.primaryForeground.hexValue)};
  static const secondary           = ${getDartColor(theme.dark.secondary.hexValue)};
  static const onSecondary         = ${getDartColor(theme.dark.secondaryForeground.hexValue)};
  static const secondaryContainer  = ${getDartColor(theme.dark.secondary.hexValue)};
  static const onSecondaryContainer= ${getDartColor(theme.dark.secondaryForeground.hexValue)};
  static const surface             = ${getDartColor(theme.dark.background.hexValue)};
  static const onSurface           = ${getDartColor(theme.dark.foreground.hexValue)};
  static const error               = ${getDartColor(theme.dark.destructive.hexValue)};
  static const onError             = ${getDartColor(theme.dark.destructiveForeground.hexValue)};
  static const outline             = ${getDartColor(theme.dark.border.hexValue)};
  static const outlineVariant      = ${getDartColor(theme.dark.border.hexValue)};
  static const surfaceTint         = ${getDartColor(theme.dark.primary.hexValue)};
  

  //extension=============================================
  static const card                      = ${getDartColor(theme.dark.card.hexValue)};
  static const cardForeground            = ${getDartColor(theme.dark.cardForeground.hexValue)};
  static const navbar                    = ${getDartColor(theme.dark.muted.hexValue)};
  static const inputBackground           = ${getDartColor(theme.dark.background.hexValue)};
  static const inputBorder               = ${getDartColor(theme.dark.border.hexValue)};
  static const buttonBackground          = ${getDartColor(theme.dark.primary.hexValue)};
  static const buttonForeground          = ${getDartColor(theme.dark.primaryForeground.hexValue)};
  static const secondaryButtonBackground = ${getDartColor(theme.dark.secondary.hexValue)};
  static const secondaryButtonForeground = ${getDartColor(theme.dark.secondaryForeground.hexValue)};
  static const muted                     = ${getDartColor(theme.dark.muted.hexValue)};
  static const mutedForeground           = ${getDartColor(theme.dark.mutedForeground.hexValue)};
  static const border                    = ${getDartColor(theme.dark.border.hexValue)};
}`;

    const appTextStyleDart = `import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'app_colors.dart';

abstract final class AppTextStyles {

  static TextTheme get light => _build(LightColors.onSurface);
  static TextTheme get dark  => _build(DarkColors.onSurface);

  static TextTheme _build(Color textColor) => TextTheme(
    headlineLarge: GoogleFonts.${formatGoogleFontMethod(componentConfig.headingFont)}(
      fontSize: 32, fontWeight: FontWeight.w${componentConfig.headingWeight}, color: textColor,
    ),
    headlineMedium: GoogleFonts.${formatGoogleFontMethod(componentConfig.headingFont)}(
      fontSize: 24, fontWeight: FontWeight.w${componentConfig.headingWeight}, color: textColor,
    ),
    titleLarge: GoogleFonts.${formatGoogleFontMethod(componentConfig.headingFont)}(
      fontSize: 20, fontWeight: FontWeight.w${componentConfig.headingWeight}, color: textColor,
    ),
    bodyLarge: GoogleFonts.${formatGoogleFontMethod(componentConfig.bodyFont)}(
      fontSize: 16, fontWeight: FontWeight.w${componentConfig.bodyWeight}, color: textColor,
    ),
    bodyMedium: GoogleFonts.${formatGoogleFontMethod(componentConfig.bodyFont)}(
      fontSize: 14, fontWeight: FontWeight.w${componentConfig.bodyWeight}, color: textColor,
    ),
    labelLarge: GoogleFonts.${formatGoogleFontMethod(componentConfig.bodyFont)}(
      fontSize: 14, fontWeight: FontWeight.w${componentConfig.headingWeight}, color: textColor,
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

    const darkThemeDart = `import 'package:flutter/material.dart';
import 'app_color_extension.dart';
import 'app_colors.dart';
import 'app_text_style.dart';
import 'components/component_themes.dart';


const _scheme = ColorScheme.dark(
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
);

final ThemeData darkTheme = ThemeData(
  useMaterial3:            true,
  colorScheme:             _scheme,
  scaffoldBackgroundColor: DarkColors.surface,
  textTheme:               AppTextStyles.dark,
  appBarTheme:             ComponentThemes.dark(_scheme).appBar,
  elevatedButtonTheme:     ComponentThemes.dark(_scheme).elevatedButton,
  outlinedButtonTheme:     ComponentThemes.dark(_scheme).outlinedButton,
  textButtonTheme:         ComponentThemes.dark(_scheme).textButton,
  inputDecorationTheme:    ComponentThemes.dark(_scheme).input,
  cardTheme:               ComponentThemes.dark(_scheme).card,
  bottomNavigationBarTheme: ComponentThemes.dark(_scheme).bottomNav,
  extensions:              const [AppColorExtension.dark],
);`;

    const lightThemeDart = `import 'package:flutter/material.dart';
import 'app_color_extension.dart';
import 'app_colors.dart';
import 'app_text_style.dart';
import 'components/component_themes.dart';


const _scheme = ColorScheme.light(
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
);

final ThemeData lightTheme = ThemeData(
  useMaterial3:            true,
  colorScheme:             _scheme,
  scaffoldBackgroundColor: LightColors.surface,
  textTheme:               AppTextStyles.light,
  appBarTheme:             ComponentThemes.light(_scheme).appBar,
  elevatedButtonTheme:     ComponentThemes.light(_scheme).elevatedButton,
  outlinedButtonTheme:     ComponentThemes.light(_scheme).outlinedButton,
  textButtonTheme:         ComponentThemes.light(_scheme).textButton,
  inputDecorationTheme:    ComponentThemes.light(_scheme).input,
  cardTheme:               ComponentThemes.light(_scheme).card,
  bottomNavigationBarTheme: ComponentThemes.light(_scheme).bottomNav,
  extensions:              const [AppColorExtension.light],
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

    const appBarThemeDart = `import 'package:flutter/material.dart';

class AppBarStyles {
  static AppBarTheme build({
    required Color backgroundColor,
    required Color foregroundColor,
  }) => AppBarTheme(
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    elevation: 0,
    centerTitle: false,
    scrolledUnderElevation: 0,
  );
}`;

    const bottomNavThemeDart = `import 'package:flutter/material.dart';

class BottomNavStyles {
  static BottomNavigationBarThemeData build({
    required Color backgroundColor,
    required Color selectedColor,
    required Color unselectedColor,
  }) => BottomNavigationBarThemeData(
    backgroundColor: backgroundColor,
    selectedItemColor: selectedColor,
    unselectedItemColor: unselectedColor,
    elevation: 0,
    type: BottomNavigationBarType.fixed,
  );
}`;

    const buttonThemeDart = `import 'package:flutter/material.dart';

class ButtonStyles {
  static ElevatedButtonThemeData elevated({
    required Color backgroundColor,
    required Color foregroundColor,
  }) => ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: backgroundColor,
      foregroundColor: foregroundColor,
      elevation: 0,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.buttonRadius)})),
    ),
  );

  static OutlinedButtonThemeData outlined({
    required Color foregroundColor,
    required Color borderColor,
  }) => OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      foregroundColor: foregroundColor,
      side: BorderSide(color: borderColor),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.buttonRadius)})),
    ),
  );

  static TextButtonThemeData text({
    required Color foregroundColor,
  }) => TextButtonThemeData(
    style: TextButton.styleFrom(
      foregroundColor: foregroundColor,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
    ),
  );
}`;

    const cardThemeDart = `import 'package:flutter/material.dart';

class CardStyles {
  static CardThemeData build({
    required Color backgroundColor,
    required Color borderColor,
  }) => CardThemeData(
    color: backgroundColor,
    elevation: 0,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.cardRadius)}),
      side: BorderSide(color: borderColor),
    ),
    margin: EdgeInsets.zero,
  );
}`;

    const componentThemesDart = `import 'package:flutter/material.dart';
import 'appbar_theme.dart';
import 'button_theme.dart';
import 'input_theme.dart';
import 'card_theme.dart';
import 'bottom_nav_theme.dart';

class ComponentThemes {
  final AppBarTheme               appBar;
  final ElevatedButtonThemeData   elevatedButton;
  final OutlinedButtonThemeData   outlinedButton;
  final TextButtonThemeData       textButton;
  final InputDecorationTheme      input;
  final CardThemeData             card;  
  final BottomNavigationBarThemeData bottomNav;

  const ComponentThemes({
    required this.appBar,
    required this.elevatedButton,
    required this.outlinedButton,
    required this.textButton,
    required this.input,
    required this.card,
    required this.bottomNav,
  });

  static ComponentThemes light(ColorScheme cs) => ComponentThemes(
    appBar:         AppBarStyles.build(
                      backgroundColor: cs.surface,
                      foregroundColor: cs.onSurface,
                    ),
    elevatedButton: ButtonStyles.elevated(
                      backgroundColor: cs.primary,
                      foregroundColor: cs.onPrimary,
                    ),
    outlinedButton: ButtonStyles.outlined(
                      foregroundColor: cs.primary,
                      borderColor:     cs.outline,
                    ),
    textButton:     ButtonStyles.text(foregroundColor: cs.primary),
    input:          InputStyles.build(
                      fillColor:          cs.surface,
                      borderColor:        cs.outline,
                      focusedBorderColor: cs.primary,
                      hintColor:          cs.onSurfaceVariant,
                    ),
    card:           CardStyles.build(
                      backgroundColor: cs.surface,
                      borderColor:     cs.outline,
                    ),
    bottomNav:      BottomNavStyles.build(
                      backgroundColor: cs.surface,
                      selectedColor:   cs.primary,
                      unselectedColor: cs.onSurfaceVariant,
                    ),
  );

  static ComponentThemes dark(ColorScheme cs) => ComponentThemes(
    appBar:         AppBarStyles.build(
                      backgroundColor: cs.surface,
                      foregroundColor: cs.onSurface,
                    ),
    elevatedButton: ButtonStyles.elevated(
                      backgroundColor: cs.primary,
                      foregroundColor: cs.onPrimary,
                    ),
    outlinedButton: ButtonStyles.outlined(
                      foregroundColor: cs.primary,
                      borderColor:     cs.outline,
                    ),
    textButton:     ButtonStyles.text(foregroundColor: cs.primary),
    input:          InputStyles.build(
                      fillColor:          cs.surface,
                      borderColor:        cs.outline,
                      focusedBorderColor: cs.primary,
                      hintColor:          cs.onSurfaceVariant,
                    ),
    card:           CardStyles.build(
                      backgroundColor: cs.surface,
                      borderColor:     cs.outline,
                    ),
    bottomNav:      BottomNavStyles.build(
                      backgroundColor: cs.surface,
                      selectedColor:   cs.primary,
                      unselectedColor: cs.onSurfaceVariant,
                    ),
  );
}`;

    const inputThemeDart = `import 'package:flutter/material.dart';

class InputStyles {
  static InputDecorationTheme build({
    required Color fillColor,
    required Color borderColor,
    required Color focusedBorderColor,
    required Color hintColor,
  }) => InputDecorationTheme(
    filled: true,
    fillColor: fillColor,
    hintStyle: TextStyle(color: hintColor, fontSize: 14),
    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.inputRadius)}),
      borderSide: BorderSide(color: borderColor),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.inputRadius)}),
      borderSide: BorderSide(color: borderColor),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.inputRadius)}),
      borderSide: BorderSide(color: focusedBorderColor, width: 1.5),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(${getRadiusPixels(componentConfig.inputRadius)}),
      borderSide: BorderSide(color: Colors.red.shade400),
    ),
  );
}`;

    const contextExtensionDart = `import 'package:flutter/material.dart';
import '../theme/app_color_extension.dart';

extension ThemeContext on BuildContext {
  ThemeData get theme => Theme.of(this);
  TextTheme get textTheme => theme.textTheme;
  ColorScheme get cs => theme.colorScheme;
  AppColorExtension get ac => theme.extension<AppColorExtension>()!;
}`;

    const toggleThemeButtonDart = `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../extension/context_extension.dart';
import '../theme/theme_provider.dart';

class ToggleThemeButton extends ConsumerWidget {
  const ToggleThemeButton({
    super.key,
    this.size = 24.0,
    this.padding,
    this.color,
  });

  final double size;
  final EdgeInsetsGeometry? padding;
  final Color? color;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeProvider);

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: context.ac.card, 
      ),
      child: IconButton(
        icon: Icon(
          themeMode == ThemeMode.light ? Icons.dark_mode : Icons.light_mode,
          size: size,
          color: color,
        ),
        padding: padding ?? EdgeInsets.zero,
        constraints: const BoxConstraints(),
        onPressed: () {
          ref.read(themeProvider.notifier).toggleTheme();
        },
      ),
    );
  }
}`;

    const mainDart = `import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/theme/app_themes.dart';
import 'core/theme/theme_provider.dart';

void main() {
  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeProvider);

    return MaterialApp(
      title: "ColorTheme Studio App",
      debugShowCheckedModeBanner: false,
      themeMode: themeMode,
      darkTheme: AppTheme.dark,
      theme: AppTheme.light,
      home: Scaffold(
        appBar: AppBar(title: Text('Generated Theme')),
        body: Center(child: Text('Setup Successful')),
      ),
    );
  }
}`;

    const files = [
        { name: 'theme/app_color_extension.dart', content: appColorExtensionDart },
        { name: 'theme/app_colors.dart', content: appColorsDart },
        { name: 'theme/app_text_style.dart', content: appTextStyleDart },
        { name: 'theme/app_themes.dart', content: appThemesDart },
        { name: 'theme/dark_theme.dart', content: darkThemeDart },
        { name: 'theme/light_theme.dart', content: lightThemeDart },
        { name: 'theme/theme_provider.dart', content: themeProviderDart },
        { name: 'theme/components/appbar_theme.dart', content: appBarThemeDart },
        { name: 'theme/components/bottom_nav_theme.dart', content: bottomNavThemeDart },
        { name: 'theme/components/button_theme.dart', content: buttonThemeDart },
        { name: 'theme/components/card_theme.dart', content: cardThemeDart },
        { name: 'theme/components/component_themes.dart', content: componentThemesDart },
        { name: 'theme/components/input_theme.dart', content: inputThemeDart },
        { name: 'extension/context_extension.dart', content: contextExtensionDart },
        { name: 'components/toggle_theme_button.dart', content: toggleThemeButtonDart },
        { name: 'main.dart', content: mainDart },
    ];

    return (
        <div className="flex flex-col gap-4 pb-12">
            {files.map(file => (
                <CodeSnippet key={file.name} filename={file.name} code={file.content} />
            ))}
        </div>
    );
};
