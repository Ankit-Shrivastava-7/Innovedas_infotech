import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Sparkles, Building, User, Navigation 
} from 'lucide-react';
import { Language, ContactInquiry } from '../types';
import { translations } from '../data/translations';

interface ContactPageProps {
  currentLang: Language;
  prefillRequirement?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  prefillRequirement,
}) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    organization: '',
    designation: '',
    phone: '',
    email: '',
    cityState: '',
    requirementType: prefillRequirement || 'General Enquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillRequirement) {
      setFormData(prev => ({ ...prev, requirementType: prefillRequirement }));
    }
  }, [prefillRequirement]);

  const requirementOptions = [
    "Vedas Institute (Exam Prep)",
    "Kaushal AI (Vernacular Skilling)",
    "AI Workshop (Schools / Colleges / Corporates)",
    "Government Training & AI Solutions",
    "School Program",
    "College Program",
    "Digital Marketing",
    "AI Agent Development",
    "Partnership / MoU",
    "Incubation & Entrepreneurship",
    "General Enquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
            Direct Communication
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            {currentLang === 'en' ? "Get in Touch With InnoVedas" : "इनोवेदास से संपर्क करें"}
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? "Whether you are a student aspiring for state civil services, an institution seeking AI capacity building, or a government officer exploring intelligent administrative assistants, we look forward to speaking with you."
              : "चाहे आप सिविल सेवा परीक्षा की तैयारी कर रहे हों, अपने कॉलेज में AI कार्यशाला आयोजित करना चाहते हों, अथवा प्रशासनिक ऑटोमेशन पर विचार कर रहे हों, हमारी टीम आपसे संवाद हेतु तत्पर है।"}
          </p>
        </div>

        {/* MAIN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Headquarters Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#0F2238] border border-[#178582]/30 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase text-[#BFA181] block mb-1">
                  Registered Headquarters
                </span>
                <h3 className="text-xl font-bold text-white">
                  InnoVedas EdTech Pvt. Ltd.
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A1828] border border-slate-700 flex items-center justify-center text-[#BFA181] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Office & Classroom Center</strong>
                    <span>B 442, Priyadarshini Nagar, Raipur 492001, Chhattisgarh, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A1828] border border-slate-700 flex items-center justify-center text-[#178582] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Direct Helpline / WhatsApp</strong>
                    <a href="tel:+918103195321" className="hover:text-[#BFA181] block">
                      +91 81031 95321
                    </a>
                    <a href="tel:+919981516838" className="hover:text-[#BFA181] block">
                      +91 99815 16838
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A1828] border border-slate-700 flex items-center justify-center text-[#178582] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Official Email</strong>
                    <a href="mailto:teamofvedas@gmail.com" className="hover:text-[#BFA181] block">
                      teamofvedas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A1828] border border-slate-700 flex items-center justify-center text-[#BFA181] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Working Hours</strong>
                    <span>Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Founder Direct Connect badge */}
              <div className="p-4 rounded-xl bg-[#0A1828] border border-slate-800 text-[11px] text-slate-300">
                <span className="text-[#BFA181] font-semibold block">Institutional & State Leadership:</span>
                Direct meetings with Mr. Arrif Khhaan (CEO) or Mrs. Komal Vyas Sharma (CEO) can be coordinated for university vice-chancellors and government department heads.
              </div>
            </div>

            {/* LOCATION MAP PLACEHOLDER */}
            <div className="p-6 rounded-3xl bg-[#0F2238] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#BFA181]">
                  Location Map Preview
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Raipur 492001
                </span>
              </div>

              <div className="w-full h-48 rounded-2xl bg-[#06111D] border border-slate-800 relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#178582]/20 border border-[#178582] flex items-center justify-center text-[#BFA181] mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-white">InnoVedas & Vedas Institute</p>
                <p className="text-[11px] text-slate-400">B 442, Priyadarshini Nagar, Raipur, Chhattisgarh</p>
                
                <a 
                  href="https://maps.google.com/?q=Priyadarshini+Nagar+Raipur+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582] hover:bg-[#116563] text-white text-[11px] font-semibold transition-all"
                >
                  <Navigation className="w-3 h-3" />
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F2238] border border-[#178582]/30 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your enquiry regarding <strong>{formData.requirementType}</strong> has been logged directly with our Raipur team. We will reach out to you at <strong>{formData.phone || formData.email}</strong> within one working day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          organization: '',
                          designation: '',
                          phone: '',
                          email: '',
                          cityState: '',
                          requirementType: 'General Enquiry',
                          message: '',
                        });
                      }}
                      className="px-6 py-2 rounded-full bg-[#178582] hover:bg-[#116563] text-white text-xs font-semibold"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {currentLang === 'en' ? "Send Your Requirement" : "अपनी आवश्यकता साझा करें"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Fill in the details below and our solution leads will respond promptly.
                    </p>
                  </div>

                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rameshwar Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        Organization / College / Department
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Govt Engineering College / Directorate"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>
                  </div>

                  {/* Designation & City/State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Principal / Student / Officer / Founder"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        City & State <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Raipur, Chhattisgarh"
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        Phone / WhatsApp Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                      />
                    </div>
                  </div>

                  {/* Requirement Type Dropdown */}
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                      Requirement Type <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.requirementType}
                      onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                      className="w-full bg-[#0A1828] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                    >
                      {requirementOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                      Brief Description of Your Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your batch requirements, student count, workshop timeline, or administrative workflow needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0A1828] border border-slate-700 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#BFA181]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Requirement...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Direct confidential review by InnoVedas team • No spam, ever
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
