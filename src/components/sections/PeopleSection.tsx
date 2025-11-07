import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  Award,
  Users,
  Crown,
  Star,
  GraduationCap,
  UserCheck,
  Shield,
  Briefcase,
  Coins,
  BookOpen,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredAnimation,
  StaggeredItem,
  ScaleOnHover,
} from "@/components/ui/animated-components";
import { motion } from "framer-motion";

const PeopleSection = () => {
  const leadership = [
    {
      name: "Dr. M.B. Patil",
      role: "HOD",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      bio: "Head of Artificial Intelligence and Data Science Department with 15+ years of experience in advancing AI education and research.",
      avatar: "",
      email: "patil@university.edu",
      linkedin: "#",
      github: "#",
      icon: GraduationCap,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Prof. Vijay Sir",
      role: "AIASA Faculty Coordinator",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Big Data", "Statistics", "Data Mining"],
      bio: "Faculty coordinator for AIASA, specializing in Data analytics and student mentorship.",
      avatar: "",
      email: "vijay@university.edu",
      linkedin: "#",
      github: "#",
      icon: BookOpen,
      gradient: "from-blue-500 to-purple-500",
    },
  ];

  const executiveTeam = [
    {
      name: "Tarang Shah",
      role: "AIASA President",
      department: "Artificial Intelligence and Data Science (TY)",
      expertise: ["Computer Vision", "Deep Learning", "Robotics"],
      bio: "Leading AIASA with vision and innovation, pioneering work in computer vision and autonomous systems.",
      avatar: "",
      email: "tarang@student.university.edu",
      linkedin: "#",
      github: "#",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Samruddhi Gawali",
      role: "Vice President",
      department: "Artificial Intelligence and Data Science (SY)",
      expertise: ["NLP", "Transformers", "Language Models"],
      bio: "Supporting the president in strategic initiatives, focusing on natural language processing and AI applications.",
      avatar: "",
      email: "vp@student.university.edu",
      linkedin: "#",
      github: "#",
      icon: Shield,
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Khushaboo Shaikh",
      role: "Secretary",
      department: "Artificial Intelligence and Data Science",
      expertise: ["AI Strategy", "Tech Transfer", "Industry Relations"],
      bio: "Managing communications and bridging academia with industry for practical AI implementations.",
      avatar: "",
      email: "secretary@student.university.edu",
      linkedin: "#",
      github: "#",
      icon: UserCheck,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Abhishek Wagmhmare",
      role: "Treasurer",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Event Management", "Community Building", "Outreach"],
      bio: "Managing finances and organizing impactful events to build our vibrant research community.",
      avatar: "",
      email: "treasurer@student.university.edu",
      linkedin: "#",
      github: "#",
      icon: Coins,
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const TeamCard = ({ person, index }: { person: any; index: number }) => (
    <StaggeredItem>
      <ScaleOnHover scale={1.03}>
        <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm border-border/50 hover:border-primary/30 relative overflow-hidden h-full">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div
            className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${person.gradient} opacity-10 rounded-bl-full`}
            whileHover={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />

          <CardContent className="p-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Avatar with enhanced styling */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback
                    className={`text-2xl font-bold bg-gradient-to-br ${person.gradient} text-white`}
                  >
                    {person.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <motion.div
                  className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${person.gradient} rounded-full flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <person.icon className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              {/* Name and Role */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {person.name}
              </h3>
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${person.gradient} text-white text-sm font-semibold mb-3 shadow-md`}
              >
                {person.role}
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {person.department}
              </p>

              {/* Bio */}
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                {person.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {person.expertise.map((skill: string, skillIndex: number) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {person.email !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={`mailto:${person.email}`}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {person.linkedin !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-blue-600 hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {person.github !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-gray-800 hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </ScaleOnHover>
    </StaggeredItem>
  );

  return (
    <section
      id="people"
      className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Team
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
            Passionate leaders and innovators driving the future of AI and data
            science education, research, and community building.
          </motion.p>
        </AnimatedSection>

        {/* Leadership Section */}
        <AnimatedSection className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="inline-block w-8 h-8 mr-3 text-yellow-500" />
            Faculty Leadership
          </motion.h3>
          <StaggeredAnimation
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            staggerDelay={0.2}
          >
            {leadership.map((person, index) => (
              <TeamCard key={person.name} person={person} index={index} />
            ))}
          </StaggeredAnimation>
        </AnimatedSection>

        {/* Executive Team Section */}
        <AnimatedSection>
          <motion.h3
            className="text-3xl font-bold text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star className="inline-block w-8 h-8 mr-3 text-primary" />
            Student Executive Team
          </motion.h3>
          <StaggeredAnimation
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.15}
          >
            {executiveTeam.map((person, index) => (
              <TeamCard key={person.name} person={person} index={index} />
            ))}
          </StaggeredAnimation>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PeopleSection;
