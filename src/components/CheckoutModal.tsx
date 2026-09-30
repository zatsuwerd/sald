import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard, Truck, Sparkles } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    t,
    isRtl,
    cart,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    isFreeShippingUnlocked,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
    cartNote
  } = useStore();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Ocean Breeze Blvd',
    city: 'Miami',
    state: 'FL',
    zip: '33139',
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12/28',
    cvv: '888'
  });

  if (!isCheckoutOpen) return null;

  const finalTotal = cartTotal + (isFreeShippingUnlocked ? 0 : 5.95);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setStep('form');
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-[999999] overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={closeCheckout}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                {isRtl ? 'بوابة الدفع الآمنة المشفرة (SALD Pay)' : 'SALD Secure 256-Bit SSL Checkout'}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCheckout}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* Order Summary Pill */}
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-700">
                    {cart.length} {isRtl ? 'منتجات في الطلب' : 'Products in Order'}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isFreeShippingUnlocked ? (
                      <span className="text-emerald-700 font-bold">✓ Free Express Delivery</span>
                    ) : (
                      'Standard 2-4 Day Delivery ($5.95)'
                    )}
                  </p>
                </div>
                <div className="text-right rtl:text-left">
                  <span className="text-xs text-slate-500 block">{isRtl ? 'المبلغ الإجمالي' : 'Total Due'}</span>
                  <span className="text-xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h4 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-600" />
                  <span>{isRtl ? 'عنوان التوصيل' : 'Shipping Address'}</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-600 block mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-600 block mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="font-bold text-slate-600 block mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-600 block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-600 block mb-1">ZIP / Postal</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <h4 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-cyan-600" />
                  <span>{isRtl ? 'بيانات الدفع' : 'Payment Method'}</span>
                </h4>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-600 block mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-600 block mb-1">Expires</label>
                      <input
                        type="text"
                        required
                        value={formData.expDate}
                        onChange={(e) => setFormData({ ...formData, expDate: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-600 block mb-1">CVV</label>
                      <input
                        type="text"
                        required
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-black text-sm shadow-xl shadow-cyan-500/30 transition-all active:scale-98"
              >
                {isRtl ? `تأكيد ودفع $${finalTotal.toFixed(2)}` : `Complete Order • $${finalTotal.toFixed(2)}`}
              </button>

            </form>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-black text-cyan-600">
                  {isRtl ? 'تم تأكيد طلبك بنجاح' : 'Order Confirmed!'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {isRtl ? 'شكراً لطلبك من سالد SALD' : 'Welcome to the SALD Active Family!'}
                </h3>
                <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                  {isRtl
                    ? `رقم طلبك: #SALD-${Math.floor(100000 + Math.random() * 900000)}. تم إرسال رسالة تأكيد مع رابط التتبع السريع إلى بريدك الإلكتروني.`
                    : `Order #SALD-${Math.floor(100000 + Math.random() * 900000)} has been received. You will receive tracking details via email within 24 hours.`}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-left rtl:text-right space-y-1 text-slate-600">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Delivering to:</span>
                  <span>{formData.firstName} {formData.lastName}</span>
                </div>
                <div>{formData.address}, {formData.city}, {formData.state} {formData.zip}</div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-emerald-700">
                  <span>Estimated Arrival:</span>
                  <span>Within 2-4 Business Days</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-lg transition-all"
              >
                {isRtl ? 'العودة للتسوق' : 'Back to Store'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
