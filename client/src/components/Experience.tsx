import { Building2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: "markvision",
    role: "Full Stack Developer Intern",
    company: "Markvision",
    location: "Remote",
    period: "Jan 2025 - Jul 2025",
    current: true,
    achievements: [
      "Curated responsive MERN stack web apps, effectively conveying functionality and collaborating with team",
      "Implemented JWT-based authentication and role-based access, securing data for 20+ users",
      "Engineered indexes and refined data models within MongoDB, leading to a 30% decrease in CPU utilization during peak loads",
      "Deployed apps on cloud with Git-based CI/CD for high availability",
    ],
  },
  {
    id: "kadit",
    role: "Software Intern",
    company: "Kadit Innovations",
    location: "Remote",
    period: "Oct 2024 - Dec 2024",
    current: false,
    achievements: [
      "Developed and deployed 5+ new frontend and backend features, improving application usability for 1,000+ active users",
      "Resolved 20+ technical issues by implementing scalable functionalities, reducing bug reports by 30%",
      "Collaborated with a 6-member team to plan and deliver projects on schedule, submitting 3 detailed technical reports",
      "Improved code quality by conducting 15+ reviews and systematic refactoring",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl md:text-5xl gradient-text-shine" data-testid="heading-experience">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building impactful solutions in collaborative environments
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`card-experience-${exp.id}`}>
                <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-20 p-6 hover-elevate card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-xl" data-testid={`text-role-${exp.id}`}>
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <Badge variant="default" className="text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span data-testid={`text-company-${exp.id}`}>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" data-testid={`text-period-${exp.id}`}>
                        {exp.period}
                      </Badge>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          data-testid={`text-achievement-${exp.id}-${i}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
