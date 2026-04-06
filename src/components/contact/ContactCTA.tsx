import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <p className="text-xl text-primary-text font-medium leading-relaxed mb-10">
          If you’d like to discuss an opportunity, collaboration, or project, feel free to send me an email or connect with me on LinkedIn.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton as="a" href={`mailto:${siteData.email}`}>
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </PrimaryButton>
          <SecondaryButton as="a" href={siteData.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </SecondaryButton>
          <SecondaryButton as="a" href={siteData.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
