import React, { useState } from 'react';
import { Search, PenTool, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We unpack your specific business model, customer demographics, competitor landscape, and operational bottlenecks. No guesswork.',
      deliverables: ['Objective scope brief', 'Target audience definition', 'Timeline & fixed investment quote'],
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Tailored wireframes and visual design focusing on trust, clarity, and friction-free visitor actions. Mobile-first from day one.',
      deliverables: ['Bespoke aesthetic layout', 'Copywriting & clear value propositions', 'Interactive prototype review'],
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Rock-solid frontend engineering with clean markup, blazing-fast speed, local SEO indexing, and seamless WhatsApp routing.',
      deliverables: ['Responsive code architecture', 'Local SEO & Google tags integration', 'Cross-browser & mobile testing'],
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'Domain configuration, production Netlify/server deployment, speed audit, and a personal video walkthrough so you have full control.',
      deliverables: ['Live domain launch & SSL', 'Hands-on client onboarding', '30 days post-launch support'],
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0D1017] dark:bg-[#0D1017] bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
            <span>04. Execution Framework</span>
            <span>·</span>
            <span>Predictable Delivery</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
            Four clear steps from conversation to launch.
          </h2>
          <p className="text-base text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mt-4">
            Structured like an engineering project. No missed deadlines, no hidden surprises.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="relative">
          {/* Base Background Line */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-200 -z-0" />

          {/* Interactive Growing Gold Line */}
          <div
            className="hidden lg:block absolute top-10 left-12 h-0.5 bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] transition-all duration-700 ease-out -z-0 shadow-[0_0_12px_rgba(245,184,61,0.6)]"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 82}%`,
            }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const isPastOrCurrent = index <= activeStep;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                    activeStep === index
                      ? 'bg-[#12161F] dark:bg-[#12161F] bg-white border-[#F5B83D] shadow-[0_15px_35px_rgba(0,0,0,0.35)] -translate-y-2'
                      : 'bg-[#12161F]/70 dark:bg-[#12161F]/70 bg-white/70 border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 hover:border-[#F5B83D]/40'
                  } border`}
                >
                  {/* Step Indicator Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono-code font-bold text-sm transition-all duration-300 shadow-md ${
                        activeStep === index
                          ? 'bg-[#F5B83D] text-[#0B0E14] scale-110 shadow-[0_0_20px_rgba(245,184,61,0.4)]'
                          : isPastOrCurrent
                          ? 'bg-[#1A1F2B] text-[#FFD27A] border border-[#F5B83D]/40'
                          : 'bg-[#1A1F2B] text-[#9AA3B2] border border-[#1A1F2B]'
                      }`}
                    >
                      {step.number}
                    </div>

                    <span className="text-[11px] font-mono-code text-[#9AA3B2] uppercase">
                      Stage 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-2 group-hover:text-[#F5B83D] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-100 space-y-2">
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#F2F0EA]/70 dark:text-[#F2F0EA]/70 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Hover Indicator */}
                  <div
                    className={`mt-4 h-0.5 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-[#F5B83D] w-full' : 'bg-transparent w-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
