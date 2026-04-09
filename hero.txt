import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { ArrowRight, Brain, Terminal, Database, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side: Text Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight">
              {siteData.name}
            </h1>
            <p className="text-xl font-medium text-primary-accent">
              {siteData.title}
            </p>
          </div>
          
          <p className="text-lg text-secondary-text leading-relaxed">
            Third-year Computer Science student at Grenoble Alpes University, building toward AI, Data, and Cloud through software development, machine learning, databases, and system-level problem solving. Alongside my technical background, I also bring experience in e-commerce, Meta Ads, and KPI analysis, with a strong interest in data-driven decision-making and performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <PrimaryButton as={Link} href="/projects">
              View Projects
            </PrimaryButton>
            <SecondaryButton as="a" href={siteData.cvPath} download>
              Download CV
            </SecondaryButton>
            <SecondaryButton as={Link} href="/contact">
              Contact Me
            </SecondaryButton>
          </div>
        </div>

        {/* Right side: Visual Area */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:mx-0 lg:ml-auto select-none">
          {/* A clean, scattered grid abstraction of cards to give that technical/developer feel */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
            
            <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-6 flex flex-col justify-between transform transition-transform hover:-translate-y-1">
              <Brain className="w-8 h-8 text-primary-accent mb-4" />
              <div>
                <h3 className="font-semibold text-primary-text tracking-tight">AI & Machine Learning</h3>
              </div>
            </div>

            <div className="bg-soft-accent-bg rounded-2xl border border-border shadow-soft p-6 flex flex-col justify-between transform transition-transform hover:-translate-y-1 translate-y-4">
              <Terminal className="w-8 h-8 text-primary-accent mb-4" />
              <div>
                <h3 className="font-semibold text-primary-text tracking-tight">Software & Systems</h3>
              </div>
            </div>

            <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-6 flex flex-col justify-between transform transition-transform hover:-translate-y-1 -translate-y-4">
              <Database className="w-8 h-8 text-primary-accent mb-4" />
              <div>
                <h3 className="font-semibold text-primary-text tracking-tight">Data & Cloud</h3>
              </div>
            </div>

            <div className="bg-primary-text dark:bg-slate-800 text-white rounded-2xl shadow-soft p-6 flex flex-col justify-between transform transition-transform hover:-translate-y-1">
              <div className="bg-white/10 w-fit p-2 rounded-lg mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-secondary-accent font-medium uppercase tracking-wider mb-1">Featured</p>
                <h3 className="font-semibold text-white tracking-tight">Mini-Shell in C</h3>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
