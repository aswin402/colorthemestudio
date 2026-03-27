import { useState, useEffect } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import type { FontSize } from '../../types';
import { WebPreview } from '../Preview/WebPreview';
import { FlutterPreview } from '../Preview/FlutterPreview';
import { Monitor, Smartphone, Sun, Moon, Copy, Check } from 'lucide-react';

export const ComponentsLivePreview = () => {
    const [activeTab, setActiveTab] = useState<'web' | 'flutter'>('web');
    const [copied, setCopied] = useState(false);
    const { mode, componentConfig, setMode: setGlobalMode } = useThemeStore();

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

    const copyPreviewCode = async () => {
        const previewHTML = document.querySelector('.preview-container')?.innerHTML || '';
        try {
            await navigator.clipboard.writeText(previewHTML);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    return (
        <div className="flex flex-col h-full">
            {/* Header Section */}
            <div className="p-6 border-b border-border sticky top-0 bg-background z-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 
                            className={`text-2xl font-bold tracking-tight ${getFontSizeClass(componentConfig.fontSizeHeading)}`} 
                            style={{ 
                                fontFamily: `"${componentConfig.headingFont}", sans-serif`, 
                                fontWeight: componentConfig.headingWeight 
                            }}
                        >
                            Live Component Preview
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            Interactive preview with real-time theme changes
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <div className="flex p-1 rounded-lg bg-muted border border-border">
                            <button 
                                onClick={() => setGlobalMode('light')} 
                                className={`p-1.5 rounded-md transition-all ${
                                    mode === 'light' 
                                        ? 'bg-background shadow-sm text-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Sun className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => setGlobalMode('dark')} 
                                className={`p-1.5 rounded-md transition-all ${
                                    mode === 'dark' 
                                        ? 'bg-background shadow-sm text-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Moon className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Platform Tabs */}
                        <div className="flex bg-muted p-1 rounded-lg border border-border">
                            <button
                                onClick={() => setActiveTab('web')}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    activeTab === 'web' 
                                        ? 'bg-background shadow-sm text-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Monitor className="w-4 h-4" /> Web
                            </button>
                            <button
                                onClick={() => setActiveTab('flutter')}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    activeTab === 'flutter' 
                                        ? 'bg-background shadow-sm text-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                <Smartphone className="w-4 h-4" /> Flutter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-hidden p-6">
                <div className="h-full rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                    {/* Preview Toolbar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-muted-foreground ml-2">
                                {activeTab === 'web' ? 'React + Tailwind Preview' : 'Flutter Preview'}
                            </span>
                        </div>
                        <button
                            onClick={copyPreviewCode}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                copied
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-primary/10 hover:bg-primary/20 text-primary'
                            }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5" />
                                    Copy Preview
                                </>
                            )}
                        </button>
                    </div>

                    {/* Preview Area */}
                    <div className="preview-container h-[calc(100%-52px)] overflow-y-auto p-6 bg-background">
                        {activeTab === 'web' ? <WebPreview /> : <FlutterPreview />}
                    </div>
                </div>
            </div>

            {/* Component Info Footer */}
            <div className="px-6 py-4 border-t border-border bg-muted/10">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
                                Interactive preview updates with theme changes
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-muted-foreground">
                                Real-time component rendering
                            </span>
                        </div>
                    </div>
                    <div className="text-muted-foreground">
                        {activeTab === 'web' ? 'React components with Tailwind CSS' : 'Flutter widgets with Material Design'}
                    </div>
                </div>
            </div>
        </div>
    );
};