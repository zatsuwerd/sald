import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, ShoppingBag, Menu, X, ChevronDown, Heart, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    t,
    locale,
    setLocale,
    isRtl,
    cartCount,
    openCartDrawer,
    openSearch,
    navigateTo,
    wishlist,
    themeSettings
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSticky = themeSettings.headerSticky;
  const showSearch = themeSettings.headerShowSearch;
  const showCartCount = themeSettings.headerShowCartCount;
  const layout = themeSettings.headerLayout;
  const drawerStyle = themeSettings.headerDrawerStyle;

  return (
    <header
      className={`${isSticky ? 'sticky top-0' : 'relative'} z-40 backdrop-blur-md transition-all duration-200 ${
        themeSettings.headerShowBorderBottom ? 'border-b border-slate-200/80' : ''
      }`}
      style={{
        backgroundColor: themeSettings.headerBgColor || '#FFFFFF',
        color: themeSettings.headerTextColor || '#0F172A'
      }}
    >
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Mobile Menu Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -m-2 hover:text-cyan-500 focus:outline-none rounded-lg"
              aria-label={t('header.menu')}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className={`flex-shrink-0 flex items-center ${layout === 'logo_center_menu_split' ? 'lg:order-2' : ''}`}>
            <button
              onClick={() => navigateTo('home')}
              className="inline-flex items-center group text-left rtl:text-right"
              aria-label="SALD Outdoor & Pool Games"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-10 w-auto"
                  width={themeSettings.logoWidthDesktop || 160}
                  height="40"
                  viewBox="0 0 320 80"
                  fill="none"
                  style={{ width: `${themeSettings.logoWidthMobile}px` }}
                >
                  <defs>
                    <linearGradient id="saldAquaNav" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D2DF" />
                      <stop offset="100%" stopColor="#00A2B3" />
                    </linearGradient>
                    <linearGradient id="saldSunNav" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD000" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(10, 10)">
                    <path d="M 6 48 C 16 52, 28 52, 40 47 C 48 43, 56 46, 62 48" stroke="#00D2DF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                    <circle cx="12" cy="18" r="4.5" fill="url(#saldAquaNav)" />
                    <circle cx="26" cy="10" r="3.5" fill="url(#saldSunNav)" />
                    <path d="M 18 42 C 16 26, 26 22, 34 29 C 40 34, 46 22, 54 28 C 58 31, 56 42, 38 42 Z" fill="url(#saldAquaNav)"/>
                    <circle cx="35" cy="18" r="7.5" fill="url(#saldSunNav)"/>
                  </g>
                  <text x="82" y="55" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="46" fill="currentColor" letterSpacing="-1">S</text>
                  <text x="114" y="55" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="46" fill="currentColor" letterSpacing="-1">A</text>
                  <circle cx="130" cy="39" r="3.5" fill="url(#saldSunNav)"/>
                  <text x="150" y="55" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="46" fill="#00C2CB" letterSpacing="-1">L</text>
                  <text x="180" y="55" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="46" fill="currentColor" letterSpacing="-1">D</text>
                  <text x="84" y="70" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="700" fontSize="9" fill="#00A2B3" letterSpacing="3.2">OUTDOOR &amp; POOL FUN</text>
                </svg>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-7 ${
              layout === 'logo_center_menu_split'
                ? 'lg:order-1'
                : layout === 'logo_left_menu_left'
                ? 'lg:ml-6 rtl:lg:mr-6 rtl:lg:ml-0'
                : ''
            }`}
            aria-label="Main Navigation"
          >
            {/* Mega Menu for Pool Games */}
            <div className="relative group">
              <button
                onClick={() => navigateTo('collection', 'pool-games')}
                className="text-sm font-bold hover:text-cyan-500 py-3 inline-flex items-center gap-1 transition-colors"
              >
                <span>{t('header.pool_games')}</span>
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:text-cyan-500 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 rtl:left-auto rtl:right-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-100 p-6 w-[560px] grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-600 mb-3">
                      {isRtl ? 'الأكثر طلباً للمسابح' : 'Popular Pool Gear'}
                    </h4>
                    <ul className="space-y-2.5 text-sm font-medium text-slate-600">
                      <li>
                        <button
                          onClick={() => navigateTo('product', 'sald-splash-pro-pool-hoop')}
                          className="hover:text-cyan-600 flex items-center justify-between w-full text-left rtl:text-right"
                        >
                          <span>{isRtl ? 'كرة سلة المسبح الاحترافية' : 'SplashPro Pool Basketball'}</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">Hot</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => navigateTo('product', 'sald-hydro-slam-volleyball-net')}
                          className="hover:text-cyan-600 text-left rtl:text-right w-full"
                        >
                          {isRtl ? 'شبكة كرة الطائرة المائية' : 'HydroSlam Volleyball Court'}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => navigateTo('product', 'sald-bioluminescent-dive-relay-torpedoes')}
                          className="hover:text-cyan-600 text-left rtl:text-right w-full"
                        >
                          {isRtl ? 'حلقات الغوص المضيئة بالظلام' : 'GlowStrike Bioluminescent Rings'}
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50/70 rounded-xl p-4 border border-cyan-100 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-800">
                        {isRtl ? 'تخفيضات الصيف' : 'Summer Promo'}
                      </span>
                      <p className="font-bold text-slate-900 mt-1">
                        {isRtl ? 'خصم 20% بكود SPLASH20' : '20% OFF with Code SPLASH20'}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        {isRtl ? `شحن مجاني فوق $${themeSettings.freeShippingThreshold}` : `Free express on orders over $${themeSettings.freeShippingThreshold}.`}
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('collection', 'pool-games')}
                      className="mt-3 text-xs font-bold text-cyan-600 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{isRtl ? 'تسوق الآن' : 'Shop Pool Games'}</span>
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('collection', 'playground')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.playground')}
            </button>

            <button
              onClick={() => navigateTo('collection', 'garden-games')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.garden_games')}
            </button>

            <button
              onClick={() => navigateTo('collection', 'family-games')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.family_fun')}
            </button>

            <button
              onClick={() => navigateTo('collection', 'all')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.all_products')}
            </button>

            <button
              onClick={() => navigateTo('page', 'about-us')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.about_us')}
            </button>

            <button
              onClick={() => navigateTo('page', 'faq')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.faqs')}
            </button>

            <button
              onClick={() => navigateTo('page', 'contact')}
              className="text-sm font-bold hover:text-cyan-500 py-3 transition-colors"
            >
              {t('header.contact')}
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className={`flex items-center gap-2 sm:gap-3 ${layout === 'logo_center_menu_split' ? 'lg:order-3' : ''}`}>
            {/* Language Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-bold text-slate-700">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  locale === 'en'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('ar')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  locale === 'ar'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                العربية
              </button>
            </div>

            {/* Search Trigger */}
            {showSearch && (
              <button
                type="button"
                onClick={openSearch}
                className="p-2 hover:text-cyan-500 rounded-full hover:bg-black/5 transition-colors"
                aria-label={t('header.search')}
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Wishlist Indicator */}
            <button
              type="button"
              onClick={() => navigateTo('collection', 'all')}
              className="hidden sm:inline-flex relative p-2 hover:text-rose-500 rounded-full hover:bg-black/5 transition-colors"
              title={t('header.wishlist')}
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={openCartDrawer}
              className="relative p-2.5 hover:text-cyan-500 rounded-full hover:bg-black/5 transition-colors"
              aria-label={t('header.cart')}
            >
              <ShoppingBag className="w-6 h-6" />
              {showCartCount && (
                <span className="absolute -top-0.5 -right-0.5 bg-cyan-500 text-white font-extrabold text-[11px] h-5 min-w-[20px] px-1 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden w-screen h-[100dvh] overflow-hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={`fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 w-full sm:max-w-md ${
              drawerStyle === 'glassmorphism'
                ? 'bg-white/90 backdrop-blur-2xl border-r rtl:border-r-0 rtl:border-l border-white/40'
                : drawerStyle === 'frosted'
                ? 'bg-white/95 backdrop-blur-lg border-r border-slate-200'
                : 'bg-white border-r border-slate-200'
            } shadow-2xl z-10 flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/60 bg-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">SALD</span>
                <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-800 border border-cyan-400/30">
                  Outdoor Fun
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {showSearch && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openSearch();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold text-left rtl:text-right"
                >
                  <Search className="w-4 h-4 text-cyan-600" />
                  <span>{t('general.search')}</span>
                </button>
              )}

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2 px-1">
                  {isRtl ? 'تصفح الأقسام' : 'Explore Collections'}
                </span>
                <nav className="space-y-2 font-bold text-slate-800 text-sm">
                  <button
                    onClick={() => {
                      navigateTo('collection', 'pool-games');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <span>{t('header.pool_games')}</span>
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">Hot</span>
                  </button>

                  <button
                    onClick={() => {
                      navigateTo('collection', 'playground');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <span>{t('header.playground')}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={() => {
                      navigateTo('collection', 'garden-games');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <span>{t('header.garden_games')}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={() => {
                      navigateTo('collection', 'family-games');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <span>{t('header.family_fun')}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={() => {
                      navigateTo('collection', 'all');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-900"
                  >
                    <span>{t('header.all_products')}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-600 rtl:rotate-180" />
                  </button>
                </nav>
              </div>

              {/* Pages Menu */}
              <div className="pt-3 border-t border-slate-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2 px-1">
                  {isRtl ? 'معلومات المتجر والدعم' : 'Store Information'}
                </span>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2 space-y-1 text-xs font-bold text-slate-700">
                  <button
                    onClick={() => {
                      navigateTo('page', 'about-us');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white text-left rtl:text-right"
                  >
                    <span>{t('header.about_us')}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('page', 'faq');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white text-left rtl:text-right"
                  >
                    <span>{t('header.faqs')}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('page', 'contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white text-left rtl:text-right"
                  >
                    <span>{t('header.contact')}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('page', 'shipping-policy');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white text-left rtl:text-right"
                  >
                    <span>{isRtl ? 'سياسة الشحن والضمان' : 'Shipping & Warranty'}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 bg-white/80">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCartDrawer();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('header.cart')}</span>
                </div>
                <span className="bg-white/25 px-2.5 py-0.5 rounded-full text-xs">
                  {cartCount} {isRtl ? 'عناصر' : 'items'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
