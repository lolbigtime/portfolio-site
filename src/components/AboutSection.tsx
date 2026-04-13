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
          University of Illinois Urbana-Champaign, passionate about using AI
          systems to accelerate scientific discovery. I&apos;m drawn to the
          intersection of machine learning and biology — where computational
          tools can unlock insights that would be impossible to find by hand.
        </p>
        <p>
          My research spans deep learning for biomedical imaging at OHSU and
          computational genomics at UCSF. Outside of research, I&apos;m
          interested in reinforcement learning and getting computers to play
          games. I also love building apps — my projects have been downloaded
          over 25,000 times.
        </p>
      </div>
    </section>
  );
}
