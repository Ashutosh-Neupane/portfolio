import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Building,
  CheckCircle,
  Rocket,
  Users,
  Code,
} from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
              Professional Experience
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-6 animate-fade-in-delayed">
            My journey in professional web development and collaborative
            teamwork
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Experience Card */}
          <div className="xl:col-span-2">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border-0 bg-gradient-to-br from-background to-muted/50">
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        Software Developer, React Department
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold text-primary">
                          Dots and Dashes Technology Services Pvt. Ltd.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                      <Calendar className="h-4 w-4" />
                      <span>June 2025 – present</span>
                    </div>
                    {/* <Badge variant="secondary" className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                      3 Months
                    </Badge> */}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
                  I build production web applications end to end: Next.js and
                  React frontends, and Frappe backends with custom DocTypes and
                  REST APIs, for e-commerce and inventory workflows. Clients
                  include Sathi Mart and Bhugharbha.
                </p>

                <div className="space-y-6">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Key Achievements & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">
                          Frontend Development
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Production Next.js and React apps with reusable
                          components and accessible Chakra UI designs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="p-2 bg-secondary/10 rounded-lg mt-1">
                        <Users className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">
                          Frappe Backends
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Custom DocTypes, business logic and REST APIs for
                          e-commerce and inventory
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="p-2 bg-accent/10 rounded-lg mt-1">
                        <Building className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">
                          End-to-end Integration
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Next.js frontends connected to Frappe: authentication,
                          validation and API calls
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <Rocket className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">
                          Performance
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          State and data fetching with Zustand and React Query,
                          faster page loads, cross-browser fixes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Code className="h-5 w-5 text-secondary" />
                    Technologies & Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        name: "React.js",
                        color: "bg-blue-500/10 text-blue-700 border-blue-200",
                      },
                      {
                        name: "Chakra UI",
                        color: "bg-teal-500/10 text-teal-700 border-teal-200",
                      },
                      {
                        name: "Next.js",
                        color: "bg-zinc-500/10 text-zinc-700 border-zinc-200",
                      },
                      {
                        name: "TypeScript",
                        color: "bg-sky-500/10 text-sky-700 border-sky-200",
                      },
                      {
                        name: "Frappe / ERPNext",
                        color: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
                      },
                      {
                        name: "React Query",
                        color: "bg-rose-500/10 text-rose-700 border-rose-200",
                      },
                      {
                        name: "Zustand",
                        color:
                          "bg-yellow-500/10 text-yellow-700 border-yellow-200",
                      },
                      {
                        name: "Git",
                        color:
                          "bg-orange-500/10 text-orange-700 border-orange-200",
                      },
                      {
                        name: "Agile",
                        color:
                          "bg-green-500/10 text-green-700 border-green-200",
                      },
                    ].map((tech, index) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className={`text-sm px-3 py-1 ${tech.color} hover:scale-105 transition-transform cursor-default`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with additional info */}
          <div className="space-y-6">
            <Card
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Looking Forward</h3>
                </div>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed mb-4">
                  Open to full-stack and Frappe / ERPNext work, and to
                  collaborating on software for Nepal.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Full-stack roles</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Frappe / ERPNext projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>Public-sector software for Nepal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-xl">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold">Skills Gained</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Team Communication</span>
                    <div className="w-16 bg-muted rounded-full h-1.5">
                      <div className="bg-secondary h-1.5 rounded-full w-full animate-expand"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Code Review</span>
                    <div className="w-16 bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full w-4/5 animate-expand"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Project Management</span>
                    <div className="w-16 bg-muted rounded-full h-1.5">
                      <div
                        className="bg-accent h-1.5 rounded-full w-3/4 animate-expand"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Timeline</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">
                      Jun 2025: Started internship
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">
                      July 2025: First project delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Sep 2025: Completed internship
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Sep 2025: Started as software developer
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
