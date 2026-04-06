import Link from 'next/link';
import type { Metadata } from 'next';
import CalendlyEmbed from '@/components/CalendlyEmbed';

// TODO: Replace with actual Calendly URL once account is confirmed
const CALENDLY_URL = 'https://calendly.com/paintpays-admin/strategy-call';

export const metadata: Metadata = {
  title: 'Coaching | Paint Pays',
  description:
    'Group coaching and 1-on-1 mentorship for painting contractors ready to scale past $1M.',
};

const groupBenefits = [
  'Weekly live group coaching calls with Thomas',
  'Done-for-you templates: estimates, contracts, hiring scripts',
  'Private community of serious painting contractors',
  'Monthly hot seat sessions where your business gets reviewed live',
  'Access to all course materials in the Academy',
  'Accountability partners and peer support',
];

const mentorshipBenefits = [
  'Direct access to Thomas via phone and text',
  'Custom 90-day growth plan built for your business',
  'Weekly 1-on-1 strategy sessions',
  'Full marketing system setup and review',
  'Hiring and org chart buildout',
  'Priority support with Thomas in your corner 24/7',
];

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Coaching Programs
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Stop Figuring It Out Alone.{' '}
            <span className="text-[#F5C518]">Get in the Room.</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Whether you want community and accountability or direct access to Thomas, there&apos;s a
            coaching path built for where you are right now.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Group Coaching */}
          <div className="bg-[#141414] border border-white rounded-xl p-10 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C518] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </span>
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-[#888888] text-xs uppercase tracking-widest font-bold mb-2">
              Monthly Program
            </p>
            <h2 className="text-2xl font-black text-white mb-3">Group Coaching</h2>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              Weekly group calls, accountability, templates, and a community of serious painting
              contractors who are all playing the same game as you.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {groupBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-white">
                  <span className="text-[#F5C518] mt-0.5 font-black">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="text-3xl font-black text-white mb-6">$497 / month</div>
            <a
              href="#apply"
              className="bg-white text-black px-6 py-3 rounded font-black text-sm text-center hover:bg-[#F5C518] transition-colors"
            >
              Join the Program →
            </a>
          </div>

          {/* 1-on-1 */}
          <div className="bg-[#F5C518] rounded-xl p-10 flex flex-col">
            <div className="text-4xl mb-4">👑</div>
            <p className="text-black/60 text-xs uppercase tracking-widest font-bold mb-2">
              Private Mentorship
            </p>
            <h2 className="text-2xl font-black text-black mb-3">1-on-1 with Thomas</h2>
            <p className="text-black/70 text-sm leading-relaxed mb-6">
              For contractors who are serious about hitting $1M+ and want direct access. Thomas works
              with a very limited number of private clients at a time.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {mentorshipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-black">
                  <span className="text-black/50 mt-0.5 font-black">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="text-3xl font-black text-black mb-6">$3,000 / month</div>
            <a
              href="#apply"
              className="bg-black text-[#F5C518] px-6 py-3 rounded font-black text-sm text-center hover:bg-[#141414] transition-colors"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222] bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4 text-center">
            Not Sure Which Program Is Right For You?
          </p>
          <h2 className="text-3xl font-black text-center mb-4">
            Book a Free{' '}
            <span className="text-[#F5C518]">30-Minute Strategy Call</span>
          </h2>
          <p className="text-[#888888] text-center max-w-xl mx-auto mb-10 leading-relaxed">
            No pitch. No pressure. Just 30 minutes to talk about your business, where you&apos;re stuck, and whether Paint Pays is the right fit.
          </p>
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">
            Apply for <span className="text-[#F5C518]">Coaching</span>
          </h2>
          <p className="text-[#888888] text-center mb-10">
            Tell me a bit about your business. I&apos;ll reach out within 24 hours.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <label className="block text-sm font-bold text-white mb-2">Phone</label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Current Annual Revenue
              </label>
              <select className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#F5C518] transition-colors">
                <option value="">Select range</option>
                <option value="under100k">Under $100K</option>
                <option value="100k-250k">$100K – $250K</option>
                <option value="250k-500k">$250K – $500K</option>
                <option value="500k-1m">$500K – $1M</option>
                <option value="over1m">Over $1M</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Which program interests you?
              </label>
              <select className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white focus:outline-none focus:border-[#F5C518] transition-colors">
                <option value="">Select a program</option>
                <option value="group">Group Coaching: $497/month</option>
                <option value="mentorship">1-on-1 Mentorship: $3,000/month</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">
                What&apos;s your biggest challenge right now?
              </label>
              <textarea
                rows={4}
                placeholder="Tell me what's holding your business back..."
                className="w-full bg-[#141414] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5C518] text-black px-6 py-4 rounded font-black text-base hover:bg-[#f0b800] transition-colors"
            >
              Submit Application
            </button>

            <p className="text-[#888888] text-xs text-center">
              Or book directly:{' '}
              <a href="#" className="text-[#F5C518] hover:underline">
                Schedule a free 30-min call →
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
