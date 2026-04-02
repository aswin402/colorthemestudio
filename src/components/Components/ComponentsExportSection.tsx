import { useState } from 'react';
import { Monitor, Smartphone, Copy, Check, ChevronRight, FileCode2, BookOpen, Eye } from 'lucide-react';
import { previewMap } from './ComponentPreviewRenderer';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type Framework = 'react' | 'flutter';

interface ComponentEntry {
  name: string;
  description: string;
  react: string;
  usageReact: string;
  flutter: string;
  usageFlutter: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component data
// ─────────────────────────────────────────────────────────────────────────────
const components: ComponentEntry[] = [
  {
    name: 'Button',
    description: 'Interactive button with multiple variants and sizes.',
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
    usageReact: `<Button>Primary Action</Button>
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
    usageFlutter: `CustomButton(text: "Primary Action", onPressed: () {}),
CustomButton(text: "Secondary", isSecondary: true, onPressed: () {}),
CustomButton(text: "Delete", isDestructive: true, onPressed: () {}),
CustomButton(text: "Loading", isLoading: true, onPressed: () {}),
CustomButton(text: "Full Width", isFullWidth: true, onPressed: () {}),`,
  },
  {
    name: 'Input',
    description: 'Accessible input field with label and error state support.',
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
    usageReact: `<Input
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
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          ),
        ),
      ],
    );
  }
}`,
    usageFlutter: `CustomInput(
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
    description: 'Versatile container with header, content, and footer slots.',
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
    <div ref={ref} className={\`flex flex-col space-y-1.5 p-6 \${className}\`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h3 ref={ref} className={\`text-2xl font-semibold leading-none tracking-tight \${className}\`} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p ref={ref} className={\`text-sm text-muted-foreground \${className}\`} {...props} />
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
    <div ref={ref} className={\`flex items-center p-6 pt-0 \${className}\`} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };`,
    usageReact: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

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
  final Widget? title;
  final Widget? description;
  final Widget child;
  final Widget? footer;
  final bool isClickable;
  final VoidCallback? onTap;

  const CustomCard({
    super.key,
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
          Padding(padding: const EdgeInsets.symmetric(horizontal: 20), child: child),
          if (footer != null)
            Padding(padding: const EdgeInsets.all(20), child: footer!),
        ],
      ),
    );

    return isClickable && onTap != null
        ? InkWell(onTap: onTap, borderRadius: BorderRadius.circular(12), child: card)
        : card;
  }
}`,
    usageFlutter: `CustomCard(
  title: Text("Card Title", style: context.textTheme.titleLarge),
  description: Text("Card description here", style: context.textTheme.bodyMedium),
  child: Text("Main content here..."),
  footer: CustomButton(text: "Save Changes", onPressed: () {}),
  isClickable: true,
  onTap: () => print("Card tapped"),
),`,
  },
  {
    name: 'Badge',
    description: 'Small status indicator with multiple semantic variants.',
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
    usageReact: `<Badge>Default</Badge>
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

  Color _getBg(BuildContext context) => switch (variant) {
    BadgeVariant.primary => context.cs.primary,
    BadgeVariant.secondary => context.ac.secondaryButtonBackground,
    BadgeVariant.destructive => context.cs.error,
    BadgeVariant.success => Colors.green,
    BadgeVariant.warning => Colors.orange,
    BadgeVariant.outline => Colors.transparent,
  };

  Color _getFg(BuildContext context) => switch (variant) {
    BadgeVariant.outline => context.ac.foreground,
    BadgeVariant.secondary => context.ac.secondaryButtonForeground,
    _ => Colors.white,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        color: _getBg(context),
        borderRadius: BorderRadius.circular(9999),
        border: variant == BadgeVariant.outline
            ? Border.all(color: context.ac.border)
            : null,
      ),
      child: Text(text, style: context.textTheme.labelSmall?.copyWith(color: _getFg(context))),
    );
  }
}`,
    usageFlutter: `CustomBadge(text: "Default", variant: BadgeVariant.primary),
CustomBadge(text: "Pending", variant: BadgeVariant.secondary),
CustomBadge(text: "Error", variant: BadgeVariant.destructive),
CustomBadge(text: "Success", variant: BadgeVariant.success),
CustomBadge(text: "Warning", variant: BadgeVariant.warning),
CustomBadge(text: "Outline", variant: BadgeVariant.outline),`,
  },
  {
    name: 'Modal / Dialog',
    description: 'Overlay panel for focused actions and confirmations.',
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
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
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

  const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={\`bg-card rounded-lg shadow-xl w-full \${sizes[size]} max-h-[90vh] overflow-y-auto\`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;`,
    usageReact: `const [isOpen, setIsOpen] = useState(false);

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
        title: title, content: content,
        confirmText: confirmText, cancelText: cancelText,
        onConfirm: onConfirm, onCancel: onCancel,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: title != null ? Text(title!) : null,
      content: content,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      actions: [
        if (cancelText != null)
          TextButton(
            onPressed: () { Navigator.pop(context); onCancel?.call(); },
            child: Text(cancelText!),
          ),
        if (confirmText != null)
          ElevatedButton(
            onPressed: () { Navigator.pop(context); onConfirm?.call(); },
            child: Text(confirmText!),
          ),
      ],
    );
  }
}`,
    usageFlutter: `CustomDialog.show(
  context,
  title: "Confirm Action",
  content: Text("Are you sure you want to proceed?"),
  confirmText: "Confirm",
  cancelText: "Cancel",
  onConfirm: () => print("Confirmed"),
);`,
  },
  {
    name: 'Toast / Notification',
    description: 'Ephemeral feedback messages with severity indicators.',
    react: `// components/ui/Toast.tsx
import { useState, createContext, useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';
interface Toast { id: string; message: string; type: ToastType; }
interface ToastContextType { showToast: (message: string, type: ToastType, duration?: number) => void; }

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
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
  };

  const icons = { success: CheckCircle, error: AlertCircle, info: Info, warning: AlertTriangle };
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
            <div key={toast.id} className={\`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg \${colors[toast.type]}\`}>
              <Icon className="w-5 h-5" />
              <p className="text-sm">{toast.message}</p>
              <button onClick={() => setToasts((p) => p.filter((t) => t.id !== toast.id))} className="ml-4 hover:opacity-70">
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};`,
    usageReact: `// Wrap your app
<ToastProvider>
  <App />
</ToastProvider>

// Inside any component
const { showToast } = useToast();

<Button onClick={() => showToast('Operation successful!', 'success')}>
  Show Success Toast
</Button>

<Button onClick={() => showToast('Something went wrong!', 'error')}>
  Show Error Toast
</Button>`,
    flutter: `// widgets/custom_toast.dart
import 'package:flutter/material.dart';

enum ToastType { success, error, info, warning }

class CustomToast {
  static void show({
    required BuildContext context,
    required String message,
    ToastType type = ToastType.info,
    Duration duration = const Duration(seconds: 3),
  }) {
    final overlay = Overlay.of(context);
    late OverlayEntry entry;
    entry = OverlayEntry(
      builder: (_) => _ToastWidget(
        message: message,
        type: type,
        onDismiss: () => entry.remove(),
      ),
    );
    overlay.insert(entry);
    Future.delayed(duration, () { if (entry.mounted) entry.remove(); });
  }
}

class _ToastWidget extends StatelessWidget {
  final String message;
  final ToastType type;
  final VoidCallback onDismiss;
  const _ToastWidget({required this.message, required this.type, required this.onDismiss});

  Color get _color => switch (type) {
    ToastType.success => Colors.green,
    ToastType.error => Colors.red,
    ToastType.info => Colors.blue,
    ToastType.warning => Colors.orange,
  };

  IconData get _icon => switch (type) {
    ToastType.success => Icons.check_circle,
    ToastType.error => Icons.error,
    ToastType.info => Icons.info,
    ToastType.warning => Icons.warning,
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20, left: 20, right: 20,
      child: Material(
        color: Colors.transparent,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(color: _color, borderRadius: BorderRadius.circular(8)),
          child: Row(children: [
            Icon(_icon, color: Colors.white, size: 20),
            const SizedBox(width: 12),
            Expanded(child: Text(message, style: const TextStyle(color: Colors.white, fontSize: 14))),
            IconButton(icon: const Icon(Icons.close, color: Colors.white, size: 16), onPressed: onDismiss, padding: EdgeInsets.zero, constraints: const BoxConstraints()),
          ]),
        ),
      ),
    );
  }
}`,
    usageFlutter: `ElevatedButton(
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
    description: 'Animated placeholder for content that is loading.',
    react: `// components/ui/Skeleton.tsx
import { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const Skeleton = ({ className = '', variant = 'text', width, height, ...props }: SkeletonProps) => {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
  };

  const styles = {
    width: width ? (typeof width === 'number' ? \`\${width}px\` : width) : '100%',
    height: height ? (typeof height === 'number' ? \`\${height}px\` : height) : variant === 'text' ? '1rem' : 'auto',
  };

  return (
    <div
      className={\`animate-pulse bg-muted \${variantClasses[variant]} \${className}\`}
      style={styles}
      {...props}
    />
  );
};

export default Skeleton;`,
    usageReact: `// Text line
<Skeleton className="w-32" />

// Avatar circle
<Skeleton variant="circular" width={40} height={40} />

// Card skeleton
<div className="space-y-3">
  <Skeleton className="h-32" variant="rectangular" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`,
    flutter: `// widgets/custom_skeleton.dart
import 'package:flutter/material.dart';

enum SkeletonVariant { text, circular, rectangular }

class CustomSkeleton extends StatefulWidget {
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
  State<CustomSkeleton> createState() => _CustomSkeletonState();
}

class _CustomSkeletonState extends State<CustomSkeleton>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 1000))
      ..repeat(reverse: true);
    _animation = Tween<double>(begin: 0.3, end: 0.7).animate(_controller);
  }

  @override
  void dispose() { _controller.dispose(); super.dispose(); }

  BorderRadius get _radius => switch (widget.variant) {
    SkeletonVariant.circular => BorderRadius.circular(9999),
    SkeletonVariant.rectangular => BorderRadius.circular(8),
    SkeletonVariant.text => BorderRadius.circular(4),
  };

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (_, __) => Container(
        width: widget.width,
        height: widget.height ?? (widget.variant == SkeletonVariant.text ? 16 : null),
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surfaceVariant.withOpacity(_animation.value),
          borderRadius: _radius,
        ),
      ),
    );
  }
}`,
    usageFlutter: `// Text line
CustomSkeleton(width: 120),

// Avatar
CustomSkeleton(width: 40, height: 40, variant: SkeletonVariant.circular),

// Card skeleton
Column(children: [
  CustomSkeleton(height: 120, variant: SkeletonVariant.rectangular),
  const SizedBox(height: 8),
  CustomSkeleton(width: 200),
  const SizedBox(height: 8),
  CustomSkeleton(width: 150),
]),`,
  },

  // ─── Top Navbar ───────────────────────────────────────────────────────────
  {
    name: 'Top Navbar',
    description: 'Responsive top navigation bar with logo, links, and action area.',
    react: `// components/ui/Navbar.tsx
import { useState, ReactNode } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface NavbarProps {
  logo: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
}

const Navbar = ({ logo, links = [], actions }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex-shrink-0">{logo}</div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={\`px-4 py-2 rounded-lg text-sm font-medium transition-colors \${
                link.active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }\`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">{actions}</div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={\`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors \${
                link.active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }\`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border">{actions}</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;`,
    usageReact: `<Navbar
  logo={<span className="text-xl font-bold">MyApp</span>}
  links={[
    { label: 'Home', href: '/', active: true },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Docs', href: '/docs' },
  ]}
  actions={
    <>
      <Button variant="ghost" size="sm">Sign In</Button>
      <Button size="sm">Get Started</Button>
    </>
  }
/>`,
    flutter: `// widgets/top_navbar.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class TopNavbar extends StatelessWidget implements PreferredSizeWidget {
  final Widget logo;
  final List<NavbarLink> links;
  final List<Widget> actions;

  const TopNavbar({
    super.key,
    required this.logo,
    this.links = const [],
    this.actions = const [],
  });

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: context.ac.background.withOpacity(0.9),
      surfaceTintColor: Colors.transparent,
      elevation: 0,
      titleSpacing: 16,
      leading: Padding(
        padding: const EdgeInsets.only(left: 16),
        child: Center(child: logo),
      ),
      leadingWidth: 180,
      title: Row(
        mainAxisSize: MainAxisSize.min,
        children: links
            .map((link) => _NavLink(link: link))
            .toList(),
      ),
      actions: [
        ...actions,
        const SizedBox(width: 16),
      ],
      bottom: PreferredSize(
        preferredSize: const Size.fromHeight(1),
        child: Divider(height: 1, color: context.ac.border),
      ),
    );
  }
}

class NavbarLink {
  final String label;
  final VoidCallback onTap;
  final bool active;
  const NavbarLink({required this.label, required this.onTap, this.active = false});
}

class _NavLink extends StatelessWidget {
  final NavbarLink link;
  const _NavLink({required this.link});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: link.onTap,
      style: TextButton.styleFrom(
        foregroundColor: link.active
            ? context.cs.primary
            : context.ac.mutedForeground,
        backgroundColor: link.active
            ? context.cs.primary.withOpacity(0.1)
            : Colors.transparent,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      ),
      child: Text(link.label, style: context.textTheme.labelLarge),
    );
  }
}`,
    usageFlutter: `TopNavbar(
  logo: Text("MyApp", style: context.textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold)),
  links: [
    NavbarLink(label: "Home", onTap: () {}, active: true),
    NavbarLink(label: "Features", onTap: () {}),
    NavbarLink(label: "Pricing", onTap: () {}),
  ],
  actions: [
    TextButton(onPressed: () {}, child: Text("Sign In")),
    ElevatedButton(onPressed: () {}, child: Text("Get Started")),
  ],
)`,
  },

  // ─── Bottom Navigation ─────────────────────────────────────────────────────
  {
    name: 'Bottom Navigation',
    description: 'Mobile-first bottom navigation bar with icon + label tabs.',
    react: `// components/ui/BottomNav.tsx
import { ReactNode } from 'react';

interface BottomNavItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
  key: string;
}

interface BottomNavProps {
  items: BottomNavItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

const BottomNav = ({ items, activeKey, onChange }: BottomNavProps) => (
  <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/90 backdrop-blur-md safe-area-pb">
    <div className="flex items-stretch h-16">
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-colors group"
          >
            <span className={\`text-xl transition-colors \${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}\`}>
              {(isActive && item.activeIcon) ? item.activeIcon : item.icon}
            </span>
            <span className={\`text-[10px] font-medium leading-none \${isActive ? 'text-primary' : 'text-muted-foreground'}\`}>
              {item.label}
            </span>
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  </nav>
);

export default BottomNav;`,
    usageReact: `import { Home, Search, Bell, User } from 'lucide-react';
const [tab, setTab] = useState('home');

<BottomNav
  activeKey={tab}
  onChange={setTab}
  items={[
    { key: 'home',     label: 'Home',    icon: <Home size={20} /> },
    { key: 'search',   label: 'Search',  icon: <Search size={20} /> },
    { key: 'alerts',   label: 'Alerts',  icon: <Bell size={20} /> },
    { key: 'profile',  label: 'Profile', icon: <User size={20} /> },
  ]}
/>`,
    flutter: `// widgets/bottom_navbar.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomBottomNav extends StatelessWidget {
  final int currentIndex;
  final void Function(int) onTap;
  final List<BottomNavItem> items;

  const CustomBottomNav({
    super.key,
    required this.currentIndex,
    required this.onTap,
    required this.items,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: context.ac.background,
        border: Border(top: BorderSide(color: context.ac.border)),
      ),
      child: BottomNavigationBar(
        currentIndex: currentIndex,
        onTap: onTap,
        backgroundColor: Colors.transparent,
        elevation: 0,
        selectedItemColor: context.cs.primary,
        unselectedItemColor: context.ac.mutedForeground,
        selectedLabelStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.w600),
        unselectedLabelStyle: const TextStyle(fontSize: 10),
        type: BottomNavigationBarType.fixed,
        items: items.map((item) => BottomNavigationBarItem(
          icon: Icon(item.icon),
          activeIcon: Icon(item.activeIcon ?? item.icon),
          label: item.label,
        )).toList(),
      ),
    );
  }
}

class BottomNavItem {
  final String label;
  final IconData icon;
  final IconData? activeIcon;
  const BottomNavItem({required this.label, required this.icon, this.activeIcon});
}`,
    usageFlutter: `CustomBottomNav(
  currentIndex: _selectedIndex,
  onTap: (i) => setState(() => _selectedIndex = i),
  items: const [
    BottomNavItem(label: "Home",    icon: Icons.home_outlined,   activeIcon: Icons.home),
    BottomNavItem(label: "Search",  icon: Icons.search),
    BottomNavItem(label: "Alerts",  icon: Icons.notifications_outlined, activeIcon: Icons.notifications),
    BottomNavItem(label: "Profile", icon: Icons.person_outline,  activeIcon: Icons.person),
  ],
)`,
  },

  // ─── Sidebar Navigation ────────────────────────────────────────────────────
  {
    name: 'Sidebar Navigation',
    description: 'Collapsible sidebar for dashboard and admin layouts.',
    react: `// components/ui/Sidebar.tsx
import { ReactNode, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarItem {
  label: string;
  icon: ReactNode;
  key: string;
  badge?: number;
}

interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
}

interface SidebarProps {
  groups: SidebarGroup[];
  activeKey: string;
  onChange: (key: string) => void;
  footer?: ReactNode;
}

export const Sidebar = ({ groups, activeKey, onChange, footer }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={\`flex flex-col h-full border-r border-border bg-background transition-all duration-300 \${
        collapsed ? 'w-16' : 'w-64'
      }\`}
    >
      {/* Collapse toggle */}
      <div className="flex items-center justify-end p-3 border-b border-border">
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-5 px-2">
        {groups.map((group, gi) => (
          <div key={gi}>
            {!collapsed && group.title && (
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-1.5">
                {group.title}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = item.key === activeKey;
                return (
                  <button
                    key={item.key}
                    onClick={() => onChange(item.key)}
                    title={collapsed ? item.label : undefined}
                    className={\`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group \${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    } \${collapsed ? 'justify-center' : ''}\`}
                  >
                    <span className="flex-shrink-0 text-base">{item.icon}</span>
                    {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
                    {!collapsed && item.badge != null && item.badge > 0 && (
                      <span className={\`text-xs font-bold px-2 py-0.5 rounded-full \${
                        isActive ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                      }\`}>
                        {item.badge > 99 ? '99+' : item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      {footer && !collapsed && (
        <div className="p-3 border-t border-border">{footer}</div>
      )}
    </aside>
  );
};

export default Sidebar;`,
    usageReact: `import { LayoutDashboard, Users, Settings, BarChart, Bell } from 'lucide-react';
const [activeKey, setActiveKey] = useState('dashboard');

<div className="flex h-screen">
  <Sidebar
    activeKey={activeKey}
    onChange={setActiveKey}
    groups={[
      {
        title: 'Main',
        items: [
          { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { key: 'analytics', label: 'Analytics',  icon: <BarChart size={18} /> },
          { key: 'alerts',    label: 'Alerts',     icon: <Bell size={18} />, badge: 5 },
        ],
      },
      {
        title: 'Admin',
        items: [
          { key: 'users',    label: 'Users',    icon: <Users size={18} /> },
          { key: 'settings', label: 'Settings', icon: <Settings size={18} /> },
        ],
      },
    ]}
    footer={<p className="text-xs text-muted-foreground">v1.0.0</p>}
  />
  <main className="flex-1 overflow-auto p-6">...</main>
</div>`,
    flutter: `// widgets/sidebar_nav.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class SidebarNav extends StatefulWidget {
  final List<SidebarGroup> groups;
  final int selectedIndex;
  final void Function(int) onSelect;

  const SidebarNav({
    super.key,
    required this.groups,
    required this.selectedIndex,
    required this.onSelect,
  });

  @override
  State<SidebarNav> createState() => _SidebarNavState();
}

class _SidebarNavState extends State<SidebarNav> {
  bool _collapsed = false;
  int _globalIndex = 0;

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 250),
      curve: Curves.easeInOut,
      width: _collapsed ? 64 : 240,
      decoration: BoxDecoration(
        color: context.ac.background,
        border: Border(right: BorderSide(color: context.ac.border)),
      ),
      child: Column(
        children: [
          // Collapse toggle
          Align(
            alignment: Alignment.centerRight,
            child: IconButton(
              icon: Icon(_collapsed ? Icons.chevron_right : Icons.chevron_left, size: 18),
              onPressed: () => setState(() => _collapsed = !_collapsed),
              color: context.ac.mutedForeground,
            ),
          ),
          const Divider(height: 1),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 8),
              children: widget.groups.expand((group) {
                final widgets = <Widget>[];
                if (!_collapsed && group.title != null) {
                  widgets.add(Padding(
                    padding: const EdgeInsets.fromLTRB(12, 12, 12, 4),
                    child: Text(
                      group.title!.toUpperCase(),
                      style: context.textTheme.labelSmall?.copyWith(
                        color: context.ac.mutedForeground,
                        letterSpacing: 1.2,
                      ),
                    ),
                  ));
                }
                for (final item in group.items) {
                  final isActive = _globalIndex == widget.selectedIndex;
                  final localIndex = _globalIndex;
                  _globalIndex++;
                  widgets.add(_SidebarItem(
                    item: item,
                    isActive: isActive,
                    collapsed: _collapsed,
                    onTap: () => widget.onSelect(localIndex),
                  ));
                }
                return widgets;
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class SidebarGroup {
  final String? title;
  final List<SidebarItem> items;
  const SidebarGroup({this.title, required this.items});
}

class SidebarItem {
  final String label;
  final IconData icon;
  final int badge;
  const SidebarItem({required this.label, required this.icon, this.badge = 0});
}

class _SidebarItem extends StatelessWidget {
  final SidebarItem item;
  final bool isActive;
  final bool collapsed;
  final VoidCallback onTap;

  const _SidebarItem({
    required this.item, required this.isActive,
    required this.collapsed, required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: collapsed ? item.label : '',
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 2),
          padding: EdgeInsets.symmetric(horizontal: collapsed ? 0 : 12, vertical: 10),
          decoration: BoxDecoration(
            color: isActive ? context.cs.primary : Colors.transparent,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            mainAxisAlignment: collapsed ? MainAxisAlignment.center : MainAxisAlignment.start,
            children: [
              Icon(item.icon, size: 18, color: isActive ? context.cs.onPrimary : context.ac.mutedForeground),
              if (!collapsed) ...[
                const SizedBox(width: 12),
                Expanded(child: Text(item.label, style: context.textTheme.bodyMedium?.copyWith(
                  color: isActive ? context.cs.onPrimary : context.ac.foreground,
                  fontWeight: isActive ? FontWeight.w600 : FontWeight.w400,
                ))),
                if (item.badge > 0)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                    decoration: BoxDecoration(
                      color: isActive ? Colors.white24 : context.cs.primary.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(99),
                    ),
                    child: Text('\${item.badge}', style: TextStyle(
                      fontSize: 11, fontWeight: FontWeight.bold,
                      color: isActive ? Colors.white : context.cs.primary,
                    )),
                  ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}`,
    usageFlutter: `Row(children: [
  SidebarNav(
    selectedIndex: _selectedIndex,
    onSelect: (i) => setState(() => _selectedIndex = i),
    groups: const [
      SidebarGroup(title: "Main", items: [
        SidebarItem(label: "Dashboard", icon: Icons.dashboard_outlined),
        SidebarItem(label: "Analytics",  icon: Icons.bar_chart_outlined),
        SidebarItem(label: "Alerts",     icon: Icons.notifications_outlined, badge: 5),
      ]),
      SidebarGroup(title: "Admin", items: [
        SidebarItem(label: "Users",    icon: Icons.people_outline),
        SidebarItem(label: "Settings", icon: Icons.settings_outlined),
      ]),
    ],
  ),
  Expanded(child: mainContent),
])`,
  },

  // ─── Tabs ──────────────────────────────────────────────────────────────────
  {
    name: 'Tabs',
    description: 'Horizontal tabbed interface for switching between content panels.',
    react: `// components/ui/Tabs.tsx
import { ReactNode, useState, createContext, useContext } from 'react';

const TabsCtx = createContext<{ active: string; setActive: (v: string) => void } | null>(null);

export const Tabs = ({ defaultValue, children }: { defaultValue: string; children: ReactNode }) => {
  const [active, setActive] = useState(defaultValue);
  return <TabsCtx.Provider value={{ active, setActive }}>{children}</TabsCtx.Provider>;
};

export const TabsList = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={\`flex bg-muted p-1 rounded-xl w-fit border border-border gap-0.5 \${className}\`}>
    {children}
  </div>
);

export const TabsTrigger = ({ value, children }: { value: string; children: ReactNode }) => {
  const ctx = useContext(TabsCtx)!;
  const isActive = ctx.active === value;
  return (
    <button
      onClick={() => ctx.setActive(value)}
      className={\`px-5 py-2 rounded-lg text-sm font-medium transition-all \${
        isActive
          ? 'bg-background shadow-sm text-foreground'
          : 'text-muted-foreground hover:text-foreground'
      }\`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }: { value: string; children: ReactNode }) => {
  const ctx = useContext(TabsCtx)!;
  if (ctx.active !== value) return null;
  return <div className="mt-4 animate-in fade-in-0 slide-in-from-bottom-1">{children}</div>;
};`,
    usageReact: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    <Card><CardContent>Overview content here</CardContent></Card>
  </TabsContent>
  <TabsContent value="analytics">
    <Card><CardContent>Analytics content here</CardContent></Card>
  </TabsContent>
  <TabsContent value="settings">
    <Card><CardContent>Settings content here</CardContent></Card>
  </TabsContent>
</Tabs>`,
    flutter: `// widgets/custom_tabs.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomTabs extends StatefulWidget {
  final List<String> labels;
  final List<Widget> children;
  final int initialIndex;

  const CustomTabs({
    super.key,
    required this.labels,
    required this.children,
    this.initialIndex = 0,
  });

  @override
  State<CustomTabs> createState() => _CustomTabsState();
}

class _CustomTabsState extends State<CustomTabs> with SingleTickerProviderStateMixin {
  late TabController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TabController(
      length: widget.labels.length,
      vsync: this,
      initialIndex: widget.initialIndex,
    );
  }

  @override
  void dispose() { _controller.dispose(); super.dispose(); }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          decoration: BoxDecoration(
            color: context.ac.muted,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: context.ac.border),
          ),
          padding: const EdgeInsets.all(4),
          child: TabBar(
            controller: _controller,
            isScrollable: true,
            tabAlignment: TabAlignment.start,
            dividerColor: Colors.transparent,
            indicator: BoxDecoration(
              color: context.ac.background,
              borderRadius: BorderRadius.circular(8),
              boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 4)],
            ),
            labelColor: context.ac.foreground,
            unselectedLabelColor: context.ac.mutedForeground,
            tabs: widget.labels.map((l) => Tab(text: l)).toList(),
          ),
        ),
        const SizedBox(height: 16),
        SizedBox(
          height: 300,
          child: TabBarView(
            controller: _controller,
            children: widget.children,
          ),
        ),
      ],
    );
  }
}`,
    usageFlutter: `CustomTabs(
  labels: const ["Overview", "Analytics", "Settings"],
  children: [
    Center(child: Text("Overview content")),
    Center(child: Text("Analytics content")),
    Center(child: Text("Settings content")),
  ],
)`,
  },

  // ─── Dropdown Menu ─────────────────────────────────────────────────────────
  {
    name: 'Dropdown Menu',
    description: 'Context menu or action dropdown triggered by a button.',
    react: `// components/ui/DropdownMenu.tsx
import { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  danger?: boolean;
  separator?: boolean;
  disabled?: boolean;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
}

const DropdownMenu = ({ trigger, items, align = 'left' }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>

      {open && (
        <div
          className={\`absolute top-full mt-2 z-50 min-w-[11rem] rounded-xl border border-border bg-popover shadow-lg py-1 \${
            align === 'right' ? 'right-0' : 'left-0'
          }\`}
        >
          {items.map((item, i) =>
            item.separator ? (
              <div key={i} className="my-1 h-px bg-border mx-2" />
            ) : (
              <button
                key={i}
                onClick={() => { item.onClick?.(); setOpen(false); }}
                disabled={item.disabled}
                className={\`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left \${
                  item.danger
                    ? 'text-destructive hover:bg-destructive/10'
                    : 'text-foreground hover:bg-muted'
                } disabled:opacity-50 disabled:cursor-not-allowed\`}
              >
                {item.icon && <span className="opacity-70 flex-shrink-0">{item.icon}</span>}
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;`,
    usageReact: `import { User, Settings, LogOut, Pencil, Trash2 } from 'lucide-react';

<DropdownMenu
  trigger={<Button variant="outline">Options ▾</Button>}
  align="right"
  items={[
    { label: 'Profile',         icon: <User size={15} />,     onClick: () => {} },
    { label: 'Edit',            icon: <Pencil size={15} />,   onClick: () => {} },
    { label: 'Settings',        icon: <Settings size={15} />, onClick: () => {} },
    { separator: true, label: '' },
    { label: 'Delete',          icon: <Trash2 size={15} />,   onClick: () => {}, danger: true },
    { label: 'Sign Out',        icon: <LogOut size={15} />,   onClick: () => {} },
  ]}
/>`,
    flutter: `// widgets/custom_dropdown_menu.dart
import 'package:flutter/material.dart';

class CustomDropdownMenu<T> extends StatelessWidget {
  final Widget trigger;
  final List<CustomDropdownItem<T>> items;
  final void Function(T value) onSelected;

  const CustomDropdownMenu({
    super.key,
    required this.trigger,
    required this.items,
    required this.onSelected,
  });

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<T>(
      offset: const Offset(0, 48),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: BorderSide(color: Theme.of(context).dividerColor),
      ),
      itemBuilder: (_) => items.map((item) {
        if (item.isDivider) return const PopupMenuDivider();
        return PopupMenuItem<T>(
          value: item.value,
          child: Row(children: [
            if (item.icon != null) ...[
              Icon(item.icon, size: 16, color: item.danger ? Colors.red : null),
              const SizedBox(width: 10),
            ],
            Text(
              item.label,
              style: TextStyle(color: item.danger ? Colors.red : null, fontSize: 14),
            ),
          ]),
        );
      }).toList(),
      onSelected: onSelected,
      child: trigger,
    );
  }
}

class CustomDropdownItem<T> {
  final String label;
  final T? value;
  final IconData? icon;
  final bool danger;
  final bool isDivider;

  const CustomDropdownItem({
    required this.label,
    this.value,
    this.icon,
    this.danger = false,
    this.isDivider = false,
  });
}`,
    usageFlutter: `CustomDropdownMenu<String>(
  trigger: ElevatedButton(onPressed: null, child: Text("Options")),
  onSelected: (value) => print("Selected: \$value"),
  items: const [
    CustomDropdownItem(label: "Profile",  value: "profile", icon: Icons.person_outline),
    CustomDropdownItem(label: "Settings", value: "settings", icon: Icons.settings_outlined),
    CustomDropdownItem(label: "",         isDivider: true),
    CustomDropdownItem(label: "Delete",   value: "delete",  icon: Icons.delete_outline, danger: true),
    CustomDropdownItem(label: "Sign Out", value: "logout",  icon: Icons.logout),
  ],
)`,
  },

  // ─── Avatar ────────────────────────────────────────────────────────────────
  {
    name: 'Avatar',
    description: 'User profile picture with fallback initials and status indicator.',
    react: `// components/ui/Avatar.tsx
interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const sizes = { xs: 'w-6 h-6 text-[10px]', sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-base', xl: 'w-20 h-20 text-xl' };
const statusColors = { online: 'bg-green-500', offline: 'bg-zinc-400', busy: 'bg-red-500', away: 'bg-yellow-500' };
const statusSizes = { xs: 'w-1.5 h-1.5', sm: 'w-2 h-2', md: 'w-2.5 h-2.5', lg: 'w-3 h-3', xl: 'w-4 h-4' };

const getInitials = (name = '') =>
  name.split(' ').slice(0, 2).map((s) => s[0]?.toUpperCase()).join('');

const Avatar = ({ src, name, size = 'md', status }: AvatarProps) => (
  <div className="relative inline-block">
    <div className={\`\${sizes[size]} rounded-full overflow-hidden flex items-center justify-center bg-primary/10 text-primary font-semibold ring-2 ring-background\`}>
      {src ? (
        <img src={src} alt={name ?? 'avatar'} className="w-full h-full object-cover" />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
    {status && (
      <span className={\`absolute bottom-0 right-0 \${statusSizes[size]} \${statusColors[status]} rounded-full ring-2 ring-background\`} />
    )}
  </div>
);

export const AvatarGroup = ({ avatars, max = 4 }: { avatars: AvatarProps[]; max?: number }) => {
  const visible = avatars.slice(0, max);
  const rest = avatars.length - max;
  return (
    <div className="flex -space-x-3">
      {visible.map((a, i) => <Avatar key={i} {...a} />)}
      {rest > 0 && (
        <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground">
          +{rest}
        </div>
      )}
    </div>
  );
};

export default Avatar;`,
    usageReact: `// Single avatar with image
<Avatar src="/avatar.jpg" name="John Doe" size="lg" status="online" />

// Fallback initials
<Avatar name="Sarah Kim" size="md" status="busy" />

// Avatar group
<AvatarGroup
  avatars={[
    { name: 'Alice Chen' },
    { name: 'Bob Smith', status: 'online' },
    { name: 'Carol Jones' },
    { name: 'Dave Brown' },
    { name: 'Eve Wilson' },
  ]}
  max={4}
/>`,
    flutter: `// widgets/custom_avatar.dart
import 'package:flutter/material.dart';

enum AvatarStatus { online, offline, busy, away }
enum AvatarSize { xs, sm, md, lg, xl }

class CustomAvatar extends StatelessWidget {
  final String? imageUrl;
  final String? name;
  final AvatarSize size;
  final AvatarStatus? status;

  const CustomAvatar({
    super.key,
    this.imageUrl,
    this.name,
    this.size = AvatarSize.md,
    this.status,
  });

  double get _diameter => switch (size) {
    AvatarSize.xs => 24, AvatarSize.sm => 32,
    AvatarSize.md => 40, AvatarSize.lg => 56, AvatarSize.xl => 80,
  };

  double get _statusSize => switch (size) {
    AvatarSize.xs => 6,  AvatarSize.sm => 8,
    AvatarSize.md => 10, AvatarSize.lg => 12, AvatarSize.xl => 16,
  };

  Color get _statusColor => switch (status!) {
    AvatarStatus.online  => Colors.green,
    AvatarStatus.offline => Colors.grey,
    AvatarStatus.busy    => Colors.red,
    AvatarStatus.away    => Colors.orange,
  };

  String _initials(String n) => n.trim().split(' ').take(2)
      .map((s) => s.isNotEmpty ? s[0].toUpperCase() : '').join();

  @override
  Widget build(BuildContext context) {
    return Stack(clipBehavior: Clip.none, children: [
      Container(
        width: _diameter, height: _diameter,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
          border: Border.all(color: Theme.of(context).colorScheme.surface, width: 2),
          image: imageUrl != null
              ? DecorationImage(image: NetworkImage(imageUrl!), fit: BoxFit.cover)
              : null,
        ),
        child: imageUrl == null
            ? Center(child: Text(_initials(name ?? '?'),
                style: TextStyle(
                  color: Theme.of(context).colorScheme.primary,
                  fontSize: _diameter * 0.35,
                  fontWeight: FontWeight.w600,
                )))
            : null,
      ),
      if (status != null)
        Positioned(
          bottom: 0, right: 0,
          child: Container(
            width: _statusSize, height: _statusSize,
            decoration: BoxDecoration(
              color: _statusColor,
              shape: BoxShape.circle,
              border: Border.all(color: Theme.of(context).colorScheme.surface, width: 2),
            ),
          ),
        ),
    ]);
  }
}`,
    usageFlutter: `// Single avatar
CustomAvatar(
  imageUrl: "https://example.com/avatar.jpg",
  name: "John Doe",
  size: AvatarSize.lg,
  status: AvatarStatus.online,
)

// Fallback initials
CustomAvatar(name: "Sarah Kim", size: AvatarSize.md, status: AvatarStatus.busy)

// Stacked group
Row(
  children: [
    for (int i = 0; i < 4; i++)
      Transform.translate(
        offset: Offset(i * -12.0, 0),
        child: CustomAvatar(name: "User \${i+1}"),
      ),
  ],
)`,
  },

  // ─── Switch / Toggle ───────────────────────────────────────────────────────
  {
    name: 'Switch / Toggle',
    description: 'Animated on/off toggle switch for boolean settings.',
    react: `// components/ui/Switch.tsx
import { HTMLAttributes } from 'react';

interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { track: 'w-8 h-4',    thumb: 'w-3 h-3',     translate: 'translate-x-4' },
  md: { track: 'w-11 h-6',   thumb: 'w-4.5 h-4.5', translate: 'translate-x-5' },
  lg: { track: 'w-14 h-7',   thumb: 'w-6 h-6',     translate: 'translate-x-7' },
};

const Switch = ({ checked, onChange, label, description, disabled = false, size = 'md', ...props }: SwitchProps) => {
  const s = sizes[size];
  return (
    <div className="flex items-start gap-3">
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={\`relative inline-flex flex-shrink-0 \${s.track} rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed \${
          checked ? 'bg-primary' : 'bg-muted-foreground/30'
        }\`}
        {...props}
      >
        <span
          className={\`pointer-events-none block \${s.thumb} rounded-full bg-white shadow-md ring-0 transition-transform duration-200 my-auto \${
            checked ? s.translate : 'translate-x-0.5'
          }\`}
        />
      </button>
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className="text-sm font-medium leading-none">{label}</span>}
          {description && <span className="text-xs text-muted-foreground mt-1">{description}</span>}
        </div>
      )}
    </div>
  );
};

export default Switch;`,
    usageReact: `const [enabled, setEnabled] = useState(false);
const [notifications, setNotifications] = useState(true);

// Simple switch
<Switch checked={enabled} onChange={setEnabled} />

// With label
<Switch
  checked={notifications}
  onChange={setNotifications}
  label="Email Notifications"
  description="Receive updates about your account activity"
/>

// Disabled
<Switch checked={false} onChange={() => {}} label="Feature (coming soon)" disabled />`,
    flutter: `// widgets/custom_switch.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSwitch extends StatelessWidget {
  final bool value;
  final ValueChanged<bool> onChanged;
  final String? label;
  final String? description;
  final bool enabled;

  const CustomSwitch({
    super.key,
    required this.value,
    required this.onChanged,
    this.label,
    this.description,
    this.enabled = true,
  });

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: enabled ? 1.0 : 0.5,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          if (label != null || description != null)
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (label != null)
                    Text(label!, style: context.textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.w500)),
                  if (description != null) ...[
                    const SizedBox(height: 2),
                    Text(description!, style: context.textTheme.bodySmall?.copyWith(color: context.ac.mutedForeground)),
                  ],
                ],
              ),
            ),
          Switch(
            value: value,
            onChanged: enabled ? onChanged : null,
            activeColor: context.cs.primary,
            activeTrackColor: context.cs.primary.withOpacity(0.3),
            inactiveThumbColor: Colors.white,
            inactiveTrackColor: context.ac.muted,
          ),
        ],
      ),
    );
  }
}`,
    usageFlutter: `// Simple
CustomSwitch(value: _enabled, onChanged: (v) => setState(() => _enabled = v))

// With label
CustomSwitch(
  value: _notifications,
  onChanged: (v) => setState(() => _notifications = v),
  label: "Email Notifications",
  description: "Receive updates about your account activity",
)

// Disabled
CustomSwitch(value: false, onChanged: (_) {}, label: "Feature (coming soon)", enabled: false)`,
  },

  // ─── Progress Bar ──────────────────────────────────────────────────────────
  {
    name: 'Progress Bar',
    description: 'Linear progress indicator for tasks, uploads, and loading states.',
    react: `// components/ui/Progress.tsx
interface ProgressProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const variantClasses = {
  default: 'bg-primary',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-destructive',
};

const heightClasses = { xs: 'h-1', sm: 'h-2', md: 'h-3', lg: 'h-4' };

const Progress = ({
  value, max = 100, label, showValue = false,
  variant = 'default', size = 'md', animated = false,
}: ProgressProps) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full space-y-1.5">
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="font-medium text-foreground">{label}</span>}
          {showValue && <span className="text-muted-foreground tabular-nums">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={\`w-full \${heightClasses[size]} bg-muted rounded-full overflow-hidden\`}>
        <div
          className={\`h-full rounded-full transition-all duration-500 ease-out \${variantClasses[variant]} \${animated ? 'animate-pulse' : ''}\`}
          style={{ width: \`\${pct}%\` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default Progress;`,
    usageReact: `// Basic
<Progress value={65} showValue />

// With label
<Progress value={80} label="Storage Used" showValue variant="warning" />

// Success state
<Progress value={100} label="Upload Complete" variant="success" size="lg" />

// Animated/indeterminate-style
<Progress value={45} label="Processing..." animated />`,
    flutter: `// widgets/custom_progress.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

enum ProgressVariant { primary, success, warning, danger }

class CustomProgressBar extends StatelessWidget {
  final double value; // 0.0 – 1.0
  final String? label;
  final bool showValue;
  final ProgressVariant variant;
  final double height;
  final bool animated;

  const CustomProgressBar({
    super.key,
    required this.value,
    this.label,
    this.showValue = false,
    this.variant = ProgressVariant.primary,
    this.height = 8,
    this.animated = false,
  });

  Color _getColor(BuildContext context) => switch (variant) {
    ProgressVariant.primary => context.cs.primary,
    ProgressVariant.success => Colors.green,
    ProgressVariant.warning => Colors.orange,
    ProgressVariant.danger  => context.cs.error,
  };

  @override
  Widget build(BuildContext context) {
    final clamped = value.clamp(0.0, 1.0);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null || showValue)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                if (label != null) Text(label!, style: context.textTheme.labelLarge),
                if (showValue) Text('\${(clamped * 100).round()}%',
                    style: context.textTheme.labelSmall?.copyWith(color: context.ac.mutedForeground)),
              ],
            ),
          ),
        ClipRRect(
          borderRadius: BorderRadius.circular(height),
          child: Stack(children: [
            Container(height: height, color: context.ac.muted),
            AnimatedContainer(
              duration: const Duration(milliseconds: 500),
              curve: Curves.easeOut,
              height: height,
              width: double.infinity,
              alignment: Alignment.centerLeft,
              child: FractionallySizedBox(
                widthFactor: clamped,
                child: animated
                    ? _AnimatedFill(color: _getColor(context), height: height)
                    : Container(color: _getColor(context)),
              ),
            ),
          ]),
        ),
      ],
    );
  }
}

class _AnimatedFill extends StatefulWidget {
  final Color color;
  final double height;
  const _AnimatedFill({required this.color, required this.height});
  @override State<_AnimatedFill> createState() => _AnimatedFillState();
}

class _AnimatedFillState extends State<_AnimatedFill> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(seconds: 1))..repeat(reverse: true);
  @override void dispose() { _c.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) => FadeTransition(
    opacity: Tween<double>(begin: 0.6, end: 1.0).animate(_c),
    child: Container(height: widget.height, color: widget.color),
  );
}`,
    usageFlutter: `// Basic
CustomProgressBar(value: 0.65, showValue: true)

// With label
CustomProgressBar(
  value: 0.80,
  label: "Storage Used",
  showValue: true,
  variant: ProgressVariant.warning,
  height: 10,
)

// Success
CustomProgressBar(value: 1.0, label: "Upload Complete", variant: ProgressVariant.success)

// Animated
CustomProgressBar(value: 0.45, label: "Processing...", animated: true)`,
  },

  // ─── Alert / Banner ────────────────────────────────────────────────────────
  {
    name: 'Alert / Banner',
    description: 'Inline contextual feedback banner for info, warning, success, and error states.',
    react: `// components/ui/Alert.tsx
import { ReactNode, useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  icon?: ReactNode;
}

const config: Record<AlertVariant, { icon: ReactNode; classes: string }> = {
  info:    { icon: <Info className="w-4 h-4" />,          classes: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200' },
  success: { icon: <CheckCircle className="w-4 h-4" />,   classes: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950/40 dark:border-green-800 dark:text-green-200' },
  warning: { icon: <AlertTriangle className="w-4 h-4" />, classes: 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950/40 dark:border-yellow-800 dark:text-yellow-200' },
  error:   { icon: <XCircle className="w-4 h-4" />,       classes: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200' },
};

const Alert = ({ variant = 'info', title, children, dismissible = false, icon }: AlertProps) => {
  const [visible, setVisible] = useState(true);
  const { icon: defaultIcon, classes } = config[variant];

  if (!visible) return null;

  return (
    <div className={\`flex gap-3 p-4 rounded-xl border \${classes}\`} role="alert">
      <span className="mt-0.5 flex-shrink-0">{icon ?? defaultIcon}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm leading-none mb-1">{title}</p>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
      {dismissible && (
        <button onClick={() => setVisible(false)} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;`,
    usageReact: `<Alert variant="info" title="New update available">
  Version 2.0 is ready. Refresh to apply changes.
</Alert>

<Alert variant="success" title="Payment successful" dismissible>
  Your subscription has been activated. Enjoy the premium features!
</Alert>

<Alert variant="warning" title="Storage almost full">
  You've used 90% of your 5 GB limit. Upgrade to get more space.
</Alert>

<Alert variant="error" title="Authentication failed" dismissible>
  Invalid credentials. Please check your email and password.
</Alert>`,
    flutter: `// widgets/custom_alert.dart
import 'package:flutter/material.dart';

enum AlertVariant { info, success, warning, error }

class CustomAlert extends StatefulWidget {
  final AlertVariant variant;
  final String? title;
  final String message;
  final bool dismissible;

  const CustomAlert({
    super.key,
    required this.message,
    this.variant = AlertVariant.info,
    this.title,
    this.dismissible = false,
  });

  @override
  State<CustomAlert> createState() => _CustomAlertState();
}

class _CustomAlertState extends State<CustomAlert> {
  bool _visible = true;

  (Color, Color, IconData) get _style => switch (widget.variant) {
    AlertVariant.info    => (const Color(0xFFEFF6FF), const Color(0xFF1D4ED8), Icons.info_outline),
    AlertVariant.success => (const Color(0xFFF0FDF4), const Color(0xFF15803D), Icons.check_circle_outline),
    AlertVariant.warning => (const Color(0xFFFFFBEB), const Color(0xFFB45309), Icons.warning_amber_outlined),
    AlertVariant.error   => (const Color(0xFFFEF2F2), const Color(0xFFDC2626), Icons.error_outline),
  };

  @override
  Widget build(BuildContext context) {
    if (!_visible) return const SizedBox.shrink();
    final (bg, fg, icon) = _style;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: bg,
        border: Border.all(color: fg.withOpacity(0.3)),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(icon, color: fg, size: 18),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            if (widget.title != null)
              Text(widget.title!, style: TextStyle(color: fg, fontWeight: FontWeight.w600, fontSize: 14)),
            if (widget.title != null) const SizedBox(height: 4),
            Text(widget.message, style: TextStyle(color: fg.withOpacity(0.85), fontSize: 13)),
          ]),
        ),
        if (widget.dismissible)
          GestureDetector(
            onTap: () => setState(() => _visible = false),
            child: Icon(Icons.close, color: fg.withOpacity(0.6), size: 18),
          ),
      ]),
    );
  }
}`,
    usageFlutter: `CustomAlert(
  variant: AlertVariant.info,
  title: "New update available",
  message: "Version 2.0 is ready. Refresh to apply changes.",
)

CustomAlert(
  variant: AlertVariant.success,
  title: "Payment successful",
  message: "Your subscription has been activated.",
  dismissible: true,
)

CustomAlert(
  variant: AlertVariant.warning,
  message: "You've used 90% of your storage limit.",
  dismissible: true,
)

CustomAlert(
  variant: AlertVariant.error,
  title: "Authentication failed",
  message: "Invalid credentials. Please check your email and password.",
  dismissible: true,
)`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const frameworkMeta = {
  react: {
    icon: Monitor,
    label: 'React',
    sublabel: 'TypeScript + Tailwind CSS',
    badge: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    codeLabel: 'Component Code',
    usageLabel: 'Usage Example',
  },
  flutter: {
    icon: Smartphone,
    label: 'Flutter',
    sublabel: 'Dart widgets',
    badge: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    codeLabel: 'Widget Code',
    usageLabel: 'Usage Example',
  },
};

type CodeTab = 'preview' | 'code' | 'usage';

interface CodeBlockProps {
  code: string;
  copyIndex: number;
  copiedIndex: number | null;
  onCopy: (index: number, code: string) => void;
}

const CodeBlock = ({ code, copyIndex, copiedIndex, onCopy }: CodeBlockProps) => (
  <div className="relative group">
    <pre className="p-5 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed border scrollbar-thin bg-zinc-950 text-zinc-200 border-zinc-800">
      <code>{code}</code>
    </pre>
    <button
      onClick={() => onCopy(copyIndex, code)}
      className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all opacity-0 group-hover:opacity-100 ${
        copiedIndex === copyIndex
          ? 'bg-emerald-500 text-white'
          : 'bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300'
      }`}
    >
      {copiedIndex === copyIndex
        ? <><Check className="w-3 h-3" /> Copied</>
        : <><Copy className="w-3 h-3" /> Copy</>}
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main export section
// ─────────────────────────────────────────────────────────────────────────────
const ComponentsExportSection = () => {
  const [framework, setFramework] = useState<Framework>('react');
  const [selectedComponent, setSelectedComponent] = useState<string>(components[0].name);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [codeTab, setCodeTab] = useState<CodeTab>('preview');

  const copyCode = async (index: number, code: string) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const meta = frameworkMeta[framework];
  const FrameworkIcon = meta.icon;
  const activeComp = components.find((c) => c.name === selectedComponent) ?? components[0];
  const compIndex = components.indexOf(activeComp);
  const PreviewComp = previewMap[activeComp.name];
  const activeCode = framework === 'react' ? activeComp.react : activeComp.flutter;
  const activeUsage = framework === 'react' ? activeComp.usageReact : activeComp.usageFlutter;

  return (
    <div className="flex h-full">
      {/* ── Sidebar ── */}
      <aside className="w-56 flex-shrink-0 border-r border-border flex flex-col h-full">
        {/* Framework switcher */}
        <div className="p-3 border-b border-border space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2 font-semibold">Framework</p>
          {(['react', 'flutter'] as Framework[]).map((fw) => {
            const fwMeta = frameworkMeta[fw];
            const FwIcon = fwMeta.icon;
            return (
              <button
                key={fw}
                onClick={() => setFramework(fw)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  framework === fw
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <FwIcon className="w-4 h-4 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold leading-none">{fwMeta.label}</div>
                  <div className={`text-[10px] mt-0.5 ${framework === fw ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {fwMeta.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Component list */}
        <div className="flex-1 overflow-y-auto p-3 scrollbar-thin">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2 font-semibold">Components</p>
          <nav className="space-y-0.5">
            {components.map((comp) => (
              <button
                key={comp.name}
                onClick={() => { setSelectedComponent(comp.name); setCodeTab('preview'); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group ${
                  selectedComponent === comp.name
                    ? 'bg-muted text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span>{comp.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                  selectedComponent === comp.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs border ${meta.badge}`}>
            <FrameworkIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-semibold">{meta.label}</span>
            <span className="text-muted-foreground ml-auto">{components.length} components</span>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-8 py-5 border-b border-border flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.badge}`}>
                  <FrameworkIcon className="w-3 h-3" />
                  {meta.label}
                </span>
                <span className="text-muted-foreground text-xs">{meta.sublabel}</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{activeComp.name}</h2>
              <p className="text-muted-foreground text-sm mt-0.5">{activeComp.description}</p>
            </div>

            <button
              onClick={() => copyCode(-1, activeCode)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                copiedIndex === -1
                  ? 'bg-emerald-500 text-white'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              {copiedIndex === -1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedIndex === -1 ? 'Copied!' : `Copy ${meta.label} Code`}
            </button>
          </div>
        </div>

        {/* Tab bar — Preview / Code / Usage */}
        <div className="flex items-center gap-0 border-b border-border px-8 flex-shrink-0">
          {(
            [
              { key: 'preview', label: 'Preview', icon: Eye },
              { key: 'code',    label: meta.codeLabel,  icon: FileCode2 },
              { key: 'usage',   label: meta.usageLabel, icon: BookOpen },
            ] as { key: CodeTab; label: string; icon: React.ElementType }[]
          ).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCodeTab(key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
                codeTab === key
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="p-8">

            {/* ── Preview tab ── */}
            {codeTab === 'preview' && (
              <div className="rounded-xl border border-border overflow-hidden">
                {PreviewComp ? (
                  <PreviewComp />
                ) : (
                  <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                    {framework === 'flutter'
                      ? '🚫 Live preview not available for Flutter/Dart widgets'
                      : 'Preview not available for this component'}
                  </div>
                )}
              </div>
            )}

            {/* ── Code tab ── */}
            {codeTab === 'code' && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-3">
                  <FileCode2 className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-base">{meta.codeLabel}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <CodeBlock
                  code={activeCode}
                  copyIndex={compIndex * 2}
                  copiedIndex={copiedIndex}
                  onCopy={copyCode}
                />
              </div>
            )}

            {/* ── Usage tab ── */}
            {codeTab === 'usage' && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-base">{meta.usageLabel}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <CodeBlock
                  code={activeUsage}
                  copyIndex={compIndex * 2 + 1}
                  copiedIndex={copiedIndex}
                  onCopy={copyCode}
                />
              </div>
            )}

            {/* Navigator */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
              <button
                onClick={() => {
                  const prev = components[compIndex - 1];
                  if (prev) { setSelectedComponent(prev.name); setCodeTab('preview'); }
                }}
                disabled={compIndex === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                {compIndex > 0 ? components[compIndex - 1].name : 'Previous'}
              </button>

              <div className="flex items-center gap-1.5">
                {components.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => { setSelectedComponent(c.name); setCodeTab('preview'); }}
                    className={`h-2 rounded-full transition-all ${
                      i === compIndex ? 'bg-primary w-5' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const next = components[compIndex + 1];
                  if (next) { setSelectedComponent(next.name); setCodeTab('preview'); }
                }}
                disabled={compIndex === components.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {compIndex < components.length - 1 ? components[compIndex + 1].name : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsExportSection;
