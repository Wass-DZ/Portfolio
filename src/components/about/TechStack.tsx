import SectionHeading from "../shared/SectionHeading";
import Tag from "../shared/Tag";
import { Code, Database, Wrench, Globe2 } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-primary-accent" />,
      items: ["C", "Java", "Python", "SQL", "HTML/CSS", "Bash"]
    },
    {
      title: "Core Areas",
      icon: <Database className="w-5 h-5 text-primary-accent" />,
      items: ["Machine Learning", "Databases", "Systems Programming", "Algorithms", "Unix/Linux", "Networking"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-primary-accent" />,
      items: ["Git/GitHub", "SQLite", "pandas", "scikit-learn", "openpyxl", "VS Code", "IntelliJ IDEA"]
    }
  ];

  const languages = ["Arabic", "French", "English", "Polish"];

  return (
    <section className="py-20 border-t border-border/50">
      
      <div className="mb-16">
        <SectionHeading title="Tools & Technologies" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-muted-section-bg rounded-xl border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cards-surface p-2 rounded-lg border border-border shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-primary-text">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Tag key={item} className="bg-cards-surface">{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeading title="Languages" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <div key={lang} className="bg-cards-surface rounded-xl border border-border shadow-soft p-4 flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-primary-accent" />
              <span className="font-medium text-primary-text">{lang}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
