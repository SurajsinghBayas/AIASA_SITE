import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Youtube,
  Linkedin,
  Play,
  ExternalLink,
  Users,
  Heart,
  MessageCircle,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredAnimation,
  StaggeredItem,
  ScaleOnHover,
} from "@/components/ui/animated-components";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-scroll-animation";
import { Sparkles, Share2 } from "lucide-react";

const SocialMediaSection = () => {
  // Mouse parallax for hero background accents
  const mouseParallaxRef = useMouseParallax(0.02);
  const strongParallaxRef = useMouseParallax(0.05);

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
      url: "https://youtu.be/-Epm7ypWO7Y?si=epMBYcmRHFGnF8Mw",
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
      url: "https://youtu.be/YOUR_EP3_VIDEO_ID", // Replace with actual EP3 video URL
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

  // Sample Instagram posts - in a real implementation, you'd fetch these from Instagram API
  const instagramPosts = [
    {
      id: "1",
      image: "/placeholder.svg", // Replace with actual Instagram post images
      caption:
        "🤖 Exciting AI workshop happening today! Join us to explore the latest trends in machine learning.",
      likes: 127,
      comments: 23,
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      image: "/placeholder.svg",
      caption:
        "🎯 Our team just won first place at the regional hackathon! Proud of our innovative AI solution.",
      likes: 245,
      comments: 41,
      timestamp: "1 day ago",
    },
    {
      id: "3",
      image: "/placeholder.svg",
      caption:
        "📊 Data Science bootcamp registration is now open! Limited seats available.",
      likes: 89,
      comments: 15,
      timestamp: "3 days ago",
    },
    {
      id: "4",
      image: "/placeholder.svg",
      caption:
        "🚀 New episode of Tensor Talk is live on YouTube! This week: Computer Vision breakthroughs.",
      likes: 156,
      comments: 28,
      timestamp: "5 days ago",
    },
  ];

  const openYouTubeVideo = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  const openInstagramPost = (postId: string) => {
    window.open(`https://www.instagram.com/p/${postId}/`, "_blank");
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500/10 via-purple-500/10 to-pink-500/10 border border-border/50 mb-16">
          {/* Parallax decorative blobs */}
          <motion.div
            ref={mouseParallaxRef}
            className="absolute -top-10 -left-10 w-64 h-64 rounded-full blur-3xl bg-red-500/20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            ref={strongParallaxRef}
            className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl bg-purple-500/20"
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-muted-foreground">
                AIASA on Social
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Stay{" "}
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Connected
              </span>{" "}
              with AIASA
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Watch Tensor Talk on YouTube, connect with us on LinkedIn, and
              follow our latest updates on Instagram.
            </motion.p>

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
                Explore YouTube
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("instagram")}
                className="group border-2 border-pink-500/50 hover:border-pink-500 bg-background/60 backdrop-blur-md hover:bg-pink-500/10 px-6 md:px-8 py-6 rounded-2xl"
              >
                Follow Instagram
                <Share2 className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-6 h-10 border-2 border-border/60 rounded-full flex justify-center">
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
          </div>
        </div>

        {/* Social Media Links */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@AIASA_Diaries",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <Youtube className="w-6 h-6" />
                AIASA Diaries
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/aiasa-diaries/", // Replace with actual LinkedIn URL
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/artificialalliance/",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <Instagram className="w-6 h-6" />
                @artificialalliance
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* YouTube Section */}
          <div id="youtube">
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

          {/* Instagram Section */}
          <div id="instagram">
            <AnimatedSection delay={0.3}>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">
                      Latest Posts
                    </h3>
                    <p className="text-muted-foreground">
                      Follow @artificialalliance
                    </p>
                  </div>
                </div>
              </div>

              <StaggeredAnimation
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                {instagramPosts.map((post, index) => (
                  <StaggeredItem key={post.id}>
                    <ScaleOnHover scale={1.05}>
                      <Card
                        className="group hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm border-border/50 hover:border-pink-500/30 cursor-pointer overflow-hidden aspect-square"
                        onClick={() => openInstagramPost(post.id)}
                      >
                        <div className="relative h-full">
                          <div className="w-full h-2/3 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 overflow-hidden">
                            <img
                              src={post.image}
                              alt="Instagram post"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="p-3 h-1/3 flex flex-col justify-between">
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {post.caption}
                            </p>

                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                  <Heart className="w-3 h-3" />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="w-3 h-3" />
                                  <span>{post.comments}</span>
                                </div>
                              </div>
                              <span>{post.timestamp}</span>
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
                      "https://www.instagram.com/artificialalliance/",
                      "_blank"
                    )
                  }
                  className="border-2 border-pink-500/50 hover:border-pink-500 bg-background/50 backdrop-blur-sm hover:bg-pink-500/10 px-6 py-3 rounded-2xl"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Us
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <h3 className="text-3xl font-bold text-foreground mb-6">
              Join Our Digital Community
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for the latest Tensor Talk
              episodes and follow us on Instagram for daily updates,
              behind-the-scenes content, and community highlights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/artificialalliance/",
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialMediaSection;
