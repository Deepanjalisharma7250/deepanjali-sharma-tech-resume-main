import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, MessageSquare, Trophy } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "R", "Go", "PHP", "Ruby"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Web Technologies",
      icon: Code,
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Node.js", "React", "Django", "Spring Boot"],
      color: "bg-warm/10 text-warm border-warm/20"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Libraries & Frameworks",
      icon: Wrench,
      skills: ["Pandas", "NumPy", "Matplotlib"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Google Cloud", "Azure"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Tools & APIs",
      icon: Wrench,
      skills: ["Git", "GitHub", "GitLab", "VS Code", "IntelliJ", "Figma", "RESTful APIs", "JSON", "XML"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      skills: ["Fluent communicator (English, Hindi, Odia, German)", "Public Speaking", "Leadership"],
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <Trophy className="h-6 w-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Deloitte Certified Cyber Job Simulation",
                  "Deloitte Certified Technology Simulation", 
                  "Deloitte Certified Data Analytics Job Simulation",
                  "Infosys Springboard Certified Cryptography",
                  "Infosys Springboard Certified IAC Fundamentals of Information Security Policy (GFSP)",
                  "Oracle Java Programmer Certifications",
                  "Infosys Springboard Certified Network Fundamentals",
                  "Infosys Springboard Certified Cyber Security"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;