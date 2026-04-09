import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { Dictionary, Locale } from "@/dictionaries";

export default function ProjectList({ dict, locale }: { dict: Dictionary['projects'], locale: Locale }) {
  return (
    <div className="flex flex-col gap-24 pb-20 border-t border-border/50 pt-20">
      {dict.categories.map((category) => (
        <section key={category.title}>
          <SectionHeading title={category.title} className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project, index) => (
              <ProjectCard key={index} {...project} sourceLabel={dict.cta.button} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
