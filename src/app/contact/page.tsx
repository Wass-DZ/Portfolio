import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wassim Fritah",
  description: "Open to internships, alternance opportunities, and freelance collaborations in tech and digital marketing. Feel free to connect.",
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ContactHero />
      <ContactInfo />
      <ContactCTA />
    </div>
  );
}
