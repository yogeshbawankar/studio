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
                  src="/yogesh-bawankar-profile.jpg"
                  alt="Yogesh Bawankar - Professional Portrait"
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
              I’m driven by a deep interest in how language models retrieve, reason, and adapt in real world settings. My focus lies in Retrieval Augmented Generation (RAG), scalable evaluation techniques, and efficient fine-tuning of large models. These interests evolved during my internship at Bytecube (France), where I built a RAG pipeline and evaluated models like LLaMA 3.1, Claude 3 Sonnet, and Mistral for factuality and retrieval performance.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I also automated metadata workflows using AWS Lambda and explored trade-offs in vision-based systems using YOLOv11 and multi-frame inference, learning how to align model accuracy with real time performance constraints. I value experimental rigor, reproducibility, and thoughtful design seeing every project as an opportunity to learn deeper patterns behind machine learning behavior.
            </p>
            <p className="text-lg leading-relaxed">
              I’m currently seeking research opportunities focused on efficient LLMs, retrieval systems, or model alignment where I can contribute to innovation that’s both scalable and scientifically grounded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
