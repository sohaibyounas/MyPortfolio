import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { Mail, Download, MessageCircle, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Front End Software Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/sohaibyounas",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sohaib-younas",
      color: "hover:text-blue-600",
    },
    {
      icon: <Mail />,
      href: "sohaibyounas24@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/sohaibyounas24",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5 -z-10"></div>
      <ParticlesBackground />

      <div className="section-container relative z-10">
        <div
          className="flex flex-col lg:flex-row items-center 
        justify-between gap-12 pb-[20px]"
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="xxs:text-[0px] xs:text-[30px] sm:text-[30px] md:text-[60px] lg:text-[72px] font-heading sm:font-medium md:font-bold mb-6 xxs:px-[4px] xs:px-[4px] sm:px-[0]">
                Hi, I'm{" "}
                <span className="text-gradient text-nowrap xxs:px-[10px]">
                  Sohaib Younas
                </span>
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="sm:text-[18px] md:text-[18px] lg:text-[24px] font-medium mb-6 h-8">
                A passionate{" "}
                <span className="text-primary font-semibold">
                  {typedText}
                  <span className="animate-blink border-r-2 border-primary ml-1"></span>
                </span>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <p className="xxs:text-[15px] sm:text-[16px] md:text-[18px] text-muted-foreground mb-8 sm:max-w-[400px] md:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Having an experience of building modern Web applications with
                JavaScript / React.js / TypeScript/ Next.js and other cool
                libraries and frameworks.
              </p>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animation-delay-500">
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${social.color}`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-500">
              <div className="flex flex-col sm:flex-col md:flex-row gap-4 justify-center lg:justify-start xxs:px-[15px] md:px-[0px] ">
                <Button
                  size="lg"
                  className="hero-gradient border-2 hover:scale-105 transition-transform duration-300 text-#fff hover:text-[#000]"
                  asChild
                >
                  <a href="#contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-gradient border-2 hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a
                    href="/SohaibYounas_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    See CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-gradient border-2 hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="/SohaibYounas_CV.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="xxs:w-60 xxs:h-60 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="xxs:w-[200px] xs:w-full">
                    <img src="/view_cv.svg" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-full animate-bounce animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
