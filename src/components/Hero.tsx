import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, i) => {
      let current = 0;
      const step = Math.max(1, Math.ceil(stat.value / 60)); // step size
      const id = setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(id);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = current;
          return newCounts;
        });
      }, 30);
      return id;
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/30 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="mt-16 container mx-auto px-6 relative z-10">
        <div className="mt-16 text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="mt-16 text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Digital
            <span className="block gradient-text">Experiences</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We are a creative company specialized in building modern web
            applications, mobile experiences, and digital solutions that drive
            results.
          </motion.p>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {["React", "TypeScript", "Node.js", "AWS", "UI/UX"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to="/projects">
            <Button variant="hero" size="lg" className="group">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="mb-16 text-center">
                <div className="text-3xl font-bold gradient-text">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
