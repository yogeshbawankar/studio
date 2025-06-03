import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    avatarFallback: "JD",
    feedback: "Working with [Your Name] was an absolute pleasure. Their expertise and dedication to our project were outstanding, delivering results beyond our expectations.",
    aiHint: "woman portrait"
  },
  {
    name: "John Smith",
    company: "Creative Designs Co.",
    avatar: "https://placehold.co/100x100.png",
    avatarFallback: "JS",
    feedback: "The attention to detail and creative approach [Your Name] brought to our platform's redesign was phenomenal. Highly recommended!",
    aiHint: "man portrait"
  },
  {
    name: "Alice Brown",
    company: "Innovate Startups",
    avatar: "https://placehold.co/100x100.png",
    avatarFallback: "AB",
    feedback: "Professional, reliable, and incredibly talented. [Your Name] transformed our vision into a stunning reality. We couldn't be happier.",
    aiHint: "person smiling"
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          What My Clients Say
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-xl">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Quote className="w-8 h-8 text-primary mb-2 opacity-50" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.feedback.replace("[Your Name]", "this talented professional")}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
