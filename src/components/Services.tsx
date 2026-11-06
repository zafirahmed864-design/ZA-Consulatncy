import React, { useState } from 'react';
import { Globe, Database, Headphones, TrendingUp, ArrowUpRight, Check, Sparkles, ChevronDown, ChevronUp, Clock, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>('web-design');

  const services: ServiceItem[] = [
    {
      id: 'web-design',
      title: 'Website Design',
      subtitle: 'Digital Front Doors',
      description: 'Bespoke, high-converting websites tailored to local businesses, modern aesthetic, speed & SEO-optimized.',
      benefitsParagraph:
        'A high-performing digital storefront turns casual local lookers into paying customers. Rather than generic templates that lag on mobile networks and bury critical contact buttons, our websites are engineered with bespoke typography, instantaneous loading speeds, and frictionless layouts that instantly validate your commercial authority and funnel buyers straight to your WhatsApp.',
      deliverables: [
        'Custom responsive UI & brand styling',
        'Blazing-fast load times & mobile perfection',
        'Local SEO & Google Maps optimization',
        'Direct WhatsApp chat integration',
      ],
      detailedDeliverables: [
        {
          category: 'Architecture & Design',
          items: [
            'Bespoke visual identity & conversion-focused layout',
            'Full mobile responsiveness tested on iOS & Android devices',
            'Typography hierarchy & custom palette pairing',
          ],
        },
        {
          category: 'Engineering & Integration',
          items: [
            'Zero-dependency clean code with lightning-fast load times',
            'Direct WhatsApp 1-tap booking & inquiry triggers',
            'SSL security certificate & custom domain DNS setup',
          ],
        },
        {
          category: 'Growth & Discoverability',
          items: [
            'Google Search Console indexing & local schema markup',
            'Social media preview cards (OpenGraph & Twitter Cards)',
            'Comprehensive post-launch walkthrough and documentation',
          ],
        },
      ],
      turnaroundTime: '7 to 14 days typical delivery',
      icon: 'globe',
    },
    {
      id: 'virtual-assistance',
      title: 'Virtual Assistance',
      subtitle: 'Operational Lifeline',
      description: 'Dependable daily operational support, client scheduling, CRM updates, and email dispatch.',
      benefitsParagraph:
        'Small business founders waste up to 40% of their working hours wrestling with repetitive scheduling and unanswered customer messages instead of closing deals. With hands-on operational discipline and structured workflow management, Zafir handles your client follow-ups, appointment coordination, and administrative logistics with the precision, tact, and urgency of a dedicated in-house partner.',
      deliverables: [
        'Customer inquiry triage & follow-ups',
        'Calendar & appointment management',
        'Order processing & invoice handling',
        'Daily operational reporting',
      ],
      detailedDeliverables: [
        {
          category: 'Client & Inquiry Care',
          items: [
            'Rapid WhatsApp and email triage during peak business hours',
            'Courteous, professional first-response messaging for new leads',
            'Lead pre-qualification before routing to the business owner',
          ],
        },
        {
          category: 'Administrative Logistics',
          items: [
            'Appointment booking, site inspection scheduling, and calendar sync',
            'Quotation generation, invoice dispatch, and payment reminders',
            'Vendor and supplier follow-ups to maintain project timelines',
          ],
        },
        {
          category: 'Accountability & Reporting',
          items: [
            'Daily evening operational summaries of tasks handled',
            'Open-issue tracking and next-day action prioritization',
            'Flexible monthly retainers with zero long-term lock-in',
          ],
        },
      ],
      turnaroundTime: 'Daily ongoing retainer support',
      icon: 'headphones',
    },

  ];

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F5B83D]/7 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
              <span>01. Core Capabilities</span>
              <span>·</span>
              <span>Detailed Breakdown</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
              Services tailored to how your business actually runs.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 max-w-md leading-relaxed">
            Every service includes a dedicated breakdown of commercial benefits and concrete deliverables executed personally by Zafir.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedCardId === service.id}
              onToggleExpand={() => toggleExpand(service.id)}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onSelectService: (serviceName: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isExpanded,
  onToggleExpand,
  onSelectService,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getIcon = () => {
    const iconClass =
      'w-6 h-6 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110';
    switch (service.icon) {
      case 'globe':
        return <Globe className={iconClass} />;
      case 'database':
        return <Database className={iconClass} />;
      case 'headphones':
        return <Headphones className={iconClass} />;
      case 'trending-up':
        return <TrendingUp className={iconClass} />;
      default:
        return <Globe className={iconClass} />;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl p-7 sm:p-8 transition-all duration-300 bg-[#12161F] dark:bg-[#12161F] bg-white border ${
        isExpanded
          ? 'border-[#F5B83D]/60 shadow-[0_20px_50px_rgba(245,184,61,0.12)]'
          : 'border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200/90 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#F5B83D]/40 hover:-translate-y-1'
      } overflow-hidden flex flex-col justify-between`}
    >
      {/* Gold spotlight glow that follows the mouse cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 184, 61, 0.16), transparent 70%)`
            : '',
        }}
        aria-hidden="true"
      />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 flex items-center justify-center text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-700 group-hover:text-[#0B0E14] group-hover:bg-[#F5B83D] group-hover:border-[#F5B83D] transition-all duration-500 shadow-inner">
              {getIcon()}
            </div>
            <div>
              <span className="text-[11px] font-mono-code text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-400 uppercase tracking-wider block">
                {service.subtitle}
              </span>
              <div className="text-[10px] font-mono-code text-[#F5B83D] flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3" />
                <span>{service.turnaroundTime}</span>
              </div>
            </div>
          </div>

          <span className="text-sm font-mono-code text-[#9AA3B2]/50 dark:text-[#9AA3B2]/50 text-slate-300 group-hover:text-[#F5B83D] transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Title & Core Subtitle */}
        <h3 className="font-heading text-2xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-3 group-hover:text-[#F5B83D] transition-colors">
          {service.title}
        </h3>

        {/* One-line Description */}
        <p className="text-sm text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Benefits Paragraph (Detailed Breakdown) */}
        <div className="rounded-2xl p-4 bg-[#1A1F2B]/60 dark:bg-[#1A1F2B]/60 bg-slate-50 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-[#F5B83D] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Benefit & Impact:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#F2F0EA]/90 dark:text-[#F2F0EA]/90 text-slate-700 leading-relaxed">
            {service.benefitsParagraph}
          </p>
        </div>

        {/* Quick Deliverables Highlights */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono-code text-[#9AA3B2] uppercase tracking-wider">
            Primary Deliverables:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs font-medium text-[#F2F0EA]/80 dark:text-[#F2F0EA]/80 text-slate-700"
              >
                <Check className="w-3.5 h-3.5 text-[#F5B83D] shrink-0 mt-0.5" />
                <span className="leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Expandable Section for Detailed Deliverables */}
        {isExpanded && (
          <div className="pt-5 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 space-y-4 mb-6 transition-all duration-300">
            <div className="text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider font-semibold">
              Full Breakdown & Phased Outputs:
            </div>
            
            <div className="space-y-4">
              {service.detailedDeliverables.map((cat, cIdx) => (
                <div key={cIdx} className="rounded-xl p-3.5 bg-[#0B0E14]/60 dark:bg-[#0B0E14]/60 bg-white border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 text-xs">
                  <div className="font-heading font-bold text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-2 text-[#FFD27A]">
                    {cat.category}
                  </div>
                  <ul className="space-y-1.5 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600">
                    {cat.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-1.5">
                        <span className="text-[#F5B83D] font-mono-code">›</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Expand toggle + Select Action */}
      <div className="pt-4 border-t border-[#1A1F2B]/50 dark:border-[#1A1F2B]/50 border-slate-100 flex items-center justify-between gap-3">
        {/* Toggle Detailed Breakdown Button */}
        <button
          type="button"
          onClick={onToggleExpand}
          className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#9AA3B2] hover:text-[#F5B83D] transition-colors py-1"
        >
          <span>{isExpanded ? 'Collapse breakdown' : 'View full breakdown'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Inquire Button */}
        <button
          type="button"
          onClick={() => {
            onSelectService(service.title);
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] to-[#F5B83D] hover:brightness-110 shadow-sm transition-all transform hover:-translate-y-0.5"
        >
          <span>Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
