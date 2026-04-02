import { useThemeStore } from '../../store/useThemeStore';
import { useState } from 'react';
import type { 
  BorderRadiusSize, FontSize, LineHeightType, 
  ShadowSize, DensityType, BorderWidthType, 
  BlurSize, OpacityType 
} from '../../types';
import { 
  Menu, Search, MoreVertical, Home, Search as SearchIcon, 
  Heart, User, Plus, Settings, UserCircle, LogOut,
  Bell, Filter, Sun, Moon, ChevronRight
} from 'lucide-react';

/**
 * Converts HEX to RGBA with a specific Alpha (0-100)
 */
function colorWithAlpha(hex: string, alpha: OpacityType): string {
  if (!hex || hex === 'transparent') return 'transparent';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${parseInt(alpha) / 100})`;
}

/**
 * Maps BlurSize to CSS backdrop-filter string
 */
function getBlurStyle(size: BlurSize): string {
  const map: Record<BlurSize, string> = {
    none: 'none',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(24px)',
  };
  return map[size] || 'none';
}

interface FlutterPreviewProps {
  showAll?: boolean;
  layout?: string;
}

export const FlutterPreview = (_props: FlutterPreviewProps) => {
  const { theme, mode, componentConfig } = useThemeStore();
  const currentTheme = theme[mode];
  const [toggleOn, setToggleOn] = useState(true);
  const [bottomNavIndex, setBottomNavIndex] = useState(0);

  const surface = currentTheme.background.hexValue;
  const onSurface = currentTheme.foreground.hexValue;
  const primary = currentTheme.primary.hexValue;
  const onPrimary = currentTheme.primaryForeground.hexValue;
  const secondary = currentTheme.accent.hexValue;
  const onSecondary = currentTheme.accentForeground.hexValue;
  const secondaryContainer = currentTheme.secondary.hexValue;
  const outline = currentTheme.border.hexValue;
  const surfaceContainer = currentTheme.input.hexValue;
  const muted = currentTheme.muted.hexValue;

  const getRadiusPx = (size: BorderRadiusSize) => {
    const map: Record<BorderRadiusSize, string> = { none: '0px', xs: '2px', sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '20px', '3xl': '24px', full: '9999px' };
    return map[size] || '8px';
  };

  const getShadowStyle = (size: ShadowSize): React.CSSProperties => {
    const map: Record<ShadowSize, React.CSSProperties> = {
      none: {},
      sm: { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
      md: { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
      lg: { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
      xl: { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
      '2xl': { boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
    };
    return map[size] || {};
  };

  const getFontSizePx = (size: FontSize) => {
    const map: Record<FontSize, string> = {
      xs: '12px', sm: '14px', base: '16px', lg: '18px',
      xl: '20px', '2xl': '24px', '3xl': '30px', '4xl': '36px', '5xl': '48px',
    };
    return map[size] || '16px';
  };

  const getLineHeightPx = (lh: LineHeightType) => {
    const map: Record<LineHeightType, string> = { compact: '1.2em', normal: '1.5em', relaxed: '1.75em', loose: '2em' };
    return map[lh] || '1.5em';
  };

  const getDensityPad = (d: DensityType) => {
    const map: Record<DensityType, string> = { compact: '12px', normal: '20px', spacious: '28px' };
    return map[d] || '20px';
  };

  const getBorderWidth = (w: BorderWidthType) => `${parseInt(w)}px`;

  const shadow = getShadowStyle(componentConfig.shadow);
  const pad = getDensityPad(componentConfig.density);
  const bw = getBorderWidth(componentConfig.borderWidth);

  const headingStyle: React.CSSProperties = {
    fontFamily: `"${componentConfig.headingFont}", sans-serif`,
    fontWeight: componentConfig.headingWeight,
  };

  const bodyStyle: React.CSSProperties = {
    fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
    fontWeight: componentConfig.bodyWeight,
    fontSize: getFontSizePx(componentConfig.fontSizeBody),
    lineHeight: getLineHeightPx(componentConfig.lineHeight),
  };

  const glassStyle = (baseColor: string, opacity: OpacityType): React.CSSProperties => ({
    backgroundColor: colorWithAlpha(baseColor, opacity),
    backdropFilter: getBlurStyle(componentConfig.blurAmount),
    WebkitBackdropFilter: getBlurStyle(componentConfig.blurAmount),
  });

  const bottomNavItems = [
    { icon: Home, label: 'Home' },
    { icon: SearchIcon, label: 'Search' },
    { icon: Heart, label: 'Favorites' },
    { icon: User, label: 'Profile' },
  ];

  const listItems = [
    { icon: Settings, label: 'Settings' },
    { icon: UserCircle, label: 'Profile' },
    { icon: LogOut, label: 'Logout' },
  ];

  const chips = ['Filter', 'Category', 'Active'];

  return (
    <div
      className="flex flex-col rounded-3xl border relative overflow-hidden transition-all font-sans mx-auto shadow-2xl"
      style={{ 
        backgroundColor: surface, 
        color: onSurface, 
        borderColor: outline, 
        borderWidth: bw, 
        ...bodyStyle, 
        width: '375px',
        height: '812px',
        ...shadow 
      }}
    >
      {/* App Bar - Fixed */}
      <div className="flex items-center justify-between px-5 py-3 border-b shrink-0 z-20" style={{ ...glassStyle(surface, componentConfig.navbarOpacity), borderColor: outline }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: primary }}>
            <Menu size={16} style={{ color: onPrimary }} />
          </div>
          <span className="font-bold" style={{ ...headingStyle, fontSize: getFontSizePx('lg') }} >Flutter Preview</span>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: muted }}>
            <Search size={14} style={{ color: onSurface }} />
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: muted }}>
            <MoreVertical size={14} style={{ color: onSurface }} />
          </div>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scrollbar-none relative">
        {/* Background elements to show off the blur */}
        <div className="absolute top-10 right-[-20px] w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-[-20px] w-40 h-40 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <p className="text-sm opacity-60" style={bodyStyle}>Material 3 widgets with live theme</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            className="font-medium text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/10"
            style={{ ...glassStyle(primary, componentConfig.buttonOpacity), color: onPrimary, borderRadius: getRadiusPx(componentConfig.buttonRadius), padding: '10px 20px', ...headingStyle, ...shadow }}
          >
            Elevated
          </button>
          <button
            className="font-medium text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            style={{ backgroundColor: secondaryContainer, color: onSurface, borderRadius: getRadiusPx(componentConfig.buttonRadius), padding: '10px 20px', border: `${bw} solid ${outline}`, ...headingStyle }}
          >
            Tonal
          </button>
          <button
            className="font-medium text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            style={{ backgroundColor: 'transparent', color: primary, borderRadius: getRadiusPx(componentConfig.buttonRadius), padding: '10px 20px', border: `${bw} solid ${outline}`, ...headingStyle }}
          >
            Outlined
          </button>
          <button
            className="font-medium text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            style={{ backgroundColor: 'transparent', color: primary, padding: '10px 20px', ...headingStyle }}
          >
            Text
          </button>
        </div>

        {/* Card */}
        <div
          className="border shadow-sm transition-all"
          style={{ ...glassStyle(currentTheme.card.hexValue, componentConfig.cardOpacity), color: currentTheme.cardForeground.hexValue, borderColor: outline, borderRadius: getRadiusPx(componentConfig.cardRadius), borderWidth: bw, padding: pad, ...shadow }}
        >
          <h3 style={{ fontSize: getFontSizePx('lg'), marginBottom: '6px', ...headingStyle }}>Material Card</h3>
          <p style={{ ...bodyStyle, opacity: 0.9 }}>Preview with custom density, radius, shadows, and typography.</p>
        </div>

        {/* Input (Material style) */}
        <div style={{ backgroundColor: surfaceContainer, borderBottomColor: primary, borderBottomWidth: '2px', borderBottomStyle: 'solid', borderRadius: `${getRadiusPx(componentConfig.inputRadius)} ${getRadiusPx(componentConfig.inputRadius)} 0 0`, padding: '8px 12px' }}>
          <span className="block mb-0.5 font-semibold" style={{ fontSize: '11px', color: primary, ...headingStyle, letterSpacing: '0.5px' }}>
            Label Text
          </span>
          <input
            placeholder="User input field..."
            className="w-full bg-transparent outline-none"
            style={{ color: onSurface, ...bodyStyle }}
          />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex px-3 py-1.5 text-xs font-semibold items-center gap-1.5 border border-white/5 shadow-sm"
              style={{ ...glassStyle(surfaceContainer, componentConfig.badgeOpacity), color: onSurface, borderRadius: getRadiusPx(componentConfig.buttonRadius) }}
            >
              {chip === 'Filter' && <Filter size={12} />}
              {chip === 'Category' && <Sun size={12} />}
              {chip === 'Active' && <Moon size={12} />}
              {chip}
            </span>
          ))}
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center text-lg font-bold" style={{ backgroundColor: secondary, borderRadius: '9999px', color: onSecondary, ...shadow }}>
            JD
          </div>
          <div>
            <p className="font-semibold text-sm" style={headingStyle}>John Doe</p>
            <p className="text-xs opacity-60" style={bodyStyle}>john@example.com</p>
          </div>
        </div>

        {/* Progress */}
        <div>
          <p className="text-xs mb-1.5 opacity-60" style={bodyStyle}>Loading progress...</p>
          <div className="w-full h-3 rounded overflow-hidden" style={{ backgroundColor: muted, borderRadius: getRadiusPx(componentConfig.inputRadius) }}>
            <div className="h-full w-4/5 transition-all" style={{ backgroundColor: primary, borderRadius: getRadiusPx(componentConfig.inputRadius) }} />
          </div>
        </div>

        {/* Switch */}
        <div className="flex items-center gap-3 p-3 border rounded-lg shadow-sm" style={{ ...glassStyle(surface, componentConfig.cardOpacity), borderColor: outline, borderWidth: bw }}>
          <Bell size={16} style={{ color: onSurface }} />
          <span className="text-sm font-medium" style={headingStyle}>Notifications</span>
          <div
            className="ml-auto cursor-pointer relative"
            style={{ backgroundColor: toggleOn ? primary : outline, borderRadius: '9999px', width: '48px', height: '28px', transition: 'background-color 0.2s' }}
            onClick={() => setToggleOn(!toggleOn)}
          >
            <div
              className="absolute bg-white rounded-full shadow transition-all"
              style={{ width: '24px', height: '24px', top: '2px', left: toggleOn ? '22px' : '2px' }}
            />
          </div>
        </div>

        {/* List Tile */}
        <div className="border rounded-xl overflow-hidden shadow-sm" style={{ ...glassStyle(surface, componentConfig.cardOpacity), borderColor: outline, borderWidth: bw }}>
          {listItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between p-3 cursor-pointer hover:opacity-80 transition-opacity ${i > 0 ? 'border-t' : ''}`}
              style={{ borderColor: outline }}
            >
              <div className="flex items-center gap-3">
                <item.icon size={16} style={{ color: onSurface, opacity: 0.6 }} />
                <span className="text-sm" style={bodyStyle}>{item.label}</span>
              </div>
              <ChevronRight size={14} style={{ color: onSurface, opacity: 0.4 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div 
        className="flex items-center border-t py-2 shrink-0 z-20" 
        style={{ ...glassStyle(surface, componentConfig.navbarOpacity), borderColor: outline }}
      >
        {bottomNavItems.map((item, i) => {
          const IconComponent = item.icon;
          const isActive = bottomNavIndex === i;
          return (
            <button
              key={i}
              className="flex-1 flex flex-col items-center gap-1 py-1.5 transition-all"
              style={{ color: isActive ? primary : onSurface, opacity: isActive ? 1 : 0.4 }}
              onClick={() => setBottomNavIndex(i)}
            >
              <IconComponent size={20} />
              <span className="text-[10px]" style={bodyStyle}>{item.label}</span>
              {isActive && (
                <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: primary }} />
              )}
            </button>
          );
        })}
      </div>

      {/* FAB - Absolute */}
      <div
        className="absolute bottom-20 right-6 w-14 h-14 flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 z-30 shadow-lg border border-white/10"
        style={{ ...glassStyle(primary, componentConfig.buttonOpacity), color: onPrimary, borderRadius: '16px', ...shadow }}
      >
        <Plus size={24} style={{ fontWeight: 300 }} />
      </div>
    </div>
  );
};
