import React, { useState, useRef } from 'react';
import { ExternalLink, ArrowUpRight, Search, MapPin, Building, Sparkles, ShieldCheck, Calendar, Clock, Star, Utensils, Flame, Percent } from 'lucide-react';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 'nasir-real-estate',
      title: 'Nasir Real Estate',
      url: 'https://nasirrealestate.netlify.app',
      category: 'Real Estate Platform · Commercial & Residential',
      tagline: 'Property website for houses, plots and commercial property in Chenab Nagar and Chiniot.',
      description:
        'A comprehensive digital property portal engineered specifically for the Chenab Nagar & Chiniot property markets. Built with instant filterable listings, WhatsApp inquiry hooks, interactive plot maps, and optimized for mobile buyers.',
      features: [
        'Residential plots, commercial markets, and built houses',
        'Direct 1-tap WhatsApp consultation for overseas & local buyers',
        'Chenab Nagar & Chiniot local sector-based directory',
        'Ultra-fast Netlify static delivery with zero lag',
      ],
      highlights: ['Chenab Nagar Real Estate', 'Plots & Houses', 'WhatsApp Inquiries', 'Mobile-First'],
      previewType: 'real-estate',
    },
    {
      id: 'michael-salazar-dds',
      title: 'Michael Salazar, DDS',
      url: 'https://michealsalazardentist.netlify.app',
      category: 'Healthcare & Dental Practice · Concept',
      tagline: 'Family and cosmetic dentist website, concept project.',
      description:
        'A soothing, clinical-grade digital storefront designed to convert apprehensive patients into scheduled appointments. Highlights gentle dentistry, cosmetic veneers, transparent insurance guidance, and friction-free appointment requests.',
      features: [
        'Calming aesthetic designed to reduce patient anxiety',
        'Treatment portfolio: Invisalign, whitening, implants & checkups',
        'Online appointment request flow with immediate confirmation',
        'Patient reviews & verified credentials showcase',
      ],
      highlights: ['Cosmetic Dentistry', 'Online Booking', 'Patient Portal', 'High Conversion'],
      previewType: 'dental',
    },
    {
      id: 'supermeal-pk',
      title: 'SuperMeal.pk',
      url: 'https://www.supermeal.pk/',
      category: 'Food Delivery & Restaurant Marketplace · Pakistan',
      tagline: 'Nationwide online food ordering, takeaway portal, and restaurant discovery across Pakistan.',
      description:
        'A high-volume online food discovery and ordering portal connecting diners with top local restaurants across Lahore, Karachi, Islamabad, Rawalpindi, and Faisalabad. Engineered for instant menu browsing, deals, and friction-free mobile ordering.',
      features: [
        'Nationwide restaurant discovery across major metropolitan cities in Pakistan',
        'Cuisine categories: Biryani, Karahi, Burgers, Pizza, and Desi specialties',
        'Real-time promo deals, restaurant discounts, and customer checkout flows',
        'Direct mobile food ordering with streamlined restaurant dispatch',
      ],
      highlights: ['Food Ordering Platform', 'Restaurant Marketplace', 'Pakistan Nationwide', 'Mobile E-Commerce'],
      previewType: 'food-delivery',
    },
  ];



  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#F5B83D]/8 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
            <span>02. Selected Portfolio</span>
            <span>·</span>
            <span>Live Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
            Real websites engineered to build trust and capture clients.
          </h2>
          <p className="text-base text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mt-4 max-w-2xl">
            Hover over any project mockup to preview the full page scroll in 3D. Every project is built for real commercial utility.
          </p>
        </div>

        {/* 2 Large Alternating Project Cards */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} isReversed={index % 2 !== 0} />
          ))}
        </div>



      </div>
    </section>
  );
};

interface ProjectRowProps {
  project: ProjectItem;
  isReversed: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, isReversed }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Project Details Column */}
      <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] font-medium mb-3">
          <span>{project.category}</span>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-4 tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base font-medium text-[#F5B83D] mb-4">
          {project.tagline}
        </p>

        <p className="text-sm text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight Pills that change color on hover */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.highlights.map((h, i) => (
            <span
              key={i}
              className="text-xs font-mono-code px-3 py-1 rounded-lg bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-700 hover:text-[#0B0E14] hover:bg-[#F5B83D] hover:border-[#F5B83D] transition-all duration-200 cursor-default"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Visit Website Button */}
        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] hover:brightness-110 shadow-[0_10px_25px_rgba(245,184,61,0.25)] hover:shadow-[0_15px_30px_rgba(245,184,61,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Visit website</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 3D Tilting Browser Window Column */}
      <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <InteractiveBrowserMockup project={project} />
      </div>
    </div>
  );
};

interface InteractiveBrowserMockupProps {
  project: ProjectItem;
}

const InteractiveBrowserMockup: React.FC<InteractiveBrowserMockupProps> = ({ project }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalised from -1 to 1
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    // Subtle 3D tilt
    setTilt({
      rotateX: -yPercent * 6,
      rotateY: xPercent * 6,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
    >
      {/* Background Golden Glow when hovered */}
      <div
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#F5B83D]/25 via-[#FFD27A]/15 to-[#F5B83D]/20 blur-2xl transition-opacity duration-700 pointer-events-none -z-10 ${
          isHovered ? 'opacity-100' : 'opacity-30'
        }`}
      />

      {/* Browser Window Wrapper */}
      <div
        className="rounded-2xl overflow-hidden bg-[#12161F] dark:bg-[#12161F] bg-slate-900 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-700 shadow-[0_25px_50px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${
            isHovered ? 'scale(1.02)' : 'scale(1)'
          }`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Browser Top Chrome Header */}
        <div className="bg-[#1A1F2B] px-4 py-3 flex items-center justify-between border-b border-[#252B3B]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-md mx-4 px-3 py-1 rounded-md bg-[#12161F] text-slate-300 flex items-center gap-2 text-[11px] font-mono-code border border-[#252B3B]/60 truncate">
            <span className="text-emerald-400 font-bold">https://</span>
            <span className="truncate text-slate-200">{project.url.replace('https://', '')}</span>
          </div>

          <div className="text-[11px] font-mono-code text-[#F5B83D] flex items-center gap-1">
            <span className="hidden sm:inline">Hover to scroll</span>
            <span className="text-xs">↕</span>
          </div>
        </div>

        {/* Browser Viewport with Interactive Scroll on Hover */}
        <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-[#0E121A] text-slate-100">
          
          <div
            className="w-full transition-transform duration-[3800ms] ease-in-out"
            style={{
              transform: isHovered ? 'translateY(calc(-100% + 340px))' : 'translateY(0)',
            }}
          >
            {project.previewType === 'real-estate' ? (
              <RealEstateMockupContent />
            ) : project.previewType === 'food-delivery' ? (
              <FoodDeliveryMockupContent />
            ) : (
              <DentalMockupContent />
            )}
          </div>

          {/* Interactive Hover Prompt Pill */}
          <div
            className={`absolute bottom-4 right-4 backdrop-blur-md bg-black/75 text-xs font-mono-code text-[#FFD27A] px-3.5 py-1.5 rounded-full border border-[#F5B83D]/40 pointer-events-none transition-opacity duration-300 flex items-center gap-1.5 shadow-lg ${
              isHovered ? 'opacity-0' : 'opacity-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#F5B83D] animate-ping" />
            <span>Hover to preview full scroll</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* High Fidelity In-Browser Mockup for Nasir Real Estate */
const RealEstateMockupContent: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Mini Brand Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#F5B83D] text-[#0B0E14] font-bold font-heading flex items-center justify-center text-sm">
            NR
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white">Nasir Real Estate</div>
            <div className="text-[10px] text-slate-400 font-mono-code">Chenab Nagar & Chiniot</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#F5B83D]/15 text-[#F5B83D] text-[10px] font-mono-code font-bold">
          Verified Listings
        </div>
      </div>

      {/* Hero Search Banner */}
      <div className="rounded-xl bg-gradient-to-r from-slate-900 to-[#12161F] p-6 border border-slate-800 text-left">
        <span className="text-[10px] font-mono-code text-[#F5B83D] tracking-widest uppercase">
          Premier Property Consultants
        </span>
        <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
          Find Houses, Plots & Commercial Real Estate in Chenab Nagar
        </h4>
        <p className="text-xs text-slate-400 mb-4">
          Trusted real estate guidance, clear property titles, and direct developer deals.
        </p>

        {/* Search Bar */}
        <div className="grid grid-cols-3 gap-2 bg-[#0B0E14] p-2 rounded-lg border border-slate-700 text-xs text-slate-300">
          <div className="flex items-center gap-1 px-2 border-r border-slate-800">
            <Building className="w-3 h-3 text-[#F5B83D]" />
            <span className="truncate">5 Marla / 10 Marla</span>
          </div>
          <div className="flex items-center gap-1 px-2 border-r border-slate-800">
            <MapPin className="w-3 h-3 text-[#F5B83D]" />
            <span className="truncate">Darul Yaman / Sadar</span>
          </div>
          <div className="bg-[#F5B83D] text-[#0B0E14] font-bold rounded flex items-center justify-center text-[10px] py-1 font-mono-code">
            Search
          </div>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-3 text-xs font-mono-code text-slate-400">
          <span>Featured Properties</span>
          <span className="text-[#F5B83D]">Chenab Nagar, Punjab</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#1A1F2B] p-3 border border-slate-800 text-left">
            <div className="h-24 rounded-lg bg-gradient-to-br from-amber-900/40 to-slate-800 flex items-center justify-center text-xs text-[#F5B83D] font-mono-code mb-2">
              Modern 1 Kanal House
            </div>
            <div className="font-bold text-xs text-white">Luxury House - Ahmad Nagar</div>
            <div className="text-[11px] text-[#F5B83D] font-mono-code font-bold mt-1">PKR 3.5 Crore</div>
            <div className="text-[10px] text-slate-400 mt-1">5 Bed · 6 Bath · Double Storey</div>
          </div>

          <div className="rounded-xl bg-[#1A1F2B] p-3 border border-slate-800 text-left">
            <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center text-xs text-emerald-400 font-mono-code mb-2">
              10 Marla Commercial Plot
            </div>
            <div className="font-bold text-xs text-white">Main Bazar Chenab Nagar</div>
            <div className="text-[11px] text-[#F5B83D] font-mono-code font-bold mt-1">PKR 1.8 Crore</div>
            <div className="text-[10px] text-slate-400 mt-1">Prime Location · Commercial Corner</div>
          </div>
        </div>
      </div>

      {/* Why Choose Nasir Real Estate Strip */}
      <div className="rounded-xl bg-[#161B26] p-4 border border-slate-800 text-left text-xs">
        <div className="font-bold text-white mb-2 font-heading">Direct Client Assistance</div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Engineered by Zafir Ahmed for Nasir Real Estate, providing online property discovery, transparent property verification, and direct WhatsApp consultations.
        </p>
      </div>

      {/* Contact Footer In-Mockup */}
      <div className="text-center py-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono-code">
        nasirrealestate.netlify.app · Chenab Nagar & Chiniot
      </div>
    </div>
  );
};

/* High Fidelity In-Browser Mockup for Michael Salazar DDS */
const DentalMockupContent: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Mini Brand Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-bold font-heading flex items-center justify-center text-sm">
            MS
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white">Michael Salazar, DDS</div>
            <div className="text-[10px] text-teal-400 font-mono-code">Family & Cosmetic Dentistry</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-mono-code font-bold">
          Accepting Patients
        </div>
      </div>

      {/* Hero Dental Banner */}
      <div className="rounded-xl bg-gradient-to-r from-teal-950/60 to-slate-900 p-6 border border-teal-900/40 text-left">
        <span className="text-[10px] font-mono-code text-teal-400 tracking-widest uppercase">
          Gentle, Modern Dental Care
        </span>
        <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
          Experience Gentle Family & Aesthetic Dentistry
        </h4>
        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          State-of-the-art restorative dental procedures, digital smile design, and anxiety-free visits.
        </p>

        {/* Quick Booking Strip */}
        <div className="flex items-center gap-3">
          <div className="bg-teal-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            <span>Book Consultation</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono-code">Same-day emergency visits</span>
        </div>
      </div>

      {/* Dental Services 3-Pillar Grid */}
      <div className="grid grid-cols-3 gap-2 text-left">
        <div className="rounded-xl bg-[#161B26] p-3 border border-slate-800">
          <div className="text-teal-400 mb-1 font-mono-code text-[11px] font-bold">01. Restorative</div>
          <div className="font-bold text-xs text-white">Dental Implants</div>
          <div className="text-[10px] text-slate-400 mt-1">Permanent, natural tooth replacement.</div>
        </div>

        <div className="rounded-xl bg-[#161B26] p-3 border border-slate-800">
          <div className="text-teal-400 mb-1 font-mono-code text-[11px] font-bold">02. Aesthetic</div>
          <div className="font-bold text-xs text-white">Porcelain Veneers</div>
          <div className="text-[10px] text-slate-400 mt-1">Custom crafted smile makeovers.</div>
        </div>

        <div className="rounded-xl bg-[#161B26] p-3 border border-slate-800">
          <div className="text-teal-400 mb-1 font-mono-code text-[11px] font-bold">03. Ortho</div>
          <div className="font-bold text-xs text-white">Clear Aligners</div>
          <div className="text-[10px] text-slate-400 mt-1">Invisible, modern teeth straightening.</div>
        </div>
      </div>

      {/* Patient Testimonial Strip */}
      <div className="rounded-xl bg-[#12161F] p-4 border border-slate-800 text-left">
        <div className="flex items-center gap-1 text-[#F5B83D] mb-1">
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
          <Star className="w-3 h-3 fill-current" />
        </div>
        <p className="text-xs text-slate-300 italic">
          "The gentlest dentist I have ever had. The entire clinic runs seamlessly."
        </p>
        <div className="text-[10px] text-slate-500 font-mono-code mt-1">— Verified Patient Review</div>
      </div>

      {/* Footer In-Mockup */}
      <div className="text-center py-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono-code">
        michealsalazardentist.netlify.app · Concept Prototype
      </div>
    </div>
  );
};

/* High Fidelity In-Browser Mockup for SuperMeal.pk */
const FoodDeliveryMockupContent: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Mini Brand Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 text-white font-bold font-heading flex items-center justify-center text-sm shadow-md">
            <Utensils className="w-4 h-4" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
              <span>SuperMeal.pk</span>
              <span className="text-[9px] font-mono-code px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-400 font-bold">
                Pakistan
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono-code">Online Food & Restaurant Takeaway</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono-code text-[#F5B83D] bg-[#F5B83D]/10 px-2.5 py-1 rounded-full border border-[#F5B83D]/30">
          <MapPin className="w-3 h-3" />
          <span>Lahore · Karachi · Islamabad</span>
        </div>
      </div>

      {/* Hero Food Search Banner */}
      <div className="rounded-xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-[#12161F] p-5 border border-rose-900/40 text-left">
        <span className="text-[10px] font-mono-code text-rose-400 tracking-widest uppercase flex items-center gap-1">
          <Flame className="w-3 h-3 text-rose-400" />
          Fast Takeaway & Delivery Across Pakistan
        </span>
        <h4 className="font-heading text-lg sm:text-xl font-bold text-white mt-1 mb-2">
          Craving Delicious Food? Order from 1,000+ Restaurants
        </h4>
        <p className="text-xs text-slate-300 mb-3">
          Find top Biryani, Karahi, Burgers, and Pizza deals delivered hot to your doorstep.
        </p>

        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-[#0B0E14] p-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
          <div className="flex-1 flex items-center gap-2 px-2">
            <Search className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="text-slate-400 truncate text-[11px]">
              Search dishes, cuisines, or restaurants...
            </span>
          </div>
          <div className="bg-gradient-to-r from-rose-600 to-amber-500 text-white font-bold px-3 py-1.5 rounded text-[10px] font-mono-code shrink-0">
            Find Food
          </div>
        </div>
      </div>

      {/* Cuisine Quick Tags */}
      <div>
        <div className="flex items-center justify-between mb-2 text-xs font-mono-code text-slate-400">
          <span>Popular Cuisines</span>
          <span className="text-rose-400 text-[11px]">Explore All</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-[11px] font-mono-code">
          <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-semibold shrink-0">
            🔥 Biryani & Rice
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1A1F2B] text-slate-300 border border-slate-800 shrink-0">
            🍔 Burgers & Fast Food
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1A1F2B] text-slate-300 border border-slate-800 shrink-0">
            🍕 Cheesy Pizza
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1A1F2B] text-slate-300 border border-slate-800 shrink-0">
            🥘 Desi Karahi & BBQ
          </span>
        </div>
      </div>

      {/* Featured Restaurant Cards */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
          <span>Top Rated In Pakistan</span>
          <span className="text-[#F5B83D]">Fast Delivery</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#161B26] p-3 border border-slate-800 text-left">
            <div className="h-20 rounded-lg bg-gradient-to-br from-amber-900/40 to-slate-800 flex items-center justify-center text-xs text-[#FFD27A] font-mono-code mb-2">
              Royal Shinwari & Karahi
            </div>
            <div className="font-bold text-xs text-white truncate">Royal Shinwari BBQ</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Mutton Karahi · Dumba Tikka</div>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] font-mono-code">
              <span className="text-[#F5B83D] flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-current" /> 4.9
              </span>
              <span className="text-slate-400">30-40 min</span>
            </div>
          </div>

          <div className="rounded-xl bg-[#161B26] p-3 border border-slate-800 text-left">
            <div className="h-20 rounded-lg bg-gradient-to-br from-rose-900/40 to-slate-800 flex items-center justify-center text-xs text-rose-300 font-mono-code mb-2">
              The Smash Burger Lab
            </div>
            <div className="font-bold text-xs text-white truncate">The Burger Lab</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Beef Smash · Crispy Chicken</div>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] font-mono-code">
              <span className="text-[#F5B83D] flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-current" /> 4.8
              </span>
              <span className="text-emerald-400 font-bold">20% OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Deal Banner */}
      <div className="rounded-xl p-3 bg-gradient-to-r from-amber-950/40 to-[#161B26] border border-amber-900/40 flex items-center justify-between text-xs text-left">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#F5B83D]/20 text-[#F5B83D] flex items-center justify-center shrink-0">
            <Percent className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-bold text-white text-[11px]">Save up to 30% with SuperMeal Deals</div>
            <div className="text-[10px] text-slate-400">Apply voucher at checkout</div>
          </div>
        </div>
        <span className="text-[10px] font-mono-code text-[#F5B83D] font-bold">SUPER30</span>
      </div>

      {/* Footer In-Mockup */}
      <div className="text-center py-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono-code">
        supermeal.pk · Pakistan's Online Food & Restaurant Takeaway Platform
      </div>
    </div>
  );
};
