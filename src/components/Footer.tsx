
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Hosting", href: "/hosting" },
        { name: "Cloud Hosting", href: "/hosting" },
        { name: "VPS Hosting", href: "/hosting" },
        { name: "Dedicated Servers", href: "/hosting" },
        { name: "CDN Solutions", href: "/cdn" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Pricing", href: "/pricing" },
        { name: "Help Center", href: "/help" },
        { name: "Status", href: "/status" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" },
      ],
    },
  ];
  
  return (
    <footer className="bg-muted/50">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              HostCDN
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium hosting and CDN solutions for businesses of all sizes. Fast, secure, and reliable infrastructure.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-3 text-primary" />
                <span>contact@hostcdn.com</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone size={16} className="mr-3 text-primary" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mr-3 text-primary" />
                <span>123 Hosting Street, Server City</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HostCDN. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <select 
                className="py-1 px-2 bg-muted border border-border rounded text-sm text-muted-foreground"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
