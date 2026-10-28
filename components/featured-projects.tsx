import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Github, Landmark, ShieldCheck } from "lucide-react";

const featured = [
  {
    title: "Nepal Civic",
    tagline: "Grievance platform for Nepal's federal structure",
    icon: <Landmark className="h-6 w-6" />,
    description:
      "Citizens report local problems such as broken roads, water supply or waste in Nepali or English. Each grievance goes to the ward office; if the ward misses its deadline it moves up automatically to the Palika, then the District, then the Province.",
    highlights: [
      "All 7 provinces, 77 districts, 753 local levels and 6,743 wards",
      "Phone OTP sign-in over Sparrow SMS, map pins, photos and status tracking",
      "Officers see only their own area, enforced by the API",
      "Bikram Sambat dates and a full English / नेपाली interface; 238 backend tests",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL", "Leaflet"],
    images: [
      { src: "/projects/nepal-civic-dashboard.jpg", alt: "Palika officer dashboard with action queue and overdue grievances" },
      { src: "/projects/nepal-civic-grievance.jpg", alt: "Grievance detail with escalation history" },
    ],
    githubUrl: "https://github.com/Ashutosh-Neupane/nepal-civic",
  },
  {
    title: "Nepal Case Management",
    tagline: "Financial-crime investigation for Nepal",
    icon: <ShieldCheck className="h-6 w-6" />,
    description:
      "Banks file suspicious transaction reports and upload transactions. Detection rules flag structuring, rapid movement, dormant accounts and large payments by politically exposed people. Analysts triage alerts and investigate cases, and a second supervisor must approve before a case goes to an agency such as the DMLI or CIAA.",
    highlights: [
      "Five detection rules, including Rs 10 lakh cash threshold reporting",
      "Four-eyes approval: the officer who submits a case can never approve it",
      "Money-flow network linking suspects through shared counterparties",
      "Fiscal-year references, BS dates, lakh / crore amounts; unit and end-to-end tests",
    ],
    technologies: ["NestJS", "Prisma", "PostgreSQL", "React", "TanStack Query", "Tailwind", "Recharts"],
    images: [
      { src: "/projects/case-management-dashboard.jpg", alt: "Supervisor dashboard with alert trend and case deadlines" },
      { src: "/projects/case-management-network.jpg", alt: "Subject profile with money-flow network" },
    ],
    githubUrl: "https://github.com/Ashutosh-Neupane/nepal-case-management",
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Built for Nepal
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-8 leading-relaxed">
            Open-source software designed around how Nepal&apos;s public offices actually work: wards and Palikas,
            the Bikram Sambat calendar, Nepali language, and the agencies cases are sent to.
          </p>
        </div>

        <div className="space-y-16">
          {featured.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-muted/30 animate-slide-up"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="p-4 sm:p-6 bg-muted/40 grid gap-4 content-start">
                  {project.images.map((image) => (
                    <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover object-top rounded-xl border border-border shadow-md hover:shadow-xl transition-shadow"
                      />
                    </a>
                  ))}
                </div>

                <div className="p-6 sm:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl text-primary shadow-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{project.description}</p>

                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 text-gray-800 bg-muted/50 border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button asChild variant="outline" className="bg-transparent hover:bg-primary/5 hover:border-primary/50 hover:text-primary">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View code and screenshots
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
