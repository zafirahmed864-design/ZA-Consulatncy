import React from 'react';
import { UserCheck, MapPin, Briefcase, GraduationCap, Award, Shield, CheckCircle, Clock } from 'lucide-react';
import { FactItem } from '../types';

export const About: React.FC = () => {
  const facts: FactItem[] = [
    {
      label: 'Founder & Developer',
      value: 'Zafir Ahmed',
      detail: 'Personal execution & direct communication on every deliverable',
    },
    {
      label: 'Base',
      value: 'Chiniot, Punjab, Pakistan',
      detail: 'Serving local businesses across Punjab and international clients',
    },
    {
      label: 'Specialization',
      value: 'Full-Stack Web Development',
      detail: 'Modern responsive layouts, speed optimization & direct conversion funnels',
    },
    {
      label: 'Web Developer Trainings',
      value: 'Certified Modern Web Engineering',
      detail: 'Frontend architecture, TypeScript/React systems, UI/UX engineering & web performance',
    },
  ];

  const pillars = [
    {
      title: 'Direct Accountability',
      desc: 'No account managers, ticket queues, or outsourced sub-contractors. You speak directly with the developer.',
      icon: UserCheck,
    },
    {
      title: 'Web Engineering Rigor',
      desc: 'Trained in modern web standards, responsive design systems, and mobile-first performance.',
      icon: GraduationCap,
    },
    {
      title: 'Obsessive Workmanship',
      desc: 'Clean semantic markup, zero bloat, high-speed load times, and rock-solid mobile responsiveness.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-[#F5B83D]/6 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
            <span>03. The Operator</span>
            <span>·</span>
            <span>Philosophy & Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
            One person who answers your messages.
          </h2>
        </div>

        {/* 2-Column Split: Story & Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 leading-relaxed text-base sm:text-lg">
            <p className="text-xl sm:text-2xl font-medium text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 leading-snug">
              "Most agencies fail small businesses because the person selling you the service isn’t the person doing the work."
            </p>

            <p>
              I am Zafir Ahmed, a dedicated web developer based in Chiniot, Pakistan. Having completed intensive web developer trainings in modern frontend architectures, responsive design systems, and performant web technologies, I build digital presences tailored to real-world business needs.
            </p>

            <p>
              That technical rigor changes how I build digital solutions. I don't design flashy websites that look pretty but don't convert; I build clean, ultra-fast websites and provide dependable virtual assistance that gets your phone ringing, streamlines client communication, and makes your brand look world-class.
            </p>

            <p>
              Whether you need a bespoke website or dedicated virtual assistance, you get my direct phone number, transparent timelines, and personal pride in every single detail.
            </p>

            {/* 3 Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="rounded-xl p-4 bg-[#12161F] dark:bg-[#12161F] bg-white border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200">
                    <Icon className="w-5 h-5 text-[#F5B83D] mb-2" />
                    <h4 className="font-heading font-bold text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Facts Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-[#12161F] dark:bg-[#12161F] bg-white border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 shadow-xl relative overflow-hidden">
              
              {/* Corner Gold Accent Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5B83D]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 mb-6">
                <span className="font-mono-code text-xs text-[#F5B83D] uppercase tracking-wider font-semibold">
                  Founder Verification
                </span>
                <span className="text-xs font-mono-code text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Direct Contact
                </span>
              </div>

              <div className="space-y-6">
                {facts.map((fact, idx) => (
                  <div key={idx} className="group">
                    <div className="text-xs font-mono-code text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-400 uppercase tracking-wider mb-1">
                      {fact.label}
                    </div>
                    <div className="font-heading text-lg font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 group-hover:text-[#F5B83D] transition-colors">
                      {fact.value}
                    </div>
                    {fact.detail && (
                      <div className="text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500 mt-1 leading-normal">
                        {fact.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Guarantee Badge */}
              <div className="mt-8 pt-6 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B83D]/15 text-[#F5B83D] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900">
                    The ZA Quality Guarantee
                  </div>
                  <div className="text-[11px] text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500">
                    Zero guesswork. We review every milestone together before launch.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
