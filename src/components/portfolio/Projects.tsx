import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projectCategories = [
    {
      category: "Personal Projects",
      projects: [
        {
          title: "Fitness Tracker",
          description: "A comprehensive fitness tracking application to monitor workouts, progress, and health metrics.",
          tech: ["React", "JavaScript", "CSS"],
          github: "https://github.com/Deepanjalisharma7250/fitness-tracker.git",
          featured: true
        },
        {
          title: "Quiz Platform using Java",
          description: "Interactive quiz platform built with Java for educational and training purposes.",
          tech: ["Java", "Swing", "Database"],
          github: "https://github.com/Deepanjalisharma7250/quiz_platform.git"
        },
        {
          title: "Seri Soulmate (Female Chatbot)",
          description: "AI-powered female chatbot designed for companionship and conversation.",
          tech: ["Python", "NLP", "AI"],
          github: "https://github.com/Deepanjalisharma7250/seri-soulmate.git",
          featured: true
        }
      ]
    },
    {
      category: "Prodigy InfoTech Projects",
      projects: [
        {
          title: "Verified-Route-Flow | Secure User Authentication Platform",
          description: "A comprehensive authentication system with secure user verification and route management.",
          tech: ["Node.js", "React", "JWT", "Security"],
          github: "https://github.com/Deepanjalisharma7250/PRODIGY_FS_01.git",
          featured: true
        },
        {
          title: "Workforce Fista System",
          description: "Employee management system for workforce tracking and administration.",
          tech: ["Full Stack", "Database", "React"],
          github: "https://github.com/Deepanjalisharma7250/PRODIGY_FS_02.git"
        },
        {
          title: "Deepanjali Sharma Chatsphere",
          description: "Real-time chat application with modern messaging features.",
          tech: ["React", "Socket.io", "Node.js"],
          github: "https://github.com/Deepanjalisharma7250/PRODIGY_FS_04.git"
        },
        {
          title: "Daily Market Emporium Online (E-commerce Platform)",
          description: "Full-featured e-commerce platform for online marketplace.",
          tech: ["React", "Node.js", "Payment Integration"],
          github: "https://github.com/Deepanjalisharma7250/PRODIGY_FS_03.git",
          featured: true
        }
      ]
    },
    {
      category: "GWING SOFTWARE TECHNOLOGIES",
      projects: [
        {
          title: "Navigation Bar Component",
          description: "Responsive and accessible navigation bar component with modern design.",
          tech: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/Deepanjalisharma7250/GWING_SOFTWARE_TECHNOLOGIES-NAVIGATION_BAR-.git"
        },
        {
          title: "Footer Section",
          description: "Professional footer component with multiple sections and responsive design.",
          tech: ["HTML", "CSS", "Responsive"],
          github: "https://github.com/Deepanjalisharma7250/GWING_SOFTWARE_TECHNOLOGIES_FOOTER_SECTION.git"
        },
        {
          title: "Contact Us Form",
          description: "Interactive contact form with validation and modern styling.",
          tech: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/Deepanjalisharma7250/GWING_SOFTWARE_TECHNOLOGIES-CONTACTUS-FORM-.git"
        },
        {
          title: "Image Slider",
          description: "Dynamic image slider with smooth transitions and touch support.",
          tech: ["JavaScript", "CSS", "Animation"],
          github: "https://github.com/Deepanjalisharma7250/GWING_SOFTWARE_TECHNOLOGIES-image-slider-.git"
        }
      ]
    },
    {
      category: "CodeShapeITSolutions",
      projects: [
        {
          title: "AI-based Positive Affirmation Platform",
          description: "AI-powered platform for generating and delivering personalized positive affirmations.",
          tech: ["AI", "React", "Python"],
          github: "https://github.com/Deepanjalisharma7250/-CodeShapeITSolution_01_2025.git",
          demo: "https://celebrated-cat-f46609.netlify.app/",
          featured: true
        },
        {
          title: "Automated Resume Screening System",
          description: "AI-based system for automatically screening and scoring resumes based on job requirements.",
          tech: ["AI", "Python", "Machine Learning"],
          github: "https://github.com/Deepanjalisharma7250/CodeShapeITSolution_02_2025.git",
          demo: "https://candidate-score-boost.netlify.app/",
          featured: true
        },
        {
          title: "Credit Card Fraud Detection",
          description: "Machine learning model for detecting fraudulent credit card transactions in real-time.",
          tech: ["Python", "Machine Learning", "Data Science"],
          github: "https://github.com/Deepanjalisharma7250/CodeShapeITSolution_03_2025.git",
          demo: "https://creditcardfrauddetection-sentinel.netlify.app/",
          featured: true
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects Portfolio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <Card 
                    key={projectIndex} 
                    className={`bg-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      project.featured ? 'ring-2 ring-primary/20' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg text-foreground leading-tight">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;