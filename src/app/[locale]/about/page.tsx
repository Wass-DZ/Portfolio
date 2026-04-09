import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import TechStack from "@/components/about/TechStack";
import AboutCTA from "@/components/about/AboutCTA";
import { getDictionary, Locale } from "@/dictionaries";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `${dict.nav.about} | ${siteData.name}`,
    description: dict.about.hero.subtitle,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutHero dict={dict.about.hero} />
      <AboutStory dict={dict.about.story} />
      <TechStack dict={dict.about.techStack} />
      <AboutCTA dict={dict.about.cta} />
    </div>
  );
}
