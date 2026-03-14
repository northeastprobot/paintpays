import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Paint Pays',
  description:
    'Get in touch with Paint Pays. Book a free strategy call or send a message.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">
            Let&apos;s Talk About{' '}
            <span className="text-[#F5C518]">Your Business</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Whether you have questions about our programs, want to book a call, or need to reach
            us directly — we&apos;re here.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black mb-8">Contact Info</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="text-white font-bold mb-1">Phone</p>
                  <a
                    href="tel:8887688727"
                    className="text-[#888888] hover:text-[#F5C518] transition-colors"
                  >
                    888-PNT-PAYS
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <p className="text-white font-bold mb-1">Email</p>
                  <a
                    href="mailto:Admin@PaintPays.com"
                    className="text-[#888888] hover:text-[#F5C518] transition-colors"
                  >
                    Admin@PaintPays.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-white font-bold mb-1">Location</p>
                  <p className="text-[#888888]">Buffalo, NY</p>
                </div>
              </div>
            </div>

            {/* Book a Call CTA */}
            <div className="mt-10 bg-[#141414] border border-[#F5C518] rounded-xl p-8">
              <h3 className="text-xl font-black mb-3">Book a Free Strategy Call</h3>
              <p className="text-[#888888] text-sm mb-6 leading-relaxed">
                The fastest way to get started is a 30-minute call. We&apos;ll look at your business,
                identify what&apos;s holding you back, and lay out a clear path forward.
              </p>
              <a
                href="#"
                className="block text-center bg-[#F5C518] text-black px-6 py-3 rounded font-black text-sm hover:bg-[#f0b800] transition-colors"
              >
                Schedule a 30-Min Call →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black mb-8">Send a Message</h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Jake"
                    className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Martinez"
                    className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@yourbusiness.com"
                  className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Subject</label>
                <select className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#F5C518] transition-colors">
                  <option value="">Select a topic</option>
                  <option value="coaching">Coaching Programs</option>
                  <option value="academy">Academy Courses</option>
                  <option value="marketing">Done-For-You Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your business and what you need..."
                  className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5C518] text-black px-6 py-4 rounded font-black text-base hover:bg-[#f0b800] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
