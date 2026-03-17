import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType, ComponentConfig } from '../../types';

export const FlutterPreview = () => {
    const { theme, mode, componentConfig } = useThemeStore();
    const currentTheme = theme[mode];

    // Map to Flutter tokens
    const surface = currentTheme.background.hexValue;
    const onSurface = currentTheme.foreground.hexValue;
    const primary = currentTheme.primary.hexValue;
    const onPrimary = currentTheme.primaryForeground.hexValue;
    const secondary = currentTheme.accent.hexValue;
    const onSecondary = currentTheme.accentForeground.hexValue;
    const secondaryContainer = currentTheme.secondary.hexValue;
    const outline = currentTheme.border.hexValue;
    const surfaceContainer = currentTheme.input.hexValue;

    const getDensityPadding = (density: DensityType) => {
        const paddings: Record<DensityType, string> = {
            compact: 'p-3 py-2',
            normal: 'p-6 py-3',
            spacious: 'p-8 py-4',
        };
        return paddings[density] || 'p-6';
    };

    const getRadiusPx = (size: BorderRadiusSize) => {
        const radii: Record<BorderRadiusSize, string> = {
            none: '0px',
            sm: '4px',
            md: '8px',
            lg: '12px',
            full: '9999px',
        };
        return radii[size] || '8px';
    };

    const getShadowStyle = (size: ShadowSize) => {
        const shadows: Record<ShadowSize, React.CSSProperties> = {
            none: {},
            sm: { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
            md: { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
            lg: { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
            xl: { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
        };
        return shadows[size] || shadows.md!;
    };

    const getFontSizePx = (size: FontSize) => {
        const sizes: Record<FontSize, string> = {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px',
        };
        return sizes[size] || '16px';
    };

    const getLineHeightPx = (lh: LineHeightType) => {
        const heights: Record<LineHeightType, string> = {
            compact: '1.2em',
            normal: '1.5em',
            relaxed: '1.75em',
        };
        return heights[lh] || '1.5em';
    };

    const getBorderWidthPx = (width: BorderWidthType) => parseInt(width);

    const mainPadding = getDensityPadding(componentConfig.density);
    const radius = getRadiusPx(componentConfig.buttonRadius);
    const shadow = getShadowStyle(componentConfig.shadow);
    const fontSizeBody = getFontSizePx(componentConfig.fontSizeBody);
    const lineHeight = getLineHeightPx(componentConfig.lineHeight);
    const borderWidth = getBorderWidthPx(componentConfig.borderWidth);

    return (
        <div className={`flex flex-col gap-6 ${mainPadding} rounded-2xl border relative overflow-hidden transition-all font-sans`}
            style={{ 
                backgroundColor: surface, 
                color: onSurface, 
                borderColor: outline,
                borderWidth: `${borderWidth}px`,
                fontFamily: `"${componentConfig.bodyFont}", -apple-system, BlinkMacSystemFont, sans-serif`,
                fontSize: fontSizeBody,
                lineHeight,
                fontWeight: componentConfig.bodyWeight,
                fontDisplay: 'swap',
                ...shadow 
            }}>
                <div className="space-y-2" style={{ fontFamily: `"${componentConfig.headingFont}", -apple-system, BlinkMacSystemFont, sans-serif`, fontWeight: componentConfig.headingWeight, fontDisplay: 'swap' }}>
                <h3 className={`${getFontSizePx('lg')} font-bold mb-1`}>Material 3 / Flutter Widgets</h3>
                <p className="text-sm opacity-60">Live preview with your custom typography, density, radius, shadows.</p>
            </div>

            <div className={`flex flex-wrap gap-4 mt-2 ${getDensityPadding(componentConfig.density)}`}>
                <button 
                    className="font-medium text-sm transition-all hover:scale-105"
                    style={{ 
                        backgroundColor: primary, 
                        color: onPrimary,
                        borderRadius: getRadiusPx(componentConfig.buttonRadius),
                        padding: '12px 24px',
                        fontSize: getFontSizePx('base'),
                        lineHeight: getLineHeightPx(componentConfig.lineHeight),
                        fontWeight: componentConfig.headingWeight,
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        ...shadow
                    }}>
                    Elevated Button
                </button>

                <button 
                    className={`font-medium text-sm transition-all hover:scale-105 border ${getDensityPadding(componentConfig.density)}`}
                    style={{ 
                        backgroundColor: secondaryContainer, 
                        color: onSurface,
                        borderRadius: getRadiusPx(componentConfig.buttonRadius),
                        fontSize: getFontSizePx('base'),
                        lineHeight: getLineHeightPx(componentConfig.lineHeight),
                        fontWeight: componentConfig.headingWeight,
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        borderColor: outline,
                        borderWidth: `${borderWidth}px`,
                        ...shadow
                    }}>
                    Tonal Button
                </button>

                <button 
                    className="font-medium text-sm transition-all hover:scale-105 border"
                    style={{ 
                        backgroundColor: 'transparent', 
                        color: primary,
                        borderRadius: getRadiusPx(componentConfig.buttonRadius),
                        padding: '12px 24px',
                        fontSize: getFontSizePx('base'),
                        lineHeight: getLineHeightPx(componentConfig.lineHeight),
                        fontWeight: componentConfig.headingWeight,
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        borderColor: outline,
                        borderWidth: `${borderWidth}px`,
                        ...shadow
                    }}>
                    Outlined
                </button>
            </div>

            <div className={`${getDensityPadding(componentConfig.density)} border mt-6`} style={{ 
                backgroundColor: secondary, 
                color: onSecondary, 
                borderColor: outline,
                borderRadius: getRadiusPx(componentConfig.cardRadius || componentConfig.buttonRadius),
                borderWidth: `${borderWidth}px`,
                ...shadow 
            }}>
                <h3 style={{ 
                    fontSize: getFontSizePx('lg'), 
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                    fontWeight: componentConfig.headingWeight
                }}>Secondary Card</h3>
                <p style={{ 
                    fontSize: getFontSizePx(componentConfig.fontSizeBody), 
                    opacity: 0.9,
                    lineHeight: getLineHeightPx(componentConfig.lineHeight),
                    fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                    fontWeight: componentConfig.bodyWeight
                }}>Live preview card with your custom density, radius, shadows, typography.</p>
            </div>

            <div className="mt-6" style={{ 
                backgroundColor: surfaceContainer, 
                borderBottomColor: primary,
                borderBottomWidth: '3px'
            }}>
                <div className={`${getDensityPadding('compact')}`}>
                    <span className="block mb-1 font-semibold tracking-wider" style={{ 
                        fontSize: '12px', 
                        color: primary,
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`
                    }}>Label Text</span>
                    <input 
                        placeholder="User input field..."
                        className="w-full bg-transparent outline-none"
                        style={{ 
                            color: onSurface,
                            fontSize: getFontSizePx(componentConfig.fontSizeBody),
                            lineHeight: getLineHeightPx(componentConfig.lineHeight),
                            fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                            fontWeight: componentConfig.bodyWeight
                        }} 
                    />
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 right-8 w-14 h-14 flex items-center justify-center cursor-pointer transition-all hover:scale-105 rounded-2xl shadow-xl"
                style={{ 
                    backgroundColor: primary, 
                    color: onPrimary,
                    borderRadius: getRadiusPx('full'),
                    ...shadow 
                }}>
                <span style={{ fontSize: '28px', fontWeight: 300 }}>+</span>
            </div>

        </div>
    );
};
