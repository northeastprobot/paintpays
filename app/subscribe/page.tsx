const benefits = [
  { icon: '🎬', title: 'Weekly Episodes', desc: 'New conversations and strategies every week, delivered before they hit social.' },
  { icon: '📋', title: 'Business Strategies', desc: 'Actionable frameworks for sales, hiring, marketing, and operations.' },
  { icon: '🎁', title: 'Free Resources', desc: 'Templates, checklists, and tools — exclusive to subscribers.' },
  { icon: '🤝', title: 'Community Updates', desc: 'Events, merch drops, and what\'s coming next for Paint Pays.' },
];

export default function SubscribePage() {
  return (
    <div className="min-h-screen">
      {/* Hero + Email Capture */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Newsletter
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Get the Game Before It Drops
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-12">
            New episodes, strategies, and resources — straight to your inbox.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-dark-card border border-border rounded-lg px-5 py-4 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors text-center sm:text-left"
              />
              <button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-muted text-sm mt-4">
              No spam. Just signal. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            What You&apos;ll Get
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-muted leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Painters Who Are Building Something Real
          </h2>
          <p className="text-muted text-lg mb-10">
            Every week, thousands of painting contractors get strategies that
            actually work — straight from someone who built a $5M company.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-dark-card border border-border rounded-lg px-5 py-4 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors text-center sm:text-left"
              />
              <button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
