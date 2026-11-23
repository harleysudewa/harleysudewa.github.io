import { contactData, siteConfig } from "@/data/content";
import SectionHeader from "./SectionHeader";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 section-divider">
      <div className="section-container">
        <SectionHeader
          number={contactData.sectionNumber}
          label={contactData.sectionLabel}
          heading={contactData.heading}
        />

        <div className="max-w-[600px]">
          {contactData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}

          {/* Contact Links */}
          <div className="mt-8 space-y-3">
            <a
              href={siteConfig.links.email}
              className="flex items-center gap-3 group text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)]" />
              <span className="text-sm font-medium">Get in Touch</span>
              <ArrowUpRight
                size={14}
                className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)]" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight
                size={14}
                className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <LinkedinIcon size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)]" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight
                size={14}
                className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <WhatsappIcon size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)]" />
              <span className="text-sm font-medium">WhatsApp</span>
              <ArrowUpRight
                size={14}
                className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
