import { Card } from "@/components/ui/card";
import { Users, Rocket, Trophy, Network } from "lucide-react";

const InnovationHub = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Collaboration Opportunities",
      description:
        "Partner with us on innovative projects and bring your ideas to life together.",
    },
    {
      icon: Rocket,
      title: "Startup Partnerships",
      description:
        "We support early-stage startups with technical expertise and strategic guidance.",
    },
    {
      icon: Trophy,
      title: "Innovation Challenges",
      description:
        "Join our hackathons and challenges to solve real-world problems with cutting-edge tech.",
    },
    {
      icon: Network,
      title: "Global Talent Network",
      description:
        "Connect with a community of developers, designers, and innovators worldwide.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            The FINITIX <span className="text-gradient">Innovation Hub</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            At Finitix, every connection can spark something extraordinary. We're not just a
            company — we're your partners in innovation.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <Card
                key={index}
                className="p-10 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0 group-hover:animate-glow-pulse">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {opportunity.title}
                    </h3>
                    <p className="text-foreground/80 text-lg">{opportunity.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Why Join Section */}
        <section className="bg-gradient-glow rounded-2xl p-12 border border-primary/20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Join the <span className="text-gradient">Innovation Hub</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Access to Expertise</h4>
                  <p className="text-foreground/80">
                    Work with experienced developers and designers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Cutting-Edge Technology</h4>
                  <p className="text-foreground/80">Leverage the latest tools and frameworks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Community Support</h4>
                  <p className="text-foreground/80">Be part of a thriving innovation ecosystem</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-2xl">✓</div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Real-World Impact</h4>
                  <p className="text-foreground/80">Build solutions that matter</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InnovationHub;
