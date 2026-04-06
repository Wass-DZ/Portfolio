import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-8", className)}>
      <h2 className="text-3xl font-bold text-primary-text tracking-tight">{title}</h2>
      {subtitle && <p className="text-secondary-text text-lg">{subtitle}</p>}
    </div>
  );
}
