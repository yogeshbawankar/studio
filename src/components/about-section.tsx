import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Card className="w-full max-w-sm shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Your Name - Professional Portrait"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint="professional portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg mb-6 leading-relaxed">
              Hello! I'm a passionate and detail-oriented professional with a strong background in [Your Main Field, e.g., web development and UI/UX design]. I thrive on solving complex problems and creating elegant, efficient solutions that delight users. My journey in tech began with a fascination for how digital experiences can shape interactions and convey information.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Over the years, I've honed my skills in [Mention 2-3 key skills/technologies, e.g., React, Next.js, and Figma], working on diverse projects ranging from small business websites to large-scale enterprise applications. I believe in continuous learning and staying updated with the latest industry trends to deliver cutting-edge results.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding or designing, I enjoy [Mention a hobby or interest, e.g., exploring new hiking trails, reading sci-fi novels, or experimenting with photography]. I'm always excited to connect with like-minded individuals and explore new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
