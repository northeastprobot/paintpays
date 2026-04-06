export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Whether it&apos;s a partnership, a guest spot, or just a question,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Business Inquiries */}
          <div className="bg-dark-card border border-border rounded-lg p-8">
            <div className="text-3xl mb-4">🤝</div>
            <h2 className="text-xl font-bold mb-3">Business Inquiries</h2>
            <p className="text-muted leading-relaxed mb-6">
              Partnerships, sponsorships, collaborations, and media
              opportunities. Let&apos;s build something together.
            </p>
            <a
              href="mailto:hello@paintpays.com?subject=Business Inquiry"
              className="text-gold font-semibold text-sm hover:text-gold-light transition-colors"
            >
              hello@paintpays.com →
            </a>
          </div>

          {/* General Contact */}
          <div className="bg-dark-card border border-border rounded-lg p-8">
            <div className="text-3xl mb-4">✉️</div>
            <h2 className="text-xl font-bold mb-3">General Contact</h2>
            <p className="text-muted leading-relaxed mb-6">
              Questions, feedback, or just want to say what&apos;s up. We read
              every message.
            </p>
            <a
              href="mailto:hello@paintpays.com"
              className="text-gold font-semibold text-sm hover:text-gold-light transition-colors"
            >
              hello@paintpays.com →
            </a>
          </div>

          {/* Social */}
          <div className="bg-dark-card border border-border rounded-lg p-8">
            <div className="text-3xl mb-4">📱</div>
            <h2 className="text-xl font-bold mb-3">Follow Along</h2>
            <p className="text-muted leading-relaxed mb-6">
              Stay connected and join the conversation across all platforms.
            </p>
            <div className="space-y-3">
              {[
                { name: 'YouTube', url: 'https://youtube.com/@PaintPays' },
                { name: 'Instagram', url: 'https://instagram.com/paintpays' },
                { name: 'TikTok', url: 'https://tiktok.com/@paintpays' },
                { name: 'Facebook', url: 'https://facebook.com/paintpays' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-gold text-sm transition-colors"
                >
                  {s.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Application */}
      <section className="py-24 md:py-32 px-6 bg-dark-card">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be a Guest on the Show
            </h2>
            <p className="text-muted text-lg">
              Have a story worth telling? We&apos;re looking for painters,
              entrepreneurs, and industry leaders with real experience to share.
            </p>
          </div>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-dark-surface border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full bg-dark-surface border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-dark-surface border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Website
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full bg-dark-surface border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Why would you be a great guest?
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your story, your business, and what you'd want to talk about on the show..."
                className="w-full bg-dark-surface border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-black font-semibold py-4 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
