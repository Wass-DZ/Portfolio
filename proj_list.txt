import SectionHeading from "../shared/SectionHeading";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export default function ProjectList() {
  const categories: { title: string; projects: ProjectCardProps[] }[] = [
    {
      title: "Systems & Software",
      projects: [
        {
          title: "Mini-Shell in C",
          label: "Academic Project",
          summary: "A Unix mini-shell built in C that supports process execution, redirections, pipes, background tasks, and signal handling.",
          techStack: ["C", "Unix/Linux"],
          githubUrl: "https://github.com/Wass-DZ/SHELL",
        },
        {
          title: "FTP Server-Client in C",
          label: "Academic Project",
          summary: "A client-server file transfer application implemented in C, designed to manage communication between a server and remote clients.",
          techStack: ["C", "Sockets", "Networking"],
        },
        {
          title: "Sokoban Game in Java",
          label: "Academic Project",
          summary: "A Java implementation of the Sokoban game focused on object-oriented design, game logic, and interactive behavior.",
          techStack: ["Java"],
        },
      ],
    },
    {
      title: "Data & Databases",
      projects: [
        {
          title: "Olympic Games Database Management",
          label: "Academic Project",
          summary: "A database management project built with Python and SQL to organize, query, and analyze data for an Olympic-style competition system.",
          techStack: ["Python", "SQL"],
          githubUrl: "https://github.com/Wass-DZ/CEBD_Project",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      projects: [
        {
          title: "Spam Classification",
          label: "Academic Project",
          summary: "A machine learning project for spam detection using text preprocessing, feature extraction, and supervised classification methods.",
          techStack: ["Python", "Machine Learning"],
        },
        {
          title: "Multi-Layer Perceptron",
          label: "Academic Project",
          summary: "A neural network project implemented in Python to explore multi-layer perceptrons and supervised learning fundamentals.",
          techStack: ["Python"],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-20 border-t border-border/50 pt-20">
      {categories.map((category) => (
        <section key={category.title}>
          <SectionHeading title={category.title} className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
