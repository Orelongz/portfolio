import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/data/resume';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="section-container w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* ── Text content ── */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              {PERSONAL_INFO.name}
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
              {PERSONAL_INFO.title}{' '}
              <span className="text-primary">·</span> 8+ Years
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection('experience')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
              >
                View Experience
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-border text-foreground hover:bg-muted font-semibold px-6"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              {/* Border ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1 bg-gradient-to-br from-primary via-primary/50 to-primary/10">
                <img
                  src="/pelumi-photo.jpg"
                  alt="Pelumi Longe"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 md:mt-24">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
