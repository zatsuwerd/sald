import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Filter, SlidersHorizontal, Sparkles, ArrowUpDown, Check } from 'lucide-react';

export const CollectionView: React.FC = () => {
  const { products, viewParam, navigateTo, isRtl } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>(viewParam || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlySale, setOnlySale] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(150);

  // Sync state if viewParam changes
  React.useEffect(() => {
    if (viewParam) {
      setSelectedCategory(viewParam);
    }
  }, [viewParam]);

  const categories = [
    { id: 'all', title: isRtl ? 'جميع المنتجات' : 'All Products' },
    { id: 'pool-games', title: isRtl ? 'ألعاب المسبح والعوامات' : 'Pool Games & Floats' },
    { id: 'playground', title: isRtl ? 'معدات اللعب والرشاقة' : 'Playground & Agility' },
    { id: 'garden-games', title: isRtl ? 'ألعاب الحديقة والمروج' : 'Garden & Lawn Games' },
    { id: 'family-games', title: isRtl ? 'ألعاب عائلية وحفلات' : 'Family & Party Games' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Sale filter
      if (onlySale && !p.isOnSale) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [products, selectedCategory, sortBy, onlySale, maxPrice]);

  const activeCategoryObj = categories.find(c => c.id === selectedCategory) || categories[0];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Collection Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-cyan-600 block mb-1">
              {isRtl ? 'كتالوج ألعاب سالد' : 'SALD OUTDOOR CATALOG'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {activeCategoryObj.title}
            </h1>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              {isRtl
                ? 'استكشف معدات وألعاب ترفيهية عالية التحمل مصنوعة للمسابح والحدائق العائلية مع ضمان 30 يوماً.'
                : 'Browse chlorine-proof poolside basketball hoops, floating volleyball nets, and lawn tournament games.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
              {filteredProducts.length} {isRtl ? 'منتجات متوفرة' : 'Products Available'}
            </span>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Controls: Sale Toggle & Sort Selector */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOnlySale(!onlySale)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                onlySale
                  ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isRtl ? 'التخفيضات فقط' : 'On Sale Only'}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">{isRtl ? 'المميز' : 'Featured'}</option>
                <option value="price-asc">{isRtl ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                <option value="price-desc">{isRtl ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                <option value="rating">{isRtl ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base font-bold text-slate-700">
              {isRtl ? 'لا توجد منتجات مطابقة لهذا الفلتر' : 'No products match your current filter settings'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setOnlySale(false);
                setMaxPrice(150);
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-bold"
            >
              {isRtl ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
