import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Palette, Zap, Layers, Globe } from "lucide-react";

const WhatIDoSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Develop highly interactive Front-end user interfaces for your web applications",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-purple-500/20 to-blue-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Layers,
      title: "Next.js Applications",
      description:
        "Building widespread, high-performance web applications with server-side rendering and SEO.",
      technologies: ["SSR", "SEO", "Server Actions", "Vercel"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Palette,
      title: "UI/UX Architecture",
      description:
        "Crafting beautiful, accessible, and responsive design systems with modern aesthetics.",
      technologies: ["Framer Motion", "Shadcn UI", "Figma", "CSS3"],
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Enhancing web vitality using code splitting, lazy loading, and advanced caching strategies.",
      technologies: ["Web Vitals", "Lighthouse", "Optimization", "Speed"],
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="what-i-do" className="py-20 bg-gray-900/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-fade-in-up">
            What I Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Crazy front end developer who wants to explore every tech stack
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-[#1A1A1A] border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gray-800/50 border border-gray-700 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-100">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <p className="text-gray-400 text-base leading-relaxed">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 transition-colors duration-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
