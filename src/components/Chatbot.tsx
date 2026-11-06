import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot, User, ArrowRight, RefreshCw, CheckCircle2, ChevronDown, Minimize2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  time: string;
}

interface ChatbotProps {
  onSelectService?: (serviceName: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onSelectService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm ZA Assistant, the direct concierge for ZA Consultancy. I can guide you through a multi-step project booking, explain our core services (Website Design, Virtual Assistance), or provide direct estimates. What can I help you build or organize?",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = [
    'Start multi-step booking',
    'Website Design timeline & quote',
    'Virtual Assistance support',
    "Zafir's background in Chiniot",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const modelReply = data.reply || "I'm available to help you arrange your project. You can also chat directly with Zafir on WhatsApp.";

      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: modelReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "I'm having a brief connection issue, but you can message Zafir directly on WhatsApp at +92 316 3370864 for immediate assistance.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'model',
        text: "Conversation reset. Hello! How can ZA Consultancy assist your business today? Ask me anything or let's start a multi-step booking.",
        time: 'Just now',
      },
    ]);
  };

  // Generate WhatsApp booking payload from conversation summary
  const getWhatsAppBookingLink = () => {
    const userQueries = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.text)
      .join(' | ');

    const text = `Hi Zafir, I was using your ZA Studio Assistant on your website and would like to confirm my project booking:\n\nDetails: ${userQueries || 'Project consultation'}\n\nPlease let me know your availability!`;
    return `https://wa.me/923163370864?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#12161F] to-[#1A1F2B] dark:from-[#12161F] dark:to-[#1A1F2B] bg-white border border-[#F5B83D]/50 text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(245,184,61,0.35)] hover:border-[#F5B83D] transition-all duration-300 transform hover:scale-105"
          aria-label="Open AI Concierge Chatbot"
        >
          <div className="relative">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 ring-2 ring-[#0B0E14] animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 ring-2 ring-[#0B0E14]" />
            <div className="w-8 h-8 rounded-xl bg-[#F5B83D]/20 text-[#F5B83D] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-mono-code font-bold tracking-wide uppercase text-[#F5B83D]">
              ZA Concierge
            </span>
            <span className="text-[11px] text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500">
              Multi-Step Booking & Support
            </span>
          </div>
        </button>
      )}

      {/* Main Chat Drawer Modal */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[620px] max-h-[88vh]'
          } rounded-[28px] overflow-hidden bg-[#12161F]/95 dark:bg-[#12161F]/95 bg-white/95 backdrop-blur-2xl border border-[#F5B83D]/40 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col`}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 border-b border-[#252B3B] dark:border-[#252B3B] border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F5B83D] to-[#FFD27A] p-0.5 flex items-center justify-center text-[#0B0E14]">
                <Bot className="w-5 h-5" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -bottom-0.5 -right-0.5 ring-2 ring-[#12161F]" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 flex items-center gap-1.5">
                  <span>ZA Studio Assistant</span>
                  <span className="text-[9px] font-mono-code px-1.5 py-0.2 rounded bg-[#F5B83D]/20 text-[#F5B83D]">
                    AI Active
                  </span>
                </div>
                <div className="text-[11px] font-mono-code text-[#9AA3B2] dark:text-[#9AA3B2] text-slate-500">
                  Context-aware · Multi-step bookings
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9AA3B2] hover:text-[#F2F0EA] hover:bg-[#252B3B] transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9AA3B2] hover:text-[#F2F0EA] hover:bg-[#252B3B] transition-colors"
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <ChevronDown className="w-4 h-4 rotate-180" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9AA3B2] hover:text-[#F2F0EA] hover:bg-[#252B3B] transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* WhatsApp Quick Transcribe Action Bar */}
              <div className="px-4 py-2 bg-[#0B0E14] dark:bg-[#0B0E14] bg-slate-50 border-b border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono-code text-[#9AA3B2] truncate">
                  Ready to lock in your project?
                </span>
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#25D366] hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Zafir</span>
                </a>
              </div>

              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={index}
                      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!isUser && (
                        <div className="w-7 h-7 rounded-lg bg-[#F5B83D]/15 text-[#F5B83D] flex items-center justify-center shrink-0 mt-0.5 border border-[#F5B83D]/30">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                          isUser
                            ? 'bg-gradient-to-r from-[#FFD27A] to-[#F5B83D] text-[#0B0E14] font-medium rounded-tr-none'
                            : 'bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-800 border border-[#252B3B] dark:border-[#252B3B] border-slate-200 rounded-tl-none'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                        <div
                          className={`text-[9px] font-mono-code mt-1 text-right ${
                            isUser ? 'text-[#0B0E14]/60' : 'text-[#9AA3B2]'
                          }`}
                        >
                          {msg.time}
                        </div>
                      </div>

                      {isUser && (
                        <div className="w-7 h-7 rounded-lg bg-[#252B3B] text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F5B83D]/15 text-[#F5B83D] flex items-center justify-center shrink-0 border border-[#F5B83D]/30">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 border border-[#252B3B] rounded-2xl px-4 py-3 text-xs text-[#9AA3B2] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F5B83D] animate-ping" />
                      <span>Thinking and drafting response...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-4 py-2 border-t border-[#1A1F2B] dark:border-[#1A1F2B] border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 hover:bg-[#F5B83D] hover:text-[#0B0E14] text-[11px] font-mono-code text-[#9AA3B2] transition-colors border border-[#252B3B] dark:border-[#252B3B] border-slate-200 shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-[#1A1F2B] dark:bg-[#1A1F2B] bg-slate-100 border-t border-[#252B3B] dark:border-[#252B3B] border-slate-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your project goals or ask a question..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#12161F] dark:bg-[#12161F] bg-white border border-[#252B3B] dark:border-[#252B3B] border-slate-200 text-xs sm:text-sm text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 placeholder-[#9AA3B2]/60 focus:outline-none focus:border-[#F5B83D] transition-colors disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FFD27A] to-[#F5B83D] text-[#0B0E14] flex items-center justify-center font-bold hover:brightness-110 disabled:opacity-40 transition-all shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono-code text-[#9AA3B2]/80">
                  <span>Remembers context · Powered by Gemini</span>
                  <a
                    href="https://wa.me/923163370864"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5B83D] hover:underline"
                  >
                    +92 316 3370864
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
