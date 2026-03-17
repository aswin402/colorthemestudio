
import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, ComponentConfig, ShadowSize, DensityType, ThemeTemperature } from '../../types';
import { generateRandomStyles } from '../../utils/randomTheme';

type Preset = {
  name: string;
  baseColor: string;
  temperature: ThemeTemperature;
  componentConfig: Partial<ComponentConfig>;
};

const presets: Preset[] = [
  { name: 'Shadcn Slate', baseColor: '#475569', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'md' } },
  { name: 'Shadcn Zinc', baseColor: '#71717A', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'none' } },
  { name: 'Daisy Emerald', baseColor: '#10B981', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Poppins', bodyFont: 'Roboto', buttonRadius: 'lg', density: 'spacious' } },
  { name: 'Daisy Sky', baseColor: '#0EA5E9', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Roboto', bodyFont: 'Roboto', buttonRadius: 'sm', density: 'compact' } },
  { name: 'Modern Blue', baseColor: '#3B82F6', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', buttonRadius: 'lg' } },
  { name: 'Warm Orange', baseColor: '#F59E0B', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', buttonRadius: 'full' } },
  { name: 'Dark Purple', baseColor: '#8B5CF6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'JetBrains Mono', bodyFont: 'JetBrains Mono', shadow: 'none' } },
  { name: 'Neutral Gray', baseColor: '#6B7280', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Work Sans', bodyFont: 'Work Sans', density: 'normal' } },
  { name: 'Vibrant Red', baseColor: '#EF4444', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Oswald', bodyFont: 'Inter', fontSizeHeading: '2xl' } },
  { name: 'Cool Mint', baseColor: '#06D6A0', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'DM Sans', bodyFont: 'DM Sans', lineHeight: 'compact' } },
  { name: 'Pro Indigo', baseColor: '#6366F1', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Geist', bodyFont: 'Geist', buttonRadius: 'lg' } },
  { name: 'Sunny Yellow', baseColor: '#FBBF24', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Figtree', bodyFont: 'Figtree', shadow: 'xl' } },
];

import { useState } from 'react';

export const ConfigControls = () => {
    const { componentConfig, setBaseColor, setTemperature, setComponentConfig } = useThemeStore();
    const [showPresets, setShowPresets] = useState(false);



    const applyPreset = (preset: Preset) => {
      setBaseColor(preset.baseColor);
      setTemperature(preset.temperature);
      setComponentConfig(preset.componentConfig);
    };



    const handleRandomStyles = () => {
      const random = generateRandomStyles();
      setBaseColor(random.baseColor);
      setTemperature(random.temperature);
      setComponentConfig(random.componentConfig);
    };

    const radiusOptions: { label: string; value: BorderRadiusSize }[] = [
        { label: 'None', value: 'none' },
        { label: 'Sm', value: 'sm' },
        { label: 'Md', value: 'md' },
        { label: 'Lg', value: 'lg' },
        { label: 'Full', value: 'full' },
    ];

const fontOptions = [
        // Popular Sans Serif
        'Inter', 'Roboto', 'Poppins', 'Open Sans', 'Lato', 'Montserrat', 'Nunito', 'Raleway', 'Ubuntu', 'Source Sans Pro',
        'Work Sans', 'Manrope', 'Space Grotesk', 'IBM Plex Sans', 'DM Sans', 'Fira Sans', 'PT Sans', 'Arimo', 'Heebo', 'Muli',
        
        // Serif & Display
        'Playfair Display', 'Lora', 'Merriweather', 'Crimson Text', 'Libre Baskerville', 'Spectral', 'Cardo', 'Crimson Pro',
        
        // Monospace & Code
        'JetBrains Mono', 'Inconsolata', 'Fira Code', 'Source Code Pro', 'Roboto Mono', 'Space Mono', 'Cascadia Code', 'IBM Plex Mono',
        
        // Other Popular
        'Oswald', 'Quicksand', 'Quaternary', 'Notable', 'Syne', 'General Sans', 'Geist', 'Figtree', 'Plus Jakarta Sans', 'Recoleta',
        
        // System Fallbacks
        'system-ui', 'ui-serif', 'ui-monospace', 'SF Pro Display', 'Helvetica Neue', 'Segoe UI', 'Oxygen', 'Cantarell', 'Noto Sans'
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

            <div className="flex flex-wrap justify-center mb-6 gap-3">
              <button
                onClick={handleRandomStyles}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-600/50"
                title="Generate random theme + component styles"
              >
                Random Styles
              </button>
              {/* Preset Button */}
              <div className="relative">
                <button
                  onClick={() => setShowPresets(!showPresets)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-600/50"
                  title="Toggle professional presets"
                >
                  Preset Styles
                  <svg className={`w-4 h-4 transition-transform ${showPresets ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showPresets && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowPresets(false)}
                    />
                    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-2xl z-50 opacity-100 visible transition-all duration-200 overflow-hidden">
                      <div className="p-4 border-b border-gray-100 dark:border-zinc-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Professional Presets</h4>
                      </div>
                      <div className="py-2 max-h-80 overflow-y-auto">
                        {presets.map((preset, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              applyPreset(preset);
                              setShowPresets(false);
                            }}
                            className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors text-left first:rounded-t-xl last:rounded-b-xl"
                          >
                            <div className="w-12 h-12 rounded-lg" style={{backgroundColor: preset.baseColor}} />
                            <div>
                              <div className="font-medium text-sm text-gray-900 dark:text-white">{preset.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{preset.componentConfig.headingFont || 'Default'} / {preset.componentConfig.bodyFont || 'Default'}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
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
