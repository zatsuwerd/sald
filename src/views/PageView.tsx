import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight, FileText, Check, HelpCircle } from 'lucide-react';

export const PageView: React.FC = () => {
  const { viewParam, getPageByHandle, isRtl, navigateTo, showToast } = useStore();

  const page = getPageByHandle(viewParam) || {
    title: 'Store Information',
    titleAr: 'معلومات المتجر',
    handle: 'info',
    templateSuffix: 'page',
    tags: ['info'],
    published: true,
    summary: 'SALD Outdoor & Pool Information',
    bodyHtml: '<p>Welcome to SALD outdoor and pool recreation.</p>'
  };

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
    showToast(isRtl ? 'تم إرسال رسالتك بنجاح! سنرد عليك خلال 24 ساعة.' : 'Message sent successfully! We will reply within 24 hours.');
  };

  const faqItems = [
    {
      q: 'Are SALD pool basketball hoops compatible with saltwater pools?',
      qAr: 'هل ألعاب وسلات المسابح متوافقة مع مسابح المياه المالحة؟',
      a: 'Yes! All SALD hardware is crafted from marine-grade 316 stainless steel and UV-stabilized heavy-duty polymer, specifically tested in both chlorinated and saltwater swimming pools without corrosion.',
      aAr: 'نعم بكل تأكيد! جميع القطع المعدنية مصنوعة من الستانلس ستيل البحري 316 المقاوم للصدأ ومختبرة في المسابح المالحة والكلورية.'
    },
    {
      q: 'What is the 30-Day Splash Guarantee?',
      qAr: 'ما هو تفصيل ضمان الـ 30 يوماً؟',
      a: 'If you or your family are not 100% delighted with your game within 30 days of delivery, return it for a full refund—no restocking fees, with prepaid return shipping labels provided.',
      aAr: 'إذا لم تكن راضياً بنسبة 100% عن المنتج خلال 30 يوماً من استلامه، يمكنك إرجاعه واسترداد المبلغ كاملاً مع توفير بوليصة إرجاع مدفوعة مسبقاً.'
    },
    {
      q: 'How fast does express shipping take?',
      qAr: 'كم يستغرق الشحن السريع؟',
      a: 'Domestic orders ship from our warehouse within 24 hours. Express delivery arrives within 2-4 business days directly to your doorstep.',
      aAr: 'يتم تجهيز وشحن الطلبات خلال 24 ساعة من مستودعاتنا، وتصل خلال 2-4 أيام عمل.'
    },
    {
      q: 'Are the products easy to assemble without tools?',
      qAr: 'هل تتطلب الألعاب أدوات معقدة للتركيب؟',
      a: 'All SALD games feature tool-free quick-snap or thumb-screw assemblies designed to be set up in under 5 minutes right out of the box.',
      aAr: 'صممت جميع منتجات سالد بنظام قفل سريع يتيح تجهيزها وتركيبها في أقل من 5 دقائق دون الحاجة لأي أدوات.'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-900">
            {isRtl ? 'الرئيسية' : 'Home'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-slate-800">
            {isRtl ? page.titleAr || page.title : page.title}
          </span>
        </div>

        {/* Main Article Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-600 block mb-1">
              SALD Information
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isRtl ? page.titleAr || page.title : page.title}
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              {page.summary}
            </p>
          </div>

          {/* Dynamic Render Based on Template Suffix */}
          {page.handle === 'contact' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: isRtl && page.bodyHtmlAr ? page.bodyHtmlAr : page.bodyHtml
                  }}
                />
              </div>

              {/* Contact Form */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-black text-slate-900 mb-4">
                  {isRtl ? 'أرسل لنا رسالة سريعة' : 'Send Us a Quick Message'}
                </h3>
                {contactSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 text-emerald-800 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p className="font-bold text-xs">
                      {isRtl ? 'تم استلام رسالتك بنجاح! سنعاود الاتصال بك قريباً.' : 'Thank you! Your message has been dispatched to our support team.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Message</label>
                      <textarea
                        required
                        rows={3}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold focus:outline-none focus:border-cyan-500 resize-none"
                        placeholder="How can we help with your games?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'إرسال الرسالة' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : page.handle === 'faq' ? (
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left rtl:text-right font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
                  >
                    <span>{isRtl ? faq.qAr : faq.q}</span>
                    <span className="text-cyan-600 font-black text-lg">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed font-medium bg-white border-t border-slate-100">
                      {isRtl ? faq.aAr : faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : page.handle === 'page-importer' ? (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
                <div className="flex items-center gap-2 text-cyan-800 font-black text-sm">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  <span>Shopify Online Store 2.0 Templates Manifest</span>
                </div>
                <p className="text-xs text-cyan-900 font-medium leading-relaxed">
                  All 16+ Shopify Online Store 2.0 JSON templates, Liquid sections, snippets, schema settings, and locales (en/ar) are successfully compiled and active.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  'templates/index.json (Home View & Sections)',
                  'templates/collection.json (Catalog & Filters)',
                  'templates/product.json (Buy Box & Reviews)',
                  'templates/cart.json (Drawer & Free Shipping)',
                  'templates/page.about.json (Story & Mission)',
                  'templates/page.contact.json (Support Portal)',
                  'templates/page.faq.json (Q&A Accordion)',
                  'locales/en.default.json & locales/ar.json'
                ].map((tpl, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 font-mono text-[11px] text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{tpl}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: isRtl && page.bodyHtmlAr ? page.bodyHtmlAr : page.bodyHtml
              }}
            />
          )}

        </div>

      </div>
    </div>
  );
};
