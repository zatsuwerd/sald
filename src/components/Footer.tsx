import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, ArrowUp, Instagram, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRtl, navigateTo, themeSettings, showToast } = useStore();
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes('@')) return;
    setSubscribed(true);
    showToast(isRtl ? 'شكراً لاشتراكك في نادي سالد!' : 'Welcome to Club SALD! Check your inbox for your 15% discount.');
  };

  return (
    <footer
      className="pt-16 pb-12 border-t border-slate-800 transition-colors"
      style={{
        backgroundColor: themeSettings.footerBgColor || '#0F172A',
        color: themeSettings.footerTextColor || '#94A3B8'
      }}
    >
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pledge / Guarantee Card (if enabled) */}
        {themeSettings.footerShowPledge && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-cyan-950/40 border border-cyan-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-left rtl:text-right">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4
                  className="text-base sm:text-lg font-black text-white"
                  style={{ color: '#FFFFFF' }}
                >
                  {isRtl ? themeSettings.footerPledgeTitleAr : themeSettings.footerPledgeTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {isRtl ? themeSettings.footerPledgeTextAr : themeSettings.footerPledgeText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('page', 'warranty-guarantee')}
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs whitespace-nowrap shadow-md transition-all active:scale-95"
            >
              {isRtl ? 'تفاصيل الضمان' : 'Explore Guarantee'}
            </button>
          </div>
        )}

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-white tracking-tight">SALD</span>
              <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Outdoor Fun
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {isRtl
                ? 'العلامة الرائدة في تصميم وهندسة ألعاب المسابح والحدائق العائلية بجودة بحرية مقاومة للكلور والشمس.'
                : 'Engineered for active family memories under the sun. High-durability, chlorine-proof poolside basketball hoops, floating volleyball nets, and lawn tournament games.'}
            </p>
            
            {themeSettings.footerShowSocial && (
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/sald.outdoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Quick Links: Collections */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-wider mb-4"
              style={{ color: themeSettings.footerHeadingColor || '#22D3EE' }}
            >
              {isRtl ? 'الأقسام الرئيسية' : 'Collections'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('collection', 'pool-games')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.pool_games')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collection', 'playground')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.playground')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collection', 'garden-games')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.garden_games')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collection', 'family-games')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.family_fun')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('collection', 'all')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.all_products')}
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-wider mb-4"
              style={{ color: themeSettings.footerHeadingColor || '#22D3EE' }}
            >
              {isRtl ? 'خدمة العملاء' : 'Customer Care'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('page', 'contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('page', 'faq')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t('header.faqs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('page', 'shipping-policy')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {isRtl ? 'الشحن والتوصيل' : 'Shipping Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('page', 'warranty-guarantee')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {isRtl ? 'ضمان الـ 30 يوماً' : '30-Day Splash Guarantee'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('page', 'page-importer')}
                  className="hover:text-cyan-400 transition-colors text-cyan-400 font-bold"
                >
                  {isRtl ? 'أداة قوالب المتجر OS 2.0' : 'OS 2.0 Template Hub'}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Club */}
          <div>
            {themeSettings.footerShowNewsletter ? (
              <div className="space-y-3">
                <h4
                  className="text-xs font-black uppercase tracking-wider"
                  style={{ color: themeSettings.footerHeadingColor || '#22D3EE' }}
                >
                  {themeSettings.footerNewsletterHeading}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {themeSettings.footerNewsletterSubtext}
                </p>

                {subscribed ? (
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isRtl ? 'تم الاشتراك بنجاح!' : 'Subscribed!'}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition-colors shadow-sm"
                    >
                      {isRtl ? 'اشترك الآن' : 'Subscribe'}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="space-y-2 text-xs">
                <h4
                  className="text-xs font-black uppercase tracking-wider mb-4"
                  style={{ color: themeSettings.footerHeadingColor || '#22D3EE' }}
                >
                  {isRtl ? 'المساعدة المباشرة' : 'Direct Support'}
                </h4>
                <p className="text-slate-400">support@sald-outdoors.com</p>
                <p className="text-slate-400">+1 (800) 555-SALD</p>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Badges, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {themeSettings.footerCopyrightText}</span>
          </div>

          {themeSettings.footerShowPaymentIcons && (
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Apple Pay</span>
              <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Visa</span>
              <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Mastercard</span>
              <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Shop Pay</span>
            </div>
          )}

          {themeSettings.footerShowBackToTop && (
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-bold text-xs"
            >
              <span>{isRtl ? 'إلى أعلى الصفحة' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};
