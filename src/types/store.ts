export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  available: boolean;
  colorHex?: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  titleAr?: string;
  category: 'pool-games' | 'playground' | 'garden-games' | 'family-games';
  categoryLabel: string;
  categoryLabelAr: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  descriptionAr?: string;
  features: string[];
  featuresAr?: string[];
  specs: Record<string, string>;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  stockCount: number;
  variants: ProductVariant[];
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface PageContent {
  title: string;
  titleAr?: string;
  handle: string;
  templateSuffix: string;
  tags: string[];
  published: boolean;
  summary: string;
  bodyHtml: string;
  bodyHtmlAr?: string;
}

export type LocaleCode = 'en' | 'ar';

export interface ThemeCustomizationSettings {
  // Brand
  logoWidthDesktop: number;
  logoWidthMobile: number;
  brandTagline: string;

  // Active Preset ID
  activePalettePreset: string;

  // Global Colors
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  colorBackground: string;
  colorSurface: string;
  colorHeadings: string;
  colorBodyText: string;
  colorButtonBg: string;
  colorButtonText: string;
  colorBorder: string;

  // Header
  headerLayout: 'logo_left_menu_center' | 'logo_left_menu_left' | 'logo_center_menu_split';
  headerSticky: boolean;
  headerTransparentHome: boolean;
  headerBgColor: string;
  headerTextColor: string;
  headerShowBorderBottom: boolean;
  headerShowSearch: boolean;
  headerShowCartCount: boolean;
  headerDrawerStyle: 'glassmorphism' | 'frosted' | 'solid';

  // Announcement Bar
  announcementShow: boolean;
  announcementText: string;
  announcementTextAr: string;
  announcementBgColor: string;
  announcementTextColor: string;

  // Video Hero & Mobile View Optimization
  heroMobileHeightMode: 'fullscreen' | 'large' | 'medium' | 'custom';
  heroMobileCustomHeight: number;
  heroDesktopHeightMode: 'fullscreen' | 'large' | 'custom';
  heroDesktopCustomHeight: number;
  heroContentAlignment: 'left' | 'center' | 'right';
  heroOverlayOpacity: number;
  heroOverlayColor: string;
  heroShowScrollIndicator: boolean;
  heroEyebrow: string;
  heroHeading: string;
  heroHeadingAr: string;
  heroDescription: string;
  heroDescriptionAr: string;
  heroButtonPrimaryLabel: string;
  heroButtonSecondaryLabel: string;

  // Global Layout & Radii
  pageWidth: number;
  baseRadius: number;
  cardRadius: number;
  buttonRadius: number;
  inputRadius: number;
  badgeRadius: number;
  containerPadding: 'compact' | 'balanced' | 'spacious';

  // Cart & Shipping
  freeShippingThreshold: number;
  enableCartNotes: boolean;

  // Footer
  footerBgColor: string;
  footerTextColor: string;
  footerHeadingColor: string;
  footerShowPledge: boolean;
  footerPledgeTitle: string;
  footerPledgeTitleAr: string;
  footerPledgeText: string;
  footerPledgeTextAr: string;
  footerShowNewsletter: boolean;
  footerNewsletterHeading: string;
  footerNewsletterSubtext: string;
  footerShowSocial: boolean;
  footerShowPaymentIcons: boolean;
  footerShowBackToTop: boolean;
  footerCopyrightText: string;
}
