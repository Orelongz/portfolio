import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE, EARLIER_EXPERIENCE } from '@/data/resume';

export function ExperienceSection() {
  const expandedEarlier = EARLIER_EXPERIENCE.filter((j) => j.bullets && j.bullets.length > 0);
  const compactEarlier = EARLIER_EXPERIENCE.filter((j) => !j.bullets || j.bullets.length === 0);

  return (
    <section id="experience" className="bg-card/30">
      <div className="section-container">
        <h2 className="section-title">Work <span className="text-primary">Experience</span></h2>
        <div className="section-divider" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="flex flex-col gap-10">

            {/* ── Main experience ── */}
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                <div className="absolute left-[11px] md:left-[19px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-[0_0_8px_2px_oklch(0.585_0.233_264/0.5)]" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                      <p className="text-primary font-semibold text-sm">{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground flex-shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm italic mb-4">{job.description}</p>

                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* ── Earlier expanded cards (Distrobird, Conlance) ── */}
            {expandedEarlier.map((job, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                <div className="absolute left-[11px] md:left-[19px] top-1 w-3 h-3 rounded-full bg-muted-foreground/40 border-2 border-background" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground">{job.role}</h3>
                      <p className="text-primary/80 font-semibold text-sm">{job.company}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground flex-shrink-0">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {job.bullets!.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary/70 mt-1 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* ── Compact earlier rows (Andela etc.) ── */}
            {compactEarlier.length > 0 && (
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-[11px] md:left-[19px] top-1 w-3 h-3 rounded-full bg-muted border-2 border-background" />

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Other noteworthy experiences
                  </h3>
                  <div className="flex flex-col gap-3">
                    {compactEarlier.map((job, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <span className="font-semibold text-foreground/80 text-sm">{job.company}</span>
                          <span className="text-muted-foreground text-sm"> · {job.role}</span>
                        </div>
                        <span className="text-muted-foreground text-xs flex-shrink-0">{job.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
