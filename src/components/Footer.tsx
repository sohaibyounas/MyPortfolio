import { Mail, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/sohaibyounas",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sohaib-younas",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/sohaibyounas24",
      label: "Twitter",
    },
    { icon: <Mail />, href: "sohaibyounas24@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-8 mb-8 gap-8">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div
              className="text-2xl font-heading font-bold text-gradient cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              Portfolio
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm xs:text-base">
              Front End Developer passionate about creating amazing web
              experiences with modern technologies and best practices.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm xs:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground text-sm xs:text-base">
              <p className="break-all">📧 sohaibyounas24@gmail.com</p>
              <p>📱 +92 (303) 6916535</p>
              <p>📍 Lahore, PK</p>
            </div>
            <Button
              className="hero-gradient text-white hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
