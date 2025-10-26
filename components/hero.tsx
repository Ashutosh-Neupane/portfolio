"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora background */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl animate-aurora"></div>

        {/* Morphing background blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 animate-morph blur-2xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 animate-morph blur-2xl delay-1000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-particle delay-100"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary/60 rounded-full animate-particle delay-500"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-particle delay-800"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-secondary/50 rounded-full animate-particle delay-1200"></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-primary/20 rounded-full animate-particle delay-1500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="flex justify-center mb-8 animate-bounce-in">
            <div className="relative group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 animate-glow">
                <div className="text-4xl sm:text-5xl font-bold text-primary/60 animate-shimmer">AN</div>
                {/* Placeholder for actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-balance animate-slide-up">
              Hi, I'm{" "}
              <span className=" bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Ashutosh Neupane
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance animate-slide-up delay-200">
              Full-Stack Web Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up delay-400">
              Final-year Computer Science student passionate about building responsive, user-friendly, and scalable web
              applications using the MERN stack and modern frameworks like Next.js.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-600">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group hover:scale-105 transition-all duration-300 animate-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform bg-transparent animate-slide-in-left delay-700"
              >
                <a href="https://github.com/Ashutosh-Neupane" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform bg-transparent animate-slide-in-left delay-800"
              >
                <a href="https://www.linkedin.com/in/ashutosh-neupane-1b0264283" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform bg-transparent animate-slide-in-left delay-900"
              >
                <a href="mailto:neupaneashutosh68@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid  grid-cols-2 gap-8 mt-20 pt-8 border-t border-border/50">
            <div className="text-center group hover:scale-105 transition-transform animate-slide-in-left delay-1000">
              <div className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors animate-shimmer">
                8+
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform animate-slide-in-right delay-1200">
              <div className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors animate-shimmer">
                5+
              </div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
