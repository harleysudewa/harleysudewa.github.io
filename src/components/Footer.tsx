import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
  DiscordIcon,
} from "./Icons";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 section-divider">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[13px] text-[var(--color-muted)]">
            <span>© {currentYear} {siteConfig.name}</span>
            <span className="hidden md:inline">·</span>
            <span>Indonesia</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon size={16} />
            </a>
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
