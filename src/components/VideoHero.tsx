import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sparkles, Waves, ShieldCheck, ChevronDown } from 'lucide-react';

export const VideoHero: React.FC = () => {
  const { t, isRtl, navigateTo, themeSettings } = useStore();

  const eyebrow = themeSettings.heroEyebrow || t('sections.video_hero.eyebrow');
  const headline = isRtl
    ? themeSettings.heroHeadingAr || t('sections.video_hero.headline')
    : themeSettings.heroHeading || t('sections.video_hero.headline');
  const description = isRtl
    ? themeSettings.heroDescriptionAr || t('sections.video_hero.description')
    : themeSettings.heroDescription || t('sections.video_hero.description');
  const buttonPrimary = themeSettings.heroButtonPrimaryLabel || t('sections.video_hero.primary_btn');
  const buttonSecondary = themeSettings.heroButtonSecondaryLabel || t('sections.video_hero.secondary_btn');

  // Compute dynamic height classes based on settings
  const mobileHeightClass =
    themeSettings.heroMobileHeightMode === 'fullscreen'
      ? 'min-h-[100dvh] h-[100dvh]'
      : themeSettings.heroMobileHeightMode === 'large'
      ? 'min-h-[85dvh]'
      : themeSettings.heroMobileHeightMode === 'medium'
      ? 'min-h-[70dvh]'
      : 'min-h-[580px]';

  const desktopHeightClass =
    themeSettings.heroDesktopHeightMode === 'fullscreen'
      ? 'lg:min-h-screen lg:h-screen'
      : themeSettings.heroDesktopHeightMode === 'large'
      ? 'lg:min-h-[85vh] lg:h-auto'
      : 'lg:min-h-[720px] lg:h-auto';

  const alignmentClass =
    themeSettings.heroContentAlignment === 'left'
      ? 'text-left items-start'
      : themeSettings.heroContentAlignment === 'right'
      ? 'text-right items-end ml-auto'
      : 'text-center items-center mx-auto';

  const buttonsJustifyClass =
    themeSettings.heroContentAlignment === 'left'
      ? 'sm:justify-start'
      : themeSettings.heroContentAlignment === 'right'
      ? 'sm:justify-end'
      : 'sm:justify-center';

  return (
    <div
      className={`relative w-full ${mobileHeightClass} ${desktopHeightClass} flex flex-col justify-between overflow-hidden bg-slate-950 text-white transition-all duration-300`}
    >
      {/* Background Media with Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=2000&q=85"
          alt="SALD Pool and Outdoor Fun"
          className="w-full h-full object-cover object-center scale-105 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
        {/* Dynamic Overlay configured by merchant */}
        <div
          className="absolute inset-0 transition-opacity"
          style={{
            backgroundColor: themeSettings.heroOverlayColor || '#0F172A',
            opacity: (themeSettings.heroOverlayOpacity ?? 35) / 100
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/40 via-transparent to-amber-950/30" />
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top spacer to center content nicely on full screen mobile */}
      <div className="h-6 sm:h-12 flex-shrink-0 relative z-10" />

      {/* Hero Content Area with Fluid Responsive Typography and Touch Targets */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 my-auto flex flex-col justify-center w-full">
        <div className={`w-full max-w-3xl ${alignmentClass}`}>
          
          {/* Eyebrow Badge */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 text-[11px] sm:text-xs font-black tracking-widest uppercase mb-4 sm:mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Main Headline - Fluid clamping prevents line breakage on mobile (360px+) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-white drop-shadow-md break-words">
            {headline}
          </h1>

          {/* Subtitle Description */}
          {description && (
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-200/90 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
              {description}
            </p>
          )}

          {/* Action Buttons - Full-width stacked on mobile (min 48px height), inline on tablet & desktop */}
          <div className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none ${buttonsJustifyClass}`}>
            <button
              type="button"
              onClick={() => navigateTo('collection', 'all')}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 sm:hover:scale-[1.03]"
            >
              <span>{buttonPrimary}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('categories-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-md flex items-center justify-center gap-2 transition-all active:scale-95 sm:hover:scale-[1.02]"
            >
              <Waves className="w-4 h-4 text-cyan-300" />
              <span>{buttonSecondary}</span>
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-300 font-semibold">
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isRtl ? 'مقاومة 100% للكلور والماء المالح' : '100% Chlorine & Saltwater Proof'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRtl ? `شحن مجاني فوق $${themeSettings.freeShippingThreshold}` : `Free Express Over $${themeSettings.freeShippingThreshold}`}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{isRtl ? 'ضمان استرجاع 30 يوماً' : '30-Day Splash Guarantee'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Down Arrow Indicator on Full Screen Mobile */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end pb-3 sm:pb-6 pointer-events-none">
        {themeSettings.heroShowScrollIndicator && (
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('categories-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="pointer-events-auto inline-flex flex-col items-center gap-1 text-slate-300 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors mb-2 animate-bounce"
            aria-label="Scroll to explore"
          >
            <span>{isRtl ? 'اسحب للتصفح' : 'Scroll to Explore'}</span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </button>
        )}
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
        <svg className="w-full text-white h-5 sm:h-8 md:h-10" viewBox="0 0 1440 40" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,15 C240,35 480,5 720,20 C960,35 1200,8 1440,25 L1440,40 L0,40 Z"></path>
        </svg>
      </div>
    </div>
  );
};
