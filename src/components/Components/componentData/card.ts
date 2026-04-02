import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const card: ComponentEntry = {
  name: 'Card',
  description: 'Versatile information container with radius, shadow, and glass options.',
  react: (config) => `// components/ui/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Card = ({ children, header, footer, className = "" }: CardProps) => {
  return (
    <div className={\`bg-card${getTwOpacity(config.cardOpacity)} border border-border rounded-${config.cardRadius} shadow-card overflow-hidden transition-all ${getTwBlur(config.blurAmount)} \${className}\`}>
      {header && (
        <div className="px-6 py-4 border-b border-border font-semibold">
          {header}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-border bg-muted/30">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;`,
  usageReact: (_config) => `<Card 
  header={<h3 className="text-lg">Card Title</h3>}
  footer={<p className="text-xs text-muted-foreground">Last updated 2 days ago</p>}
>
  <p className="text-sm text-muted-foreground leading-relaxed">
    This card component demonstrates the current theme's border radius, 
    shadow intensity, and background opacity.
  </p>
</Card>`,
  flutter: (config) => `// widgets/custom_card.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomCard extends StatelessWidget {
  final Widget child;
  final Widget? header;
  final Widget? footer;

  const CustomCard({
    super.key,
    required this.child,
    this.header,
    this.footer,
  });

  @override
  Widget build(BuildContext context) {
    Widget cardContent = Container(
      decoration: BoxDecoration(
        color: context.cs.surface${getFlutterOpacity(config.cardOpacity)},
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '16'}),
        border: Border.all(color: context.cs.outlineVariant),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          if (header != null)
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                border: Border(bottom: BorderSide(color: context.cs.outlineVariant)),
              ),
              child: header!,
            ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: child,
          ),
          if (footer != null)
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: context.cs.surfaceVariant.withOpacity(0.3),
                border: Border(top: BorderSide(color: context.cs.outlineVariant)),
              ),
              child: footer!,
            ),
        ],
      ),
    );

    // If blur is applied, wrap with BackdropFilter
    if ("${config.blurAmount}" != "none") {
      return ClipRRect(
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : '16'}),
        child: BackdropFilter(
          filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
          child: cardContent,
        ),
      );
    }

    return cardContent;
  }
}`,
  usageFlutter: (_config) => `CustomCard(
  header: Text("Card Title", style: context.textTheme.titleMedium),
  footer: Text("Footer content", style: context.textTheme.labelSmall),
  child: Text("This card content uses current theme tokens."),
),`,
};

export default card;
