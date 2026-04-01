import { Palette, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  appMode: 'light' | 'dark';
  setAppMode: (val: 'light' | 'dark') => void;
  view: 'editor' | 'components' | 'code' | 'export';
  setView: (val: 'editor' | 'components' | 'code' | 'export') => void;
}

const Header = ({ appMode, setAppMode, view, setView }: HeaderProps) => {
  const tabs: { key: typeof view; label: string }[] = [
    { key: 'editor', label: 'Colors' },
    { key: 'components', label: 'Components' },
    { key: 'code', label: 'Component Code' },
    { key: 'export', label: 'Export Setup' },
  ];

  return (
    <header
      className={`h-14 border-b flex items-center justify-between px-5 shrink-0 transition-colors duration-300 backdrop-blur-xl ${
        appMode === 'dark' ? 'border-white/[0.06] bg-zinc-900/40' : 'border-black/[0.06] bg-white/60'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <Palette className="w-4.5 h-4.5 text-white" />
        </div>
        <h1 className="text-lg font-bold tracking-tight">
          ColorTheme <span className="text-emerald-500">Studio</span>
        </h1>
      </div>

      <div className="flex bg-black/5 dark:bg-white/5 p-0.5 rounded-xl border border-black/5 dark:border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setView(tab.key)}
            className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              view === tab.key
                ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20 uppercase tracking-widest flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> v1.0.3
        </span>
        <button
          onClick={() => setAppMode(appMode === 'light' ? 'dark' : 'light')}
          className={`p-2 rounded-xl transition-all duration-200 ${
            appMode === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'
          }`}
          aria-label="Toggle App Theme"
        >
          {appMode === 'dark' ? (
            <Sun className="w-4.5 h-4.5 text-zinc-400" />
          ) : (
            <Moon className="w-4.5 h-4.5 text-zinc-600" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;