import { GraduationCap, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@assets/DP_1762087323126.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl md:text-5xl gradient-text-shine" data-testid="heading-about">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate software engineer dedicated to building impactful solutions
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-card bg-card">
                  <img 
                    src={profileImage} 
                    alt="Rohan Pal" 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: '50% 20%' }}
                    data-testid="img-profile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-foreground" data-testid="text-bio">
                I'm a Software Engineer specializing in the MERN stack, currently pursuing my B.Tech in Electronics and Communication Engineering at IIIT Una. With hands-on experience in building scalable web applications, I'm passionate about creating seamless user experiences, writing maintainable code, and solving complex technical challenges.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                My journey includes developing platforms that serve thousands of users, implementing secure authentication systems, and optimizing application performance. I thrive in collaborative environments, enjoy mentoring others, and am always eager to explore new technologies and engineering best practices.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:col-span-2">
            <Card className="p-6 hover-elevate card-hover animate-fade-in" data-testid="card-education" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Indian Institute of Information Technology, Una
                  </p>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in ECE | Nov 2022 - Jul 2026
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate card-hover animate-fade-in" data-testid="card-achievements" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Achievements</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    250+ DSA problems solved on GeeksforGeeks
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Built 3+ full-stack production applications
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate card-hover animate-fade-in" data-testid="card-leadership" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Vice President – Eunoia, IIIT Una
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Led mental wellness initiatives and organized 5+ campus events
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
