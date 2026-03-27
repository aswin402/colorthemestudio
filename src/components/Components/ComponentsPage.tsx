import { useState } from 'react';
import { ConfigControls } from './ConfigControls';
import { ComponentsLivePreview } from './ComponentsLivePreview';
import ComponentsExportSection from './ComponentsExportSection';
import { Monitor, Code2 } from 'lucide-react';

interface ComponentsPageProps {
  panelClass: string;
}

export const ComponentsPage = ({ panelClass }: ComponentsPageProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'export'>('preview');

  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5 w-fit">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'preview'
              ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
          }`}
        >
          <Monitor className="w-4 h-4" /> Live Preview
        </button>
        <button
          onClick={() => setActiveTab('export')}
          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'export'
              ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
          }`}
        >
          <Code2 className="w-4 h-4" /> Exports
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-hidden">
        <div className={`lg:col-span-4 flex flex-col ${panelClass} rounded-2xl border shadow-sm overflow-hidden`}>
          <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
            <ConfigControls />
          </div>
        </div>

        <div className={`lg:col-span-8 flex flex-col ${panelClass} rounded-2xl border shadow-sm overflow-hidden`}>
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {activeTab === 'preview' ? <ComponentsLivePreview /> : <ComponentsExportSection />}
          </div>
        </div>
      </div>
    </div>
  );
};