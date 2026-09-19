import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Globe, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { InnoVedasLogo } from './InnoVedasLogo';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang?: (lang: Language) => void;
  setLanguage?: (lang: Language) => void;
  currentPage: PageId;
  onNavigate?: (page: PageId, anchor?: string) => void;
  setCurrentPage?: (page: PageId) => void;
  onOpenInquiry?: (reqType?: string) => void;
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  setLanguage,
  currentPage,
  onNavigate,
  setCurrentPage,
  onOpenInquiry,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const t = translations[currentLang];

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const navigateTo = (page: PageId, anchor?: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(page, anchor);
    } else if (setCurrentPage) {
      setCurrentPage(page);
    }

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const changeLanguage = (lang: Language) => {
    if (onToggleLang) {
      onToggleLang(lang);
    } else if (setLanguage) {
      setLanguage(lang);
    }
  };

  const handleCtaClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry('General Consultation');
    } else if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      navigateTo('contact');
    }
  };

  return (
    <header 
      ref={headerRef}
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A1828]/95 backdrop-blur-md border-b border-[#178582]/25 shadow-lg shadow-[#0A1828]/50 py-3' 
          : 'bg-[#0A1828] border-b border-[#178582]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <button 
          id="header-logo-btn"
          type="button"
          onClick={() => navigateTo('home')} 
          className="flex items-center text-left py-1 group focus:outline-none focus:ring-2 focus:ring-[#BFA181]/40 rounded-lg p-1.5 cursor-pointer"
          aria-label="InnoVedas EdTech Homepage"
        >
          <InnoVedasLogo variant="dark-bg" size="md" />
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-slate-200">
          
          {/* HOME */}
          <button
            id="nav-home-btn"
            type="button"
            onClick={() => navigateTo('home')}
            className={`px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
              currentPage === 'home' ? 'text-[#BFA181] font-semibold bg-[#178582]/15' : ''
            }`}
          >
            {t.nav.home}
          </button>

          {/* ABOUT DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-about-btn"
              type="button"
              onClick={(e) => toggleDropdown('about', e)}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
                currentPage === 'about' ? 'text-[#BFA181] font-semibold bg-[#178582]/15' : ''
              }`}
            >
              <span>{t.nav.about}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#BFA181]' : 'opacity-70'}`} />
            </button>

            {activeDropdown === 'about' && (
              <div 
                className="absolute left-0 top-full pt-2 w-64 z-[60]"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-xl bg-[#0A1828] border border-[#178582]/40 shadow-2xl p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    type="button"
                    onClick={() => navigateTo('about', 'about-who')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    <span>{t.nav.aboutItems.aboutInnoVedas}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('about', 'vision-mission')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    <span>{t.nav.aboutItems.visionMission}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('about', 'leadership')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    <span>{t.nav.aboutItems.leadership}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('about', 'approach')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    <span>{t.nav.aboutItems.ourTeam}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('projects')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all flex items-center justify-between border-t border-slate-800/80 mt-1 pt-2 cursor-pointer"
                  >
                    <span>{t.nav.aboutItems.ourImpact}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#BFA181]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-solutions-btn"
              type="button"
              onClick={(e) => toggleDropdown('solutions', e)}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
                ['vedas-institute', 'kaushal-ai', 'ai-workshops', 'digital-marketing', 'ai-agents', 'institutional'].includes(currentPage)
                  ? 'text-[#BFA181] font-semibold bg-[#178582]/15'
                  : ''
              }`}
            >
              <span>{t.nav.solutions}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#BFA181]' : 'opacity-70'}`} />
            </button>

            {activeDropdown === 'solutions' && (
              <div 
                className="absolute left-0 top-full pt-2 w-80 z-[60]"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-xl bg-[#0A1828] border border-[#178582]/40 shadow-2xl p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    type="button"
                    onClick={() => navigateTo('vedas-institute')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all group cursor-pointer block"
                  >
                    <div className="font-medium text-white group-hover:text-[#BFA181] flex items-center justify-between">
                      <span>{t.nav.solutionsItems.vedasInstitute}</span>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#178582]/30 text-[#BFA181]">Govt Exams</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">UPSC, CGPSC, Vyapam, SSC & Banking preparation</p>
                  </button>

                  <button 
                    type="button"
                    onClick={() => navigateTo('kaushal-ai')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all group cursor-pointer block"
                  >
                    <div className="font-medium text-white group-hover:text-[#BFA181] flex items-center justify-between">
                      <span>{t.nav.solutionsItems.kaushalAI}</span>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#BFA181]/20 text-[#BFA181]">Vernacular</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">1–2 min micro-learning in 12+ regional languages</p>
                  </button>

                  <button 
                    type="button"
                    onClick={() => navigateTo('ai-workshops')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all group cursor-pointer block"
                  >
                    <div className="font-medium text-white group-hover:text-[#BFA181]">
                      {t.nav.solutionsItems.aiWorkshops}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Hands-on AI skill workshops for schools, colleges & staff</p>
                  </button>

                  <button 
                    type="button"
                    onClick={() => navigateTo('digital-marketing')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all group cursor-pointer block"
                  >
                    <div className="font-medium text-white group-hover:text-[#BFA181]">
                      {t.nav.solutionsItems.digitalMarketing}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Grow local brands with generative AI marketing workflows</p>
                  </button>

                  <button 
                    type="button"
                    onClick={() => navigateTo('ai-agents')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all group cursor-pointer block"
                  >
                    <div className="font-medium text-white group-hover:text-[#BFA181]">
                      {t.nav.solutionsItems.aiAgents}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Autonomous agents for government deskwork & personal tutors</p>
                  </button>

                  <button 
                    type="button"
                    onClick={() => navigateTo('institutional')}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-[#178582]/20 transition-all border-t border-slate-800/80 mt-1 pt-2 group cursor-pointer block"
                  >
                    <div className="font-medium text-[#178582] group-hover:text-[#BFA181] flex items-center justify-between">
                      <span>{t.nav.solutionsItems.institutional}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#BFA181]" />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Campus AI Labs, FDPs & Departmental Transformations</p>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* FOR DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('for')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-for-btn"
              type="button"
              onClick={(e) => toggleDropdown('for', e)}
              className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer"
            >
              <span>{t.nav.forWho}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'for' ? 'rotate-180 text-[#BFA181]' : 'opacity-70'}`} />
            </button>

            {activeDropdown === 'for' && (
              <div 
                className="absolute left-0 top-full pt-2 w-56 z-[60]"
                onMouseEnter={() => handleMouseEnter('for')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-xl bg-[#0A1828] border border-[#178582]/40 shadow-2xl p-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    type="button"
                    onClick={() => navigateTo('vedas-institute')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.students}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('institutional')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.schools}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('institutional')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.colleges}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('institutional')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.government}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('digital-marketing')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.businesses}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('kaushal-ai')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.entrepreneurs}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('ai-workshops')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 transition-all cursor-pointer block"
                  >
                    {t.nav.forItems.citizens}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PROJECTS */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-projects-btn"
              type="button"
              onClick={(e) => toggleDropdown('projects', e)}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
                currentPage === 'projects' ? 'text-[#BFA181] font-semibold bg-[#178582]/15' : ''
              }`}
            >
              <span>{t.nav.projects}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-[#BFA181]' : 'opacity-70'}`} />
            </button>

            {activeDropdown === 'projects' && (
              <div 
                className="absolute left-0 top-full pt-2 w-52 z-[60]"
                onMouseEnter={() => handleMouseEnter('projects')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-xl bg-[#0A1828] border border-[#178582]/40 shadow-2xl p-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    type="button"
                    onClick={() => navigateTo('projects')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.projectsItems.caseStudies}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('projects')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.projectsItems.initiatives}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('projects')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.projectsItems.impact}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RESOURCES / BLOG */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-resources-btn"
              type="button"
              onClick={(e) => toggleDropdown('resources', e)}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
                currentPage === 'blog' || currentPage === 'resources' ? 'text-[#BFA181] font-semibold bg-[#178582]/15' : ''
              }`}
            >
              <span>{t.nav.resources}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-[#BFA181]' : 'opacity-70'}`} />
            </button>

            {activeDropdown === 'resources' && (
              <div 
                className="absolute left-0 top-full pt-2 w-56 z-[60]"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rounded-xl bg-[#0A1828] border border-[#178582]/40 shadow-2xl p-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    type="button"
                    onClick={() => navigateTo('blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.resourcesItems.blog}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.resourcesItems.aiGuides}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.resourcesItems.news}
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigateTo('blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-[#178582]/20 cursor-pointer block"
                  >
                    {t.nav.resourcesItems.videos}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <button
            id="nav-contact-btn"
            type="button"
            onClick={() => navigateTo('contact')}
            className={`px-3 py-2 rounded-md transition-colors hover:text-[#BFA181] cursor-pointer ${
              currentPage === 'contact' ? 'text-[#BFA181] font-semibold bg-[#178582]/15' : ''
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* RIGHT ACTIONS: LANGUAGE SWITCHER + CTA BUTTON (PERMANENTLY VISIBLE) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* MANDATORY PERMANENT LANGUAGE SWITCHER (EN | हिं) */}
          <div 
            id="header-lang-switcher"
            className="flex items-center bg-[#178582]/20 border border-[#178582]/40 rounded-full p-0.5 text-xs font-semibold shadow-inner"
            title={currentLang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
          >
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => changeLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#BFA181] text-[#0A1828] font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={currentLang === 'en'}
            >
              EN
            </button>
            <button
              id="lang-btn-hi"
              type="button"
              onClick={() => changeLanguage('hi')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                currentLang === 'hi'
                  ? 'bg-[#BFA181] text-[#0A1828] font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={currentLang === 'hi'}
            >
              हिं
            </button>
          </div>

          {/* HEADER CTA BUTTON */}
          <button
            id="header-cta-btn"
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{t.brand.partnerCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* MOBILE QUICK CONNECT BUTTON */}
          <button
            id="mobile-quick-connect-btn"
            type="button"
            onClick={() => navigateTo('contact')}
            className="inline-flex sm:hidden items-center justify-center px-3 py-1.5 rounded-full bg-[#BFA181] text-[#0A1828] font-semibold text-xs transition-all shadow cursor-pointer"
          >
            {t.brand.connectCta}
          </button>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            id="mobile-hamburger-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE COLLAPSED MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A1828]/98 border-b border-[#178582]/30 shadow-2xl backdrop-blur-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto z-50 animate-in fade-in duration-150">
          
          <div className="flex flex-col space-y-1 divide-y divide-slate-800/80">
            
            <div className="py-2 space-y-1">
              <button 
                type="button"
                onClick={() => navigateTo('home')}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium cursor-pointer block ${currentPage === 'home' ? 'text-[#BFA181] bg-[#178582]/15' : 'text-slate-200'}`}
              >
                {t.nav.home}
              </button>
              <button 
                type="button"
                onClick={() => navigateTo('about')}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium cursor-pointer block ${currentPage === 'about' ? 'text-[#BFA181] bg-[#178582]/15' : 'text-slate-200'}`}
              >
                {t.nav.about}
              </button>
            </div>

            {/* SOLUTIONS LIST */}
            <div className="py-2.5">
              <span className="text-xs uppercase tracking-wider text-[#BFA181] font-semibold px-3 mb-1.5 block">
                {t.nav.solutions}
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <button 
                  type="button"
                  onClick={() => navigateTo('vedas-institute')}
                  className="text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white cursor-pointer block"
                >
                  • {t.nav.solutionsItems.vedasInstitute}
                </button>
                <button 
                  type="button"
                  onClick={() => navigateTo('kaushal-ai')}
                  className="text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white cursor-pointer block"
                >
                  • {t.nav.solutionsItems.kaushalAI}
                </button>
                <button 
                  type="button"
                  onClick={() => navigateTo('ai-workshops')}
                  className="text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white cursor-pointer block"
                >
                  • {t.nav.solutionsItems.aiWorkshops}
                </button>
                <button 
                  type="button"
                  onClick={() => navigateTo('digital-marketing')}
                  className="text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white cursor-pointer block"
                >
                  • {t.nav.solutionsItems.digitalMarketing}
                </button>
                <button 
                  type="button"
                  onClick={() => navigateTo('ai-agents')}
                  className="text-left px-3 py-1.5 text-sm text-slate-300 hover:text-white cursor-pointer block"
                >
                  • {t.nav.solutionsItems.aiAgents}
                </button>
                <button 
                  type="button"
                  onClick={() => navigateTo('institutional')}
                  className="text-left px-3 py-1.5 text-sm text-[#178582] font-medium cursor-pointer block"
                >
                  • {t.nav.solutionsItems.institutional}
                </button>
              </div>
            </div>

            <div className="py-2.5 space-y-1">
              <button 
                type="button"
                onClick={() => navigateTo('projects')}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium cursor-pointer block ${currentPage === 'projects' ? 'text-[#BFA181] bg-[#178582]/15' : 'text-slate-200'}`}
              >
                {t.nav.projects}
              </button>
              <button 
                type="button"
                onClick={() => navigateTo('blog')}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium cursor-pointer block ${currentPage === 'blog' || currentPage === 'resources' ? 'text-[#BFA181] bg-[#178582]/15' : 'text-slate-200'}`}
              >
                {t.nav.resources}
              </button>
              <button 
                type="button"
                onClick={() => navigateTo('contact')}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium cursor-pointer block ${currentPage === 'contact' ? 'text-[#BFA181] bg-[#178582]/15' : 'text-slate-200'}`}
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="w-full py-2.5 rounded-xl bg-[#BFA181] text-[#0A1828] font-bold text-center text-sm shadow cursor-pointer"
              >
                {t.brand.partnerCta}
              </button>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                <span>Raipur, Chhattisgarh</span>
                <span>•</span>
                <span>+91 81031 95321</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
