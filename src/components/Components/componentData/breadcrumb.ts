import type { ComponentEntry } from '../types';

const breadcrumb: ComponentEntry = {
  name: 'Breadcrumb',
  description: 'Displays the path to the current resource using a hierarchy of links.',
  react: (_config) => `// components/ui/Breadcrumb.tsx
import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}

export const Breadcrumb = ({ separator, ...props }: BreadcrumbProps) => (
  <nav aria-label="breadcrumb" {...props} />
);

export const BreadcrumbList = ({ className = '', ...props }: React.ComponentPropsWithoutRef<"ol">) => (
  <ol
    className={"flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground " + className}
    {...props}
  />
);

export const BreadcrumbItem = ({ className = '', ...props }: React.ComponentPropsWithoutRef<"li">) => (
  <li className={"inline-flex items-center gap-1.5 " + className} {...props} />
);

export const BreadcrumbLink = ({ className = '', ...props }: React.ComponentPropsWithoutRef<"a">) => (
  <a
    className={"transition-colors hover:text-foreground cursor-pointer " + className}
    {...props}
  />
);

export const BreadcrumbPage = ({ className = '', ...props }: React.ComponentPropsWithoutRef<"span">) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={"font-bold text-foreground " + className}
    {...props}
  />
);

export const BreadcrumbSeparator = ({ children, className = '', ...props }: React.ComponentPropsWithoutRef<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={"[&>svg]:size-3.5 " + className}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

export const BreadcrumbEllipsis = ({ className = '', ...props }: React.ComponentPropsWithoutRef<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={"flex h-9 w-9 items-center justify-center " + className}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);`,
  usageReact: (_config) => `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink>Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  flutter: (_config) => `// widgets/custom_breadcrumb.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class BreadcrumbItemData {
  final String label;
  final VoidCallback? onTap;
  final bool isCurrent;

  const BreadcrumbItemData({
    required this.label,
    this.onTap,
    this.isCurrent = false,
  });
}

class CustomBreadcrumb extends StatelessWidget {
  final List<BreadcrumbItemData> items;

  const CustomBreadcrumb({super.key, required this.items});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: items.asMap().entries.map((entry) {
          final idx = entry.key;
          final item = entry.value;
          final isLast = idx == items.length - 1;

          return Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              InkWell(
                onTap: item.onTap,
                child: Text(
                  item.label,
                  style: context.textTheme.labelMedium?.copyWith(
                    color: item.isCurrent ? context.cs.primary : context.cs.onSurfaceVariant,
                    fontWeight: item.isCurrent ? FontWeight.bold : FontWeight.normal,
                  ),
                ),
              ),
              if (!isLast) ...[
                const SizedBox(width: 8),
                Icon(Icons.chevron_right, size: 14, color: context.cs.onSurfaceVariant.withOpacity(0.5)),
                const SizedBox(width: 8),
              ],
            ],
          );
        }).toList(),
      ),
    );
  }
}`,
  usageFlutter: (_config) => `CustomBreadcrumb(
  items: [
    BreadcrumbItemData(label: "Home", onTap: () {}),
    BreadcrumbItemData(label: "Store", onTap: () {}),
    BreadcrumbItemData(label: "Checkout", isCurrent: true),
  ],
)`,
};

export default breadcrumb;
