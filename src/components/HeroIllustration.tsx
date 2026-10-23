import React from 'react';

export const HeroIllustration: React.FC<{ alt: string; className?: string }> = ({ alt, className = '' }) => {
  return (
    <div className={`relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px] mx-auto select-none ${className}`}>
      <img
        src="/illustrations/hero-developer.png"
        alt={alt}
        width={580}
        height={435}
        className="w-full h-auto"
        draggable={false}
      />
    </div>
  );
};
