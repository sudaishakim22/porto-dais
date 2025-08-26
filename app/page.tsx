"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function MinimalPortfolio() {
  // const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Profesea.id",
      category: "Web Development",
      description:
        "A maritime career platform connecting seafarers with job opportunities, training, and professional certification across Indonesia’s maritime industry",
      image:
        "https://ik.imagekit.io/gurilaps/profesea-home.png?updatedAt=1753891918392",
      tags: ["React", "TypeScript", "NextJs"],
      url: "https://profesea.id",
      // year: "2024",
    },
    {
      id: 2,
      title: "Learning Experience Platform (Inspigo for business)",
      category: "Web Development",
      description:
        "Inspigo for Business is a corporate learning platform designed to support employee soft-skill development through thousands of micro-learning contents, personalized learning paths, and engaging gamification features.",
      image: "https://ik.imagekit.io/gurilaps/ifb.png?updatedAt=1753893827818",
      tags: ["Next.js", "ExpressJs", "NestJs"],
      url: "https://www.inspigoforbusiness.id/index.html",
      // year: "2023",
    },
    {
      id: 3,
      title:
        "ezFiles: AI-Based Online Tool for Media & Document File Optimization",
      category: "Web Development",
      description:
        "ezFiles is an AI-powered online platform that helps users compress, convert, and optimize media & document files with ease. It provides a fast, secure, and 100% free solution for efficient file processing.",
      image:
        "https://ik.imagekit.io/gurilaps/image.png?updatedAt=1756215428554",
      tags: ["Next.js", "TailwindCSS", "ShadCN", "React Query", "Zustand"],
      url: "https://ezfiles.ai/",
      // year: "2025",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "NestJs", level: 70 },
    { name: "Tailwind", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wide">
              Muhammad Sudais Hakim
            </div>
            {/* <div className="hidden md:flex space-x-8">
              {["Home", "About", "Work", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-black border-b border-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">
                  Fullstack Developer
                </p>
                <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
                  Crafting
                  <br />
                  <span className="italic">Digital</span>
                  <br />
                  Experiences
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I am a Fullstack Developer with a strong passion for learning
                  and a drive to create elegant and functional digital
                  solutions. With over 3 years of experience in the tech
                  industry, I am continuously developing my skills and striving
                  to deliver impactful results.
                </p>
                <div className="flex items-center space-x-6">
                  <Button
                    onClick={() => {
                      projectSectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sudaishakim22?tab=repositories"
                      className="text-gray-400 hover:text-black transition-colors"
                      target="_blank"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://id.linkedin.com/in/sudaishakim"
                      className="text-gray-400 hover:text-black transition-colors"
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/gurilaps/photolinkedin.jpeg?updatedAt=1753890756014"
                    alt="Workspace"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Skills & Expertise</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I have expertise in various modern technologies and always keep
                up with the latest developments in the tech world.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-black h-1 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Information System, S1</h4>
                    <p className="text-gray-600">
                      Universitas Indonesia • 2017-2021
                    </p>
                  </div>
                </div>
              </div>
              {/* <div>
                <h3 className="text-xl font-medium mb-4">Certifications</h3>
                <div className="space-y-2">
                  <Badge variant="outline">AWS Certified Developer</Badge>
                  <Badge variant="outline">Google Cloud Professional</Badge>
                  <Badge variant="outline">Meta React Specialist</Badge>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectSectionRef} className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Selected Work</h2>
            <p className="text-gray-600">
              Some of the projects I have worked on with passion and dedication.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                    {/* <span className="text-sm text-gray-500">
                      {project.year || '-'}
                    </span> */}
                  </div>
                  <h3 className="text-2xl font-light mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {/* <Button variant="ghost" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button> */}
                    {project.url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (project.url) {
                            window.open(
                              project.url,
                              "_blank" // <- This is what makes it open in a new window.
                            );
                          }
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light mb-8">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            I’m always open to new projects and exciting collaborations. Let’s
            discuss your ideas and bring them to life together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-gray-400" />
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <p>sudaishakim@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-gray-400" />
              <p className="text-sm text-gray-400 mb-2">Phone</p>
              <p>+62 812 106 24925</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-gray-400" />
              <p className="text-sm text-gray-400 mb-2">Location</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>

          {/* <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 transition-colors"
          >
            Start a Project
          </Button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Muhammad Sudais Hakim. Designed & Developed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
