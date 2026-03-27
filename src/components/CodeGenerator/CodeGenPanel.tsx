import { useState } from 'react';
import { WebCSS } from './WebCSS';
import { FlutterTheme } from './FlutterTheme';
import { Code2, Smartphone } from 'lucide-react';

export const CodeGenPanel = () => {
  const [activeTab, setActiveTab] = useState<'css' | 'flutter'>('css');

  return (
    <div className="flex flex-col h-full space-y-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold tracking-tight">Generated Code</h2>
        <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 w-fit">
          <button
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'css'
                ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" /> Web CSS
          </button>
          <button
            onClick={() => setActiveTab('flutter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'flutter'
                ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Flutter
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {activeTab === 'css' && <WebCSS />}
        {activeTab === 'flutter' && <FlutterTheme />}
      </div>
    </div>
  );
};