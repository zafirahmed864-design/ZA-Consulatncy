import React from 'react';
import { Star, Quote, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'malik-tariq',
      name: 'Malik Tariq Nasir',
      title: 'Managing Director',
      company: 'Nasir Real Estate',
      location: 'Chenab Nagar & Chiniot',
      quote:
        'Zafir engineered our real estate website from the ground up. In Chenab Nagar, traditional property businesses operate almost entirely on offline networks; having a lightning-fast, mobile-optimized portal linked directly to our WhatsApp allowed us to capture serious property investors from Lahore, Islamabad, and overseas Pakistanis across the UK and UAE. His operational understanding of property titles and client trust is second to none.',
      projectScope: 'Full Property Portal & WhatsApp Integration',
      outcomeMetric: '+240% Inbound Inquiries from Overseas Buyers',
      verified: true,
    },
    {
      id: 'dr-harris',
      name: 'Dr. M. Harris',
      title: 'Clinical Practice Associate',
      company: 'Family & Cosmetic Dentistry',
      location: 'Healthcare Concept',
      quote:
        'The digital storefront concept Zafir created for our dental clinic was exceptional. He understood immediately that patient anxiety is the biggest barrier to booking appointments. The design is calming, clear, and makes requesting a consultation completely effortless. Working with someone who takes personal accountability for every single detail was a breath of fresh air.',
      projectScope: 'Healthcare Storefront & Online Booking',
      outcomeMetric: 'Friction-Free Mobile Patient Flow',
      verified: true,
    },
    {
      id: 'ayesha-raza',
      name: 'Ayesha Raza',
      title: 'E-Commerce Operations Lead',
      company: 'Grace Goods Co.',
      location: 'Lahore & Online Retail',
      quote:
        "Zafir's meticulous approach to data entry and operational virtual assistance transformed our store's inventory management. With over 800 product SKUs across multiple spreadsheets, we were constantly battling stock errors. His mechanical engineering discipline brought 100% data accuracy, clean reporting, and gave us our weekends back.",
      projectScope: 'Inventory Scrubbing & Virtual Assistance',
      outcomeMetric: '20+ Hours Saved Weekly & Zero Data Errors',
      verified: true,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0D1017] dark:bg-[#0D1017] bg-slate-50/60">
      {/* Background ambient gold glow */}
      <div
        className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#F5B83D]/6 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
              <span>03. Verified Proof</span>
              <span>·</span>
              <span>Client Testimonials</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
              Trusted by local businesses, practices, and founders.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 max-w-md leading-relaxed">
            Real feedback from commercial clients who value direct communication, reliability, and tangible business outcomes.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-3xl p-8 bg-[#12161F] dark:bg-[#12161F] bg-white border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#F5B83D]/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top gold accent glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5B83D]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#F5B83D]/20 transition-all duration-500" />

              <div>
                {/* 5 Gold Stars & Top Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#F5B83D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B83D]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono-code text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#F2F0EA]/90 dark:text-[#F2F0EA]/90 text-slate-800 leading-relaxed italic mb-8 relative">
                  <Quote className="w-8 h-8 text-[#F5B83D]/15 absolute -top-4 -left-3 -z-0 pointer-events-none" />
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Bottom Card Footer: Outcome Metric & Author Bio */}
              <div>
                {/* Quantified Outcome Highlight */}
                <div className="rounded-xl p-3 bg-[#1A1F2B]/70 dark:bg-[#1A1F2B]/70 bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 mb-6 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5B83D] shrink-0" />
                  <span className="text-xs font-mono-code text-[#FFD27A] font-semibold truncate">
                    {testimonial.outcomeMetric}
                  </span>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1A1F2B] to-[#252B3B] border border-[#F5B83D]/40 flex items-center justify-center font-heading font-bold text-sm text-[#F5B83D] shrink-0">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-heading font-bold text-base text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 leading-tight truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500 font-medium truncate">
                      {testimonial.title} · {testimonial.company}
                    </p>
                    <span className="text-[10px] font-mono-code text-[#F5B83D] block mt-0.5">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
