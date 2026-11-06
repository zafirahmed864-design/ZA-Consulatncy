import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    'Website Design',
    'Virtual Assistance',
    'Local Business SEO',
    'Mobile-First Layouts',
    'Chenab Nagar & Chiniot',
    'Direct Founder Access',
    'High Speed Optimization',
    'WhatsApp Direct Support',
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 my-6 border-y border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200/80 bg-[#12161F]/50 dark:bg-[#12161F]/50 bg-slate-50/50 backdrop-blur-md">
      {/* Side fades for infinite continuity */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0E14] dark:from-[#0B0E14] from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0E14] dark:from-[#0B0E14] from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 cursor-default">
        {/* First set */}
        {items.map((item, index) => (
          <div key={`m1-${index}`} className="flex items-center gap-8 shrink-0">
            <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 hover:text-[#F5B83D] transition-colors whitespace-nowrap">
              {item}
            </span>
            <Sparkles className="w-3 h-3 text-[#F5B83D]/60 shrink-0" />
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {items.map((item, index) => (
          <div key={`m2-${index}`} className="flex items-center gap-8 shrink-0">
            <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 hover:text-[#F5B83D] transition-colors whitespace-nowrap">
              {item}
            </span>
            <Sparkles className="w-3 h-3 text-[#F5B83D]/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
