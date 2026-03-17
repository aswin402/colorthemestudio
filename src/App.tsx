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
  const panelClass = appMode === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white border-black/10';

  return (
    <div className={`h-screen w-full flex flex-col transition-colors duration-200 overflow-hidden ${bgClass}`}>
      <Header appMode={appMode} setAppMode={setAppMode} view={view} setView={setView} />

      <main className="flex-1 overflow-hidden p-4 lg:p-6">
        {view === 'editor' ? (
          <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1800px] mx-auto">
            {/* Section 1: Color Picker */}
            <section className={`lg:col-span-3 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
              <ColorPickerPanel />
            </section>

            {/* Section 2: Live Preview */}
            <section className={`lg:col-span-6 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
              <PreviewPanel />
            </section>

            {/* Section 3: Code Gen */}
            <section className={`lg:col-span-3 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
              <CodeGenPanel />
            </section>
          </div>
        ) : view === 'components' ? (
          <div className="h-full max-w-[1800px] mx-auto">
             <ComponentsPage panelClass={panelClass} />
          </div>
        ) : (
          <div className="h-full max-w-[1800px] mx-auto">
             <ExportPage panelClass={panelClass} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
