
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "AI-Powered RAG Pipeline",
    description: "Developed a Retrieval Augmented Generation pipeline at Bytecube (France) to enhance language model factuality and retrieval performance. Evaluated models like LLaMA 3.1, Claude 3 Sonnet, and Mistral.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ai pipeline",
    tags: ["Python", "RAG", "LLM Evaluation", "NLP"],
    githubLink: "https://github.com/yogeshbawankar/project-rag",
    liveLink: null,
  },
  {
    title: "Hybrid Traffic Safety System",
    description: "Engineered a real-time Hybrid Traffic Safety System utilizing YOLO for object detection and Streamlit for an interactive user interface. This system enhances road safety by identifying potential hazards and automating alerts, demonstrating skills in computer vision and application development.",
    image: "https://placehold.co/600x400.png",
    aiHint: "traffic safety yolo",
    tags: ["Streamlit", "Python", "YOLO", "Computer Vision", "Automation"],
    githubLink: "https://github.com/yogeshbawankar/metadata-automation",
    liveLink: null,
  },
  {
    title: "Sentiment Analysis",
    description: "Developed and evaluated various sentiment analysis models using popular NLP libraries to classify text data. This project involved preprocessing textual data, applying different algorithms (lexicon-based and machine learning-based), and comparing their performance on a benchmark dataset for understanding public opinion or customer feedback.",
    image: "https://placehold.co/600x400.png",
    aiHint: "nlp analysis",
    tags: ["NLTK", "TextBlob", "VADER", "spaCy", "Hugging Face Transformers", "Python"],
    githubLink: "https://github.com/yogeshbawankar/vision-analysis", // Assuming this link might need an update later for a sentiment analysis project
    liveLink: null,
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio website, built with Next.js, React, Tailwind CSS, and ShadCN UI components to showcase my skills and projects.",
    image: "https://placehold.co/600x400.png",
    aiHint: "web development portfolio",
    tags: ["Next.js", "React", "TailwindCSS", "ShadCN UI"],
    githubLink: "https://github.com/yogeshbawankar/portfolio",
    liveLink: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          My Projects
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-background text-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-xl">
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto pt-0 pb-6 px-6">
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors" suppressHydrationWarning>
                        <Github className="w-5 h-5" />
                      </Button>
                    </Link>
                  )}
                  {project.liveLink && (
                     <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors" suppressHydrationWarning>
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
