export default function AboutSection() {
  return (
    <section id="about" aria-label="About me">
      <div className="sticky-section-header">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-graphite leading-relaxed">
        <p>
          I&apos;m a Computer Science and Bioengineering student at the
          University of Illinois Urbana-Champaign. My research spans deep
          learning for biomedical imaging at OHSU and computational genomics
          at UCSF. Outside of research, I&apos;m interested in reinforcement
          learning and getting computers to play games.
        </p>
      </div>
    </section>
  );
}
