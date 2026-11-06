import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onSeeWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeWorkClick }) => {
  const [wordsVisible, setWordsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWordsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const headlineWords = ['Digital', 'presence,', 'built', 'properly.'];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Drifting blurred gold background ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#F5B83D]/12 rounded-full blur-[120px] pointer-events-none animate-float-glow-1 -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#FFD27A]/10 rounded-full blur-[140px] pointer-events-none animate-float-glow-2 -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 left-10 w-[300px] h-[300px] bg-[#1A1F2B]/50 rounded-full blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12161F] dark:bg-[#12161F] bg-slate-100 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 text-xs font-mono-code mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5B83D] animate-ping" />
              <span className="text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 font-medium">ZA CONSULTANCY</span>
              <span className="text-[#9AA3B2]">/</span>
              <span className="text-[#F5B83D]">CHINIOT · PAKISTAN</span>
            </div>

            {/* Word-by-word Reveal Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 leading-[1.1] mb-6 max-w-2xl text-balance">
              {headlineWords.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-2.5 transition-all duration-700 ease-out transform"
                  style={{
                    opacity: wordsVisible ? 1 : 0,
                    transform: wordsVisible ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${index * 130 + 100}ms`,
                  }}
                >
                  {word === 'properly.' ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] underline decoration-[#F5B83D]/40 decoration-wavy decoration-2 underline-offset-8">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 leading-relaxed mb-8 max-w-xl">
              ZA Consultancy designs websites and runs the online side of small businesses,
              from property dealers to dental clinics. Personal attention, real accountability,
              and craftsmanship without agency overhead.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary: See our work */}
              <button
                onClick={onSeeWorkClick}
                className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full overflow-hidden text-sm font-semibold tracking-wide font-mono-code text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] hover:brightness-105 shadow-[0_10px_25px_rgba(245,184,61,0.25)] hover:shadow-[0_15px_35px_rgba(245,184,61,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Shine sweep */}
                <span className="absolute top-0 left-0 w-full h-full bg-white/25 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span>See our work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Secondary: WhatsApp us */}
              <a
                href="https://wa.me/923163370864?text=Hi%20Zafir,%20I%20would%20like%20to%20discuss%20a%20project%20with%20ZA%20Consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide font-mono-code text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 bg-[#12161F] dark:bg-[#12161F] bg-white hover:bg-[#1A1F2B] dark:hover:bg-[#1A1F2B] hover:bg-slate-50 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 hover:border-[#F5B83D]/60 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(245,184,61,0.15)] transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp us</span>
              </a>
            </div>

            {/* Quick Proof Trust Markers */}
            <div className="mt-10 pt-6 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200/80 w-full grid grid-cols-3 gap-4 text-xs font-mono-code text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                <span className="truncate">Direct Founder Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                <span className="truncate">No Monthly Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                <span className="truncate">Turnkey Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo with Architectural Layered Frame & Precision Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Layer 1: Soft Ambient Breathing Gold Glow (Non-rotating) */}
              <div
                className="absolute -inset-3 rounded-[36px] bg-[#F5B83D]/15 dark:bg-[#F5B83D]/15 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-20"
                aria-hidden="true"
              />

              {/* Layer 2: Offset Architectural Backplate Frame */}
              <div
                className="absolute inset-0 rounded-[32px] translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4 bg-[#12161F]/90 dark:bg-[#12161F]/90 bg-slate-100 border border-[#F5B83D]/40 dark:border-[#F5B83D]/40 border-slate-300 shadow-xl group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500 ease-out -z-10 overflow-hidden"
              >
                {/* Subtle Geometric Grid Lines in Backplate */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,184,61,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,184,61,0.06)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                {/* Bottom Technical Watermark inside Backplate */}
                <div className="absolute bottom-3 right-4 text-[9px] font-mono-code text-[#F5B83D]/50 uppercase tracking-widest hidden sm:block">
                  DEV · ARCHITECTURE
                </div>
              </div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-[32px] p-1 bg-gradient-to-br from-[#F5B83D]/70 via-[#1A1F2B] to-[#F5B83D]/40 dark:bg-gradient-to-br dark:from-[#F5B83D]/70 dark:via-[#1A1F2B] dark:to-[#F5B83D]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#F5B83D]/30 transition-transform duration-500 group-hover:-translate-y-1">
                
                {/* Precision Corner Brackets (Engineering Style) */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FFD27A] rounded-tl z-20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FFD27A] rounded-tr z-20 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FFD27A] rounded-bl z-20 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FFD27A] rounded-br z-20 pointer-events-none" />

                <div className="relative rounded-[28px] overflow-hidden bg-[#12161F] aspect-[4/5] w-full">
                  {/* The Profile Photo */}
                  <img
                    src="/assets/aistudio/profile.jpg_776450ed.jpeg"
                    alt="Zafir Ahmed - Web Developer & Founder"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Gentle gradient scrim at bottom to ensure badge legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/85 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Glass Badge 1: Top-Left "Open for new projects" */}
              <div className="absolute -top-3 -left-3 sm:-left-5 backdrop-blur-xl bg-[#12161F]/90 dark:bg-[#12161F]/90 bg-white/90 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center gap-2.5 transform -rotate-1 hover:rotate-0 transition-transform duration-300 z-20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono-code font-medium text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800">
                  Open for new projects
                </span>
              </div>

              {/* Floating Glass Badge 2: Bottom-Right "Zafir Ahmed, Lead Developer" */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 backdrop-blur-xl bg-[#12161F]/90 dark:bg-[#12161F]/90 bg-white/90 border border-[#F5B83D]/40 dark:border-[#F5B83D]/40 px-4 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center gap-3 transform rotate-1 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="w-7 h-7 rounded-lg bg-[#F5B83D]/15 flex items-center justify-center text-[#F5B83D]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 leading-tight">
                    Zafir Ahmed
                  </span>
                  <span className="text-[10px] font-mono-code text-[#F5B83D] tracking-wide">
                    Lead Web Developer · Founder
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
