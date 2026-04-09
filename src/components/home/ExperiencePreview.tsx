import SectionHeading from "../shared/SectionHeading";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries";

export default function ExperiencePreview({ dict, locale }: { dict: Dictionary['home']['experiencePreview'], locale: Locale }) {
  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title={dict.title} />
      
      <div className="max-w-3xl">
        <p className="text-lg text-secondary-text leading-relaxed mb-8">
          {dict.description}
        </p>

        <PrimaryButton as={Link} href={`/${locale}/experience`}>
          {dict.button}
        </PrimaryButton>
      </div>
    </section>
  );
}
