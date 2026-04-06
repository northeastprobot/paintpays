export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Built by a Painter.
            <br />
            For Painters.
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            The story behind Paint Pays — and why everything we create is free.
          </p>
        </div>
      </section>

      {/* Photo + Story */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo Placeholder */}
          <div className="aspect-[3/4] bg-dark-surface border border-border rounded-lg flex items-center justify-center">
            <span className="text-muted text-sm">Photo — Thomas on site</span>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">The Story</h2>
            <p className="text-muted-light leading-relaxed">
              I started with a truck, a sprayer, and zero business knowledge.
              No mentor. No playbook. No safety net. Every single lesson came
              from getting it wrong first — and figuring out how to get back up.
            </p>
            <p className="text-muted-light leading-relaxed">
              I didn&apos;t grow up around business owners. Nobody in my circle
              knew how to read a P&amp;L, hire a crew, or close a $50K deal. I
              learned it all the hard way — in Buffalo, New York, in the snow,
              on rooftops, knocking doors, and grinding through seasons where I
              wasn&apos;t sure if the company would survive.
            </p>
            <p className="text-muted-light leading-relaxed">
              But it did survive. And then it grew. Northeast Pro Services went
              from a one-man operation to a $5 million-a-year company. Over
              1,100 projects completed. A team I&apos;m proud of. A reputation
              in our city that took years to build.
            </p>
            <p className="text-muted-light leading-relaxed">
              But the money isn&apos;t the point. It never was. The point is the
              life it built — for me, for my family, for my crew, for every
              contractor I&apos;ve been able to help along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Paint Pays */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Paint Pays Exists
            </h2>
            <p className="text-muted-light leading-relaxed">
              Paint Pays exists because this industry gave me everything, and I
              believe it&apos;s my responsibility to give back. Every video,
              every conversation, every piece of free game — it&apos;s all
              because I know what&apos;s possible when someone shows you the
              way.
            </p>
            <p className="text-muted-light leading-relaxed">
              I spent years making mistakes that cost me hundreds of thousands
              of dollars. I don&apos;t want other painters to go through that.
              If I can save one contractor from the same pit I fell into — or
              help one family build the life they&apos;ve been working toward —
              that&apos;s the whole point.
            </p>
            <p className="text-muted-light leading-relaxed">
              This isn&apos;t about building a personal brand. It&apos;s about
              building something that outlasts me. A resource that any painter
              can find, learn from, and use to change their life.
            </p>
          </div>

          {/* Photo Placeholder */}
          <div className="aspect-video bg-dark-surface border border-border rounded-lg flex items-center justify-center md:order-2">
            <span className="text-muted text-sm">
              Photo — Thomas in the studio
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '$5M+', label: 'Revenue Built' },
              { value: '1,100+', label: 'Projects Completed' },
              { value: '10+', label: 'Years in the Trades' },
              { value: '100s', label: 'Contractors Helped' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Stewardship',
                desc: "What you've been given is meant to grow and be shared.",
              },
              {
                title: 'Integrity',
                desc: 'Do the work. Honor your word. Build something real.',
              },
              {
                title: 'Generosity',
                desc: 'Give the game away. The right people will come back.',
              },
              {
                title: 'Growth',
                desc: 'Every season is a chance to become better.',
              },
              {
                title: 'Community',
                desc: 'Nobody builds alone. Iron sharpens iron.',
              },
              {
                title: 'Purpose',
                desc: "This isn't just about money. It's about the life it builds.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-dark-card border border-border rounded-lg p-8"
              >
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-20 md:py-24 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold italic text-lg md:text-xl leading-relaxed mb-4">
            &ldquo;Let us not become weary in doing good, for at the proper
            time we will reap a harvest if we do not give up.&rdquo;
          </p>
          <p className="text-muted text-sm">— Galatians 6:9</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It in Action
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Watch how Thomas breaks down the real strategies behind a $5M
            painting company — for free.
          </p>
          <a
            href="/podcast"
            className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Watch the Latest Episode →
          </a>
        </div>
      </section>
    </div>
  );
}
