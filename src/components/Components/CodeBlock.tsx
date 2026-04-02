import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  copyIndex: number;
  copiedIndex: number | null;
  onCopy: (index: number, code: string) => void;
}

const CodeBlock = ({ code, copyIndex, copiedIndex, onCopy }: CodeBlockProps) => (
  <div className="relative group">
    <pre className="p-5 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed border scrollbar-thin bg-zinc-950 text-zinc-200 border-zinc-800">
      <code>{code}</code>
    </pre>
    <button
      onClick={() => onCopy(copyIndex, code)}
      className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all opacity-0 group-hover:opacity-100 ${
        copiedIndex === copyIndex
          ? 'bg-emerald-500 text-white'
          : 'bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300'
      }`}
    >
      {copiedIndex === copyIndex
        ? <><Check className="w-3 h-3" /> Copied</>
        : <><Copy className="w-3 h-3" /> Copy</>}
    </button>
  </div>
);

export default CodeBlock;
