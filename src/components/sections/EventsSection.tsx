import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, ExternalLink, Zap, Trophy, Rocket, Code, Link } from "lucide-react";
import { AnimatedSection, StaggeredAnimation, StaggeredItem, ScaleOnHover } from "@/components/ui/animated-components";
import { motion } from "framer-motion";

const EventsSection = () => {
  const collegeEvents = [
    {
      title: "AIASA-THON",
      date: "NOV 08, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Programming Lab 1st Floor",
      description: "An exciting coding competition for students to showcase their programming skills and compete with peers.",
      last_date: "NOV 07, 2025",
      type: "Competition",
      status: "upcoming",
      icon: Code,
      gradient: "from-blue-500 to-purple-500",
      participants: "50+ Expected"
    },
  ];

  const cityEvents = [
    // {
    //   title: "Techathon 1.0",
    //   date: "Oct 3 - Oct 4, 2025",
    //   time: "9:00 AM - 9:00 AM (24HR)",
    //   location: "N.B. Navale Sinhgad College of Engineering, Kegaon",
    //   description: "24-hour hackathon event bringing together developers, designers, and entrepreneurs to build innovative solutions.",
    //   last_date: "Oct 1, 2025",
    //   type: "Hackathon",
    //   status: "upcoming",
    //   icon: Zap,
    //   gradient: "from-green-500 to-teal-500",
    //   participants: "200+ Teams"
    // },
    // {
    //   title: "Data Science Summit",
    //   date: "Oct 15, 2025",
    //   time: "10:00 AM - 4:00 PM",
    //   location: "Tech Convention Center, Pune",
    //   description: "Premier data science conference featuring industry leaders, research presentations, and networking opportunities.",
    //   last_date: "Oct 12, 2025",
    //   type: "Conference",
    //   status: "upcoming",
    //   icon: Trophy,
    //   gradient: "from-cyan-500 to-blue-500",
    //   participants: "500+ Attendees"
    // }
  ];

  const externalEvents = [
    // {
    //   title: "Project Exhibition",
    //   date: "Oct 9, 2025",
    //   time: "9:00 AM - 5:00 PM",
    //   location: "Phaltan College of Engineering, Phaltan",
    //   description: "Annual project exhibition showcasing innovative projects by students across various engineering disciplines.",
    //   last_date: "Sept 20, 2025",
    //   type: "Exhibition",
    //   status: "upcoming",
    //   icon: Rocket,
    //   gradient: "from-red-500 to-pink-500",
    //   participants: "300+ Projects"
    // },
    // {
    //   title: "National AI Competition",
    //   date: "Oct 25, 2025",
    //   time: "10:00 AM - 6:00 PM",
    //   location: "IIT Mumbai",
    //   description: "National level AI competition challenging participants to solve real-world problems using artificial intelligence.",
    //   last_date: "Oct 22, 2025",
    //   type: "Competition",
    //   status: "upcoming",
    //   icon: Trophy,
    //   gradient: "from-yellow-500 to-orange-500",
    //   participants: "1000+ Participants"
    // }
  ];

  const EventCard = ({ event, index }: { event: any; index: number }) => (
    <StaggeredItem>
      <ScaleOnHover scale={1.02}>
        <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm border-border/50 hover:border-primary/30 relative overflow-hidden h-full">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <motion.div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.gradient} opacity-10 rounded-bl-full`}
            whileHover={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />

          <CardHeader className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <event.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <Badge
                    variant={event.status === "upcoming" ? "default" : "secondary"}
                    className={`text-xs font-semibold ${event.status === "upcoming"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                        : "bg-gray-500 text-white"
                      }`}
                  >
                    {event.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
              <Badge
                variant="outline"
                className={`text-xs font-medium bg-gradient-to-r ${event.gradient} text-white border-0`}
              >
                {event.type}
              </Badge>
            </div>

            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {event.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-10 pt-0">
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{event.date}</span>
                  <div className="text-muted-foreground text-xs">{event.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground/80">{event.location}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-foreground/80">{event.participants}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Registration Deadline: </span>
                {event.last_date}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="https://forms.gle/YRbsKnTiZhVnstKs7" target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full bg-gradient-to-r ${event.gradient} hover:opacity-90 text-white border-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    size="sm"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="https://drive.google.com/file/d/1kNrITvAiBYNydKiwhsRSQUQxWiM3n86R/view" target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full bg-gradient-to-r ${event.gradient} hover:opacity-90 text-white border-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    size="sm"
                  >
                    Rule Book
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </ScaleOnHover>
    </StaggeredItem>
  );

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6]
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
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Events
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
            Join us for exciting events, competitions, and learning opportunities that will elevate your skills
            and expand your network in the AI and data science community.
          </motion.p>
        </AnimatedSection>

        {/* Events Tabs */}
        <AnimatedSection>
          <Tabs defaultValue="college" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2">
                <TabsTrigger
                  value="college"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
                >
                  <Code className="w-4 h-4 mr-2" />
                  College Events
                </TabsTrigger>
                <TabsTrigger
                  value="city"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  City Events
                </TabsTrigger>
                <TabsTrigger
                  value="external"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white transition-all duration-300"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  External Events
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="college" className="mt-8">
              <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {collegeEvents.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} />
                ))}
              </StaggeredAnimation>
            </TabsContent>

            <TabsContent value="city" className="mt-8">
              <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {cityEvents.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} />
                ))}
              </StaggeredAnimation>
            </TabsContent>

            <TabsContent value="external" className="mt-8">
              <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {externalEvents.map((event, index) => (
                  <EventCard key={event.title} event={event} index={index} />
                ))}
              </StaggeredAnimation>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

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

            <h3 className="text-3xl font-bold text-foreground mb-6">Want to Organize an Event?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have an idea for an exciting event? We'd love to hear from you!
              Contact our events team to discuss collaboration opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-2xl shadow-lg"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Propose Event
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/50 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 px-8 py-3 rounded-2xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  View Calendar
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EventsSection;