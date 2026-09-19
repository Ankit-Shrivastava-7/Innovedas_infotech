/**
 * InnoVedas EdTech Pvt. Ltd. — Digital Home
 * "Learn. Skill. Innovate. Transform."
 * "Learn Better. Skill Faster. Work Smarter. Grow with AI."
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VedasInstitutePage } from './pages/VedasInstitutePage';
import { KaushalAIPage } from './pages/KaushalAIPage';
import { AIWorkshopsPage } from './pages/AIWorkshopsPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import { AIAgentsPage } from './pages/AIAgentsPage';
import { InstitutionalSolutionsPage } from './pages/InstitutionalSolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { Language, PageId, ImpactStat } from './types';
import { initialImpactStats } from './data/cmsContent';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('innovedas_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [stats, setStats] = useState<ImpactStat[]>(initialImpactStats);
  
  // Quick Inquiry Modal State
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPrefill, setInquiryPrefill] = useState<string | undefined>(undefined);

  // Sync language selection to localStorage
  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('innovedas_lang', lang);
  };

  // Smooth navigation handler
  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open Quick Inquiry Modal with contextual subject
  const handleOpenInquiry = (reqType?: string) => {
    setInquiryPrefill(reqType);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A1828] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#BFA181] selection:text-[#0A1828]">
      
      {/* STICKY BILINGUAL HEADER */}
      <Header
        currentLang={currentLang}
        currentPage={currentPage}
        onToggleLang={handleToggleLang}
        setLanguage={handleToggleLang}
        onNavigate={handleNavigate}
        setCurrentPage={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
        onOpenContactModal={() => handleOpenInquiry('General Consultation')}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            stats={stats}
            onUpdateStats={setStats}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'vedas-institute' && (
          <VedasInstitutePage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'kaushal-ai' && (
          <KaushalAIPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'ai-workshops' && (
          <AIWorkshopsPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'digital-marketing' && (
          <DigitalMarketingPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'ai-agents' && (
          <AIAgentsPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'institutional' && (
          <InstitutionalSolutionsPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {(currentPage === 'blog' || currentPage === 'resources') && (
          <BlogPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            currentLang={currentLang}
            prefillRequirement={inquiryPrefill}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
      />

      {/* PERSISTENT FLOATING WHATSAPP BUTTON WITH PRE-FILLED PROMPTS */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* CONTEXTUAL QUICK INQUIRY MODAL */}
      <QuickInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        currentLang={currentLang}
        prefillRequirement={inquiryPrefill}
      />

    </div>
  );
}
