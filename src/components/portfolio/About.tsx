import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Deepanjali Sharma, a Full-Stack Developer and M.Tech Computer Science candidate at NIET. 
                My expertise lies in building end-to-end software solutions using Java, Spring Boot, Python, 
                JavaScript, and modern frontend technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've worked on diverse projects in health tech, AI integration, chatbot systems, and analytics 
                dashboards, often leading development while collaborating across teams. I hold certifications 
                in Advanced Java, DSA, and DBMS, and have a solid foundation in AI, software engineering 
                principles, and database design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about problem-solving, public speaking, and tech leadership, and I'm always 
                looking to contribute to meaningful, user-centric innovations. Currently seeking impactful 
                internships or full-time opportunities that let me solve real-world problems and grow as a developer.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Gautam Buddha Nagar, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 7250647615</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Currently in 3rd year of M.Tech Int CSE at NIET</span>
              </div>
            </div>
          </div>

          {/* Leadership & Achievements */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Leadership & Achievements
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🏆 Debate & MUN Excellence</h4>
                  <p className="text-muted-foreground">
                    Led and won at national level debates and MUNs as Head Coordinator, 
                    Conventus Debate and MUN Club.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🥇 Sports Achievement</h4>
                  <p className="text-muted-foreground">
                    Won 1st place in tug of war in intra college sport event, Ebullience 2025.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">💻 Technical Leadership</h4>
                  <p className="text-muted-foreground">
                    Directed technical events as Head Coordinator, CSI – hosted hackathons 
                    and events with 200+ participants and workshops.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">🎤 Public Speaking</h4>
                  <p className="text-muted-foreground">
                    Emceed multiple institutional events, showcasing public speaking skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;