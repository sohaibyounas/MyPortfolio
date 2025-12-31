import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    // 1st
    {
      company: "Stylee.pk",
      position: "Frontend Developer",
      duration: "December 2022 - December 2024",
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

    // 2nd
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

    // 3rd
    {
      company: "Public Administrator",
      position: "Computer Operator & Database Administrator",
      duration: "July 2019 - June 2020",
      location: "Bahawalnagar, Pakistan",
      logo: "🇵🇰",
      type: "Job",
      description: "One year job at public administration",
      achievements: [
        "Managed Windows Server environments and User Administration",
        "Handled Network Troubleshooting and Connectivity maintenance",
        "Overseeing Hardware/Software installation and upgrades",
        "Ensured data integrity through regular Backup & Recovery procedures",
        "Provided end-user technical support for government officials",
      ],
      technologies: [
        "Windows Server",
        "Active Directory",
        "Networking/TCP-IP",
        "System Administration",
        "Hardware Support",
      ],
    },

    // 4th
    {
      company: "National Textile University",
      position: "Web Developer (Remote)",
      duration: "July 2018 - July 2019",
      location: "Faisalabad, Pakistan",
      logo: "🎓",
      type: "Remote Project",
      description:
        "Provided remote services for a dedicated project with the Department of Computer Science",
      achievements: [
        "Specialized in Web-based Development for university projects",
        "Applied advanced problem-solving using programming techniques",
        "Delivered satisfactory results under the supervision of the CS Department Chairman",
        "Collaborated remotely to meet project milestones",
      ],
      technologies: [
        "Web Development",
        "Programming Logic",
        "Problem Solving",
        "Remote Collaboration",
      ],
    },

    // 5th
    {
      company: "DCO Office Bahawalnagar",
      position: "IT & Network Administrative",
      duration: "July 2017 - June 2018",
      location: "Bahawalnagar, Pakistan",
      logo: "🇵🇰",
      type: "Internship",
      description:
        "One year internship under Prime Minister's Youth Training Scheme (Phase-I)",
      achievements: [
        "Managed Windows Server environments and User Administration",
        "Handled Network Troubleshooting and Connectivity maintenance",
        "Overseeing Hardware/Software installation and upgrades",
        "Ensured data integrity through regular Backup & Recovery procedures",
        "Provided end-user technical support for government officials",
      ],
      technologies: [
        "Windows Server",
        "Active Directory",
        "Networking/TCP-IP",
        "System Administration",
        "Hardware Support",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
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
                          <CardTitle className="text-sm xs:text-base md:text-xl font-bold">
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-primary font-medium text-sm xs:text-base md:text-lg">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-[10px] xs:text-xs"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-col md:flex-row pt-2 gap-4 text-xs xs:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm xs:text-base">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs xs:text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
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
