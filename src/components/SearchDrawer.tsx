import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

export const SearchDrawer: React.FC = () => {
  const {
    t,
    isRtl,
    products,
    isSearchOpen,
    closeSearch,
    navigateTo,
    addToCart
  } = useStore();

  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products.slice(0, 4);
    const q = query.toLowerCase();
    return products.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        (p.titleAr && p.titleAr.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    );
  }, [query, products]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={closeSearch}
      />

      <div className="fixed inset-x-0 top-0 max-w-3xl mx-auto p-4 sm:p-6 z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh]">
          
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-3">
            <Search className="w-6 h-6 text-cyan-500 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('general.search')}
              autoFocus
              className="flex-1 text-base sm:text-lg font-bold text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1.5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={closeSearch}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {t('general.close')}
            </button>
          </div>

          {/* Quick Suggestions Tags */}
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-400 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {isRtl ? 'عمليات بحث شائعة:' : 'Trending:'}
            </span>
            {['Basketball', 'Volleyball', 'Glow Rings', 'Cornhole', 'Slackline'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 border border-slate-200 font-semibold text-[11px]"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
              <span>{isRtl ? 'المنتجات المطابقة' : 'Matching Products'} ({filteredProducts.length})</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <p className="text-sm font-semibold">
                  {isRtl ? 'لم نتمكن من العثور على نتائج مطابقة لبحثك' : 'No games found matching your search term'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      closeSearch();
                      navigateTo('product', product.handle);
                    }}
                    className="flex gap-3 p-3 rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:bg-cyan-50/30 cursor-pointer transition-all group"
                  >
                    <img
                      src={product.images[0]}
                      alt={isRtl ? product.titleAr || product.title : product.title}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-100 flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-cyan-600 uppercase">
                          {isRtl ? product.categoryLabelAr : product.categoryLabel}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-600 line-clamp-1">
                          {isRtl ? product.titleAr || product.title : product.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-black text-slate-900">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[11px] font-bold text-cyan-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-0.5">
                          <span>{isRtl ? 'عرض' : 'View'}</span>
                          <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
