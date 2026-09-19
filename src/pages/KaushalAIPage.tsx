import React, { useState } from 'react';
import { 
  Languages, Play, CheckCircle2, Sparkles, Smartphone, 
  Clock, Zap, ArrowRight, Share2, Award, BookOpen 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { regionalLanguagesList } from '../data/cmsContent';

interface KaushalAIPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const KaushalAIPage: React.FC<KaushalAIPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const [selectedLang, setSelectedLang] = useState<string>('hi');
  const [activeTab, setActiveTab] = useState<'framework' | 'courses' | 'institutional'>('framework');

  const sampleEpisodes = [
    { ep: 1, title: "What is Digital Marketing?", titleHi: "डिजिटल मार्केटिंग क्या है?", length: "1:45 min", takeaway: "Difference between traditional flex boards and hyper-targeted mobile marketing." },
    { ep: 2, title: "Setting Up Google Business Profile", titleHi: "गूगल बिजनेस प्रोफाइल कैसे बनाएं?", length: "2:05 min", takeaway: "Step-by-step local search listing setup for neighborhood foot traffic." },
    { ep: 3, title: "Using Free AI for Hindi Social Copy", titleHi: "AI से हिंदी में सोशल पोस्ट कैसे लिखें?", length: "1:55 min", takeaway: "How to craft compelling festive offers using conversational AI." },
    { ep: 4, title: "Running ₹100/day Instagram Ads", titleHi: "₹100 में इंस्टाग्राम विज्ञापन चलाना", length: "2:15 min", takeaway: "Pincode-level demographic filtering for local retail stores." },
    { ep: 5, title: "Measuring Leads on WhatsApp", titleHi: "व्हाट्सएप पर लीड्स ट्रैक करना", length: "1:40 min", takeaway: "Converting inquiries to loyal paying customers using automated catalogs." },
  ];

  const microCourses = [
    { id: "c1", title: "Digital Marketing Basics for Bharat", category: "Commerce", eps: 5, time: "9 mins" },
    { id: "c2", title: "AI Prompting for Daily Office Work", category: "Productivity", eps: 6, time: "11 mins" },
    { id: "c3", title: "Graphic Design on Mobile for Local Brands", category: "Creative", eps: 5, time: "8 mins" },
    { id: "c4", title: "Cyber Safety & Digital Banking Security", category: "Citizens", eps: 4, time: "7 mins" },
    { id: "c5", title: "Spoken English Daily Dialogues via Audio", category: "Language", eps: 8, time: "14 mins" },
    { id: "c6", title: "Basic Financial Literacy & UPI Bookkeeping", category: "MSME", eps: 5, time: "9 mins" },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO SECTION */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F243A] via-[#0A1828] to-[#0A1828] border border-[#BFA181]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BFA181]/15 border border-[#BFA181]/40 text-xs font-semibold text-[#BFA181]">
              <Sparkles className="w-3.5 h-3.5" />
              FLAGSHIP SKILLING PRODUCT • VERNACULAR MICRO-LEARNING
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' 
                ? "Skills Should Speak Your Language." 
                : "कौशल को आपकी भाषा बोलनी चाहिए।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Kaushal AI breaks learning into 1–2 minute actionable video episodes. Powered by intelligent speech synthesis and regional adaptation, every lesson is natively spoken in Hindi, Chhattisgarhi, Marathi, Bengali, and 8+ Indian languages."
                : "कौशल AI जटिल कौशलों को 1-2 मिनट के व्यावहारिक वीडियो अध्यायों में विभाजित करता है। आधुनिक AI वॉइस टेक्नोलॉजी के साथ, प्रत्येक पाठ हिंदी, छत्तीसगढ़ी, मराठी, बंगाली और 8 से अधिक भारतीय भाषाओं में उपलब्ध है।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Kaushal AI Access')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-lg"
              >
                {currentLang === 'en' ? "Try Kaushal AI Micro-Player" : "कौशल AI माइक्रो-प्लेयर आज़माएं"}
              </button>
              <button
                onClick={() => onOpenInquiry('Kaushal AI for Institution')}
                className="px-6 py-3 rounded-full bg-[#178582] hover:bg-[#116563] text-white font-semibold text-xs sm:text-sm shadow"
              >
                {currentLang === 'en' ? "Deploy Kaushal AI in Your College" : "अपने कॉलेज में कौशल AI लागू करें"}
              </button>
            </div>
          </div>
        </div>

        {/* 12+ REGIONAL LANGUAGES INTERACTIVE GRID */}
        <div className="bg-[#0F2238] border border-[#178582]/30 rounded-2xl p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#BFA181] block">
                Vernacular Engine
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Select Your Mother Tongue to Preview Audio Accent
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-[#0A1828] text-[#178582] border border-slate-700 font-mono">
              Zero English Barrier
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {regionalLanguagesList.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedLang === lang.code
                    ? 'bg-[#BFA181] text-[#0A1828] border-[#BFA181] shadow-md font-bold'
                    : 'bg-[#0A1828] border-slate-800 text-slate-300 hover:border-[#178582]'
                }`}
              >
                <div className="text-sm font-semibold">{lang.nameNative}</div>
                <div className="text-[11px] opacity-75">{lang.nameEn}</div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0A1828] border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-[#BFA181]" />
              Currently rendering: <strong className="text-white">{regionalLanguagesList.find(l => l.code === selectedLang)?.nameNative}</strong> track with localized terminology and regional examples.
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Neural Synthesized</span>
          </div>
        </div>

        {/* 4-STEP FRAMEWORK: LEARN -> PRACTICE -> APPLY -> IMPROVE */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Pedagogical Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How Kaushal AI Micro-Learning Works
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Built for adult attention spans, shift workers, college students, and smartphone-first learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <div className="text-2xl font-black text-[#178582] font-mono">01. LEARN</div>
              <h4 className="text-base font-bold text-white">1–2 Min Video</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                One core concept per episode. Zero preamble, zero fluff. Straight to the point with visual demonstrations on mobile screens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <div className="text-2xl font-black text-[#BFA181] font-mono">02. PRACTICE</div>
              <h4 className="text-base font-bold text-white">Micro-Quiz Drills</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                2 quick multiple-choice questions right after the episode to lock memory in under 30 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <div className="text-2xl font-black text-[#178582] font-mono">03. APPLY</div>
              <h4 className="text-base font-bold text-white">Daily Practical Task</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Actionable assignments: "Create your first Google Business listing" or "Draft a Hindi promotional message for your shop."
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <div className="text-2xl font-black text-[#BFA181] font-mono">04. IMPROVE</div>
              <h4 className="text-base font-bold text-white">AI Feedback</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instant assessment and constructive guidance delivered via WhatsApp bot or web app.
              </p>
            </div>
          </div>
        </div>

        {/* SAMPLE COURSE BREAKDOWN */}
        <div className="bg-[#0F2238] border border-slate-800 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#178582]">
                Detailed Course Syllabus
              </span>
              <h3 className="text-lg font-bold text-white">
                Digital Marketing Basics for Bharat (Course 01)
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#BFA181]/20 text-[#BFA181] font-mono">
              Total Duration: 9m 20s
            </span>
          </div>

          <div className="space-y-3">
            {sampleEpisodes.map((ep) => (
              <div 
                key={ep.ep}
                className="p-4 rounded-xl bg-[#0A1828] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#178582]/20 border border-[#178582]/50 text-[#BFA181] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {ep.ep}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">
                      {ep.title} <span className="text-slate-400 font-normal">({ep.titleHi})</span>
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Key Takeaway: {ep.takeaway}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {ep.length}
                  </span>
                  <button 
                    onClick={() => onOpenInquiry(`Kaushal AI Episode ${ep.ep}`)}
                    className="p-1.5 rounded-lg bg-[#BFA181] text-[#0A1828] hover:bg-[#ad8f70]"
                    title="Play Preview"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIBRARY OVERVIEW & INSTITUTIONAL LICENSING */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {microCourses.map((mc) => (
            <div key={mc.id} className="p-5 rounded-xl bg-[#0F2238] border border-slate-800 hover:border-[#BFA181] transition-all">
              <span className="text-[10px] font-mono uppercase text-[#BFA181] px-2 py-0.5 rounded bg-[#0A1828]">
                {mc.category}
              </span>
              <h4 className="text-sm font-bold text-white mt-3 mb-1">{mc.title}</h4>
              <p className="text-[11px] text-slate-400">{mc.eps} Episodes • {mc.time}</p>
              <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-mono">12 Languages Ready</span>
                <button 
                  onClick={() => onOpenInquiry(`Course: ${mc.title}`)}
                  className="text-xs text-[#BFA181] hover:underline"
                >
                  Request Access
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
