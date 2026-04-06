import Link from "next/link";
import { siteData } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cards-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 leading-relaxed text-center md:text-left">
          <div className="flex flex-col max-w-sm">
            <span className="font-semibold text-primary-text text-lg">{siteData.name}</span>
            <span className="text-secondary-text text-sm mt-1">{siteData.title}</span>
            <span className="text-secondary-text text-sm mt-1">{siteData.location}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-semibold text-primary-text text-sm">Links</span>
            <div className="flex gap-4">
              <Link href={siteData.github} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-accent transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-primary-accent transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <a href={`mailto:${siteData.email}`} className="text-secondary-text hover:text-primary-accent transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-secondary-text">
            © {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
