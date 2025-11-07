import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

const PeopleSection = () => {
  const section1 = [
    {
      name: "Patil Sir",
      role: "HOD",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      bio: "Head of Artificial Intelligence and Data Science Department with 15 years of experience.",
      avatar: "/placeholder.svg",
      email: "sarah.chen@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Vijay Sir",
      role: "AIASA Faculty Coordinator",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Big Data", "Statistics", "Data Mining"],
      bio: "Faculty coordinator for AIASA, specializing in Data analytics.",
      avatar: "/placeholder.svg",
      email: "m.rodriguez@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Tarang",
      role: "AIASA President",
      department: "Artificial Intelligence and Data Science (TY)",
      expertise: ["Computer Vision", "Deep Learning", "Robotics"],
      bio: "Pioneering work in computer vision and autonomous systems.",
      avatar: "/placeholder.svg",
      email: "emily.wang@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Samruddhi Gawali ",
      role: "Vice President",
      department: "Artificial Intelligence and Data Science (SY)",
      expertise: ["NLP", "Transformers", "Language Models"],
      bio: "PhD candidate focusing on natural language processing and AI applications.",
      avatar: "/placeholder.svg",
      email: "alex.thompson@student.university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Unknown",
      role: "Seceretary",
      department: "Artificial Intelligence and Data Science",
      expertise: ["AI Strategy", "Tech Transfer", "Industry Relations"],
      bio: "Bridging academia and industry for practical AI implementations.",
      avatar: "/placeholder.svg",
      email: "raj.patel@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Unknown",
      role: "Treasurer",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Event Management", "Community Building", "Outreach"],
      bio: "Organizing impactful events and building our research community.",
      avatar: "/placeholder.svg",
      email: "maria.silva@university.edu",
      linkedin: "#",
      github: "#",
    },
  ];

  const section2 = [
    {
      name: "",
      role: "HOD",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      bio: "Head of Artificial Intelligence and Data Science Department with 15 years of experience.",
      avatar: "/placeholder.svg",
      email: "sarah.chen@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Vijay Sir",
      role: "AIASA Faculty Coordinator",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Big Data", "Statistics", "Data Mining"],
      bio: "Faculty coordinator for AIASA, specializing in Data analytics.",
      avatar: "/placeholder.svg",
      email: "m.rodriguez@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Tarang",
      role: "AIASA President",
      department: "Artificial Intelligence and Data Science (TY)",
      expertise: ["Computer Vision", "Deep Learning", "Robotics"],
      bio: "Pioneering work in computer vision and autonomous systems.",
      avatar: "/placeholder.svg",
      email: "emily.wang@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Unkonwn",
      role: "Vice President",
      department: "Artificial Intelligence and Data Science (SY)",
      expertise: ["NLP", "Transformers", "Language Models"],
      bio: "PhD candidate focusing on natural language processing and AI applications.",
      avatar: "/placeholder.svg",
      email: "alex.thompson@student.university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Unknown",
      role: "Seceretary",
      department: "Artificial Intelligence and Data Science",
      expertise: ["AI Strategy", "Tech Transfer", "Industry Relations"],
      bio: "Bridging academia and industry for practical AI implementations.",
      avatar: "/placeholder.svg",
      email: "raj.patel@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Unknown",
      role: "Treasurer",
      department: "Artificial Intelligence and Data Science",
      expertise: ["Event Management", "Community Building", "Outreach"],
      bio: "Organizing impactful events and building our research community.",
      avatar: "/placeholder.svg",
      email: "maria.silva@university.edu",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section id="people" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds driving innovation in artificial
            intelligence and data science Department.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section1.map((person, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{person.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {person.department}
                  </p>
                </div>

                <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                  {person.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {person.expertise.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                  <a
                    href={`mailto:${person.email}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={person.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={person.github}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="container mt-14 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Team Leads
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section1.map((person, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{person.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {person.department}
                  </p>
                </div>

                <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                  {person.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {person.expertise.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                  <a
                    href={`mailto:${person.email}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={person.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={person.github}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
