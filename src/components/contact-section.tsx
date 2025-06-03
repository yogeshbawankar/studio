
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

// Simple Kaggle SVG icon
const KaggleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black"
  >
    <path d="M14.303 3.98H9.697L6 9.038l3.697 4.96h4.606l6.006-4.96-2.303-5.058z" />
    <path d="M9.697 14.962l-3.697 5.058h4.606l3.697-5.058H9.697z" />
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
              <p className="text-lg leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:yogeshbawankar03@gmail.com" className="flex items-center space-x-3 group text-lg hover:text-primary transition-colors">
                <Mail className="w-6 h-6 text-black group-hover:animate-pulse" />
                <span>yogeshbawankar03@gmail.com</span>
              </a>
              <a href="tel:+917057846078" className="flex items-center space-x-3 group text-lg hover:text-primary transition-colors">
                <Phone className="w-6 h-6 text-black group-hover:animate-pulse" />
                <span>(+91) 70578 46078</span>
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors" suppressHydrationWarning>
                <Link href="https://www.linkedin.com/in/yogesh-bawankar-392760232/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-black" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors" suppressHydrationWarning>
                <Link href="https://github.com/yogeshbawankar" target="_blank" aria-label="GitHub">
                  <Github className="w-5 h-5 text-black" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors" suppressHydrationWarning>
                <Link href="https://www.kaggle.com/yogeshbawankar" target="_blank" aria-label="Kaggle">
                  <KaggleIcon />
                </Link>
              </Button>
            </div>
          </div>

          <Card className="shadow-xl bg-background text-foreground p-2 sm:p-4">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <Input type="text" id="name" name="name" placeholder="John Doe" required className="focus:ring-primary focus:border-primary" suppressHydrationWarning/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input type="email" id="email" name="email" placeholder="you@example.com" required  className="focus:ring-primary focus:border-primary" suppressHydrationWarning/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" name="message" rows={4} placeholder="Your message..." required className="focus:ring-primary focus:border-primary" suppressHydrationWarning/>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors" suppressHydrationWarning>
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
