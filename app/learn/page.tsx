const topics = [
  { title: 'Sales', desc: 'Closing deals, pricing strategies, and building a pipeline that never runs dry.', count: 14 },
  { title: 'Hiring & Crews', desc: 'Finding reliable painters, building culture, and keeping your best people.', count: 11 },
  { title: 'Marketing', desc: 'Facebook ads, Google, yard signs, referrals. What actually gets the phone ringing.', count: 9 },
  { title: 'Estimating', desc: 'Pricing jobs right, building proposals that win, and knowing your numbers cold.', count: 8 },
  { title: 'Systems & Ops', desc: 'CRMs, scheduling, project management. The backbone of a company that runs without you.', count: 12 },
  { title: 'Mindset', desc: 'The mental game of scaling, leading people, and not burning out along the way.', count: 10 },
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
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-4">
            Free Game
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Playbook
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-xl">
            Everything I know about running a $5M painting company. For free.
            No gatekeeping.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#1A1A1A]">
            {topics.map((t, i) => (
              <div
                key={t.title}
                className="group cursor-pointer border-b border-[#1A1A1A] py-8 md:py-10 flex items-start md:items-center justify-between gap-6 hover:bg-[#0F0F0F] transition-colors px-2 md:px-4"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-white/20 font-mono w-6 pt-1 md:pt-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-white/80 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-muted text-sm mt-1 max-w-md">
                      {t.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-white/20 text-sm hidden md:block">{t.count} episodes</span>
                  <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-24 md:py-32 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-10">
            Most Popular
          </p>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <div className="aspect-video bg-[#141414] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-5 h-5 text-white/60 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
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
      <section className="py-24 md:py-32 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
            New here?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Start With These Five
          </h2>
          <p className="text-muted mb-12">
            These lay the foundation. Watch them first, then go deeper into any topic above.
          </p>
          <div className="border-t border-[#1A1A1A]">
            {startHere.map((v) => (
              <div
                key={v.num}
                className="group cursor-pointer border-b border-[#1A1A1A] py-5 flex items-center gap-6 hover:bg-[#0F0F0F] transition-colors px-2"
              >
                <span className="text-white/20 font-mono text-sm w-6">{String(v.num).padStart(2, '0')}</span>
                <h4 className="font-semibold group-hover:text-white/80 transition-colors flex-1">{v.title}</h4>
                <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Never Miss a New Episode
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            New strategies, breakdowns, and real talk every week on YouTube.
          </p>
          <a
            href="https://youtube.com/@PaintPays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-white/90 text-black font-semibold px-8 py-4 text-sm transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
