import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: ["Real-time Inventory", "Payment Gateway", "Admin Dashboard", "Mobile Responsive"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      features: ["Real-time Collaboration", "Progress Tracking", "Team Management", "Mobile App"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts, real-time metrics, and custom reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "D3.js", "Python", "AWS"],
      features: ["Interactive Charts", "Real-time Data", "Custom Reports", "API Integration"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with posts, messaging, and content discovery features.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
      technologies: ["Next.js", "MongoDB", "Socket.io", "Redis"],
      features: ["Real-time Messaging", "Content Feed", "User Profiles", "Media Upload"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      features: ["Video Streaming", "Course Management", "Progress Tracking", "Certificates"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Express", "PostgreSQL", "WebRTC"],
      features: ["Appointment Booking", "Medical Records", "Video Consultations", "HIPAA Compliant"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise 
              in building scalable, modern applications across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 border-border/30">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-12 border-t border-border/30">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
            </p>
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;