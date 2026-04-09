import SectionHeading from "../shared/SectionHeading";
import { User, Map, Target, Zap } from "lucide-react";
import { Dictionary } from "@/dictionaries";

export default function AboutStory({ dict }: { dict: Dictionary['about']['story'] }) {
  const icons = [
    <User key="u" className="w-6 h-6 text-primary-accent" />,
    <Map key="m" className="w-6 h-6 text-primary-accent" />,
    <Target key="t" className="w-6 h-6 text-primary-accent" />,
    <Zap key="z" className="w-6 h-6 text-primary-accent" />
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dict.sections.map((section, index) => (
          <div key={index} className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 flex flex-col hover:shadow-md transition-shadow">
            <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              {icons[index]}
            </div>
            <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-4">{section.title}</h2>
            <div className="space-y-4 text-secondary-text leading-relaxed">
              {section.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
