import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Play, Volume2, VolumeX, ShieldCheck, Sparkles } from 'lucide-react';

export const VideoFeature: React.FC = () => {
  const { isRtl } = useStore();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SALD IN ACTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {isRtl ? 'شاهد ألعاب سالد في الواقع الحي' : 'See SALD in Real Action'}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base font-medium">
            {isRtl
              ? 'شاهد العائلات والمنتجعات يختبرون قوة وتحمل ألعابنا تحت الشمس والمياه'
              : 'Watch families, resort guests, and competitive kids putting our equipment to the test'}
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-video max-w-4xl mx-auto bg-slate-900 group">
          <img
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=80"
            alt="Pool Basketball Action"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl transition-all group-hover:scale-110 active:scale-95"
              aria-label="Play video showcase"
            >
              <Play className="w-8 h-8 fill-slate-950 ml-1" />
            </button>
          </div>

          {/* Bottom Video Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-bold text-white tracking-wide">
                {isRtl ? 'اختبار التحمل المائي 100%' : 'High-Impact Splash Proof Testing'}
              </span>
            </div>
            <div className="px-3 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md text-xs font-mono font-bold text-slate-300">
              4K UHD 60FPS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
