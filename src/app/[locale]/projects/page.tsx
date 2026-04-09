import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectList from "@/components/projects/ProjectList";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { getDictionary, Locale } from "@/dictionaries";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `${dict.nav.projects} | ${siteData.name}`,
    description: dict.projects.hero.subtitle,
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectsHero dict={dict.projects.hero} />
      <ProjectList dict={dict.projects} locale={locale} />
      <ProjectsCTA dict={dict.projects.cta} />
    </div>
  );
}
