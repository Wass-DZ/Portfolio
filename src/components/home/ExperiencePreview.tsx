import SectionHeading from "../shared/SectionHeading";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";

export default function ExperiencePreview() {
  return (
    <section className="py-20 border-t border-border/50">
      <SectionHeading title="Experience" />
      
      <div className="max-w-3xl">
        <p className="text-lg text-secondary-text leading-relaxed mb-8">
          Alongside my academic journey, I have developed practical experience in e-commerce and performance marketing, including product research, landing page work, Meta Ads management, and KPI analysis. This experience strengthened my ability to connect technical thinking with measurable business impact.
        </p>

        <PrimaryButton as={Link} href="/experience">
          View Experience
        </PrimaryButton>
      </div>
    </section>
  );
}
