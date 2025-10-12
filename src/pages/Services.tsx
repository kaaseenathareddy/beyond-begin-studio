import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Palette, Brain, Smartphone, Cloud, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Product Engineering",
      description:
        "End-to-end product development from ideation to launch, with focus on scalability and performance.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive, beautiful interfaces that users love, backed by research and best practices.",
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Leveraging artificial intelligence to build intelligent systems that automate and optimize.",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile App Development",
      description:
        "Building responsive, performant applications for web and mobile platforms that scale.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Infrastructure setup, CI/CD pipelines, and cloud optimization for reliable deployments.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation Consulting",
      description:
        "Strategic guidance to help businesses modernize and leverage technology effectively.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            From concept to code — we turn ideas into scalable digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="p-4 rounded-xl bg-gradient-primary w-fit mb-4 group-hover:animate-glow-pulse">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 flex-grow">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Values Section */}
        <section className="bg-card rounded-2xl p-12 mb-12 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">
              "Your Idea. Your Power. Your Future."
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <span className="px-6 py-3 bg-muted rounded-full">🤝 Collaboration</span>
              <span className="px-6 py-3 bg-muted rounded-full">💡 Innovation</span>
              <span className="px-6 py-3 bg-muted rounded-full">🎯 Impact</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Have an idea worth building?
          </h2>
          <Button
            asChild
            size="lg"
            className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
          >
            <Link to="/contact">Let's Make It Real</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
