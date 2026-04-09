import SectionHeading from "../shared/SectionHeading";
import { siteData } from "@/data/site";
import { Mail, Linkedin, Github, MapPin, CheckCircle2 } from "lucide-react";
import Tag from "../shared/Tag";

export default function ContactInfo() {
  const contactMethods = [
    {
      title: "Email",
      value: siteData.email,
      icon: <Mail className="w-6 h-6 text-primary-accent" />,
      href: `mailto:${siteData.email}`,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/wassim-fritah",
      icon: <Linkedin className="w-6 h-6 text-primary-accent" />,
      href: siteData.linkedin,
    },
    {
      title: "GitHub",
      value: "github.com/Wass-DZ",
      icon: <Github className="w-6 h-6 text-primary-accent" />,
      href: siteData.github,
    },
    {
      title: "Location",
      value: siteData.location,
      icon: <MapPin className="w-6 h-6 text-primary-accent" />,
      href: undefined, // No link for location
    },
  ];

  const opportunities = [
    "Internships",
    "Alternance opportunities",
    "Freelance work in tech",
    "Freelance work in digital marketing and e-commerce"
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Information Cards */}
        <div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const content = (
                <div className="bg-cards-surface rounded-2xl border border-border shadow-soft p-6 flex flex-col items-start gap-4 h-full transition-shadow hover:shadow-md">
                  <div className="bg-soft-accent-bg p-3 rounded-xl">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-text mb-1">{method.title}</h3>
                    <p className="text-secondary-text text-sm break-all">{method.value}</p>
                  </div>
                </div>
              );

              return method.href ? (
                <a 
                  key={index} 
                  href={method.href} 
                  target={method.title !== "Email" ? "_blank" : undefined}
                  rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                  className="block h-full focus:outline-none focus:ring-2 focus:ring-primary-accent rounded-2xl"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="h-full">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* What I'm Open To */}
        <div>
          <h2 className="text-2xl font-bold text-primary-text tracking-tight mb-8">
            What I’m Open To
          </h2>
          <div className="bg-muted-section-bg rounded-2xl border border-border/50 p-8">
            <ul className="flex flex-col gap-6">
              {opportunities.map((opp, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-accent shrink-0 mt-0.5" />
                  <span className="text-primary-text font-medium leading-relaxed text-lg">
                    {opp}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
