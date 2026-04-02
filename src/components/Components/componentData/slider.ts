import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const slider: ComponentEntry = {
  name: 'Slider',
  description: 'An input where the user selects a value from a given range.',
  react: (config) => `// components/ui/Slider.tsx
import * as React from 'react';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  min?: number;
  max?: number;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, className = '', ...props }, ref) => {
    const bgOpacityClass = "${getTwOpacity(config.inputOpacity)}";

    return (
      <div className={"flex flex-col gap-3 w-full " + className}>
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        <div className="relative flex items-center group">
          <input
            type="range"
            ref={ref}
            className={
              "w-full h-2 rounded-full appearance-none cursor-pointer accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-muted" + bgOpacityClass
            }
            {...props}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
export default Slider;`,
  usageReact: (_config) => `<Slider label="Volume" min={0} max={100} defaultValue={50} />
<Slider label="Brightness" min={0} max={100} defaultValue={80} step={10} />`,
  flutter: (config) => `// widgets/custom_slider.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSlider extends StatelessWidget {
  final double value;
  final double min;
  final double max;
  final ValueChanged<double> onChanged;
  final String? label;

  const CustomSlider({
    super.key,
    required this.value,
    required this.onChanged,
    this.min = 0.0,
    this.max = 1.0,
    this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(label!, style: context.textTheme.labelLarge),
          const SizedBox(height: 12),
        ],
        SliderTheme(
          data: SliderTheme.of(context).copyWith(
            activeTrackColor: context.cs.primary,
            inactiveTrackColor: context.cs.secondaryContainer${getFlutterOpacity(config.inputOpacity)},
            thumbColor: context.cs.primary,
            overlayColor: context.cs.primary.withOpacity(0.12),
            trackHeight: 4.0,
            thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 8.0),
          ),
          child: Slider(
            value: value,
            min: min,
            max: max,
            onChanged: onChanged,
          ),
        ),
      ],
    );
  }
}`,
  usageFlutter: (_config) => `CustomSlider(
  value: _volume,
  min: 0,
  max: 100,
  onChanged: (val) => setState(() => _volume = val),
  label: "Volume Control",
),`,
};

export default slider;
