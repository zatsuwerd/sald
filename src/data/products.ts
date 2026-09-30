import { Product } from '../types/store';

export const productsData: Product[] = [
  {
    id: 'sald-splash-pro-hoop',
    handle: 'sald-splash-pro-pool-hoop',
    title: 'SplashPro Commercial Pool Basketball Hoop Set',
    titleAr: 'مجموعة كرة سلة المسبح الاحترافية المقاومة للكلور',
    category: 'pool-games',
    categoryLabel: 'Pool Games & Floats',
    categoryLabelAr: 'ألعاب المسبح والعوامات',
    price: 89.00,
    compareAtPrice: 119.00,
    rating: 4.9,
    reviewCount: 348,
    images: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The heavyweight, chlorine-proof poolside basketball system designed for high-flying splash dunks. Features a shatterproof polymer backboard and heavy-duty water-weighted base that stays planted during intense family tournaments.',
    descriptionAr: 'نظام كرة سلة المسبح فائق القوة المصمم لتحمل أقوى المنافسات والرميات. مزود بلوح بوليمر غير قابل للكسر وقاعدة تثبيت تملأ بالماء لثبات تام ومقاومة كاملة للكلور والمياه المالحة.',
    features: [
      'Ultra-durable UV-stabilized polymer backboard',
      'Heavy-duty base holds 50 lbs of water or sand for rock-solid stability',
      'Marine-grade 316 stainless steel non-rust hardware',
      'Includes 2 textured grip water basketballs and hand pump'
    ],
    featuresAr: [
      'لوح بوليمر معالج ضد الأشعة فوق البنفسجية لا يبهت ولا ينكسر',
      'قاعدة ثقيلة تتسع لـ 50 رطلاً من الماء أو الرمل لثبات فائق',
      'مسامير ستانلس ستيل 316 غير قابلة للصدأ إطلاقاً',
      'يشمل كرتي سلة مائيتين بملمس مانع للانزلاق ومنفاخ يدوي'
    ],
    specs: {
      'Rim Diameter': '14 inches',
      'Base Capacity': '50 lbs (Water/Sand)',
      'Material': 'UV50+ Marine Polymer & SS316',
      'Pool Compatibility': 'Chlorine, Saltwater, In-ground & Above-ground'
    },
    isBestSeller: true,
    isOnSale: true,
    stockCount: 14,
    variants: [
      { id: 'v-hoop-cyan', title: 'Aqua Splash Blue', price: 89.00, compareAtPrice: 119.00, sku: 'SALD-HP-CYAN', available: true, colorHex: '#00C2CB' },
      { id: 'v-hoop-sun', title: 'Sunset Gold', price: 89.00, compareAtPrice: 119.00, sku: 'SALD-HP-GOLD', available: true, colorHex: '#FBBF24' },
      { id: 'v-hoop-coral', title: 'Coral Reef Red', price: 94.00, compareAtPrice: 119.00, sku: 'SALD-HP-CORAL', available: true, colorHex: '#F43F5E' }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Marcus Vance',
        location: 'Phoenix, AZ',
        rating: 5,
        date: '3 days ago',
        title: 'Worth every penny - indestructible!',
        comment: 'We have gone through 3 cheap plastic hoops in 2 summers. This SALD hoop has endured relentless 105-degree desert sun and chlorine without a scratch.',
        verified: true
      },
      {
        id: 'r2',
        author: 'Nadia S.',
        location: 'Dubai, UAE',
        rating: 5,
        date: '1 week ago',
        title: 'Perfect for pool parties!',
        comment: 'High quality materials, very easy to assemble in 5 minutes. The kids and adults both play non-stop.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-floating-volleyball',
    handle: 'sald-hydro-slam-volleyball-net',
    title: 'HydroSlam In-Pool Adjustable Volleyball Court Set',
    titleAr: 'شبكة كرة الطائرة المائية العائمة القابلة للتعديل',
    category: 'pool-games',
    categoryLabel: 'Pool Games & Floats',
    categoryLabelAr: 'ألعاب المسبح والعوامات',
    price: 74.00,
    compareAtPrice: 95.00,
    rating: 4.8,
    reviewCount: 189,
    images: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Transform any pool into a lively tournament court. Built with high-tension nylon cordage, heavy anchoring tethers, and water-soft touch volleyball.',
    descriptionAr: 'حوّل أي مسبح إلى ملعب بطولات ممتع. مصممة بشباك نايلون عالية الشد وحبال تثبيت ثقيلة وكرة طائرة مائية ناعمة الملمس.',
    features: [
      'Spans up to 24 feet wide for any standard or custom swimming pool',
      'Weighted tether anchors prevent net drift during spirited spikes',
      'Quick-drying mildew-resistant braided netting',
      'Includes tournament volleyball & waterproof storage tote'
    ],
    featuresAr: [
      'تمتد حتى 24 قدماً لتناسب جميع أحجام المسابح المنزلية والمنتجعات',
      'أثقال تثبيت سفلية تمنع انزياح الشبكة أثناء اللعب الحماسي',
      'شباك سريعة الجفاف ومقاومة للرطوبة والعفن',
      'تشمل كرة طائرة خاصة وحقيبة تخزين مقاومة للماء'
    ],
    specs: {
      'Span Width': 'Adjustable 12ft - 24ft',
      'Net Height': '3.2 ft',
      'Net Material': 'Braided High-Tenacity Polyethylene'
    },
    isNew: true,
    isBestSeller: true,
    stockCount: 22,
    variants: [
      { id: 'v-vb-ocean', title: 'Ocean Aqua & White', price: 74.00, compareAtPrice: 95.00, sku: 'SALD-VB-AQUA', available: true, colorHex: '#00C2CB' },
      { id: 'v-vb-neon', title: 'Neon High-Vis Yellow', price: 74.00, compareAtPrice: 95.00, sku: 'SALD-VB-NEON', available: true, colorHex: '#FBBF24' }
    ],
    reviews: [
      {
        id: 'r3',
        author: 'Elena Rostova',
        location: 'Tampa, FL',
        rating: 5,
        date: '2 weeks ago',
        title: 'Super sturdy and stays tight across the pool',
        comment: 'Unlike cheap inflatable ones that droop in the middle, this net stays straight and taut. Great investment.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-giant-tumble-tower',
    handle: 'sald-giant-timber-tumble-tower',
    title: 'MegaTimber Giant Lawn Tumble Tower Game (54 Blocks)',
    titleAr: 'برج الحطب الخشبي العملاق للحديقة (54 قطعة فاخرة)',
    category: 'garden-games',
    categoryLabel: 'Garden & Lawn Games',
    categoryLabelAr: 'ألعاب الحديقة والمروج',
    price: 98.00,
    compareAtPrice: 125.00,
    rating: 5.0,
    reviewCount: 215,
    images: [
      'https://images.unsplash.com/photo-1585856717904-469074d47d61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Stack towers over 5 feet high! Hand-sanded sustainable New Zealand pinewood blocks with smooth chamfered edges, weather sealant, and heavy-duty canvas carry bag with padded handles.',
    descriptionAr: 'برج عملاق يمكن بناؤه ليصل لارتفاع يفوق 5 أقدام! مصنوع من خشب الصنوبر النيوزيلندي الفاخر والمصقول بعناية بحواف ناعمة مع حقيبة حمل متينة مبطنة.',
    features: [
      '54 precision-milled pinewood blocks (7.5" x 2.5" x 1.5" each)',
      'Smooth hand-finished surfaces with anti-splinter coating',
      'Starts at 2.5 feet tall and towers over 5 feet in gameplay',
      'Heavy-duty 600D canvas carrying case with dual zippers'
    ],
    featuresAr: [
      '54 قطعة خشبية مقطوعة بدقة مليمترية عالية',
      'سطح أملس معالج تماماً ضد الخدوش والشظايا',
      'يبدأ بارتفاع 2.5 قدم ويرتفع لأكثر من 5 أقدام خلال اللعب',
      'حقيبة حمل قماشية متينة 600D مع سحابات مزدوجة'
    ],
    specs: {
      'Block Dimensions': '7.5 x 2.5 x 1.5 inches',
      'Total Weight': '28 lbs',
      'Timber Origin': '100% Sustainable FSC-Certified Pine'
    },
    isBestSeller: true,
    stockCount: 9,
    variants: [
      { id: 'v-timber-nat', title: 'Classic Natural Pine', price: 98.00, compareAtPrice: 125.00, sku: 'SALD-TT-NAT', available: true, colorHex: '#D4A373' },
      { id: 'v-timber-two', title: 'Aqua Accent Dual-Tone', price: 108.00, compareAtPrice: 135.00, sku: 'SALD-TT-AQUA', available: true, colorHex: '#00C2CB' }
    ],
    reviews: [
      {
        id: 'r4',
        author: 'Greg & Lisa C.',
        location: 'Denver, CO',
        rating: 5,
        date: '5 days ago',
        title: 'Huge hit at our backyard barbecue',
        comment: 'The wood is silky smooth, zero splinters, and the carry bag is tough. We play this every single weekend with friends.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-glow-dive-rings',
    handle: 'sald-bioluminescent-dive-relay-torpedoes',
    title: 'GlowStrike Bioluminescent Pool Diving Rings & Torpedoes (8-Pack)',
    titleAr: 'حلقات وصواريخ الغوص المضيئة تحت الماء (طقم 8 قطع)',
    category: 'pool-games',
    categoryLabel: 'Pool Games & Floats',
    categoryLabelAr: 'ألعاب المسبح والعوامات',
    price: 34.00,
    compareAtPrice: 45.00,
    rating: 4.9,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Turn twilight night swimming into an unforgettable treasure hunt. High-density weighted silicone rings stand upright on the pool floor with bright phosphorescent glow pigments.',
    descriptionAr: 'حوّل السباحة المسائية إلى مغامرة البحث عن الكنز تحت الماء. حلقات وصواريخ من السيليكون الموزون تقف عمودياً في قاع المسبح مع إضاءة فوسفورية قوية في الظلام.',
    features: [
      'Glows in the dark for up to 6 hours after charging in natural sunlight',
      'Weighted stands keep rings upright at bottom of pool for easy grabbing',
      'Child-safe 100% food-grade soft silicone material',
      'Includes 4 stand-up rings and 4 hydro-glide torpedoes'
    ],
    featuresAr: [
      'تتوهج في الظلام لمدة تصل إلى 6 ساعات بعد شحنها بضوء الشمس',
      'قواعد موزونة تبقي الحلقات واقفة في القاع لتسهيل التقاطها',
      'مصنوعة من سيليكون غذائي فائق النعومة وآمن تماماً للأطفال',
      'تشمل 4 حلقات عمودية و4 صواريخ انزلاق مائي سريعة'
    ],
    specs: {
      'Quantity': '8 Pieces (4 Rings + 4 Torpedoes)',
      'Glow Type': 'Sun-Charged Phosphorescent UV-Glow',
      'Safety': 'BPA, PVC & Phthalate Free'
    },
    isBestSeller: true,
    isOnSale: true,
    stockCount: 45,
    variants: [
      { id: 'v-glow-neon', title: 'Solar Neon Multi-Color', price: 34.00, compareAtPrice: 45.00, sku: 'SALD-DR-GLOW', available: true, colorHex: '#10B981' }
    ],
    reviews: [
      {
        id: 'r5',
        author: 'Rachel M.',
        location: 'San Diego, CA',
        rating: 5,
        date: '1 week ago',
        title: 'The kids refuse to leave the pool at night now!',
        comment: 'They charge super fast under the sun and light up the bottom of the pool brilliantly. Highly recommended.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-cornhole-pro',
    handle: 'sald-all-weather-regulation-cornhole',
    title: 'AquaShield Weatherproof All-Terrain Cornhole Board Set',
    titleAr: 'طقم لعبة الكورنهول الفاخر المقاوم للمطر والرطوبة',
    category: 'garden-games',
    categoryLabel: 'Garden & Lawn Games',
    categoryLabelAr: 'ألعاب الحديقة والمروج',
    price: 135.00,
    compareAtPrice: 169.00,
    rating: 4.8,
    reviewCount: 97,
    images: [
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Regulation 4ft x 2ft boards crafted with high-impact composite surfacing that will not warp, splinter, or peel under sprinkler spray or direct rainfall. Includes 8 double-sided stick & slide beanbags.',
    descriptionAr: 'ألواح بحجم المقاييس الرسمية (4×2 قدم) مصنعة من مواد مركبة مقاومة للماء والتقلبات الجوية. لا تتأثر بالرطوبة أو مياه الرشاشات وتأتي مع 8 أكياس رمي احترافية مزدوجة الملمس.',
    features: [
      '100% waterproof composite top with cross-braced aluminum alloy frame',
      'Fold-flat magnetic locking legs for quick 10-second setup and compact storage',
      'Regulation weight dual-sided duck cloth & micro-suede toss bags',
      'Built-in LED illuminated hole lights for dusk and nighttime play'
    ],
    featuresAr: [
      'سطح مركب مقاوم للماء 100% مع هيكل من سبائك الألومنيوم المدعمة',
      'أرجل قابلة للطي بأقفال مغناطيسية لتجهيز سريع وتخزين سهل',
      'أكياس رمي مزدوجة الوجه (وجه سريع ووجه للتحكم والثبات)',
      'إضاءة LED مدمجة حول الفتحة للعب المسائي والمرح الليلي'
    ],
    specs: {
      'Board Size': 'Regulation 4 ft x 2 ft',
      'Frame': 'Rustproof Anodized Aluminum',
      'Bags': '8 All-Weather Resin-Filled Dual Sided'
    },
    stockCount: 11,
    variants: [
      { id: 'v-ch-teal', title: 'Coastal Teal & Slate', price: 135.00, compareAtPrice: 169.00, sku: 'SALD-CH-TEAL', available: true, colorHex: '#00C2CB' },
      { id: 'v-ch-navy', title: 'Midnight Navy & Gold', price: 135.00, compareAtPrice: 169.00, sku: 'SALD-CH-NAVY', available: true, colorHex: '#1E293B' }
    ],
    reviews: [
      {
        id: 'r6',
        author: 'Tom Henderson',
        location: 'Dallas, TX',
        rating: 5,
        date: '3 weeks ago',
        title: 'Left outside during a storm - perfectly intact',
        comment: 'Most wood cornhole sets swell and ruin after one rain. This composite set looks brand new even after heavy rain. Fantastic engineering.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-slackline-agility',
    handle: 'sald-kids-adventure-slackline-ninja-course',
    title: 'ApexPlay 56ft Outdoor Obstacle & Slackline Course',
    titleAr: 'مسار التحدي والرشاقة المعلق في الهواء للحدائق (56 قدماً)',
    category: 'playground',
    categoryLabel: 'Playground & Agility',
    categoryLabelAr: 'معدات اللعب والرشاقة',
    price: 112.00,
    compareAtPrice: 140.00,
    rating: 4.9,
    reviewCount: 164,
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Build confidence, balance, and core strength in your backyard. Includes 56ft heavy-duty slackline ratchet webbing, 10 modular hanging obstacles, tree protectors, and dual safety lines.',
    descriptionAr: 'نمّي مهارات التوازن واللياقة البدنية لدى أطفالك في حديقة المنزل. يشمل حبل شد معلق بطول 56 قدماً مع 10 عقبات متنوعة وأغطية واقية لجذوع الأشجار.',
    features: [
      'Supports up to 800 lbs total capacity - safe for multiple children and parents',
      'Includes climbing ladder, monkey bars, gymnastic rings & climbing balls',
      'Extra-wide tree bark protectors with reinforced nylon stitching',
      'Heavy-duty carbon steel ratchet with ergonomic safety release'
    ],
    featuresAr: [
      'يتحمل وزناً إجمالياً يصل إلى 800 رطل بأمان تام لعدة أطفال',
      'يشمل سلم تسلق، عقلات قرود، حلقات جمباز، وكرات تسلق',
      'أغطية حماية عريضة لجذوع الأشجار مع خياطة نايلون مدعمة',
      'أداة شد قوية من فولاذ الكربون مع مقبض أمان مريح'
    ],
    specs: {
      'Line Length': '56 Feet',
      'Break Strength': '4,000 lbs Static Force',
      'Obstacles Included': '10 Modular Items'
    },
    isNew: true,
    stockCount: 18,
    variants: [
      { id: 'v-sl-jungle', title: 'Jungle Emerald & Aqua', price: 112.00, compareAtPrice: 140.00, sku: 'SALD-SL-EMERALD', available: true, colorHex: '#10B981' }
    ],
    reviews: [
      {
        id: 'r7',
        author: 'Heather B.',
        location: 'Seattle, WA',
        rating: 5,
        date: '2 weeks ago',
        title: 'Kept our 3 kids active all summer long!',
        comment: 'Easy to set up between two big pines in our yard. Extremely solid hardware and quality feel.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-beach-bocce-set',
    handle: 'sald-precision-french-boules-lawn-bocce',
    title: 'Tournoi Pro Heavy-Cast Alloy Lawn Bocce & Boules Set',
    titleAr: 'طقم كرات البوتشي الفرنسية الاحترافية للحديقة والشاطئ',
    category: 'family-games',
    categoryLabel: 'Family & Party Games',
    categoryLabelAr: 'ألعاب عائلية وحفلات',
    price: 58.00,
    compareAtPrice: 75.00,
    rating: 4.8,
    reviewCount: 138,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The classic European pastime made for lawns, beaches, and backyard tournaments. 8 chrome-finished alloy steel boules engraved with distinct pattern lines for 2 to 4 team play.',
    descriptionAr: 'اللعبة الأوروبية الشهيرة للأجواء العائلية في الحدائق والشواطئ. 8 كرات مصبوبة من سبائك الصلب المطلي بالكروم مع خطوط نقش مميزة لتسهيل تمييز الفرق.',
    features: [
      'Precision-balanced alloy steel with rust-resistant triple-chrome plating',
      'Includes target jack ball (cochonnet) and distance measuring string',
      'Padded travel case protects balls from banging in transit',
      'Suitable for grass, gravel, sand, and turf'
    ],
    featuresAr: [
      'كرات فولاذية متوازنة بدقة ومطلية بثلاث طبقات كروم ضد الصدأ',
      'تشمل كرة الهدف الصغيرة وخيط قياس المسافة الاحترافي',
      'حقيبة تنقل مبطنة تحمي الكرات من الاحتكاك أثناء السفر',
      'مناسبة للعب على العشب والرمال والأسطح الحصوية'
    ],
    specs: {
      'Ball Diameter': '73 mm (Tournament Standard)',
      'Ball Weight': '720g Each',
      'Plating': 'Triple Mirror-Chrome Coating'
    },
    stockCount: 30,
    variants: [
      { id: 'v-bocce-chrome', title: 'Mirror Chrome Engraved', price: 58.00, compareAtPrice: 75.00, sku: 'SALD-BC-CHROME', available: true, colorHex: '#94A3B8' }
    ],
    reviews: [
      {
        id: 'r8',
        author: 'Jean-Luc V.',
        location: 'Montreal, QC',
        rating: 5,
        date: '1 month ago',
        title: 'Authentic feel and brilliant finish',
        comment: 'Great weight in the hand. We bring this to every park picnic and beach day. Truly premium quality.',
        verified: true
      }
    ]
  },
  {
    id: 'sald-giant-four-in-row',
    handle: 'sald-giant-all-weather-four-in-row',
    title: 'Colossus 4-In-A-Row Giant Wooden Strategy Game',
    titleAr: 'لعبة الأربعة على التوالي الخشبية العملاقة للحفلات',
    category: 'family-games',
    categoryLabel: 'Family & Party Games',
    categoryLabelAr: 'ألعاب عائلية وحفلات',
    price: 119.00,
    compareAtPrice: 149.00,
    rating: 4.9,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Standing 3.5 feet wide and 3 feet tall, this oversized wooden board is the centerpiece of any wedding, garden party, or pool celebration. Features bottom quick-release lever.',
    descriptionAr: 'بارتفاع 3 أقدام وعرض 3.5 أقدام، هذه اللعبة الخشبية الضخمة هي نجمة الحفلات والتجمعات العائلية. مزودة بمزلاج تحرير سفلي سريع لتفريغ الأقراص في ثانية واحدة.',
    features: [
      'Solid pine construction with water-resistant teal & natural finish',
      'Includes 42 vibrant lightweight composite play coins',
      'Fast slide-lever resets the board in seconds for the next match',
      'Assembles in 2 minutes with no tools required'
    ],
    featuresAr: [
      'هيكل من خشب الصنوبر الصلب المعالج بطلاء عازل للرطوبة',
      'تشمل 42 قرص لعب دائرياً بلونين جذابين',
      'مزلاج سفلي ذكي يعيد تعيين اللعبة بثانية لبدء جولة جديدة',
      'تركيب فوري وسهل في دقيقتين دون الحاجة لأي أدوات'
    ],
    specs: {
      'Dimensions': '42 x 34 x 14 inches',
      'Coin Count': '42 Discs (21 Cyan / 21 Gold)',
      'Frame Material': 'FSC Pine & Plywood Core'
    },
    isOnSale: true,
    stockCount: 15,
    variants: [
      { id: 'v-colossus-pine', title: 'Teal & Natural Pine', price: 119.00, compareAtPrice: 149.00, sku: 'SALD-4R-PINE', available: true, colorHex: '#00C2CB' }
    ],
    reviews: [
      {
        id: 'r9',
        author: 'Danielle K.',
        location: 'Orlando, FL',
        rating: 5,
        date: '3 weeks ago',
        title: 'Huge hit at our family reunion!',
        comment: 'From the 4-year-olds to the grandparents, everyone lined up to play. Beautiful wood construction and so fun.',
        verified: true
      }
    ]
  }
];
