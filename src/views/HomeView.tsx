import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { CategoryGrid } from '../components/CategoryGrid';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { BenefitsTrust } from '../components/BenefitsTrust';
import { BestSellers } from '../components/BestSellers';
import { ImageWithText } from '../components/ImageWithText';
import { ShopByActivity } from '../components/ShopByActivity';
import { PromotionalBanner } from '../components/PromotionalBanner';
import { VideoFeature } from '../components/VideoFeature';
import { Testimonials } from '../components/Testimonials';
import { SocialFeed } from '../components/SocialFeed';
import { Newsletter } from '../components/Newsletter';

export const HomeView: React.FC = () => {
  return (
    <div className="space-y-0">
      <VideoHero />
      <CategoryGrid />
      <FeaturedCollection />
      <BenefitsTrust />
      <BestSellers />
      <ImageWithText />
      <ShopByActivity />
      <PromotionalBanner />
      <VideoFeature />
      <Testimonials />
      <SocialFeed />
      <Newsletter />
    </div>
  );
};
