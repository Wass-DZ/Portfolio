import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FocusAreas from "@/components/home/FocusAreas";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ContactCTA from "@/components/home/ContactCTA";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteData.name} | Portfolio`,
  description: siteData.title,
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Overview />
      <FeaturedProjects />
      <FocusAreas />
      <ExperiencePreview />
      <ContactCTA />
    </div>
  );
}
