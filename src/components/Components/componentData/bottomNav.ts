import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const bottomNav: ComponentEntry = {
  name: 'Bottom Nav',
  description: 'Mobile-first navigation bar positioned at the bottom of the screen.',
  react: (config) => `// components/ui/BottomNav.tsx
import { useState } from 'react';
import { Home, Search, PlusCircle, Bell, User } from 'lucide-react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Search' },
    { icon: PlusCircle, label: 'Add', isLarge: true },
    { icon: Bell, label: 'Alerts' },
    { icon: User, label: 'Profile' }
  ];

  return (
    <nav className={\`fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-background${getTwOpacity(config.navbarOpacity)} transition-all ${getTwBlur(config.blurAmount)} flex items-center justify-around px-4\`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        if (item.isLarge) {
          return (
            <button key={i} className="mb-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 active:scale-95 transition-all">
              <Icon size={24} />
            </button>
          );
        }
        return (
          <button 
            key={i} 
            onClick={() => setActiveTab(i)}
            className={\`flex flex-col items-center gap-1 transition-all \${activeTab === i ? 'text-primary scale-110' : 'text-muted-foreground hover:text-foreground'}\`}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;`,
  usageReact: (_config) => `// Typically used in a Mobile Layout
<div className="min-h-screen pb-16">
  <main className="p-4">{/* Content */}</main>
  <BottomNav />
</div>`,
  flutter: (config) => `// widgets/custom_bottom_nav.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomBottomNav extends StatefulWidget {
  const CustomBottomNav({super.key});

  @override
  State<CustomBottomNav> createState() => _CustomBottomNavState();
}

class _CustomBottomNavState extends State<CustomBottomNav> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    Widget bottomNav = BottomNavigationBar(
      currentIndex: _currentIndex,
      onTap: (i) => setState(() => _currentIndex = i),
      backgroundColor: context.cs.surface${getFlutterOpacity(config.navbarOpacity)},
      elevation: 0,
      type: BottomNavigationBarType.fixed,
      selectedItemColor: context.cs.primary,
      unselectedItemColor: context.cs.onSurfaceVariant.withOpacity(0.5),
      items: const [
        BottomNavigationBarItem(icon: Icon(Icons.home_outlined), label: "Home"),
        BottomNavigationBarItem(icon: Icon(Icons.search), label: "Explore"),
        BottomNavigationBarItem(icon: Icon(Icons.favorite_outline), label: "Saved"),
        BottomNavigationBarItem(icon: Icon(Icons.person_outline), label: "Profile"),
      ],
    );

    if ("${config.blurAmount}" != "none") {
      return Container(
        decoration: BoxDecoration(
          border: Border(top: BorderSide(color: context.cs.outlineVariant)),
        ),
        child: ClipRect(
          child: BackdropFilter(
            filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
            child: bottomNav,
          ),
        ),
      );
    }

    return bottomNav;
  }
}`,
  usageFlutter: (_config) => `Scaffold(
  bottomNavigationBar: CustomBottomNav(),
  body: Placeholder(),
);`,
};

export default bottomNav;
