import React from 'react';
import { 
  Rocket, TrendingUp, Target, MessageSquare, BarChart3, 
  Smartphone, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import { Language, PageId } from '../types';

interface DigitalMarketingPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const services = [
    {
      title: "AI-Generated Regional Creative & Ad Copy",
      desc: "Instant creation of festive posters, video reels, and ad copy in authentic Chhattisgarhi, Hindi, and regional dialects that connect deeply with local audiences.",
      tag: "Vernacular Content"
    },
    {
      title: "Hyper-Local SEO & Google Business Optimization",
      desc: "Dominating local 'near me' search rankings for clinics, coaching centers, showrooms, restaurants, and retail stores in Tier-2/Tier-3 cities.",
      tag: "Local Footfall"
    },
    {
      title: "Automated WhatsApp Sales Funnels",
      desc: "Transforming passive clicks into immediate chat conversations, dynamic product catalogs, and automated follow-ups that close deals 24/7.",
      tag: "Conversational ROI"
    },
    {
      title: "AI Audience Intelligence & Micro-Targeting",
      desc: "Cost-efficient performance ad campaigns on Meta and Google designed to eliminate wasted spend and bring down cost-per-lead by up to 40%.",
      tag: "Smart Spend"
    },
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <Rocket className="w-3.5 h-3.5" />
              AI-POWERED DIGITAL MARKETING FOR BHARAT
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "Grow Your Brand. Powered by AI." : "अपने ब्रांड का विस्तार करें। AI की शक्ति से।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Traditional agencies charge metro fees for generic campaigns. InnoVedas combines deep understanding of regional Indian consumers with cutting-edge AI creative pipelines to deliver authentic, cost-effective digital marketing for local brands, MSMEs, and educational institutions."
                : "पारंपरिक एजेंसियां सामान्य विज्ञापनों के लिए अत्यधिक शुल्क लेती हैं। इनोवेदास क्षेत्रीय उपभोक्ताओं की समझ को आधुनिक AI टूल्स के साथ जोड़कर स्थानीय उद्यमों और संस्थानों हेतु परिणामोन्मुखी मार्केटिंग उपलब्ध कराता है।"}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Digital Marketing Growth Audit')}
                className="px-6 py-3 rounded-full bg-[#BFA181] hover:bg-[#ad8f70] text-[#0A1828] font-bold text-xs sm:text-sm shadow-md"
              >
                {currentLang === 'en' ? "Get Free AI Marketing Audit" : "निःशुल्क AI मार्केटिंग ऑडिट प्राप्त करें"}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700"
              >
                {currentLang === 'en' ? "Discuss Custom Retainer" : "कस्टम मार्केटिंग प्लान पर चर्चा करें"}
              </button>
            </div>
          </div>
        </div>

        {/* 4 CORE SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#BFA181] px-2.5 py-1 rounded bg-[#0A1828]">
                  {srv.tag}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Tailored for Tier-2 & Tier-3 Markets</span>
                <button
                  onClick={() => onOpenInquiry(`Marketing: ${srv.title}`)}
                  className="text-xs text-[#BFA181] hover:underline font-semibold flex items-center gap-1"
                >
                  Explore Solution
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
