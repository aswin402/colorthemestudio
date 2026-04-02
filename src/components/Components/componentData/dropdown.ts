import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const dropdown: ComponentEntry = {
  name: 'Dropdown',
  description: 'Toggleable menu for displaying a list of choices and actions.',
  react: (config) => `// components/ui/Dropdown.tsx
import { useState } from 'react';
import { MoreVertical, Edit, Copy, Trash2, ExternalLink } from 'lucide-react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { icon: Edit, label: 'Edit', color: '' },
    { icon: Copy, label: 'Duplicate', color: '' },
    { icon: ExternalLink, label: 'Open in New Tab', color: '' },
    { icon: Trash2, label: 'Delete', color: 'text-destructive' }
  ];

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors opacity-70 hover:opacity-100"
      >
        <MoreVertical size={20} />
      </button>

      {isOpen && (
        <div className={\`absolute right-0 mt-2 w-56 p-1 bg-card${getTwOpacity(config.overlayOpacity)} border border-border rounded-${config.cardRadius} shadow-xl z-50 transition-all ${getTwBlur(config.blurAmount)}\`}>
          {items.map((item, i) => (
            <button 
              key={i} 
              className={\`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-${config.buttonRadius} transition-all hover:bg-muted${getTwOpacity(config.cardOpacity)} hover:text-foreground \${item.color || 'text-muted-foreground'}\`}
            >
              <item.icon size={16} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;`,
  usageReact: (_config) => `<Dropdown />`,
  flutter: (config) => `// widgets/custom_dropdown.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomDropdown extends StatelessWidget {
  const CustomDropdown({super.key});

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton(
      icon: const Icon(Icons.more_vert),
      backgroundColor: Colors.transparent, // We wrap content for effects
      offset: const Offset(0, 45),
      elevation: 0,
      itemBuilder: (context) => [
        PopupMenuItem(
          padding: EdgeInsets.zero,
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 4),
            decoration: BoxDecoration(
              color: context.cs.surfaceVariant${getFlutterOpacity(config.overlayOpacity)},
              borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '12'}),
              border: Border.all(color: context.cs.outlineVariant),
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : '12'}),
              child: BackdropFilter(
                filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
                child: Column(
                   children: [
                      _buildItem(context, Icons.edit_outlined, "Edit"),
                      _buildItem(context, Icons.copy_outlined, "Duplicate"),
                      _buildItem(context, Icons.delete_outline, "Delete", isDestructive: true),
                   ],
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildItem(BuildContext context, IconData icon, String label, {bool isDestructive = false}) {
     return ListTile(
       leading: Icon(icon, size: 18, color: isDestructive ? context.cs.error : context.cs.onSurfaceVariant),
       title: Text(label, style: context.textTheme.bodySmall?.copyWith(color: isDestructive ? context.cs.error : context.cs.onSurface)),
       dense: true,
       onTap: () {},
     );
  }
}`,
  usageFlutter: (_config) => `CustomDropdown()`,
};

export default dropdown;
