import { Palette, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  appMode: 'light' | 'dark';
  setAppMode: (val: 'light' | 'dark') => void;
}

const Header = ({ appMode, setAppMode }: HeaderProps) => {
  return (
    <header className={`h-16 border-b flex items-center justify-between px-6 shrink-0 transition-colors duration-200 ${appMode === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
      <div className="flex items-center gap-2">
        <Palette className="w-6 h-6 text-green-500" />
        <h1 className="text-xl font-bold tracking-tight">ColorTheme Studio</h1>
      </div>

      <button
        onClick={() => setAppMode(appMode === 'light' ? 'dark' : 'light')}
        className={`p-2 rounded-full transition-colors ${appMode === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
        aria-label="Toggle App Theme"
      >
        {appMode === 'dark' ? <Sun className="w-5 h-5 text-zinc-400" /> : <Moon className="w-5 h-5 text-zinc-600" />}
      </button>
    </header>
  );
};

export default Header;
