import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const input: ComponentEntry = {
  name: 'Input',
  description: 'Text input field with support for labels, icons, and validation states.',
  react: (config) => `// components/ui/Input.tsx
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-foreground ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={\`flex h-10 w-full rounded-${config.inputRadius} border border-input bg-background${getTwOpacity(config.inputOpacity)} px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all \${icon ? 'pl-10' : ''} \${error ? 'border-destructive' : ''} \${className}\`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-destructive ml-1">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;`,
  usageReact: (_config) => `<Input 
  label="Email Address" 
  placeholder="name@example.com" 
  icon={<Mail size={16} />}
/>
<Input 
  label="Password" 
  type="password" 
  error="Password must be at least 8 characters" 
/>`,
  flutter: (config) => `// widgets/custom_input.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomInput extends StatelessWidget {
  final String? label;
  final String? hint;
  final IconData? icon;
  final bool isPassword;
  final String? errorText;

  const CustomInput({
    super.key,
    this.label,
    this.hint,
    this.icon,
    this.isPassword = false,
    this.errorText,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        if (label != null)
          Padding(
            padding: const EdgeInsets.only(left: 4, bottom: 6),
            child: Text(
              label!,
              style: context.textTheme.labelMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        TextField(
          obscureText: isPassword,
          decoration: InputDecoration(
            hintText: hint,
            prefixIcon: icon != null ? Icon(icon, size: 20) : null,
            filled: true,
            fillColor: context.cs.surfaceVariant${getFlutterOpacity(config.inputOpacity)},
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(${config.inputRadius === 'full' ? '999' : config.inputRadius === 'none' ? '0' : '12'}),
              borderSide: BorderSide(color: context.cs.outlineVariant),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(${config.inputRadius === 'full' ? '999' : config.inputRadius === 'none' ? '0' : '12'}),
              borderSide: BorderSide(color: context.cs.outlineVariant),
            ),
            errorText: errorText,
          ),
        ),
      ],
    );
  }
}`,
  usageFlutter: (_config) => `CustomInput(
  label: "Username",
  hint: "john_doe",
  icon: Icons.person_outline,
),
CustomInput(
  label: "Password",
  isPassword: true,
  errorText: "Incorrect password",
),`,
};

export default input;
