import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { Mail, Linkedin, Github } from "lucide-react";
import { Dictionary, Locale } from "@/dictionaries";

export default function ContactCTA({ dict, locale }: { dict: Dictionary['home']['contactCTA'], locale: Locale }) {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">{dict.title}</h2>
        
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          {dict.text}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <SecondaryButton as="a" href={`mailto:${siteData.email}`}>
            <Mail className="w-5 h-5 mr-2" />
            {dict.emailBtn}
          </SecondaryButton>
          <SecondaryButton as="a" href={siteData.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 mr-2" />
            {dict.linkedinBtn}
          </SecondaryButton>
          <SecondaryButton as="a" href={siteData.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            {dict.githubBtn}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
