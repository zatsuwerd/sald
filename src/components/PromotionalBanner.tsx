import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';

export const PromotionalBanner: React.FC = () => {
  const { isRtl, navigateTo } = useStore();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Background Decorative Rings */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/40 text-amber-300 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md">
              <Tag className="w-3.5 h-3.5" />
              <span>{isRtl ? 'عرض لفترة محدودة' : 'LIMITED TIME SUMMER OFFER'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {isRtl
                ? 'أيام انتعاش الصيف: خصم 20% على جميع ألعاب المسابح'
                : 'Summer Splash Days: Take 20% Off All Pool Games'}
            </h2>

            <p className="mt-4 text-cyan-50 text-sm sm:text-base font-medium leading-relaxed">
              {isRtl
                ? 'جهّز مسبحك لحفلات عطلة نهاية الأسبوع واستخدم كود SPLASH20 عند الدفع مع شحن سريع مجاني لجميع الطلبات فوق 75$.'
                : 'Upgrade your swimming pool fun before hot summer weekends sell out. Use coupon code SPLASH20 at checkout.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigateTo('collection', 'pool-games')}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm shadow-xl flex items-center gap-2 transition-all active:scale-95"
              >
                <span>{isRtl ? 'تسوق تخفيضات المسبح' : 'Shop Splash Sale'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 text-cyan-600" />
              </button>

              <div className="px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-bold flex items-center gap-2">
                <span>CODE:</span>
                <span className="text-amber-300 font-black text-sm tracking-wider">SPLASH20</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
