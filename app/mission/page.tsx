const values = [
  { title: 'Stewardship', desc: "What you've been given is meant to grow and be shared." },
  { title: 'Integrity', desc: 'Do the work. Honor your word. Build something real.' },
  { title: 'Generosity', desc: 'Give the game away. The right people will come back.' },
  { title: 'Growth', desc: 'Every season is a chance to become better.' },
  { title: 'Community', desc: 'Nobody builds alone. Iron sharpens iron.' },
  { title: 'Purpose', desc: "This isn't just about money. It's about the life it builds." },
];

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Why Paint Pays Exists
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            This isn&apos;t a business. It&apos;s a calling.
          </p>
        </div>
      </section>

      {/* Scripture 1 */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold italic text-lg md:text-xl leading-relaxed mb-4">
            &ldquo;As each one has received a gift, use it to serve one
            another, as good stewards of God&apos;s varied grace.&rdquo;
          </p>
          <p className="text-muted text-sm">— 1 Peter 4:10</p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            The Manifesto
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-light">
            <p>
              We believe painting isn&apos;t just a trade — it&apos;s a calling.
            </p>
            <p>
              We believe the work of your hands can build a life beyond what you
              imagined.
            </p>
            <p>
              We believe in generosity over gatekeeping. Service over
              self-promotion.
            </p>
            <p>
              We believe if you&apos;ve been blessed with knowledge, you have a
              duty to share it.
            </p>
            <p>
              We believe iron sharpens iron — and this community makes all of us
              better.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-dark-card border border-border rounded-lg p-8"
              >
                <div className="text-gold font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture 2 */}
      <section className="py-16 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold italic text-lg md:text-xl leading-relaxed mb-4">
            &ldquo;Let us not become weary in doing good, for at the proper
            time we will reap a harvest if we do not give up.&rdquo;
          </p>
          <p className="text-muted text-sm">— Galatians 6:9</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Story
          </h2>
          <div className="space-y-6 text-muted-light leading-relaxed text-lg">
            <p>
              We don&apos;t do this for clout or revenue. We do it because we
              believe stewardship means sharing what you&apos;ve been given.
            </p>
            <p>
              If our experience can save one contractor from the same mistakes
              we made, or help one family build the life they&apos;ve been
              praying for — that&apos;s the harvest.
            </p>
            <p>
              Thomas started Paint Pays because the painting industry gave him
              everything — a business, a livelihood, a purpose, a way to
              provide. And he believes that kind of blessing comes with a
              responsibility: pour it back out.
            </p>
            <p>
              Every video is free. Every conversation is genuine. Every piece of
              advice comes from real experience — the wins and the losses. No
              one should have to learn the hard lessons alone.
            </p>
            <p>
              That&apos;s why Paint Pays exists. Not as a brand. Not as a
              business. As a mission.
            </p>
          </div>
        </div>
      </section>

      {/* Scripture 3 */}
      <section className="py-16 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold italic text-lg md:text-xl leading-relaxed mb-4">
            &ldquo;For we are God&apos;s handiwork, created in Christ Jesus to
            do good works, which God prepared in advance for us to do.&rdquo;
          </p>
          <p className="text-muted text-sm">— Ephesians 2:10</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Something Bigger
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Join a community of painters who believe in doing the work, sharing
            the game, and building something that matters.
          </p>
          <a
            href="/subscribe"
            className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Join the Community →
          </a>
        </div>
      </section>
    </div>
  );
}
