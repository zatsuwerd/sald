import React from 'react';
import { useStore } from '../context/StoreContext';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { isRtl } = useStore();

  const testimonials = [
    {
      author: 'Jessica & Mark T.',
      location: 'Miami, FL',
      quote: 'The Pro Splash Hoop completely transformed our weekend pool parties! The kids have spent hours outside every day instead of glued to tablets.',
      quoteAr: 'طقم كرة السلة المائية غيّر أجواء حفلات المسبح بالكامل! الأطفال يقضون ساعات في اللعب بالخارج بدلاً من الجلوس أمام الشاشات.',
      stars: 5,
      product: 'SplashPro Pool Basketball Hoop'
    },
    {
      author: 'David K.',
      location: 'Austin, TX',
      quote: 'The giant tumble tower and lawn cornhole set are outstanding quality. Solid timber, brilliant carry bags, and withstood summer storms effortlessly.',
      quoteAr: 'برج الحطب العملاق ولعبة الكورنهول ذات جودة خيالية. خشب متين وحقائب حمل مريحة، وتحملت التقلبات الجوية بكل سهولة.',
      stars: 5,
      product: 'MegaTimber Tumble Tower'
    },
    {
      author: 'Sarah L.',
      location: 'San Diego, CA',
      quote: 'Fast 2-day delivery, zero setup headache. The bioluminescent diving torpedoes were the undisputed hit of our neighborhood block party!',
      quoteAr: 'توصيل سريع خلال يومين وتركيب فوري بدون أي تعقيد. صواريخ الغوص المضيئة كانت نجمة حفلة الحي بلا منازع!',
      stars: 5,
      product: 'GlowStrike Dive Rings'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-cyan-600 mb-2 block">
            {isRtl ? 'آراء العائلات والعملاء' : 'VERIFIED FAMILY REVIEWS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isRtl ? 'محبوبة من أكثر من 12,000 عائلة حول العالم' : 'Loved by Over 12,000 Families'}
          </h2>
          <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base">
            {isRtl ? 'تجارب حقيقية من المسابح والحدائق ومنازل الإجازات' : 'Real feedback from backyards, pool parties, and vacation homes'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cyan-200" />
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{isRtl ? t.quoteAr : t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900">{t.author}</h4>
                  <span className="text-[11px] text-slate-400">{t.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
