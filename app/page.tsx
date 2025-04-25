import HeroSection from './components/sections/HeroSection';
import FeaturedMenu from './components/sections/FeaturedMenu';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
