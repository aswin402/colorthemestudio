import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const sidebar: ComponentEntry = {
  name: 'Sidebar',
  description: 'Vertical navigation panel with nested links and collapsed state.',
  react: (config) => `// components/ui/Sidebar.tsx
import { ReactNode, useState } from 'react';
import { Home, BarChart2, Mail, Settings, ChevronLeft, ChevronRight, Layout } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Mail, label: 'Messages', count: 5 },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className={\`flex flex-col h-screen border-r border-border bg-background${getTwOpacity(config.navbarOpacity)} transition-all duration-300 \${collapsed ? 'w-16' : 'w-64'} ${getTwBlur(config.blurAmount)}\`}>
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && <span className="font-bold text-lg tracking-tight">Studio</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg hover:bg-muted opacity-50 hover:opacity-100">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {items.map((item, i) => (
          <button key={i} className={\`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all \${item.active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'}\`}>
            <item.icon size={20} />
            {!collapsed && (
              <div className="flex-1 text-left flex items-center justify-between">
                <span className="font-medium text-sm">{item.label}</span>
                {item.count && <span className="px-2 py-0.5 rounded-full bg-primary-foreground/20 text-xs">{item.count}</span>}
              </div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs uppercase">JS</div>
          {!collapsed && (
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold leading-none">Jane Smith</span>
              <span className="text-xs text-muted-foreground mt-1">jane@example.com</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;`,
  usageReact: (_config) => `// Typically used in a Dashboard Layout
<div className="flex h-screen overflow-hidden">
  <Sidebar />
  <main className="flex-1 overflow-auto bg-muted/20">
    {/* Page content */}
  </main>
</div>`,
  flutter: (config) => `// widgets/custom_sidebar.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSidebar extends StatelessWidget {
  const CustomSidebar({super.key});

  @override
  Widget build(BuildContext context) {
    Widget drawerContent = Drawer(
      backgroundColor: context.cs.surface${getFlutterOpacity(config.navbarOpacity)},
      elevation: 0,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      child: Column(
        children: [
          DrawerHeader(
            decoration: BoxDecoration(border: Border(bottom: BorderSide(color: context.cs.outlineVariant))),
            child: Row(
              children: [
                const Icon(Icons.apps, size: 32),
                const SizedBox(width: 12),
                Text("Studio", style: context.textTheme.headlineSmall?.copyWith(fontWeight: FontWeight.bold)),
              ],
            ),
          ),
          ListTile(selected: true, leading: const Icon(Icons.dashboard_outlined), title: const Text("Dashboard"), onTap: () {}),
          ListTile(leading: const Icon(Icons.analytics_outlined), title: const Text("Analytics"), onTap: () {}),
          ListTile(leading: const Icon(Icons.message_outlined), title: const Text("Messages"), trailing: Badge(label: Text("5")), onTap: () {}),
          const Spacer(),
          const Divider(),
          ListTile(leading: const Icon(Icons.settings_outlined), title: const Text("Settings"), onTap: () {}),
        ],
      ),
    );

    if ("${config.blurAmount}" != "none") {
      return ClipRect(
        child: BackdropFilter(
          filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
          child: drawerContent,
        ),
      );
    }
    return drawerContent;
  }
}`,
  usageFlutter: (_config) => `Scaffold(
  drawer: CustomSidebar(),
);`,
};

export default sidebar;
