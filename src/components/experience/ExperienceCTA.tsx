import SectionHeading from "../shared/SectionHeading";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ExperienceCTA() {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">Let's work together</h2>
        
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          I am open to internships, alternance opportunities, and freelance collaborations in both tech and digital marketing. My goal is to continue building at the intersection of technical problem solving, analytical thinking, and real-world impact.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton as={Link} href="/contact">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </PrimaryButton>
          <SecondaryButton as="a" href={siteData.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
