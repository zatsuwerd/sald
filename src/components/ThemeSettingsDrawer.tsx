import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  X,
  Sliders,
  Palette,
  Layout,
  Smartphone,
  Navigation,
  PanelBottom,
  Sparkles,
  RotateCcw,
  Check,
  Megaphone,
  Maximize2,
  Box,
  Layers,
  Wand2,
  Copy,
  CheckCircle2,
  FileCode,
  SlidersHorizontal,
  Eye,
  CheckCheck,
  Download,
  Loader2,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { colorPalettePresets, radiusPresets, maxWidthPresets } from '../data/themePresets';
import { generateThemeZip, downloadBlob } from '../utils/themeZipGenerator';

export const ThemeSettingsDrawer: React.FC = () => {
  const {
    isThemeSettingsOpen,
    closeThemeSettings,
    themeSettings,
    updateThemeSettings,
    applyPalettePreset,
    resetThemeSettings,
    locale,
    setLocale,
    isRtl
  } = useStore();

  const [activeTab, setActiveTab] = useState<'layout' | 'colors' | 'hero' | 'header' | 'footer' | 'announcement'>('layout');
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);

  // Download complete production Shopify Theme .zip
  const handleDownloadZip = async () => {
    try {
      setIsDownloadingZip(true);
      const blob = await generateThemeZip(themeSettings);
      downloadBlob(blob, 'sald-shopify-theme-v2.0.zip');
    } catch (err) {
      console.error('Failed to generate theme zip:', err);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  // Handle Base Radius preset click
  const handleRadiusPresetSelect = (preset: typeof radiusPresets[0]) => {
    updateThemeSettings({
      baseRadius: preset.radius,
      cardRadius: preset.cardRadius,
      buttonRadius: preset.buttonRadius,
      inputRadius: preset.inputRadius,
      badgeRadius: preset.badgeRadius
    });
  };

  // Handle Max-Width preset click
  const handleMaxWidthPresetSelect = (width: number) => {
    updateThemeSettings({ pageWidth: width });
  };

  // Copy CSS Variables to clipboard for Shopify developers
  const copyCssVariables = () => {
    const cssText = `:root {
  --page-width: ${themeSettings.pageWidth}px;
  --base-radius: ${themeSettings.baseRadius}px;
  --card-radius: ${themeSettings.cardRadius}px;
  --button-radius: ${themeSettings.buttonRadius}px;
  --input-radius: ${themeSettings.inputRadius}px;
  --badge-radius: ${themeSettings.badgeRadius ?? 9999}px;
  --container-padding: ${themeSettings.containerPadding === 'compact' ? '16px' : themeSettings.containerPadding === 'spacious' ? '36px' : '24px'};
  --color-primary: ${themeSettings.colorPrimary};
  --color-secondary: ${themeSettings.colorSecondary};
  --color-accent: ${themeSettings.colorAccent};
  --color-background: ${themeSettings.colorBackground};
  --color-surface: ${themeSettings.colorSurface};
  --color-headings: ${themeSettings.colorHeadings};
  --color-body-text: ${themeSettings.colorBodyText};
  --color-button-bg: ${themeSettings.colorButtonBg};
  --color-button-text: ${themeSettings.colorButtonText};
  --color-border: ${themeSettings.colorBorder};
}`;
    navigator.clipboard?.writeText?.(cssText);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2200);
  };

  // Copy JSON settings to clipboard
  const copyJsonSettings = () => {
    const jsonText = JSON.stringify(themeSettings, null, 2);
    navigator.clipboard?.writeText?.(jsonText);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2200);
  };

  if (!isThemeSettingsOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-xs transition-opacity"
        onClick={closeThemeSettings}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex">
        <div className="w-screen max-w-lg bg-white shadow-2xl flex flex-col h-[100dvh]">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shadow-md">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 tracking-tight">
                  {isRtl ? 'تخصيص القالب والتصميم الشامل' : 'SALD Global Theme Options'}
                </h3>
                <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider block">
                  Shopify Online Store 2.0 • Live CSS Variables
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetThemeSettings}
                className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-slate-100 transition-colors"
                title="Reset to defaults"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={closeThemeSettings}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex items-center border-b border-slate-200 bg-white overflow-x-auto text-xs font-bold scrollbar-none flex-shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('layout')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'layout' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Layout &amp; Radii</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('colors')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'colors' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Color Swatches</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hero')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'hero' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Hero &amp; Mobile</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('header')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'header' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Header</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('footer')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'footer' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <PanelBottom className="w-3.5 h-3.5" />
              <span>Footer</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('announcement')}
              className={`px-3.5 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'announcement' ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Announcement</span>
            </button>
          </div>

          {/* Form Scroll Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs">
            
            {/* ========================================================= */}
            {/* TAB 1: GLOBAL LAYOUT CONTROLS & BASE BORDER-RADIUS */}
            {/* ========================================================= */}
            {activeTab === 'layout' && (
              <div className="space-y-6">
                
                {/* Intro notice banner */}
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <Maximize2 className="w-4 h-4 text-cyan-600" />
                    <span>Site-Wide Geometry &amp; CSS Variables</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Changes here immediately apply site-wide CSS variables (<code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--page-width</code>, <code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--base-radius</code>, <code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--card-radius</code>, <code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--button-radius</code>, <code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--input-radius</code>, <code className="bg-cyan-100/80 px-1 py-0.5 rounded font-mono">--badge-radius</code>).
                  </p>
                </div>

                {/* --- 1. GLOBAL MAX-WIDTH CONTROLS --- */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-black text-slate-900">
                      <Maximize2 className="w-4 h-4 text-cyan-600" />
                      <span>Page Maximum Container Width</span>
                    </div>
                    <span className="font-mono text-cyan-600 font-bold px-2 py-0.5 bg-cyan-50 border border-cyan-200 rounded-lg">
                      {themeSettings.pageWidth}px
                    </span>
                  </div>

                  {/* Preset Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {maxWidthPresets.map((preset) => {
                      const isSelected = themeSettings.pageWidth === preset.width;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleMaxWidthPresetSelect(preset.width)}
                          className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                            isSelected
                              ? 'border-cyan-500 bg-cyan-50/80 text-cyan-950 font-black shadow-xs ring-1 ring-cyan-500/20'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold'
                          }`}
                        >
                          <span className="text-[11px]">{isRtl ? preset.labelAr : preset.label}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{preset.width}px</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Precision Range Slider */}
                  <div className="pt-1">
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Fine Slider Control:</span>
                      <span className="font-mono text-cyan-600 font-bold">{themeSettings.pageWidth}px ({Math.round((themeSettings.pageWidth / 1320) * 100)}% standard)</span>
                    </div>
                    <input
                      type="range"
                      min={1080}
                      max={1680}
                      step={20}
                      value={themeSettings.pageWidth}
                      onChange={(e) => updateThemeSettings({ pageWidth: Number(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                      <span>1080px (Compact)</span>
                      <span>1320px (Default)</span>
                      <span>1680px (Cinematic)</span>
                    </div>
                  </div>

                  {/* Visual Viewport Schematic Indicator */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <span>Viewport Layout Scale Ratio</span>
                      <span className="font-mono text-cyan-600">{Math.round((themeSettings.pageWidth / 1680) * 100)}% screen coverage</span>
                    </div>
                    <div className="h-6 bg-slate-100 rounded-lg p-0.5 flex items-center justify-center border border-slate-200/80">
                      <div
                        className="h-full bg-cyan-500/80 rounded-md transition-all duration-300 flex items-center justify-center text-[9px] text-white font-mono font-bold"
                        style={{ width: `${Math.min(100, Math.max(50, (themeSettings.pageWidth / 1680) * 100))}%` }}
                      >
                        Content Area: {themeSettings.pageWidth}px
                      </div>
                    </div>
                  </div>

                  {/* Container Padding / Gutters */}
                  <div className="pt-2 border-t border-slate-200">
                    <label className="font-bold text-slate-900 block mb-1.5">
                      Container Edge Horizontal Padding:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['compact', 'balanced', 'spacious'] as const).map((mode) => {
                        const isCur = themeSettings.containerPadding === mode;
                        const label = mode === 'compact' ? 'Compact (16px)' : mode === 'spacious' ? 'Spacious (36px)' : 'Balanced (24px)';
                        return (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => updateThemeSettings({ containerPadding: mode })}
                            className={`py-2 px-2 rounded-xl border text-center font-bold text-[11px] transition-all capitalize ${
                              isCur
                                ? 'bg-cyan-500 text-white border-cyan-500 shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* --- 2. BASE BORDER-RADIUS PRESETS --- */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-black text-slate-900">
                      <Box className="w-4 h-4 text-cyan-600" />
                      <span>Base Border-Radius Presets</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500">
                      Curated styles
                    </span>
                  </div>

                  {/* Visual Style Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {radiusPresets.map((preset) => {
                      const isSelected = themeSettings.baseRadius === preset.radius;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleRadiusPresetSelect(preset)}
                          className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between gap-2 ${
                            isSelected
                              ? 'border-cyan-500 bg-cyan-50/80 text-cyan-950 font-black shadow-xs ring-1 ring-cyan-500/20'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold'
                          }`}
                        >
                          {/* Mini visual preview box with corner radius */}
                          <div
                            className="w-12 h-7 border-2 border-cyan-500 bg-cyan-100/60 shadow-xs transition-all"
                            style={{ borderRadius: `${preset.radius}px` }}
                          />
                          <div className="text-[11px] leading-tight">
                            {isRtl ? preset.labelAr : preset.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* --- 3. PRECISION RADIUS SLIDERS --- */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-1.5 font-black text-slate-900">
                    <Layers className="w-4 h-4 text-cyan-600" />
                    <span>Granular Element Radius Fine-Tuning</span>
                  </div>

                  {/* Base Radius */}
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Base Element Radius (<code className="font-mono text-cyan-600">--base-radius</code>):</span>
                      <span className="font-mono text-cyan-600 font-bold">{themeSettings.baseRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={32}
                      step={2}
                      value={themeSettings.baseRadius}
                      onChange={(e) => updateThemeSettings({ baseRadius: Number(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  {/* Card Radius */}
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Card Radius (<code className="font-mono text-cyan-600">--card-radius</code>):</span>
                      <span className="font-mono text-cyan-600 font-bold">{themeSettings.cardRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={36}
                      step={2}
                      value={themeSettings.cardRadius}
                      onChange={(e) => updateThemeSettings({ cardRadius: Number(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  {/* Button Radius */}
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Button Radius (<code className="font-mono text-cyan-600">--button-radius</code>):</span>
                      <span className="font-mono text-cyan-600 font-bold">
                        {themeSettings.buttonRadius >= 9999 ? 'Full Pill (9999px)' : `${themeSettings.buttonRadius}px`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={40}
                      step={2}
                      value={themeSettings.buttonRadius > 40 ? 40 : themeSettings.buttonRadius}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        updateThemeSettings({ buttonRadius: val === 40 ? 9999 : val });
                      }}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  {/* Input Radius */}
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Form Input Radius (<code className="font-mono text-cyan-600">--input-radius</code>):</span>
                      <span className="font-mono text-cyan-600 font-bold">{themeSettings.inputRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={28}
                      step={2}
                      value={themeSettings.inputRadius}
                      onChange={(e) => updateThemeSettings({ inputRadius: Number(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  {/* Badge Radius */}
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Badge &amp; Chip Radius (<code className="font-mono text-cyan-600">--badge-radius</code>):</span>
                      <span className="font-mono text-cyan-600 font-bold">
                        {(themeSettings.badgeRadius ?? 9999) >= 9999 ? 'Pill (9999px)' : `${themeSettings.badgeRadius}px`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={30}
                      step={2}
                      value={(themeSettings.badgeRadius ?? 9999) > 30 ? 30 : themeSettings.badgeRadius ?? 30}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        updateThemeSettings({ badgeRadius: val === 30 ? 9999 : val });
                      }}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* --- 4. LIVE INTERACTIVE GEOMETRY PREVIEW BOX --- */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                      Live Component Shape Preview
                    </span>
                    <span className="text-[10px] text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                      Active CSS Variables
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Sample Button */}
                    <button
                      type="button"
                      className="px-4 py-2.5 bg-cyan-500 text-white font-bold text-xs shadow-sm transition-all hover:bg-cyan-600 active:scale-95"
                      style={{ borderRadius: `${themeSettings.buttonRadius}px` }}
                    >
                      Sample Action Button
                    </button>

                    {/* Sample Input */}
                    <input
                      type="text"
                      readOnly
                      value="Interactive Form Input"
                      className="px-3 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs flex-1 text-center"
                      style={{ borderRadius: `${themeSettings.inputRadius}px` }}
                    />
                  </div>

                  {/* Sample Card */}
                  <div
                    className="p-3.5 bg-slate-50 border border-slate-200 flex items-center justify-between shadow-xs transition-all"
                    style={{ borderRadius: `${themeSettings.cardRadius}px` }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs"
                        style={{ borderRadius: `${themeSettings.baseRadius}px` }}
                      >
                        ★
                      </div>
                      <span className="font-bold text-slate-800 text-xs">Product Card Container</span>
                    </div>
                    <span
                      className="text-[10px] bg-amber-400 text-slate-900 font-black px-2.5 py-0.5 shadow-xs"
                      style={{ borderRadius: `${themeSettings.badgeRadius ?? 9999}px` }}
                    >
                      20% OFF
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 2: SITE-WIDE COLOR PALETTE SWATCHES & CSS VARIABLES */}
            {/* ========================================================= */}
            {activeTab === 'colors' && (
              <div className="space-y-6">
                
                {/* Intro notice banner */}
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <Palette className="w-4 h-4 text-cyan-600" />
                    <span>Site-Wide Color Palette Swatches &amp; CSS Variables</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Select a curated color scheme swatch below to transform your entire store with one click, or fine-tune individual CSS color variables with the live pickers.
                  </p>
                </div>

                {/* Curated Swatch Palette Cards */}
                <div className="space-y-2.5">
                  <span className="font-black text-slate-900 block text-xs">
                    Curated E-Commerce Palettes (1-Click Apply):
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {colorPalettePresets.map((palette) => {
                      const isActive = themeSettings.activePalettePreset === palette.id;
                      return (
                        <div
                          key={palette.id}
                          onClick={() => applyPalettePreset(palette.id)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between gap-3 ${
                            isActive
                              ? 'border-cyan-500 bg-cyan-50/50 shadow-md ring-2 ring-cyan-500/20'
                              : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          {/* Title and Active Badge */}
                          <div className="flex items-center justify-between">
                            <span className="font-black text-slate-900 text-xs leading-tight">
                              {isRtl ? palette.nameAr : palette.name}
                            </span>
                            {isActive && (
                              <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>

                          {/* Color Swatch Dots Bar */}
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                              style={{ backgroundColor: palette.primary }}
                              title="Primary Base"
                            />
                            <span
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                              style={{ backgroundColor: palette.secondary }}
                              title="Secondary Aqua"
                            />
                            <span
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                              style={{ backgroundColor: palette.accent }}
                              title="Accent Highlights"
                            />
                            <span
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                              style={{ backgroundColor: palette.surface }}
                              title="Surface / Card"
                            />
                            <span
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                              style={{ backgroundColor: palette.buttonBg }}
                              title="CTA Button Action"
                            />
                          </div>

                          {/* Palette Description */}
                          <p className="text-[10px] text-slate-500 leading-snug">
                            {palette.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Store Color Preview Strip */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[11px] font-black uppercase text-slate-500 tracking-wider block">
                    Live Palette Component Preview
                  </span>
                  
                  <div
                    className="p-4 border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3"
                    style={{
                      backgroundColor: themeSettings.colorSurface,
                      borderColor: themeSettings.colorBorder
                    }}
                  >
                    <div>
                      <span
                        className="text-xs font-black block"
                        style={{ color: themeSettings.colorHeadings }}
                      >
                        SplashPro Pool Hoop
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ color: themeSettings.colorBodyText }}
                      >
                        High durability active outdoor game
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-black px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: themeSettings.colorAccent,
                          color: '#0F172A'
                        }}
                      >
                        Popular
                      </span>
                      <button
                        type="button"
                        className="px-3.5 py-1.5 font-bold text-xs shadow-xs"
                        style={{
                          backgroundColor: themeSettings.colorButtonBg,
                          color: themeSettings.colorButtonText,
                          borderRadius: `${themeSettings.buttonRadius}px`
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Individual Color Variable Pickers */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-1.5 font-black text-slate-900">
                    <Wand2 className="w-4 h-4 text-cyan-600" />
                    <span>Granular Color Variable Customization</span>
                  </div>

                  {/* Primary Charcoal / Navy */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Primary Brand Color (<code className="font-mono text-cyan-600">--color-primary</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorPrimary}
                        onChange={(e) => updateThemeSettings({ colorPrimary: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorPrimary}
                        onChange={(e) => updateThemeSettings({ colorPrimary: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Secondary Pool Aqua */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Secondary Accent Color (<code className="font-mono text-cyan-600">--color-secondary</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorSecondary}
                        onChange={(e) => updateThemeSettings({ colorSecondary: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorSecondary}
                        onChange={(e) => updateThemeSettings({ colorSecondary: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Accent Warm Yellow */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Sunshine Accent Color (<code className="font-mono text-cyan-600">--color-accent</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorAccent}
                        onChange={(e) => updateThemeSettings({ colorAccent: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorAccent}
                        onChange={(e) => updateThemeSettings({ colorAccent: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Headings Color */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Headings &amp; Titles Color (<code className="font-mono text-cyan-600">--color-headings</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorHeadings}
                        onChange={(e) => updateThemeSettings({ colorHeadings: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorHeadings}
                        onChange={(e) => updateThemeSettings({ colorHeadings: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Body Text Color */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Body Text Color (<code className="font-mono text-cyan-600">--color-body-text</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorBodyText}
                        onChange={(e) => updateThemeSettings({ colorBodyText: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorBodyText}
                        onChange={(e) => updateThemeSettings({ colorBodyText: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Primary Button Action Background */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Primary Button Background (<code className="font-mono text-cyan-600">--color-button-bg</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorButtonBg}
                        onChange={(e) => updateThemeSettings({ colorButtonBg: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorButtonBg}
                        onChange={(e) => updateThemeSettings({ colorButtonBg: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Primary Button Text */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Primary Button Text (<code className="font-mono text-cyan-600">--color-button-text</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorButtonText}
                        onChange={(e) => updateThemeSettings({ colorButtonText: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorButtonText}
                        onChange={(e) => updateThemeSettings({ colorButtonText: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Card / Surface Background */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Surface / Card Background (<code className="font-mono text-cyan-600">--color-surface</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorSurface}
                        onChange={(e) => updateThemeSettings({ colorSurface: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorSurface}
                        onChange={(e) => updateThemeSettings({ colorSurface: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>

                  {/* Border / Divider Color */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Border &amp; Divider Line (<code className="font-mono text-cyan-600">--color-border</code>):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={themeSettings.colorBorder}
                        onChange={(e) => updateThemeSettings({ colorBorder: e.target.value, activePalettePreset: 'custom' })}
                        className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                      />
                      <input
                        type="text"
                        value={themeSettings.colorBorder}
                        onChange={(e) => updateThemeSettings({ colorBorder: e.target.value, activePalettePreset: 'custom' })}
                        className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                      />
                    </div>
                  </div>
                </div>

                {/* Developer Export Snippet Tools & Theme ZIP */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-cyan-400" />
                      <span className="font-black text-xs">Production Theme Export</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>OS 2.0 Ready</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Download the complete Shopify theme ZIP with your custom layout, radii, and color settings baked in, or copy developer snippets for manual theme edits.
                  </p>
                  
                  {/* Download Full Theme ZIP Button */}
                  <button
                    type="button"
                    onClick={handleDownloadZip}
                    disabled={isDownloadingZip}
                    className="w-full p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-98 disabled:opacity-75"
                  >
                    {isDownloadingZip ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Packaging Shopify Theme (.zip)...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-slate-950" />
                        <span>Download Complete Shopify Theme (.zip)</span>
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={copyCssVariables}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5 font-bold text-xs transition-all active:scale-95 text-cyan-300"
                    >
                      {copiedCss ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCss ? 'Copied CSS!' : 'Copy :root CSS'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={copyJsonSettings}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5 font-bold text-xs transition-all active:scale-95 text-amber-300"
                    >
                      {copiedJson ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedJson ? 'Copied JSON!' : 'Copy Theme JSON'}</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 3: HERO & MOBILE VIEWPORT OPTIMIZATION */}
            {/* ========================================================= */}
            {activeTab === 'hero' && (
              <div className="space-y-5">
                <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <Smartphone className="w-4 h-4 text-cyan-600" />
                    <span>Mobile Screen Viewport Optimization</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Set whether the video hero section takes over the entire mobile screen (100dvh), large view (85vh), or medium view.
                  </p>
                </div>

                {/* Mobile Height Mode */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Mobile Viewport Height Display:
                  </label>
                  <select
                    value={themeSettings.heroMobileHeightMode}
                    onChange={(e) => updateThemeSettings({ heroMobileHeightMode: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="fullscreen">Full Screen Entire Viewport (100dvh) — Recommended</option>
                    <option value="large">Large (85% Viewport)</option>
                    <option value="medium">Medium (70% Viewport)</option>
                    <option value="custom">Custom Pixel Height</option>
                  </select>
                </div>

                {themeSettings.heroMobileHeightMode === 'custom' && (
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Custom Mobile Height (px):</span>
                      <span className="font-mono text-cyan-600">{themeSettings.heroMobileCustomHeight}px</span>
                    </div>
                    <input
                      type="range"
                      min={400}
                      max={850}
                      step={20}
                      value={themeSettings.heroMobileCustomHeight}
                      onChange={(e) => updateThemeSettings({ heroMobileCustomHeight: Number(e.target.value) })}
                      className="w-full accent-cyan-500"
                    />
                  </div>
                )}

                {/* Desktop Height Mode */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Desktop Viewport Height:
                  </label>
                  <select
                    value={themeSettings.heroDesktopHeightMode}
                    onChange={(e) => updateThemeSettings({ heroDesktopHeightMode: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="fullscreen">Full Screen Viewport (100vh)</option>
                    <option value="large">Large (85vh) — Default</option>
                    <option value="custom">Custom Height</option>
                  </select>
                </div>

                {/* Content Alignment */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Content Alignment:
                  </label>
                  <div className="grid grid-cols-3 gap-2 font-bold">
                    {(['left', 'center', 'right'] as const).map((align) => (
                      <button
                        key={align}
                        type="button"
                        onClick={() => updateThemeSettings({ heroContentAlignment: align })}
                        className={`py-2 rounded-xl border capitalize ${
                          themeSettings.heroContentAlignment === align
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {align}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Overlay Tint Opacity Slider */}
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>Video Dark Tint Strength:</span>
                    <span className="font-mono text-cyan-600">{themeSettings.heroOverlayOpacity}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={85}
                    step={5}
                    value={themeSettings.heroOverlayOpacity}
                    onChange={(e) => updateThemeSettings({ heroOverlayOpacity: Number(e.target.value) })}
                    className="w-full accent-cyan-500"
                  />
                </div>

                {/* Scroll Down Indicator */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show "Scroll to Explore" arrow</span>
                    <span className="text-[11px] text-slate-500">Helps mobile users know there is content below</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.heroShowScrollIndicator}
                    onChange={(e) => updateThemeSettings({ heroShowScrollIndicator: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Eyebrow & Headline Customization */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1">Eyebrow Tag:</label>
                  <input
                    type="text"
                    value={themeSettings.heroEyebrow}
                    onChange={(e) => updateThemeSettings({ heroEyebrow: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-900 block mb-1">Main Headline (EN):</label>
                  <input
                    type="text"
                    value={themeSettings.heroHeading}
                    onChange={(e) => updateThemeSettings({ heroHeading: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-900 block mb-1">Primary Button Label:</label>
                  <input
                    type="text"
                    value={themeSettings.heroButtonPrimaryLabel}
                    onChange={(e) => updateThemeSettings({ heroButtonPrimaryLabel: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 4: HEADER CUSTOMIZATION */}
            {/* ========================================================= */}
            {activeTab === 'header' && (
              <div className="space-y-5">
                <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <Navigation className="w-4 h-4 text-cyan-600" />
                    <span>Header Navigation &amp; Layout Options</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Customise header layouts, sticky behavior, colors, divider borders, search visibility, and mobile drawer styles.
                  </p>
                </div>

                {/* Header Layout */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Desktop Navigation Layout:
                  </label>
                  <select
                    value={themeSettings.headerLayout}
                    onChange={(e) => updateThemeSettings({ headerLayout: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="logo_left_menu_center">Logo Left, Navigation Center</option>
                    <option value="logo_left_menu_left">Logo Left, Navigation Left</option>
                    <option value="logo_center_menu_split">Logo Center, Split Navigation</option>
                  </select>
                </div>

                {/* Sticky Header Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Sticky Header on Scroll</span>
                    <span className="text-[11px] text-slate-500">Stays pinned to top of screen as customer scrolls</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.headerSticky}
                    onChange={(e) => updateThemeSettings({ headerSticky: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Header Background Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Header Background Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.headerBgColor}
                      onChange={(e) => updateThemeSettings({ headerBgColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.headerBgColor}
                      onChange={(e) => updateThemeSettings({ headerBgColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Header Text Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Header Text &amp; Icon Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.headerTextColor}
                      onChange={(e) => updateThemeSettings({ headerTextColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.headerTextColor}
                      onChange={(e) => updateThemeSettings({ headerTextColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Show Border Bottom */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Header Bottom Divider Border</span>
                    <span className="text-[11px] text-slate-500">Subtle border line beneath navigation bar</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.headerShowBorderBottom}
                    onChange={(e) => updateThemeSettings({ headerShowBorderBottom: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Show Search Trigger */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show Search Bar Icon</span>
                    <span className="text-[11px] text-slate-500">Quick product search modal</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.headerShowSearch}
                    onChange={(e) => updateThemeSettings({ headerShowSearch: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Show Cart Count Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show Cart Count Badge</span>
                    <span className="text-[11px] text-slate-500">Floating numeric counter badge on cart icon</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.headerShowCartCount}
                    onChange={(e) => updateThemeSettings({ headerShowCartCount: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 5: FOOTER CUSTOMIZATION */}
            {/* ========================================================= */}
            {activeTab === 'footer' && (
              <div className="space-y-5">
                <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <PanelBottom className="w-4 h-4 text-cyan-600" />
                    <span>Footer Options &amp; Guarantees</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Customise footer colors, warranty pledge card, newsletter subscription club, trust payment badges, and copyright statement.
                  </p>
                </div>

                {/* Footer Background Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Footer Background Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.footerBgColor}
                      onChange={(e) => updateThemeSettings({ footerBgColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.footerBgColor}
                      onChange={(e) => updateThemeSettings({ footerBgColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Footer Text Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Footer Body Text Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.footerTextColor}
                      onChange={(e) => updateThemeSettings({ footerTextColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.footerTextColor}
                      onChange={(e) => updateThemeSettings({ footerTextColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Footer Headings Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Footer Headings Accent Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.footerHeadingColor}
                      onChange={(e) => updateThemeSettings({ footerHeadingColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.footerHeadingColor}
                      onChange={(e) => updateThemeSettings({ footerHeadingColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* 1-Year Pledge Guarantee Card Toggle */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">Show 1-Year Guarantee Banner</span>
                      <span className="text-[11px] text-slate-500">Quality trust banner on top of footer</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={themeSettings.footerShowPledge}
                      onChange={(e) => updateThemeSettings({ footerShowPledge: e.target.checked })}
                      className="w-4 h-4 accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  {themeSettings.footerShowPledge && (
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Pledge Title:</label>
                        <input
                          type="text"
                          value={themeSettings.footerPledgeTitle}
                          onChange={(e) => updateThemeSettings({ footerPledgeTitle: e.target.value })}
                          className="w-full p-2 rounded-xl border border-slate-200 bg-white font-semibold"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Pledge Text:</label>
                        <textarea
                          rows={2}
                          value={themeSettings.footerPledgeText}
                          onChange={(e) => updateThemeSettings({ footerPledgeText: e.target.value })}
                          className="w-full p-2 rounded-xl border border-slate-200 bg-white text-xs resize-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Newsletter Box Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show Newsletter Form in Footer</span>
                    <span className="text-[11px] text-slate-500">Allows customer subscription</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.footerShowNewsletter}
                    onChange={(e) => updateThemeSettings({ footerShowNewsletter: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Payment Icons Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show Payment Provider Badges</span>
                    <span className="text-[11px] text-slate-500">Apple Pay, Visa, Mastercard, Shop Pay</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.footerShowPaymentIcons}
                    onChange={(e) => updateThemeSettings({ footerShowPaymentIcons: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Back to Top Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Show 'Back to Top' Button</span>
                    <span className="text-[11px] text-slate-500">Smooth scrolling anchor to page top</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.footerShowBackToTop}
                    onChange={(e) => updateThemeSettings({ footerShowBackToTop: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 6: TOP ANNOUNCEMENT BAR */}
            {/* ========================================================= */}
            {activeTab === 'announcement' && (
              <div className="space-y-5">
                <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200">
                  <span className="font-extrabold text-cyan-900 flex items-center gap-1.5 text-xs">
                    <Megaphone className="w-4 h-4 text-cyan-600" />
                    <span>Top Announcement Bar Settings</span>
                  </span>
                  <p className="text-[11px] text-cyan-800 mt-1 leading-relaxed">
                    Customise promotional headline, coupon code announcement, background, and text colors.
                  </p>
                </div>

                {/* Show Announcement Bar */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900 block">Enable Announcement Bar</span>
                    <span className="text-[11px] text-slate-500">Top strip at the very top of store</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={themeSettings.announcementShow}
                    onChange={(e) => updateThemeSettings({ announcementShow: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Message EN */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1">Announcement Message (EN):</label>
                  <textarea
                    rows={2}
                    value={themeSettings.announcementText}
                    onChange={(e) => updateThemeSettings({ announcementText: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs resize-none"
                  />
                </div>

                {/* Message AR */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1">Announcement Message (Arabic):</label>
                  <textarea
                    rows={2}
                    value={themeSettings.announcementTextAr}
                    onChange={(e) => updateThemeSettings({ announcementTextAr: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs resize-none"
                  />
                </div>

                {/* Announcement Background Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Announcement Background Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.announcementBgColor}
                      onChange={(e) => updateThemeSettings({ announcementBgColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.announcementBgColor}
                      onChange={(e) => updateThemeSettings({ announcementBgColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                {/* Announcement Text Color */}
                <div>
                  <label className="font-bold text-slate-900 block mb-1.5">
                    Announcement Text Color:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeSettings.announcementTextColor}
                      onChange={(e) => updateThemeSettings({ announcementTextColor: e.target.value })}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      value={themeSettings.announcementTextColor}
                      onChange={(e) => updateThemeSettings({ announcementTextColor: e.target.value })}
                      className="flex-1 p-2 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleDownloadZip}
              disabled={isDownloadingZip}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-60"
            >
              {isDownloadingZip ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isDownloadingZip ? 'Zipping...' : 'Download Theme (.zip)'}</span>
            </button>
            <button
              type="button"
              onClick={closeThemeSettings}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Done &amp; Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
