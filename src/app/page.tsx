import Image from 'next/image';
import { Header } from './components/MobileMenu';
import { BASE_PATH, SITE_URL, CONTACT_EMAIL, LINKEDIN_URL, LOCATION_URL, LOCATION } from '@/lib/config';

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans text-gray-700 antialiased">
      {/* Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:px-4 focus:py-2 focus:text-indigo-600 focus:z-50">
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
    <section id="hero" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Full Stack Software Developer</h1>
        <p className="text-xl mb-8">
          Specializing in full-stack development, scalable backend architecture, cloud infrastructure, and AI-driven web applications.
        </p>
        <a 
          href="#projects" 
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-700"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <Image 
              src={`${BASE_PATH}/images/hero-1.jpg`}
              alt="Jack Dong, Software Engineer" 
              width={320} 
              height={320} 
              className="rounded-full mx-auto shadow-lg animate-fade-in-scale"
            />
          </div>
          <div className="md:w-1/2 text-left bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg mb-6">
              I&apos;m Jack Dong, a Software Engineer with 10+ years of experience in full-stack development, scalable backend architecture, 
              cloud infrastructure, and leveraging AI for web applications to deliver innovative, robust solutions that enhance user 
              experiences and drive business efficiency.
            </p>
            <p className="text-lg">Located in {LOCATION}.</p>
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
      overview: "Architected a scalable CMS for a gaming and video streaming platform, supporting 1M+ users with seamless content delivery.",
      technologies: "Node.js, Python, MongoDB, MySQL, Redis, AWS (EC2, S3), React, Jenkins, GitLab CI/CD.",
      solutions: "Built a full-stack CMS with Node.js, Python, MongoDB/MySQL, and React, deployed via Jenkins/GitLab CI/CD on AWS to handle high traffic and integrate with legacy systems.",
      outcomes: "Reduced content update time by 35% and achieved 99.9% uptime, enhancing user experience for global audiences.",
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
      technologies: "Node.js, AWS (Beanstalk, EC2, S3), MongoDB, Redis.",
      solutions: "Implemented auto-scaling and caching with Redis and Beanstalk to reduce latency in video uploads during peak usage, with real-time progress updates via messaging.",
      outcomes: "Cut video delivery time by 40% and server load by 25%, enhancing real-time content updates.",
    },
    {
      title: "Automated CI/CD Pipeline for Game and Video Streaming Platform",
      company: "airG (Global Gaming and Video Platform)",
      overview: "Designed a CI/CD pipeline for a high-traffic video streaming platform serving 1M+ users.",
      technologies: "Docker, Jenkins, GitLab, AWS (EC2, S3, CloudFront), Node.js, Python.",
      solutions: "Automated deployments with Jenkins, Docker, and GitLab, hosted on AWS, with automated testing and rollback mechanisms to eliminate manual errors.",
      outcomes: "Reduced deployment time by 40% and achieved zero-downtime releases, enabling faster feature rollouts.",
    },
    {
      title: "AI-Driven Code Generation for Web Applications",
      company: "Outlier (AI Training Platform)",
      overview: "Trained generative AI models via prompt engineering to auto-generate production-ready full-stack web apps with clean React/Next.js codebases.",
      technologies: "Next.js, React, TypeScript, JavaScript, AI Prompt Engineering (Grok and Claude-based models).",
      solutions: "Refined prompts for AI models to produce functional, maintainable React/Next.js code, with evaluation pipelines ensuring Fortune 500-grade UI/UX.",
      outcomes: "Delivered production-ready apps, reducing manual coding time by 30% while meeting enterprise standards.",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project Portfolio</h2>
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
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-4"><strong>Company:</strong> {project.company}</p>
      <p className="mb-2"><strong>Overview:</strong> {project.overview}</p>
      <p className="mb-2"><strong>Technologies:</strong> {project.technologies}</p>
      <p className="mb-2"><strong>Solutions:</strong> {project.solutions}</p>
      <p className="mb-4"><strong>Outcomes:</strong> {project.outcomes}</p>
      {project.links && (
        <>
          <p className="mb-4"><strong>Explore the Live Platform:</strong></p>
          <div className="grid grid-cols-2 gap-2 text-center">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-100 transition-colors font-medium"
              >
                {link.name}
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
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
    "AWS", "MongoDB", "SQL", "Redis", "CI/CD", "AI Development"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 text-gray-700 p-4 rounded-lg text-center shadow">
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
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="text-lg w-fit mx-auto text-left mb-8">
          <p className="mb-2">
            <a 
              href={LOCATION_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-indigo-600"
            >
              <i className="fa-solid fa-location-dot text-2xl" aria-hidden="true"></i> {LOCATION}
            </a>
          </p>
          <p className="mb-2">
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gray-700 hover:text-indigo-600"
            >
              <i className="fa-solid fa-envelope text-2xl" aria-hidden="true"></i> {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mb-2">
            <a 
              href={LINKEDIN_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-indigo-600"
            >
              <i className="fa-brands fa-linkedin text-2xl" aria-hidden="true"></i> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Jack Dong. All rights reserved.</p>
      </div>
    </footer>
  );
}