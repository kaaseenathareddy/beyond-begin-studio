import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Who <span className="text-gradient">We Are</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Finitix is a software company focused on quality, innovation, and impact. We build
            technology that changes lives.
          </p>
        </div>

        {/* Mission, Vision, Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                Mission
              </h2>
              <p className="text-foreground/80">
                To empower innovators by turning ideas into high-quality digital products that make
                a real difference.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple animate-scale-in group" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                <Eye className="text-primary-foreground" size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                Vision
              </h2>
              <p className="text-foreground/80">
                To create a world where innovative technology is accessible to everyone, not just
                the privileged few.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow-pulse">
                <Lightbulb className="text-primary-foreground" size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-smooth">
                Philosophy
              </h2>
              <p className="text-foreground/80">
                "Challenges are not roadblocks — they're opportunities."
              </p>
            </div>
          </Card>
        </div>

        {/* Founder Section */}
        <section className="bg-card rounded-2xl p-12 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Founder</span>
            </h2>
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-semibold mb-2">Jnaneswar Kandukuri</h3>
              <p className="text-lg text-primary">Founder & CEO</p>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              "As the visionary behind Finitix, Jnaneswar believes in the power of technology to
              transform lives. His mission: to build solutions that don't follow trends but set
              them."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
