import React from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, Instagram, Facebook, ArrowUpRight, Heart } from 'lucide-react';
import { InnoVedasLogo } from './InnoVedasLogo';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer id="main-footer" className="bg-[#060e18] text-slate-300 border-t border-[#178582]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND CALLOUT & TAGLINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <InnoVedasLogo variant="dark-bg" size="lg" />
            </div>
            
            <p className="text-xs uppercase tracking-widest text-[#BFA181] font-semibold">
              Education | Skills | AI | Digital Transformation
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2238] border border-slate-800 hover:border-[#BFA181] hover:text-[#BFA181] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2238] border border-slate-800 hover:border-[#BFA181] hover:text-[#BFA181] flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2238] border border-slate-800 hover:border-[#BFA181] hover:text-[#BFA181] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2238] border border-slate-800 hover:border-[#BFA181] hover:text-[#BFA181] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vedas-institute')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.vedasInstitute}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kaushal-ai')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.kaushalAI}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-workshops')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.aiWorkshops}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('digital-marketing')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.digitalMarketing}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-agents')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.aiAgents}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.solutionsItems.institutional}
                </button>
              </li>
            </ul>
          </div>

          {/* 'For' Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              {t.footer.forColumn}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('vedas-institute')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.students}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.schools}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.colleges}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('institutional')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.government}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('digital-marketing')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.businesses}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kaushal-ai')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.entrepreneurs}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-workshops')} className="hover:text-[#BFA181] transition-colors">
                  {t.nav.forItems.citizens}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              {t.footer.addressTitle}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BFA181] flex-shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#178582] flex-shrink-0" />
                <a href="tel:+918103195321" className="hover:text-[#BFA181] transition-colors">
                  {t.footer.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#178582] flex-shrink-0" />
                <a href="mailto:teamofvedas@gmail.com" className="hover:text-[#BFA181] transition-colors">
                  {t.footer.email}
                </a>
              </div>
            </div>

            {/* Quick Consultation Badge */}
            <div className="mt-4 p-3 rounded-xl bg-[#0A1828] border border-[#178582]/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-white block">
                  Have an institutional project in mind?
                </span>
                <span className="text-[10px] text-slate-400">
                  Connect with our founder team in Raipur
                </span>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-2.5 py-1 rounded bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-[11px] flex items-center gap-1 transition-all"
              >
                Inquire
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          
          <p className="text-[11px] text-slate-400">
            {t.footer.madeWith}
          </p>
        </div>

      </div>
    </footer>
  );
};
