import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Server } from "lucide-react";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  MessageCircle,
  Globe,
  Building,
  Store,
  Briefcase,
  Star,
  BookOpen,
  Calendar,
  Users,
  Code2,
} from "lucide-react";

export function Projects() {
  const personalProjects = [
    {
      title: "Book Recommendation System",
      description:
        "A personalized book recommendation system built with the MERN stack. Integrated AI-powered recommendation logic to suggest books based on user ratings, preferences, and reading history. Uses a mix of content-based and collaborative filtering approaches.",
      icon: <BookOpen className="h-6 w-6" />,
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Recommendation API",
        "AI Integration",
      ],
      category: "Full-Stack App",
      githubUrl:
        "https://github.com/Ashutosh-Neupane/book-recommendationsystem",
    },
    {
      title: "Chat App",
      description:
        "A real-time messaging application supporting private and group chats. Built with the MERN stack and WebSocket for instant communication. Features include authentication, live status, and message persistence.",
      icon: <MessageCircle className="h-6 w-6" />,
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Socket.io"],
      category: "Real-time App",
      githubUrl: "https://github.com/Ashutosh-Neupane/Chatapp",
    },
    {
      title: "DarkTheme IT Website",
      description:
        "A sleek IT service website designed with a modern dark theme. Built with Next.js and Aceternity UI, featuring smooth animations, interactive components, and fully responsive design.",
      icon: <Monitor className="h-6 w-6" />,
      technologies: [
        "Next.js",
        "Aceternity UI",
        "Framer Motion",
        "Tailwind CSS",
      ],
      category: "Frontend Website",
      githubUrl: "https://github.com/Ashutosh-Neupane?tab=repositories",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce application built with the MERN stack. Includes product catalog, shopping cart, authentication, payments, and responsive design for seamless user experience.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Stripe API",
      ],
      category: "Full-Stack App",
      githubUrl: "https://github.com/Ashutosh-Neupane/ecommerce",
    },
  ];

  const companyProjects = [
    {
      title: "Tara Nepal",
      description:
        "Website for a local organization with focus on UI/UX design and responsive layout. Emphasizes clean design and user experience.",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React.js", "Chakra UI", "Responsive Design"],
      category: "Organization Website",
      githubUrl: "https://github.com/yourusername/tara-nepal",
      liveUrl: "https://tara-nepal.vercel.app",
    },
    {
      title: "Lungta Website",
      description:
        "Complete website solution designed and developed using modern React stack. Features contemporary design and smooth user interactions.",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React.js", "Next.js", "Modern UI", "Responsive Design"],
      category: "Business Website",
      githubUrl: "https://github.com/yourusername/lungta-website",
      liveUrl: "https://lungta-website.vercel.app",
    },
    {
      title: "Chadet Cosmetics",
      description:
        "A modern e-commerce platform for cosmetics with product listing, shopping cart, and checkout functionality. Built with Next.js and Chakra UI for optimal performance.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["Next.js", "Chakra UI", "Zustand", "React Query"],
      category: "E-commerce",
      githubUrl: "https://github.com/yourusername/chadet-cosmetics",
      liveUrl: "https://chadet-cosmetics.vercel.app",
    },
    {
      title: "Indu Groceries",
      description:
        "Online grocery ordering platform with responsive design and integrated cart system. Features payment simulation and user-friendly interface.",
      icon: <Store className="h-6 w-6" />,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "E-commerce",
      githubUrl: "https://github.com/yourusername/indu-groceries",
      liveUrl: "https://indu-groceries.vercel.app",
    },
    {
      title: "Hamaglobal Corporate Website",
      description:
        "Developed as part of a team at Dots and Dashes Technology Limited. Contributed to frontend components and API integrations for business functionality.",
      icon: <Building className="h-6 w-6" />,
      technologies: [
        "React.js",
        "Next.js",
        "API Integration",
        "Team Collaboration",
      ],
      category: "B2B Ecommerce",
    },
    {
      title: "Shiva Shakti POS Module",
      description:
        "Built a Point of Sale (POS) module during internship. Worked with React and API integrations for retail functionality and inventory management.",
      icon: <Briefcase className="h-6 w-6" />,
      technologies: [
        "React.js",
        "API Integration",
        "POS Systems",
        "Inventory Management",
      ],
      category: "Business Application",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "E-commerce": "bg-green-500/10 text-green-700 dark:text-green-300",
      "Real-time App": "bg-blue-500/10 text-blue-700 dark:text-blue-300",
      "Organization Website":
        "bg-purple-500/10 text-purple-700 dark:text-purple-300",
      "B2B Ecommerce":
        "bg-orange-500/10 text-orange-700 dark:text-orange-300",
      "Business Website": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
      "Business Application":
        "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-500/10 text-gray-700 dark:text-gray-300"
    );
  };

  const ProjectCard = ({
    project,
    showLinks = true,
  }: {
    project: any;
    showLinks?: boolean;
  }) => (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/30 border-0 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            {project.icon}
          </div>
          <Badge
            className={`text-xs font-semibold px-3 py-1 ${getCategoryColor(
              project.category
            )} border-0 shadow-sm`}
          >
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {project.description}
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="text-xs px-3 py-1  text-gray-800 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default border-0 shadow-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {showLinks && (
            <div className="flex gap-3 pt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 bg-transparent hover:bg-primary/5 hover:border-primary/50 hover:text-primary transition-all duration-300 group/btn"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Code
                </a>
              </Button>
              {/* <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg group/btn"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  Live Demo
                </a>
              </Button> */}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-secondary to-accent rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-8 animate-fade-in-delayed leading-relaxed">
            A curated showcase of my development journey, featuring both
            personal innovations and professional contributions at Dots and
            Dashes Technology Limited.
          </p>
        </div>

        <div className="mb-20">
          <div
            className="flex items-center justify-between mb-10 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl">
                <Briefcase className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Professional Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Work at Dots and Dashes Technology Limited
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 font-semibold"
              >
                <Building className="h-4 w-4 mr-2" />
                Internship
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companyProjects.map((project, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <ProjectCard project={project} showLinks={false} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-10 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Personal Projects</h3>
                <p className="text-muted-foreground text-sm">
                  Independent development work
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2 font-semibold"
              >
                <Users className="h-4 w-4 mr-2" />
                {personalProjects.length} Projects
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} showLinks={true} />
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Card className="max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-accent/5 via-background to-primary/5 border-0 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />

            <CardContent className="p-12 text-center relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl shadow-lg">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    More Projects Coming Soon
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full mt-2" />
                </div>
              </div>

              <p className="text-muted-foreground text-pretty text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm constantly exploring new technologies and building
                innovative solutions. Stay tuned for exciting projects featuring
                cutting-edge frameworks and creative implementations.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-muted/50 text-muted-foreground px-4 py-2 text-sm border-0">
                  🚀 Next.js 15
                </Badge>
                <Badge className="bg-muted/50 text-muted-foreground px-4 py-2 text-sm border-0">
                  ⚡ TypeScript
                </Badge>
                {/* <Badge className="bg-muted/50 text-muted-foreground px-4 py-2 text-sm border-0">
                  🎨 Three.js
                </Badge> */}
                <Badge className="bg-muted/50 text-muted-foreground px-4 py-2 text-sm border-0">
                  🤖 AI Integration
                </Badge>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3 text-base font-semibold"
              >
                <a
                  href="https://github.com/Ashutosh-Neupane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-3" />
                  Explore All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
