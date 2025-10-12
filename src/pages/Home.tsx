import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, MessageCircle, Lightbulb, Gem } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const strengths = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development and scalable deployment",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security, 99.9% uptime",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across the world",
    },
    {
      icon: MessageCircle,
      title: "Community Driven",
      description: "Building ecosystems where everyone grows",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Turning ideas into impact",
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Affordable excellence",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="text-gradient">Beyond Begin.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Turning visionary ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
            >
              <Link to="/contact">Share Your Idea</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Finitix is a product-based software company dedicated to creating innovative digital
              solutions that tackle real-world problems. We believe the best products don't just
              work — they inspire, empower, and make life easier.
            </p>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our <span className="text-gradient">Strengths</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <blockquote className="text-3xl md:text-5xl font-heading font-bold text-center text-gradient italic">
            "We make the impossible… inevitable."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-glow border-primary/20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                💡 Got an idea to solve a real-world problem?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                We want to hear it! Share your vision with us and let's turn it into reality.
              </p>
              <Button
                asChild
                size="lg"
                className="glow-effect bg-gradient-primary hover:shadow-glow-purple text-lg px-8 py-6"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
