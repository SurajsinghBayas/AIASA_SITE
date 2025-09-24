import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div> */}
            <div className="w-9 h-9">
              <img src="/imgs.png" alt="AIASA Logo" className="w-9 h-9 rounded-lg" />
            </div>
            <span className="font-bold text-xl text-foreground">AIASA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("people")}
              className="text-foreground hover:text-primary transition-colors"
            >
              People
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 px-4 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 px-4 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("people")}
                className="text-left py-2 px-4 text-foreground hover:text-primary transition-colors"
              >
                People
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left py-2 px-4 text-foreground hover:text-primary transition-colors"
              >
                Events
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;