import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { WebPreview } from './WebPreview';
import { FlutterPreview } from './FlutterPreview';
import { Monitor, Smartphone, Sun, Moon, Eye } from 'lucide-react';

export const PreviewPanel = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'flutter'>('web');
  const { mode, setMode } = useThemeStore();

  return (
    <div className="flex flex-col h-full space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-bold tracking-tight">Live Preview</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex p-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
            <button
              onClick={() => setMode('light')}
              className={`p-1.5 rounded-md transition-all ${
                mode === 'light'
                  ? 'bg-white shadow-sm text-amber-500'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMode('dark')}
              className={`p-1.5 rounded-md transition-all ${
                mode === 'dark'
                  ? 'bg-zinc-800 shadow-sm text-blue-400'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          <div className="flex bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/5 dark:border-white/5 text-sm font-medium">
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'web'
                  ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" /> Web
            </button>
            <button
              onClick={() => setActiveTab('flutter')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'flutter'
                  ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Flutter
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {activeTab === 'web' ? <WebPreview /> : <FlutterPreview />}
      </div>
    </div>
  );
};