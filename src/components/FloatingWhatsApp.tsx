import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronRight, Phone } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phoneNumber = "918103195321";

  const prefilledOptions = [
    {
      id: 'vedas',
      titleEn: "Vedas Institute Exam Prep",
      titleHi: "वेदास इंस्टीट्यूट परीक्षा तैयारी",
      msg: "Hi, I want information about Vedas Institute courses.",
      msgHi: "नमस्ते, मुझे वेदास इंस्टीट्यूट के पाठ्यक्रमों के संबंध में जानकारी चाहिए।"
    },
    {
      id: 'workshop',
      titleEn: "Book an AI Workshop",
      titleHi: "AI कार्यशाला बुक करें",
      msg: "Hi, I want to book an AI Workshop for our school / college / organization.",
      msgHi: "नमस्ते, मैं हमारे संस्थान/विद्यालय के लिए AI कार्यशाला बुक करना चाहता हूँ।"
    },
    {
      id: 'kaushal',
      titleEn: "Kaushal AI Regional Skilling",
      titleHi: "कौशल AI क्षेत्रीय कौशल",
      msg: "Hi, I am interested in Kaushal AI micro-learning in regional languages.",
      msgHi: "नमस्ते, मुझे क्षेत्रीय भाषाओं में कौशल AI प्रशिक्षण की जानकारी चाहिए।"
    },
    {
      id: 'agent',
      titleEn: "AI Agent & Government Solutions",
      titleHi: "AI एजेंट एवं शासकीय समाधान",
      msg: "Hi, I want to explore AI Agents and intelligent automation solutions.",
      msgHi: "नमस्ते, मैं AI एजेंट्स और प्रशासनिक ऑटोमेशन के बारे में चर्चा करना चाहता हूँ।"
    },
    {
      id: 'general',
      titleEn: "General Enquiry",
      titleHi: "सामान्य पूछताछ",
      msg: "Hi, I have a general enquiry for InnoVedas EdTech.",
      msgHi: "नमस्ते, मुझे इनोवेदास एडटेक से संबंधित सामान्य जानकारी चाहिए।"
    }
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* QUICK MESSAGE MENU CARD */}
      {isOpen && (
        <div 
          id="whatsapp-menu-card"
          className="mb-3 w-80 sm:w-96 bg-[#0A1828] border border-[#178582]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-[#178582] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">InnoVedas Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Typically replies within an hour
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0A1828]">
            <p className="text-xs text-slate-300">
              {currentLang === 'en' 
                ? "Select a topic or type your message to connect with our Raipur team via WhatsApp:"
                : "व्हाट्सएप पर हमारी टीम से तुरंत जुड़ने के लिए विषय चुनें या अपना संदेश लिखें:"}
            </p>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {prefilledOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSend(currentLang === 'en' ? opt.msg : opt.msgHi)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#0F2238] hover:bg-[#178582]/20 border border-slate-800 hover:border-[#BFA181]/50 text-xs text-slate-200 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="font-medium">
                    {currentLang === 'en' ? opt.titleEn : opt.titleHi}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#BFA181] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder={currentLang === 'en' ? "Type custom query..." : "अपना प्रश्न लिखें..."}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && customMsg.trim()) {
                    handleSend(customMsg);
                  }
                }}
                className="flex-1 bg-[#0F2238] border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#178582]"
              />
              <button
                onClick={() => {
                  if (customMsg.trim()) {
                    handleSend(customMsg);
                  } else {
                    handleSend("Hi InnoVedas team, I would like to know more about your programs.");
                  }
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center transition-all"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>+91 81031 95321 / +91 99815 16838</span>
              <span>Raipur, CG</span>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30"
        aria-label="Contact InnoVedas on WhatsApp"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        
        <span className="font-semibold text-xs sm:text-sm tracking-wide hidden sm:inline">
          {currentLang === 'en' ? "Chat on WhatsApp" : "व्हाट्सएप पर बात करें"}
        </span>

        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
      </button>

    </div>
  );
};
