import { siteData } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { Dictionary } from "@/dictionaries";

export default function Footer({ dict }: { dict: Dictionary['footer'] }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cards-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-primary-text mb-2">{siteData.name}</span>
            <p className="text-secondary-text text-sm">
              {dict.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm font-semibold text-primary-text mb-4 uppercase tracking-wider">
              {dict.linksTitle}
            </span>
            <div className="flex gap-4">
              <a href={`mailto:${siteData.email}`} className="text-secondary-text hover:text-primary-accent transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteData.github} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-text">
          <p>© {currentYear} {siteData.name}. {dict.rights}</p>
          <p>{dict.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
