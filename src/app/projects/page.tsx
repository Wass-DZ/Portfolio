import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectList from "@/components/projects/ProjectList";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Wassim Fritah",
  description: "A selection of academic and personal projects covering systems programming, software development, databases, and machine learning.",
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectsHero />
      <ProjectList />
      <ProjectsCTA />
    </div>
  );
}
