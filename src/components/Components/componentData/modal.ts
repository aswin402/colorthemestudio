import { getTwOpacity, getTwBlur, getFlutterOpacity, getFlutterBlur } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const modal: ComponentEntry = {
  name: 'Modal',
  description: 'Overlay dialog that requires user interaction.',
  react: (config) => `// components/ui/Modal.tsx
import { ReactNode, useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Content */}
      <div className={\`relative w-full max-w-lg bg-card${getTwOpacity(config.overlayOpacity)} border border-border rounded-${config.cardRadius} shadow-2xl transition-all ${getTwBlur(config.blurAmount)}\`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6">
          {children}
        </div>
        
        {footer && (
          <div className="px-6 py-4 border-t border-border bg-muted/30">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;`,
  usageReact: (_config) => `const [isOpen, setIsOpen] = useState(true);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Confirm Action"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={() => setIsOpen(false)}>Confirm</Button>
    </div>
  }
>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Are you sure you want to proceed with this operation? This action cannot be undone.
  </p>
</Modal>`,
  flutter: (config) => `// widgets/custom_modal.dart
import 'dart:ui';
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomModal extends StatelessWidget {
  final String title;
  final Widget content;
  final List<Widget>? actions;

  const CustomModal({
    super.key,
    required this.title,
    required this.content,
    this.actions,
  });

  @override
  Widget build(BuildContext context) {
    Widget modalContent = AlertDialog(
      title: Text(title, style: context.textTheme.titleMedium),
      content: content,
      actions: actions,
      backgroundColor: context.cs.surfaceVariant${getFlutterOpacity(config.overlayOpacity)},
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '999' : config.cardRadius === 'none' ? '0' : '16'}),
        border: Border.all(color: context.cs.outlineVariant),
      ),
      elevation: 0,
    );

    if ("${config.blurAmount}" != "none") {
      return BackdropFilter(
        filter: ${getFlutterBlur(config.blurAmount) || 'ImageFilter.blur(sigmaX: 0, sigmaY: 0)'},
        child: modalContent,
      );
    }

    return modalContent;
  }
}`,
  usageFlutter: (_config) => `showDialog(
  context: context,
  builder: (context) => CustomModal(
    title: "Action Required",
    content: Text("This data will be permanently deleted."),
    actions: [
      TextButton(onPressed: () => Navigator.pop(context), child: Text("Cancel")),
      ElevatedButton(onPressed: () => Navigator.pop(context), child: Text("Delete")),
    ],
  ),
);`,
};

export default modal;
