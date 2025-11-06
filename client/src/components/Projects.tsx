import { ExternalLink, Github, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import janhitImage from "@assets/Screenshot 2025-11-02 202008.png";
import boardifyImage from "@assets/Feed page.png";

const projects = [
  {
    id: "janhit",
    title: "Janhit",
    description: "Architected a scalable civic engagement platform supporting thousands of users with efficient data flow and smooth feature integration. Integrated map functionality to deliver precise location details across the platform.",
    image: janhitImage,
    techStack: ["React", "Node.js", "TypeScript", "MongoDB", "Docker"],
    metrics: [
      { label: "Load Time", value: "40% faster" },
      { label: "Deployment", value: "70% easier" },
    ],
    links: {
      live: "https://janhit-flame.vercel.app/",
      github: "https://github.com/Rohan-devv/Janhit",
      demo: "https://drive.google.com/file/d/16-dVsDW6toWUxO5gWH0XpCfTU0w0LccF/view?usp=drivesdk",
    },
  },
  {
    id: "boardify",
    title: "Boardify",
    description: "Created a full-stack image-sharing platform featuring captions, user profiles, and role-based privacy controls. Implemented Passport.js authentication with protected routes and designed a responsive UI optimized for mobile and desktop.",
    image: boardifyImage,
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js", "TailwindCSS"],
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Images Tested", value: "200+" },
    ],
    links: {
      live: "https://boardify-1.onrender.com/",
      github: "https://github.com/Rohan-devv/Boardify",
      demo: "",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl md:text-5xl gradient-text-shine" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building real-world solutions with modern technologies
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate active-elevate-2 card-hover project-card animate-fade-in-up"
              data-testid={`card-project-${project.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="project-image-overlay"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-2xl mb-2" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-3 rounded-md bg-muted/50">
                      <div className="font-bold text-lg text-primary" data-testid={`text-metric-value-${metric.label.toLowerCase()}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="default" size="sm" asChild data-testid={`button-live-${project.id}`}>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild data-testid={`button-github-${project.id}`}>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild data-testid={`button-video-${project.id}`}>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Video className="mr-2 h-4 w-4" />
                        Demo Video
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
