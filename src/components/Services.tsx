import { Card } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Palette, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Modern React applications with TypeScript, responsive design, and performance optimization.",
    features: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Performance Optimization",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with modern frameworks and robust database architecture.",
    features: ["Node.js & Python", "Database Design", "API Development", "Real-time Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications that deliver native performance and user experience.",
    features: ["React Native", "iOS & Android", "Cross-platform", "Native Performance"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Cloud infrastructure, CI/CD pipelines, and deployment strategies for scalable applications.",
    features: ["AWS Infrastructure", "CI/CD Pipelines", "Docker", "Monitoring"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive and visually appealing digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed optimization, code splitting, and performance monitoring for better user experience.",
    features: ["Core Web Vitals", "Code Splitting", "Caching"],
  },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end solutions for your digital needs, from concept to deployment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="group p-8 glass-card border border-border/30 relative 
                           hover:shadow-xl hover:border-primary/50 transition-all duration-300 
                           hover:-translate-y-2 hover:rotate-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-xl 
                                flex items-center justify-center mb-6 shadow-md group-hover:scale-110 
                                transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                                duration-500 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 blur-2xl -z-10" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
