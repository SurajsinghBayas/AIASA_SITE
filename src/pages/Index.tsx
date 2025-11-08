import Navigation from "@/components/Navigation";
import RibbonCutting from "@/components/RibbonCutting";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PeopleSection from "@/components/sections/PeopleSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import EventsSection from "@/components/sections/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RibbonCutting />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PeopleSection />
        <SocialMediaSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
