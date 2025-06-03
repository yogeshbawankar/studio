import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
