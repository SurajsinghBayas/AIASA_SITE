import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo and title */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20">
                <img src="/imgs.png" alt="AIASA Logo" className="w-20 h-20 rounded-lg" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AIASA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Artificial Intelligence & Data Science Association
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Advancing the frontiers of AI and data science through collaboration, innovation, 
            and knowledge sharing. A community of researchers, students, and professionals.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-foreground/70">
              <Brain className="w-5 h-5 text-primary" />
              <span>AI Research</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Database className="w-5 h-5 text-primary" />
              <span>Data Science</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users className="w-5 h-5 text-primary" />
              <span>Community</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("about")}
              className="group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("events")}
            >
              View Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;