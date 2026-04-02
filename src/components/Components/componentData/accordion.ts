import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const accordion: ComponentEntry = {
  name: 'Accordion',
  description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
  react: (config) => `// components/ui/Accordion.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const radiusClass = "${config.cardRadius === 'full' ? 'rounded-2xl' : "rounded-" + config.cardRadius}";
  const inputOpacity = "${getTwOpacity(config.inputOpacity)}";
  const cardOpacity = "${getTwOpacity(config.cardOpacity)}";

  return (
    <div className={"border-b border-border shadow-sm mb-2 overflow-hidden " + radiusClass}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={"w-full flex items-center justify-between px-5 py-4 text-left transition-all hover:bg-muted" + inputOpacity}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-sm tracking-tight text-foreground">{title}</span>
        <ChevronDown 
          className={"w-4 h-4 text-muted-foreground transition-transform duration-300 " + (isOpen ? "rotate-180" : "")} 
        />
      </button>
      <div 
        className={"transition-all duration-300 ease-in-out overflow-hidden " + (isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0") + " bg-card" + cardOpacity}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="px-5 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};`,
  usageReact: (_config) => `<Accordion>
  <AccordionItem title="Is it accessible?">
    Yes. It adheres to the WAI-ARIA design pattern.
  </AccordionItem>
  <AccordionItem title="Is it styled?">
    Yes. It comes with default styles that matches the other components' aesthetic.
  </AccordionItem>
  <AccordionItem title="Is it animated?">
    Yes. It's animated by default, but you can disable it if you prefer.
  </AccordionItem>
</Accordion>`,
  flutter: (config) => `// widgets/custom_accordion.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomAccordion extends StatefulWidget {
  final String title;
  final Widget content;
  final bool initialOpen;

  const CustomAccordion({
    super.key,
    required this.title,
    required this.content,
    this.initialOpen = false,
  });

  @override
  State<CustomAccordion> createState() => _CustomAccordionState();
}

class _CustomAccordionState extends State<CustomAccordion> with SingleTickerProviderStateMixin {
  late bool _isOpen;

  @override
  void initState() {
    super.initState();
    _isOpen = widget.initialOpen;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: context.ac.cardBackground${getFlutterOpacity(config.cardOpacity)},
        borderRadius: BorderRadius.circular(${config.cardRadius === 'full' ? '16' : config.cardRadius === 'none' ? '0' : '12'}),
        border: Border.all(color: context.ac.border),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        children: [
          InkWell(
            onTap: () => setState(() => _isOpen = !_isOpen),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    widget.title,
                    style: context.textTheme.titleSmall?.copyWith(fontWeight: FontWeight.bold),
                  ),
                  AnimatedRotation(
                    turns: _isOpen ? 0.5 : 0,
                    duration: const Duration(milliseconds: 200),
                    child: Icon(Icons.keyboard_arrow_down, color: context.cs.onSurfaceVariant),
                  ),
                ],
              ),
            ),
          ),
          AnimatedCrossFade(
            firstChild: const SizedBox(width: double.infinity),
            secondChild: Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: widget.content,
            ),
            crossFadeState: _isOpen ? CrossFadeState.showSecond : CrossFadeState.showFirst,
            duration: const Duration(milliseconds: 200),
          ),
        ],
      ),
    );
  }
}`,
  usageFlutter: (_config) => `CustomAccordion(
  title: "General FAQ",
  content: Text("Our servers are located globally to ensure low latency."),
),
CustomAccordion(
  title: "Account Security",
  content: Text("Account security is our top priority. We use industry-standard encryption."),
),`,
};

export default accordion;
