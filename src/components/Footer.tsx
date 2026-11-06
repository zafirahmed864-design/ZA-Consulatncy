import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 bg-[#0B0E14] dark:bg-[#0B0E14] bg-white py-14 relative overflow-hidden text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-100">
          
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#1A1F2B] p-0.5 border border-[#F5B83D]/40 flex items-center justify-center">
              <img
                src="/assets/aistudio/za-logo-horizontal_c8c78f3a.svg"
                alt="ZA Consultancy"
                className="w-full h-full object-cover scale-[1.9] translate-x-[4px]"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 leading-tight">
                ZA <span className="text-[#F5B83D]">Consultancy</span>
              </div>
              <div className="font-mono-code text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500">
                Chiniot, Punjab, Pakistan
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 hover:text-[#F5B83D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161F] dark:bg-[#12161F] bg-slate-100 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-700 hover:text-[#0B0E14] hover:bg-[#F5B83D] transition-all border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 text-xs font-mono-code"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500 text-center sm:text-left">
          <div>
            © 2026 ZA Consultancy. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Engineered by</span>
            <span className="text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 font-semibold">Zafir Ahmed</span>
            <span className="text-[#F5B83D]">·</span>
            <span>Chiniot</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
