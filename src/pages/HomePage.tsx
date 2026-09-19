import React, { useState } from 'react';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, BookOpen, 
  Cpu, Users, Shield, Award, Languages, Bot, GraduationCap, 
  Landmark, Building, Rocket, ChevronRight, Play, ExternalLink
} from 'lucide-react';
import { HeroNodeVisual } from '../components/HeroNodeVisual';
import { TrustImpactCounters } from '../components/TrustImpactCounters';
import { Language, PageId, ImpactStat } from '../types';
import { translations } from '../data/translations';
import { regionalLanguagesList, caseStudiesList, testimonialsList, ecosystemPartners } from '../data/cmsContent';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (page: PageId, anchor?: string) => void;
  stats: ImpactStat[];
  onUpdateStats: (newStats: ImpactStat[]) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
  stats,
  onUpdateStats,
  onOpenInquiry,
}) => {
  const t = translations[currentLang];
  const [selectedLanguageChip, setSelectedLanguageChip] = useState<string>('hi');
  const [activeEpisode, setActiveEpisode] = useState<number>(1);

  return (
    <div className="w-full">

      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section 
        id="hero-section"
        className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0A1828] via-[#0D1E32] to-[#0A1828]"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 circuit-grid pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#178582]/15 border border-[#178582]/30 text-xs font-semibold tracking-wider text-[#BFA181] uppercase font-['Outfit']">
                <span className="w-2 h-2 rounded-full bg-[#BFA181] animate-pulse" />
                {t.brand.eyebrow}
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Outfit']">
                {t.brand.subtitle}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.brand.heroSubheading}
              </p>

              {/* Supporting line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 text-sm font-semibold text-[#BFA181]">
                <Sparkles className="w-4 h-4 text-[#BFA181] flex-shrink-0" />
                <span>{t.brand.heroSupporting}</span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => {
                    const el = document.getElementById('verticals-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <span>{t.brand.exploreSolutions}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent hover:bg-[#178582]/20 text-white font-semibold text-sm sm:text-base border border-[#178582] hover:border-[#BFA181] transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.brand.partnerInnoVedas}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#BFA181]" />
                </button>
              </div>

              {/* 10-Second Brand Identity Micro-Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left max-w-lg mx-auto lg:mx-0">
                <div className="p-2">
                  <span className="text-xs text-[#BFA181] font-semibold block">Vedas Institute</span>
                  <span className="text-[11px] text-slate-400">Civil Services & Exams</span>
                </div>
                <div className="p-2 border-x border-slate-800/80">
                  <span className="text-xs text-[#178582] font-semibold block">Kaushal AI</span>
                  <span className="text-[11px] text-slate-400">12+ Regional Languages</span>
                </div>
                <div className="p-2">
                  <span className="text-xs text-white font-semibold block">AI Agents</span>
                  <span className="text-[11px] text-slate-400">e-Gov & Personal Tutors</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column: Geometric Animated Node Constellation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full relative bg-[#06111D]/80 border border-[#178582]/30 rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
                
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#BFA181]">
                    Connected Ecosystem Diagram
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    AI-Powered Multi-Sector Mesh
                  </span>
                </div>

                <HeroNodeVisual currentLang={currentLang} />

                <div className="mt-3 text-center">
                  <p className="text-[11px] text-slate-400">
                    {currentLang === 'en'
                      ? "Interactive node map: Hover or tap any sector to view connected InnoVedas capability."
                      : "संवादात्मक नोड आरेख: संबंधित क्षेत्र की क्षमता जानने हेतु किसी भी नोड पर टैप करें।"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — TRUST / IMPACT NUMBERS (DYNAMIC COUNTERS)
          ========================================================================= */}
      <TrustImpactCounters 
        currentLang={currentLang} 
        stats={stats} 
        onUpdateStats={onUpdateStats} 
      />


      {/* =========================================================================
          SECTION 3 — WHAT WE DO (FIVE VERTICALS)
          ========================================================================= */}
      <section 
        id="verticals-section"
        className="py-20 bg-[#0F2238] border-b border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.verticals.heading}
            </h2>
            <p className="text-base text-slate-300">
              {t.verticals.subline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Vedas Institute */}
            <div 
              id="vertical-card-vedas"
              className="group bg-[#0A1828] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#178582]/15 border border-[#178582]/40 flex items-center justify-center text-[#BFA181] mb-5 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-semibold text-[#178582] tracking-wider">Exam Excellence</span>
                  <span className="text-[10px] bg-[#178582]/20 text-[#BFA181] px-2 py-0.5 rounded font-mono">Affordable</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                  {t.verticals.v1Title}
                </h3>
                <p className="text-xs font-medium text-[#BFA181] mb-3">
                  "{t.verticals.v1Desc}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.verticals.v1Details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('vedas-institute')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0F2238] hover:bg-[#178582] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#178582]"
                >
                  <span>{t.verticals.v1Cta}</span>
                  <ChevronRight className="w-4 h-4 text-[#BFA181] group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Card 2: Kaushal AI */}
            <div 
              id="vertical-card-kaushal"
              className="group bg-[#0A1828] border border-[#BFA181]/40 hover:border-[#BFA181] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#0A1828]/60 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#BFA181] text-[#0A1828] text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">
                Featured Flagship
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#BFA181]/15 border border-[#BFA181]/40 flex items-center justify-center text-[#BFA181] mb-5 group-hover:scale-110 transition-transform">
                  <Languages className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-semibold text-[#BFA181] tracking-wider">Vernacular Skilling</span>
                  <span className="text-[10px] bg-[#BFA181]/20 text-[#BFA181] px-2 py-0.5 rounded font-mono">12+ Languages</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                  {t.verticals.v2Title}
                </h3>
                <p className="text-xs font-medium text-[#BFA181] mb-3">
                  "{t.verticals.v2Desc}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.verticals.v2Details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('kaushal-ai')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-xs font-bold text-[#0A1828] transition-all flex items-center justify-center gap-2 shadow"
                >
                  <span>{t.verticals.v2Cta}</span>
                  <ChevronRight className="w-4 h-4 text-[#0A1828]" />
                </button>
              </div>
            </div>

            {/* Card 3: AI-Powered Digital Marketing */}
            <div 
              id="vertical-card-marketing"
              className="group bg-[#0A1828] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#178582]/15 border border-[#178582]/40 flex items-center justify-center text-[#178582] mb-5 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-semibold text-[#178582] tracking-wider">Business Growth</span>
                  <span className="text-[10px] bg-[#178582]/20 text-[#178582] px-2 py-0.5 rounded font-mono">Local Brands</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                  {t.verticals.v3Title}
                </h3>
                <p className="text-xs font-medium text-[#BFA181] mb-3">
                  "{t.verticals.v3Desc}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.verticals.v3Details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('digital-marketing')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0F2238] hover:bg-[#178582] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#178582]"
                >
                  <span>{t.verticals.v3Cta}</span>
                  <ChevronRight className="w-4 h-4 text-[#BFA181] group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Card 4: AI Literacy & AI Skill Development */}
            <div 
              id="vertical-card-workshops"
              className="group bg-[#0A1828] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#178582]/15 border border-[#178582]/40 flex items-center justify-center text-[#BFA181] mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-semibold text-[#178582] tracking-wider">Capacity Building</span>
                  <span className="text-[10px] bg-[#178582]/20 text-[#BFA181] px-2 py-0.5 rounded font-mono">Hands-on</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                  {t.verticals.v4Title}
                </h3>
                <p className="text-xs font-medium text-[#BFA181] mb-3">
                  "{t.verticals.v4Desc}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.verticals.v4Details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('ai-workshops')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0F2238] hover:bg-[#178582] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#178582]"
                >
                  <span>{t.verticals.v4Cta}</span>
                  <ChevronRight className="w-4 h-4 text-[#BFA181] group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Card 5: AI Agents & Intelligent Assistants */}
            <div 
              id="vertical-card-agents"
              className="group bg-[#0A1828] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between lg:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#178582]/15 border border-[#178582]/40 flex items-center justify-center text-[#178582] mb-5 group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] bg-[#178582]/20 text-[#BFA181] px-2.5 py-1 rounded-full font-mono border border-[#178582]/40">
                    Next-Gen Systemic AI
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase font-semibold text-[#178582] tracking-wider">Autonomous Workflows</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                  {t.verticals.v5Title}
                </h3>
                <p className="text-xs font-medium text-[#BFA181] mb-3">
                  "{t.verticals.v5Desc}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  {t.verticals.v5Details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>• Govt RTI Assistant</span>
                  <span>• Vernacular Personal Tutor</span>
                  <span>• Departmental Copilots</span>
                </div>
                <button
                  onClick={() => onNavigate('ai-agents')}
                  className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#178582] hover:bg-[#116563] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.verticals.v5Cta}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — WHY INNOVEDAS? (6 VALUE PROPS WITH LINE ICONS)
          ========================================================================= */}
      <section 
        id="why-innovedas-section"
        className="py-20 bg-[#0A1828] border-b border-slate-800 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              Distinctive Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.whyInnoVedas.heading}
            </h2>
            <p className="text-base text-slate-300">
              {t.whyInnoVedas.subline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Education + Technology */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#BFA181]/60 flex items-center justify-center text-[#BFA181] mb-4">
                <BookOpen className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p1Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p1Desc}
              </p>
            </div>

            {/* 2. Affordable Approach */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#178582] flex items-center justify-center text-[#178582] mb-4">
                <Shield className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p2Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p2Desc}
              </p>
            </div>

            {/* 3. Regional Focus */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#BFA181]/60 flex items-center justify-center text-[#BFA181] mb-4">
                <Languages className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p3Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p3Desc}
              </p>
            </div>

            {/* 4. Practical Learning */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#178582] flex items-center justify-center text-[#178582] mb-4">
                <Award className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p4Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p4Desc}
              </p>
            </div>

            {/* 5. Government & Institutional Orientation */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#BFA181]/60 flex items-center justify-center text-[#BFA181] mb-4">
                <Landmark className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p5Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p5Desc}
              </p>
            </div>

            {/* 6. AI-First Thinking */}
            <div className="p-6 rounded-2xl bg-[#0F2238]/60 border border-[#178582]/25 hover:border-[#BFA181]/50 transition-all group">
              <div className="w-10 h-10 rounded-lg border border-[#178582] flex items-center justify-center text-[#178582] mb-4">
                <Cpu className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#BFA181] transition-colors">
                {t.whyInnoVedas.p6Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.whyInnoVedas.p6Desc}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — KAUSHAL AI (FEATURED PRODUCT)
          ========================================================================= */}
      <section 
        id="kaushal-ai-section"
        className="py-20 bg-[#0B1D30] border-b border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Concept & Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BFA181]/15 text-xs font-semibold text-[#BFA181] border border-[#BFA181]/30">
                <Sparkles className="w-3.5 h-3.5" />
                {t.kaushalAiSection.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {t.kaushalAiSection.headline}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.kaushalAiSection.subheading}
              </p>

              {/* 4-Step Process: Learn -> Practice -> Apply -> Improve */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#BFA181]">
                  {t.kaushalAiSection.conceptTitle}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#071322] border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#178582] text-white flex items-center justify-center text-[10px]">1</span>
                      {t.kaushalAiSection.step1}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{t.kaushalAiSection.step1Desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#071322] border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#BFA181] text-[#0A1828] flex items-center justify-center text-[10px] font-bold">2</span>
                      {t.kaushalAiSection.step2}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{t.kaushalAiSection.step2Desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#071322] border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#178582] text-white flex items-center justify-center text-[10px]">3</span>
                      {t.kaushalAiSection.step3}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{t.kaushalAiSection.step3Desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#071322] border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#BFA181] text-[#0A1828] flex items-center justify-center text-[10px] font-bold">4</span>
                      {t.kaushalAiSection.step4}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{t.kaushalAiSection.step4Desc}</p>
                  </div>
                </div>
              </div>

              {/* Regional Language Chip Grid */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#BFA181]">
                    {t.kaushalAiSection.langGridTitle}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">12+ Dialects Supported</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {regionalLanguagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguageChip(lang.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedLanguageChip === lang.code
                          ? 'bg-[#BFA181] text-[#0A1828] font-bold shadow'
                          : 'bg-[#071322] text-slate-300 hover:text-white border border-slate-800 hover:border-[#178582]'
                      }`}
                    >
                      {lang.nameNative} ({lang.nameEn})
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('kaushal-ai')}
                  className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-sm transition-all flex items-center gap-2 shadow-lg"
                >
                  <span>{t.kaushalAiSection.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Visual Timeline / Episode Structure Simulation */}
            <div className="lg:col-span-6">
              <div className="bg-[#071322] border border-[#178582]/40 rounded-2xl p-6 shadow-2xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#178582]">
                      Micro-Course Architecture
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {t.kaushalAiSection.courseSample}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181] text-[10px] font-mono">
                    5 Episodes • 8 Mins Total
                  </span>
                </div>

                {/* 5 Episodes Timeline */}
                <div className="mt-5 space-y-3">
                  
                  {[
                    { ep: 1, title: t.kaushalAiSection.ep1, duration: "1:45 min", status: "Concept" },
                    { ep: 2, title: t.kaushalAiSection.ep2, duration: "1:50 min", status: "Actionable" },
                    { ep: 3, title: t.kaushalAiSection.ep3, duration: "2:10 min", status: "AI Tooling" },
                    { ep: 4, title: t.kaushalAiSection.ep4, duration: "1:35 min", status: "Automation" },
                    { ep: 5, title: t.kaushalAiSection.ep5, duration: "1:55 min", status: "Analytics" },
                  ].map((item) => (
                    <div
                      key={item.ep}
                      onClick={() => setActiveEpisode(item.ep)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeEpisode === item.ep
                          ? 'bg-[#178582]/20 border-[#BFA181] text-white shadow-md'
                          : 'bg-[#0A1828] border-slate-800 text-slate-300 hover:border-[#178582]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          activeEpisode === item.ep ? 'bg-[#BFA181] text-[#0A1828]' : 'bg-slate-800 text-slate-300'
                        }`}>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-snug">{item.title}</p>
                          <span className="text-[10px] text-slate-400">{item.duration} • Micro-Format</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-[#BFA181]">
                        {item.status}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Micro-learning Simulator player preview */}
                <div className="mt-5 p-4 rounded-xl bg-[#0A1828] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-[#BFA181]" />
                    <span className="text-xs text-slate-300">
                      Active Language Audio: <strong className="text-[#BFA181]">{regionalLanguagesList.find(l => l.code === selectedLanguageChip)?.nameNative}</strong>
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('kaushal-ai')}
                    className="text-xs text-[#178582] hover:text-[#BFA181] font-semibold flex items-center gap-1"
                  >
                    Launch Interactive Player
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — AI LITERACY & WORKSHOPS (4 AUDIENCE SEGMENTS)
          ========================================================================= */}
      <section 
        id="ai-workshops-section"
        className="py-20 bg-[#0A1828] border-b border-slate-800 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              {t.aiWorkshopsSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.aiWorkshopsSection.headline}
            </h2>
            <p className="text-base text-slate-300">
              {t.aiWorkshopsSection.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Segment 1: School Students */}
            <div className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#178582]/20 flex items-center justify-center text-[#BFA181] mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.aiWorkshopsSection.seg1Title}
                </h3>
                <p className="text-xs font-semibold text-[#BFA181] mb-2.5">
                  "{t.aiWorkshopsSection.seg1Question}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aiWorkshopsSection.seg1Desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase text-[#178582] tracking-wider block">
                  Curriculum: Ethics & Discovery
                </span>
              </div>
            </div>

            {/* Segment 2: College Students */}
            <div className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#BFA181]/20 flex items-center justify-center text-[#BFA181] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.aiWorkshopsSection.seg2Title}
                </h3>
                <p className="text-xs font-semibold text-[#BFA181] mb-2.5">
                  "{t.aiWorkshopsSection.seg2Question}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aiWorkshopsSection.seg2Desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase text-[#178582] tracking-wider block">
                  Curriculum: Career & Prompting
                </span>
              </div>
            </div>

            {/* Segment 3: Government Employees */}
            <div className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#178582]/20 flex items-center justify-center text-[#178582] mb-4">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.aiWorkshopsSection.seg3Title}
                </h3>
                <p className="text-xs font-semibold text-[#BFA181] mb-2.5">
                  "{t.aiWorkshopsSection.seg3Question}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aiWorkshopsSection.seg3Desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase text-[#178582] tracking-wider block">
                  Curriculum: File SOPs & Citizen Ops
                </span>
              </div>
            </div>

            {/* Segment 4: Citizens */}
            <div className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#BFA181]/20 flex items-center justify-center text-[#BFA181] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t.aiWorkshopsSection.seg4Title}
                </h3>
                <p className="text-xs font-semibold text-[#BFA181] mb-2.5">
                  "{t.aiWorkshopsSection.seg4Question}"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.aiWorkshopsSection.seg4Desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800">
                <span className="text-[10px] font-mono uppercase text-[#178582] tracking-wider block">
                  Curriculum: Daily Utility & Safety
                </span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('ai-workshops')}
              className="px-6 py-3 rounded-full bg-[#178582] hover:bg-[#116563] text-white font-semibold text-sm transition-all inline-flex items-center gap-2 shadow"
            >
              <span>{t.aiWorkshopsSection.cta}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — AI AGENTS (UNDERSTAND -> REASON -> ACT -> RESPOND)
          ========================================================================= */}
      <section 
        id="ai-agents-section"
        className="py-20 bg-[#071322] border-b border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              {t.aiAgentsSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.aiAgentsSection.headline}
            </h2>
            <p className="text-base text-slate-300">
              {t.aiAgentsSection.subheading}
            </p>
          </div>

          {/* Understand -> Reason -> Act -> Respond 4-stage pipeline */}
          <div className="mb-16">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#BFA181] text-center mb-6">
              {t.aiAgentsSection.frameworkTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#0A1828] border border-[#178582]/30 relative">
                <span className="text-2xl font-black text-[#178582] font-mono">01</span>
                <h3 className="text-base font-bold text-white mt-1 mb-1">{t.aiAgentsSection.f1}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t.aiAgentsSection.f1Desc}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A1828] border border-[#178582]/30 relative">
                <span className="text-2xl font-black text-[#BFA181] font-mono">02</span>
                <h3 className="text-base font-bold text-white mt-1 mb-1">{t.aiAgentsSection.f2}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t.aiAgentsSection.f2Desc}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A1828] border border-[#178582]/30 relative">
                <span className="text-2xl font-black text-[#178582] font-mono">03</span>
                <h3 className="text-base font-bold text-white mt-1 mb-1">{t.aiAgentsSection.f3}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t.aiAgentsSection.f3Desc}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A1828] border border-[#178582]/30 relative">
                <span className="text-2xl font-black text-[#BFA181] font-mono">04</span>
                <h3 className="text-base font-bold text-white mt-1 mb-1">{t.aiAgentsSection.f4}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{t.aiAgentsSection.f4Desc}</p>
              </div>

            </div>
          </div>

          {/* TWO FLAGSHIP CONCEPTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Flagship 1: Government Employee AI Assistant */}
            <div className="p-8 rounded-2xl bg-[#0A1828] border border-[#178582]/40 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#178582]/20 flex items-center justify-center text-[#BFA181]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181] border border-[#178582]/30">
                    Departmental Pilot
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.aiAgentsSection.flagship1Title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {t.aiAgentsSection.flagship1Desc}
                </p>
                <div className="p-3 rounded-xl bg-[#0F2238] border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA181]" />
                    <span>State gazette indexing & cross-citation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA181]" />
                    <span>RTI response drafting with human approval trigger</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('ai-agents')}
                  className="text-xs text-[#BFA181] hover:text-white font-semibold flex items-center gap-1.5"
                >
                  Learn more about Government AI Pilots
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Flagship 2: AI Personal Tutor */}
            <div className="p-8 rounded-2xl bg-[#0A1828] border border-[#BFA181]/40 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BFA181]/20 flex items-center justify-center text-[#BFA181]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#BFA181]/20 text-[#BFA181] border border-[#BFA181]/30">
                    Adaptive Companion
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.aiAgentsSection.flagship2Title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {t.aiAgentsSection.flagship2Desc}
                </p>
                <div className="p-3 rounded-xl bg-[#0F2238] border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#178582]" />
                    <span>Vernacular analogies for complex scientific terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#178582]" />
                    <span>Real-time doubt resolution without judgment</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('ai-agents')}
                  className="text-xs text-[#BFA181] hover:text-white font-semibold flex items-center gap-1.5"
                >
                  Explore Personal Tutor Architecture
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8 — VEDAS INSTITUTE RECAP
          ========================================================================= */}
      <section 
        id="vedas-recap-section"
        className="py-16 bg-[#0A1828] border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#0F243A] to-[#0A1828] border border-[#178582]/40 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold">
                {t.vedasSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.vedasSection.headline}
              </h2>
              <p className="text-sm text-slate-300">
                {t.vedasSection.subheading}
              </p>
              <p className="text-xs text-[#BFA181] font-medium pt-1">
                {t.vedasSection.examsCovered}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('vedas-institute')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-sm transition-all text-center"
              >
                {t.vedasSection.cta}
              </button>
              <button
                onClick={() => onOpenInquiry('Vedas Institute')}
                className="px-6 py-3 rounded-full bg-[#178582] hover:bg-[#116563] text-white font-semibold text-sm transition-all text-center"
              >
                Enroll for Test Series
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9 — INSTITUTIONAL / GOVERNMENT SOLUTIONS ("PARTNER WITH US")
          ========================================================================= */}
      <section 
        id="institutional-section"
        className="py-20 bg-[#0F2238] border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              {t.institutionalSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.institutionalSection.headline}
            </h2>
            <p className="text-base text-slate-300">
              {t.institutionalSection.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Who We Work With */}
            <div className="lg:col-span-6 bg-[#0A1828] p-8 rounded-2xl border border-[#178582]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#BFA181]" />
                {t.institutionalSection.partnersTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.institutionalSection.partnersList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0F2238] text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#178582] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Models */}
            <div className="lg:col-span-6 bg-[#0A1828] p-8 rounded-2xl border border-[#178582]/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#178582]" />
                  {t.institutionalSection.modelsTitle}
                </h3>
                <div className="space-y-2">
                  {t.institutionalSection.modelsList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#0F2238] text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BFA181]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('institutional')}
                  className="w-full py-3 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>{t.institutionalSection.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 10 — PROJECTS & IMPACT (CASE STUDIES WITH TEMPLATE)
          ========================================================================= */}
      <section 
        id="projects-section"
        className="py-20 bg-[#0A1828] border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
                {t.projectsSection.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {t.projectsSection.headline}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {t.projectsSection.subheading}
              </p>
            </div>

            <span className="mt-4 md:mt-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#178582]/20 text-[#BFA181] border border-[#178582]/40">
              {t.projectsSection.sampleBadge}
            </span>
          </div>

          {/* 3 Case Study Cards following: Problem -> Solution -> Technology -> Implementation -> Impact -> Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudiesList.map((cs) => {
              const title = currentLang === 'en' ? cs.titleEn : cs.titleHi;
              const cat = currentLang === 'en' ? cs.clientCategoryEn : cs.clientCategoryHi;
              const prob = currentLang === 'en' ? cs.problemEn : cs.problemHi;
              const sol = currentLang === 'en' ? cs.solutionEn : cs.solutionHi;
              const imp = currentLang === 'en' ? cs.impactMetricsEn : cs.impactMetricsHi;
              const quote = currentLang === 'en' ? cs.testimonialQuoteEn : cs.testimonialQuoteHi;
              const author = currentLang === 'en' ? cs.testimonialAuthorEn : cs.testimonialAuthorHi;

              return (
                <div 
                  key={cs.id}
                  className="bg-[#0F2238] border border-[#178582]/30 hover:border-[#BFA181] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181]">
                        {cat}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug">
                      {title}
                    </h3>

                    {/* Problem */}
                    <div className="p-3 rounded-lg bg-[#0A1828] border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-rose-400 font-semibold block mb-0.5">
                        Problem
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {prob}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-3 rounded-lg bg-[#0A1828] border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold block mb-0.5">
                        Solution & Technology
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sol}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cs.technology.map((tech, i) => (
                          <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-[#178582]/30 text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] uppercase font-mono text-[#BFA181] font-semibold block">
                        Verified Impact
                      </span>
                      {imp.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#178582] flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 italic">
                      "{quote}"
                      <span className="block not-italic text-[10px] text-[#BFA181] mt-1 font-semibold">
                        — {author}
                      </span>
                    </div>

                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800">
                    <button
                      onClick={() => onNavigate('projects')}
                      className="text-xs text-[#178582] hover:text-[#BFA181] font-semibold flex items-center gap-1"
                    >
                      <span>{t.projectsSection.viewFullCase}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 11 — TESTIMONIALS (SAMPLE PLACEHOLDERS)
          ========================================================================= */}
      <section 
        id="testimonials-section"
        className="py-20 bg-[#0F2238] border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
                {t.testimonialsSection.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {t.testimonialsSection.headline}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {t.testimonialsSection.subheading}
              </p>
            </div>

            <span className="mt-4 md:mt-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#178582]/20 text-[#BFA181] border border-[#178582]/40">
              {t.testimonialsSection.sampleBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsList.map((item) => {
              const quote = currentLang === 'en' ? item.quoteEn : item.quoteHi;
              const author = currentLang === 'en' ? item.authorEn : item.authorHi;
              const role = currentLang === 'en' ? item.roleEn : item.roleHi;
              const loc = currentLang === 'en' ? item.locationEn : item.locationHi;

              return (
                <div 
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#0A1828] border border-[#178582]/25 hover:border-[#BFA181]/60 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181]">
                      {item.category}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{quote}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800">
                    <div className="font-bold text-xs text-white">{author}</div>
                    <div className="text-[11px] text-[#BFA181]">{role}</div>
                    <div className="text-[10px] text-slate-500">{loc}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 12 — PARTNERS & ECOSYSTEM LOGO WALL
          ========================================================================= */}
      <section 
        id="partners-section"
        className="py-16 bg-[#0A1828] border-b border-slate-800 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold font-['Outfit']">
              {t.partnersSection.eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.partnersSection.headline}
            </h3>
            <p className="text-xs text-slate-400">
              {t.partnersSection.disclaimer}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ecosystemPartners.map((p, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#0F2238]/60 border border-slate-800 hover:border-[#178582]/50 flex flex-col items-center justify-center text-center transition-all group"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-[#BFA181]">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {p.type}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 13 — FINAL CTA (4 BUTTONS)
          ========================================================================= */}
      <section 
        id="final-cta-section"
        className="py-24 bg-gradient-to-b from-[#0F2238] to-[#06111D] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.finalCta.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.finalCta.body}
          </p>

          {/* 4 ACTION BUTTONS REQUIRED BY BRIEF */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            <button
              onClick={() => onNavigate('vedas-institute')}
              className="py-3 px-4 rounded-xl bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs transition-all shadow-md"
            >
              {t.finalCta.b1}
            </button>

            <button
              onClick={() => onNavigate('ai-workshops')}
              className="py-3 px-4 rounded-xl bg-[#178582] hover:bg-[#116563] text-white font-bold text-xs transition-all shadow-md"
            >
              {t.finalCta.b2}
            </button>

            <button
              onClick={() => onNavigate('institutional')}
              className="py-3 px-4 rounded-xl bg-[#0F2238] hover:bg-slate-800 text-[#BFA181] border border-[#BFA181]/40 hover:border-[#BFA181] font-bold text-xs transition-all"
            >
              {t.finalCta.b3}
            </button>

            <button
              onClick={() => onNavigate('ai-agents')}
              className="py-3 px-4 rounded-xl bg-[#0A1828] hover:bg-[#178582]/30 text-white border border-[#178582] font-bold text-xs transition-all"
            >
              {t.finalCta.b4}
            </button>

          </div>

          <div className="pt-8 text-xs text-slate-400">
            Headquartered at Raipur, Chhattisgarh • Serving Learners and Institutions Nationally
          </div>

        </div>
      </section>

    </div>
  );
};
