
import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, ComponentConfig, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType } from '../../types';

export const ConfigControls = () => {
    const { componentConfig, setComponentConfig } = useThemeStore();

    const radiusOptions: { label: string; value: BorderRadiusSize }[] = [
        { label: 'None', value: 'none' },
        { label: 'Sm', value: 'sm' },
        { label: 'Md', value: 'md' },
        { label: 'Lg', value: 'lg' },
        { label: 'Full', value: 'full' },
    ];

const fontOptions = [
        'Inter', 'Roboto', 'Poppins', 'Open Sans', 'Lato', 
        'Montserrat', 'Nunito', 'Raleway', 'Ubuntu', 
        'Playfair Display', 'Lora', 'Oswald', 'Merriweather',
        'Inconsolata', 'Source Sans Pro', 'Quicksand', 'Fira Sans',
        'PT Sans', 'Arimo', 'Work Sans', 'Muli', 'Heebo',
        'Manrope', 'Space Grotesk', 'JetBrains Mono', 'IBM Plex Sans', 'DM Sans',
        'system-ui', 'ui-serif', 'ui-monospace', 'SF Pro Display', 'Helvetica Neue',
        'Segoe UI', 'Oxygen', 'Cantarell', 'Noto Sans', 'Literata'
    ];

    const weightOptions = [
        { label: 'Regular (400)', value: '400' },
        { label: 'Medium (500)', value: '500' },
        { label: 'Semibold (600)', value: '600' },
        { label: 'Bold (700)', value: '700' },
        { label: 'Extra Bold (800)', value: '800' },
    ];

    const updateConfig = (key: keyof ComponentConfig, value: string) => {
        setComponentConfig({ [key]: value });
    };

    const renderWeightSelector = (title: string, configKey: keyof ComponentConfig) => {
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <select 
                    value={currentValue as string}
                    onChange={(e) => updateConfig(configKey, e.target.value)}
                    className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                    {weightOptions.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    const renderRadiusSelector = (title: string, configKey: keyof ComponentConfig) => {
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <div className="flex flex-wrap gap-2">
                    {radiusOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => updateConfig(configKey, opt.value)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                                currentValue === opt.value
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderFontSelector = (title: string, configKey: keyof ComponentConfig) => {
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <select 
                    value={currentValue as string}
                    onChange={(e) => updateConfig(configKey, e.target.value)}
                    className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                    {fontOptions.map(font => (
                        <option key={font} value={font} className="bg-background text-foreground">
                            {font}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    const renderFontSizeSelector = (title: string, configKey: keyof ComponentConfig) => {
        const fontSizeOptions = [
            { label: 'XS', value: 'xs' },
            { label: 'Sm', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Lg', value: 'lg' },
            { label: 'Xl', value: 'xl' },
            { label: '2Xl', value: '2xl' },
        ];
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <select 
                    value={currentValue as string}
                    onChange={(e) => updateConfig(configKey, e.target.value)}
                    className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                    {fontSizeOptions.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    const renderLineHeightSelector = (title: string, configKey: keyof ComponentConfig) => {
        const lineHeightOptions = [
            { label: 'Compact', value: 'compact' },
            { label: 'Normal', value: 'normal' },
            { label: 'Relaxed', value: 'relaxed' },
        ];
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <select 
                    value={currentValue as string}
                    onChange={(e) => updateConfig(configKey, e.target.value)}
                    className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                    {lineHeightOptions.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    const renderShadowSelector = (title: string, configKey: keyof ComponentConfig) => {
        const shadowOptions: { label: string; value: ShadowSize }[] = [
            { label: 'None', value: 'none' },
            { label: 'Sm', value: 'sm' },
            { label: 'Md', value: 'md' },
            { label: 'Lg', value: 'lg' },
            { label: 'Xl', value: 'xl' },
        ];
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <div className="flex flex-wrap gap-2">
                    {shadowOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => updateConfig(configKey, opt.value)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                                currentValue === opt.value
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderDensitySelector = (title: string, configKey: keyof ComponentConfig) => {
        const densityOptions: { label: string; value: DensityType }[] = [
            { label: 'Compact', value: 'compact' },
            { label: 'Normal', value: 'normal' },
            { label: 'Spacious', value: 'spacious' },
        ];
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <div className="flex flex-wrap gap-2">
                    {densityOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => updateConfig(configKey, opt.value)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                                currentValue === opt.value
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderBorderWidthSelector = (title: string, configKey: keyof ComponentConfig) => {
        const borderWidthOptions = [
            { label: '0px', value: '0' },
            { label: '1px', value: '1' },
            { label: '2px', value: '2' },
            { label: '4px', value: '4' },
            { label: '8px', value: '8' },
        ];
        const currentValue = componentConfig[configKey];
        return (
            <div className="flex flex-col gap-3">
                <label className="text-sm font-medium">{title}</label>
                <select 
                    value={currentValue as string}
                    onChange={(e) => updateConfig(configKey, e.target.value)}
                    className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                    {borderWidthOptions.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-8 h-full">
            <div>
                <h2 className="text-xl font-bold tracking-tight mb-1">Component Themes</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Customize typography, geometry, layout and effects with live preview.
                </p>
            </div>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Typography Section */}
            <div className="flex flex-col gap-6">
                <h3 className="text-base font-semibold text-primary">Typography</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {renderFontSelector('Heading Font', 'headingFont')}
                    {renderFontSelector('Body Font', 'bodyFont')}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {renderWeightSelector('Heading Weight', 'headingWeight')}
                    {renderWeightSelector('Body Weight', 'bodyWeight')}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {renderFontSizeSelector('Heading Size', 'fontSizeHeading')}
                    {renderFontSizeSelector('Body Size', 'fontSizeBody')}
                </div>
                {renderLineHeightSelector('Line Height', 'lineHeight')}
            </div>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Layout Section */}
            <div className="flex flex-col gap-6">
                <h3 className="text-base font-semibold text-primary">Layout</h3>
                {renderDensitySelector('Density', 'density')}
                {renderBorderWidthSelector('Border Width', 'borderWidth')}
            </div>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Effects */}
            <div className="flex flex-col gap-6">
                <h3 className="text-base font-semibold text-primary">Effects</h3>
                {renderShadowSelector('Shadow', 'shadow')}
            </div>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Geometry */}
            <div className="flex flex-col gap-6">
                <h3 className="text-base font-semibold">Geometry</h3>
                {renderRadiusSelector('Button Radius', 'buttonRadius')}
                {renderRadiusSelector('Card Radius', 'cardRadius')}
                {renderRadiusSelector('Input Radius', 'inputRadius')}
            </div>
        </div>
    );
};
