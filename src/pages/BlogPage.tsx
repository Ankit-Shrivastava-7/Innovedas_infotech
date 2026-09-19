import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { Language, PageId } from '../types';

interface BlogPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (reqType?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  currentLang,
  onNavigate,
  onOpenInquiry,
}) => {
  const articles = [
    {
      id: "b1",
      titleEn: "Why Vernacular AI Is Crucial for India's Next 100 Million Learners",
      titleHi: "भारत के अगले 10 करोड़ शिक्षार्थियों हेतु क्षेत्रीय AI क्यों अनिवार्य है?",
      category: "Perspective",
      date: "May 2026",
      readTime: "4 min read",
      summaryEn: "English fluency has long been an unfair gatekeeper to high-income technical skills. Here is how native speech models and micro-learning are closing the divide.",
      summaryHi: "अंग्रेजी ज्ञान लंबे समय से तकनीकी शिक्षा में बाधा रहा है। जानिए कैसे मातृभाषा AI मॉडल इस खाई को पाट रहे हैं।"
    },
    {
      id: "b2",
      titleEn: "How Government Officers in Chhattisgarh Are Using AI Safely for RTI and File Summaries",
      titleHi: "छत्तीसगढ़ में शासकीय अधिकारी RTI व फाइलों के लिए सुरक्षित AI का उपयोग कैसे कर रहे हैं?",
      category: "e-Governance",
      date: "April 2026",
      readTime: "5 min read",
      summaryEn: "A practical guide to departmental prompts, avoiding hallucinations, ensuring data privacy, and keeping human officers firmly in the decision loop.",
      summaryHi: "विभागीय कार्यों में AI के सुरक्षित उपयोग, डेटा गोपनीयता और प्रशासनिक नियमों के सटीक अनुपालन पर एक व्यावहारिक मार्गदर्शिका।"
    },
    {
      id: "b3",
      titleEn: "Demystifying Daily Answer Writing (DAW) for CGPSC Mains 2026",
      titleHi: "CGPSC मुख्य परीक्षा हेतु दैनिक उत्तर लेखन (DAW) की प्रभावी रणनीति",
      category: "Vedas Institute",
      date: "March 2026",
      readTime: "6 min read",
      summaryEn: "Why memorizing books isn't enough: Structuring answers with maps, constitutional articles, and economic survey data within the 3-hour limit.",
      summaryHi: "केवल किताबें रटना पर्याप्त नहीं: 3 घंटे की सीमा में सटीक संरचना, मानचित्र और आर्थिक सर्वेक्षण डेटा के साथ उत्तर कैसे लिखें।"
    },
    {
      id: "b4",
      titleEn: "5 Everyday AI Prompts for School Teachers to Cut Lesson Planning Time by Half",
      titleHi: "शिक्षकों के लिए 5 दैनिक AI प्रॉम्प्ट्स जो पाठ योजना का समय आधा कर देंगे",
      category: "AI Literacy",
      date: "March 2026",
      readTime: "3 min read",
      summaryEn: "Simple templates in Hindi and English for generating interactive quiz questions, role-playing science scenarios, and remedial math problems.",
      summaryHi: "कक्षा में रोचक क्विज, विज्ञान गतिविधियों और कमजोर छात्रों हेतु अभ्यास पत्र तैयार करने के सरल हिंदी व अंग्रेजी प्रॉम्प्ट्स।"
    }
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#0A1828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0D1E32] to-[#0A1828] border border-[#178582]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#178582]/20 border border-[#178582]/40 text-xs font-semibold text-[#BFA181]">
              <BookOpen className="w-3.5 h-3.5" />
              INNOVEDAS PERSPECTIVES & GUIDES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {currentLang === 'en' ? "Insights, Guides & Case Notes." : "विचार, मार्गदर्शिकाएं व लेख।"}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? "Thought leadership, practical prompts, civil services preparation guides, and updates from the frontline of Indian education and Artificial Intelligence."
                : "भारतीय शिक्षा, कौशल विकास और आर्टिफिशियल इंटेलिजेंस के व्यावहारिक उपयोग से जुड़े विचार, मार्गदर्शिकाएं और अध्ययन सामग्री।"}
            </p>
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="p-8 rounded-3xl bg-[#0F2238] border border-slate-800 hover:border-[#178582] transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded bg-[#0A1828] text-[#BFA181] font-mono">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#BFA181] transition-colors leading-snug">
                  {currentLang === 'en' ? art.titleEn : art.titleHi}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLang === 'en' ? art.summaryEn : art.summaryHi}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">By InnoVedas Research</span>
                <button
                  onClick={() => onOpenInquiry(`Read Full Article: ${art.titleEn}`)}
                  className="text-xs text-[#178582] hover:text-[#BFA181] font-semibold flex items-center gap-1"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
