import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold mb-6">
          Yogesh Bawankar
        </h1>
        <p className="font-headline text-2xl md:text-3xl text-purple-300 mb-10">
          Artificial Intelligence Enthusiast
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Welcome to my portfolio. I develop AI powered systems that learn, adapt, and solve real world problems. Let's innovate with intelligence.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-purple-200 transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="#about">
              Learn More <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
