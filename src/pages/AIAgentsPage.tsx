import React from 'react';
import { 
  Bot, Cpu, ShieldAlert, CheckCircle2, ArrowRight, 
  Workflow, FileSearch, Sparkles, Layers, ShieldCheck 
} from 'lucide-react';
import { Language, PageId } from '../types';

interface AIAgentsPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const AIAgentsPage: React.FC<AIAgentsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <Bot className="w-3.5 h-3.5" />
              NEXT-GENERATION AUTONOMOUS AGENTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "From AI Tools to AI Agents." : "AI टूल्स से AI एजेंट्स की ओर।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Chatbots only answer questions when prompted. AI Agents execute multi-step workflows autonomously: reading departmental circulars, cross-referencing state gazettes, preparing verified draft files, and assisting human decision-makers safely."
                : "चैटबॉट्स केवल पूछे जाने पर उत्तर देते हैं। AI एजेंट्स बहु-चरणीय कार्यप्रणालियों को स्वयं निष्पादित करते हैं: नियमों को पढ़ना, सरकारी गजट से मिलान करना, प्रारूप तैयार करना और अधिकारियों की सहायता करना।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Build AI Agent')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-md"
              >
                {currentLang === 'en' ? "Build an AI Agent for Your Department" : "अपने विभाग हेतु AI एजेंट तैयार करें"}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700"
              >
                {currentLang === 'en' ? "Technical Architecture & Security Whitepaper" : "तकनीकी संरचना व सुरक्षा विवरण"}
              </button>
            </div>
          </div>
        </div>

        {/* 4-STAGE ARCHITECTURE: UNDERSTAND -> REASON -> ACT -> RESPOND */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BFA181] font-semibold">
              Execution Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How InnoVedas AI Agents Operate
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Deterministic guardrails preventing hallucination, ensuring strict compliance with official manuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#178582] font-mono">01. UNDERSTAND</span>
              <h4 className="text-base font-bold text-white">Multimodal Input Parsing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ingests handwritten applications, scanned PDFs, citizen voice notes in Chhattisgarhi/Hindi, and database feeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#BFA181] font-mono">02. REASON</span>
              <h4 className="text-base font-bold text-white">Rulebook Grounding</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluates input against government service rules, RTI statutory limits, syllabus maps, or verified departmental SOPs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#178582] font-mono">03. ACT</span>
              <h4 className="text-base font-bold text-white">Tool Execution</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fetches records, computes eligibility, triggers automated notifications, or prepares formatted bilingual draft letters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2238] border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#BFA181] font-mono">04. RESPOND</span>
              <h4 className="text-base font-bold text-white">Human Approval Loop</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Presents the completed work for human-in-the-loop review before final filing or delivery to the student/citizen.
              </p>
            </div>
          </div>
        </div>

        {/* TWO FLAGSHIP AGENT CONCEPTS IN DEPTH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Flagship 1: Government Assistant */}
          <div className="p-8 rounded-3xl bg-[#0F2238] border border-[#178582]/40 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#BFA181] px-2.5 py-1 rounded bg-[#0A1828]">
                Public Governance
              </span>
              <span className="text-xs text-emerald-400 font-mono">Assists • Never Replaces Human Officer</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Government Employee AI Assistant
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trained specifically on Indian administrative procedures, service rules, RTI deadlines, citizen grievance redressal, and departmental file movement. 
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#178582] flex-shrink-0 mt-0.5" />
                <span>Extracts relevant precedent orders from past 10 years of departmental circulars in seconds.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#178582] flex-shrink-0 mt-0.5" />
                <span>Generates bilingual (Hindi/English) draft replies for citizen grievances with complete legal citations.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#178582] flex-shrink-0 mt-0.5" />
                <span>Zero cloud data leakage: Can be deployed on private on-premise government servers with full audit logs.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenInquiry('Govt AI Assistant Pilot')}
                className="w-full py-3 rounded-xl bg-[#178582] hover:bg-[#116563] text-white text-xs font-bold transition-all text-center"
              >
                Schedule Departmental Briefing
              </button>
            </div>
          </div>

          {/* Flagship 2: AI Personal Tutor */}
          <div className="p-8 rounded-3xl bg-[#0F2238] border border-[#BFA181]/40 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#BFA181] px-2.5 py-1 rounded bg-[#0A1828]">
                Personalized Pedagogy
              </span>
              <span className="text-xs text-[#BFA181] font-mono">1 Learner : 1 AI Companion</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              AI Personal Tutor & Companion
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every learner has a unique pace, native dialect, and fear of asking questions in large halls. Our Personal Tutor adapts dynamically to bridge understanding gaps.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BFA181] flex-shrink-0 mt-0.5" />
                <span>Identifies weak conceptual prerequisites (e.g. diagnosing why a student struggles with Economics Mains paper).</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BFA181] flex-shrink-0 mt-0.5" />
                <span>Explains complex topics using local regional analogies (e.g., explaining inflation through local mandi grain prices).</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BFA181] flex-shrink-0 mt-0.5" />
                <span>Available 24/7 via voice or chat with infinite patience and continuous positive reinforcement.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenInquiry('AI Personal Tutor Demo')}
                className="w-full py-3 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] text-xs font-bold transition-all text-center"
              >
                Experience Personal Tutor Prototype
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
