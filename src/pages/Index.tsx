import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PeopleSection from "@/components/sections/PeopleSection";
import EventsSection from "@/components/sections/EventsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PeopleSection />
        <EventsSection />
      </main>
    </div>
  );
};

export default Index;