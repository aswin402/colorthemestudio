import { Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  appMode: 'light' | 'dark';
  setAppMode: (val: 'light' | 'dark') => void;
  view: 'editor' | 'components' | 'export';
  setView: (val: 'editor' | 'components' | 'export') => void;
}

const Header = ({ appMode, setAppMode, view, setView }: HeaderProps) => {
  return (
    <header className={`h-16 border-b flex items-center justify-between px-6 shrink-0 transition-colors duration-200 ${appMode === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
      <div className="flex items-center gap-2">
        <Palette className="w-6 h-6 text-green-500" />
        <h1 className="text-xl font-bold tracking-tight">ColorTheme Studio</h1>
      </div>

      <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 w-fit">
        <button
          onClick={() => setView('editor')}
          className={`flex justify-center items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'editor' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
        >
          Colors
        </button>
        <button
          onClick={() => setView('components')}
          className={`flex justify-center items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'components' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
        >
          Components
        </button>
        <button
          onClick={() => setView('export')}
          className={`flex justify-center items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'export' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
        >
           Export Setup
        </button>
      </div>

      <div className="flex items-center gap-4">

        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-zinc-100/50 text-zinc-500 ring-1 ring-inset ring-zinc-500/10 dark:bg-white/5 dark:text-zinc-400 dark:ring-white/10 uppercase tracking-widest">
          v0.0.7
        </span>
        <button
          onClick={() => setAppMode(appMode === 'light' ? 'dark' : 'light')}
          className={`p-2 rounded-full transition-colors ${appMode === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
          aria-label="Toggle App Theme"
        >
          {appMode === 'dark' ? <Sun className="w-5 h-5 text-zinc-400" /> : <Moon className="w-5 h-5 text-zinc-600" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
