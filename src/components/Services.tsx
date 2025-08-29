import { Card } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Palette, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern React applications with TypeScript, responsive design, and performance optimization.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Scalable server-side solutions with modern frameworks and robust database architecture.",
      features: ["Node.js & Python", "Database Design", "API Development", "Real-time Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native performance and user experience.",
      features: ["React Native", "iOS & Android", "Cross-platform", "Native Performance"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Cloud infrastructure, CI/CD pipelines, and deployment strategies for scalable applications.",
      features: ["AWS Infrastructure", "CI/CD Pipelines", "Docker", "Monitoring"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and visually appealing digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, code splitting, and performance monitoring for better user experience.",
      features: ["Core Web Vitals", "Code Splitting", "Caching", "Monitoring"]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end solutions for your digital needs, from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group hover:shadow-2xl border-border/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;