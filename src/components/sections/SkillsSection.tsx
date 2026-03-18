import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/data/resume';

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical <span className="text-primary">Skills</span></h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
