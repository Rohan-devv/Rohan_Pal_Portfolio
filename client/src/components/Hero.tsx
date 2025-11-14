import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from "lucide-react";
import { SiGeeksforgeeks } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/attached_assets/Rohan Pal_Resume_1762086141555.pdf";
    link.download = "Rohan_Pal_Resume.pdf";
    link.click();
    console.log("Resume download triggered");
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 gradient-bg opacity-20 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800x800_at_top,_var(--tw-gradient-stops))] from-primary/30 via-primary/10 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600x600_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/15 rounded-full blur-3xl animate-float"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="space-y-10 animate-fade-in-up">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Welcome to my Portfolio</span>
            <Zap className="h-4 w-4 text-primary animate-pulse" />
          </div>

          {/* Main heading with split animation */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl gradient-text-shine leading-tight tracking-tight">
                <span className="inline-flex hover:scale-110 transition-transform duration-300 transform-origin-center">
                  Rohan
                </span>
                <span className="inline-flex mx-3 hover:scale-110 transition-transform duration-300 transform-origin-center">
                  Pal
                </span>

              </h1>
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 -z-10 scale-110 animate-pulse"></div>
            </div>

            {/* Animated subtitle */}
            <div className="relative">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Software Engineer
                </span>
                <span className="mx-3 text-primary animate-pulse">|</span>
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  MERN Developer
                </span>
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Code className="h-5 w-5 text-primary animate-pulse" />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Crafting <span className="text-primary font-semibold">robust software solutions</span> with modern technologies.
            Passionate about creating <span className="text-primary font-semibold">exceptional user experiences</span>, writing clean code, and solving complex engineering challenges.
          </p>

          {/* Enhanced badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Badge variant="secondary" className="px-5 py-2 text-sm backdrop-blur-md border-2 border-primary/20 bg-card/50 hover:scale-110 hover:border-primary/40 hover:bg-primary/5 transition-all shadow-lg" data-testid="badge-projects">
              <Code className="h-3.5 w-3.5 mr-2 text-primary" />
              3+ Full Stack Projects
            </Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm backdrop-blur-md border-2 border-primary/20 bg-card/50 hover:scale-110 hover:border-primary/40 hover:bg-primary/5 transition-all shadow-lg" data-testid="badge-problems">
              <Zap className="h-3.5 w-3.5 mr-2 text-primary" />
              300+ DSA Problems Solved
            </Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm backdrop-blur-md border-2 border-primary/20 bg-card/50 hover:scale-110 hover:border-primary/40 hover:bg-primary/5 transition-all shadow-lg" data-testid="badge-student">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
              IIIT Una Student
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={scrollToProjects}
              data-testid="button-view-projects"
              className="group relative px-8 py-6 text-base font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-primary/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
              className="group px-8 py-6 text-base font-semibold border-2 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Social links with enhanced design */}
          <div className="flex items-center justify-center gap-4 pt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group relative w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all backdrop-blur-sm"
                data-testid="link-linkedin"
              >
                <a href="https://www.linkedin.com/in/rohanpal01" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group relative w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all backdrop-blur-sm"
                data-testid="link-github"
              >
                <a href="https://github.com/rohan-devv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group relative w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all backdrop-blur-sm"
                data-testid="link-gfg"
              >
                <a href="https://www.geeksforgeeks.org/user/user_tm7u6u07et8" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
                  <SiGeeksforgeeks className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group relative w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all backdrop-blur-sm"
                data-testid="link-email"
              >
                <a href="mailto:rohan49421@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Scroll Down</span>
              <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
