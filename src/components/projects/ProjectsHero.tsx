import { Dictionary } from "@/dictionaries";

export default function ProjectsHero({ dict }: { dict: Dictionary['projects']['hero'] }) {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary-text tracking-tight mb-6">
          {dict.title}
        </h1>
        <p className="text-xl text-primary-accent font-medium leading-relaxed mb-6">
          {dict.subtitle}
        </p>
        <p className="text-lg text-secondary-text leading-relaxed">
          {dict.intro}
        </p>
      </div>
    </section>
  );
}
