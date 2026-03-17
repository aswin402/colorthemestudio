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
    <div className={`h-full grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-0`}>
      {/* Tabs Header - full width */}
      <div className="lg:col-span-12 col-span-1 flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 mb-4">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all flex-1 ${activeTab === 'preview' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
        >
          <Monitor className="w-4 h-4" /> Live Preview
        </button>
        <button
          onClick={() => setActiveTab('export')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all flex-1 ${activeTab === 'export' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
        >
          <Code2 className="w-4 h-4" /> Exports
        </button>
      </div>

      {/* Configuration Column - always visible */}
      <div className={`lg:col-span-4 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
        <ConfigControls />
      </div>

      {/* Content Column: Preview or Exports */}
      <div className={`lg:col-span-8 flex flex-col gap-6 overflow-hidden scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
        {activeTab === 'preview' ? <ComponentsLivePreview /> : <ComponentsExportSection />}
      </div>
    </div>
  );
};
