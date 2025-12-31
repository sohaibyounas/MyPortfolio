import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  ShoppingCart,
  Mic,
  ListTodo,
  Music,
} from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      title: "NextMerce",
      description:
        "A modern e-commerce platform built with Next.js, featuring product browsing, cart functionality, and seamless checkout.",
      link: "https://nextmercee.netlify.app/",
      icon: ShoppingCart,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    },
    {
      title: "Alreems",
      description:
        "A sophisticated web application delivering premium user experiences with elegant design and smooth interactions.",
      link: "https://alreems.netlify.app/",
      icon: Layers,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      technologies: ["React", "UI/UX", "Responsive", "Animation"],
    },
    {
      title: "AmexioFuse",
      description:
        "An innovative dashboard or fusion application integrating multiple services into a unified interface.",
      link: "https://amexiofuse.netlify.app/",
      icon: Globe,
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      technologies: ["React", "Dashboard", "Integration", "Web App"],
    },
    {
      title: "Mixxer App",
      description:
        "An audio or social mixing application allowing users to create and share content dynamically.",
      link: "https://mixxerapp.netlify.app/",
      icon: Music,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      technologies: ["React", "Audio", "Social", "Interactive"],
    },
    {
      title: "Dewis",
      description:
        "A corporate or portfolio solution designed to showcase professional services and business identities.",
      link: "https://dewis.netlify.app/",
      icon: Layers,
      color: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-400",
      technologies: ["Web Design", "Frontend", "Optimization"],
    },
    {
      title: "Text to Speech",
      description:
        "A functional utility app that converts text input into spoken audio using modern web speech APIs.",
      link: "https://totextspeech.netlify.app/",
      icon: Mic,
      color: "from-rose-500/20 to-red-500/20",
      iconColor: "text-rose-400",
      technologies: ["JavaScript", "Web Speech API", "Utility"],
    },
    {
      title: "DoList To",
      description:
        "A productivity-focused To-Do application to help users organize tasks and manage their daily schedules efficiently.",
      link: "https://dolist-to.netlify.app/",
      icon: ListTodo,
      color: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400",
      technologies: ["React", "State Management", "Productivity"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A showcase of my recent work, side projects, and experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group flex flex-col h-full bg-[#1A1A1A] border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <div
                    className={`p-3 rounded-xl bg-gray-800/50 border border-gray-700 ${project.iconColor} mb-4`}
                  >
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow relative z-10">
                <CardDescription className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 border border-gray-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 relative z-10 mt-auto">
                <Button
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 group-hover:border-purple-500/50 transition-all"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
