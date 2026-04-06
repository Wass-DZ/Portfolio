import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Wassim Fritah",
  description: "Practical experience in digital marketing and e-commerce, with a strong focus on campaign performance, testing, analytics, and business-oriented decision-making.",
};

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ExperienceHero />
      <ExperienceDetails />
      <ExperienceCTA />
    </div>
  );
}
