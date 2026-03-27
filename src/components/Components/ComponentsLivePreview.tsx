import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { WebPreview } from '../Preview/WebPreview';
import { FlutterPreview } from '../Preview/FlutterPreview';
import { Monitor, Smartphone, Sun, Moon } from 'lucide-react';

export const ComponentsLivePreview = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'flutter'>('web');
  const { mode, setMode: setGlobalMode } = useThemeStore();

  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-zinc-700/50 sticky top-0 bg-zinc-900/90 backdrop-blur-md z-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-lg font-bold tracking-tight">Live Component Preview</h2>
            <p className="text-zinc-500 text-xs mt-0.5">Interactive preview with real-time theme changes</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex p-1 rounded-lg bg-white/5 border border-white/5">
              <button onClick={() => setGlobalMode('light')} className={`p-1.5 rounded-md transition-all ${mode === 'light' ? 'bg-white/10 text-white' : 'text-zinc-500'}`}>
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setGlobalMode('dark')} className={`p-1.5 rounded-md transition-all ${mode === 'dark' ? 'bg-white/10 text-white' : 'text-zinc-500'}`}>
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
              <button onClick={() => setActiveTab('web')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'web' ? 'bg-white/10 text-white' : 'text-zinc-500'}`}>
                <Monitor className="w-3.5 h-3.5" /> Web
              </button>
              <button onClick={() => setActiveTab('flutter')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'flutter' ? 'bg-white/10 text-white' : 'text-zinc-500'}`}>
                <Smartphone className="w-3.5 h-3.5" /> Flutter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
        {activeTab === 'web' ? <WebPreview showAll layout="grid" /> : <FlutterPreview showAll layout="grid" />}
      </div>
    </div>
  );
};