import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const topNavbar: ComponentEntry = {
  name: 'Top Navbar',
  description: 'Main navigation header with logo, links, and profile actions.',
  react: (config) => `// components/ui/TopNavbar.tsx
import { ReactNode } from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

const TopNavbar = () => {
  return (
    <header className={\`sticky top-0 z-40 w-full border-b border-border bg-background${getTwOpacity(config.navbarOpacity)} transition-all ${getTwBlur(config.blurAmount)}\`}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden md:inline-block">Studio</span>
        </div>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          {['Dashboard', 'Projects', 'Teams', 'Settings'].map(tab => (
            <button key={tab} className="transition-colors hover:text-primary opacity-70 hover:opacity-100">{tab}</button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <button className="p-2 opacity-50 hover:opacity-100 transition-opacity">
            <Search size={20} />
          </button>
          <button className="p-2 opacity-50 hover:opacity-100 transition-opacity relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
          <div className="ml-2 h-9 w-9 rounded-full bg-secondary flex items-center justify-center cursor-pointer overflow-hidden border border-border">
             <User size={18} />
          </div>
          <button className="lg:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;`,
  usageReact: (_config) => `// Standard usage in Layout
<div className="min-h-screen flex flex-col">
  <TopNavbar />
  <main className="flex-1 p-6">
    {/* Page content */}
  </main>
</div>`,
  flutter: (config) => `// widgets/custom_top_navbar.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomTopNavbar extends StatelessWidget implements PreferredSizeWidget {
  const CustomTopNavbar({super.key});

  @override
  Widget build(BuildContext context) {
    Widget titleBar = AppBar(
      title: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: context.cs.primary,
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.palette, color: Colors.white, size: 20),
          ),
          const SizedBox(width: 12),
          Text("Studio", style: context.textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold)),
        ],
      ),
      actions: [
        IconButton(icon: const Icon(Icons.search), onPressed: () {}),
        IconButton(icon: const Icon(Icons.notifications_none), onPressed: () {}),
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 16),
          child: CircleAvatar(radius: 16, child: Icon(Icons.person, size: 20)),
        ),
      ],
      backgroundColor: context.cs.surface${getFlutterOpacity(config.navbarOpacity)},
      elevation: 0,
      bottom: PreferredSize(
        preferredSize: const Size.fromHeight(1),
        child: Container(color: context.cs.outlineVariant, height: 1),
      ),
    );

    if ("${config.blurAmount}" != "none") {
      return PreferredSize(
        preferredSize: preferredSize,
        child: ClipRect(
          child: BackdropFilter(
            filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
            child: titleBar,
          ),
        ),
      );
    }
    return titleBar;
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}`,
  usageFlutter: (_config) => `Scaffold(
  appBar: CustomTopNavbar(),
  body: Center(child: Text("App content")),
);`,
};

export default topNavbar;
