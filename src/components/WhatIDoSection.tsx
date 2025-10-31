import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

const WhatIDoSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Develop highly interactive Front-end user interfaces for your web applications",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
  ];

  const techStack = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Next.js", icon: "▲" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 capitalize">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            crazy front end developer who wants to explore every tech stack
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge
                  variant="secondary"
                  className="text-lg px-4 py-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up card-gradient border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-row gap-[10px]">
                  <div className="xxs:w-8 xxs:h-8 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="xxs:w-4 xxs:h-4 xs:w-6 xs:h-6 text-primary" />
                  </div>
                  <CardTitle className="xxs:text-[18px] xs:text-[20px] font-semibold text-nowrap">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  ⚡ {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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
