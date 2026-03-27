import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  filename: string;
  code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ filename, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group flex flex-col bg-zinc-950 p-5 rounded-xl border border-white/10 shadow-sm mt-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-medium text-sm">{filename}</h3>
        <button
          onClick={handleCopy}
          className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-1.5 text-xs font-medium"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto w-full text-zinc-300 text-xs font-mono leading-relaxed scrollbar-thin pb-2">
        <code>{code}</code>
      </pre>
    </div>
  );
};