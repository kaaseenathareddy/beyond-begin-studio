import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/finitix-logo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Innovation Hub", path: "/innovation-hub" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="FINITIX Logo" className="h-10 w-auto" />
              <div>
                <h2 className="text-lg font-heading font-bold text-gradient">FINITIX</h2>
                <p className="text-xs text-muted-foreground">Beyond Begin</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Turning visionary ideas into reality through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth glow-effect-purple"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FINITIX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
