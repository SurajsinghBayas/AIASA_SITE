import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const EventsSection = () => {
  const collegeEvents = [
    {
      title: "Internal Coding Competition",
      date: "Oct 13, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Programming Lab 1st Floor",
      description: "Coding competition for students to showcase their programming skills.",
      last_date: "Oct 11 2025",
      type: "Competition",
      status: "upcoming"
    }
  ];

  const cityEvents = [
    {
      title: "Techathon 1.0",
      date: "Oct 3 - Oct 4, 2025",
      time: "9:00 AM - 9:00 AM 24HR (next day)",
      location: "N.B. Navale Sinhgad College of Engineering, Kegaon",
      description: "24-hour hackathon event bringing together developers, designers, and entrepreneurs.",
      last_date: "Last date to register: Oct 1, 2025",
      type: "Hackathon",
      status: "upcoming"
    }
  ];

  const externalEvents = [
    {
      title: "Project Exibition",
      date: " Oct 9, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Phaltan college of engineering, Phaltan",
      description: "Annual project exhibition showcasing innovative projects by students.",
      last_date: "Sept 20, 2025",
      type: "Project Exhibition",
      status: "upcoming"
    }
  ];

  const EventCard = ({ event }: { event: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </CardTitle>
          <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
            {event.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          {event.date} • {event.time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-2" />
          Last Date To Register : {event.last_date} 
        </div>
        <p className="text-sm text-foreground/80 line-clamp-2">
          {event.description}
        </p>
        <Button variant="outline" size="sm" className="w-full group">
          Learn More
          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with the latest happenings in AI and data science across college, 
            city, and international platforms.
          </p>
        </div>

        <Tabs defaultValue="college" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="college">College Events</TabsTrigger>
            <TabsTrigger value="city">City Events</TabsTrigger>
            <TabsTrigger value="external">External Events</TabsTrigger>
          </TabsList>

          <TabsContent value="college" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegeEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="city" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="external" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          {/* <Button size="lg" variant="default">
            View All Events
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;