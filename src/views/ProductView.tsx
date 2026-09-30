import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
  Heart,
  Share2,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';

export const ProductView: React.FC = () => {
  const {
    products,
    viewParam,
    getProductByHandle,
    addToCart,
    openCheckout,
    toggleWishlist,
    isInWishlist,
    isRtl,
    t,
    navigateTo,
    showToast
  } = useStore();

  const product = getProductByHandle(viewParam) || products[0];

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'reviews'>('features');

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500">Product not found.</p>
        <button onClick={() => navigateTo('home')} className="mt-4 text-cyan-600 font-bold">
          Return to Home
        </button>
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const isFavorited = isInWishlist(product.id);
  const discountPercent = currentVariant.compareAtPrice
    ? Math.round(((currentVariant.compareAtPrice - currentVariant.price) / currentVariant.compareAtPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, currentVariant, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, currentVariant, quantity);
    openCheckout();
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    showToast(t('general.link_copied'));
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-900">
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <button
            onClick={() => navigateTo('collection', product.category)}
            className="hover:text-slate-900"
          >
            {isRtl ? product.categoryLabelAr : product.categoryLabel}
          </button>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-slate-800 truncate max-w-xs">
            {isRtl ? product.titleAr || product.title : product.title}
          </span>
        </div>

        {/* Product Showcase Main Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Product Images Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square sm:aspect-4/3 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={isRtl ? product.titleAr || product.title : product.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex flex-col gap-1.5 z-10">
                {product.isOnSale && discountPercent > 0 && (
                  <span className="bg-amber-400 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                    {discountPercent}% OFF
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-cyan-500 text-white font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                    {isRtl ? 'الأكثر مبيعاً' : 'Best Seller'}
                  </span>
                )}
              </div>

              {/* Top Right Action Icons */}
              <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex gap-2 z-10">
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                    isFavorited
                      ? 'bg-rose-50 text-rose-500 shadow-sm'
                      : 'bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white shadow-sm'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm backdrop-blur-md transition-all"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImageIndex === i
                        ? 'border-cyan-500 shadow-md scale-95'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Buy Box & Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black text-cyan-600 uppercase tracking-wider">
                  {isRtl ? product.categoryLabelAr : product.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {isRtl ? product.titleAr || product.title : product.title}
              </h1>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl font-black text-slate-900">
                  ${currentVariant.price.toFixed(2)}
                </span>
                {currentVariant.compareAtPrice && (
                  <span className="text-base font-bold text-slate-400 line-through">
                    ${currentVariant.compareAtPrice.toFixed(2)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Save ${((currentVariant.compareAtPrice || 0) - currentVariant.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status Badge */}
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('products.product.in_stock')} ({product.stockCount} units available)</span>
              </div>

              {/* Short Summary */}
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-medium">
                {isRtl ? product.descriptionAr || product.description : product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-800 block mb-2">
                    {isRtl ? 'اختر اللون أو الإصدار:' : 'Select Color / Finish:'}
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantIndex(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                          selectedVariantIndex === idx
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-sm'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                        }`}
                      >
                        {v.colorHex && (
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 flex-shrink-0"
                            style={{ backgroundColor: v.colorHex }}
                          />
                        )}
                        <span>{v.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart Controls */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50 p-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-slate-600 hover:text-slate-900"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-black text-slate-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-slate-600 hover:text-slate-900"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-4 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-black text-sm shadow-lg shadow-cyan-500/25 transition-all active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t('products.product.add_to_cart')} • ${(currentVariant.price * quantity).toFixed(2)}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all active:scale-98"
                >
                  {isRtl ? 'الشراء الفوري عبر الدفع السريع' : 'Instant 1-Click Express Checkout'}
                </button>
              </div>

              {/* Value Props & Trust Badges */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{t('products.product.trust_2')}</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t('products.product.free_shipping_notice')}</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold">
                  <RotateCcw className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{t('products.product.trust_1')}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Tabs: Features, Specs, Verified Reviews */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 gap-4 sm:gap-8 mb-8 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`pb-4 text-sm font-black transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'features'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {t('products.product.features')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-black transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {t('products.product.specifications')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-black transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {t('products.product.reviews')} ({product.reviews.length})
            </button>
          </div>

          {/* Tab 1: Highlights & Features */}
          {activeTab === 'features' && (
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-base font-black text-slate-900">
                {isRtl ? 'لماذا تختار هذا المنتج من سالد؟' : 'Engineered for Performance & Durability'}
              </h3>
              <ul className="space-y-3">
                {(isRtl && product.featuresAr ? product.featuresAr : product.features).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab 2: Technical Specifications */}
          {activeTab === 'specs' && (
            <div className="max-w-2xl">
              <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden text-xs">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex p-3.5 bg-white even:bg-slate-50">
                    <span className="w-1/3 font-bold text-slate-500">{key}</span>
                    <span className="w-2/3 font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Customer Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-3xl">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-900">{product.rating}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on {product.reviewCount} verified customer ratings
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => showToast(isRtl ? 'شكراً لاهتمامك! تم فتح نموذج التقييم' : 'Thank you! Review form submitted.')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  {t('products.product.write_review')}
                </button>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {product.reviews.map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl border border-slate-200/80 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                        <span className="text-[11px] text-slate-400">({rev.location})</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">{rev.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
              {t('products.product.related_products')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
