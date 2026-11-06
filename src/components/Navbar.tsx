import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 pointer-events-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#12161F]/90 dark:bg-[#12161F]/90 bg-white/90 backdrop-blur-xl border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
            : 'bg-[#12161F]/60 dark:bg-[#12161F]/60 bg-white/60 backdrop-blur-md border-[#1A1F2B]/60 dark:border-[#1A1F2B]/60 border-slate-200/60'
        }`}
      >
        {/* Brand Zone */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#root')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B83D] rounded-lg py-1"
          aria-label="ZA Consultancy Home"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-[#1A1F2B] p-0.5 border border-[#F5B83D]/40 group-hover:border-[#F5B83D] transition-colors flex items-center justify-center">
            <img
              src="/assets/aistudio/za-logo-horizontal_c8c78f3a.svg"
              alt="ZA Logo"
              className="w-full h-full object-cover scale-[1.9] translate-x-[4px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 group-hover:text-[#F5B83D] transition-colors leading-none">
              ZA <span className="text-[#F5B83D]">Consultancy</span>
            </span>
            <span className="font-mono-code text-[10px] tracking-widest text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500 uppercase mt-0.5">
              Chiniot · Web Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 hover:text-[#F2F0EA] dark:hover:text-[#F2F0EA] hover:text-slate-900 transition-colors py-1 group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5B83D] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Zone: Theme Toggle + Hire Us Button */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-700 hover:text-[#F5B83D] hover:bg-[#1A1F2B]/80 transition-all border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#FFD27A]" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="relative group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase font-mono-code rounded-full overflow-hidden text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] hover:brightness-110 shadow-[0_0_20px_rgba(245,184,61,0.25)] hover:shadow-[0_0_25px_rgba(245,184,61,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {/* Shimmer sweep */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span>Hire Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto pointer-events-auto rounded-2xl bg-[#12161F]/95 dark:bg-[#12161F]/95 bg-white/95 backdrop-blur-2xl border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 p-5 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 hover:text-[#F5B83D] hover:bg-[#1A1F2B]/50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#9AA3B2] text-xs font-mono-code">→</span>
              </a>
            ))}
            <div className="pt-2 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 mt-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase font-mono-code rounded-xl text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] to-[#F5B83D] shadow-lg"
              >
                <span>Hire Us · Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
