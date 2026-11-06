import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Copy, Check, Send, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { ServiceType } from '../types';

interface ContactProps {
  selectedService: string;
  onSelectService: (service: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedService, onSelectService }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [clientName, setClientName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const services: ServiceType[] = [
    'Website Design',
    'Virtual Assistance',
  ];

  const phoneNumber = '+92 316 3370864';
  const emailAddress = 'zafir.webstudio@gmail.com';

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  // Generate dynamic prefilled WhatsApp message based on selected service and user inputs
  const getWhatsAppMessage = () => {
    let msg = `Hi Zafir, I am interested in ${selectedService || 'your services'} for my business.`;
    if (clientName.trim()) {
      msg += ` My name is ${clientName.trim()}.`;
    }
    if (businessType.trim()) {
      msg += ` Business: ${businessType.trim()}.`;
    }
    if (customMessage.trim()) {
      msg += ` Note: ${customMessage.trim()}`;
    }
    return encodeURIComponent(msg);
  };

  const whatsAppUrl = `https://wa.me/923163370864?text=${getWhatsAppMessage()}`;

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedService || 'Consultancy'} - ZA Consultancy`
  )}&body=${encodeURIComponent(
    `Hi Zafir,\n\nI would like to discuss ${selectedService || 'a project'} for my business.\n\nName: ${
      clientName || 'N/A'
    }\nBusiness: ${businessType || 'N/A'}\nDetails: ${customMessage || 'Looking forward to hearing from you.'}\n\nBest regards,`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial gold glow behind the card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5B83D]/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3">
            <span>05. Direct Line</span>
            <span>·</span>
            <span>Start a Conversation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 tracking-tight text-balance">
            Let's build your digital presence.
          </h2>
          <p className="text-base text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 mt-4">
            Select a service below to generate your direct message. Expect a prompt, thoughtful reply from Zafir within a few hours.
          </p>
        </div>

        {/* Large Rounded Contact Card with Golden Glow */}
        <div className="relative rounded-[32px] p-6 sm:p-10 lg:p-12 bg-[#12161F] dark:bg-[#12161F] bg-white border border-[#F5B83D]/30 dark:border-[#F5B83D]/30 border-slate-200 shadow-[0_0_60px_rgba(245,184,61,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Interactive Column: Service Chips & Message Composer */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <label className="block text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3 font-semibold">
                  1. Select What You Need:
                </label>
                
                {/* Service Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-lg">
                  {services.map((service) => {
                    const isSelected = selectedService === service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => onSelectService(service)}
                        className={`px-3.5 py-3 rounded-xl text-xs font-semibold font-mono-code transition-all duration-200 text-center flex flex-col items-center justify-center gap-1 border ${
                          isSelected
                            ? 'bg-[#F5B83D] text-[#0B0E14] border-[#F5B83D] shadow-[0_0_20px_rgba(245,184,61,0.35)] scale-[1.02]'
                            : 'bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-700 border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 hover:border-[#F5B83D]/50 hover:text-[#F2F0EA]'
                        }`}
                      >
                        <span>{service}</span>
                        {isSelected && <span className="text-[10px] font-bold">✓ Selected</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Optional Client Information Fields */}
                <label className="block text-xs font-mono-code text-[#F5B83D] uppercase tracking-wider mb-3 font-semibold">
                  2. Tell Us About Your Business (Optional):
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name (e.g. Tariq)"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 placeholder-[#9AA3B2]/50 focus:outline-none focus:border-[#F5B83D] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Business type (e.g. Dental Clinic)"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 placeholder-[#9AA3B2]/50 focus:outline-none focus:border-[#F5B83D] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you'd like done or any specific questions..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 placeholder-[#9AA3B2]/50 focus:outline-none focus:border-[#F5B83D] transition-colors resize-none"
                  />
                </div>

                {/* Live Message Preview */}
                <div className="p-3.5 rounded-xl bg-[#0B0E14] dark:bg-[#0B0E14] bg-slate-100 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 text-xs font-mono-code mb-8">
                  <span className="text-[#9AA3B2]">Pre-filled WhatsApp message:</span>
                  <div className="text-[#F5B83D] mt-1 break-words">
                    "{decodeURIComponent(getWhatsAppMessage())}"
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp and Email */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Primary WhatsApp CTA */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden text-sm font-mono-code font-bold uppercase tracking-wider text-[#0B0E14] bg-gradient-to-r from-[#FFD27A] via-[#F5B83D] to-[#E9A21F] hover:brightness-110 shadow-[0_10px_30px_rgba(245,184,61,0.3)] hover:shadow-[0_15px_40px_rgba(245,184,61,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                  <MessageCircle className="w-5 h-5 text-[#0B0E14] fill-current" />
                  <span>Message on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Direct Email CTA */}
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-mono-code font-semibold uppercase tracking-wider text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 hover:bg-[#252B3B] dark:hover:bg-[#252B3B] hover:bg-slate-200 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F5B83D]" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Right Information Column: Visible Phone, Email with Copy Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 mb-2">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600 leading-relaxed">
                    No ticketing systems. Reach out directly via WhatsApp, phone, or email.
                  </p>
                </div>

                {/* Visible Phone with Copy Button */}
                <div className="rounded-2xl p-4 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#12161F] dark:bg-[#12161F] bg-white flex items-center justify-center text-[#F5B83D] shrink-0 border border-slate-800 dark:border-slate-800 border-slate-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono-code text-[#9AA3B2] uppercase tracking-wider">
                        Phone & WhatsApp
                      </div>
                      <div className="font-mono-code font-bold text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900">
                        {phoneNumber}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phoneNumber, 'phone')}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-1.5 bg-[#12161F] dark:bg-[#12161F] bg-white hover:bg-[#F5B83D] hover:text-[#0B0E14] text-[#9AA3B2] transition-colors border border-slate-800 dark:border-slate-800 border-slate-200"
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Visible Email with Copy Button */}
                <div className="rounded-2xl p-4 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-50 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#12161F] dark:bg-[#12161F] bg-white flex items-center justify-center text-[#F5B83D] shrink-0 border border-slate-800 dark:border-slate-800 border-slate-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono-code text-[#9AA3B2] uppercase tracking-wider">
                        Direct Email
                      </div>
                      <div className="font-mono-code font-bold text-xs sm:text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 truncate">
                        {emailAddress}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(emailAddress, 'email')}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-1.5 bg-[#12161F] dark:bg-[#12161F] bg-white hover:bg-[#F5B83D] hover:text-[#0B0E14] text-[#9AA3B2] transition-colors border border-slate-800 dark:border-slate-800 border-slate-200 shrink-0 ml-2"
                    title="Copy email address"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location & Response Guarantees */}
                <div className="rounded-2xl p-5 bg-[#0B0E14]/70 dark:bg-[#0B0E14]/70 bg-slate-100 border border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600">
                    <MapPin className="w-4 h-4 text-[#F5B83D] shrink-0 mt-0.5" />
                    <span>Based in Chiniot & Chenab Nagar, Punjab, Pakistan. Serving businesses worldwide.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-600">
                    <Clock className="w-4 h-4 text-[#F5B83D] shrink-0" />
                    <span>Typical reply window: Under 3 hours (PKT / UTC+5).</span>
                  </div>
                </div>

              </div>

              {/* Reassurance Notice */}
              <div className="mt-6 pt-4 text-center">
                <span className="text-[11px] font-mono-code text-[#9AA3B2]/80 dark:text-[#9AA3B2]/80 text-slate-500">
                  100% confidential · No sales spam · Honest advice
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
