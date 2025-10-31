"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Header } from './components/MobileMenu';
import { BASE_PATH, CONTACT_EMAIL, LINKEDIN_URL, LOCATION_URL, LOCATION } from '@/lib/config';

export default function Home() {
  return (
    <div className="bg-bgLight text-gray-800 antialiased">
      {/* Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:z-50">
        Skip to main content
      </a>

      {/* Header */}
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-bgDark via-bgDarkAlt to-bgPurpleDark text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-hero">
          Full Stack Software Developer
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Specializing in full-stack development, scalable backend architecture, cloud infrastructure, and AI-driven web applications.
        </p>
        <a 
          href="#projects" 
          className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 smooth-hover shadow-lg hover:shadow-xl hover:scale-105 font-semibold focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          View Portfolio
          <span className="group-hover:translate-x-1 smooth-hover">→</span>
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const currentImage = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple to-pink rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <Image
              ref={imageRef}
              src={`${BASE_PATH}/images/hero-1.jpg`}
              alt="Jack Dong, Software Engineer"
              width={320}
              height={320}
              className={`relative rounded-full mx-auto shadow-2xl ${
                isVisible ? 'md:animate-slide-in-left animate-slide-in-left' : 'opacity-0'
              }`}
            />
          </div>
          <div className="md:w-1/2 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl smooth-hover border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-700">
                I&apos;m <span className="font-semibold text-gradient-primary">Jack Dong</span>, a Software Engineer with 10+ years of experience in full-stack development, scalable backend architecture,
                cloud infrastructure, and leveraging AI for web applications to deliver innovative, robust solutions that enhance user
                experiences and drive business efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Game and Video Content Management Platform",
      company: "airG (Global Gaming and Video Platform)",
      overview: "Architected Content Management System (CMS) for gaming and video streaming platform, supporting 1M+ users with seamless content delivery.",
      technologies: "Node.js, Python, MongoDB, MySQL, Redis, AWS (EC2, S3), React, Jenkins, GitLab CI/CD.",
      solutions: "Built scalable full-stack CMS with Node.js, Python, MongoDB/MySQL, and React, integrating microservices; deployed via Jenkins/GitLab CI/CD on AWS to handle high traffic.",
      outcomes: "Provided end-to-end solution that reduced content update time by 35% and achieved 99.9% uptime, enhancing user experience for global audiences.",
      links: [
        { name: "KittySnatch", url: "https://kittysnatch.com" },
        { name: "Unlimited Gamez", url: "https://unlimitedgamez.com" },
        { name: "PFL", url: "https://watchpfl.com" },
        { name: "QuickClips", url: "https://quickclipstv.com" },
      ],
    },
    {
      title: "Backend Automation for Video Processing and Scalability",
      company: "airG (Video Streaming Service)",
      overview: "Automated video post-processing workflows for a streaming service, optimizing file processing and uploads to AWS S3.",
      technologies: "Node.js, AWS (EC2, S3), Beanstalk, MongoDB, Redis.",
      solutions: "Implemented microservices, auto-scaling, and caching with Redis and Beanstalk to reduce latency in video uploads during peak usage and real-time progress updates.",
      outcomes: "Cut video delivery time by 40% and server load by 25%, enhancing real-time content updates.",
    },
    {
      title: "Automated CI/CD Pipeline and Workflow",
      company: "airG (Global Gaming and Video Platform)",
      overview: "Designed a CI/CD pipeline for a high-traffic gaming and video streaming platform serving 1M+ users.",
      technologies: "Docker, Jenkins, GitLab, AWS (EC2, S3, CloudFront), Node.js, Python.",
      solutions: "Automated deployments with Jenkins, Docker, and GitLab, hosted on AWS, with automated testing and rollback mechanisms to eliminate manual errors.",
      outcomes: "Reduced deployment time by 40% and achieved zero-downtime releases, enabling faster feature rollouts.",
    },
    {
      title: "AI-Driven Development for Web Applications",
      company: "Outlier (AI Training Platform)",
      overview: "Trained generative AI models via prompt engineering to auto-generate production-ready full-stack web apps with clean React/Next.js codebases.",
      technologies: "Next.js, React, TypeScript, JavaScript, AI Prompt Engineering (Grok and Claude-based models).",
      solutions: "Refined prompts for AI models to produce functional, maintainable React/Next.js code, with evaluation pipelines ensuring Fortune 500-grade UI/UX.",
      outcomes: "Delivered production-ready apps, reducing manual coding time by 30% while meeting enterprise standards.",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Project Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  company: string;
  overview: string;
  technologies: string;
  solutions: string;
  outcomes: string;
  links?: Array<{ name: string; url: string }>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl smooth-hover border border-gray-200">  
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary smooth-hover">
        {project.title}
      </h3>
      <p className="mb-4 text-sm font-semibold text-primary"> {project.company}</p>
      <p className="mb-2 text-gray-700"><strong>Overview:</strong> {project.overview}</p>
      <p className="mb-2 text-gray-700"><strong>Technologies:</strong> {project.technologies}</p>
      <p className="mb-2 text-gray-700"><strong>Solutions:</strong> {project.solutions}</p>
      <p className="mb-4 text-gray-700"><strong>Outcomes:</strong> {project.outcomes}</p>
      {project.links && (
        <>
          <p className="mb-4 font-semibold text-gray-900">Explore the Live Sites:</p>
          <div className="grid grid-cols-2 gap-3">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap justify-center items-center gap-2 bg-indigo-50 text-primary px-3 py-2.5 rounded-lg hover:bg-indigo-100 smooth-hover font-medium hover:scale-105 shadow-sm"
              >
                <div className="text-center">{link.name} <FaExternalLinkAlt className="inline align-middle -translate-y-0.5 text-xs" aria-hidden="true" /></div>
              </a>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

function SkillsSection() {
  const skills = [
    "Python", "Node.js", "React", "Next.js", "TypeScript", "JavaScript",
    "AWS", "MongoDB", "SQL", "Redis", "CI/CD", "AI Coding"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-bgDark via-bgDarkAlt to-bgPurpleDark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-gradient-hero">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-wrap justify-center items-center bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl text-center shadow-lg hover:shadow-2xl hover:bg-white/20 smooth-hover hover:scale-105 border border-white/20 font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-start gap-6 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl smooth-hover border border-gray-200">
            <a 
              href={LOCATION_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-gray-700 hover:text-primary smooth-hover group rounded-lg"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full group-hover:scale-110 smooth-hover">
                <FaLocationDot className="text-2xl text-primary" aria-hidden="true"/>
              </div>
              <span className="text-lg font-medium">{LOCATION}</span>
            </a>
            
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 text-gray-700 hover:text-primary smooth-hover group rounded-lg"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full group-hover:scale-110 smooth-hover">
                <MdEmail className="text-2xl text-primary" aria-hidden="true"/>
              </div>
              <span className="text-lg font-medium break-all">{CONTACT_EMAIL}</span>
            </a>
            
            <a 
              href={LINKEDIN_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-gray-700 hover:text-primary smooth-hover group rounded-lg"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full group-hover:scale-110 smooth-hover">
                <FaLinkedin className="text-2xl text-primary" aria-hidden="true"/>
              </div>
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-bgDark via-bgDarkAlt to-bgPurpleDark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">&copy; 2025 Jack Dong. All rights reserved.</p>
      </div>
    </footer>
  );
}