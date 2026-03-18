import { ABOUT_TEXT, STATS } from '@/data/resume';

export function AboutSection() {
  return (
    <section id="about" className="bg-card/30">
      <div className="section-container">
        <h2 className="section-title">About <span className="text-primary">Me</span></h2>
        <div className="section-divider" />

        <div className="max-w-2xl">
          {ABOUT_TEXT.split('\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-base mb-4 last:mb-0">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mt-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 min-w-[120px]"
            >
              <span className="text-4xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
