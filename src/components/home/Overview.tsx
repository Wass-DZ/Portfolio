import SectionHeading from "../shared/SectionHeading";
import { Brain, Terminal, Database } from "lucide-react";
import { Dictionary } from "@/dictionaries";

export default function Overview({ dict }: { dict: Dictionary['home']['overview'] }) {
  const icons = [
    <Brain key="ai" className="w-6 h-6 text-primary-accent" />,
    <Terminal key="sys" className="w-6 h-6 text-primary-accent" />,
    <Database key="data" className="w-6 h-6 text-primary-accent" />
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title={dict.title} />
      
      <p className="max-w-3xl text-lg text-secondary-text leading-relaxed mb-12">
        {dict.intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dict.cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 hover:shadow-md transition-shadow"
          >
            <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              {icons[index]}
            </div>
            <h3 className="text-xl font-semibold text-primary-text mb-3">
              {card.title}
            </h3>
            <p className="text-secondary-text leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
