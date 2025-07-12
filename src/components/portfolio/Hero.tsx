import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Deepanjalisharma7250",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/deepanjali-sharma-60611b2b7/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/deepanjalis469/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:deepanjalis469@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-white">Deepanjali Sharma</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Full-Stack Developer & M.Tech CSE Student
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Enthusiastic M.Tech Integrated student at NIET specializing in full-stack development. 
                Proficient in Java, Python, Spring Boot, and databases. Having experience in project 
                management, public speaking, and leadership.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img
                  src="/lovable-uploads/610a5bb4-0452-4272-85d1-7a0b365c9f26.png"
                  alt="Deepanjali Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;