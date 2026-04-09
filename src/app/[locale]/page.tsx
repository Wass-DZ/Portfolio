import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FocusAreas from "@/components/home/FocusAreas";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ContactCTA from "@/components/home/ContactCTA";
import { getDictionary, Locale } from "@/dictionaries";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `${siteData.name} | Portfolio`,
    description: dict.home.hero.intro,
  };
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero dict={dict.home.hero} locale={locale} />
      <Overview dict={dict.home.overview} />
      <FeaturedProjects dict={dict.home.featuredProjects} locale={locale} />
      <FocusAreas dict={dict.home.focusAreas} />
      <ExperiencePreview dict={dict.home.experiencePreview} locale={locale} />
      <ContactCTA dict={dict.home.contactCTA} locale={locale} />
    </div>
  );
}
