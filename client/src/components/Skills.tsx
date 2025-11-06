import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Globe, Database, TestTube, Rocket, Sparkles } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Python", level: 80 },
      { name: "SQL (Postgres)", level: 85 },
    ],
  },
  {
    category: "Web & Frameworks",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 85 },
      { name: "Socket.io", level: 80 },
    ],
  },
  {
    category: "Tools & Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git & GitHub", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB (Atlas)", level: 90 },
      { name: "AWS (EC2, S3)", level: 75 },
      { name: "Nginx", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "Render", level: 85 },
    ],
  },
  {
    category: "Testing & CI/CD",
    icon: TestTube,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Jest", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Mocha", level: 80 },
      { name: "Chai", level: 80 },
      { name: "GitHub Actions", level: 85 },
      { name: "Jenkins", level: 75 },
    ],
  },
  {
    category: "Other Skills",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "System Design Basics", level: 80 },
      { name: "Agile Methodologies", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <h2 className="font-display font-bold text-3xl md:text-5xl gradient-text-shine" data-testid="heading-skills">
              Technical Skills
            </h2>
            <Sparkles className="h-8 w-8 text-primary ml-3 animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern web applications
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.category}
                className="group relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm animate-fade-in-up card-hover"
                data-testid={`card-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                <div className="relative p-6">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3
                      className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors"
                      data-testid={`text-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="text-sm font-medium bg-muted/50 hover:bg-primary/10 border transition-all cursor-default hover:scale-110 hover:shadow-md animate-fade-in"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                        data-testid={`badge-skill-${skill.name.toLowerCase().replace(/[\s().+]/g, '-')}`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>

                  {/* Skill count badge */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Total Skills</span>
                      <Badge variant="outline" className="font-bold">
                        {category.skills.length}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary card */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text-shine mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Total Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text-shine mb-2">
                {skillCategories.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Skill Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text-shine mb-2">
                {Math.round(
                  skillCategories.reduce((acc, cat) => {
                    const avg = cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length;
                    return acc + avg;
                  }, 0) / skillCategories.length
                )}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Average Proficiency</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
