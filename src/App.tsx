import { useState } from 'react';
import Header from './components/Layout/Header';
import { ColorPickerPanel } from './components/ColorPicker/ColorPickerPanel';
import { PreviewPanel } from './components/Preview/PreviewPanel';
import { CodeGenPanel } from './components/CodeGenerator/CodeGenPanel';
import { ExportPage } from './components/Export/ExportPage';
import { ComponentsPage } from './components/Components/ComponentsPage';

function App() {
  const [appMode, setAppMode] = useState<'light' | 'dark'>('dark');
  const [view, setView] = useState<'editor' | 'components' | 'export'>('editor');

  const bgClass = appMode === 'dark' ? 'bg-[#09090b] text-white' : 'app-light';
  const panelClass = appMode === 'dark'
    ? 'bg-zinc-900/60 backdrop-blur-xl border-white/[0.08]'
    : 'bg-white/80 backdrop-blur-xl border-black/[0.08]';

  return (
    <div className={`h-screen w-full flex flex-col transition-colors duration-300 overflow-hidden ${bgClass}`}>
      <Header appMode={appMode} setAppMode={setAppMode} view={view} setView={setView} />

      <main className="flex-1 overflow-hidden p-3 lg:p-5">
        {view === 'editor' ? (
          <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-[1920px] mx-auto">
            <section className={`lg:col-span-3 flex flex-col overflow-y-auto scrollbar-thin rounded-2xl border ${panelClass} shadow-lg p-5`}>
              <ColorPickerPanel />
            </section>
            <section className={`lg:col-span-6 flex flex-col overflow-y-auto scrollbar-thin rounded-2xl border ${panelClass} shadow-lg p-5`}>
              <PreviewPanel />
            </section>
            <section className={`lg:col-span-3 flex flex-col overflow-y-auto scrollbar-thin rounded-2xl border ${panelClass} shadow-lg p-5`}>
              <CodeGenPanel />
            </section>
          </div>
        ) : view === 'components' ? (
          <div className="h-full max-w-[1920px] mx-auto">
            <ComponentsPage panelClass={panelClass} />
          </div>
        ) : (
          <div className="h-full max-w-[1920px] mx-auto">
            <ExportPage panelClass={panelClass} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;