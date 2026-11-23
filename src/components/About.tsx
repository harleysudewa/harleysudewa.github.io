import { aboutData } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 section-divider">
      <div className="section-container">
        <SectionHeader
          number={aboutData.sectionNumber}
          label={aboutData.sectionLabel}
          heading={aboutData.heading}
        />

        {/* Background */}
        <div className="max-w-[680px] mb-16">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Technical Focus */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-foreground)] mb-8">
            Technical Focus
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.technicalFocus.map((group) => (
              <div key={group.category}>
                <h4 className="text-[13px] font-medium text-[var(--color-foreground)] mb-3">
                  {group.category}
                </h4>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[13px] text-[var(--color-muted)] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

