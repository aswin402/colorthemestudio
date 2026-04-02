import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const badge: ComponentEntry = {
  name: 'Badge',
  description: 'Small status indicator with various semantic variants.',
  react: (config) => `// components/ui/Badge.tsx
import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge = ({ children, variant = 'default', className = "" }: BadgeProps) => {
  const variantClasses = {
    default: "bg-primary${getTwOpacity(config.badgeOpacity)} text-primary-foreground border-transparent",
    secondary: "bg-secondary${getTwOpacity(config.badgeOpacity)} text-secondary-foreground border-transparent",
    outline: "border border-border text-foreground bg-transparent",
    destructive: "bg-destructive${getTwOpacity(config.badgeOpacity)} text-destructive-foreground border-transparent",
    success: "bg-green-500${getTwOpacity(config.badgeOpacity)} text-white border-transparent",
    warning: "bg-amber-500${getTwOpacity(config.badgeOpacity)} text-white border-transparent",
  };

  return (
    <span className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors \${variantClasses[variant]} \${className}\`}>
      {children}
    </span>
  );
};

export default Badge;`,
  usageReact: (_config) => `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
  flutter: (config) => `// widgets/custom_badge.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

enum BadgeType { primary, secondary, error, success, warning, outline }

class CustomBadge extends StatelessWidget {
  final String text;
  final BadgeType type;

  const CustomBadge({
    super.key,
    required this.text,
    this.type = BadgeType.primary,
  });

  @override
  Widget build(BuildContext context) {
    Color bgColor;
    Color textColor;
    bool hasBorder = false;

    switch (type) {
      case BadgeType.primary:
        bgColor = context.cs.primary;
        textColor = context.cs.onPrimary;
        break;
      case BadgeType.secondary:
        bgColor = context.cs.secondary;
        textColor = context.cs.onSecondary;
        break;
      case BadgeType.error:
        bgColor = context.cs.error;
        textColor = context.cs.onError;
        break;
      case BadgeType.success:
        bgColor = Colors.green.shade600;
        textColor = Colors.white;
        break;
      case BadgeType.warning:
        bgColor = Colors.amber.shade700;
        textColor = Colors.white;
        break;
      case BadgeType.outline:
        bgColor = Colors.transparent;
        textColor = context.cs.onSurface;
        hasBorder = true;
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
      decoration: BoxDecoration(
        color: bgColor${getFlutterOpacity(config.badgeOpacity)},
        borderRadius: BorderRadius.circular(12),
        border: hasBorder ? Border.all(color: context.cs.outlineVariant) : null,
      ),
      child: Text(
        text,
        style: context.textTheme.labelSmall?.copyWith(
          color: textColor,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}`,
  usageFlutter: (_config) => `CustomBadge(text: "Active", type: BadgeType.primary),
CustomBadge(text: "Pending", type: BadgeType.secondary),
CustomBadge(text: "Error", type: BadgeType.error),`,
};

export default badge;
