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
        <div className="relative group flex flex-col bg-zinc-950 p-6 rounded-xl border border-white/10 shadow-sm shrink-0 mt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">{filename}</h3>
                <button
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <pre className="overflow-x-auto w-full text-zinc-300 text-sm font-mono leading-relaxed scrollbar-hide pb-4">
                <code>{code}</code>
            </pre>
        </div>
    );
};

