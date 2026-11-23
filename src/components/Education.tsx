import { educationData } from "@/data/content";
import SectionHeader from "./SectionHeader";
import { Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 section-divider">
      <div className="section-container">
        <SectionHeader
          number={educationData.sectionNumber}
          label={educationData.sectionLabel}
          heading={educationData.heading}
        />

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          {/* Left */}
          <div>
            {/* University Logo */}
            {educationData.education.logo && (
              <div className="mb-3 w-20 h-20 bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={educationData.education.logo}
                  alt={`${educationData.education.institution} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <p className="text-[13px] font-mono text-[var(--color-muted)]">
              University
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-1">
              {educationData.education.degree}
            </h3>
            <p className="text-sm text-[var(--color-accent)] mb-1">
              {educationData.education.institution}
            </p>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              {educationData.education.location}
            </p>

            <p className="text-[13px] text-[var(--color-muted)] mb-2">
              <span className="font-medium text-[var(--color-foreground)]">
                Focus:
              </span>{" "}
              {educationData.education.focus}
            </p>

            <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-8">
              {educationData.education.description}
            </p>

            {/* Achievements */}
            {educationData.achievements.length > 0 && (
              <div>
                <h4 className="text-[13px] font-medium text-[var(--color-foreground)] mb-3 uppercase tracking-wide">
                  Academic Achievement
                </h4>
                {educationData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)]"
                  >
                    <Award
                      size={18}
                      className="text-[var(--color-accent)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-foreground)]">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

