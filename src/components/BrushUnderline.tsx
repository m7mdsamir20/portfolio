import React from 'react';

// Hand-drawn orange stroke used under headings: tapered ends and a slight upward sweep
export const BrushUnderline: React.FC<{ className?: string }> = ({ className = 'w-10' }) => {
  return (
    <svg
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`block h-auto rtl:-scale-x-100 ${className}`}
    >
      <path
        d="M2 7.2 C 12 5.6, 24 4.4, 36 4.1 C 44 3.9, 51 3.4, 58 2.2 C 51 4.6, 43 5.6, 35 6.1 C 24 6.7, 13 7.4, 2.6 8.6 C 1.6 8.7, 1.2 7.5, 2 7.2 Z"
        fill="#F36B21"
      />
    </svg>
  );
};
