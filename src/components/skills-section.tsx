
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Wand2 } from "lucide-react"; // Removed Lightbulb as Tech Consulting is removed

const skillsData = [
  {
    category: "Development",
    icon: <Code2 className="h-10 w-10 mb-4 text-primary" />,
    title: "Web Development",
    description: "Building responsive and performant websites using modern technologies like React, Next.js, and Node.js.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"]
  },
  {
    category: "AI/ML",
    icon: <Brain className="h-10 w-10 mb-4 text-primary" />,
    title: "AI/ML",
    description: "Developing intelligent systems using Machine Learning models, specializing in Retrieval Augmented Generation (RAG) and LLM fine-tuning.",
    tags: ["Python", "TensorFlow", "PyTorch", "RAG", "LLMs", "NLP"]
  },
  {
    category: "AI Tools",
    icon: <Wand2 className="h-10 w-10 mb-4 text-primary" />,
    title: "AI Tool Expert",
    description: "Leveraging and integrating various AI tools and platforms to build advanced solutions and automate workflows.",
    tags: ["ChatGPT", "GitHub Copilot", "Beautiful.ai", "Elicit", "Zapier AI"]
  },
  // {
  //   category: "Consulting",
  //   icon: <Lightbulb className="h-10 w-10 mb-4 text-primary" />,
  //   title: "Tech Consulting",
  //   description: "Providing expert advice and strategies to help businesses leverage AI and web technology for growth and efficiency.",
  //   tags: ["AI Strategy", "Scalability", "Model Evaluation", "Workflow Automation"]
  // },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"> {/* Adjusted grid for potentially 3 items */}
          {skillsData.map((skill, index) => (
            <Card key={index} className="bg-background text-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                {skill.icon}
                <CardTitle className="font-headline text-2xl text-primary">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
