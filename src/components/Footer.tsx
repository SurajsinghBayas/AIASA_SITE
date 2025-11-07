import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:aiasa@university.edu", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#people" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Research Papers", href: "#" },
    { label: "Project Gallery", href: "#" },
    { label: "Learning Resources", href: "#" },
    { label: "Alumni Network", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Organization Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-12 h-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/imgs.png"
                  alt="AIASA Logo"
                  className="w-12 h-12 rounded-xl shadow-md"
                />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AIASA
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Artificial Intelligence & Data Science Association - Pioneering
              the future of technology through innovative research,
              collaborative learning, and community building. Join us in shaping
              tomorrow's digital landscape.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Artificial Intelligence & Data Science Department,NKOCET
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-muted-foreground">
                  aiasa@university.edu
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={0.2}>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Resources */}
          <AnimatedSection delay={0.4}>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-foreground mb-3">
                Stay Updated
              </h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm bg-background/50 border-border/50 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-4"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Social Links & Copyright */}
        <AnimatedSection delay={0.6}>
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground mr-2">
                  Follow us:
                </span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/50 hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary rounded-xl flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                  © {currentYear} AIASA. Made with{" "}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>{" "}
                  by the team
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  All rights reserved. Building the future together.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
