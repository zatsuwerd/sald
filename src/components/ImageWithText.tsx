import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sun, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImageWithText: React.FC = () => {
  const { isRtl, navigateTo } = useStore();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side with Floating Badges */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80"
                alt="Family playing outdoor games"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Stats Badge */}
            <div className="absolute -bottom-6 -right-6 rtl:-right-auto rtl:-left-6 p-5 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-600 flex items-center justify-center">
                <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 block">5+ Seasons</span>
                <span className="text-xs font-bold text-slate-500">
                  {isRtl ? 'عمر افتراضي مضمون' : 'Zero-Fatigue Durability'}
                </span>
              </div>
            </div>

            {/* Top Left Floating Tag */}
            <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 px-4 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRtl ? 'بدون شاشات إلكترونية' : 'Unplug the Screens'}</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black uppercase tracking-widest">
              <span>{isRtl ? 'فلسفة سالد للترفيه' : 'THE SALD MISSION'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {isRtl
                ? 'حوّل حديقتك ومسبحك إلى مدينة مغامرات عائلية لا تُنسى'
                : 'Turn Your Backyard into the Ultimate Adventure Park'}
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'نؤمن في سالد بأن أجمل الذكريات العائلية تُصنع تحت أشعة الشمس مع الضحكات العفوية والأقدام الحافية. صممنا كل لعبة لتركيب سريع في 5 دقائق وجودة فائقة تدوم لسنوات عديدة.'
                : 'At SALD, we believe the best childhood memories happen outdoors under the sun with wet hair, bare feet, and contagious laughter. Every piece of equipment is engineered for rapid 5-minute setup and years of active play.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                isRtl ? 'تركيب فوري وسهل بدون الحاجة لأدوات معقدة' : 'Rapid tool-free setup in under 5 minutes right out of the box',
                isRtl ? 'خامات بحرية غير قابلة للصدأ أو التآكل تحت الشمس والكلور' : 'Commercial-grade rustproof polymer and 316 stainless steel',
                isRtl ? 'ضمان استبدال ذهبي واسترجاع كامل لمدة 30 يوماً' : '1-Year comprehensive splash warranty & 30-day trial'
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => navigateTo('page', 'about-us')}
                className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl flex items-center gap-2 transition-all active:scale-95"
              >
                <span>{isRtl ? 'اكتشف قصة سالد' : 'Discover the SALD Story'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
