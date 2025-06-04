
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
// import ProjectsSection from '@/components/projects-section'; // Removed import
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import ContactSection from '@/components/contact-section'; // Assuming you want to keep this based on previous interactions
import FeedbackSection from '@/components/feedback-section'; // Re-added as per previous step, can be removed if not needed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeedbackSection /> {/* Re-added as per previous step, can be removed if not needed */}
        {/* <ProjectsSection /> Removed usage */}
        <ContactSection /> {/* Assuming you want to keep this */}
      </main>
      <SiteFooter />
    </div>
  );
}
