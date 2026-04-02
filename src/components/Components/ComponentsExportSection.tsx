import { useState } from 'react';
import { Monitor, Smartphone, ChevronRight, FileCode2, BookOpen, Eye } from 'lucide-react';
import { Copy, Check } from 'lucide-react';
import { previewMap } from './ComponentPreviewRenderer';
import { components } from './componentData';
import CodeBlock from './CodeBlock';
import { useThemeStore } from '../../store/useThemeStore';
import type { Framework, CodeTab } from './types';


// ─────────────────────────────────────────────────────────────────────────────
// Framework metadata
// ─────────────────────────────────────────────────────────────────────────────
const frameworkMeta = {
  react: {
    icon: Monitor,
    label: 'React',
    sublabel: 'TypeScript + Tailwind CSS',
    badge: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    codeLabel: 'Component Code',
    usageLabel: 'Usage Example',
  },
  flutter: {
    icon: Smartphone,
    label: 'Flutter',
    sublabel: 'Dart widgets',
    badge: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    codeLabel: 'Widget Code',
    usageLabel: 'Usage Example',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Main export section
// ─────────────────────────────────────────────────────────────────────────────
const ComponentsExportSection = () => {
  const { componentConfig } = useThemeStore();
  const [framework, setFramework] = useState<Framework>('react');
  const [selectedComponent, setSelectedComponent] = useState<string>(components[0].name);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [codeTab, setCodeTab] = useState<CodeTab>('preview');


  const copyCode = async (index: number, code: string) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const meta = frameworkMeta[framework];
  const FrameworkIcon = meta.icon;
  const activeComp = components.find((c) => c.name === selectedComponent) ?? components[0];
  const compIndex = components.indexOf(activeComp);
  const PreviewComp = previewMap[activeComp.name];
  
  const activeCode = framework === 'react' 
    ? activeComp.react(componentConfig) 
    : activeComp.flutter(componentConfig);
    
  const activeUsage = framework === 'react' 
    ? activeComp.usageReact(componentConfig) 
    : activeComp.usageFlutter(componentConfig);


  return (
    <div className="flex h-full">
      {/* ── Sidebar ── */}
      <aside className="w-56 flex-shrink-0 border-r border-border flex flex-col h-full">
        {/* Framework switcher */}
        <div className="p-3 border-b border-border space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2 font-semibold">Framework</p>
          {(['react', 'flutter'] as Framework[]).map((fw) => {
            const fwMeta = frameworkMeta[fw];
            const FwIcon = fwMeta.icon;
            return (
              <button
                key={fw}
                onClick={() => setFramework(fw)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  framework === fw
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <FwIcon className="w-4 h-4 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold leading-none">{fwMeta.label}</div>
                  <div className={`text-[10px] mt-0.5 ${framework === fw ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {fwMeta.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Component list */}
        <div className="flex-1 overflow-y-auto p-3 scrollbar-thin">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2 font-semibold">Components</p>
          <nav className="space-y-0.5">
            {components.map((comp) => (
              <button
                key={comp.name}
                onClick={() => { setSelectedComponent(comp.name); setCodeTab('preview'); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group ${
                  selectedComponent === comp.name
                    ? 'bg-muted text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span>{comp.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                  selectedComponent === comp.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs border ${meta.badge}`}>
            <FrameworkIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-semibold">{meta.label}</span>
            <span className="text-muted-foreground ml-auto">{components.length} components</span>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-8 py-5 border-b border-border flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.badge}`}>
                  <FrameworkIcon className="w-3 h-3" />
                  {meta.label}
                </span>
                <span className="text-muted-foreground text-xs">{meta.sublabel}</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{activeComp.name}</h2>
              <p className="text-muted-foreground text-sm mt-0.5">{activeComp.description}</p>
            </div>

            <button
              onClick={() => copyCode(-1, activeCode)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                copiedIndex === -1
                  ? 'bg-emerald-500 text-white'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              {copiedIndex === -1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedIndex === -1 ? 'Copied!' : `Copy ${meta.label} Code`}
            </button>
          </div>
        </div>

        {/* Tab bar — Preview / Code / Usage */}
        <div className="flex items-center gap-0 border-b border-border px-8 flex-shrink-0">
          {(
            [
              { key: 'preview', label: 'Preview', icon: Eye },
              { key: 'code',    label: meta.codeLabel,  icon: FileCode2 },
              { key: 'usage',   label: meta.usageLabel, icon: BookOpen },
            ] as { key: CodeTab; label: string; icon: React.ElementType }[]
          ).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCodeTab(key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
                codeTab === key
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-8">

            {/* ── Preview tab ── */}
            {codeTab === 'preview' && (
              <div className="rounded-xl border border-border overflow-hidden relative min-h-[400px] flex items-center justify-center bg-white dark:bg-zinc-950">
                {/* Checkered background pattern for transparency visibility */}
                <div 
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                  style={{ 
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                
                <div className="relative z-10 w-full">
                  {PreviewComp ? (
                    <PreviewComp />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-muted-foreground text-sm gap-3">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <Eye className="w-6 h-6 opacity-20" />
                      </div>
                      <p>
                        {framework === 'flutter'
                          ? 'Live preview is currently only available for React'
                          : 'Preview not available for this component'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Code tab ── */}
            {codeTab === 'code' && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-3">
                  <FileCode2 className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-base">{meta.codeLabel}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <CodeBlock
                  code={activeCode}
                  copyIndex={compIndex * 2}
                  copiedIndex={copiedIndex}
                  onCopy={copyCode}
                />
              </div>
            )}

            {/* ── Usage tab ── */}
            {codeTab === 'usage' && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-base">{meta.usageLabel}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <CodeBlock
                  code={activeUsage}
                  copyIndex={compIndex * 2 + 1}
                  copiedIndex={copiedIndex}
                  onCopy={copyCode}
                />
              </div>
            )}

            {/* Navigator */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
              <button
                onClick={() => {
                  const prev = components[compIndex - 1];
                  if (prev) { setSelectedComponent(prev.name); setCodeTab('preview'); }
                }}
                disabled={compIndex === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                {compIndex > 0 ? components[compIndex - 1].name : 'Previous'}
              </button>

              <div className="flex items-center gap-1.5">
                {components.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => { setSelectedComponent(c.name); setCodeTab('preview'); }}
                    className={`h-2 rounded-full transition-all ${
                      i === compIndex ? 'bg-primary w-5' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const next = components[compIndex + 1];
                  if (next) { setSelectedComponent(next.name); setCodeTab('preview'); }
                }}
                disabled={compIndex === components.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {compIndex < components.length - 1 ? components[compIndex + 1].name : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsExportSection;
