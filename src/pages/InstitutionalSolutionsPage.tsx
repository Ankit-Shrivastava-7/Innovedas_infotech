import React from 'react';
import { 
  Building, Landmark, GraduationCap, Users, Rocket, 
  CheckCircle2, ArrowRight, ShieldCheck, FileCheck2 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';

interface InstitutionalSolutionsPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const InstitutionalSolutionsPage: React.FC<InstitutionalSolutionsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const t = translations[currentLang];

  const stakeholders = [
    { title: "Schools & K-12 Boards", desc: "NEP 2020-compliant AI literacy labs, teacher capacity workshops, and student computational thinking clubs." },
    { title: "Colleges & Universities", desc: "Credit-aligned vernacular AI electives, faculty development programs (FDPs), and campus incubation mentorship." },
    { title: "Government Departments", desc: "Administrative workflow modernization, bilingual citizen query automation, and departmental AI literacy masterclasses." },
    { title: "District Administrations", desc: "Skill gap mapping for aspirational districts, regional livelihood micro-courses, and youth employability summits." },
    { title: "Incubation Centres & Startups", desc: "AI-first business model advisory, growth hacking with vernacular marketing, and product MVP guidance." },
    { title: "NGOs & CSR Foundations", desc: "Grassroots digital skilling for rural youth, women self-help groups (SHGs), and marginalized student communities." },
  ];

  const models = [
    { title: "On-Campus AI Centers of Excellence", detail: "Setting up permanent physical/hybrid AI exploration hubs equipped with curriculum, mentor training, and ongoing student hackathons." },
    { title: "Faculty & Staff Development (FDP)", detail: "Certifying educators to teach modern AI concepts responsibly and integrate generative tools safely in classroom lesson planning." },
    { title: "Turnkey Public Sector Pilots", detail: "End-to-end pilot deployment of localized AI assistants with zero data leakage, guaranteed state compliance, and SLA support." },
    { title: "Custom Micro-Course Licensing", detail: "White-labeled deployment of Kaushal AI micro-learning library inside institutional LMS platforms or student mobile apps." },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <Landmark className="w-3.5 h-3.5" />
              INSTITUTIONAL & GOVERNMENT PARTNERSHIPS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "Partner With InnoVedas." : "इनोवेदास के साथ संस्थागत साझेदारी करें।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "We collaborate with schools, technical universities, state government departments, and district administrations to build sustainable, scalable AI capabilities tailored to the realities of Tier-2, Tier-3, and rural India."
                : "हम स्कूलों, विश्वविद्यालयों, शासकीय विभागों और जिला प्रशासनों के साथ मिलकर टियर-2, टियर-3 और ग्रामीण भारत की आवश्यकताओं के अनुरूप दीर्घकालिक AI क्षमताएं स्थापित करते हैं।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Institutional MoU Proposal')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-md"
              >
                {currentLang === 'en' ? "Initiate MoU / Institutional Discussion" : "MoU अथवा संस्थागत चर्चा प्रारंभ करें"}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700"
              >
                {currentLang === 'en' ? "Request Institutional Deck" : "संस्थागत प्रेजेंटेशन प्राप्त करें"}
              </button>
            </div>
          </div>
        </div>

        {/* WHO WE WORK WITH */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Ecosystem Reach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Who We Collaborate With
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Deep alignment with state education boards, skilling missions, and civil service administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholders.map((sh, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all">
                <h3 className="text-base font-bold text-white mb-2">{sh.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{sh.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENGAGEMENT MODELS */}
        <div className="bg-[#0F2238] border border-[#178582]/30 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase text-[#BFA181]">Structured Framework</span>
            <h3 className="text-2xl font-bold text-white mt-1">Proven Engagement Models</h3>
            <p className="text-xs text-slate-300 mt-1">
              Flexible frameworks engineered for government procurement, university credits, and CSR compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {models.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A1828] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#178582]" />
                  <h4 className="text-sm font-bold text-white">{m.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Formal MoUs signed with leading state colleges and government institutes in Chhattisgarh.
            </span>
            <button
              onClick={() => onOpenInquiry('Institutional MoU Discussion')}
              className="px-6 py-2.5 rounded-full bg-[#178582] hover:bg-[#116563] text-white font-semibold text-xs transition-all shadow"
            >
              Request Formal Partnership Meeting
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
