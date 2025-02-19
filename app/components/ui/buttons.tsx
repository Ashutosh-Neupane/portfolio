import React from 'react';

interface ButtonProps {
  text: string;
  className?: string; // Optional className prop
  ariaLabel?: string; // Optional aria-label for accessibility
}

const Buttons: React.FC<ButtonProps> = ({ text, className, ariaLabel }) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 cursor-pointer focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
      aria-label={ariaLabel} // Adding aria-label for accessibility
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl cursor-pointer">
        {text}
      </span>
    </button>
  );
};

export default Buttons;
