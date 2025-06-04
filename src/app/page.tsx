
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section'; // Changed from FeedbackSection
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection /> {/* Changed from FeedbackSection */}
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
