"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Database,
  Wrench,
  Globe,
  Zap,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code />,
      skills: [
        { name: "React.js", experience: "Advanced", years: "2+ years" },
        { name: "Next.js", experience: "Advanced", years: "1+ years" },
        { name: "TypeScript", experience: "Intermediate", years: "1+ years" },
        { name: "JavaScript", experience: "Advanced", years: "2+ years" },
        { name: "Chakra UI", experience: "Advanced", years: "1+ years" },
        { name: "Zustand", experience: "Intermediate", years: "6+ months" },
        { name: "React Query", experience: "Intermediate", years: "6+ months" },
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      title: "Backend",
      icon: <Database />,
      skills: [
        { name: "Node.js", experience: "Advanced", years: "1+ years" },
        { name: "Express.js", experience: "Intermediate", years: "1+ years" },
        { name: "MongoDB", experience: "Intermediate", years: "1+ years" },
        { name: "API Development", experience: "Advanced", years: "1+ years" },
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      textColor: "text-green-700 dark:text-green-300",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench />,
      skills: [
        { name: "GitHub", experience: "Advanced", years: "2+ years" },
        { name: "VS Code", experience: "Advanced", years: "2+ years" },
        { name: "NPM", experience: "Advanced", years: "2+ years" },
        { name: "Git", experience: "Advanced", years: "2+ years" },
        {
          name: "Agile Practices",
          experience: "Intermediate",
          years: "6+ months",
        },
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      title: "Web Technologies",
      icon: <Globe />,
      skills: [
        {
          name: "Responsive Design",
          experience: "Advanced",
          years: "2+ years",
        },
        { name: "UI/UX", experience: "Intermediate", years: "1+ years" },
        { name: "RESTful APIs", experience: "Advanced", years: "1+ years" },
        {
          name: "Real-time Apps",
          experience: "Intermediate",
          years: "6+ months",
        },
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-700 dark:text-orange-300",
    },
  ];

  const getExperienceLevel = (experience: string) => {
    switch (experience) {
      case "Advanced":
        return {
          stars: 3,
          badge:
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
          text: "Advanced",
        };
      case "Intermediate":
        return {
          stars: 2,
          badge:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
          text: "Intermediate",
        };
      default:
        return {
          stars: 1,
          badge:
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
          text: "Beginner",
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
              Technical Skills
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-6 animate-fade-in-delayed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-slide-up border-0 bg-gradient-to-br from-background to-muted/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4">
                  <div
                    className={`p-3 ${category.bgColor} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center`}
                  >
                    {React.cloneElement(category.icon, {
                      className: `h-6 w-6 ${category.color}`,
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const experienceLevel = getExperienceLevel(skill.experience);
                  return (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group/skill"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(3)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`h-3 w-3 ${
                                starIndex < experienceLevel.stars
                                  ? `text-yellow-500 fill-yellow-500`
                                  : `text-muted-foreground/30`
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {skill.years}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${experienceLevel.badge}`}
                        >
                          {experienceLevel.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-slide-up bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Always Learning</h3>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                I'm constantly exploring new technologies and frameworks to stay
                current with industry trends. Currently interested in learning
                more about cloud platforms, DevOps practices, and advanced React
                patterns.
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-slide-up bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Next Goals</h3>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Expanding into cloud technologies like AWS, exploring
                microservices architecture, and diving deeper into performance
                optimization and accessibility best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
