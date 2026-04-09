import SectionHeading from "../shared/SectionHeading";
import SecondaryButton from "../shared/SecondaryButton";
import { siteData } from "@/data/site";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-border/50 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-text tracking-tight mb-4">Let's Connect</h2>
        
        <p className="text-lg text-secondary-text leading-relaxed mb-10">
          I’m currently open to internships, alternance opportunities, and freelance work in both tech and digital marketing. Feel free to reach out if you’d like to discuss an opportunity, a project, or a collaboration.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <SecondaryButton as="a" href={`mailto:${siteData.email}`}>
            <Mail className="w-5 h-5 mr-2" />
            Email
          </SecondaryButton>
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
