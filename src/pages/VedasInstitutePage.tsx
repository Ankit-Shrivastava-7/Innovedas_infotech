import React from 'react';
import { 
  GraduationCap, Award, BookOpen, CheckCircle2, 
  Calendar, FileText, Users, ArrowRight, ShieldCheck, PhoneCall 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';

interface VedasInstitutePageProps {
  currentLang: Language;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const VedasInstitutePage: React.FC<VedasInstitutePageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[currentLang];

  const exams = [
    { code: "CGPSC", name: "Chhattisgarh Public Service Commission", scope: "Prelims GS + CSAT, Mains Papers 1-7, Mock Interviews", badge: "Primary Focus" },
    { code: "UPSC CSE", name: "Union Public Service Commission", scope: "General Studies, CSAT, Essay, State Cadre Mentoring", badge: "National" },
    { code: "CG Vyapam", name: "Chhattisgarh Professional Exam Board", scope: "Patwari, RI, Hostel Warden, Sub-Inspector, Apex Bank", badge: "High Vacancy" },
    { code: "SSC CGL / CHSL", name: "Staff Selection Commission", scope: "Quantitative Aptitude, Reasoning, English, General Awareness", badge: "Central" },
    { code: "Railway (RRB)", name: "NTPC, Group D, ALP & Technical", scope: "CBT 1 & CBT 2 Targeted Practice & Speed Drills", badge: "Technical & Non-Tech" },
    { code: "Banking", name: "IBPS PO / Clerk & SBI Associates", scope: "Banking Awareness, Data Interpretation, Reasoning Puzzles", badge: "Speed Batch" },
    { code: "CUET (UG/PG)", name: "Common University Entrance Test", scope: "Domain subjects & General Aptitude for Central Universities", badge: "Entrance" },
    { code: "CLAT", name: "Common Law Admission Test", scope: "Legal Reasoning, Current Affairs, Critical Reading", badge: "Law Entrance" },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <GraduationCap className="w-4 h-4" />
              VEDAS INSTITUTE • EXAM PREPARATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' 
                ? "Quality Government Exam Preparation at an Affordable Price"
                : "सुलभ शुल्क में उत्कृष्ट सरकारी परीक्षा तैयारी"}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Civil service dreams should never be compromised by exorbitant coaching fees. Vedas Institute brings disciplined offline classroom rigor, personal mentor evaluations, and smart digital analytics right to Raipur, Chhattisgarh."
                : "सिविल सेवा का सपना महंगी फीस के कारण अधूरा नहीं रहना चाहिए। वेदास इंस्टीट्यूट अनुशासित कक्षा शिक्षण, व्यक्तिगत मेंटरशिप और स्मार्ट डिजिटल एनालिटिक्स को रायपुर में सुलभ बनाता है।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Vedas Institute')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-md"
              >
                {currentLang === 'en' ? "Request Batch Schedule & Fees" : "बैच और फीस विवरण प्राप्त करें"}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700"
              >
                {currentLang === 'en' ? "Visit Raipur Center" : "रायपुर सेंटर पधारें"}
              </button>
            </div>
          </div>
        </div>

        {/* 8 EXAM CATEGORIES */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Curriculum Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {currentLang === 'en' ? "Comprehensive Examination Coverage" : "समस्त प्रतियोगी परीक्षाओं का समावेश"}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Targeted syllabus mapping according to latest notification changes and paper patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exams.map((ex, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white group-hover:text-[#BFA181] transition-colors">
                      {ex.code}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181]">
                      {ex.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-medium text-slate-200 mb-2">
                    {ex.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {ex.scope}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Bilingual Batches</span>
                  <button 
                    onClick={() => onOpenInquiry(`Vedas Institute - ${ex.code}`)}
                    className="text-[11px] text-[#BFA181] hover:underline font-semibold flex items-center gap-1"
                  >
                    Inquire
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 CORE ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <Award className="w-6 h-6 text-[#BFA181]" />
            <h4 className="text-base font-bold text-white">Daily Answer Writing (DAW)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mains questions evaluated within 24 hours with model structure, intro-body-conclusion templates, and mark breakdowns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <Users className="w-6 h-6 text-[#178582]" />
            <h4 className="text-base font-bold text-white">Batch Size Cap (Max 45)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unlike 300-student auditorium classes, our intimate cohorts ensure faculty knows every student's weak subjects personally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#BFA181]" />
            <h4 className="text-base font-bold text-white">Transparent, Honest Pricing</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nearly one-third the cost of metro coaching franchises, with installment plans and merit scholarships for deserving candidates.
            </p>
          </div>
        </div>

        {/* RAIPUR CENTER CALLOUT */}
        <div className="p-8 rounded-3xl bg-[#06111D] border border-[#178582]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              Vedas Institute Classroom Center — Raipur
            </h3>
            <p className="text-xs text-slate-300">
              B 442, Priyadarshini Nagar, Raipur 492001, Chhattisgarh • Daily 9:00 AM to 7:00 PM
            </p>
            <p className="text-xs text-[#BFA181]">
              Helpline: +91 81031 95321 / +91 99815 16838 • Email: teamofvedas@gmail.com
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Vedas Institute Classroom Visit')}
            className="px-6 py-3 rounded-full bg-[#178582] hover:bg-[#116563] text-white font-semibold text-xs transition-all flex items-center gap-2 flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            Book Free Demo Class
          </button>
        </div>

      </div>
    </div>
  );
};
