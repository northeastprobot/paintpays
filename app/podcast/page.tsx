const episodes = [
  { num: 12, title: 'How I Closed a $120K Repaint', guest: 'Thomas Clark', duration: '48 min', tag: 'Sales' },
  { num: 11, title: 'Hiring Painters Who Actually Show Up', guest: 'Marcus Webb', duration: '55 min', tag: 'Hiring' },
  { num: 10, title: 'The Facebook Ads That Changed Everything', guest: 'Jake Rivera', duration: '42 min', tag: 'Marketing' },
  { num: 9, title: 'Running 6 Crews Without Losing Your Mind', guest: 'Thomas Clark', duration: '38 min', tag: 'Operations' },
  { num: 8, title: 'From Burnout to $3M: A Real Story', guest: 'David Chen', duration: '62 min', tag: 'Mindset' },
  { num: 7, title: 'What Sherwin-Williams Won\'t Tell You', guest: 'Lisa Grant', duration: '35 min', tag: 'Guest Interviews' },
  { num: 6, title: 'Estimating: Stop Leaving Money on the Table', guest: 'Thomas Clark', duration: '44 min', tag: 'Sales' },
  { num: 5, title: 'Building a Brand That Gets Referrals', guest: 'Andre Thompson', duration: '51 min', tag: 'Marketing' },
  { num: 4, title: 'The Systems That Run My $5M Company', guest: 'Thomas Clark', duration: '47 min', tag: 'Operations' },
];

const filters = ['All', 'Sales', 'Hiring', 'Marketing', 'Operations', 'Mindset', 'Guest Interviews'];

export default function PodcastPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            The Podcast
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Conversations
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Real talk with painters, entrepreneurs, and industry leaders about
            what it actually takes to build something great.
          </p>
          <a
            href="https://youtube.com/@PaintPays"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  f === 'All'
                    ? 'bg-gold text-black'
                    : 'bg-dark-card border border-border text-muted hover:text-white hover:border-gold/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episode Grid */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <div
              key={ep.num}
              className="bg-dark-card border border-border rounded-lg overflow-hidden group hover:border-border-light transition-colors"
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-video bg-dark-surface flex items-center justify-center">
                <span className="text-muted text-sm">Episode {ep.num} Thumbnail</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                    {ep.tag}
                  </span>
                  <span className="text-xs text-muted">EP {ep.num}</span>
                  <span className="text-xs text-muted">· {ep.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                  {ep.title}
                </h3>
                <p className="text-muted text-sm">with {ep.guest}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply to Be a Guest */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Story Worth Telling?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            We&apos;re always looking for painters, entrepreneurs, and industry
            leaders who&apos;ve been in the trenches and came out with stories
            worth sharing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Apply to Be a Guest →
          </a>
        </div>
      </section>
    </div>
  );
}
