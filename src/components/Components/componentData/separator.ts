import type { ComponentEntry } from '../types';

const separator: ComponentEntry = {
  name: 'Separator',
  description: 'Visually or semantically separates content.',
  react: (_config) => `// components/ui/Separator.tsx
import * as React from 'react';

interface SeparatorProps extends React.ComponentPropsWithoutRef<"div"> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = '', orientation = "horizontal", decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={
        "shrink-0 bg-border " + (orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]") + " " + className
      }
      {...props}
    />
  )
);

Separator.displayName = "Separator";
export default Separator;`,
  usageReact: (_config) => `<div className="space-y-1">
  <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
  <p className="text-sm text-muted-foreground">
    An open-source UI component library.
  </p>
</div>
<Separator className="my-4" />
<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`,
  flutter: (_config) => `// widgets/custom_separator.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSeparator extends StatelessWidget {
  final double height;
  final double thickness;
  final double indent;
  final double endIndent;
  final Color? color;

  const CustomSeparator({
    super.key,
    this.height = 1,
    this.thickness = 1,
    this.indent = 0,
    this.endIndent = 0,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Divider(
      height: height,
      thickness: thickness,
      indent: indent,
      endIndent: endIndent,
      color: color ?? context.ac.border,
    );
  }
}

class CustomVerticalSeparator extends StatelessWidget {
  final double width;
  final double thickness;
  final double indent;
  final double endIndent;
  final Color? color;

  const CustomVerticalSeparator({
    super.key,
    this.width = 1,
    this.thickness = 1,
    this.indent = 0,
    this.endIndent = 0,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    return VerticalDivider(
      width: width,
      thickness: thickness,
      indent: indent,
      endIndent: endIndent,
      color: color ?? context.ac.border,
    );
  }
}`,
  usageFlutter: (_config) => `const CustomSeparator(height: 32, thickness: 1),
Row(
  children: [
    Text("Feed"),
    const CustomVerticalSeparator(width: 24, thickness: 1),
    Text("Settings"),
  ],
)`,
};

export default separator;
