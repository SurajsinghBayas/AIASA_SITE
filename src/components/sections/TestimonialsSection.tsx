import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  AnimatedSection,
  StaggeredAnimation,
  StaggeredItem,
  ScaleOnHover,
} from "@/components/ui/animated-components";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "विजय सांगीलर्गी",
      role: "उखंड सेवा आणि आलोकदादायक जीवणयामुळे आमचा कॉर्पोरेट कार्यक्रम प्रचंड यशस्वी झाला!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "प्रियादर्शनी चिमणचोडे",
      role: "वैयक्तिक मेनू आणि निर्दोष अंमलबजावणीयामुळे आमचं लग्न आधवार्ली खास बनलं होते.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "नागनाथ अहरवाडी",
      role: "दीमकडून मिळालेली बारकाईने केलेली कोळसी आणि उत्कृष्टा आम्च्या अभ्यासपेढा किताल्यारी अधिक होती!",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "अमोल कोपले",
      role: "अद्य अतिशय उत्कृष्ट होते आणि सेवा अत्यंत व्यावसायिक होती — आम्च्या पाहुण्यांकडून अप्रतिही कोतुकाचे शब्द ऐकू येत आहेत!",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            आमच्या समाधानी{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ग्राहकांकडून ऐका
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our satisfied community members about their experiences
            with AIASA
          </motion.p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggeredItem key={testimonial.name}>
              <ScaleOnHover scale={1.03}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 relative overflow-hidden">
                  {/* Gradient Accent */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardContent className="p-6 relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-6">
                      <motion.div
                        className="relative mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-lg opacity-40`}
                        />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-xl relative z-10"
                        />
                      </motion.div>

                      <h3 className="text-xl font-bold text-foreground text-center mb-1">
                        {testimonial.name}
                      </h3>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative">
                      <p className="text-foreground/80 leading-relaxed text-center italic">
                        "{testimonial.role}"
                      </p>
                    </div>

                    {/* Decorative Bottom Quote */}
                    <motion.div
                      className={`absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity`}
                    >
                      <Quote className="w-5 h-5 text-white rotate-180" />
                    </motion.div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggeredItem>
          ))}
        </StaggeredAnimation>

        {/* Call to Action */}
        <AnimatedSection className="mt-20 text-center">
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of a vibrant community of AI and data science
              enthusiasts. Share your experiences and grow with us!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Your Story
              </motion.button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
