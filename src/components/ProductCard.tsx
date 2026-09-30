import React from 'react';
import { Product } from '../types/store';
import { useStore } from '../context/StoreContext';
import { Star, Eye, Plus, Heart, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    t,
    isRtl,
    addToCart,
    openQuickView,
    navigateTo,
    toggleWishlist,
    isInWishlist
  } = useStore();

  const isFavorited = isInWishlist(product.id);
  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-white p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
      style={{ borderRadius: 'var(--card-radius)' }}
    >
      {/* Top Media & Badges */}
      <div
        className="relative aspect-square overflow-hidden bg-slate-100 mb-4"
        style={{ borderRadius: 'calc(var(--card-radius) - 4px)' }}
      >
        {/* Main Product Image */}
        <img
          src={product.images[0]}
          alt={isRtl ? product.titleAr || product.title : product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 flex flex-col gap-1 z-10">
          {product.isOnSale && discountPercent > 0 && (
            <span
              className="bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-1 shadow-sm"
              style={{ borderRadius: 'var(--badge-radius)' }}
            >
              {discountPercent}% OFF
            </span>
          )}
          {product.isBestSeller && (
            <span
              className="bg-cyan-500 text-white font-black text-[10px] uppercase px-2.5 py-1 shadow-sm"
              style={{ borderRadius: 'var(--badge-radius)' }}
            >
              {isRtl ? 'الأكثر مبيعاً' : 'Best Seller'}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isFavorited
              ? 'bg-rose-50 text-rose-500 shadow-sm'
              : 'bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white shadow-sm'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500' : ''}`} />
        </button>

        {/* Floating Quick View Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex gap-2">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="flex-1 py-2 px-3 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold backdrop-blur-md flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
            style={{ borderRadius: 'var(--button-radius)' }}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('products.product.quick_view')}</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider">
              {isRtl ? product.categoryLabelAr : product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="text-xs font-extrabold text-slate-700">{product.rating}</span>
              <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => navigateTo('product', product.handle)}
            className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 hover:text-cyan-600 cursor-pointer transition-colors"
          >
            {isRtl ? product.titleAr || product.title : product.title}
          </h3>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-black text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs font-semibold text-slate-400 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="py-2 px-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs inline-flex items-center gap-1 shadow-sm transition-all active:scale-95 hover:shadow-md"
            style={{ borderRadius: 'var(--button-radius)' }}
            aria-label={t('products.product.quick_add')}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{t('products.product.quick_add')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
