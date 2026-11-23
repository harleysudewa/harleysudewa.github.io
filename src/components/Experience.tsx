"use client";

import { Images } from "lucide-react";
import { experienceData } from "@/data/content";
import SectionHeader from "./SectionHeader";
import TechTagList from "./TechTag";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 section-divider">
      <div className="section-container max-w-[1200px]">
        <SectionHeader
          number={experienceData.sectionNumber}
          label={experienceData.sectionLabel}
          heading={experienceData.heading}
        />

        <div className="space-y-16">
          {experienceData.experiences.map((exp, index) => (
            <article key={index} className="group">
              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                {/* Left: Period & Logo */}
                <div className="md:pt-0.5">
                  {/* Company Logo */}
                  {exp.logo && (
                    <div className="mb-3 w-20 h-20 bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <p className="text-[13px] font-mono text-[var(--color-muted)]">
                    {exp.period}
                  </p>
                </div>

                {/* Right: Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)] mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mb-4">
                    {exp.location}
                  </p>

                  <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-[13px] font-medium text-[var(--color-foreground)] mb-2.5 uppercase tracking-wide">
                      Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-[13px] text-[var(--color-muted)] leading-relaxed flex gap-2"
                        >
                          <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">
                            ·
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <TechTagList tags={exp.technologies} className="mt-4" />
                  )}

                  {/* Field Documentation & Photos (Enlarged direct showcase, no popup modal) */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-[var(--color-border)]/60">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] flex items-center gap-1.5">
                          <Images size={14} className="text-[var(--color-accent)]" />
                          Field Documentation & Photos ({exp.gallery.length})
                        </span>
                      </div>

                      {/* 2-Column Large Photo Cards on Desktop */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {exp.gallery.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            className="group/photo relative aspect-[16/10] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/80 text-left transition-all overflow-hidden shadow-md flex flex-col justify-between"
                          >
                            {/* Actual Photo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photo.src}
                              alt={photo.caption || "Documentation Photo"}
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/photo:scale-105"
                            />

                            {/* Gradient Overlay for Caption readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 flex flex-col justify-between p-3 pointer-events-none" />

                            {/* HUD Corner Accents */}
                            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
                            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />
                            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--color-accent)] pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--color-accent)] pointer-events-none" />

                            {/* Top info badge */}
                            <div className="relative z-10 flex items-center justify-between">
                              <span className="px-2 py-0.5 bg-black/70 border border-[var(--color-accent)]/40 text-[10px] font-mono text-[var(--color-accent)] font-semibold">
                                DOC // 0{pIdx + 1}
                              </span>
                            </div>

                            {/* Bottom caption (readable, multi-line) */}
                            <p className="relative z-10 text-[12px] font-mono text-white/95 line-clamp-2 leading-snug drop-shadow-md">
                              {photo.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index < experienceData.experiences.length - 1 && (
                <div className="mt-16 border-b border-dashed border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
