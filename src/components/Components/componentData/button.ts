import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const button: ComponentEntry = {
  name: 'Button',
  description: 'Interactive button with multiple variants and sizes.',
  react: (config) => `// components/ui/Button.tsx
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
    const baseClasses = "inline-flex items-center justify-center font-medium font-body rounded-${config.buttonRadius} transition-all active:scale-[0.985] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring";

    const variantClasses = {
      primary: "bg-primary${getTwOpacity(config.buttonOpacity)} text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
      secondary: "bg-secondary${getTwOpacity(config.buttonOpacity)} text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
      ghost: "hover:bg-muted hover:text-foreground",
      destructive: "bg-destructive${getTwOpacity(config.buttonOpacity)} text-destructive-foreground hover:bg-destructive/90",
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
  usageReact: (_config) => `<Button>Primary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="destructive" isLoading>Deleting...</Button>`,
  flutter: (config) => `// widgets/custom_button.dart
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
          backgroundColor: (isDestructive
            ? context.cs.error
            : isSecondary
              ? context.ac.secondaryButtonBackground
              : context.ac.buttonBackground)${getFlutterOpacity(config.buttonOpacity)},
          foregroundColor: isDestructive
            ? context.cs.onError
            : isSecondary
              ? context.ac.secondaryButtonForeground
              : context.ac.buttonForeground,
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(${config.buttonRadius === 'full' ? '999' : config.buttonRadius === 'none' ? '0' : '8'})),
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
  usageFlutter: (_config) => `CustomButton(text: "Primary Action", onPressed: () {}),
CustomButton(text: "Secondary", isSecondary: true, onPressed: () {}),
CustomButton(text: "Delete", isDestructive: true, onPressed: () {}),
CustomButton(text: "Loading", isLoading: true, onPressed: () {}),
CustomButton(text: "Full Width", isFullWidth: true, onPressed: () {}),`,
};

export default button;
