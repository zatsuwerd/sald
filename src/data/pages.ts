import { PageContent } from '../types/store';

export const pagesData: PageContent[] = [
  {
    title: "About Us & Brand Story",
    titleAr: "من نحن وقصة علامة سالد",
    handle: "about-us",
    templateSuffix: "about",
    tags: ["company", "brand", "story"],
    published: true,
    summary: "Discover the story behind SALD - building professional-grade outdoor and aquatic equipment for active families.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Engineered for Active Family Memories</h2>
        <p>Founded by recreation enthusiasts and industrial designers, SALD was created to solve a universal backyard problem: flimsy pool toys that degrade in weeks, rust under sprinkler spray, or sink on day one.</p>
        <p>Every SALD product is engineered using ultra-durable marine-grade UV-resistant polymers, salt-water and chlorine-tested hardware, and weighted stabilizer bases.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-cyan-50 border border-cyan-100">
            <h4 class="font-bold text-cyan-900 mb-2">🌊 Chlorine & Salt Resistant</h4>
            <p class="text-sm text-cyan-800">Double-sealed seams and non-fading pigments built to withstand seasons of immersion.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">👨‍👩‍👧‍👦 Family First Safety</h4>
            <p class="text-sm text-amber-800">BPA-free, rounded safety edges, tested for energetic toddlers and competitive adults.</p>
          </div>
          <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h4 class="font-bold text-emerald-900 mb-2">🛡️ Built to Endure 5+ Seasons</h4>
            <p class="text-sm text-emerald-800">High impact shatterproof backboards, marine 316 stainless screws, and heavy duty timber.</p>
          </div>
        </div>
        <p>Today, SALD games bring energy, laughter, and screen-free entertainment to over 12,000 backyards, pools, and resorts across the globe.</p>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">صُنعت لتخليد أجمل الذكريات العائلية</h2>
        <p>تأسست علامة سالد (SALD) على يد نخبة من عشاق الترفيه والمصممين لحل مشكلة شائعة في ألعاب الحدائق والمسابح: تلف الألعاب السريع، الصدأ والتآكل، أو التمزق بعد استخدامات معدودة.</p>
        <p>تخضع جميع منتجات سالد لاختبارات صارمة ضد مياه البحر والكلور وأشعة الشمس الحارقة باستخدام بوليمرات بحرية فائقة المتانة وقواعد تثبيت صلبة.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 rounded-2xl bg-cyan-50 border border-cyan-100">
            <h4 class="font-bold text-cyan-900 mb-2">🌊 مقاومة فائقة للكلور والملح</h4>
            <p class="text-sm text-cyan-800">طبقات عزل مزدوجة وألوان ثابتة لا تبهت مع كثرة الاستخدام في المسابح.</p>
          </div>
          <div class="p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">👨‍👩‍👧‍👦 أمان عائلي معتمد</h4>
            <p class="text-sm text-amber-800">خالية تماماً من مادة BPA وحواف ناعمة مصممة للأطفال والكبار على حد سواء.</p>
          </div>
          <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h4 class="font-bold text-emerald-900 mb-2">🛡️ تدوم لسنوات عديدة</h4>
            <p class="text-sm text-emerald-800">لوحات غير قابلة للكسر، مسامير من ستانلس ستيل 316 وخشب طبيعي معالج للطقس الخارجي.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Contact Customer Support",
    titleAr: "خدمة العملاء والدعم الفني",
    handle: "contact",
    templateSuffix: "contact",
    tags: ["support", "contact", "customer-service"],
    published: true,
    summary: "Get in touch with the SALD support crew. Fast 24-hour response on all order and warranty inquiries.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">We're Here to Help</h2>
        <p>Have a question about pool compatibility, delivery times, or tournament setup? Our product specialists are ready to help you plan the perfect weekend.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 text-base mb-2">Direct Contact</h4>
            <p class="text-sm text-slate-600"><strong>Email:</strong> support@sald-outdoors.com</p>
            <p class="text-sm text-slate-600 mt-1"><strong>Phone:</strong> +1 (800) 555-SALD</p>
            <p class="text-sm text-slate-600 mt-1"><strong>Hours:</strong> Mon - Sat: 8:00 AM – 7:00 PM EST</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 text-base mb-2">Warehouse & Fulfillment</h4>
            <p class="text-sm text-slate-600">SALD Outdoor Logistics Center</p>
            <p class="text-sm text-slate-600 mt-1">742 Ocean Breeze Parkway, Suite 400</p>
            <p class="text-sm text-slate-600 mt-1">Orlando, FL 32801</p>
          </div>
        </div>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">نحن هنا لمساعدتكم دائماً</h2>
        <p>هل لديك استفسار حول مناسبة الألعاب لمسبحك، أو مواعيد التوصيل والضمان؟ فريق خبراء سالد جاهز للإجابة على مدار الساعة.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 text-base mb-2">قنوات التواصل</h4>
            <p class="text-sm text-slate-600"><strong>البريد الإلكتروني:</strong> support@sald-outdoors.com</p>
            <p class="text-sm text-slate-600 mt-1"><strong>الهاتف:</strong> +1 (800) 555-SALD</p>
            <p class="text-sm text-slate-600 mt-1"><strong>أوقات العمل:</strong> من الإثنين إلى السبت (8:00 ص - 7:00 م)</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Frequently Asked Questions",
    titleAr: "الأسئلة الشائعة",
    handle: "faq",
    templateSuffix: "faq",
    tags: ["help", "faq", "support"],
    published: true,
    summary: "Answers to the most common questions regarding SALD games, setup, shipping times, and chlorine resistance.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">Are SALD pool basketball hoops compatible with saltwater pools?</h3>
            <p class="text-sm text-slate-600 mt-2">Yes! All SALD hardware is crafted from marine-grade 316 stainless steel and UV-stabilized heavy-duty polymer, specifically tested in chlorinated and saltwater swimming pools.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">What is the 30-Day Splash Guarantee?</h3>
            <p class="text-sm text-slate-600 mt-2">If you or your family are not 100% delighted with your game within 30 days of delivery, return it for a full refund—no restocking fees and prepaid return labels provided.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">How fast does express shipping take?</h3>
            <p class="text-sm text-slate-600 mt-2">Domestic orders ship from our warehouse within 24 hours. Express delivery arrives within 2-4 business days.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">Are the products easy to assemble without tools?</h3>
            <p class="text-sm text-slate-600 mt-2">Yes, all SALD games feature tool-free quick-snap or thumb-screw assemblies designed to be set up in under 5 minutes right out of the box.</p>
          </div>
        </div>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">الأسئلة الأكثر شيوعاً</h2>
        <div class="space-y-4">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">هل ألعاب سالد متوافقة مع مسابح المياه المالحة؟</h3>
            <p class="text-sm text-slate-600 mt-2">نعم بكل تأكيد! جميع القطع المعدنية مصنوعة من الستانلس ستيل البحري 316 المقاوم للتآكل والمختبر في المسابح المالحة والكلورية.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="font-bold text-slate-900 text-base">ما هو ضمان الاسترجاع لمدة 30 يوماً؟</h3>
            <p class="text-sm text-slate-600 mt-2">إذا لم تكن أنت وعائلتك راضين بنسبة 100% عن المنتج خلال 30 يوماً من استلامه، يمكنك إرجاعه واسترداد كامل المبلغ دون أي رسوم إضافية.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Shipping & Delivery Policy",
    titleAr: "سياسة الشحن والتوصيل",
    handle: "shipping-policy",
    templateSuffix: "policies",
    tags: ["policy", "shipping", "legal"],
    published: true,
    summary: "Details on domestic express shipping, free shipping thresholds over $75, and international fulfillment.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Fast, Reliable Outdoor Fun Delivery</h2>
        <p>We know the weekend sunshine waits for no one. That's why we process all in-stock orders the same business day.</p>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
          <li><strong>Free Express Shipping:</strong> Automatically applied to all orders of $75 or more.</li>
          <li><strong>Standard Delivery:</strong> $5.95 flat rate for orders under $75 (arrives in 2-4 business days).</li>
          <li><strong>Real-Time Tracking:</strong> Automated SMS and email tracking links dispatched as soon as the carrier scans your package.</li>
        </ul>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">شحن سريع وموثوق لألعابك المفضلة</h2>
        <p>نحرص على وصول ألعابك قبل عطلة نهاية الأسبوع لتستمتع بأوقاتك العائلية.</p>
        <ul class="list-disc pr-6 space-y-2 text-sm text-slate-700">
          <li><strong>شحن سريع مجاني:</strong> يطبق تلقائياً على جميع الطلبات بقيمة 75$ وأكثر.</li>
          <li><strong>شحن قياسي:</strong> 5.95$ للطلبات الأقل من 75$ (يصل خلال 2-4 أيام عمل).</li>
        </ul>
      </div>
    `
  },
  {
    title: "Warranty & 30-Day Splash Guarantee",
    titleAr: "الضمان الذهبي وضمان الـ 30 يوماً",
    handle: "warranty-guarantee",
    templateSuffix: "policies",
    tags: ["warranty", "guarantee", "policy"],
    published: true,
    summary: "SALD 1-year unconditional chlorine, sun, and defect warranty.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">The 1-Year SALD Splash Guarantee</h2>
        <p>If any SALD game hoop, net, float, or lawn game exhibits manufacturing defects or UV sun degradation within 365 days of purchase, email us a photo and we will dispatch a brand new replacement free of charge.</p>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">ضمان سالد الذهبي لمدة عام كامل</h2>
        <p>إذا واجهت أي عيب مصنعي أو تأثرت خامات اللعبة بأشعة الشمس خلال 365 يوماً من الشراء، سنرسل لك بديلاً جديداً فوراً وبشكل مجاني.</p>
      </div>
    `
  },
  {
    title: "Theme & Page Setup Assistant",
    titleAr: "مساعد إعداد وتخصيص المتجر",
    handle: "page-importer",
    templateSuffix: "importer",
    tags: ["admin", "setup", "tools"],
    published: true,
    summary: "Shopify Online Store 2.0 template validator and page structure assistant for store managers.",
    bodyHtml: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">SALD OS 2.0 Page & Template Manifest</h2>
        <p>This store runs the full SALD Online Store 2.0 architecture including dynamic section schema, locale internationalization, and high-conversion mobile drawers.</p>
      </div>
    `,
    bodyHtmlAr: `
      <div class="space-y-6 text-slate-700 leading-relaxed">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">نظام متجر سالد OS 2.0 المتكامل</h2>
        <p>يعمل هذا المتجر بنظام قوالب Online Store 2.0 الحديث مع دعم كامل لتعدد اللغات والاتجاهات RTL/LTR وسلة التسوق التفاعلية السريعة.</p>
      </div>
    `
  }
];
