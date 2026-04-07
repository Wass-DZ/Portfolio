"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-cards-surface/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary-text tracking-tight">
            {siteData.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive 
                        ? "text-primary-accent" 
                        : "text-secondary-text hover:text-primary-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4 ml-4 border-l border-border pl-4">
              <ThemeToggle />
              <PrimaryButton as="a" href={siteData.cvPath} download>
                Download CV
              </PrimaryButton>
            </div>
          </div>

          {/* Mobile menu and toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-text hover:text-primary-text p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-cards-surface border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-muted-section-bg",
                    isActive
                      ? "text-primary-accent bg-soft-accent-bg"
                      : "text-secondary-text hover:text-primary-accent"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-3 pt-2">
              <PrimaryButton as="a" href={siteData.cvPath} className="w-full justify-center" download>
                Download CV
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
