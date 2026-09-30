export interface ColorPalettePreset {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  headings: string;
  bodyText: string;
  buttonBg: string;
  buttonText: string;
  border: string;
  announcementBg: string;
  announcementText: string;
  footerBg: string;
  footerText: string;
  footerHeading: string;
  heroOverlay: string;
}

export const colorPalettePresets: ColorPalettePreset[] = [
  {
    id: 'sald-aqua',
    name: 'SALD Splash Aqua (Signature)',
    nameAr: 'أكوا سالد الأصلي (التوقيع)',
    description: 'Crisp pool turquoise with warm sunshine yellow accents and deep charcoal navy.',
    primary: '#15202B',
    secondary: '#00C2CB',
    accent: '#FBBF24',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    headings: '#0F172A',
    bodyText: '#334155',
    buttonBg: '#00C2CB',
    buttonText: '#FFFFFF',
    border: '#E2E8F0',
    announcementBg: '#15202B',
    announcementText: '#FFFFFF',
    footerBg: '#0F172A',
    footerText: '#94A3B8',
    footerHeading: '#22D3EE',
    heroOverlay: '#0F172A'
  },
  {
    id: 'ocean-navy',
    name: 'Deep Ocean Blue',
    nameAr: 'أزرق المحيط العميق',
    description: 'Rich maritime navy with electric sky-blue highlights and ice-water clarity.',
    primary: '#0A192F',
    secondary: '#0284C7',
    accent: '#38BDF8',
    background: '#FFFFFF',
    surface: '#F0F9FF',
    headings: '#0C4A6E',
    bodyText: '#334155',
    buttonBg: '#0284C7',
    buttonText: '#FFFFFF',
    border: '#BAE6FD',
    announcementBg: '#0A192F',
    announcementText: '#E0F2FE',
    footerBg: '#0A192F',
    footerText: '#7DD3FC',
    footerHeading: '#38BDF8',
    heroOverlay: '#0A192F'
  },
  {
    id: 'tropical-sunset',
    name: 'Tropical Sunset Glow',
    nameAr: 'غروب استوائي متوهج',
    description: 'Warm mango orange and golden citrus accents with rich espresso slate.',
    primary: '#1C1917',
    secondary: '#EA580C',
    accent: '#F59E0B',
    background: '#FFFFFF',
    surface: '#FFFBEB',
    headings: '#7C2D12',
    bodyText: '#44403C',
    buttonBg: '#EA580C',
    buttonText: '#FFFFFF',
    border: '#FED7AA',
    announcementBg: '#1C1917',
    announcementText: '#FEF3C7',
    footerBg: '#1C1917',
    footerText: '#D6D3D1',
    footerHeading: '#FB923C',
    heroOverlay: '#1C1917'
  },
  {
    id: 'emerald-lagoon',
    name: 'Emerald Lagoon & Lawn',
    nameAr: 'واحة الزمرد والحدائق',
    description: 'Lush botanical garden emeralds with mint highlights and deep forest undertones.',
    primary: '#064E3B',
    secondary: '#059669',
    accent: '#34D399',
    background: '#FFFFFF',
    surface: '#F0FDF4',
    headings: '#064E3B',
    bodyText: '#374151',
    buttonBg: '#059669',
    buttonText: '#FFFFFF',
    border: '#A7F3D0',
    announcementBg: '#064E3B',
    announcementText: '#D1FAE5',
    footerBg: '#064E3B',
    footerText: '#A7F3D0',
    footerHeading: '#6EE7B7',
    heroOverlay: '#064E3B'
  },
  {
    id: 'coral-reef',
    name: 'Coral Reef Vibrant',
    nameAr: 'الشعاب المرجانية الحيوية',
    description: 'High-contrast vibrant coral berry with subtle pinks and modern obsidian slate.',
    primary: '#18181B',
    secondary: '#E11D48',
    accent: '#FB7185',
    background: '#FFFFFF',
    surface: '#FFF1F2',
    headings: '#881337',
    bodyText: '#3F3F46',
    buttonBg: '#E11D48',
    buttonText: '#FFFFFF',
    border: '#FECDD3',
    announcementBg: '#18181B',
    announcementText: '#FFE4E6',
    footerBg: '#18181B',
    footerText: '#FDA4AF',
    footerHeading: '#FB7185',
    heroOverlay: '#18181B'
  },
  {
    id: 'stealth-mono',
    name: 'Monochrome Minimalist',
    nameAr: 'أحادي اللون البسيط',
    description: 'Timeless architectural grayscale with bold black accents and clean white spaces.',
    primary: '#111827',
    secondary: '#374151',
    accent: '#4B5563',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    headings: '#111827',
    bodyText: '#4B5563',
    buttonBg: '#111827',
    buttonText: '#FFFFFF',
    border: '#E5E7EB',
    announcementBg: '#111827',
    announcementText: '#F3F4F6',
    footerBg: '#111827',
    footerText: '#9CA3AF',
    footerHeading: '#F3F4F6',
    heroOverlay: '#111827'
  },
  {
    id: 'royal-purple',
    name: 'Royal Solar Gold',
    nameAr: 'الملكي والذهب الشمسي',
    description: 'Regal velvet violet paired with gleaming golden sunshine and warm summer dusk accents.',
    primary: '#3B0764',
    secondary: '#7E22CE',
    accent: '#EAB308',
    background: '#FFFFFF',
    surface: '#FAF5FF',
    headings: '#581C87',
    bodyText: '#374151',
    buttonBg: '#7E22CE',
    buttonText: '#FFFFFF',
    border: '#E9D5FF',
    announcementBg: '#3B0764',
    announcementText: '#FEF08A',
    footerBg: '#2E1065',
    footerText: '#D8B4FE',
    footerHeading: '#FACC15',
    heroOverlay: '#3B0764'
  },
  {
    id: 'citrus-punch',
    name: 'Citrus Punch & Neon',
    nameAr: 'حمضيات منعشة ونيون',
    description: 'Electric lime, sunny citrus, and vivid pool turquoise for high-energy backyard competitions.',
    primary: '#14532D',
    secondary: '#16A34A',
    accent: '#FACC15',
    background: '#FFFFFF',
    surface: '#F7FEE7',
    headings: '#166534',
    bodyText: '#334155',
    buttonBg: '#16A34A',
    buttonText: '#FFFFFF',
    border: '#BBF7D0',
    announcementBg: '#14532D',
    announcementText: '#FEF08A',
    footerBg: '#052E16',
    footerText: '#86EFAC',
    footerHeading: '#FACC15',
    heroOverlay: '#052E16'
  },
  {
    id: 'desert-dune',
    name: 'Desert Dune & Terracotta',
    nameAr: 'كثبان الصحراء وتيراكوتا',
    description: 'Warm earthen terracotta, clay tones, and desert sand warmth tailored for GCC outdoor spaces.',
    primary: '#431407',
    secondary: '#C2410C',
    accent: '#F97316',
    background: '#FFFFFF',
    surface: '#FFF7ED',
    headings: '#7C2D12',
    bodyText: '#44403C',
    buttonBg: '#C2410C',
    buttonText: '#FFFFFF',
    border: '#FED7AA',
    announcementBg: '#431407',
    announcementText: '#FFEDD5',
    footerBg: '#292524',
    footerText: '#E7E5E4',
    footerHeading: '#FB923C',
    heroOverlay: '#292524'
  }
];

export const radiusPresets = [
  { id: 'sharp', label: 'Sharp Minimal (0px)', labelAr: 'حواف حادة هندسية', radius: 0, buttonRadius: 0, cardRadius: 0, inputRadius: 0, badgeRadius: 0 },
  { id: 'subtle', label: 'Modern Subtle (8px)', labelAr: 'حواف ناعمة عصرية 8px', radius: 8, buttonRadius: 10, cardRadius: 10, inputRadius: 8, badgeRadius: 6 },
  { id: 'smooth', label: 'Smooth Balanced (16px)', labelAr: 'مستديرة متوازنة 16px (افتراضي)', radius: 16, buttonRadius: 24, cardRadius: 16, inputRadius: 12, badgeRadius: 9999 },
  { id: 'curved', label: 'Plush Curved (24px)', labelAr: 'منحنية ومريحة 24px', radius: 24, buttonRadius: 28, cardRadius: 24, inputRadius: 16, badgeRadius: 9999 },
  { id: 'pill', label: 'Playful Full Pill (32px)', labelAr: 'حواف كبسولة كاملة للمسابح', radius: 32, buttonRadius: 9999, cardRadius: 30, inputRadius: 24, badgeRadius: 9999 }
];

export const maxWidthPresets = [
  { id: 'compact', label: 'Compact', labelAr: 'مدمج', width: 1140 },
  { id: 'standard', label: 'Standard', labelAr: 'قياسي', width: 1240 },
  { id: 'wide', label: 'SALD Wide', labelAr: 'عريض (افتراضي)', width: 1320 },
  { id: 'ultra-wide', label: 'Ultra-Wide', labelAr: 'فائق العرض', width: 1440 },
  { id: 'full-bleed', label: 'Full Bleed', labelAr: 'شامل العرض', width: 1560 },
  { id: 'cinematic', label: 'Cinematic', labelAr: 'سينمائي 1680px', width: 1680 }
];
