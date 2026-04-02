import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const avatar: ComponentEntry = {
  name: 'Avatar',
  description: 'Visual representation of a user or entity with various shapes.',
  react: (config) => `// components/ui/Avatar.tsx
interface AvatarProps {
  src?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar = ({ src, fallback, size = 'md', className = "" }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div className={\`relative inline-flex items-center justify-center shrink-0 overflow-hidden bg-secondary${getTwOpacity(config.badgeOpacity)} border border-border rounded-${config.buttonRadius === 'full' ? 'full' : config.cardRadius} \${sizeClasses[size]} \${className}\`}>
      {src ? (
        <img src={src} alt={fallback} className="h-full w-full object-cover" />
      ) : (
        <span className="font-semibold text-secondary-foreground">{fallback}</span>
      )}
    </div>
  );
};

export default Avatar;`,
  usageReact: (_config) => `<Avatar fallback="JD" src="https://i.pravatar.cc/150?u=jd" />
<Avatar fallback="AS" />`,
  flutter: (config) => `// widgets/custom_avatar.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomAvatar extends StatelessWidget {
  final String? src;
  final String fallback;
  final double size;

  const CustomAvatar({
    super.key,
    this.src,
    required this.fallback,
    this.size = 40,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        color: context.cs.secondaryContainer${getFlutterOpacity(config.badgeOpacity)},
        borderRadius: BorderRadius.circular(${config.buttonRadius === 'full' ? '999' : config.cardRadius === 'full' ? '999' : '12'}),
        border: Border.all(color: context.cs.outlineVariant),
        image: src != null ? DecorationImage(image: NetworkImage(src!), fit: BoxFit.cover) : null,
      ),
      alignment: Alignment.center,
      child: src == null 
        ? Text(fallback, style: context.textTheme.labelMedium?.copyWith(fontWeight: FontWeight.bold))
        : null,
    );
  }
}`,
  usageFlutter: (_config) => `CustomAvatar(fallback: "JD", size: 48),`,
};

export default avatar;
