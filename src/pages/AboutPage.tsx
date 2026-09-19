import React from 'react';
import { 
  Target, Compass, ShieldCheck, HeartHandshake, Languages, 
  Lightbulb, Award, ArrowRight, UserCheck, CheckCircle2 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { leadershipTeam } from '../data/cmsContent';

interface AboutPageProps {
  currentLang: Language;
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const approachPrinciples = [
    {
      id: 1,
      titleEn: "Accessibility",
      titleHi: "सुलभता (Accessibility)",
      descEn: "Removing geographical and socio-economic hurdles so high-quality learning reaches aspirational learners beyond metro clusters.",
      descHi: "भौगोलिक और सामाजिक-आर्थिक बाधाओं को दूर करना ताकि महानगरों से दूर रहने वाले आकांक्षी विद्यार्थियों तक उच्च गुणवत्ता वाली शिक्षा पहुंचे।",
      icon: Compass,
    },
    {
      id: 2,
      titleEn: "Affordability",
      titleHi: "किफायती लागत (Affordability)",
      descEn: "Transparent, honest pricing models that ensure premier competitive coaching and tech literacy do not cause debt for Indian families.",
      descHi: "पारदर्शी और न्यायसंगत मूल्य निर्धारण ताकि प्रतियोगी कोचिंग और तकनीकी शिक्षा परिवारों पर कर्ज का बोझ न बने।",
      icon: ShieldCheck,
    },
    {
      id: 3,
      titleEn: "Regional Languages",
      titleHi: "मातृभाषा एवं क्षेत्रीय प्राथमिकता",
      descEn: "True empowerment begins in the language you dream in. Designing bilingual and vernacular AI architectures from day one.",
      descHi: "सच्चा सशक्तिकरण उसी भाषा से शुरू होता है जिसमें आप सोचते हैं। पहले दिन से द्विभाषी और क्षेत्रीय AI संरचना का विकास।",
      icon: Languages,
    },
    {
      id: 4,
      titleEn: "Practicality",
      titleHi: "व्यावहारिकता एवं प्रत्यक्ष प्रयोग",
      descEn: "Zero vanity metrics. Every course module and workshop output must translate directly to career readiness, file clearance, or business revenue.",
      descHi: "दिखावटी दावों से मुक्त। प्रत्येक पाठ और कार्यशाला का उद्देश्य सीधे करियर, शासकीय फाइलों के त्वरित निपटारे अथवा व्यापारिक विस्तार से जुड़ा है।",
      icon: Lightbulb,
    },
    {
      id: 5,
      titleEn: "Responsibility & Ethics",
      titleHi: "जिम्मेदारी एवं नैतिक AI आचरण",
      descEn: "Grounding Artificial Intelligence in data safety, copyright compliance, student privacy, and responsible public governance standards.",
      descHi: "डेटा सुरक्षा, कॉपीराइट अनुपालन, छात्र गोपनीयता और जिम्मेदार लोक प्रशासन मानकों पर आधारित AI का प्रयोग।",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* HERO / WHO WE ARE */}
        <div id="about-who" className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BFA181] font-semibold">
            Identity & Origins
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            {currentLang === 'en' ? "About InnoVedas EdTech" : "इनोवेदास एडटेक का परिचय"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentLang === 'en'
              ? "InnoVedas EdTech Pvt. Ltd. was founded in Raipur, Chhattisgarh, with a singular positioning: Not to build just another coaching institute, but to build a modern Indian AI + Education + Skilling company's digital and pedagogical home."
              : "इनोवेदास एडटेक प्राइवेट लिमिटेड की स्थापना रायपुर, छत्तीसगढ़ में एक स्पष्ट दृष्टिकोण के साथ हुई: केवल एक सामान्य कोचिंग संस्थान नहीं, बल्कि आधुनिक भारत की AI + शिक्षा + कौशल कंपनी का आधार तैयार करना।"}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
            "Learn Better. Skill Faster. Work Smarter. Grow with AI."
          </div>
        </div>

        {/* VISION & MISSION SECTION */}
        <div id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="p-8 rounded-3xl bg-[#0F2238] border border-[#178582]/40 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#178582]/20 text-[#BFA181] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] block mb-2">
              Our Vision
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">
              {currentLang === 'en' ? "An Inclusive, AI-Ready India" : "समावेशी, AI-सक्षम भारत"}
            </h2>
            <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-[#BFA181] pl-4">
              {currentLang === 'en'
                ? '"To build an inclusive, AI-enabled India where every individual and institution has access to quality education, future-ready skills and intelligent technology."'
                : '"एक ऐसे समावेशी और AI-सक्षम भारत का निर्माण करना जहाँ प्रत्येक नागरिक और संस्थान को गुणवत्तापूर्ण शिक्षा, भविष्योन्मुखी कौशल और बौद्धिक तकनीक तक समान पहुंच प्राप्त हो।"'}
            </blockquote>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-3xl bg-[#0F2238] border border-[#BFA181]/40 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#BFA181]/20 text-[#BFA181] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] block mb-2">
              Our Mission
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">
              {currentLang === 'en' ? "Actionable Skilling & Technology" : "सार्थक कौशल एवं तकनीक विस्तार"}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              {currentLang === 'en'
                ? "To democratize competitive exam mentoring, engineer vernacular micro-learning through Kaushal AI, conduct non-intimidating AI literacy workshops for schools and civil servants, and deploy purposeful AI agent assistants for public delivery."
                : "प्रतियोगी परीक्षा मार्गदर्शन को सुलभ बनाना, कौशल AI द्वारा मातृभाषा में सूक्ष्म-कौशल उपलब्ध कराना, शिक्षण संस्थानों व लोकसेवकों हेतु व्यावहारिक AI कार्यशालाएं संचालित करना और जनहित में उपयोगी AI एजेंट्स तैयार करना।"}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#0A1828] text-[#BFA181] border border-slate-800">Affordable Exam Prep</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#0A1828] text-[#178582] border border-slate-800">Vernacular AI</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#0A1828] text-white border border-slate-800">Govt AI Solutions</span>
            </div>
          </div>

        </div>

        {/* OUR APPROACH: 5 PRINCIPLES */}
        <div id="approach" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Foundational Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currentLang === 'en' ? "Our Five Operating Principles" : "हमारे पांच कार्य सिद्धांत"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {currentLang === 'en' 
                ? "How InnoVedas ensures technology translates into tangible human progress."
                : "यह सुनिश्चित करने की कार्यप्रणाली कि तकनीक वास्तविक मानवीय प्रगति में तब्दील हो।"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachPrinciples.map((pr) => {
              const Icon = pr.icon;
              return (
                <div 
                  key={pr.id}
                  className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0A1828] border border-[#178582]/40 text-[#BFA181] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                    {currentLang === 'en' ? pr.titleEn : pr.titleHi}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLang === 'en' ? pr.descEn : pr.descHi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEADERSHIP SECTION WITH FOUNDER CARDS */}
        <div id="leadership" className="pt-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Executive Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currentLang === 'en' ? "Leadership & Founding Vision" : "संस्थापक नेतृत्व एवं दृष्टिकोण"}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              [PROFESSIONAL PLACEHOLDER PROFILE CARDS]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-3xl p-8 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Avatar with Initials & Placeholder Tag */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#0A1828] to-[#178582] border-2 border-[#BFA181] flex items-center justify-center text-2xl font-black text-[#BFA181] font-['Outfit'] shadow-inner flex-shrink-0">
                      {leader.initials}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 block w-max mb-1">
                        [PLACEHOLDER HEADSHOT]
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {currentLang === 'en' ? leader.name : leader.nameHi}
                      </h3>
                      <p className="text-xs font-semibold text-[#BFA181]">
                        {currentLang === 'en' ? leader.roleEn : leader.roleHi}
                      </p>
                      <p className="text-[11px] text-[#178582] font-mono">
                        {currentLang === 'en' ? leader.qualificationsEn : leader.qualificationsHi}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {currentLang === 'en' ? leader.bioEn : leader.bioHi}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Raipur, Chhattisgarh</span>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-[#BFA181] hover:underline font-semibold flex items-center gap-1"
                  >
                    Schedule Meeting
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA CARD */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#178582]/20 to-[#0F2238] border border-[#178582]/40 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {currentLang === 'en' ? "Partner With Our Leadership" : "हमारे नेतृत्व के साथ साझेदारी करें"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {currentLang === 'en' 
              ? "We actively welcome discussions with university vice-chancellors, district collectors, and CSR directors."
              : "हम विश्वविद्यालयों, जिला कलेक्टरों और सीएसआर निदेशकों के साथ सार्थक संवाद का स्वागत करते हैं।"}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm transition-all shadow"
            >
              {t.brand.partnerCta}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
