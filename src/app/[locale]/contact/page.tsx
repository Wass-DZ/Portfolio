import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";
import { getDictionary, Locale } from "@/dictionaries";
import { Metadata } from "next";
import { siteData } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: `Contact | ${siteData.name}`,
    description: dict.contact.hero.subtitle,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContactHero dict={dict.contact.hero} />
      <ContactInfo dict={dict.contact} />
      <ContactCTA dict={dict.contact.cta} />
    </div>
  );
}
