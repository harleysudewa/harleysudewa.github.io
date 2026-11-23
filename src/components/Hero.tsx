import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
  DiscordIcon,
} from "./Icons";
import { heroData, siteConfig } from "@/data/content";
import TechTagList from "./TechTag";
import FadeInUp from "./FadeInUp";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container max-w-[1200px] w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <FadeInUp duration={700}>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-accent)] font-medium mb-6">
                {heroData.label}
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08] text-[var(--color-foreground)] mb-6">
                {heroData.name.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed mb-6 max-w-[540px]">
                {heroData.headline}
              </p>

              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-8 max-w-[520px]">
                {heroData.introduction}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 text-sm">
                {heroData.metadata.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-[var(--color-muted)]">
                      {item.label}:
                    </span>
                    <span className="text-[var(--color-foreground)] font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <TechTagList tags={heroData.tags} className="mb-8" />

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[var(--color-foreground)] text-[var(--color-background)] rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Experience
                  <ArrowDown size={14} />
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsappIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.links.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="Discord"
                  >
                    <DiscordIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.links.email}
                    className="p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Right Column — Portrait (Mobile & Desktop) */}
          <div className="block mt-8 lg:mt-0">
            <FadeInUp delay={200} duration={800}>
              <div className="relative group mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] xl:max-w-[460px]">
                {/* Offset geometric accent frame */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[var(--color-accent)]/35 transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:translate-y-2.5 pointer-events-none" />

                {/* Ambient glow behind on hover */}
                <div className="absolute -inset-3 bg-[var(--color-accent)]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Main sharp portrait container */}
                <div className="aspect-[3/4] bg-[var(--color-card)] border border-[var(--color-border)] overflow-hidden relative shadow-2xl transition-all duration-300 group-hover:border-[var(--color-accent)]/60">
                  <Image
                    src="/images/portrait.jpeg"
                    alt="Christopher Harley Sudewa"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 420px, 460px"
                    className="object-cover transition-all duration-500 ease-out grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105"
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                  {/* Tech HUD corner accents */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
