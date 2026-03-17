import { useThemeStore } from '../../store/useThemeStore';
import React from 'react';
import type { BorderRadiusSize, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType, ComponentConfig } from '../../types';

export const WebPreview = () => {
    const { theme, mode, componentConfig } = useThemeStore();
    const currentTheme = theme[mode];

    const getDensityPadding = (density: DensityType) => {
        const paddings: Record<DensityType, string> = {
            compact: 'p-3 py-1.5 px-3',
            normal: 'p-6 py-2.5 px-4',
            spacious: 'p-8 py-3 px-6',
        };
        return paddings[density] || 'p-6';
    };

    const getRadiusClass = (size: BorderRadiusSize) => {
        switch (size) {
            case 'none': return 'rounded-none';
            case 'sm': return 'rounded-sm';
            case 'md': return 'rounded-md';
            case 'lg': return 'rounded-lg';
            case 'full': return 'rounded-full';
            default: return 'rounded-md';
        }
    };

    const getShadowClass = (size: ShadowSize) => {
        const shadows: Record<ShadowSize, string> = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl',
        };
        return shadows[size] || 'shadow-md';
    };

    const getFontSizeClass = (size: FontSize) => {
        const sizes: Record<FontSize, string> = {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
        };
        return sizes[size] || 'text-base';
    };

    const getLineHeightClass = (lh: LineHeightType) => {
        const heights: Record<LineHeightType, string> = {
            compact: 'leading-tight',
            normal: 'leading-normal',
            relaxed: 'leading-relaxed',
        };
        return heights[lh] || 'leading-normal';
    };

    const getBorderWidthStyle = (width: BorderWidthType) => ({
        borderWidth: `${parseInt(width)}px`
    });

    const dynamicPadding = getDensityPadding(componentConfig.density);
    const dynamicRadius = getRadiusClass(componentConfig.buttonRadius);
    const dynamicShadow = getShadowClass(componentConfig.shadow);
    const dynamicFontSize = getFontSizeClass(componentConfig.fontSizeBody);
    const dynamicLineHeight = getLineHeightClass(componentConfig.lineHeight);
    const dynamicBorder = getBorderWidthStyle(componentConfig.borderWidth);

    const dynamicStyles = {
        '--background': currentTheme.background.hexValue,
        '--foreground': currentTheme.foreground.hexValue,
        '--primary': currentTheme.primary.hexValue,
        '--primary-foreground': currentTheme.primaryForeground.hexValue,
        '--secondary': currentTheme.secondary.hexValue,
        '--secondary-foreground': currentTheme.secondaryForeground.hexValue,
        '--destructive': currentTheme.destructive.hexValue,
        '--destructive-foreground': currentTheme.destructiveForeground.hexValue,
        '--border': currentTheme.border.hexValue,
        '--input': currentTheme.input.hexValue,
        '--ring': currentTheme.ring.hexValue,
        '--card': currentTheme.card.hexValue,
        '--card-foreground': currentTheme.cardForeground.hexValue,
        '--muted': currentTheme.muted.hexValue,
        '--muted-foreground': currentTheme.mutedForeground.hexValue,
        '--popover': currentTheme.popover.hexValue,
        '--popover-foreground': currentTheme.popoverForeground.hexValue,
    } as React.CSSProperties;

    return (
        <div className={`flex flex-col gap-6 ${dynamicPadding} rounded-md border transition-all ${dynamicShadow}`}
            style={{ 
                ...dynamicStyles, 
                backgroundColor: 'var(--background)', 
                color: 'var(--foreground)', 
                borderColor: 'var(--border)',
                ...dynamicBorder,
                fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                fontWeight: componentConfig.bodyWeight,
                fontSize: dynamicFontSize === 'text-base' ? undefined : dynamicFontSize, // Tailwind text-base is default
                lineHeight: dynamicLineHeight === 'leading-normal' ? undefined : dynamicLineHeight,
            }}>
                <div className="space-y-2" style={{ fontFamily: `"${componentConfig.headingFont}", sans-serif`, fontWeight: componentConfig.headingWeight }}>
                <h3 className={`${getFontSizeClass(componentConfig.fontSizeHeading)} font-bold mb-1`}>Tailwind / CSS Components</h3>
                <p className={`${getFontSizeClass('sm')} opacity-60 ${getLineHeightClass(componentConfig.lineHeight)}`}>Live preview with your custom typography, density, radius, shadows.</p>
            </div>

            <div className={`flex flex-wrap gap-4 ${getDensityPadding(componentConfig.density)}`}>
                <button className={`py-2 px-4 font-medium text-sm transition-all hover:opacity-90 ${getRadiusClass(componentConfig.buttonRadius)} ${getShadowClass(componentConfig.shadow)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)}`} 
                    style={{ 
                        backgroundColor: 'var(--primary)', 
                        color: 'var(--primary-foreground)',
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        fontWeight: componentConfig.headingWeight,
                        ...getBorderWidthStyle(componentConfig.borderWidth)
                    }}>
                    Primary Action
                </button>
                <button className={`py-2 px-4 font-medium text-sm transition-all hover:opacity-90 border ${getRadiusClass(componentConfig.buttonRadius)} ${getShadowClass(componentConfig.shadow)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)}`} 
                    style={{ 
                        backgroundColor: 'var(--secondary)', 
                        color: 'var(--secondary-foreground)',
                        borderColor: 'var(--border)',
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        fontWeight: componentConfig.headingWeight,
                        ...getBorderWidthStyle(componentConfig.borderWidth)
                    }}>
                    Secondary
                </button>
                <button className={`py-2 px-4 font-medium text-sm transition-all hover:opacity-90 ${getRadiusClass(componentConfig.buttonRadius)} ${getShadowClass(componentConfig.shadow)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)}`} 
                    style={{ 
                        backgroundColor: 'var(--destructive)', 
                        color: 'var(--destructive-foreground)',
                        fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                        fontWeight: componentConfig.headingWeight
                    }}>
                    Destructive
                </button>
            </div>

            <div className={`${getDensityPadding(componentConfig.density)} ${getRadiusClass(componentConfig.cardRadius || componentConfig.buttonRadius)} border ${getShadowClass(componentConfig.shadow)}`} 
                style={{ 
                    backgroundColor: 'var(--card)', 
                    color: 'var(--card-foreground)', 
                    borderColor: 'var(--border)',
                    ...getBorderWidthStyle(componentConfig.borderWidth)
                }}>
                <h4 className={`${getFontSizeClass(componentConfig.fontSizeHeading)} font-semibold mb-2`} style={{ 
                    fontFamily: `"${componentConfig.headingFont}", sans-serif`, 
                    fontWeight: componentConfig.headingWeight 
                }}>Card Component</h4>
                <p className={`${getFontSizeClass(componentConfig.fontSizeBody)} ${getLineHeightClass(componentConfig.lineHeight)}`} style={{ 
                    color: 'var(--muted-foreground)',
                    fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                    fontWeight: componentConfig.bodyWeight
                }}>Live preview card with custom density, radius, shadows, typography. Adapts to light/dark modes with OKLCH tokens.</p>
            </div>

            <div className={`${getDensityPadding('compact')} ${getRadiusClass(componentConfig.inputRadius || componentConfig.buttonRadius)} border flex flex-col gap-1`} style={{ 
                backgroundColor: 'var(--muted)', 
                color: 'var(--foreground)', 
                borderColor: 'var(--border)',
                ...getBorderWidthStyle(componentConfig.borderWidth)
            }}>
                <span className={`${getFontSizeClass('sm')} font-semibold tracking-wide`} style={{ fontFamily: `"${componentConfig.headingFont}", sans-serif` }}>Alert Notification</span>
                <span className={`${getFontSizeClass('sm')} opacity-80 ${getLineHeightClass(componentConfig.lineHeight)}`} style={{ 
                    fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                    fontWeight: componentConfig.bodyWeight
                }}>Live muted notification with custom typography.</span>
            </div>

            <div className="flex flex-col gap-2 max-w-sm">
                <label className={`${getFontSizeClass('sm')} font-medium`} style={{ 
                    fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                    fontWeight: componentConfig.bodyWeight
                }}>Email Address</label>
                <div
                    className={`flex ${getDensityPadding(componentConfig.density)} ${getRadiusClass(componentConfig.inputRadius || componentConfig.buttonRadius)} border focus-within:ring-2 focus-within:ring-offset-2 transition-all ${getShadowClass('sm')}`}
                    style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--input)',
                        ...getBorderWidthStyle(componentConfig.borderWidth),
                        // @ts-ignore
                        '--tw-ring-color': 'var(--ring)'
                    }}
                >
                    <input
                        placeholder="name@example.com"
                        className={`w-full bg-transparent outline-none ${getFontSizeClass(componentConfig.fontSizeBody)} placeholder:opacity-50 ${getLineHeightClass(componentConfig.lineHeight)}`}
                        style={{ 
                            color: 'var(--foreground)',
                            fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                            fontWeight: componentConfig.bodyWeight
                        }}
                    />
                </div>
            </div>

        </div>
    );
};
