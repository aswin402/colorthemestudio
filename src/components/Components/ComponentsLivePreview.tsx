import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType, ComponentConfig } from '../../types';

export const ComponentsLivePreview = () => {
    const { theme, mode, componentConfig } = useThemeStore();
    const activeTheme = mode === 'light' ? theme.light : theme.dark;

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

    const getDensityPadding = (density: DensityType) => {
        const paddings: Record<DensityType, string> = {
            compact: 'p-2 py-1 px-2',
            normal: 'p-6 py-2.5 px-4',
            spacious: 'p-8 py-3 px-6',
        };
        return paddings[density] || 'p-6';
    };

    const getBorderWidthStyle = (width: BorderWidthType) => ({
        borderWidth: `${parseInt(width)}px`
    });

    return (
        <div className={`flex flex-col h-full gap-8 ${getLineHeightClass(componentConfig.lineHeight)} ${getFontSizeClass(componentConfig.fontSizeBody)} ${getShadowClass(componentConfig.shadow)}`} style={{ fontFamily: `"${componentConfig.bodyFont}", sans-serif`, fontWeight: componentConfig.bodyWeight }}>
            <div style={{ fontFamily: `"${componentConfig.headingFont}", sans-serif`, fontWeight: componentConfig.headingWeight }}>
                <h3 className={`${getFontSizeClass(componentConfig.fontSizeHeading)} font-bold mb-1 ${getLineHeightClass(componentConfig.lineHeight)}`}>Live Component Preview</h3>
                <p className={`${getFontSizeClass(componentConfig.fontSizeBody)} text-zinc-500 dark:text-zinc-400 ${getLineHeightClass(componentConfig.lineHeight)}`} style={{ fontFamily: `"${componentConfig.bodyFont}", sans-serif`, fontWeight: componentConfig.bodyWeight }}>
                    See how your component geometry and typography updates instantly.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 pr-4">
                {/* Buttons Preview */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-medium border-b border-black/10 dark:border-white/10 pb-2 uppercase tracking-wider text-primary">Buttons</h4>
                    <div className="flex flex-col gap-4 items-start">
                        <button
                            className={`transition-all ${getDensityPadding(componentConfig.density)} text-sm ${getRadiusClass(componentConfig.buttonRadius)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)} ${getShadowClass(componentConfig.shadow)}`}
                            style={{ 
                                backgroundColor: activeTheme.primary.hexValue, 
                                color: activeTheme.primaryForeground.hexValue,
                                fontWeight: componentConfig.headingWeight,
                                fontFamily: `"${componentConfig.headingFont}", sans-serif`
                            }}
                        >
                            Primary Button
                        </button>
                        <button
                            className={`transition-all ${getDensityPadding(componentConfig.density)} ${getRadiusClass(componentConfig.buttonRadius)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)} ${getShadowClass(componentConfig.shadow)} border`}
                            style={{ 
                                backgroundColor: activeTheme.secondary.hexValue, 
                                color: activeTheme.secondaryForeground.hexValue,
                                borderColor: activeTheme.border.hexValue,
                                fontWeight: componentConfig.headingWeight,
                                fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                                ...getBorderWidthStyle(componentConfig.borderWidth)
                            }}
                        >
                            Secondary Button
                        </button>
                    </div>
                </div>

                {/* Inputs Preview */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-medium border-b border-black/10 dark:border-white/10 pb-2 uppercase tracking-wider text-primary">Inputs</h4>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Email address"
                            className={`w-full ${getDensityPadding(componentConfig.density)} border focus:outline-none focus:ring-2 transition-all ${getRadiusClass(componentConfig.inputRadius)} ${getFontSizeClass(componentConfig.fontSizeBody)} ${getLineHeightClass(componentConfig.lineHeight)} ${getShadowClass(componentConfig.shadow)}`}
                            style={{
                                backgroundColor: activeTheme.background.hexValue,
                                color: activeTheme.foreground.hexValue,
                                borderColor: activeTheme.input.hexValue,
                                '--tw-ring-color': activeTheme.ring.hexValue,
                                fontWeight: componentConfig.bodyWeight,
                                fontFamily: `"${componentConfig.bodyFont}", sans-serif`,
                                ...getBorderWidthStyle(componentConfig.borderWidth)
                            } as React.CSSProperties}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:col-span-2">
                    <h4 className="text-sm font-medium border-b border-black/10 dark:border-white/10 pb-2 uppercase tracking-wider text-primary" style={{ fontFamily: `"${componentConfig.headingFont}", sans-serif` }}>Cards</h4>
                    
                    <div
                        className={`${getDensityPadding(componentConfig.density)} border ${getShadowClass(componentConfig.shadow)} ${getRadiusClass(componentConfig.cardRadius)}`}
                        style={{
                            backgroundColor: activeTheme.card.hexValue,
                            color: activeTheme.cardForeground.hexValue,
                            borderColor: activeTheme.border.hexValue,
                            ...getBorderWidthStyle(componentConfig.borderWidth)
                        }}
                    >
                        <h3 className="text-3xl mb-3" style={{ color: activeTheme.foreground.hexValue, fontFamily: `"${componentConfig.headingFont}", sans-serif`, fontWeight: componentConfig.headingWeight }}>Authentication Settings</h3>
                        <p className="text-base mb-8 leading-relaxed" style={{ color: activeTheme.mutedForeground.hexValue, fontWeight: componentConfig.bodyWeight, fontFamily: `"${componentConfig.bodyFont}", sans-serif` }}>
                            Manage your security preferences and two-factor authentication methods to keep your account secure across all devices. We use industry standard encryption to protect your data.
                        </p>
                        <div className="flex justify-end gap-4 mt-6 pt-6 border-t" style={{ borderColor: activeTheme.border.hexValue }}>
                             <button
                                className={`transition-all ${getDensityPadding(componentConfig.density)} text-sm ${getRadiusClass(componentConfig.buttonRadius)} ${getFontSizeClass('base')} ${getLineHeightClass(componentConfig.lineHeight)} ${getShadowClass(componentConfig.shadow)} border`}
                                style={{ 
                                    backgroundColor: activeTheme.secondary.hexValue, 
                                    color: activeTheme.secondaryForeground.hexValue,
                                    borderColor: activeTheme.border.hexValue,
                                    fontWeight: componentConfig.headingWeight,
                                    fontFamily: `"${componentConfig.headingFont}", sans-serif`,
                                    ...getBorderWidthStyle(componentConfig.borderWidth)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className={`px-8 py-2.5 text-sm transition-colors ${getRadiusClass(componentConfig.buttonRadius)}`}
                                style={{ 
                                    backgroundColor: activeTheme.primary.hexValue, 
                                    color: activeTheme.primaryForeground.hexValue,
                                    fontWeight: componentConfig.headingWeight,
                                    fontFamily: `"${componentConfig.headingFont}", sans-serif`
                                }}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
