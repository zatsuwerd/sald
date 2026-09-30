/// <reference types="vite/client" />
import JSZip from 'jszip';
import type { ThemeCustomizationSettings } from '../types/store';

// Import all Shopify theme files as raw text strings at build time
const themeAssets = import.meta.glob<string>(
  [
    '/layout/**/*',
    '/sections/**/*',
    '/snippets/**/*',
    '/templates/**/*',
    '/config/**/*',
    '/locales/**/*',
    '/assets/**/*'
  ],
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
);

export async function generateThemeZip(currentSettings?: ThemeCustomizationSettings): Promise<Blob> {
  const zip = new JSZip();

  for (const [filePath, content] of Object.entries(themeAssets)) {
    // filePath starts with '/' e.g. '/sections/header.liquid'
    const relativePath = filePath.replace(/^\/+/, '');
    
    // If it's settings_data.json and we have custom settings, inject the live active settings
    if (relativePath === 'config/settings_data.json' && currentSettings) {
      try {
        const baseData = JSON.parse(content as string);
        if (baseData.current) {
          if (currentSettings.pageWidth) baseData.current.page_width = currentSettings.pageWidth;
          if (currentSettings.cardRadius !== undefined) baseData.current.card_radius = currentSettings.cardRadius;
          if (currentSettings.buttonRadius !== undefined) baseData.current.button_radius = currentSettings.buttonRadius;
          if (currentSettings.colorPrimary) baseData.current.color_primary = currentSettings.colorPrimary;
          if (currentSettings.colorSecondary) baseData.current.color_secondary = currentSettings.colorSecondary;
          if (currentSettings.colorAccent) baseData.current.color_accent = currentSettings.colorAccent;
          if (currentSettings.colorBackground) baseData.current.color_background = currentSettings.colorBackground;
          if (currentSettings.colorSurface) baseData.current.color_surface = currentSettings.colorSurface;
          if (currentSettings.colorHeadings) baseData.current.color_headings = currentSettings.colorHeadings;
          if (currentSettings.colorBodyText) baseData.current.color_body_text = currentSettings.colorBodyText;
          if (currentSettings.colorButtonBg) baseData.current.color_button_bg = currentSettings.colorButtonBg;
          if (currentSettings.colorButtonText) baseData.current.color_button_text = currentSettings.colorButtonText;
          if (currentSettings.colorBorder) baseData.current.color_border = currentSettings.colorBorder;
          if (currentSettings.headerSticky !== undefined) baseData.current.header_sticky = currentSettings.headerSticky;
          if (currentSettings.headerBgColor) baseData.current.header_bg_color = currentSettings.headerBgColor;
          if (currentSettings.headerTextColor) baseData.current.header_text_color = currentSettings.headerTextColor;
          if (currentSettings.headerLayout) baseData.current.header_layout = currentSettings.headerLayout;
          if (currentSettings.headerTransparentHome !== undefined) baseData.current.header_transparent_home = currentSettings.headerTransparentHome;
          if (currentSettings.headerShowBorderBottom !== undefined) baseData.current.header_border_bottom = currentSettings.headerShowBorderBottom;
          if (currentSettings.headerShowSearch !== undefined) baseData.current.header_show_search = currentSettings.headerShowSearch;
          if (currentSettings.headerShowCartCount !== undefined) baseData.current.header_show_cart_count = currentSettings.headerShowCartCount;
          if (currentSettings.headerDrawerStyle) baseData.current.header_drawer_style = currentSettings.headerDrawerStyle;
          if (currentSettings.footerBgColor) baseData.current.footer_bg_color = currentSettings.footerBgColor;
          if (currentSettings.footerTextColor) baseData.current.footer_text_color = currentSettings.footerTextColor;
          if (currentSettings.footerHeadingColor) baseData.current.footer_heading_color = currentSettings.footerHeadingColor;
          if (currentSettings.footerShowNewsletter !== undefined) baseData.current.footer_show_newsletter = currentSettings.footerShowNewsletter;
          if (currentSettings.footerShowSocial !== undefined) baseData.current.footer_show_social = currentSettings.footerShowSocial;
          if (currentSettings.footerShowPledge !== undefined) baseData.current.footer_show_pledge = currentSettings.footerShowPledge;
          if (currentSettings.footerShowPaymentIcons !== undefined) baseData.current.footer_show_payment_icons = currentSettings.footerShowPaymentIcons;
          if (currentSettings.footerShowBackToTop !== undefined) baseData.current.footer_show_back_to_top = currentSettings.footerShowBackToTop;
          if (currentSettings.announcementBgColor) baseData.current.color_announcement_bg = currentSettings.announcementBgColor;
          if (currentSettings.announcementTextColor) baseData.current.color_announcement_text = currentSettings.announcementTextColor;
        }
        zip.file(relativePath, JSON.stringify(baseData, null, 2));
        continue;
      } catch (err) {
        console.error('Failed to augment settings_data.json', err);
      }
    }

    zip.file(relativePath, content as string);
  }

  return await zip.generateAsync({ type: 'blob' });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
