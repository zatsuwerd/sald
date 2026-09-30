import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { ArrowRight, Flame } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const { t, products, navigateTo } = useStore();

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Trending Summer Picks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t('sections.featured_collection.title')}
            </h2>
            <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base max-w-xl">
              {t('sections.featured_collection.subtitle')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigateTo('collection', 'all')}
            className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-700 text-sm group self-start md:self-auto"
          >
            <span>{t('sections.featured_collection.view_all')}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
