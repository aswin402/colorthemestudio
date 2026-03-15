import { useThemeStore } from '../../store/useThemeStore';
import type { ThemeColors } from '../../types';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const generateCSS = (light: ThemeColors, dark: ThemeColors) => {
    const rootVars = Object.values(light).map(
        (token) => `  ${token.cssVar}: oklch(${token.oklchValue});`
    ).join('\n');

    const darkVars = Object.values(dark).map(
        (token) => `  ${token.cssVar}: oklch(${token.oklchValue});`
    ).join('\n');

    return `@theme inline;

@layer base {
  :root {
${rootVars}
    --radius: 0.625rem;
  }

  .dark {
${darkVars}
  }
}`;
};

export const WebCSS = () => {
    const { theme } = useThemeStore();
    const [copied, setCopied] = useState(false);

    const cssString = generateCSS(theme.light, theme.dark);

    const handleCopy = () => {
        navigator.clipboard.writeText(cssString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group h-full flex flex-col">
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            <pre className="flex-1 bg-zinc-950 text-zinc-300 p-6 rounded-xl overflow-x-auto overflow-y-auto text-sm font-mono leading-relaxed border border-white/10 scrollbar-hide">
                <code>{cssString}</code>
            </pre>
        </div>
    );
};
