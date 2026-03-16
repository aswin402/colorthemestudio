import { useState } from 'react';
import { FlutterExport } from './FlutterExport';
import { TailwindExport } from './TailwindExport';
import { Smartphone, Code2 } from 'lucide-react';

interface ExportPageProps {
  panelClass: string;
}

export const ExportPage = ({ panelClass }: ExportPageProps) => {
  const [activeTab, setActiveTab] = useState<'flutter' | 'tailwind'>('flutter');

  return (
    <div className={`flex flex-col h-full overflow-hidden rounded-2xl border ${panelClass} shadow-sm bg-black/20 p-6`}>
      <div className="flex flex-col gap-6 h-full">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Export Theme Setup</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Copy and paste these setups into your project to start using your custom theme immediately.
          </p>
        </div>

        <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 w-fit">
          <button
            onClick={() => setActiveTab('flutter')}
            className={`flex justify-center items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'flutter' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
          >
            <Smartphone className="w-4 h-4" /> Flutter Setup
          </button>
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`flex justify-center items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'tailwind' ? 'bg-white dark:bg-[#27272a] shadow-sm text-black dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'}`}
          >
            <Code2 className="w-4 h-4" /> Tailwind Setup
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'flutter' ? <FlutterExport /> : <TailwindExport />}
        </div>
      </div>
    </div>
  );
};
