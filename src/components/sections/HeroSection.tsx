import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Users, Sparkles, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-scroll-animation";
import { FloatingElement } from "@/components/ui/animated-components";

const HeroSection = () => {
  const mouseParallaxRef = useMouseParallax(0.02);
  const strongParallaxRef = useMouseParallax(0.05);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"></div>
      
      {/* Animated background elements with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          ref={mouseParallaxRef}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          ref={strongParallaxRef}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating geometric shapes */}
        <FloatingElement duration={4} yOffset={15}>
          <div className="absolute top-20 right-20 w-8 h-8 border-2 border-primary/30 rotate-45" />
        </FloatingElement>
        <FloatingElement duration={5} yOffset={20}>
          <div className="absolute bottom-32 left-20 w-6 h-6 bg-secondary/20 rounded-full" />
        </FloatingElement>
        <FloatingElement duration={6} yOffset={10}>
          <Sparkles className="absolute top-40 left-1/3 w-6 h-6 text-primary/40" />
        </FloatingElement>
        <FloatingElement duration={7} yOffset={25}>
          <Zap className="absolute bottom-40 right-1/3 w-5 h-5 text-secondary/40" />
        </FloatingElement>
        
        {/* Code-like floating elements */}
        <motion.div
          className="absolute top-32 left-10 text-primary/20 font-mono text-sm"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {"{ AI: true }"}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-secondary/20 font-mono text-sm"
          animate={{ opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"<DataScience />"}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Logo and title with enhanced animations */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="relative w-24 h-24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/imgs.png" alt="AIASA Logo" className="w-24 h-24 rounded-xl shadow-lg" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                AIASA
              </h1>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Artificial Intelligence & Data Science Association
            </motion.p>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Pioneering the future of technology through cutting-edge research, innovative solutions, 
            and collaborative learning. Join our vibrant community of AI enthusiasts, data scientists, 
            and tech visionaries shaping tomorrow's digital landscape.
          </motion.p>

          {/* Enhanced Feature highlights with animations */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { icon: Brain, label: "AI Research", color: "from-blue-500 to-purple-500" },
              { icon: Database, label: "Data Science", color: "from-purple-500 to-pink-500" },
              { icon: Users, label: "Community", color: "from-pink-500 to-red-500" },
              { icon: Code, label: "Innovation", color: "from-cyan-500 to-blue-500" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="xl" 
                variant="gradient"
                onClick={() => scrollToSection("about")}
                className="group relative overflow-hidden from-blue-600 to-purple-600"
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection("events")}
                className="group border-2 border-primary/50 hover:border-primary px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                <span className="flex items-center">
                  Explore Events
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;