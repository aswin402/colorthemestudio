import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const radioGroup: ComponentEntry = {
  name: 'Radio Group',
  description: 'A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.',
  react: (config) => `// components/ui/RadioGroup.tsx
import { createContext, useContext, forwardRef } from 'react';

const RadioContext = createContext<{
  value?: string;
  onChange?: (val: string) => void;
}>({});

export const RadioGroup = ({ value, onChange, children, className = '' }: any) => {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      <div className={"flex flex-col gap-3 " + className}>{children}</div>
    </RadioContext.Provider>
  );
};

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ value, label, className = '', ...props }, ref) => {
    const context = useContext(RadioContext);
    const checked = context.value === value;
    const bgOpacityClass = "${getTwOpacity(config.inputOpacity)}";

    return (
      <label className={"group flex items-center gap-3 cursor-pointer select-none " + className}>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            ref={ref}
            className="peer sr-only"
            checked={checked}
            onChange={() => context.onChange?.(value)}
            {...props}
          />
          <div className={
            "h-5 w-5 border-2 rounded-full transition-all duration-200 ease-in-out group-hover:border-primary/70 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-checked:border-primary border-input bg-background" + bgOpacityClass
          } />
          <div className={
            "absolute w-2.5 h-2.5 rounded-full bg-primary transition-all duration-200 " + (checked ? "scale-100 opacity-100" : "scale-0 opacity-0")
          } />
        </div>
        <span className="text-sm font-medium leading-none font-body text-foreground">
          {label}
        </span>
      </label>
    );
  }
);`,
  usageReact: (_config) => `<RadioGroup value={selected} onChange={setSelected}>
  <RadioItem value="option-1" label="Standard Shipping" />
  <RadioItem value="option-2" label="Express Delivery" />
  <RadioItem value="option-3" label="In-Store Pickup" />
</RadioGroup>`,
  flutter: (config) => `// widgets/custom_radio.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomRadioGroup<T> extends StatelessWidget {
  final T value;
  final T groupValue;
  final ValueChanged<T?> onChanged;
  final String label;

  const CustomRadioGroup({
    super.key,
    required this.value,
    required this.groupValue,
    required this.onChanged,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    final bool isSelected = value == groupValue;

    return InkWell(
      onTap: () => onChanged(value),
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
                shape: BoxShape.circle,
                border: Border.all(
                  color: isSelected ? context.cs.primary : context.ac.inputBorder,
                  width: 2,
                ),
                color: context.ac.inputBackground${getFlutterOpacity(config.inputOpacity)},
              ),
              child: Center(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  width: isSelected ? 10 : 0,
                  height: isSelected ? 10 : 0,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: context.cs.primary,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 12),
            Text(
              label,
              style: context.textTheme.bodyMedium,
            ),
          ],
        ),
      ),
    );
  }
}`,
  usageFlutter: (_config) => `Column(
  children: [
    CustomRadioGroup(
      value: "standard",
      groupValue: _shipping,
      onChanged: (val) => setState(() => _shipping = val!),
      label: "Standard Shipping",
    ),
    CustomRadioGroup(
      value: "express",
      groupValue: _shipping,
      onChanged: (val) => setState(() => _shipping = val!),
      label: "Express Shipping",
    ),
  ],
)`,
};

export default radioGroup;
