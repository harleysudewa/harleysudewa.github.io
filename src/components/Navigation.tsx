"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm font-semibold tracking-tight text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
        >
          Harley Sudewa
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[13px] tracking-wide text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors focus:outline-none"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 pl-2 border-l border-[var(--color-border)]">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-foreground)] p-1.5 rounded-lg hover:bg-[var(--color-tag-bg)] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--color-border)]">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <span className="text-[var(--color-border)]">·</span>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-[var(--color-border)]">·</span>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <span className="text-[var(--color-border)]">·</span>
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                aria-label="Discord"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
