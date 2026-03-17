theme/app_color_extension.dart
import 'package:flutter/material.dart';
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
}

theme/app_colors.dart

import 'package:flutter/material.dart';

abstract final class LightColors {
  //colorscheme==========================================
  static const primary             = Color(0xFF23E885);
  static const onPrimary           = Color(0xFF000000);
  static const primaryContainer    = Color(0xFF23E885);
  static const onPrimaryContainer  = Color(0xFF000000);
  static const secondary           = Color(0xFFFFFFFF);
  static const onSecondary         = Color(0xFF18181B);
  static const secondaryContainer  = Color(0xFFFFFFFF);
  static const onSecondaryContainer= Color(0xFF18181B);
  static const surface             = Color(0xFFFFFFFF);
  static const onSurface           = Color(0xFF09090B);
  static const error               = Color(0xFFEF4444);
  static const onError             = Color(0xFFFAFAFA);
  static const outline             = Color(0xFFFFFFFF);
  static const outlineVariant      = Color(0xFFFFFFFF);
  static const surfaceTint         = Color(0xFF23E885);
  
  
  //extension================================================
  static const card                      = Color(0xFFFFFFFF);
   static const cardForeground            = Color(0xFF09090B);
   static const navbar                    = Color(0xFFF4F4F5);
   static const inputBackground           = Color(0xFFFFFFFF);
   static const inputBorder               = Color(0xFFE4E4E7);
   static const buttonBackground          = Color(0xFF23E885);
   static const buttonForeground          = Color(0xFF000000);
   static const secondaryButtonBackground = Color(0xFFF4F4F5);
   static const secondaryButtonForeground = Color(0xFF18181B);
   static const muted                     = Color(0xFFF4F4F5);
   static const mutedForeground           = Color(0xFF71717A);
   static const border                    = Color(0xFFE4E4E7);
}

abstract final class DarkColors {
  //colorscheme=============================================
  static const primary             = Color(0xFF6CFFA6);
  static const onPrimary           = Color(0xFF000000);
  static const primaryContainer    = Color(0xFF6CFFA6);
  static const onPrimaryContainer  = Color(0xFF000000);
  static const secondary           = Color(0xFF0F6337);
  static const onSecondary         = Color(0xFFFAFAFA);
  static const secondaryContainer  = Color(0xFF0F6337);
  static const onSecondaryContainer= Color(0xFFFAFAFA);
  static const surface             = Color(0xFF09090B);
  static const onSurface           = Color(0xFFFAFAFA);
  static const error               = Color(0xFF7F1D1D);
  static const onError             = Color(0xFFFAFAFA);
  static const outline             = Color(0xFF10341E);
  static const outlineVariant      = Color(0xFF10341E);
  static const surfaceTint         = Color(0xFF6CFFA6);
  

  //lightcolors=============================================
  static const card                      = Color(0xFF111113);
   static const cardForeground            = Color(0xFFFAFAFA);
   static const navbar                    = Color(0xFF000000);
   static const inputBackground           = Color(0xFF18181B);
   static const inputBorder               = Color(0xFF27272A);
   static const buttonBackground          = Color(0xFF6CFFA6);
   static const buttonForeground          = Color(0xFF000000);
   static const secondaryButtonBackground = Color(0xFF27272A);
   static const secondaryButtonForeground = Color(0xFFFAFAFA);
   static const muted                     = Color(0xFF27272A);
   static const mutedForeground           = Color(0xFFA1A1AA);
   static const border                    = Color(0xFF27272A);
}

theme/app_text_style.dart

import 'package:flutter/material.dart';
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
}

theme/app_themes.dart

import 'package:flutter/material.dart';
import 'light_theme.dart';
import 'dark_theme.dart';

class AppTheme {
  static ThemeData get light => lightTheme;
  static ThemeData get dark => darkTheme;
}

theme/dark_theme.dart

import 'package:artgallery_updated_app/core/theme/app_color_extension.dart';
import 'package:flutter/material.dart';
import 'app_colors.dart';
import 'app_text_styles.dart';
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
);


theme/light_theme.dart

import 'package:artgallery_updated_app/core/theme/app_color_extension.dart';
import 'package:flutter/material.dart';
import 'app_colors.dart';
import 'app_text_styles.dart';
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
);

theme/theme_provider.dart

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/legacy.dart';

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
});

---

COMPONENTS

theme/components/appbar_theme.dart

import 'package:flutter/material.dart';

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
}


theme/components/bottom_nav_theme.dart

import 'package:flutter/material.dart';

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
}

theme/components/button_theme.dart

import 'package:flutter/material.dart';

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
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
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
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
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
}

theme/component/card_theme.dart

import 'package:flutter/material.dart';

class CardStyles {
  static CardThemeData build({
    required Color backgroundColor,
    required Color borderColor,
  }) => CardThemeData(
    color: backgroundColor,
    elevation: 0,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(12),
      side: BorderSide(color: borderColor),
    ),
    margin: EdgeInsets.zero,
  );
}

theme/component/component_themes.dart

import 'package:flutter/material.dart';
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
  final CardThemeData                card;  
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
}

theme/component/input_theme.dart

import 'package:flutter/material.dart';

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
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: borderColor),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: borderColor),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: focusedBorderColor, width: 1.5),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: Colors.red.shade400),
    ),
  );
}


extension/context_extension.dart

import 'package:flutter/material.dart';

import '../theme/app_color_extension.dart';

extension ThemeContext on BuildContext {
  ThemeData get theme => Theme.of(this);
  TextTheme get textTheme => theme.textTheme;
  ColorScheme get cs => theme.colorScheme;
  AppColorExtension get ac        => theme.extension<AppColorExtension>()!;
}

//======================================
// use

// // Material slots
// context.cs.primary
// context.cs.surface
// context.cs.onSurface

// // Custom tokens
// context.ac.card
// context.ac.navbar
// context.ac.muted
// context.ac.mutedForeground
// context.ac.inputBackground
// context.ac.buttonBackground
// context.ac.border
// ```


---

toggle_theme_button.dart

import 'package:artgallery_updated_app/core/extension/context_extension.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';


import '../../../core/theme/theme_provider.dart';

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
}


----
main.dart

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/router/app_routes.dart';
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
    final router = ref.watch(routerProvider);
    final themeMode = ref.watch(themeProvider);

    return MaterialApp.router(
      title: "Art Gallery",
      debugShowCheckedModeBanner: false,
      themeMode: themeMode,
      darkTheme: AppTheme.dark,
      theme: AppTheme.light,
      routerConfig: router,
    );
  }
}

