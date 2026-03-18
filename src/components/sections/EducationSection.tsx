import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION } from '@/data/resume';

export function EducationSection() {
  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-primary">Education</span>
        </h2>
        <div className="section-divider" />

        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                {/* Left — institution + degree */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-semibold text-sm">{edu.field}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                {/* Right — period + grade */}
                <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="text-xs font-medium text-foreground/70 bg-muted px-2.5 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              {/* Achievement badge */}
              {edu.achievement && (
                <div className="mt-4 flex items-start gap-2.5 bg-primary/5 border border-primary/15 rounded-lg px-4 py-3">
                  <Award size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.achievement}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
