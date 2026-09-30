import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Star, ShieldCheck, Plus, Minus, ArrowRight, Check } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    t,
    isRtl,
    quickViewProduct,
    closeQuickView,
    addToCart,
    navigateTo
  } = useStore();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!quickViewProduct) return null;

  const currentVariant = quickViewProduct.variants[selectedVariantIndex] || quickViewProduct.variants[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, currentVariant, quantity);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden z-10"
          style={{ borderRadius: 'var(--card-radius)' }}
        >
          
          {/* Close button */}
          <button
            type="button"
            onClick={closeQuickView}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="p-6 bg-slate-50 flex flex-col justify-between">
              <div
                className="aspect-square overflow-hidden bg-white shadow-sm border border-slate-200/60 mb-3"
                style={{ borderRadius: 'calc(var(--card-radius) - 6px)' }}
              >
                <img
                  src={quickViewProduct.images[selectedImageIndex] || quickViewProduct.images[0]}
                  alt={isRtl ? quickViewProduct.titleAr || quickViewProduct.title : quickViewProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {quickViewProduct.images.length > 1 && (
                <div className="flex gap-2">
                  {quickViewProduct.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedImageIndex(i)}
                      className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === i
                          ? 'border-cyan-500 shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-cyan-600 uppercase tracking-wider">
                  {isRtl ? quickViewProduct.categoryLabelAr : quickViewProduct.categoryLabel}
                </span>

                <h3 className="text-xl font-black text-slate-900 mt-1 leading-snug">
                  {isRtl ? quickViewProduct.titleAr || quickViewProduct.title : quickViewProduct.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{quickViewProduct.rating}</span>
                  <span className="text-xs text-slate-400">({quickViewProduct.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-2xl font-black text-slate-900">
                    ${currentVariant.price.toFixed(2)}
                  </span>
                  {currentVariant.compareAtPrice && (
                    <span className="text-sm font-bold text-slate-400 line-through">
                      ${currentVariant.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {isRtl ? quickViewProduct.descriptionAr || quickViewProduct.description : quickViewProduct.description}
                </p>

                {/* Variant selection */}
                {quickViewProduct.variants.length > 1 && (
                  <div className="mt-4">
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      {isRtl ? 'اللون / الإصدار:' : 'Color / Edition:'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.variants.map((v, idx) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariantIndex(idx)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                            selectedVariantIndex === idx
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-xs'
                              : 'border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {v.colorHex && (
                            <span
                              className="w-3 h-3 rounded-full border border-black/10"
                              style={{ backgroundColor: v.colorHex }}
                            />
                          )}
                          <span>{v.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex items-center border border-slate-200 bg-slate-50 p-1"
                    style={{ borderRadius: 'var(--input-radius)' }}
                  >
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 text-slate-600 hover:text-slate-900"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-extrabold text-slate-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 text-slate-600 hover:text-slate-900"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-extrabold shadow-md shadow-cyan-500/20 transition-all active:scale-95"
                    style={{ borderRadius: 'var(--button-radius)' }}
                  >
                    {t('products.product.add_to_cart')} • ${(currentVariant.price * quantity).toFixed(2)}
                  </button>
                </div>
              </div>

              {/* Full Details link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {t('products.product.in_stock')}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    closeQuickView();
                    navigateTo('product', quickViewProduct.handle);
                  }}
                  className="font-bold text-cyan-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>{t('products.product.view_details')}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
