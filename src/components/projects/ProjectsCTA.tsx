import SectionHeading from "../shared/SectionHeading";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">Let's connect</h2>
        
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          I’m always open to discussing projects, internships, alternance opportunities, and collaborations in tech and digital marketing. If you’d like to know more about my work, feel free to get in touch.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton as={Link} href="/contact">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </PrimaryButton>
          <SecondaryButton as="a" href={siteData.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
