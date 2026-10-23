import React from 'react';
import { HeroIllustration } from './HeroIllustration.tsx';
import { BrushUnderline } from './BrushUnderline.tsx';
import { useLang } from '../i18n.tsx';

export const Hero: React.FC = () => {
  const { t } = useLang();

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.querySelector('#work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-8 pb-6 sm:pt-12 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Small Intro with hand-drawn accent */}
          <div className="mb-2">
            <BrushUnderline className="w-8 mb-1.5" />
            <span className="text-sm font-medium text-[#444] tracking-wide">{t.hero.hi}</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-[46px] lg:text-[54px] font-extrabold tracking-tight leading-[1.1] mb-3">
            <span className="text-[#151515]">{t.hero.first} </span>
            <span className="text-[#F36B21]">{t.hero.last}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-[14px] sm:text-[15px] font-semibold text-[#444] tracking-normal mb-4">
            {t.hero.role}
          </h2>

          {/* Bio Description */}
          <p className="text-[13px] sm:text-[14px] text-[#626262] leading-relaxed max-w-[470px] mb-7">
            {t.hero.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="inline-flex items-center gap-2 bg-[#F36B21] hover:bg-[#e05d15] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-colors"
            >
              <span>{t.hero.cta}</span>
              <span className="inline-block text-sm font-bold rtl:-scale-x-100">→</span>
            </a>
          </div>
        </div>

        {/* Illustration Column */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <HeroIllustration alt={t.hero.imageAlt} />
        </div>
      </div>
    </section>
  );
};
