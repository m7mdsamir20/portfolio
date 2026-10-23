import React from 'react';
import { Search, Pencil, CodeXml, Rocket, ChartColumnIncreasing } from 'lucide-react';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

const iconProps = { size: 22, strokeWidth: 1.8, className: 'transition-colors' };

// Same order as t.process.steps
const stepIcons = [
  <Search {...iconProps} />,
  <Pencil {...iconProps} />,
  <CodeXml {...iconProps} />,
  <Rocket {...iconProps} />,
  <ChartColumnIncreasing {...iconProps} />,
];

export const MyProcess: React.FC = () => {
  const { t } = useLang();
  const steps = t.process.steps.map((step, idx) => ({
    ...step,
    number: String(idx + 1).padStart(2, '0'),
    icon: stepIcons[idx],
  }));

  return (
    <section id="process" className="py-12 sm:py-16">
      {/* Section Heading with hand-drawn underline */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight mb-1.5">
          {t.process.title}
        </h2>
        <BrushUnderline className="w-11" />
      </div>

      {/* 5 Process Steps — one row on desktop, dashed connectors between the circles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-9 items-start">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`group relative flex flex-col items-center text-center ${
              idx === steps.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            {/* Dashed connector to the next circle (desktop only) */}
            {idx < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="process-connector hidden md:block absolute top-7 -translate-y-1/2"
                style={{ insetInlineStart: 'calc(50% + 40px)', width: 'calc(100% - 64px)' }}
              />
            )}

            {/* Circular Badge */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-[#FFF3EB] flex items-center justify-center text-[#151515] mb-4 transition-all duration-300 group-hover:bg-[#F36B21] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-md">
              {step.icon}
            </div>

            {/* Step Number */}
            <span className="text-[12px] font-bold text-[#F36B21] mb-1 tracking-wide">
              {step.number}
            </span>

            {/* Title */}
            <h3 className="text-[14px] font-bold text-[#151515] mb-1.5">{step.title}</h3>

            {/* Description */}
            <p className="text-[12px] text-[#626262] leading-relaxed max-w-[170px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
