import { Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  appMode: 'light' | 'dark';
  setAppMode: (val: 'light' | 'dark') => void;
  view: 'editor' | 'export';
  setView: (val: 'editor' | 'export') => void;
}

const Header = ({ appMode, setAppMode, view, setView }: HeaderProps) => {
  return (
    <header className={`h-16 border-b flex items-center justify-between px-6 shrink-0 transition-colors duration-200 ${appMode === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
      <div className="flex items-center gap-2">
        <Palette className="w-6 h-6 text-green-500" />
        <h1 className="text-xl font-bold tracking-tight">ColorTheme Studio</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setView(view === 'editor' ? 'export' : 'editor')}
          className="px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
        >
          {view === 'editor' ? 'Export Setup' : 'Back to Editor'}
        </button>

        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-zinc-100/50 text-zinc-500 ring-1 ring-inset ring-zinc-500/10 dark:bg-white/5 dark:text-zinc-400 dark:ring-white/10 uppercase tracking-widest">
          v0.0.2
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
