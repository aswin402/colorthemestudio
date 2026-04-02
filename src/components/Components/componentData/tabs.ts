import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const tabs: ComponentEntry = {
  name: 'Tabs',
  description: 'Navigation component for switching between multiple content views.',
  react: (config) => `// components/ui/Tabs.tsx
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Overview', 'Settings', 'Notifications', 'Security'];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className={\`flex items-center gap-1 p-1 bg-muted${getTwOpacity(config.cardOpacity)} border border-border rounded-${config.cardRadius} ${getTwBlur(config.blurAmount)}\`}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={\`px-4 py-1.5 text-sm font-medium rounded-${config.buttonRadius} transition-all \${activeTab === i ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-background/40'}\`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={\`p-6 border border-border bg-card${getTwOpacity(config.cardOpacity)} rounded-${config.cardRadius} transition-all ${getTwBlur(config.blurAmount)}\`}>
        <h4 className="font-semibold mb-2">{\`Content for \${tabs[activeTab]}\`}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The container and tab bar both reflect your current theme's opacity, radius, and blur settings.
        </p>
      </div>
    </div>
  );
};

export default Tabs;`,
  usageReact: (_config) => `<Tabs />`,
  flutter: (config) => `// widgets/custom_tabs.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomTabs extends StatefulWidget {
  const CustomTabs({super.key});

  @override
  State<CustomTabs> createState() => _CustomTabsState();
}

class _CustomTabsState extends State<CustomTabs> with SingleTickerProviderStateMixin {
  late TabController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TabController(length: 3, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    Widget tabContainer = Container(
      decoration: BoxDecoration(
        color: context.cs.surfaceVariant${getFlutterOpacity(config.cardOpacity)},
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '12'}),
        border: Border.all(color: context.cs.outlineVariant),
      ),
      child: TabBar(
        controller: _controller,
        indicator: BoxDecoration(
          color: context.cs.surface,
          borderRadius: BorderRadius.circular(${config.buttonRadius === 'full' ? '999' : config.buttonRadius === 'none' ? '0' : '8'}),
          boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 4)],
        ),
        labelColor: context.cs.onSurface,
        unselectedLabelColor: context.cs.onSurfaceVariant.withOpacity(0.6),
        indicatorSize: TabBarIndicatorSize.tab,
        tabs: const [Tab(text: "Tab 1"), Tab(text: "Tab 2"), Tab(text: "Tab 3")],
      ),
    );

    if ("${config.blurAmount}" != "none") {
      return ClipRRect(
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : '12'}),
        child: BackdropFilter(
          filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
          child: tabContainer,
        ),
      );
    }
    return tabContainer;
  }
}`,
  usageFlutter: (_config) => `CustomTabs()`,
};

export default tabs;
