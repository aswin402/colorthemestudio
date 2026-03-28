import type { ComponentConfig } from "../types";


export const renderPillSelector = (
  label: string,
  icon: React.ReactNode,
  configKey: keyof ComponentConfig,
  options: { label: string; value: string }[],
  componentConfig: ComponentConfig,
  updateConfig: (key: keyof ComponentConfig, value: string) => void,
) => (
  <div className="flex flex-col gap-2.5">
    <label className="text-xs font-medium flex items-center gap-1.5">{icon} {label}</label>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateConfig(configKey, opt.value)}
          className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors border ${
            componentConfig[configKey] === opt.value
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export const renderSelect = (
  label: string,
  icon: React.ReactNode,
  configKey: keyof ComponentConfig,
  options: string[],
  componentConfig: ComponentConfig,
  updateConfig: (key: keyof ComponentConfig, value: string) => void,
) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-medium flex items-center gap-1.5">{icon} {label}</label>
    <select
      value={componentConfig[configKey] as string}
      onChange={(e) => updateConfig(configKey, e.target.value)}
      className="px-3 py-2 text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-zinc-200"
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-zinc-900 text-zinc-200">{opt}</option>
      ))}
    </select>
  </div>
);