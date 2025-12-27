import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Server,
  Smartphone,
  Globe,
  Terminal,
  Cpu,
  GitBranch,
  Figma,
  Box,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core & Languages",
      icon: Code2,
      color: "text-blue-400",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5 / Semantic UI", level: 100 },
        { name: "CSS3 / SCSS / Modules", level: 95 },
        { name: "Responsive Design", level: 100 },
        { name: "Web Accessibility (a11y)", level: 85 },
      ],
    },
    {
      title: "Frameworks & State",
      icon: Layout,
      color: "text-purple-400",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js (App Router)", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Zustand / Context", level: 90 },
        { name: "TanStack Query", level: 80 },
        { name: "React Router", level: 95 },
      ],
    },
    {
      title: "UI & Modern Tools",
      icon: Settings,
      color: "text-green-400",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Shadcn UI / Radix", level: 90 },
        { name: "Framer Motion", level: 75 },
        { name: "Figma to Code", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Vercel / Performance", level: 85 },
      ],
    },
  ];

  const floatingSkills = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code2 },
    { name: "JavaScript", icon: Terminal },
    { name: "Tailwind", icon: Layout },
    { name: "Framer Motion", icon: Cpu },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Figma },
    { name: "Redux", icon: Box },
    { name: "PWA", icon: Smartphone },
    { name: "SEO", icon: Globe },
    { name: "Performance", icon: Settings },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse animation-delay-500"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in-up">
            Technical Proficiency
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A comprehensive overview of my technical skills and tools I use to
            build digital products.
          </p>
        </div>

        {/* Floating Icons Cloud (Mobile/Tablet visual) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up animation-delay-300">
          {floatingSkills.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-[#1A1A1A]/80 backdrop-blur-md border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2.5 rounded-lg bg-gray-800 ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-100">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-800"
                      indicatorClassName={`bg-gradient-to-r ${
                        index === 0
                          ? "from-blue-500 to-cyan-500"
                          : index === 1
                          ? "from-green-500 to-emerald-500"
                          : "from-purple-500 to-pink-500"
                      }`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
