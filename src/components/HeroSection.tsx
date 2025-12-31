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
      {/* Subtle dark linear gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* particle background */}
      <ParticlesBackground />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 pb-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Glassmorphism card wrapper */}
            <div className="backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="animate-fade-in-up">
                {/* Small badge */}
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-white backdrop-blur-sm">
                    👋 Welcome to my portfolio
                  </span>
                </div>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Sohaib Younas
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <div className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-medium mb-6 min-h-[40px] text-white">
                  A passionate{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
                    {typedText}
                    <span className="inline-block w-0.5 h-6 xs:h-7 bg-cyan-400 ml-1 animate-pulse"></span>
                  </span>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-300">
                <p className="text-sm xs:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Crafting exceptional digital experiences with modern web
                  technologies. Specialized in{" "}
                  <span className="text-purple-400 font-semibold">
                    React.js
                  </span>
                  ,{" "}
                  <span className="text-purple-400 font-semibold">
                    TypeScript
                  </span>
                  , and{" "}
                  <span className="text-purple-400 font-semibold">Next.js</span>{" "}
                  to build scalable, performant applications.
                </p>
              </div>

              {/* Stats */}
              <div className="animate-fade-in-up animation-delay-300 mb-8">
                <div className="grid grid-cols-3 gap-2 xs:gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      2+
                    </div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-400">
                      Years Exp
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      15+
                    </div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                      10+
                    </div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-400">
                      Tech Stack
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-fade-in-up animation-delay-500">
                <div className="flex justify-center lg:justify-start gap-2 xs:gap-3 mb-8">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 xs:w-12 xs:h-12 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/50 text-white"
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
                <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center lg:justify-start">
                  {/* contact us */}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50 text-white font-semibold text-sm xs:text-base"
                    asChild
                  >
                    <a href="#contact">
                      <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                      Contact Me
                    </a>
                  </Button>

                  <div className="flex gap-3 w-full sm:w-auto">
                    {/* preview CV */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 sm:flex-none border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 text-white font-semibold text-sm xs:text-base px-3 xs:px-6"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("/SohaibYounas_CV.pdf", "_blank");
                      }}
                    >
                      <Eye className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                      View CV
                    </Button>

                    {/* download CV */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 sm:flex-none border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 text-white font-semibold text-sm xs:text-base px-3 xs:px-6"
                      asChild
                    >
                      <a href="/SohaibYounas_CV.pdf" download>
                        <Download className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 w-full max-w-sm lg:max-w-lg">
            <div className="animate-fade-in-up animation-delay-300">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                {/* Main image container */}
                <div className="relative w-64 h-64 xs:w-72 xs:h-72 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/10 shadow-2xl overflow-hidden group">
                  <div className="w-full h-full flex items-center justify-center p-6 xs:p-8 transition-transform duration-500 group-hover:scale-110">
                    <img
                      src="/view_cv.svg"
                      className="w-full h-full object-contain"
                      alt="Profile"
                    />
                  </div>

                  {/* Rotating border effect */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px",
                    }}
                  ></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg animate-bounce backdrop-blur-sm border border-white/20">
                  <span className="text-white font-bold text-sm">⚡ Fast</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg animate-bounce animation-delay-200 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-bold text-sm">
                    🎨 Creative
                  </span>
                </div>
                <div className="absolute top-1/2 -right-8 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse backdrop-blur-sm border border-white/20">
                  <span className="text-white font-bold text-sm">
                    💡 Innovative
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
