import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Sliders } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { t, isRtl, openThemeSettings, themeSettings } = useStore();

  if (!themeSettings.announcementShow) return null;

  const announcementMessage = isRtl
    ? themeSettings.announcementTextAr || themeSettings.announcementText || t('header.announcement')
    : themeSettings.announcementText || t('header.announcement');

  return (
    <aside
      aria-label="Announcement"
      className="text-xs font-semibold py-2.5 px-4 transition-colors relative z-40 border-b border-white/10"
      style={{
        backgroundColor: themeSettings.announcementBgColor || '#15202B',
        color: themeSettings.announcementTextColor || '#FFFFFF'
      }}
    >
      <div className="max-w-[var(--page-width)] mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 animate-pulse" />
          <span className="truncate">{announcementMessage}</span>
        </div>

        {/* Theme Settings & OS 2.0 Customizer Preview Button */}
        <button
          type="button"
          onClick={openThemeSettings}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-[11px] font-bold border border-white/20 transition-all shadow-xs"
          title="Open Theme Options Customizer"
        >
          <Sliders className="w-3.5 h-3.5 text-cyan-300" />
          <span>{isRtl ? 'تخصيص القالب' : 'Theme Options'}</span>
        </button>
      </div>
    </aside>
  );
};
