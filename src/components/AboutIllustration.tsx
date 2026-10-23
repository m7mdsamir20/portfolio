import React from 'react';

export const AboutIllustration: React.FC<{ alt: string; className?: string }> = ({ alt, className = '' }) => {
  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] mx-auto select-none ${className}`}>
      <img
        src="/illustrations/about-developer.png"
        alt={alt}
        width={440}
        height={330}
        loading="lazy"
        className="w-full h-auto"
        draggable={false}
      />
    </div>
  );
};
