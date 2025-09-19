import { Card } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Code2,
  Lightbulb,
  Target,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-6 animate-fade-in-delayed">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Main Story Section */}
          <div className="xl:col-span-2 space-y-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                    I'm a final-year Computer Science and IT student at
                    Tribhuvan University, currently in my 8th semester. My
                    passion for web development began during my academic
                    journey, where I discovered the power of creating digital
                    solutions that combine clean design with robust
                    functionality.
                  </p>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Through my internship at Dots and Dashes Technology Limited
                    and various personal projects, I've gained hands-on
                    experience in building scalable web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold">What Drives Me</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm passionate about creating user-centric applications that
                  solve real-world problems. The intersection of creativity and
                  logic in web development fascinates me.
                </p>
              </Card>

              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up group"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold">My Goal</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become a full-stack developer who builds scalable,
                  accessible, and beautiful web applications that make a
                  positive impact on users' lives.
                </p>
              </Card>
            </div>
          </div>

          {/* Contact & Education Sidebar */}
          <div className="space-y-6">
            <Card
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">
                    Gongabu, Kathmandu
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">9844646613</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">
                    neupaneashutosh68@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <GraduationCap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">
                    B.Sc. CSIT (8th Semester)
                  </span>
                </div>
              </div>
            </Card>

            <Card
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                Education Timeline
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-sm">
                      B.Sc. Computer Science & IT
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Amrit Science Campus, TU
                    </p>
                    <p className="text-xs text-primary font-medium">
                      2078 – Present
                    </p>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-secondary/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-sm">+2 Science</h5>
                    <p className="text-xs text-muted-foreground">
                      Herald International College
                    </p>
                    <p className="text-xs text-secondary font-medium">
                      2076 – 2078
                    </p>
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-accent/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-sm">SEE</h5>
                    <p className="text-xs text-muted-foreground">
                      Fluorescent Secondary School
                    </p>
                    <p className="text-xs text-accent font-medium">
                      2074 – 2075
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
