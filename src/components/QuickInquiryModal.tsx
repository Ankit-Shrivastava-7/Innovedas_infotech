import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  prefillRequirement?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  prefillRequirement,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0A1828] border border-[#BFA181]/50 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-xs text-slate-300">
              Thank you, {name}. Our Raipur coordinator will call you shortly on <strong>{phone}</strong> regarding <em>{prefillRequirement || 'your inquiry'}</em>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#178582]/20 text-[#BFA181] text-[10px] font-mono mb-2">
                <Sparkles className="w-3 h-3" />
                Quick Inquiry Dispatch
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {prefillRequirement || "Connect With InnoVedas"}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Leave your number below and our solution mentors will reach out promptly.
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-1">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0F2238] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#BFA181]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Phone / WhatsApp <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0F2238] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F2238] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-1">
                Special Note / City (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Inquiring for CGPSC batch / College workshop in Bilaspur..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#0F2238] border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#BFA181]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Quick Inquiry
              </button>
            </div>
            
            <p className="text-[10px] text-slate-400 text-center">
              Direct connection to InnoVedas Raipur Desk (+91 81031 95321)
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
