import { useThemeStore } from '../../store/useThemeStore';

export const ColorCategories = () => {
    const { theme, mode } = useThemeStore();
    const currentTheme = theme[mode];

    const categories = [
        { label: 'Background', color: currentTheme.background.hexValue },
        { label: 'Text', color: currentTheme.foreground.hexValue },
        { label: 'Border', color: currentTheme.border.hexValue },
        { label: 'Alert', color: currentTheme.destructive.hexValue },
        { label: 'Action', color: currentTheme.primary.hexValue },
    ];

    return (
        <div className="space-y-4">
            <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Theme Roles</label>
            <div className="space-y-4 font-mono text-sm">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 shadow-sm"
                                style={{ backgroundColor: cat.color }}
                            />
                            <span className="text-zinc-700 dark:text-zinc-300">{cat.label}</span>
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{cat.color.toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
