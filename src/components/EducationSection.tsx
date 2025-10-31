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
          <h2 className="xxs:text-[30px] sm:text-[36px] md:text-[48px] font-heading font-bold mb-4 animate-fade-in-up">
            Education
          </h2>
          <p className="xxs:text-[18px] xs:text-[20px] text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
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
                      <div className="sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl">
                        {edu.logo}
                      </div>
                      <div>
                        <CardTitle className="xxs:text-[12px] xs:text-[14px] sm:text-[16px] md:text-[20px] sm:font-medium md:font-semibold text-foreground mb-1 text-nowrap">
                          {edu.institution}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-primary xs:font-normal sm:font-medium mb-2 text-nowrap xxs:text-[9px] xs:text-[11px] sm:text-[11px] md:text-[16px]">
                          <GraduationCap className="w-4 h-4" />
                          {edu.degree}
                        </div>
                        <div className="flex xxs:item-start xs:item-start sm:item-start md:items-center xxs:flex-col xs:flex-col sm:flex-col md:flex-row xxs:pr-[18px] gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {edu.duration}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed xxs:text-[12px] xs:text-[14px] sm:text-[16px]">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Relevant Courses
                      </h4>
                      <div className="flex flex-wrap xxs:flex-col xs:flex-col sm:flex-col md:flex-row gap-2">
                        {edu.courses.map((course) => (
                          <Badge
                            key={course}
                            variant="outline"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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
