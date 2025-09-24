import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About AIASA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a premier organization dedicated to advancing artificial intelligence 
            and data science through research, education, and community building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mission</h3>
              <p className="text-muted-foreground">
                To foster innovation and excellence in AI and data science research and applications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vision</h3>
              <p className="text-muted-foreground">
                To be the leading platform for AI and data science collaboration and knowledge sharing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building a diverse community of researchers, students, and industry professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Promoting cutting-edge research and innovative solutions in AI and data science.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Impact</h3>
            <p className="text-lg text-foreground/80 mb-8">
              Since our establishment, AIASA has been at the forefront of AI and data science advancement, 
              fostering collaboration between academia and industry, and contributing to groundbreaking research 
              that shapes the future of technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">70+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Grabed the Prices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;