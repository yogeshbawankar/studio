import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Server, Users, Lightbulb, TrendingUp } from "lucide-react"; // Example icons

const skillsData = [
  {
    category: "Development",
    icon: <Code2 className="h-10 w-10 mb-4 text-primary" />,
    title: "Web Development",
    description: "Building responsive and performant websites using modern technologies like React, Next.js, and Node.js.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL"]
  },
  {
    category: "Design",
    icon: <Palette className="h-10 w-10 mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with a focus on user experience. Proficient in Figma and Adobe XD.",
    tags: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    category: "Backend",
    icon: <Server className="h-10 w-10 mb-4 text-primary" />,
    title: "API & Database",
    description: "Designing and implementing robust APIs and managing databases for scalable applications.",
    tags: ["REST APIs", "PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Consulting",
    icon: <Lightbulb className="h-10 w-10 mb-4 text-primary" />,
    title: "Tech Consulting",
    description: "Providing expert advice and strategies to help businesses leverage technology for growth and efficiency.",
    tags: ["Strategy", "Roadmapping", "Digital Transformation"]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Skills & Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
