import { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

const ComponentsExportSection = () => {
  const [activeTab, setActiveTab] = useState<'flutter' | 'react'>('react');

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    // Add toast/feedback here later
  };

  const components = [
    {
      name: 'Primary Button',
      react: `<button className="px-4 py-2 font-medium bg-primary text-primary-foreground rounded-button font-body shadow-sm hover:shadow-md transition-all">
  Primary Action
</button>`,
      flutter: `ElevatedButton(
  onPressed: () {},
  child: const Text('Primary Action'),
)`,
    },
    {
      name: 'Card',
      react: `<div className="p-6 rounded-card border bg-card text-card-foreground border-border shadow-sm">
  <h4 className="font-heading font-semibold mb-2">Card Title</h4>
  <p className="font-body text-muted-foreground">Card content with custom density and shadows.</p>
</div>`,
      flutter: `Card(
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Card Title', style: context.textTheme.titleMedium),
        const SizedBox(height: 8),
        Text(
          'Card content...',
          style: context.textTheme.bodyMedium?.copyWith(
            color: context.cs.onSurfaceVariant,
          ),
        ),
      ],
    ),
  ),
)`,
    },
    {
      name: 'Input Field',
      react: `<div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-foreground">Label</label>
  <input className="w-full px-3 py-2 rounded-input border bg-input text-foreground border-border focus:ring-2 focus:ring-ring focus:border-transparent font-body" placeholder="Enter text..." />
</div>`,
      flutter: `TextField(
  decoration: const InputDecoration(
    labelText: 'Label',
  ),
)`,
    },
    {
      name: 'Badge',
      react: `<span className="px-2 py-1 rounded-button bg-muted text-muted-foreground text-xs font-medium">Badge</span>`,
      flutter: `Chip(
  label: const Text('Badge'), 
  backgroundColor: context.ac.muted,
  labelStyle: TextStyle(color: context.ac.mutedForeground),
)`,
    },
    {
      name: 'Avatar',
      react: `<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-medium">AV</div>`,
      flutter: `CircleAvatar(
  backgroundColor: context.cs.secondary,
  child: Text('AV', style: TextStyle(color: context.cs.onSecondary)),
)`,
    },
    {
      name: 'Progress Bar',
      react: `<div className="w-full bg-muted h-2 rounded-full overflow-hidden">
  <div className="h-full bg-primary w-3/4 transition-all rounded-full" />
</div>`,
      flutter: `LinearProgressIndicator(
  backgroundColor: context.ac.muted,
  valueColor: AlwaysStoppedAnimation<Color>(context.cs.primary),
  value: 0.75,
  borderRadius: BorderRadius.circular(4),
)`,
    },
    {
      name: 'Toggle/Switch',
      react: `<button className="relative w-11 h-6 rounded-full shadow-sm bg-border hover:bg-primary transition-all focus:outline-none" role="switch" aria-checked="false">
  <span className="absolute block w-5 h-5 bg-white rounded-full top-0.5 left-0.5 shadow-md transition-transform translate-x-0" />
</button>`,
      flutter: `Switch(
  value: true,
  onChanged: (v) {},
)`,
    },
  ];

  return (
    <div className="flex flex-col h-full gap-6">
      <div>
        <h3 className="text-xl font-bold">Component Code Exports</h3>
        <p className="text-sm text-zinc-400">Copy ready-to-use code for your framework.</p>
      </div>

      <div className="flex bg-black/10 dark:bg-white/10 p-1 rounded-lg border border-black/10">
        <button
          onClick={() => setActiveTab('react')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'react' ? 'bg-white shadow-sm text-black' : 'text-zinc-400 hover:text-white'}`}
        >
          <Monitor className="w-4 h-4" /> React + Tailwind
        </button>
        <button
          onClick={() => setActiveTab('flutter')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'flutter' ? 'bg-white shadow-sm text-black' : 'text-zinc-400 hover:text-white'}`}
        >
          <Smartphone className="w-4 h-4" /> Flutter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto">
        {components.map((comp, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-black/5">
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">{comp.name}</h4>
            <pre className="text-xs font-mono bg-black/20 p-3 rounded overflow-x-auto text-zinc-200 max-h-32">
              <code>{activeTab === 'react' ? comp.react : comp.flutter}</code>
            </pre>
            <button
              onClick={() => copyCode(activeTab === 'react' ? comp.react : comp.flutter)}
              className="mt-2 w-full px-3 py-1.5 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors font-medium"
            >
              Copy Code
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsExportSection;

