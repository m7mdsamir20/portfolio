import React from 'react';

// Monitor Frame wrapper
export const MonitorMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 py-4">
      {/* Monitor Display */}
      <div className="relative w-full max-w-[210px] sm:max-w-[230px] aspect-[16/10] bg-[#151515] rounded-md p-1.5 shadow-sm border border-[#222]">
        {/* Screen Bezel & Web Display */}
        <div className="w-full h-full bg-white rounded-[3px] overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
      {/* Monitor Stand */}
      <div className="w-5 h-4 bg-[#2A2A2A] border-x border-[#151515]" />
      <div className="w-16 h-1.5 bg-[#151515] rounded-full shadow-xs" />
    </div>
  );
};

// Live site screenshot inside the monitor frame
export const SiteMonitorMockup: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <MonitorMockup>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </MonitorMockup>
  );
};
