import { useState, useEffect } from 'react';
import { Monitor, Smartphone, Copy, Check } from 'lucide-react';

const ComponentsExportSection = () => {
  const [activeTab, setActiveTab] = useState<'react' | 'flutter'>('react');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = async (index: number, code: string) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => setCopiedIndex(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIndex]);

  const components = [
    {
      name: 'Button',
      react: `// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', isLoading = false, className = '', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium font-body rounded-button transition-all active:scale-[0.985] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring";

    const variantClasses = {
      primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
      ghost: "hover:bg-muted hover:text-foreground",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-6 text-base",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${className}\`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;`,

      usageReact: `// Usage Examples
<Button>Primary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="destructive" isLoading>Deleting...</Button>`,

      flutter: `// widgets/custom_button.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isSecondary;
  final bool isDestructive;
  final bool isLoading;
  final bool isFullWidth;

  const CustomButton({
    super.key,
    required this.text,
    this.onPressed,
    this.isSecondary = false,
    this.isDestructive = false,
    this.isLoading = false,
    this.isFullWidth = false,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: isFullWidth ? double.infinity : null,
      child: ElevatedButton(
        onPressed: isLoading ? null : onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: isDestructive 
            ? context.cs.error 
            : isSecondary 
              ? context.ac.secondaryButtonBackground 
              : context.ac.buttonBackground,
          foregroundColor: isDestructive 
            ? context.cs.onError 
            : isSecondary 
              ? context.ac.secondaryButtonForeground 
              : context.ac.buttonForeground,
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          elevation: 0,
        ),
        child: isLoading
          ? SizedBox(
              height: 20,
              width: 20,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                valueColor: AlwaysStoppedAnimation<Color>(
                  isDestructive 
                    ? context.cs.onError 
                    : context.ac.buttonForeground
                ),
              ),
            )
          : Text(text, style: context.textTheme.bodyLarge),
      ),
    );
  }
}`,

      usageFlutter: `// Usage
CustomButton(text: "Primary Action", onPressed: () {}),
CustomButton(text: "Secondary", isSecondary: true, onPressed: () {}),
CustomButton(text: "Delete", isDestructive: true, onPressed: () {}),
CustomButton(text: "Loading", isLoading: true, onPressed: () {}),
CustomButton(text: "Full Width", isFullWidth: true, onPressed: () {}),`,
    },

    {
      name: 'Input',
      react: `// components/ui/Input.tsx
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, label, id, ...props }, ref) => (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={\`
          flex h-10 w-full rounded-md border px-3 py-2 
          text-sm font-body placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          disabled:cursor-not-allowed disabled:opacity-50
          \${error ? 'border-destructive focus-visible:ring-destructive' : 'border-input bg-background'}
          \${className}
        \`}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
);

Input.displayName = "Input";
export default Input;`,

      usageReact: `// Usage
<Input 
  label="Email Address"
  id="email"
  type="email" 
  placeholder="you@example.com" 
/>

<Input 
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>`,

      flutter: `// widgets/custom_input.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomInput extends StatelessWidget {
  final String? label;
  final String? hint;
  final TextEditingController? controller;
  final String? errorText;
  final bool obscureText;
  final TextInputType? keyboardType;

  const CustomInput({
    super.key,
    this.label,
    this.hint,
    this.controller,
    this.errorText,
    this.obscureText = false,
    this.keyboardType,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(label!, style: context.textTheme.labelLarge),
          const SizedBox(height: 6),
        ],
        TextField(
          controller: controller,
          obscureText: obscureText,
          keyboardType: keyboardType,
          decoration: InputDecoration(
            hintText: hint,
            errorText: errorText,
            filled: true,
            fillColor: context.ac.inputBackground,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: BorderSide(color: context.ac.inputBorder),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: BorderSide(color: context.cs.primary, width: 1.5),
            ),
            errorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: BorderSide(color: context.cs.error, width: 1),
            ),
            focusedErrorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: BorderSide(color: context.cs.error, width: 1.5),
            ),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          ),
        ),
      ],
    );
  }
}`,

      usageFlutter: `// Usage
CustomInput(
  label: "Email Address",
  hint: "you@example.com",
  controller: emailController,
  keyboardType: TextInputType.emailAddress,
),

CustomInput(
  label: "Password",
  hint: "Enter your password",
  controller: passwordController,
  obscureText: true,
  errorText: "Password must be at least 8 characters",
),`,
    },

    {
      name: 'Card',
      react: `// components/ui/Card.tsx
import { forwardRef, HTMLAttributes } from 'react';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={\`rounded-lg border border-border bg-card text-card-foreground shadow-sm \${className}\`}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={\`flex flex-col space-y-1.5 p-6 \${className}\`}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h3
      ref={ref}
      className={\`text-2xl font-semibold leading-none tracking-tight \${className}\`}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={\`text-sm text-muted-foreground \${className}\`}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={\`p-6 pt-0 \${className}\`} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={\`flex items-center p-6 pt-0 \${className}\`}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };`,

      usageReact: `// Usage
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Project Settings</CardTitle>
    <CardDescription>Manage your preferences</CardDescription>
  </CardHeader>
  <CardContent>
    Main content here...
  </CardContent>
  <CardFooter>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>`,

      flutter: `// widgets/custom_card.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomCard extends StatelessWidget {
  final Widget? header;
  final Widget? title;
  final Widget? description;
  final Widget child;
  final Widget? footer;
  final bool isClickable;
  final VoidCallback? onTap;

  const CustomCard({
    super.key,
    this.header,
    this.title,
    this.description,
    required this.child,
    this.footer,
    this.isClickable = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final card = Card(
      color: context.ac.card,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: BorderSide(color: context.ac.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (header != null) header!,
          if (title != null || description != null)
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (title != null) title!,
                  if (description != null) ...[
                    const SizedBox(height: 8),
                    description!,
                  ],
                ],
              ),
            ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: child,
          ),
          if (footer != null)
            Padding(
              padding: const EdgeInsets.all(20),
              child: footer!,
            ),
        ],
      ),
    );

    if (isClickable && onTap != null) {
      return InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: card,
      );
    }

    return card;
  }
}`,

      usageFlutter: `// Usage
CustomCard(
  title: Text("Card Title", style: context.textTheme.titleLarge),
  description: Text("Card description here", style: context.textTheme.bodyMedium),
  child: Column(
    children: [
      Text("Main content here..."),
    ],
  ),
  footer: CustomButton(text: "Save Changes", onPressed: () {}),
  isClickable: true,
  onTap: () => print("Card tapped"),
),`,
    },

    {
      name: 'Badge',
      react: `// components/ui/Badge.tsx
import { forwardRef, HTMLAttributes } from 'react';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outline: 'border border-border bg-background text-foreground',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
    };

    return (
      <div
        ref={ref}
        className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-body \${variants[variant]} \${className}\`}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
export default Badge;`,

      usageReact: `// Usage
<Badge>Default</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="outline">Outline</Badge>`,

      flutter: `// widgets/custom_badge.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

enum BadgeVariant { primary, secondary, destructive, outline, success, warning }

class CustomBadge extends StatelessWidget {
  final String text;
  final BadgeVariant variant;

  const CustomBadge({
    super.key,
    required this.text,
    this.variant = BadgeVariant.primary,
  });

  Color _getBackgroundColor(BuildContext context) {
    switch (variant) {
      case BadgeVariant.primary:
        return context.cs.primary;
      case BadgeVariant.secondary:
        return context.ac.secondaryButtonBackground;
      case BadgeVariant.destructive:
        return context.cs.error;
      case BadgeVariant.success:
        return Colors.green;
      case BadgeVariant.warning:
        return Colors.orange;
      case BadgeVariant.outline:
        return Colors.transparent;
    }
  }

  Color _getTextColor(BuildContext context) {
    switch (variant) {
      case BadgeVariant.outline:
        return context.ac.foreground;
      case BadgeVariant.secondary:
        return context.ac.secondaryButtonForeground;
      default:
        return Colors.white;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        color: _getBackgroundColor(context),
        borderRadius: BorderRadius.circular(9999),
        border: variant == BadgeVariant.outline
            ? Border.all(color: context.ac.border)
            : null,
      ),
      child: Text(
        text,
        style: context.textTheme.labelLarge?.copyWith(
          color: _getTextColor(context),
          fontSize: 12,
        ),
      ),
    );
  }
}`,

      usageFlutter: `// Usage
CustomBadge(text: "Default", variant: BadgeVariant.primary),
CustomBadge(text: "Pending", variant: BadgeVariant.secondary),
CustomBadge(text: "Error", variant: BadgeVariant.destructive),
CustomBadge(text: "Success", variant: BadgeVariant.success),
CustomBadge(text: "Warning", variant: BadgeVariant.warning),
CustomBadge(text: "Outline", variant: BadgeVariant.outline),`,
    },

    {
      name: 'Modal/Dialog',
      react: `// components/ui/Modal.tsx
import { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal = ({ isOpen, onClose, title, children, size = 'md' }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={\`bg-card rounded-lg shadow-xl w-full \${sizes[size]} max-h-[90vh] overflow-y-auto\`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;`,

      usageReact: `// Usage
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to proceed?</p>
  <div className="flex gap-3 mt-4">
    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="destructive" onClick={handleConfirm}>Confirm</Button>
  </div>
</Modal>`,

      flutter: `// widgets/custom_dialog.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';
import 'custom_button.dart';

class CustomDialog extends StatelessWidget {
  final String? title;
  final Widget content;
  final String? confirmText;
  final String? cancelText;
  final VoidCallback? onConfirm;
  final VoidCallback? onCancel;

  const CustomDialog({
    super.key,
    this.title,
    required this.content,
    this.confirmText,
    this.cancelText,
    this.onConfirm,
    this.onCancel,
  });

  static Future<void> show(
    BuildContext context, {
    String? title,
    required Widget content,
    String? confirmText,
    String? cancelText,
    VoidCallback? onConfirm,
    VoidCallback? onCancel,
  }) {
    return showDialog(
      context: context,
      builder: (context) => CustomDialog(
        title: title,
        content: content,
        confirmText: confirmText,
        cancelText: cancelText,
        onConfirm: onConfirm,
        onCancel: onCancel,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: title != null ? Text(title!) : null,
      content: content,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      actions: [
        if (cancelText != null)
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              onCancel?.call();
            },
            child: Text(cancelText!),
          ),
        if (confirmText != null)
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              onConfirm?.call();
            },
            child: Text(confirmText!),
          ),
      ],
    );
  }
}`,

      usageFlutter: `// Usage
CustomDialog.show(
  context,
  title: "Confirm Action",
  content: Text("Are you sure you want to proceed?"),
  confirmText: "Confirm",
  cancelText: "Cancel",
  onConfirm: () => print("Confirmed"),
);`,
    },

    {
      name: 'Toast/Notification',
      react: `// components/ui/Toast.tsx
import { useState, useEffect, createContext, useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType, duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-destructive text-destructive-foreground',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <div
              key={toast.id}
              className={\`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg animate-in slide-in-from-right \${colors[toast.type]}\`}
            >
              <Icon className="w-5 h-5" />
              <p className="text-sm">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 hover:opacity-70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};`,

      usageReact: `// Usage
const { showToast } = useToast();

<Button onClick={() => showToast('Operation successful!', 'success')}>
  Show Success Toast
</Button>

<Button onClick={() => showToast('Something went wrong!', 'error')}>
  Show Error Toast
</Button>`,

      flutter: `// widgets/custom_toast.dart
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class CustomToast {
  static void show({
    required BuildContext context,
    required String message,
    ToastType type = ToastType.info,
    Duration duration = const Duration(seconds: 3),
  }) {
    final overlay = Overlay.of(context);
    final overlayEntry = OverlayEntry(
      builder: (context) => _ToastWidget(
        message: message,
        type: type,
        onDismiss: () => overlayEntry.remove(),
      ),
    );

    overlay.insert(overlayEntry);
    Future.delayed(duration, () {
      if (overlayEntry.mounted) overlayEntry.remove();
    });
  }
}

enum ToastType { success, error, info, warning }

class _ToastWidget extends StatelessWidget {
  final String message;
  final ToastType type;
  final VoidCallback onDismiss;

  const _ToastWidget({
    required this.message,
    required this.type,
    required this.onDismiss,
  });

  Color _getBackgroundColor() {
    switch (type) {
      case ToastType.success:
        return Colors.green;
      case ToastType.error:
        return Colors.red;
      case ToastType.info:
        return Colors.blue;
      case ToastType.warning:
        return Colors.orange;
    }
  }

  IconData _getIcon() {
    switch (type) {
      case ToastType.success:
        return Icons.check_circle;
      case ToastType.error:
        return Icons.error;
      case ToastType.info:
        return Icons.info;
      case ToastType.warning:
        return Icons.warning;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      left: 20,
      right: 20,
      child: Material(
        color: Colors.transparent,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            color: _getBackgroundColor(),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Icon(_getIcon(), color: Colors.white, size: 20),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  message,
                  style: const TextStyle(color: Colors.white, fontSize: 14),
                ),
              ),
              IconButton(
                icon: const Icon(Icons.close, color: Colors.white, size: 16),
                onPressed: onDismiss,
                padding: EdgeInsets.zero,
                constraints: const BoxConstraints(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,

      usageFlutter: `// Usage
ElevatedButton(
  onPressed: () {
    CustomToast.show(
      context: context,
      message: "Operation successful!",
      type: ToastType.success,
    );
  },
  child: Text("Show Toast"),
),`,
    },

    {
      name: 'Skeleton Loader',
      react: `// components/ui/Skeleton.tsx
import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const Skeleton = ({ className = '', variant = 'text', width, height, ...props }: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-muted rounded";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
  };
  
  const styles = {
    width: width ? (typeof width === 'number' ? \`\${width}px\` : width) : '100%',
    height: height ? (typeof height === 'number' ? \`\${height}px\` : height) : variant === 'text' ? '1rem' : 'auto',
  };
  
  return (
    <div
      className={\`\${baseClasses} \${variantClasses[variant]} \${className}\`}
      style={styles}
      {...props}
    />
  );
};

export default Skeleton;`,

      usageReact: `// Usage
// Text skeleton
<Skeleton className="w-32" />

// Circular skeleton (avatar)
<Skeleton variant="circular" width={40} height={40} />

// Card skeleton
<div className="space-y-3">
  <Skeleton className="h-32" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`,

      flutter: `// widgets/custom_skeleton.dart
import 'package:flutter/material.dart';

class CustomSkeleton extends StatelessWidget {
  final double? width;
  final double? height;
  final SkeletonVariant variant;

  const CustomSkeleton({
    super.key,
    this.width,
    this.height,
    this.variant = SkeletonVariant.text,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      tween: Tween<double>(begin: 0.3, end: 0.7),
      duration: const Duration(milliseconds: 800),
      builder: (context, value, child) {
        return Container(
          width: width,
          height: height ?? (variant == SkeletonVariant.text ? 16 : null),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surfaceVariant.withOpacity(value),
            borderRadius: _getBorderRadius(),
          ),
        );
      },
    );
  }

  BorderRadius _getBorderRadius() {
    switch (variant) {
      case SkeletonVariant.circular:
        return BorderRadius.circular(9999);
      case SkeletonVariant.rectangular:
        return BorderRadius.circular(8);
      case SkeletonVariant.text:
        return BorderRadius.circular(4);
    }
  }
}

enum SkeletonVariant { text, circular, rectangular }`,

      usageFlutter: `// Usage
// Text skeleton
CustomSkeleton(width: 120),

// Circular skeleton (avatar)
CustomSkeleton(width: 40, height: 40, variant: SkeletonVariant.circular),

// Card skeleton
Column(
  children: [
    CustomSkeleton(height: 120, variant: SkeletonVariant.rectangular),
    const SizedBox(height: 8),
    CustomSkeleton(width: 200),
    const SizedBox(height: 8),
    CustomSkeleton(width: 150),
  ],
),`,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border sticky top-0 bg-background z-10">
        <h3 className="text-2xl font-bold tracking-tight">UI Components Library</h3>
        <p className="text-muted-foreground mt-1">
          Full component code for React + Tailwind and Flutter
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="px-6 pt-6 pb-4 border-b border-border sticky top-[88px] bg-background z-10">
        <div className="flex bg-muted p-1 rounded-xl w-fit border border-border">
          <button
            onClick={() => setActiveTab('react')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'react' 
                ? 'bg-background shadow text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Monitor className="w-4 h-4" /> React + Tailwind
          </button>
          <button
            onClick={() => setActiveTab('flutter')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'flutter' 
                ? 'bg-background shadow text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Smartphone className="w-4 h-4" /> Flutter
          </button>
        </div>
      </div>

      {/* Components List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {components.map((comp, index) => (
          <div key={index} className="border border-border rounded-2xl bg-card overflow-hidden">
            <div className="bg-muted/60 px-6 py-4 border-b flex items-center justify-between">
              <h4 className="font-semibold text-lg">{comp.name}</h4>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {activeTab.toUpperCase()}
              </span>
            </div>

            <div className="p-6 space-y-6">
              {/* Component Code */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">COMPONENT CODE</p>
                <pre className="bg-zinc-950 text-zinc-100 p-5 rounded-xl overflow-x-auto text-sm font-mono border border-zinc-800">
                  <code>{activeTab === 'react' ? comp.react : comp.flutter}</code>
                </pre>
              </div>

              {/* Usage Example */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  USAGE EXAMPLE
                </p>
                <pre className="bg-muted p-5 rounded-xl overflow-x-auto text-sm font-mono border border-border">
                  <code>
                    {activeTab === 'react' ? comp.usageReact : comp.usageFlutter}
                  </code>
                </pre>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyCode(index, activeTab === 'react' ? comp.react : comp.flutter)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-medium transition-all active:scale-[0.985] ${
                  copiedIndex === index
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy {activeTab === 'react' ? 'React' : 'Flutter'} Code
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsExportSection;