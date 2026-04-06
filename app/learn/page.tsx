const topics = [
  { emoji: '💰', title: 'Sales', desc: 'Closing deals, pricing strategies, and building a pipeline that never dries up.', count: 14 },
  { emoji: '👷', title: 'Hiring & Crews', desc: 'Finding reliable painters, building culture, and keeping your best people.', count: 11 },
  { emoji: '📣', title: 'Marketing', desc: 'Facebook ads, Google, yard signs, referrals — what actually works.', count: 9 },
  { emoji: '📐', title: 'Estimating', desc: 'Pricing jobs right, building proposals that win, and knowing your numbers.', count: 8 },
  { emoji: '⚙️', title: 'Systems & Operations', desc: 'CRMs, scheduling, project management — the backbone of a real company.', count: 12 },
  { emoji: '🧠', title: 'Mindset & Leadership', desc: 'The mental game of scaling, leading people, and building something that lasts.', count: 10 },
];

const startHere = [
  { num: 1, title: 'How I Built a $5M Painting Company From Nothing' },
  { num: 2, title: 'The 3 Systems Every Painting Company Needs' },
  { num: 3, title: 'How to Price a Paint Job and Actually Make Money' },
  { num: 4, title: 'Hiring Your First Crew: The Real Talk Version' },
  { num: 5, title: 'The Marketing Strategy That Changed Everything' },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Free Game
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Playbook
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Everything I know about running a $5M painting company — for free.
            No gatekeeping.
          </p>
        </div>
      </section>

      {/* Topic Grid */}
      <section className="py-16 md:py-24 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Browse by Topic
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div
                key={t.title}
                className="bg-dark-surface border border-border rounded-lg p-8 hover:border-gold/30 transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-4">{t.emoji}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {t.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {t.desc}
                </p>
                <p className="text-gold text-sm font-medium">
                  {t.count} videos →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <div className="aspect-video bg-dark-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">▶️</div>
                  <span className="text-muted text-sm">
                    Featured Video Embed
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider">
                Most Popular
              </p>
              <h3 className="text-2xl md:text-3xl font-bold">
                How I Built a $5M Painting Company From Nothing
              </h3>
              <p className="text-muted leading-relaxed">
                The full breakdown of how I went from a truck and a sprayer to
                running one of the top painting companies in Buffalo. Every
                mistake, every lesson, no filter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              New Here? Start With These.
            </h2>
            <p className="text-muted">
              Five videos that lay the foundation. Watch these first, then go
              deeper into any topic.
            </p>
          </div>
          <div className="space-y-4">
            {startHere.map((v) => (
              <div
                key={v.num}
                className="flex items-center gap-5 bg-dark-surface border border-border rounded-lg p-5 hover:border-gold/30 transition-colors cursor-pointer group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-sm">
                  {v.num}
                </div>
                <h4 className="font-semibold group-hover:text-gold transition-colors">
                  {v.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss a New Episode
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            New strategies, breakdowns, and real talk — every week on YouTube.
          </p>
          <a
            href="https://youtube.com/@PaintPays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Subscribe for New Episodes →
          </a>
        </div>
      </section>
    </div>
  );
}
