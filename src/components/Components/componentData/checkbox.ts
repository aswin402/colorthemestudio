import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const checkbox: ComponentEntry = {
  name: 'Checkbox',
  description: 'A control that allows the user to select one or more options from a set.',
  react: (config) => `// components/ui/Checkbox.tsx
import { forwardRef, InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const radiusClass = "${config.inputRadius === 'full' ? 'md' : config.inputRadius}";
    const opacityClass = "${getTwOpacity(config.buttonOpacity)}";
    const bgOpacityClass = "${getTwOpacity(config.inputOpacity)}";

    return (
      <label className={"group flex items-center gap-3 cursor-pointer select-none " + className}>
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div className={
            "h-5 w-5 border-2 transition-all duration-200 ease-in-out group-hover:border-primary/70 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-checked:bg-primary" + opacityClass + " peer-checked:border-primary " + 
            "rounded-" + radiusClass + (error ? " border-destructive" : " border-input bg-background" + bgOpacityClass)
          } />
          <svg
            className="absolute w-3.5 h-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        {label && (
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none font-body text-foreground">
              {label}
            </span>
            {error && (
              <span className="text-xs text-destructive mt-1">
                {error}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;`,
  usageReact: (_config) => `<Checkbox label="Accept terms and conditions" />
<Checkbox label="Default checked" defaultChecked />
<Checkbox label="Disabled option" disabled />
<Checkbox label="Required field" error="This is required" />`,
  flutter: (config) => `// widgets/custom_checkbox.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomCheckbox extends StatelessWidget {
  final bool value;
  final ValueChanged<bool?>? onChanged;
  final String? label;
  final String? error;
  final bool isDisabled;

  const CustomCheckbox({
    super.key,
    required this.value,
    required this.onChanged,
    this.label,
    this.error,
    this.isDisabled = false,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: isDisabled ? null : () => onChanged?.call(!value),
      borderRadius: BorderRadius.circular(8),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 20,
              height: 20,
              decoration: BoxDecoration(
                color: value 
                  ? context.cs.primary${getFlutterOpacity(config.buttonOpacity)}
                  : context.ac.inputBackground${getFlutterOpacity(config.inputOpacity)},
                borderRadius: BorderRadius.circular(${config.inputRadius === 'full' ? '4' : config.inputRadius === 'none' ? '0' : '4'}),
                border: Border.all(
                  color: error != null
                    ? context.cs.error
                    : value
                      ? context.cs.primary
                      : context.ac.inputBorder,
                  width: 2,
                ),
              ),
              child: value
                ? Icon(
                    Icons.check,
                    size: 14,
                    color: context.cs.onPrimary,
                  )
                : null,
            ),
            if (label != null) ...[
              const SizedBox(width: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    label!,
                    style: context.textTheme.bodyMedium?.copyWith(
                      color: isDisabled ? context.cs.onSurface.withOpacity(0.4) : null,
                    ),
                  ),
                  if (error != null)
                    Text(
                      error!,
                      style: context.textTheme.labelSmall?.copyWith(
                        color: context.cs.error,
                      ),
                    ),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}`,
  usageFlutter: (_config) => `CustomCheckbox(
  value: _isChecked,
  onChanged: (val) => setState(() => _isChecked = val!),
  label: "Accept terms and conditions",
),`,
};

export default checkbox;
