import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

type BaseProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps<T extends ElementType> = BaseProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>;

export default function PrimaryButton<T extends ElementType = "button">(
  { as, className, children, ...rest }: ButtonProps<T>
) {
  const Component = as || "button";
  const baseClasses = cn(
    "inline-flex items-center justify-center px-4 py-2 font-medium bg-primary-accent text-white rounded-xl shadow-soft transition-colors hover:bg-primary-accent-hover active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2",
    className
  );

  return (
    <Component className={baseClasses} {...rest}>
      {children}
    </Component>
  );
}
