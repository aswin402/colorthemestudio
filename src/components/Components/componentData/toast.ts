import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const toast: ComponentEntry = {
  name: 'Toast',
  description: 'Transient notification with support for various styles and actions.',
  react: (config) => `// components/ui/Toast.tsx
import { ReactNode, useEffect, useState } from 'react';
import { X, Check, Info, AlertTriangle, XCircle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

const Toast = ({ message, type = 'info', onClose, duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out animation
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <Check className="text-green-500" size={18} />,
    error: <XCircle className="text-red-500" size={18} />,
    warning: <AlertTriangle className="text-amber-500" size={18} />,
    info: <Info className="text-blue-500" size={18} />,
  };

  return (
    <div className={\`fixed bottom-4 right-4 flex items-center gap-3 p-4 bg-card${getTwOpacity(config.overlayOpacity)} border border-border rounded-${config.cardRadius} shadow-lg transition-all transform \${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'} ${getTwBlur(config.blurAmount)}\`}>
      <div className="flex-shrink-0">{icons[type]}</div>
      <p className="text-sm font-medium pr-8">{message}</p>
      <button onClick={() => setIsVisible(false)} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 opacity-50 hover:opacity-100">
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;`,
  usageReact: (_config) => `const [showToast, setShowToast] = useState(true);

{showToast && (
  <Toast 
    message="Settings saved successfully!" 
    type="success" 
    onClose={() => setShowToast(false)} 
  />
)}`,
  flutter: (config) => `// widgets/custom_toast.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomToast extends StatelessWidget {
  final String message;
  final IconData icon;
  final Color? color;

  const CustomToast({
    super.key,
    required this.message,
    this.icon = Icons.info_outline,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    Widget toastContent = Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: context.cs.surfaceVariant${getFlutterOpacity(config.overlayOpacity)},
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '12'}),
        border: Border.all(color: context.cs.outlineVariant),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 15,
            spreadRadius: 5,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: color ?? context.cs.primary, size: 20),
          const SizedBox(width: 12),
          Text(message, style: context.textTheme.bodyMedium),
          const SizedBox(width: 8),
          IconButton(
            icon: const Icon(Icons.close, size: 16),
            onPressed: () {},
            padding: EdgeInsets.zero,
            constraints: const BoxConstraints(),
          ),
        ],
      ),
    );

    if ("${config.blurAmount}" != "none") {
      return ClipRRect(
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : '12'}),
        child: BackdropFilter(
          filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
          child: toastContent,
        ),
      );
    }

    return toastContent;
  }
}`,
  usageFlutter: (_config) => `CustomToast(
  message: "Synced with server",
  icon: Icons.sync,
),`,
};

export default toast;
