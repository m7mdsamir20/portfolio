import React from 'react';
import { Languages, Target, Code, Gauge, Users, Rocket } from 'lucide-react';
import { AboutIllustration } from './AboutIllustration.tsx';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

const iconProps = { size: 16, className: 'text-[#F36B21]', strokeWidth: 2 };

// Same order as t.about.qualities
const qualityIcons = [
  <Languages {...iconProps} />,
  <Target {...iconProps} />,
  <Code {...iconProps} />,
  <Gauge {...iconProps} />,
  <Users {...iconProps} />,
  <Rocket {...iconProps} />,
];

export const About: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Window Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <AboutIllustration alt={t.about.imageAlt} />
        </div>

        {/* Text & Qualities */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Section Heading with hand-drawn underline */}
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#151515] tracking-tight mb-1.5">
              {t.about.title}
            </h2>
            <BrushUnderline className="w-11" />
          </div>

          {/* Bio text */}
          <p className="text-[13px] sm:text-[14px] text-[#555] leading-relaxed mb-7 max-w-2xl">
            {t.about.bio}
          </p>

          {/* 6 Qualities Grid (3 columns on desktop / tablet, 2 on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
            {t.about.qualities.map((title, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="shrink-0">{qualityIcons[idx]}</span>
                <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#151515] leading-snug">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
