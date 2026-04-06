import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import TechStack from "@/components/about/TechStack";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wassim Fritah",
  description: "A brief introduction to my background, technical interests, and the path I’m building toward in AI, Data, and Cloud engineering.",
};

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutHero />
      <AboutStory />
      <TechStack />
      <AboutCTA />
    </div>
  );
}
