import { useThemeStore } from '../../store/useThemeStore';
import type { ThemeTemperature } from '../../types';

export const TemperatureSelector = () => {
    const { temperature, setTemperature } = useThemeStore();

    const options: { value: ThemeTemperature, label: string }[] = [
        { value: 'natural', label: 'Natural' },
        { value: 'warmer', label: 'Warmer' },
        { value: 'cooler', label: 'Cooler' },
    ];

    return (
        <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Theme Temperature</label>
            <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg">
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => setTemperature(opt.value)}
                        className={`flex-1 text-sm py-1.5 rounded-md transition-all ${temperature === opt.value
                            ? 'bg-white dark:bg-[#27272a] shadow-sm font-medium text-black dark:text-white'
                            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                            }`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
