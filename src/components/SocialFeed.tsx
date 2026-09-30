import React from 'react';
import { useStore } from '../context/StoreContext';
import { Instagram, Heart } from 'lucide-react';

export const SocialFeed: React.FC = () => {
  const { isRtl } = useStore();

  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=500&q=80',
      likes: '1.2k',
      caption: 'Pool party slam dunks on a sunny Saturday afternoon! 🌊🏀'
    },
    {
      image: 'https://images.unsplash.com/photo-1585856717904-469074d47d61?auto=format&fit=crop&w=500&q=80',
      likes: '890',
      caption: 'Stacking high with the MegaTimber set in the garden! 🪵🔥'
    },
    {
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=80',
      likes: '2.4k',
      caption: 'In-pool volleyball tournament finals! Who won? 🏆🏐'
    },
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80',
      likes: '1.5k',
      caption: 'Night swimming glowing dive rings adventure! ✨🏊'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[var(--page-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-black uppercase tracking-wider mb-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>@sald.outdoor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isRtl ? 'انضم إلى مجتمع #SALDfun' : 'Join The #SALDfun Community'}
          </h2>
          <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base">
            {isRtl ? 'شارك صور ومقاطع ألعابك في المسبح والحديقة وتاق حسابنا' : 'Tag @sald.outdoor on Instagram & TikTok to be featured on our active summer wall'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((p, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={p.image}
                alt="Social photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                    <Heart className="w-3.5 h-3.5 fill-amber-300" />
                    <span>{p.likes} likes</span>
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-2">{p.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
