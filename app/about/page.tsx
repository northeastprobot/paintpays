import Link from 'next/link';
import { PPIcon as PPMonogram } from '@/components/PaintPaysLogo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Paint Pays',
  description:
    "Thomas built Northeast Pro Services from a truck and a sprayer to $5M/year. Here's the real story.",
};

const timeline = [
  {
    year: '2014',
    event: 'Started with a truck, a sprayer, and zero clients in Buffalo, NY.',
  },
  {
    year: '2016',
    event: 'First $500K season. Hired first full-time crew. Made every rookie mistake in the book.',
  },
  {
    year: '2018',
    event: 'Hit $1M. Burned out. Realized the business ran me — I didn\'t run it.',
  },
  {
    year: '2020',
    event: 'Built the systems. Fired bad clients. Raised prices. Doubled profit margins.',
  },
  {
    year: '2022',
    event: 'Northeast Pro Services crossed $3M. Built in-house crews + subcontractor network.',
  },
  {
    year: '2024',
    event: 'Hit $5M+ in annual revenue. Started coaching other painting contractors.',
  },
  {
    year: '2025',
    event: 'Launched Paint Pays. Built AI phone agents and marketing systems that run without me.',
  },
];

const values = [
  {
    icon: '💪',
    title: 'No Gurus Allowed',
    description:
      "Everything taught inside Paint Pays was tested in the field — on real jobs, with real crews, in real weather. If it didn't work in Buffalo, it doesn't go in the curriculum.",
  },
  {
    icon: '📋',
    title: 'Systems Over Hustle',
    description:
      "The goal is never to work more hours. It's to build a machine that works without you. Sustainable businesses outlast the ones built on sweat.",
  },
  {
    icon: '🎯',
    title: 'Specific Beats General',
    description:
      "Painting contractors have unique challenges. We don't teach generic small business advice — we teach painting business strategies.",
  },
  {
    icon: '📈',
    title: 'Results or Nothing',
    description:
      "We track numbers. If you're not growing, something's wrong and we fix it. No vague advice. No \"mindset shifts\" that don't pay the bills.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            About Paint Pays
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Built in Buffalo.{' '}
            <span className="text-[#F5C518]">Proven in the Trades.</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl leading-relaxed">
            Paint Pays isn&apos;t a consulting firm staffed by people who&apos;ve never held a brush.
            It was built by a contractor who grew a painting company from nothing to $5M — and wants
            to show you how.
          </p>
        </div>
      </section>

      {/* Thomas Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Placeholder */}
          <div className="bg-[#141414] border border-[#222222] rounded-xl aspect-square flex items-center justify-center sticky top-24">
            <div className="text-center">
              <PPMonogram size="lg" />
              <p className="text-[#888888] text-sm mt-4">Thomas&apos;s photo coming soon</p>
            </div>
          </div>

          {/* Story */}
          <div>
            <h2 className="text-3xl font-black mb-6">
              I&apos;m not a guru.{' '}
              <span className="text-[#F5C518]">I&apos;m a contractor.</span>
            </h2>

            <div className="space-y-4 text-[#888888] leading-relaxed">
              <p>
                I started Northeast Pro Services in 2014 with a pickup truck, a Graco sprayer, and
                about $2,000 in savings. No business degree. No mentor. No playbook.
              </p>
              <p>
                The first few years were brutal. I was working 70-hour weeks, underbidding jobs to
                win them, hiring the wrong people, and wondering why — if the business was growing —
                I still couldn&apos;t pay myself a real salary.
              </p>
              <p>
                In 2018, I hit $1M in revenue. I should have been celebrating. Instead, I was
                exhausted, resentful, and one bad month from going under. The business had grown.
                But I hadn&apos;t.
              </p>
              <p>
                So I stopped working in the business and started working on it. I built real
                estimating systems. I wrote an actual hiring process. I raised my prices (and lost
                clients I was better off without). I built a foreman structure so jobs could run
                without me on-site.
              </p>
              <p>
                By 2022, we crossed $3M. By 2024, over $5M. And most importantly — I got my life
                back. I coach Little League now. I take vacations. The business runs without me.
              </p>
              <p className="text-white font-semibold">
                Paint Pays is everything I wish I had when I started. No theory. No gurus. Just the
                exact systems, scripts, and strategies that built a real company in the real world.
              </p>
            </div>

            <Link
              href="/coaching"
              className="inline-block mt-8 bg-[#F5C518] text-black px-8 py-4 rounded font-black hover:bg-[#f0b800] transition-colors"
            >
              Work With Thomas →
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222] bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">
            The <span className="text-[#F5C518]">Timeline</span>
          </h2>

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-[#F5C518] font-black text-sm pt-1">
                  {item.year}
                </div>
                <div className="flex-1 border-l border-[#222222] pl-6 pb-6">
                  <p className="text-[#888888] leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            What Paint Pays{' '}
            <span className="text-[#F5C518]">stands for</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#141414] border border-[#222222] rounded-xl p-8"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white font-black text-lg mb-3">{value.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222] bg-[#141414]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Ready to get to work?
          </h2>
          <p className="text-[#888888] mb-8">
            If you&apos;re a painting contractor serious about building something real — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coaching"
              className="bg-[#F5C518] text-black px-8 py-4 rounded font-black hover:bg-[#f0b800] transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/academy"
              className="border border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-black transition-colors"
            >
              Browse the Academy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
