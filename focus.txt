import SectionHeading from "../shared/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function FocusAreas() {
  const areas = [
    "AI and machine learning fundamentals",
    "Data modeling, SQL, and analytical systems",
    "Software and systems programming",
    "Cloud-oriented technical growth",
    "Performance-driven marketing and e-commerce analysis",
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title="What I Work On" />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-5 bg-muted-section-bg rounded-xl border border-border/50"
          >
            <CheckCircle2 className="w-6 h-6 text-primary-accent shrink-0 mt-0.5" />
            <span className="text-primary-text font-medium leading-relaxed">
              {area}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
