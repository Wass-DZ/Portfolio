import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { FileText } from "lucide-react";
import { Dictionary } from "@/dictionaries";

export default function AboutCTA({ dict }: { dict: Dictionary['about']['cta'] }) {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">{dict.title}</h2>
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          {dict.text}
        </p>
        <SecondaryButton as="a" href={siteData.cvPath} download>
          <FileText className="w-5 h-5 mr-2" />
          {dict.button}
        </SecondaryButton>
      </div>
    </section>
  );
}
