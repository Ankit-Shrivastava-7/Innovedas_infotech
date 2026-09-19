import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Sparkles, Filter, Building, 
  GraduationCap, Landmark, ExternalLink, ShieldCheck 
} from 'lucide-react';
import { Language, PageId } from '../types';
import { caseStudiesList } from '../data/cmsContent';

interface ProjectsPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredStudies = selectedFilter === 'all' 
    ? caseStudiesList 
    : caseStudiesList.filter(c => c.clientCategoryEn.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
                <Sparkles className="w-3.5 h-3.5" />
                VERIFIED OUTCOMES & CASE STUDIES
              </span>
              <span className="text-xs font-mono text-slate-400">
                [SAMPLE CASE STUDY TEMPLATES]
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "Projects & Ground Impact." : "परियोजनाएं एवं धरातलीय प्रभाव।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Explore how InnoVedas solutions translate into measurable milestones: students clearing state PSC mains, administrative officers saving hours on grievance summaries, and college youth gaining verifiable AI job competencies."
                : "जानिए कि किस प्रकार इनोवेदास के समाधान धरातल पर सार्थक परिणाम लाते हैं: प्रतियोगी परीक्षाओं में सफलता, शासकीय कार्यों में समय की बचत और विद्यार्थियों का तकनीकी सशक्तिकरण।"}
            </p>
          </div>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by Sector:
          </span>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'government', label: 'Government & e-Governance' },
            { id: 'university', label: 'Colleges & Higher Ed' },
            { id: 'rural', label: 'Rural & Vernacular Skilling' },
          ].map((flt) => (
            <button
              key={flt.id}
              onClick={() => setSelectedFilter(flt.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === flt.id
                  ? 'bg-[#BFA181] text-[#0A1828] font-bold shadow'
                  : 'bg-[#0F2238] text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {flt.label}
            </button>
          ))}
        </div>

        {/* CASE STUDIES CARDS FOLLOWING RIGOROUS TEMPLATE */}
        <div className="space-y-12">
          {filteredStudies.map((cs) => {
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
                className="bg-[#0F2238] border border-[#178582]/30 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#BFA181] px-2.5 py-1 rounded bg-[#0A1828] mb-2 inline-block">
                      {cat}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-[#0A1828] border border-slate-800 self-start sm:self-center">
                    [CASE STUDY: COMPLETED PILOT]
                  </span>
                </div>

                {/* Grid of Problem -> Solution -> Technology -> Implementation */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Problem & Solution & Tech */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold mb-2">
                        1. The Challenge / Problem Statement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0A1828] p-4 rounded-xl border border-slate-800">
                        {prob}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                        2. InnoVedas Tailored Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0A1828] p-4 rounded-xl border border-slate-800">
                        {sol}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#BFA181] font-bold mb-2">
                        3. Core Technologies & Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.technology.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-lg bg-[#0A1828] border border-[#178582]/40 text-[#178582] font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Verified Impact & Testimonial */}
                  <div className="lg:col-span-5 space-y-6 bg-[#0A1828] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#BFA181] font-bold mb-3">
                        4. Quantified Field Impact
                      </h4>
                      <div className="space-y-3">
                        {imp.map((metric, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#178582] flex-shrink-0 mt-0.5" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                        5. Stakeholder Feedback
                      </h4>
                      <blockquote className="text-xs text-slate-300 italic">
                        "{quote}"
                      </blockquote>
                      <div className="text-xs text-[#BFA181] font-bold mt-2">
                        — {author}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400">
                    Interested in replicating this model for your district or campus?
                  </span>
                  <button
                    onClick={() => onOpenInquiry(`Replicate Project: ${title}`)}
                    className="px-5 py-2 rounded-xl bg-[#178582] hover:bg-[#116563] text-white text-xs font-semibold flex items-center gap-1.5 shadow"
                  >
                    Discuss Similar Implementation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
