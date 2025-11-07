import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Code,
  Calendar,
  BookOpen,
  Megaphone,
  Paintbrush,
  UserCheck,
  Shield,
} from "lucide-react";
import { Instagram, Youtube, Linkedin, Play, ExternalLink } from "lucide-react";
import {
  AnimatedSection,
  StaggeredAnimation,
  StaggeredItem,
  ScaleOnHover,
} from "@/components/ui/animated-components";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-scroll-animation";
import { Sparkles } from "lucide-react";

const SocialMediaSection = () => {
  // Mouse parallax for hero background accents
  const mouseParallaxRef = useMouseParallax(0.02);
  const strongParallaxRef = useMouseParallax(0.05);

  // Floating icon particles for hero
  const floatingIcons = [
    {
      icon: Youtube,
      color: "bg-red-500/70",
      x: "left-10",
      y: "top-10",
      delay: 0,
    },
    {
      icon: Instagram,
      color: "bg-pink-500/70",
      x: "right-16",
      y: "top-24",
      delay: 0.2,
    },
    {
      icon: Linkedin,
      color: "bg-blue-500/70",
      x: "left-24",
      y: "bottom-16",
      delay: 0.4,
    },
    {
      icon: Sparkles,
      color: "bg-purple-500/70",
      x: "right-10",
      y: "bottom-10",
      delay: 0.6,
    },
  ];

  // Helper function to extract YouTube video ID from URL
  const extractVideoId = (url: string): string => {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
      /(?:youtu\.be\/)([^&\n?#]+)/,
      /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return "";
  };

  // YouTube videos with full URLs - just paste your YouTube video URLs here
  const youtubeVideosData = [
    {
      url: "https://youtu.be/jWAObEZQln8?si=b2BgwlBMJKavce9H",
      title: "Hackathon Hustle : From Chaos To Champion - Tensor Talk EP 1",
      description:
        "Join us for our first episode where we dive into the chaos and triumph of hackathon experiences.",
      duration: "14:34",
      views: "677 views",
      uploadDate: "24 May 2025",
    },
    {
      url: "https://youtu.be/AUC2Wqfql5s?si=wIpNVxxNgMz-Dc9l",
      title:
        "Strength, Spirit & Success: Meet Ganesh Kachare | The TensorTalks EP 2",
      description:
        "An inspiring conversation with Ganesh Kachare about strength, spirit, and achieving success.",
      duration: "06:15",
      views: "212 views",
      uploadDate: "10 Jun 2025",
    },
    {
      url: "https://youtu.be/-Epm7ypWO7Y?si=epMBYcmRHFGnF8Mw", // Replace with actual EP3 video URL
      title:
        "Checkmate Master | Diksha Kulkarni on Chess, Discipline & Growth | TensorTalks EP3",
      description:
        "In this episode, we dive deep into the world of chess with Diksha Kulkarni, exploring her journey, mindset, and the role of discipline in mastering the game.",
      duration: "10:34",
      views: "286 views",
      uploadDate: "23 Jun 2025",
    },
  ];

  // Process videos to automatically extract video IDs from URLs
  const youtubeVideos = youtubeVideosData.map((video) => {
    const videoId = extractVideoId(video.url);
    const thumbnail = videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "/placeholder.svg";
    return { ...video, videoId, thumbnail };
  });

  const openYouTubeVideo = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="social"
      className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl mb-16 border border-border/50 shadow-xl">
          {/* Layered gradients for glassy effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/60 to-background/80 backdrop-blur-2xl" />
          </div>
          {/* Parallax decorative blobs */}
          <motion.div
            ref={mouseParallaxRef}
            className="absolute -top-10 -left-10 w-64 h-64 rounded-full blur-3xl bg-red-500/30"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            ref={strongParallaxRef}
            className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl bg-purple-500/30"
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          {/* Floating icon particles */}
          {floatingIcons.map(({ icon: Icon, color, x, y, delay }, i) => (
            <motion.div
              key={i}
              className={`absolute ${x} ${y} w-12 h-12 rounded-full flex items-center justify-center ${color} shadow-lg backdrop-blur-lg`}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 0.7, scale: [1, 1.15, 1], y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-7 h-7 text-white/80" />
            </motion.div>
          ))}

          <div className="relative z-10 px-6 md:px-12 py-14 md:py-24 text-center">
            <StaggeredAnimation
              staggerDelay={0.12}
              className="flex flex-col items-center"
            >
              <StaggeredItem>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md mb-6 shadow"
                >
                  <Sparkles className="w-4 h-4 text-purple-500 animate-spin-slow" />
                  <span className="text-sm text-muted-foreground">
                    AIASA on Social
                  </span>
                </motion.div>
              </StaggeredItem>
              <StaggeredItem>
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Stay Connected with AIASA
                </motion.h1>
              </StaggeredItem>
              <StaggeredItem>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Watch Tensor Talk on YouTube, connect with us on LinkedIn, and follow our journey on Instagram
                  for the latest updates, expert discussions, and inspiring stories.
                </motion.p>
              </StaggeredItem>
              <StaggeredItem>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("youtube")}
                    className="group bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white border-0 px-6 md:px-8 py-6 rounded-2xl shadow-lg"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    YouTube
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/artificial-intelligence-alliance-student-association/posts/?feedView=all",
                        "_blank"
                      )
                    }
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 px-6 md:px-8 py-6 rounded-2xl shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/artificialalliance/",
                        "_blank"
                      )
                    }
                    className="group bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0 px-6 md:px-8 py-6 rounded-2xl shadow-lg"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </StaggeredItem>
              <StaggeredItem>
                {/* Scroll indicator */}
                <motion.div
                  className="mt-10 flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-10 border-2 border-border/60 rounded-full flex justify-center bg-background/80 shadow">
                    <motion.div
                      animate={{ y: [0, 16, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-1 h-3 bg-foreground rounded-full mt-2"
                    />
                  </div>
                </motion.div>
              </StaggeredItem>
            </StaggeredAnimation>
          </div>
        </div>

        {/* AIASA TEAM 2025-2026 - Premium UI/UX */}
        <AnimatedSection className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl rounded-3xl shadow-2xl border border-border/30 p-0 backdrop-blur-lg bg-gradient-to-br from-white/90 via-purple-100/80 to-pink-100/80 dark:from-background/90 dark:via-purple-950/80 dark:to-pink-950/80"
          >
            <div className="relative rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-x" />
              <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center py-10 mb-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 drop-shadow-lg tracking-tight">
                AIASA TEAM 2025-2026
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Meet our passionate team, leads, and members for the year!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pb-10">
              {/* Left Column: Leadership, Programming, Events */}
              <div className="space-y-10">
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-purple-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-6 h-6 text-purple-500" />
                    <h3 className="font-bold text-xl text-purple-700">
                      Leadership
                    </h3>
                  </div>
                  <ul className="space-y-2 text-base">
                    <li>
                      <span className="font-semibold">Head of Department:</span>{" "}
                      Dr. M.B. Patil
                    </li>
                    <li>
                      <span className="font-semibold">
                        Faculty Co-ordinator:
                      </span>{" "}
                      Prof. V. A. Sangolgi
                    </li>
                    <li>
                      <span className="font-semibold">President:</span> Tarang
                      Shah
                    </li>
                    <li>
                      <span className="font-semibold">Vice President:</span>{" "}
                      Samruddhi Gavali
                      <span className="italic text-muted-foreground"></span>
                    </li>
                    <li>
                      <span className="font-semibold">Secretary:</span>{" "}
                      Khushaboo Rafik Shaikh
                    </li>
                    <li>
                      <span className="font-semibold">Treasurer:</span> Abhishek
                      Rajesh Waghmare
                    </li>
                    <li>
                      <span className="font-semibold">
                        Event Coordinator Lead:
                      </span>{" "}
                      Vaishnavi Suresh Devakate
                    </li>
                    <li>
                      <span className="font-semibold">Technical Lead:</span>{" "}
                      Swayam Shalgar & Suraj Singh Bayas
                    </li>
                  </ul>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-purple-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-6 h-6 text-pink-700" />
                    <h3 className="font-bold text-xl text-pink-700">
                      Programming Club & Technical Members
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Aryan Vivekanand Kota",
                      "Pratiksha Pramod Gaikwad",
                      "Shreya Chandrashekha r Yalshetti",
                      "Khushaboo Rafik Shaikh",
                      "Chetan Basawaraj Shabadi",
                      "Shrujana Pentappa Vangari",
                      "Akanksha Rajendra Gajdhane",
                      "Pratik Virkumar Amane",
                      "Aakash Shrishail Madgale",
                      "Shreya Chandrashekha r Yalshetti",
                      "Atharva Chidanand Manthalkar",
                      "Archana Govind Purud",
                      "Sanjay Shashikant lade",
                      "Krishna Amrit Birajdar",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-red-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-6 h-6 text-red-700" />
                    <h3 className="font-bold text-xl text-red-700">
                      Event Coordinators
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Shivkumar Rachayya Swami",
                      "Saikiran Narendra Shriram",
                      "Prajwal Gurubasappa Shedabal",
                      "Akshata Shriniwas Mamdyal",
                      "Kushal Mahesh Devsani",
                      "Sanika subhash fulari",
                      "Samruddhi Jumnalkar",
                      "Dhanashree Girish Dhanshetti",
                      "Shravani Pramod Doke",
                      "Krishna Amrit Birajdar",
                      "Sneha Sanjaykumar Chabukswar",
                      "Shrujana Pentappa Vangari",
                      "Aakash Shrishail Madgale",
                      "Prithvi Shrishail Puranik",
                      "Trisha Balaji Mada",
                      "Vedha Vaibhav Homkar",
                      "Sagar Mahadev hattargi",
                      "Shravni Umbarje",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
              </div>
              {/* Right Column: Academic, PR, Creative, Girls Rep, Discipline */}
              <div className="space-y-10">
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-indigo-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-6 h-6 text-indigo-700" />
                    <h3 className="font-bold text-xl text-indigo-700">
                      Academic Affairs Officers
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Aditi Anil Joshi",
                      "Divya Dattatray Devkar",
                      "Angelica Dolare",
                      "Shrujana Pentappa Vangari",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-green-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Megaphone className="w-6 h-6 text-green-700" />
                    <h3 className="font-bold text-xl text-green-700">
                      Public Relations Officers
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Saket Manish Deshpande",
                      "Srushti Sanjay Wadi",
                      "Suhani Mane",
                      "Simrah Sameer Golandaj",
                      "kaushal kedarnath dolle",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-yellow-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Paintbrush className="w-6 h-6 text-yellow-700" />
                    <h3 className="font-bold text-xl text-yellow-700">
                      Creative Directors
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Sanchita Santosh Kore",
                      "Roshni Irfan Maniyar",
                      "Akshata Shriniwas Mamdyal",
                      "Aman Sevakram Rahangdale",
                      "Viha Hibare",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-pink-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <UserCheck className="w-6 h-6 text-pink-600" />
                    <h3 className="font-bold text-xl text-pink-600">
                      Girls Representative
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      "Sanika Fulari",
                      "Prajakta Devraj Patil",
                      "Trisha Balaji Mada",
                    ].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-pink-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
                <div className="group rounded-2xl bg-white/80 dark:bg-background/80 p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-6 h-6 text-gray-700" />
                    <h3 className="font-bold text-xl text-gray-700">
                      Discipline Committee
                    </h3>
                  </div>
                  <StaggeredAnimation
                    staggerDelay={0.04}
                    className="flex flex-wrap gap-2"
                  >
                    {["Vardan Yemul", "Ganesh Bansode"].map((name) => (
                      <StaggeredItem key={name}>
                        <Badge className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors cursor-pointer shadow-lg hover:scale-105 duration-200">
                          {name}
                        </Badge>
                      </StaggeredItem>
                    ))}
                  </StaggeredAnimation>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-2 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-pink-500/20 rounded-b-3xl" />
          </motion.div>
        </AnimatedSection>

        {/* YouTube Section */}
        <div id="youtube" className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">
                    Tensor Talk Podcast
                  </h3>
                  <p className="text-muted-foreground">
                    Latest episodes from AIASA Diaries
                  </p>
                </div>
              </div>
            </div>

            <StaggeredAnimation className="space-y-6" staggerDelay={0.1}>
              {youtubeVideos.map((video, index) => (
                <StaggeredItem key={video.videoId}>
                  <ScaleOnHover scale={1.02}>
                    <Card
                      className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm border-border/50 hover:border-red-500/30 cursor-pointer overflow-hidden"
                      onClick={() => openYouTubeVideo(video.url)}
                    >
                      <div className="flex gap-4 p-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-lg overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                          <motion.div
                            className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Play className="w-6 h-6 text-white" />
                          </motion.div>
                          <Badge className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5">
                            {video.duration}
                          </Badge>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-red-500 transition-colors line-clamp-2 mb-2">
                            {video.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {video.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{video.views} views</span>
                            <span>•</span>
                            <span>{video.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </ScaleOnHover>
                </StaggeredItem>
              ))}
            </StaggeredAnimation>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@AIASA_Diaries",
                    "_blank"
                  )
                }
                className="border-2 border-red-500/50 hover:border-red-500 bg-background/50 backdrop-blur-sm hover:bg-red-500/10 px-6 py-3 rounded-2xl"
              >
                <Youtube className="w-4 h-4 mr-2" />
                View All Episodes
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <h3 className="text-3xl font-bold text-foreground mb-6">
              Join Our YouTube Community
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for the latest Tensor Talk
              episodes, in-depth discussions with experts, and inspiring stories
              from the AI community.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@AIASA_Diaries?sub_confirmation=1",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl shadow-lg"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialMediaSection;
