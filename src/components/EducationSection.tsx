import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "The Islamia University Of Bahawalpur",
      degree: "Bachelor of Science in Computer Science",
      duration: "October 2013 - June 2017",
      gpa: "3.0 / 4.0",
      logo: "🎓",
      type: "Bachelor's",
      description:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, and more.",
      highlights: [
        "Graduated with a 3.0 GPA in Computer Science",
        "Won 3rd place during degree",
        "Completed a capstone project building a full-stack web app for local nonprofit",
        "Contributed to 3 group projects with 100% on-time delivery",
        "Volunteered 20+ hours as a coding tutor for underclassmen",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Web Security",
        "Operating Systems",
        "Database Systems",
        "Computer Networks",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 animate-fade-in-up">
            Education
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            My academic journey and achievements in computer science
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up card-gradient border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl md:text-3xl shrink-0">
                        {edu.logo}
                      </div>
                      <div>
                        <CardTitle className="text-sm xs:text-base md:text-xl font-bold text-foreground mb-1">
                          {edu.institution}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-primary font-medium mb-2 text-xs xs:text-sm md:text-base">
                          <GraduationCap className="w-4 h-4 shrink-0" />
                          <span>{edu.degree}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs xs:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {edu.duration}
                          </div>
                          <Badge
                            variant="outline"
                            className="text-[10px] xs:text-xs"
                          >
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="shrink-0 text-[10px] xs:text-xs"
                    >
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm xs:text-base">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm xs:text-base">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs xs:text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm xs:text-base">
                        Relevant Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="text-[10px] xs:text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
