const pcpFeatures = [
  { icon: '🤖', title: 'AI Phone Agent', desc: 'Never miss a lead. AI answers calls 24/7, books estimates, and follows up.' },
  { icon: '📊', title: 'CRM & Pipeline', desc: 'Track every lead from first call to final payment. No more sticky notes.' },
  { icon: '📋', title: 'Estimates & Proposals', desc: 'Professional proposals that close. Built-in templates and e-signatures.' },
  { icon: '📣', title: 'Marketing Suite', desc: 'Email campaigns, review requests, and automated follow-ups.' },
  { icon: '👷', title: 'Crew Management', desc: 'Schedules, assignments, and communication, all in one place.' },
  { icon: '📈', title: 'Analytics', desc: 'Know your numbers. Revenue, close rate, lead sources, crew performance.' },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Ecosystem
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Tools We Built for Painters
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Everything we teach on Paint Pays, we built the software to
            actually do it.
          </p>
        </div>
      </section>

      {/* PaintCostPro */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block bg-gold/10 text-gold font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                $79/mo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PaintCostPro
              </h2>
              <p className="text-xl text-muted-light mb-8">
                The all-in-one platform for painting contractors.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {pcpFeatures.map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{f.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://paintcostpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Try PaintCostPro →
              </a>
            </div>

            {/* Screenshot Placeholder */}
            <div className="aspect-[4/3] bg-dark-surface border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted text-sm">
                PaintCostPro Dashboard Screenshot
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PaintCost */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Screenshot Placeholder */}
            <div className="aspect-[4/3] bg-dark-card border border-border rounded-lg flex items-center justify-center md:order-1">
              <span className="text-muted text-sm">
                PaintCost App Screenshot
              </span>
            </div>

            <div className="md:order-2">
              <div className="inline-block bg-green-500/10 text-green-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                Free
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PaintCost
              </h2>
              <p className="text-xl text-muted-light mb-4">
                Free instant paint cost estimator for homeowners.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                The simplest way for a homeowner to understand what their
                project costs. No sign-up required. Instant results. Built to
                help homeowners make informed decisions and connect with the
                right painter.
              </p>
              <a
                href="https://paintcost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Try PaintCost →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Footer */}
      <section className="py-20 md:py-24 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold mb-4">
            Built by painters.{' '}
            <span className="text-gold">For painters.</span>
          </p>
          <p className="text-muted">Part of the Paint Pays ecosystem.</p>
        </div>
      </section>
    </div>
  );
}
