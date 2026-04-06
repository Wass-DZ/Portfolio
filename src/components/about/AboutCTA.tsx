import SectionHeading from "../shared/SectionHeading";
import PrimaryButton from "../shared/PrimaryButton";
import { siteData } from "@/data/site";
import { FileText } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">Let's Work Together</h2>
        
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          I am currently looking for internships, alternance opportunities, and freelance work in both tech and digital marketing. If you’d like to know more about my background or discuss a possible collaboration, feel free to explore my projects or get in touch.
        </p>

        <PrimaryButton as="a" href={siteData.cvPath} download>
          <FileText className="w-5 h-5 mr-2" />
          Download CV
        </PrimaryButton>
      </div>
    </section>
  );
}
