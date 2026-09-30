import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    t,
    isRtl,
    cart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    freeShippingThreshold,
    freeShippingProgress,
    freeShippingRemaining,
    isFreeShippingUnlocked,
    isCartDrawerOpen,
    closeCartDrawer,
    updateCartQuantity,
    removeFromCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    cartNote,
    setCartNote,
    openCheckout,
    navigateTo
  } = useStore();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [showNoteField, setShowNoteField] = useState(false);

  if (!isCartDrawerOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyCoupon(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={closeCartDrawer}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-[100dvh]">
          
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-200/80 bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                {t('cart.title')}
              </h2>
              <span className="bg-cyan-500 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCartDrawer}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-4 bg-cyan-50/60 border-b border-cyan-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              {isFreeShippingUnlocked ? (
                <span className="text-emerald-700 flex items-center gap-1.5 font-black">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  {t('cart.free_shipping_earned')}
                </span>
              ) : (
                <span>
                  {t('cart.free_shipping_remaining').replace('{{ amount }}', freeShippingRemaining.toFixed(2))}
                </span>
              )}
              <span className="text-slate-500 text-[11px] font-extrabold">
                {freeShippingProgress}%
              </span>
            </div>
            <div className="w-full bg-cyan-200/70 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  isFreeShippingUnlocked ? 'bg-emerald-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{t('cart.empty')}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {isRtl ? 'أضف ألعاب المسابح والحدائق الرائعة لتستمتع بأجمل اللحظات' : 'Add exciting pool hoops, nets, and lawn games to get started!'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closeCartDrawer();
                    navigateTo('collection', 'all');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold shadow-md transition-all"
                >
                  <span>{t('cart.empty_cta')}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.variant.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={isRtl ? item.product.titleAr || item.product.title : item.product.title}
                    className="w-20 h-20 rounded-xl object-cover bg-slate-200 flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-slate-900 text-xs leading-snug line-clamp-1">
                          {isRtl ? item.product.titleAr || item.product.title : item.product.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.variant.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                        {item.variant.title}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity selector */}
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-xs">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.variant.id, item.quantity - 1)}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.variant.id, item.quantity + 1)}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-black text-slate-900 text-sm">
                        ${(item.variant.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50/80 space-y-4">
              
              {/* Promo Code Input */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{appliedCoupon} (20% OFF)</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-slate-400 hover:text-rose-600 font-bold"
                    >
                      {isRtl ? 'إلغاء' : 'Remove'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder={isRtl ? 'أدخل كود الخصم (SPLASH20)' : 'Promo code (try SPLASH20)'}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-cyan-500 uppercase font-semibold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                    >
                      {t('cart.apply_coupon')}
                    </button>
                  </form>
                )}
                {promoError && <p className="text-[11px] text-rose-500 mt-1">{promoError}</p>}
              </div>

              {/* Order Notes Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowNoteField(!showNoteField)}
                  className="text-xs font-bold text-slate-600 hover:text-cyan-600"
                >
                  {showNoteField ? '− ' : '+ '} {t('cart.note')}
                </button>
                {showNoteField && (
                  <textarea
                    value={cartNote}
                    onChange={(e) => setCartNote(e.target.value)}
                    placeholder={isRtl ? 'اكتب ملاحظتك للتوصيل أو رسالة الإهداء هنا...' : 'Add special delivery instructions or gift notes...'}
                    rows={2}
                    className="w-full mt-2 p-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-cyan-500 resize-none"
                  />
                )}
              </div>

              {/* Math Breakdown */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs">
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>{t('cart.subtotal')}</span>
                  <span className="font-bold text-slate-900">${cartSubtotal.toFixed(2)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>{t('cart.discount')} (SPLASH20)</span>
                    <span>-${cartDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>{isRtl ? 'الشحن' : 'Shipping'}</span>
                  <span className="font-bold text-slate-900">
                    {isFreeShippingUnlocked ? (
                      <span className="text-emerald-600 font-black uppercase">
                        {isRtl ? 'مجاني' : 'FREE'}
                      </span>
                    ) : (
                      '$5.95'
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>{isRtl ? 'الإجمالي التقديري' : 'Estimated Total'}</span>
                  <span className="text-cyan-600 font-black">
                    ${(cartTotal + (isFreeShippingUnlocked ? 0 : 5.95)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={openCheckout}
                className="w-full py-3.5 px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-98"
                style={{ borderRadius: 'var(--button-radius)' }}
              >
                <span>{t('cart.checkout')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{isRtl ? 'دفع آمن ومشفر 100% مع ضمان 30 يوماً' : '100% Encrypted Checkout & 30-Day Splash Guarantee'}</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
