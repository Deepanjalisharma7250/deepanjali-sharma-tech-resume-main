import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CodeShapeITSolutions",
      role: "Artificial Intelligence Internship",
      duration: "May - June 2025",
      type: "AI/ML",
      description: "Worked on AI-based projects including positive affirmation platforms, resume screening systems, and fraud detection solutions.",
      technologies: ["Python", "AI/ML", "React", "JavaScript"]
    },
    {
      company: "GWING SOFTWARE TECHNOLOGIES PVT LTD",
      role: "Frontend Developer Internship", 
      duration: "May 5th - June 5th, 2025",
      type: "Frontend",
      description: "Developed responsive web components including navigation bars, footers, contact forms, and interactive image sliders.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      company: "Prodigy InfoTech",
      role: "Full Stack Web Development",
      duration: "May 1st - May 31st, 2025",
      type: "Full Stack",
      description: "Built comprehensive web applications including user authentication platforms, workforce management systems, and e-commerce solutions.",
      technologies: ["JavaScript", "Node.js", "React", "Database", "Full Stack"]
    },
    {
      company: "WorinWell at 1stop.in",
      role: "Java Development Mentorship",
      duration: "July 15th - September 15th, 2024",
      type: "Backend",
      description: "Intensive mentorship program focused on Java development, object-oriented programming, and software engineering best practices.",
      technologies: ["Java", "OOP", "Spring Boot", "Backend Development"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "AI/ML":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Frontend":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Full Stack":
        return "bg-green-100 text-green-800 border-green-200";
      case "Backend":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Practical experience across diverse technology stacks and domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                  <Card className="bg-gradient-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <Badge className={getTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {exp.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;