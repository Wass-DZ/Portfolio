import Tag from "../shared/Tag";
import { Github } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  label: string;
  summary: string;
  techStack: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  label,
  summary,
  techStack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-cards-surface rounded-2xl border border-border shadow-soft p-8 transition-all hover:shadow-md hover:border-primary-accent/30 h-full">
      <div className="mb-4">
        <Tag>{label}</Tag>
      </div>

      <h3 className="text-2xl font-bold text-primary-text mb-3">{title}</h3>

      <p className="text-secondary-text leading-relaxed flex-grow mb-6">
        {summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm font-medium text-primary-accent bg-soft-accent-bg px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-text hover:text-primary-accent transition-colors w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          <span>View Source</span>
        </a>
      )}
    </div>
  );
}
