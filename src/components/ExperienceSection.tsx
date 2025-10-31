import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Stylee.pk",
      position: "Frontend Developer",
      duration: "December 2018 - January 2020",
      location: "Faisalabad, Pakistan",
      logo: "🔵",
      type: "Full-time",
      description:
        "Working with the ads team to develop new advertising experiences",
      achievements: [
        "Developed and maintained high-traffic advertising platform features",
        "Collaborated with cross-functional teams to deliver user-centric solutions",
        "Optimized application performance resulting in 25% faster load times",
        "Mentored junior developers and contributed to team knowledge sharing",
      ],
      technologies: ["JavaScript", "React js", "Material UI"],
    },
    {
      company: "Drudots Technologies",
      position: "Frontend Developer",
      duration: "January 2025 - Present",
      location: "Lahore, Pakistan",
      logo: "🏠",
      type: "Full-time",
      description:
        "Focused on building user interfaces for the host experience",
      achievements: [
        "Built responsive web applications using React.js, Next.js and TypeScript",
        "Implemented new booking flow that increased conversion by 15%",
        "Collaborated with design team to create pixel-perfect UI components",
        "Led frontend architecture decisions for multiple product teams",
      ],
      technologies: ["React", "TypeScript", "Redux", "SCSS", "Jest"],
    },
    {
      company: "Public Administration",
      position: "IT & Network Administrative",
      duration: "July 2017 - November 2018",
      location: "Haroonabad, Pakistan",
      logo: "📝",
      type: "Full-time",
      description:
        "Managed and supported company IT systems and network operations",
      achievements: [
        "Maintained Windows servers and Active Directory users",
        "Monitored and troubleshooted network connectivity issues",
        "Configured firewalls, routers, and VPN access",
        "Performed regular data backups and system updates",
        "Supported Office 365 and email services for staff",
        "Provided technical support for hardware and software issues",
      ],
      technologies: [
        "Windows Server",
        "Active Directory (AD)",
        "DNS / DHCP",
        "TCP/IP",
        "Office 2016 / Exchange",
        "PowerShell / Bash Scripting",
        "Git / GitHub / GitLab",
        "Backup & Recovery",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="xs:text-[25px] sm:text-[25px] md:text-[48px] font-heading font-bold mb-4 animate-fade-in-up">
            Work Experience
          </h2>
          <p className="xxs:text-[16px] sm:text-[20px] text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            My professional journey building amazing products at great companies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative mb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="ml-0 md:ml-20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                          {exp.logo}
                        </div>
                        <div>
                          <CardTitle className="xxs:text-[14px] xs:text-[18px] sm:text-[20px] xxs:font-medium xs:font-bold sm:font-semibold  text-nowrap">
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-primary xxs:font-normal xs:font-medium text-nowrap xxs:text-[14px] xs:text-[16px] sm:text-[18px]">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex xxs:item-start xs:items-start xxs:flex-col md:flex-row pt-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 xxs:text-nowrap">
                        <CalendarDays className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 text-nowrap">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap xxs:flex-col xs:flex-row gap-2">
                      {exp.technologies.map((tech) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
