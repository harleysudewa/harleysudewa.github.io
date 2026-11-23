"use client";

import { useState } from "react";
import { projectsData } from "@/data/content";
import SectionHeader from "./SectionHeader";
import TechTagList from "./TechTag";

function ProjectVisual({
  project,
}: {
  project: (typeof projectsData.projects)[number];
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full self-center">
      <div className="relative group/img w-full select-none">
        {/* Offset geometric accent frame */}
        <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 border-2 border-[var(--color-accent)]/30 transition-transform duration-300 ease-out group-hover/img:translate-x-2 group-hover/img:translate-y-2 pointer-events-none" />

        {/* Ambient glow on hover */}
        <div className="absolute -inset-2 bg-[var(--color-accent)]/10 blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Main sharp container - Large showcase on desktop */}
        <div className="aspect-[16/10] bg-[var(--color-card)] border border-[var(--color-border)] overflow-hidden relative shadow-xl transition-all duration-300 group-hover/img:border-[var(--color-accent)]/60">
          {/* Technical dot-grid pattern behind */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, var(--color-accent) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Fallback / Technical blueprint placeholder */}
          {imgError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
              <span className="text-4xl font-mono font-bold tracking-wider text-[var(--color-accent)]/30 group-hover/img:text-[var(--color-accent)]/60 transition-colors">
                {project.number}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] mt-2">
                SYS // {project.category.split("·")[0].trim()}
              </span>
            </div>
          )}

          {/* If project has an image file and it hasn't errored */}
          {project.image && !imgError && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out grayscale-[10%] contrast-[1.05] group-hover/img:grayscale-0 group-hover/img:scale-105"
            />
          )}

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/75 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity pointer-events-none" />

          {/* Tech HUD corner accents */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 section-divider">
      <div className="section-container max-w-[1200px]">
        <SectionHeader
          number={projectsData.sectionNumber}
          label={projectsData.sectionLabel}
          heading={projectsData.heading}
        />

        <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-14 max-w-[600px]">
          {projectsData.introduction}
        </p>

        <div className="space-y-20">
          {projectsData.projects.map((project) => (
            <article key={project.number} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-8 lg:gap-14 items-center">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[var(--color-accent)]">
                      {project.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technical Highlights */}
                  {project.highlights.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-[13px] font-medium text-[var(--color-foreground)] mb-2.5 uppercase tracking-wide">
                        Technical Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-[13px] text-[var(--color-muted)] leading-relaxed flex gap-2"
                          >
                            <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">
                              ·
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <TechTagList tags={project.technologies} />
                </div>

                {/* Right: Project Image / Visual Container (Enlarged on Desktop) */}
                <div className="mt-4 lg:mt-0">
                  <ProjectVisual project={project} />
                </div>
              </div>

              {/* Divider */}
              {project.number !==
                projectsData.projects[projectsData.projects.length - 1]
                  .number && (
                <div className="mt-20 border-b border-dashed border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
