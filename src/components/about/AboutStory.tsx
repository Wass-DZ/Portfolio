import SectionHeading from "../shared/SectionHeading";
import { User, Map, Target, Zap } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Section 1: About Me */}
        <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 flex flex-col hover:shadow-md transition-shadow">
          <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <User className="w-6 h-6 text-primary-accent" />
          </div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-4">About Me</h2>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              I’m Wassim Fritah, a third-year Computer Science student at Grenoble Alpes University, currently building my path toward AI, Data, and Cloud engineering. My background combines software development, systems programming, machine learning, databases, and analytical problem solving, with additional hands-on experience in e-commerce and performance marketing.
            </p>
            <p>
              I enjoy understanding how systems work at both the technical and practical levels, whether that means building software in C and Java, designing databases with SQL and Python, or developing machine learning models on real datasets. What motivates me most is solving problems in a structured way and continuously improving through learning, experimentation, and practice.
            </p>
          </div>
        </div>

        {/* Section 2: My Background */}
        <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 flex flex-col hover:shadow-md transition-shadow">
          <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Map className="w-6 h-6 text-primary-accent" />
          </div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-4">My Background</h2>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              My academic journey has taken me through Algeria, Poland, and France, which helped me become adaptable, curious, and comfortable with new challenges. Over time, I have built a solid foundation in algorithms, software engineering, databases, systems and networks, machine learning, and computer architecture.
            </p>
            <p>
              Studying in different environments has strengthened both my technical discipline and my ability to learn quickly, adjust to new contexts, and keep progressing with consistency.
            </p>
          </div>
        </div>

        {/* Section 3: What I'm Focusing On */}
        <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 flex flex-col hover:shadow-md transition-shadow">
          <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-primary-accent" />
          </div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-4">What I’m Focusing On</h2>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              I am currently focused on strengthening my skills in AI, Data, Software, and cloud-oriented technologies. I’m especially interested in opportunities where I can apply technical knowledge to real problems, deepen my engineering foundations, and continue growing through hands-on work.
            </p>
            <p>
              I also value analytical thinking, performance measurement, and data-driven decision-making, which I developed further through my experience in e-commerce and marketing.
            </p>
          </div>
        </div>

        {/* Section 4: What Makes My Profile Different */}
        <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-8 flex flex-col hover:shadow-md transition-shadow">
          <div className="bg-soft-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-primary-accent" />
          </div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-4">What Makes My Profile Different</h2>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              What makes my profile unique is the combination of technical training and performance-oriented business experience.
            </p>
            <p>
              Alongside my studies in computer science, I have also worked in e-commerce and Meta Ads campaign management, where I focused on product research, landing page optimization, campaign testing, and KPI analysis. This experience taught me how to think in terms of results, metrics, iteration, and measurable impact.
            </p>
            <p>
              As a result, I do not only enjoy building technical solutions — I also care about how they perform, how they are evaluated, and how they create value.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
