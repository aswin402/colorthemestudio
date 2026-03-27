import { useState } from 'react';
import { FlutterExport } from './FlutterExport';
import { TailwindExport } from './TailwindExport';
import { ShadcnExport } from './ShadcnExport';
import { Smartphone, Code2, Layout } from 'lucide-react';

interface ExportPageProps {
  panelClass: string;
}

export const ExportPage = ({ panelClass }: ExportPageProps) => {
  const [activeTab, setActiveTab] = useState<'flutter' | 'tailwind' | 'shadcn'>('flutter');

  const tabs: { key: typeof activeTab; label: string; icon: React.ReactNode }[] = [
    { key: 'flutter', label: 'Flutter', icon: <Smartphone className="w-4 h-4" /> },
    { key: 'tailwind', label: 'Tailwind', icon: <Code2 className="w-4 h-4" /> },
    { key: 'shadcn', label: 'shadcn/ui', icon: <Layout className="w-4 h-4" /> },
  ];

  return (
    <div className={`flex flex-col h-full overflow-hidden rounded-2xl border ${panelClass} shadow-sm p-5`}>
      <div className="flex flex-col gap-5 h-full">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-1">Export Theme Setup</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Copy and paste into your project to start using your custom theme.
          </p>
        </div>

        <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex justify-center items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {activeTab === 'flutter' && <FlutterExport />}
          {activeTab === 'tailwind' && <TailwindExport />}
          {activeTab === 'shadcn' && <ShadcnExport />}
        </div>
      </div>
    </div>
  );
};