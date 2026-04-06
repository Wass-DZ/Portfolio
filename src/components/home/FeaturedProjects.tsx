import SectionHeading from "../shared/SectionHeading";
import Tag from "../shared/Tag";
import SecondaryButton from "../shared/SecondaryButton";
import Link from "next/link";
import { Github } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      label: "Academic Project",
      title: "Mini-Shell in C",
      summary: "A Unix mini-shell built in C that supports process execution, redirections, pipes, background tasks, and signal handling.",
      techStack: ["C", "Unix/Linux"],
      githubUrl: "https://github.com/Wass-DZ/SHELL",
    },
    {
      label: "Academic Project",
      title: "Spam Classification",
      summary: "A machine learning project for spam detection using text preprocessing, feature extraction, and supervised classification methods.",
      techStack: ["Python", "Machine Learning"],
      githubUrl: undefined, 
    },
    {
      label: "Academic Project",
      title: "Olympic Games Database Management",
      summary: "A database management project built with Python and SQL to organize, query, and analyze data for an Olympic-style competition system.",
      techStack: ["Python", "SQL"],
      githubUrl: "https://github.com/Wass-DZ/CEBD_Project",
    },
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title="Featured Projects" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-cards-surface rounded-2xl border border-border shadow-soft p-8 transition-all hover:shadow-md hover:border-primary-accent/30"
          >
            <div className="mb-4">
              <Tag>{project.label}</Tag>
            </div>
            
            <h3 className="text-2xl font-bold text-primary-text mb-3">
              {project.title}
            </h3>
            
            <p className="text-secondary-text leading-relaxed flex-grow mb-6">
              {project.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary-accent bg-soft-accent-bg px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-text hover:text-primary-accent transition-colors w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <span>View Source</span>
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <SecondaryButton as={Link} href="/projects">
          See All Projects
        </SecondaryButton>
      </div>
    </section>
  );
}
