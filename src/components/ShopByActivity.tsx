import React from 'react';
import { useStore } from '../context/StoreContext';
import { Waves, Sparkles, Trophy, ArrowRight } from 'lucide-react';

export const ShopByActivity: React.FC = () => {
  const { t, isRtl, navigateTo } = useStore();

  const activities = [
    {
      title: isRtl ? 'حفلات المسبح والانتعاش' : 'Pool Party Chaos',
      tag: isRtl ? 'ألعاب مائية' : 'Water Games',
      description: isRtl ? 'أطقم كرات طائرة عائمة، سلات قفز مائية، وحلقات غوص مشعة.' : 'Volleyball sets, floating slam hoops, and dive-ring relay challenges.',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
      link: 'pool-games',
      icon: Waves
    },
    {
      title: isRtl ? 'بطولات الحديقة والمروج' : 'Lawn Tournaments',
      tag: isRtl ? 'مرح الحدائق' : 'Garden Fun',
      description: isRtl ? 'كرات البوتشي، وألواح الكورنهول وأبراج الحطب المصنوعة من خشب طبيعي.' : 'Bocce, giant dominoes, and cornhole boards crafted from weather-treated birch.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      link: 'garden-games',
      icon: Sparkles
    },
    {
      title: isRtl ? 'مسارات الرشاقة والمغامرة' : 'Kids Agility Course',
      tag: isRtl ? 'معدات لعب نشطة' : 'Active Playground',
      description: isRtl ? 'حبال شد معلقة، عقلات تسلق، وأحجار توازن لتفريغ طاقة الأطفال بحماس.' : 'Slacklines, stepping stones, and climbing ladders for high-energy play.',
      image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&w=800&q=80',
      link: 'playground',
      icon: Trophy
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('sections.activities.title')}
          </h2>
          <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base">
            {t('sections.activities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={i}
                onClick={() => navigateTo('collection', act.link)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Media */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black uppercase tracking-wider shadow-sm">
                      {act.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-600">
                    <span>{isRtl ? 'تصفح الألعاب' : 'View Collection'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
