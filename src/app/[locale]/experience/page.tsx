import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import { getDictionary, Locale } from "@/dictionaries";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `${dict.nav.experience} | ${siteData.name}`,
    description: dict.experience.hero.subtitle,
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ExperienceHero dict={dict.experience.hero} />
      <ExperienceDetails dict={dict.experience} />
      <ExperienceCTA dict={dict.experience.cta} locale={locale} />
    </div>
  );
}
