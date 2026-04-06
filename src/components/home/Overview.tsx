import SectionHeading from "../shared/SectionHeading";
import { Brain, Terminal, Database } from "lucide-react";

export default function Overview() {
  const cards = [
    {
      title: "AI & Machine Learning",
      description: "Machine learning, neural networks, text classification, experimentation",
      icon: <Brain className="w-6 h-6 text-primary-accent" />,
    },
    {
      title: "Software & Systems",
      description: "C, Java, Python, Unix systems, networking, software projects",
      icon: <Terminal className="w-6 h-6 text-primary-accent" />,
    },
    {
      title: "Data & Cloud",
      description: "SQL, database design, structured analysis, cloud-oriented growth",
      icon: <Database className="w-6 h-6 text-primary-accent" />,
    },
  ];

  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title="A Quick Overview" />
      
      <p className="max-w-3xl text-lg text-secondary-text leading-relaxed mb-12">
        I am a third-year Computer Science student based in Grenoble, with academic and hands-on experience in software engineering, machine learning, databases, systems programming, and problem solving. My background also includes e-commerce management and performance marketing, which helped me develop an analytical mindset focused on results, metrics, and continuous improvement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 hover:shadow-md transition-shadow"
          >
            <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              {card.icon}
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
