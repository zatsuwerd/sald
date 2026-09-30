import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Truck, Smile, RotateCcw, Award } from 'lucide-react';

export const BenefitsTrust: React.FC = () => {
  const { t, isRtl } = useStore();

  const benefits = [
    {
      icon: ShieldCheck,
      title: isRtl ? 'مقاوم للكلور والأشعة فوق البنفسجية' : 'UV & Chlorine Proof',
      text: isRtl ? 'مصنوعة من بوليمرات بحرية فائقة التحمل لا تبهت ولا تتشقق مع كثرة الاستخدام.' : 'Made with high-grade, marine-tested polymers that will not fade, rust, or crack.',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
    },
    {
      icon: Truck,
      title: isRtl ? 'شحن سريع مجاني' : 'Free Express Delivery',
      text: isRtl ? 'توصيل مجاني لجميع الطلبات بقيمة 75$ أو أكثر خلال 48 ساعة لباب منزلك.' : 'On all orders over $75 within 48 hours right to your front lawn or vacation home.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: Smile,
      title: isRtl ? 'أمان معتمد للأطفال' : 'Child-Safe Certified',
      text: isRtl ? 'خالية 100% من مادة BPA وغير سامة ومطابقة لأعلى معايير السلامة العالمية.' : 'BPA-free, non-toxic, and tested according to the highest global toy safety standards.',
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: RotateCcw,
      title: isRtl ? 'ضمان استرجاع 30 يوماً' : '30-Day Splash Guarantee',
      text: isRtl ? 'جرّب الألعاب في مسبحك أو حديقتك بدون أي مخاطرة مع إرجاع سهل وسريع.' : 'Try it in your pool or backyard risk-free with simple, prepaid hassle-free returns.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t('sections.benefits.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('sections.benefits.title')}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-cyan-300 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${b.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {b.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
