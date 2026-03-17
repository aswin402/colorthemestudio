import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, FontSize, LineHeightType, ShadowSize, DensityType, BorderWidthType, ComponentConfig } from '../../types';
import { WebPreview } from '../Preview/WebPreview';
import { FlutterPreview } from '../Preview/FlutterPreview';
import { Monitor, Smartphone, Sun, Moon } from 'lucide-react';

export const ComponentsLivePreview = () => {
    const [activeTab, setActiveTab] = useState<'web' | 'flutter'>('web');
    const { mode, componentConfig, setMode: setGlobalMode } = useThemeStore();

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
        <div className="flex flex-col h-full gap-8">
            <div className="flex items-center justify-between">
                <h2 className={`text-xl font-bold tracking-tight ${getFontSizeClass(componentConfig.fontSizeHeading)}`} style={{ 
                    fontFamily: `"${componentConfig.headingFont}", sans-serif`, 
                    fontWeight: componentConfig.headingWeight 
                }}>Live Component Preview</h2>

                <div className="flex items-center gap-4">
                    <div className="flex p-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        <button onClick={() => setGlobalMode('light')} className={`p-1.5 rounded-md transition-all ${mode === 'light' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}>
                            <Sun className="w-4 h-4" />
                        </button>
                        <button onClick={() => setGlobalMode('dark')} className={`p-1.5 rounded-md transition-all ${mode === 'dark' ? 'bg-[#27272a] shadow-sm text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}>
                            <Moon className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 text-sm font-medium">
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${activeTab === 'web' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
                        >
                            <Monitor className="w-4 h-4" /> Web
                        </button>
                        <button
                            onClick={() => setActiveTab('flutter')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${activeTab === 'flutter' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
                        >
                            <Smartphone className="w-4 h-4" /> Flutter
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-hidden">
                {activeTab === 'web' ? <WebPreview /> : <FlutterPreview />}
            </div>
        </div>
    );
};
