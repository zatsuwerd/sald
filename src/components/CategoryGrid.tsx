import React from 'react';
import { useStore } from '../context/StoreContext';
import { Waves, Sparkles, Trophy, Users, ArrowRight } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const { t, isRtl, navigateTo } = useStore();

  const categories = [
    {
      id: 'pool-games',
      title: isRtl ? 'ألعاب المسبح والعوامات' : 'Pool Games & Floats',
      tagline: isRtl ? 'شباك عائمة، كرات سلة مائية، ومغامرات غوص' : 'Underwater hoops, floating nets & diving treasures',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80',
      badge: 'Most Popular',
      badgeAr: 'الأكثر شعبية',
      icon: Waves,
      color: 'from-cyan-500/80 to-blue-600/90'
    },
    {
      id: 'playground',
      title: isRtl ? 'معدات اللعب والرشاقة' : 'Playground & Agility',
      tagline: isRtl ? 'مسارات عقبات معلقة، حبال تسلق وأراجيح نشطة' : 'Obstacle sets, slacklines & balancing courses',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
      badge: 'High Energy',
      badgeAr: 'طاقة ونشاط',
      icon: Trophy,
      color: 'from-emerald-500/80 to-teal-700/90'
    },
    {
      id: 'garden-games',
      title: isRtl ? 'ألعاب الحديقة والمروج' : 'Garden & Lawn Games',
      tagline: isRtl ? 'أبراج خشبية عملاقة، كورنهول مقاوم للمطر' : 'Giant tumble towers, croquet & cornhole sets',
      image: 'https://images.unsplash.com/photo-1585856717904-469074d47d61?auto=format&fit=crop&w=600&q=80',
      badge: 'Wood Craft',
      badgeAr: 'خشب طبيعي فاخر',
      icon: Sparkles,
      color: 'from-amber-500/80 to-orange-600/90'
    },
    {
      id: 'family-games',
      title: isRtl ? 'ألعاب عائلية وحفلات' : 'Family & Party Games',
      tagline: isRtl ? 'أنشطة حماسية لجميع الأعمار والتجمعات' : 'Outdoor entertainment for all ages & celebrations',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      badge: 'All Ages',
      badgeAr: 'لكل الأعمار',
      icon: Users,
      color: 'from-rose-500/80 to-purple-600/90'
    }
  ];

  return (
    <section id="categories-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('sections.categories.title')}
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
            {t('sections.categories.subtitle')}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => navigateTo('collection', cat.id)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-6 text-white"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/20" />
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 group-hover:opacity-60 transition-opacity`} />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                    {isRtl ? cat.badgeAr : cat.badge}
                  </span>
                  <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:rotate-12 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-1.5">
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                  <div className="pt-2 flex items-center gap-1 text-xs font-bold text-cyan-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{isRtl ? 'استكشف المنتجات' : 'Explore Gear'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
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
