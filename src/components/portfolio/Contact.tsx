import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deepanjalis469@gmail.com",
      href: "mailto:deepanjalis469@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7250647615",
      href: "tel:+917250647615",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gautam Buddha Nagar, UP, India",
      href: "#",
      color: "text-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Deepanjalisharma7250",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deepanjali-sharma-60611b2b7/",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/deepanjalis469/",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-lg text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-primary-foreground/90">
                  Currently seeking impactful internships or full-time opportunities in software development. 
                  Let's discuss how we can work together to create amazing solutions.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary-foreground/70">{contact.label}</p>
                          {contact.href === "#" ? (
                            <p className="text-white font-medium">{contact.value}</p>
                          ) : (
                            <a
                              href={contact.href}
                              className="text-white font-medium hover:text-primary-foreground/80 transition-colors"
                            >
                              {contact.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/20">
                  <p className="text-primary-foreground/70 mb-4">Follow me on:</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-primary-foreground/90">
                  Ready to start a conversation? Choose your preferred method:
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <a href="mailto:deepanjalis469@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/deepanjali-sharma-60611b2b7/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="https://github.com/Deepanjalisharma7250" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View GitHub
                    </a>
                  </Button>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-primary-foreground/70 text-sm mb-2">Available for:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Full-time roles", "Internships", "Freelance projects", "Collaborations"].map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-xs text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;