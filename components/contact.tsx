"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Heart,
  Coffee,
  Zap,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Message sent successfully!",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: data.error || "Something went wrong" });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-500" />,
      label: "Email",
      value: "neupaneashutosh68@gmail.com",
      href: "mailto:neupaneashutosh68@gmail.com",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Phone className="h-5 w-5 text-green-500" />,
      label: "Phone",
      value: "+977 9844646613",
      href: "tel:+9779844646613",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      label: "Location",
      value: "Gongabu, Kathmandu, Nepal",
      href: "#",
      bgColor: "bg-purple-500/10",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />,
      label: "GitHub",
      href: "https://github.com",
      username: "@ashutoshneupane",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashutosh-neupane-1b0264283/",
      username: "Ashutosh Neupane",
      bgColor: "bg-blue-600/10",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-secondary to-accent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-lg animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <div className="inline-block animate-slide-up">
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mt-8 animate-fade-in-delayed leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and build
            something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-2 space-y-6">
            {/* Quick Connect Card */}

            {/* Contact Methods */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up group shadow-md relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 relative z-10 flex items-center gap-4">
                    <div
                      className={`p-4 ${info.bgColor} rounded-2xl shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-base mb-1">{info.label}</p>
                      {info.href === "#" ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors hover:underline font-medium"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 shadow-lg relative overflow-hidden"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl shadow-lg">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Follow My Journey</h4>
                    <div className="h-0.5 w-20 bg-gradient-to-r from-secondary to-accent rounded-full mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-background/50 border-0 shadow-sm"
                    >
                      <CardContent className="p-4">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 hover:text-primary transition-colors"
                        >
                          <div
                            className={`p-3 ${social.bgColor} rounded-2xl shadow-md`}
                          >
                            {social.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-bold">{social.label}</p>
                            <p className="text-sm text-muted-foreground">
                              {social.username}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="xl:col-span-3">
            <Card
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border-0 bg-gradient-to-br from-background via-muted/10 to-background shadow-xl relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="pb-8 relative z-10">
                <CardTitle className="flex items-center gap-4 text-3xl">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-lg">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Send Me a Message
                    </span>
                    <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="text-sm font-bold flex items-center gap-2"
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ashutosh"
                        className="h-14 border-2 focus:border-primary/50 transition-all duration-300 bg-background/50 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold flex items-center gap-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ashutosh@example.com"
                        className="h-14 border-2 focus:border-primary/50 transition-all duration-300 bg-background/50 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="subject"
                      className="text-sm font-bold flex items-center gap-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Let's discuss your project"
                      className="h-14 border-2 focus:border-primary/50 transition-all duration-300 bg-background/50 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold flex items-center gap-2"
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, budget, or any specific requirements."
                      rows={6}
                      className="border-2 focus:border-primary/50 transition-all duration-300 resize-none bg-background/50 text-base leading-relaxed"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
                  >
                    <Send className="h-6 w-6 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl mt-5 transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Quick Connect</h3>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mt-1" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you need a developer for your next big project, want
                  to discuss collaboration opportunities, or just want to chat
                  about tech, I'm here to help.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <span>Always excited to work on new projects!</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Card
          className="max-w-5xl mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up bg-gradient-to-br from-secondary/5 via-background to-accent/5 border-0 shadow-xl relative overflow-hidden"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />

          <CardContent className="p-12 text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl shadow-lg">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <div>
                <h3 className="lg:text-4xl text-2xl  text-left font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Available for New Projects
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mx-auto" />
              </div>
            </div>

            <p className="text-muted-foreground text-pretty text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              I'm currently accepting new projects and exciting opportunities.
              Whether you need a full-stack developer, frontend specialist, or
              technical consultant, let's discuss how we can work together.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 rounded-full border border-green-500/20">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="font-semibold text-green-700 dark:text-green-300">
                  Available for Full-time
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-blue-500/20">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <span className="font-semibold text-blue-700 dark:text-blue-300">
                  Open to Freelance
                </span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-6 py-3 rounded-full border border-purple-500/20">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                <span className="font-semibold text-purple-700 dark:text-purple-300">
                  Remote Friendly
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span>Let's create something amazing together!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
