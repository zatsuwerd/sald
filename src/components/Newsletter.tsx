import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { t, isRtl, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    showToast(t('sections.newsletter.success'));
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t('sections.newsletter.title')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-medium">
            {t('sections.newsletter.subtitle')}
          </p>

          {isSubmitted ? (
            <div className="mt-8 p-6 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center gap-3 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{t('sections.newsletter.success')}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('sections.newsletter.placeholder')}
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 text-sm font-semibold"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{t('sections.newsletter.button')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 mt-4">
            {isRtl ? 'نحترم خصوصيتك تماماً. يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة.' : 'We respect your inbox. Unsubscribe with 1-click anytime. No spam ever.'}
          </p>
        </div>

      </div>
    </section>
  );
};
