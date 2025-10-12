import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Globe } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // In a real application, you would send this to a backend
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Have an idea, question, or project? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50 animate-scale-in">
            <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or idea..."
                  rows={6}
                  className="bg-muted border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full glow-effect bg-gradient-primary hover:shadow-glow-purple"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                    Email
                  </h3>
                  <a
                    href="mailto:finitix.official@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-smooth"
                  >
                    finitix.official@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow-purple group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                    Phone
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+917815879588"
                      className="block text-foreground/80 hover:text-primary transition-smooth"
                    >
                      +91 78158 79588
                    </a>
                    <a
                      href="tel:+919515271439"
                      className="block text-foreground/80 hover:text-primary transition-smooth"
                    >
                      +91 95152 71439
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                  <Globe className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-smooth">
                    Global Presence
                  </h3>
                  <p className="text-foreground/80">
                    Digital-first company serving clients globally
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
