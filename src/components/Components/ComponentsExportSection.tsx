import { useState } from 'react';
import { Monitor, Smartphone, ChevronRight, ChevronLeft, FileCode2, BookOpen, Eye, Copy, Check, Code2, Layers } from 'lucide-react';
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
    color: 'sky',
    codeLabel: 'Component Code',
    usageLabel: 'Usage Example',
  },
  flutter: {
    icon: Smartphone,
    label: 'Flutter',
    sublabel: 'Dart widgets',
    color: 'cyan',
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

  const navigateTo = (comp: typeof components[0]) => {
    setSelectedComponent(comp.name);
    setCodeTab('preview');
  };

  return (
    <div className="flex h-full">
      {/* ── Sidebar ── */}
      <aside className="w-52 flex-shrink-0 border-r border-white/[0.06] flex flex-col h-full bg-black/20">

        {/* Framework switcher */}
        <div className="p-3 border-b border-white/[0.06]">
          <p className="text-[9px] uppercase tracking-widest text-white/30 px-1.5 mb-2 font-bold">Framework</p>
          <div className="flex flex-col gap-1">
            {(['react', 'flutter'] as Framework[]).map((fw) => {
              const fwMeta = frameworkMeta[fw];
              const FwIcon = fwMeta.icon;
              const isActive = framework === fw;
              return (
                <button
                  key={fw}
                  onClick={() => setFramework(fw)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-white/15' : 'bg-white/5'
                  }`}>
                    <FwIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="font-semibold text-xs leading-none truncate">{fwMeta.label}</div>
                    <div className="text-[9px] mt-0.5 truncate opacity-60">{fwMeta.sublabel}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Component list */}
        <div className="flex-1 overflow-y-auto py-3 scrollbar-thin">
          <p className="text-[9px] uppercase tracking-widest text-white/30 px-4 mb-2 font-bold">Components</p>
          <nav className="flex flex-col px-2 gap-0.5">
            {components.map((comp) => {
              const isActive = selectedComponent === comp.name;
              return (
                <button
                  key={comp.name}
                  onClick={() => navigateTo(comp)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/40 hover:text-white/70 hover:bg-white/5 font-medium'
                  }`}
                >
                  <span className="truncate">{comp.name}</span>
                  {isActive && <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-60" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer stats */}
        <div className="p-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/5 text-xs">
            <Layers className="w-3 h-3 text-white/40 flex-shrink-0" />
            <span className="text-white/40">{components.length} components</span>
            <div className="ml-auto flex items-center gap-1">
              <FrameworkIcon className="w-3 h-3 text-white/30" />
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Header */}
        <div className="px-6 py-4 border-b border-white/[0.06] flex-shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  framework === 'react'
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/20'
                    : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                }`}>
                  <FrameworkIcon className="w-2.5 h-2.5" />
                  {meta.label}
                </span>
                <span className="text-white/25 text-xs">{meta.sublabel}</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white truncate">{activeComp.name}</h2>
              <p className="text-white/40 text-xs mt-0.5 truncate">{activeComp.description}</p>
            </div>

            <button
              onClick={() => copyCode(-1, activeCode)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                copiedIndex === -1
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-white/8 hover:bg-white/12 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {copiedIndex === -1 ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedIndex === -1 ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>

        {/* Tab bar — pill style */}
        <div className="flex items-center gap-1 px-6 py-2.5 border-b border-white/[0.06] flex-shrink-0 bg-black/10">
          {(
            [
              { key: 'preview', label: 'Preview', icon: Eye },
              { key: 'code',    label: meta.codeLabel,  icon: Code2 },
              { key: 'usage',   label: meta.usageLabel, icon: BookOpen },
            ] as { key: CodeTab; label: string; icon: React.ElementType }[]
          ).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCodeTab(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                codeTab === key
                  ? 'bg-white/10 text-white'
                  : 'text-white/35 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}

          {/* right-side progress indicator */}
          <div className="ml-auto flex items-center gap-1">
            {components.map((c, i) => (
              <button
                key={c.name}
                onClick={() => navigateTo(c)}
                title={c.name}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === compIndex
                    ? 'bg-white/60 w-4'
                    : 'bg-white/15 hover:bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-6">

            {/* ── Preview tab ── */}
            {codeTab === 'preview' && (
              <div className="rounded-xl border border-white/[0.07] overflow-hidden bg-white/[0.02] min-h-[380px] flex items-center justify-center relative">
                {/* subtle dot grid */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="relative z-10 w-full">
                  {PreviewComp ? (
                    <PreviewComp />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-white/25 text-xs gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Eye className="w-5 h-5" />
                      </div>
                      <p>
                        {framework === 'flutter'
                          ? 'Live preview available for React only'
                          : 'Preview not available for this component'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Code tab ── */}
            {codeTab === 'code' && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{meta.codeLabel}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
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
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{meta.usageLabel}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <CodeBlock
                  code={activeUsage}
                  copyIndex={compIndex * 2 + 1}
                  copiedIndex={copiedIndex}
                  onCopy={copyCode}
                />
              </div>
            )}

            {/* ── Navigator ── */}
            <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/[0.06]">
              <button
                onClick={() => {
                  const prev = components[compIndex - 1];
                  if (prev) navigateTo(prev);
                }}
                disabled={compIndex === 0}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-xs font-medium transition-all hover:bg-white/5 text-white/50 hover:text-white/80 disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                {compIndex > 0 ? components[compIndex - 1].name : 'Previous'}
              </button>

              <span className="text-[10px] text-white/25 font-medium">
                {compIndex + 1} / {components.length}
              </span>

              <button
                onClick={() => {
                  const next = components[compIndex + 1];
                  if (next) navigateTo(next);
                }}
                disabled={compIndex === components.length - 1}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-xs font-medium transition-all hover:bg-white/5 text-white/50 hover:text-white/80 disabled:opacity-25 disabled:cursor-not-allowed"
              >
                {compIndex < components.length - 1 ? components[compIndex + 1].name : 'Next'}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsExportSection;
