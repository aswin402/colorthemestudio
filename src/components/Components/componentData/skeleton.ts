import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const skeleton: ComponentEntry = {
  name: 'Skeleton',
  description: 'Placeholder for content that is still loading.',
  react: (config) => `// components/ui/Skeleton.tsx
interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div className={\`animate-pulse bg-muted${getTwOpacity(config.badgeOpacity)} rounded-${config.cardRadius} \${className}\`} />
  );
};

export default Skeleton;`,
  usageReact: (_config) => `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
  flutter: (config) => `// widgets/custom_skeleton.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSkeleton extends StatelessWidget {
  final double? width;
  final double? height;
  final double? borderRadius;

  const CustomSkeleton({
    super.key,
    this.width,
    this.height,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: context.cs.surfaceVariant${getFlutterOpacity(config.badgeOpacity)},
        borderRadius: BorderRadius.circular(borderRadius ?? ${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '8'}),
      ),
    );
  }
}`,
  usageFlutter: (_config) => `Column(
  children: [
    CustomSkeleton(height: 100, width: double.infinity),
    SizedBox(height: 10),
    CustomSkeleton(height: 20, width: 200),
  ],
);`,
};

export default skeleton;
