import { Mail, Phone, Github, Linkedin, Copy, Check } from "lucide-react";
import { SiGeeksforgeeks } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = {
  email: "rohan49421@gmail.com",
  phone: "+91-8449628069",
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/rohanpal",
    username: "rohanpal",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/rohanpal",
    username: "rohanpal",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    url: "https://auth.geeksforgeeks.org/user/rohanpal",
    username: "rohanpal",
  },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      console.log(`${type} copied to clipboard`);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl md:text-5xl gradient-text-shine" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's connect and discuss how we can work together
          </p>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-2xl mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, opportunities, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 hover-elevate active-elevate-2 card-hover animate-fade-in" data-testid="card-email" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-medium hover:underline truncate block"
                        data-testid="link-email-contact"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(contactInfo.email, "email")}
                    data-testid="button-copy-email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </Card>

              <Card className="p-4 hover-elevate active-elevate-2 card-hover animate-fade-in" data-testid="card-phone" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-sm font-medium hover:underline"
                        data-testid="link-phone-contact"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                    data-testid="button-copy-phone"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-semibold text-2xl">
              Connect on Social
            </h3>
            
            <div className="grid gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card
                    key={social.name}
                    className="p-6 hover-elevate active-elevate-2 card-hover animate-fade-in"
                    data-testid={`card-social-${social.name.toLowerCase()}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      <div className="p-3 rounded-md bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-0.5">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          @{social.username}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rohan Pal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
