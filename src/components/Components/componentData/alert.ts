import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const alert: ComponentEntry = {
  name: 'Alert',
  description: 'Prominent banner for important messages and feedback.',
  react: (config) => `// components/ui/Alert.tsx
import { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'destructive';

interface AlertProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  variant?: AlertVariant;
  className?: string;
}

const Alert = ({ children, icon, title, variant = 'info', className = "" }: AlertProps) => {
  const variantClasses = {
    info: "bg-blue-500${getTwOpacity(config.cardOpacity)} border-blue-500/20 text-blue-700 dark:text-blue-300",
    success: "bg-green-500${getTwOpacity(config.cardOpacity)} border-green-500/20 text-green-700 dark:text-green-300",
    warning: "bg-amber-500${getTwOpacity(config.cardOpacity)} border-amber-500/20 text-amber-700 dark:text-amber-300",
    destructive: "bg-destructive${getTwOpacity(config.cardOpacity)} border-destructive/20 text-destructive-foreground",
  };

  return (
    <div className={\`flex gap-3 p-4 border rounded-${config.cardRadius} shadow-sm transition-all \${variantClasses[variant]} ${getTwBlur(config.blurAmount)} \${className}\`}>
      {icon && <div className="mt-0.5 flex-shrink-0">{icon}</div>}
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1 leading-none">{title}</h5>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
};

export default Alert;`,
  usageReact: (_config) => `<Alert 
  title="Note" 
  variant="info" 
  icon={<Info size={18} />}
>
  Your account has been successfully synchronized.
</Alert>`,
  flutter: (config) => `// widgets/custom_alert.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

enum AlertType { info, success, warning, error }

class CustomAlert extends StatelessWidget {
  final String? title;
  final String message;
  final IconData? icon;
  final AlertType type;

  const CustomAlert({
    super.key,
    this.title,
    required this.message,
    this.icon,
    this.type = AlertType.info,
  });

  @override
  Widget build(BuildContext context) {
    Color baseColor;
    switch (type) {
      case AlertType.info: baseColor = Colors.blue; break;
      case AlertType.success: baseColor = Colors.green; break;
      case AlertType.warning: baseColor = Colors.amber; break;
      case AlertType.error: baseColor = context.cs.error; break;
    }

    Widget alertContent = Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: baseColor${getFlutterOpacity(config.cardOpacity)},
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '12'}),
        border: Border.all(color: baseColor.withOpacity(0.2)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (icon != null)
            Padding(
              padding: const EdgeInsets.only(right: 12, top: 2),
              child: Icon(icon, color: baseColor.shade700, size: 20),
            ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                if (title != null)
                  Text(
                    title!,
                    style: context.textTheme.titleSmall?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: baseColor.shade900,
                    ),
                  ),
                const SizedBox(height: 2),
                Text(
                  message,
                  style: context.textTheme.bodySmall?.copyWith(
                    color: baseColor.shade800,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );

    if ("${config.blurAmount}" != "none") {
      return ClipRRect(
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : '12'}),
        child: BackdropFilter(
          filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
          child: alertContent,
        ),
      );
    }

    return alertContent;
  }
}`,
  usageFlutter: (_config) => `CustomAlert(
  title: "Success",
  message: "Theme applied successfully!",
  type: AlertType.success,
  icon: Icons.check_circle_outline,
),`,
};

export default alert;
