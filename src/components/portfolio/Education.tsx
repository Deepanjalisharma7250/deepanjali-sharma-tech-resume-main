import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Technology (Integrated)",
      field: "Computer Science and Engineering",
      institution: "Noida Institute of Engineering and Technology",
      university: "AKTU Affiliated University",
      duration: "2023 - 2028",
      location: "Noida, UP",
      grade: "8.4 CGPA",
      status: "Currently in 5th semester",
      current: true
    },
    {
      degree: "12th Grade (ISC Board)",
      institution: "St. Paul's School",
      duration: "2023",
      location: "Hamirpur, Rourkela, Odisha",
      grade: "86%",
      current: false
    },
    {
      degree: "10th Grade (ICSE Board)",
      institution: "Carmel School",
      duration: "2021",
      location: "Hamirpur, Rourkela, Odisha",
      grade: "93%",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Academic journey and achievements in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:shadow-lg transition-shadow duration-300 ${
                edu.current ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      {edu.degree}
                      {edu.current && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Current
                        </Badge>
                      )}
                    </CardTitle>
                    {edu.field && (
                      <p className="text-lg text-warm font-medium">{edu.field}</p>
                    )}
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-sm text-muted-foreground">{edu.university}</p>
                    )}
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {edu.status && (
                <CardContent>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Status:</span> {edu.status}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground text-center">
                Academic Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">8.4</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">93%</div>
                  <div className="text-sm text-muted-foreground">ICSE Board (10th)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">86%</div>
                  <div className="text-sm text-muted-foreground">ISC Board (12th)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;