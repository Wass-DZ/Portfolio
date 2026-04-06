import SectionHeading from "../shared/SectionHeading";
import Tag from "../shared/Tag";
import { CheckCircle2, TrendingUp, BarChart } from "lucide-react";

export default function ExperienceDetails() {
  const responsibilities = [
    "Product research and competitor analysis",
    "E-commerce store setup and monitoring",
    "Google Analytics performance analysis",
    "Landing page optimization",
    "Creative production and testing",
    "Meta Ads campaign creation and management",
    "KPI tracking and performance reporting",
    "Campaign testing and scaling",
    "Management of multiple campaigns and budgets",
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Experience Role Block (Left column on desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8">
            <div className="mb-4">
              <Tag>Freelance & Personal Projects</Tag>
            </div>
            
            <h2 className="text-2xl font-bold text-primary-text mb-2">
              Freelance Digital Marketing & E-commerce Manager
            </h2>
            <p className="text-primary-accent font-medium mb-6">
              Mixed experience — personal projects and freelance collaboration
            </p>

            <div className="space-y-4 text-secondary-text leading-relaxed">
              <p>
                I worked on a range of e-commerce and digital marketing tasks, including product research, competitor analysis, store setup, landing page optimization, campaign creation, creative testing, KPI tracking, and campaign scaling. I also used Google Analytics to analyze store performance and user behavior, helping guide decisions through data rather than assumptions.
              </p>
              <p>
                Through this work, I developed a practical understanding of how to improve click-through rates, conversions, and overall campaign efficiency by testing audiences, creatives, and campaign structures, then making continuous adjustments based on performance.
              </p>
            </div>
          </div>

          <div className="bg-soft-accent-bg rounded-2xl border border-border/50 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
              <TrendingUp className="w-6 h-6 text-primary-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-text mb-3">
                What This Experience Strengthened
              </h3>
              <p className="text-secondary-text leading-relaxed">
                This experience taught me to think in terms of measurable impact, structured experimentation, and data-driven decision-making. It also gave me a stronger understanding of user behavior, performance analysis, and optimization, which naturally complements my technical profile and my interest in AI, Data, and Cloud.
              </p>
            </div>
          </div>
        </div>

        {/* Key Responsibilities Block (Right column on desktop) */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 bg-muted-section-bg rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="w-6 h-6 text-primary-accent" />
              <h3 className="text-xl font-bold text-primary-text tracking-tight">
                Key Responsibilities
              </h3>
            </div>
            
            <ul className="flex flex-col gap-4">
              {responsibilities.map((task, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-accent shrink-0 mt-0.5" />
                  <span className="text-primary-text font-medium leading-relaxed">
                    {task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
