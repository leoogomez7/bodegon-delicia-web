import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import InfoSection from "@/components/InfoSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <NosotrosSection />
      <FeaturedDishes />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <InfoSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
