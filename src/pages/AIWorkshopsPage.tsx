import React from 'react';
import { 
  Users, GraduationCap, Landmark, HeartHandshake, CheckCircle2, 
  Calendar, Clock, ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';

interface AIWorkshopsPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const AIWorkshopsPage: React.FC<AIWorkshopsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[currentLang];

  const tracks = [
    {
      id: 'schools',
      titleEn: "For School Students (Grades 6–12)",
      titleHi: "स्कूली विद्यार्थियों हेतु (कक्षा 6–12)",
      question: "AI क्या है, यह कैसे काम करता है, और इसका जिम्मेदारी से उपयोग कैसे करें?",
      modules: [
        "Demystifying AI without confusing mathematical jargon",
        "Prompt crafting for creative writing, science projects, and quiz prep",
        "Safe digital footprints, deepfake identification, and AI ethics",
        "Hands-on project: Creating their first AI-assisted comic or storybook",
      ],
      format: "Half-Day / Full-Day On-Campus Bootcamps",
      color: "#178582",
    },
    {
      id: 'colleges',
      titleEn: "For College & University Students",
      titleHi: "कॉलेज व विश्वविद्यालय के छात्रों हेतु",
      question: "AI मेरे करियर में कैसे मदद करेगा और मैं जॉब-रेडी कैसे बनूं?",
      modules: [
        "AI for academic research, paper summarization, and literature review",
        "Resume auditing, portfolio building, and mock technical interview drills",
        "Building domain-specific workflows (Finance, Law, Engineering, Humanities)",
        "Hands-on capstone: Deploying a free custom GPT or micro-assistant",
      ],
      format: "1-Day to 3-Day Immersive Labs (FDP / Student Labs)",
      color: "#BFA181",
    },
    {
      id: 'government',
      titleEn: "For Government Employees & Administrative Officers",
      titleHi: "शासकीय कर्मचारियों व प्रशासनिक अधिकारियों हेतु",
      question: "AI से सरकारी काम कैसे तेज़, पारदर्शी और आसान हो सकता है?",
      modules: [
        "Drafting administrative notes, RTI summaries, and meeting minutes",
        "Bilingual Hindi/English government communication and public circulars",
        "Data privacy compliance, state IT guidelines, and avoiding hallucination",
        "Hands-on exercise: Automating public feedback categorization",
      ],
      format: "Executive Half-Day Masterclasses & Onsite Departmental Workshops",
      color: "#178582",
    },
    {
      id: 'citizens',
      titleEn: "For Citizens, Homemakers & Seniors",
      titleHi: "आम नागरिकों, गृहिणियों व वरिष्ठ जनों हेतु",
      question: "AI मेरी दैनिक ज़िंदगी और काम में क्या बदल सकता है?",
      modules: [
        "Voice-driven search, vernacular queries, and travel/health assistance",
        "Identifying online financial scams, clone calls, and misleading media",
        "AI for local trade: shopkeeper billing, WhatsApp marketing, product photos",
        "Lifelong learning and language translation for inter-state communication",
      ],
      format: "Community Center & Panchayat Level Literacy Camps",
      color: "#BFA181",
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <Sparkles className="w-3.5 h-3.5" />
              AI LITERACY & CAPACITY BUILDING
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "AI Is Not Just for Engineers." : "AI सिर्फ इंजीनियरों के लिए नहीं है।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Every Indian citizen, student, government officer, and small business owner deserves to understand Artificial Intelligence. Our workshops demystify technology into practical, everyday superpowers with zero coding required."
                : "प्रत्येक भारतीय छात्र, लोकसेवक, उद्यमी और आम नागरिक को AI समझने का अधिकार है। हमारी कार्यशालाएं तकनीक के भय को दूर कर व्यावहारिक, दैनिक उपयोग सिखाती हैं — बिना किसी कोडिंग की आवश्यकता के।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Book AI Workshop')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-md"
              >
                {currentLang === 'en' ? "Book a Workshop for Your Campus" : "अपने संस्थान हेतु कार्यशाला बुक करें"}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700"
              >
                {currentLang === 'en' ? "Download Curriculum Brochure" : "पाठ्यक्रम विवरण डाउनलोड करें"}
              </button>
            </div>
          </div>
        </div>

        {/* 4 AUDIENCE WORKSHOP TRACKS */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Tailored Programs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Four Purpose-Built Audience Cohorts
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Customized learning outcomes aligned to daily responsibilities and career milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className="p-8 rounded-3xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#BFA181] px-2.5 py-1 rounded bg-[#0A1828]">
                      {track.format}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#178582]" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {currentLang === 'en' ? track.titleEn : track.titleHi}
                  </h3>

                  <div className="p-3 rounded-xl bg-[#0A1828] border border-slate-800 text-xs font-medium text-[#BFA181]">
                    Core Focus Question: "{track.question}"
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Curriculum Highlights
                    </span>
                    {track.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#178582] flex-shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Available across all 33 districts of CG & PAN-India</span>
                  <button
                    onClick={() => onOpenInquiry(`AI Workshop: ${track.titleEn}`)}
                    className="px-4 py-2 rounded-xl bg-[#178582] hover:bg-[#116563] text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    Request Proposal
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORKSHOP PEDAGOGY HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <Clock className="w-6 h-6 text-[#BFA181]" />
            <h4 className="text-sm font-bold text-white">70% Hands-On Practice</h4>
            <p className="text-xs text-slate-300">Participants actively build prompts and workflows on their own smartphones and laptops during the session.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#178582]" />
            <h4 className="text-sm font-bold text-white">Bilingual Instruction</h4>
            <p className="text-xs text-slate-300">Delivered comfortably in Hindi and English so language is never a hindrance to asking questions.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <Users className="w-6 h-6 text-[#BFA181]" />
            <h4 className="text-sm font-bold text-white">Post-Workshop Support</h4>
            <p className="text-xs text-slate-300">Includes 30-day access to reference prompt guides, cheatsheets, and our alumni query channel.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
