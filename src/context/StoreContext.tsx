import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant, CartItem, LocaleCode, PageContent, ThemeCustomizationSettings } from '../types/store';
import { productsData } from '../data/products';
import { pagesData } from '../data/pages';
import { translations } from '../data/locales';
import { colorPalettePresets } from '../data/themePresets';

interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

export const defaultThemeSettings: ThemeCustomizationSettings = {
  // Brand
  logoWidthDesktop: 140,
  logoWidthMobile: 110,
  brandTagline: 'Outdoor & Pool Games for Active Family Fun',

  // Active Preset ID
  activePalettePreset: 'sald-aqua',

  // Global Colors
  colorPrimary: '#15202B',
  colorSecondary: '#00C2CB',
  colorAccent: '#FBBF24',
  colorBackground: '#FFFFFF',
  colorSurface: '#F8FAFC',
  colorHeadings: '#0F172A',
  colorBodyText: '#334155',
  colorButtonBg: '#00C2CB',
  colorButtonText: '#FFFFFF',
  colorBorder: '#E2E8F0',

  // Header
  headerLayout: 'logo_left_menu_center',
  headerSticky: true,
  headerTransparentHome: false,
  headerBgColor: '#FFFFFF',
  headerTextColor: '#0F172A',
  headerShowBorderBottom: true,
  headerShowSearch: true,
  headerShowCartCount: true,
  headerDrawerStyle: 'glassmorphism',

  // Announcement Bar
  announcementShow: true,
  announcementText: '🌊 Summer Splash Sale: Get 20% OFF all Pool Games with code SPLASH20 | Free Express Shipping over $75',
  announcementTextAr: '🌊 تخفيضات الصيف الكبرى: خصم 20% على جميع ألعاب المسابح بكود SPLASH20 | شحن سريع مجاني للطلبات فوق 75$',
  announcementBgColor: '#15202B',
  announcementTextColor: '#FFFFFF',

  // Video Hero & Mobile Viewport Optimization
  heroMobileHeightMode: 'fullscreen',
  heroMobileCustomHeight: 580,
  heroDesktopHeightMode: 'large',
  heroDesktopCustomHeight: 720,
  heroContentAlignment: 'center',
  heroOverlayOpacity: 35,
  heroOverlayColor: '#0F172A',
  heroShowScrollIndicator: true,
  heroEyebrow: 'PLAY • SPLASH • ENJOY',
  heroHeading: 'Make Every Outdoor Moment More Fun',
  heroHeadingAr: 'اجعل كل لحظة خارجية مليئة بالمرح والإثارة',
  heroDescription: 'Discover pool games, playground fun and outdoor games designed for unforgettable family moments.',
  heroDescriptionAr: 'اكتشف ألعاب المسابح، معدات الحدائق والأنشطة العائلية المصممة للحظات لا تُنسى تحت الشمس.',
  heroButtonPrimaryLabel: 'Shop Best Sellers',
  heroButtonSecondaryLabel: 'Explore Categories',

  // Global Layout & Radii
  pageWidth: 1320,
  baseRadius: 16,
  cardRadius: 16,
  buttonRadius: 24,
  inputRadius: 12,
  badgeRadius: 9999,
  containerPadding: 'balanced',

  // Cart & Shipping
  freeShippingThreshold: 75,
  enableCartNotes: true,

  // Footer
  footerBgColor: '#0F172A',
  footerTextColor: '#94A3B8',
  footerHeadingColor: '#22D3EE',
  footerShowPledge: true,
  footerPledgeTitle: 'The SALD 1-Year Splash Guarantee',
  footerPledgeTitleAr: 'ضمان سالد الذهبي لمدة عام كامل',
  footerPledgeText: 'If any equipment exhibits chlorine fading or UV wear within 365 days, we replace it instantly free of charge.',
  footerPledgeTextAr: 'إذا تأثرت خامات اللعبة بأشعة الشمس أو مياه المسابح خلال 365 يوماً، سنرسل لك بديلاً جديداً فوراً مجاناً.',
  footerShowNewsletter: true,
  footerNewsletterHeading: 'Join Club SALD',
  footerNewsletterSubtext: 'Get 15% off your first outdoor order and exclusive backyard game rules.',
  footerShowSocial: true,
  footerShowPaymentIcons: true,
  footerShowBackToTop: true,
  footerCopyrightText: 'SALD Outdoor & Pool Games. Engineered for active families.'
};

interface StoreContextType {
  // Locale & i18n
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  t: (path: string) => string;
  isRtl: boolean;

  // Catalog
  products: Product[];
  pages: PageContent[];
  getProductByHandle: (handle: string) => Product | undefined;
  getPageByHandle: (handle: string) => PageContent | undefined;

  // Cart
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  freeShippingRemaining: number;
  isFreeShippingUnlocked: boolean;
  isCartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  addToCart: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  updateCartQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  clearCart: () => void;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  cartNote: string;
  setCartNote: (note: string) => void;

  // Navigation / Routing
  view: 'home' | 'collection' | 'product' | 'page';
  viewParam: string;
  navigateTo: (view: 'home' | 'collection' | 'product' | 'page', param?: string) => void;

  // Modals & Drawers
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;

  isThemeSettingsOpen: boolean;
  openThemeSettings: () => void;
  closeThemeSettings: () => void;

  // Theme Customization Options
  themeSettings: ThemeCustomizationSettings;
  updateThemeSettings: (updates: Partial<ThemeCustomizationSettings>) => void;
  applyPalettePreset: (presetId: string) => void;
  resetThemeSettings: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Toast
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<LocaleCode>('en');
  const [themeSettings, setThemeSettings] = useState<ThemeCustomizationSettings>(() => {
    try {
      const saved = localStorage.getItem('sald_theme_settings');
      if (saved) return { ...defaultThemeSettings, ...JSON.parse(saved) };
    } catch {
      // fallback
    }
    return defaultThemeSettings;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const initialProduct = productsData[0];
    return [
      {
        product: initialProduct,
        variant: initialProduct.variants[0],
        quantity: 1
      }
    ];
  });
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('SPLASH20');
  const [cartNote, setCartNote] = useState<string>('');
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>(['sald-splash-pro-hoop']);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Simple SPA Navigation State
  const [view, setView] = useState<'home' | 'collection' | 'product' | 'page'>('home');
  const [viewParam, setViewParam] = useState<string>('all');

  const freeShippingThreshold = themeSettings.freeShippingThreshold || 75;
  const isRtl = locale === 'ar';

  // Apply direction and lang attribute to document
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale, isRtl]);

  // Dynamically update site-wide CSS variables whenever layout, colors, or radii change
  useEffect(() => {
    const root = document.documentElement;
    // Layout & Geometry
    root.style.setProperty('--page-width', `${themeSettings.pageWidth}px`);
    root.style.setProperty('--base-radius', `${themeSettings.baseRadius}px`);
    root.style.setProperty('--card-radius', `${themeSettings.cardRadius}px`);
    root.style.setProperty('--button-radius', `${themeSettings.buttonRadius}px`);
    root.style.setProperty('--input-radius', `${themeSettings.inputRadius}px`);
    root.style.setProperty('--badge-radius', `${themeSettings.badgeRadius ?? 9999}px`);
    
    // Gutter / Container Padding
    const padVal = themeSettings.containerPadding === 'compact' ? '16px' : themeSettings.containerPadding === 'spacious' ? '36px' : '24px';
    root.style.setProperty('--container-padding', padVal);

    // Colors
    root.style.setProperty('--color-primary', themeSettings.colorPrimary);
    root.style.setProperty('--color-secondary', themeSettings.colorSecondary);
    root.style.setProperty('--color-accent', themeSettings.colorAccent);
    root.style.setProperty('--color-background', themeSettings.colorBackground);
    root.style.setProperty('--color-surface', themeSettings.colorSurface);
    root.style.setProperty('--color-headings', themeSettings.colorHeadings);
    root.style.setProperty('--color-body-text', themeSettings.colorBodyText);
    root.style.setProperty('--color-button-bg', themeSettings.colorButtonBg);
    root.style.setProperty('--color-button-text', themeSettings.colorButtonText);
    root.style.setProperty('--color-border', themeSettings.colorBorder);
  }, [themeSettings]);

  const updateThemeSettings = (updates: Partial<ThemeCustomizationSettings>) => {
    setThemeSettings((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem('sald_theme_settings', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const applyPalettePreset = (presetId: string) => {
    const preset = colorPalettePresets.find(p => p.id === presetId);
    if (!preset) return;

    updateThemeSettings({
      activePalettePreset: preset.id,
      colorPrimary: preset.primary,
      colorSecondary: preset.secondary,
      colorAccent: preset.accent,
      colorBackground: preset.background,
      colorSurface: preset.surface,
      colorHeadings: preset.headings,
      colorBodyText: preset.bodyText,
      colorButtonBg: preset.buttonBg,
      colorButtonText: preset.buttonText,
      colorBorder: preset.border,
      announcementBgColor: preset.announcementBg,
      announcementTextColor: preset.announcementText,
      footerBgColor: preset.footerBg,
      footerTextColor: preset.footerText,
      footerHeadingColor: preset.footerHeading,
      heroOverlayColor: preset.heroOverlay
    });

    showToast(isRtl ? `تم تطبيق لوحة ألوان: ${preset.nameAr}` : `Applied "${preset.name}" palette!`);
  };

  const resetThemeSettings = () => {
    setThemeSettings(defaultThemeSettings);
    try {
      localStorage.removeItem('sald_theme_settings');
    } catch {
      // ignore
    }
    showToast('Theme settings restored to default');
  };

  const setLocale = (l: LocaleCode) => {
    setLocaleState(l);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let cur: any = translations[locale];
    for (const key of keys) {
      if (cur && typeof cur === 'object' && key in cur) {
        cur = cur[key];
      } else {
        let enCur: any = translations.en;
        for (const enKey of keys) {
          if (enCur && typeof enCur === 'object' && enKey in enCur) {
            enCur = enCur[enKey];
          } else {
            return path;
          }
        }
        return typeof enCur === 'string' ? enCur : path;
      }
    }
    return typeof cur === 'string' ? cur : path;
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const getProductByHandle = (handle: string) => {
    return productsData.find(p => p.handle === handle || p.id === handle);
  };

  const getPageByHandle = (handle: string) => {
    return pagesData.find(p => p.handle === handle);
  };

  // Cart math
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  
  const discountRate = appliedCoupon?.toUpperCase() === 'SPLASH20' ? 0.20 : 0;
  const cartDiscount = cartSubtotal * discountRate;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);

  const isFreeShippingUnlocked = cartSubtotal >= freeShippingThreshold;
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);

  const openCartDrawer = () => setIsCartDrawerOpen(true);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openCheckout = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  const openThemeSettings = () => setIsThemeSettingsOpen(true);
  const closeThemeSettings = () => setIsThemeSettingsOpen(false);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const addToCart = (product: Product, variant?: ProductVariant, quantity = 1) => {
    const targetVariant = variant || product.variants[0];
    setCart(prev => {
      const existing = prev.find(item => item.variant.id === targetVariant.id);
      if (existing) {
        return prev.map(item =>
          item.variant.id === targetVariant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, variant: targetVariant, quantity }];
    });

    showToast(isRtl ? `تمت إضافة "${product.titleAr || product.title}" إلى السلة` : `Added "${product.title}" to cart!`);
    setIsCartDrawerOpen(true);
  };

  const updateCartQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.variant.id === variantId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (variantId: string) => {
    setCart(prev => prev.filter(item => item.variant.id !== variantId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SPLASH20') {
      setAppliedCoupon('SPLASH20');
      showToast(isRtl ? 'تم تطبيق كود الخصم SPLASH20 (خصم 20%)' : 'Code SPLASH20 applied! (20% OFF)');
      return { success: true, message: 'Code applied successfully!' };
    }
    return { success: false, message: isRtl ? 'كود الخصم غير صالح' : 'Invalid promo code' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(isRtl ? 'تم الحذف من المفضلة' : 'Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast(isRtl ? 'تمت الإضافة إلى المفضلة' : 'Saved to wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const navigateTo = (newView: 'home' | 'collection' | 'product' | 'page', param = 'all') => {
    setView(newView);
    setViewParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StoreContext.Provider
      value={{
        locale,
        setLocale,
        t,
        isRtl,
        products: productsData,
        pages: pagesData,
        getProductByHandle,
        getPageByHandle,
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
        openCartDrawer,
        closeCartDrawer,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        cartNote,
        setCartNote,
        view,
        viewParam,
        navigateTo,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        openSearch,
        closeSearch,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        isThemeSettingsOpen,
        openThemeSettings,
        closeThemeSettings,
        themeSettings,
        updateThemeSettings,
        applyPalettePreset,
        resetThemeSettings,
        wishlist,
        toggleWishlist,
        isInWishlist,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
