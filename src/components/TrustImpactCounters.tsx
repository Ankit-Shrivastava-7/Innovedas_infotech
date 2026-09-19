import React, { useState, useEffect } from 'react';
import { Settings, Check, RefreshCw, Sparkles, TrendingUp } from 'lucide-react';
import { Language, ImpactStat } from '../types';
import { translations } from '../data/translations';

interface TrustImpactCountersProps {
  currentLang: Language;
  stats: ImpactStat[];
  onUpdateStats: (newStats: ImpactStat[]) => void;
}

export const TrustImpactCounters: React.FC<TrustImpactCountersProps> = ({
  currentLang,
  stats,
  onUpdateStats,
}) => {
  const t = translations[currentLang];
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [tempStats, setTempStats] = useState<ImpactStat[]>(stats);

  // Sync temp stats when incoming stats change
  useEffect(() => {
    setTempStats(stats);
  }, [stats]);

  // Animated count-up simulation
  useEffect(() => {
    const duration = 1200; // ms
    const frameRate = 30; // ms
    const totalFrames = duration / frameRate;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      stats.forEach((stat) => {
        nextCounts[stat.id] = Math.floor(stat.value * ease);
      });

      setCounts(nextCounts);

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [stats]);

  const handleSaveCMS = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStats(tempStats);
    setIsEditorOpen(false);
  };

  const handleResetDefaults = () => {
    const defaultVals = [52400, 18250, 145, 48, 32, 95, 12];
    const reset = stats.map((st, i) => ({
      ...st,
      value: defaultVals[i] ?? st.value
    }));
    setTempStats(reset);
    onUpdateStats(reset);
  };

  return (
    <section 
      id="trust-impact-section"
      className="relative py-16 bg-[#0A1828] border-y border-[#178582]/20 overflow-hidden"
    >
      {/* Subtle circuit background overlay */}
      <div className="absolute inset-0 circuit-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with CMS Editable Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[#178582]/20 text-[#BFA181] border border-[#178582]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA181] animate-pulse" />
                {t.stats.cmsBadge}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                [DATA_LAYER: VERIFIED_METRICS]
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.stats.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              {t.stats.subtitle}
            </p>
          </div>

          {/* Interactive CMS Live Edit Toggle */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <button
              id="cms-edit-btn"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-[#BFA181]/40 hover:border-[#BFA181] text-xs font-medium text-[#BFA181] hover:text-white transition-all shadow-sm"
              title="Test real-time CMS metric editing"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{t.stats.editButton}</span>
            </button>
          </div>
        </div>

        {/* 7 DYNAMIC METRIC COUNTER CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {stats.map((stat) => {
            const currentDisplay = counts[stat.id] !== undefined ? counts[stat.id] : stat.value;
            const label = currentLang === 'en' ? stat.labelEn : stat.labelHi;
            const desc = currentLang === 'en' ? stat.descriptionEn : stat.descriptionHi;

            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.key}`}
                className="group relative bg-[#0F2238]/80 hover:bg-[#132c48] border border-[#178582]/30 hover:border-[#BFA181]/60 rounded-xl p-4 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tracking-tight group-hover:text-[#BFA181] transition-colors">
                      {currentDisplay.toLocaleString()}
                    </span>
                    <span className="text-lg font-bold text-[#BFA181]">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5 line-clamp-2">
                    {label}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80">
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CMS LIVE IMPACT METRICS EDITOR MODAL */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0A1828] border border-[#BFA181]/40 rounded-2xl w-full max-w-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#BFA181]" />
                <h3 className="text-lg font-bold text-white">
                  CMS Impact Metrics Configurator
                </h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#178582]/20 text-[#BFA181]">
                [CMS EDITABLE]
              </span>
            </div>

            <p className="text-xs text-slate-300 mt-2 mb-4">
              Modify the verified impact statistics below. Changes update the animated counters across the website in real time without refreshing.
            </p>

            <form onSubmit={handleSaveCMS} className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {tempStats.map((stat, idx) => (
                <div key={stat.id} className="grid grid-cols-12 gap-2 items-center bg-[#0F2238] p-2.5 rounded-lg border border-slate-800">
                  <div className="col-span-7">
                    <span className="text-xs font-medium text-slate-200 block">
                      {stat.labelEn}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {stat.labelHi}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setTempStats((prev) =>
                          prev.map((item, i) =>
                            i === idx ? { ...item, value: val } : item
                          )
                        );
                      }}
                      className="w-full bg-[#0A1828] border border-slate-700 rounded px-2.5 py-1 text-sm text-white focus:border-[#BFA181] focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={stat.suffix}
                      onChange={(e) => {
                        const sfx = e.target.value;
                        setTempStats((prev) =>
                          prev.map((item, i) =>
                            i === idx ? { ...item, suffix: sfx } : item
                          )
                        );
                      }}
                      className="w-full bg-[#0A1828] border border-slate-700 rounded px-2 py-1 text-sm text-center text-[#BFA181] focus:border-[#BFA181] focus:outline-none"
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset to Defaults
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditorOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-[#0A1828] bg-[#BFA181] hover:bg-[#ad8f70] flex items-center gap-1.5 shadow"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Save & Apply Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
