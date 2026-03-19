import Link from 'next/link';
import { PPIcon as PPMonogram } from '@/components/PaintPaysLogo';
import VideoPlayer from '@/components/VideoPlayer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Paint Pays',
  description:
    "Thomas built a painting company from nothing to $5M/year in Western New York. Here's the real story.",
};

const timeline = [
  {
    year: '2020',
    event: '$160K in sales. Just me, my brother, and a few friends helping out when we needed them. We were painting every job ourselves.',
  },
  {
    year: '2021',
    event: '$180K. Still the same crew — me, my brother, and some friends. Grinding every day on the tools.',
  },
  {
    year: '2022',
    event: 'The turning point. I stepped off the tools and trained one of my guys to run the crews. We hit $1.7M that year.',
  },
  {
    year: '2023',
    event: 'Built more systems. Dialed in hiring, estimating, and operations. $2.6M in sales.',
  },
  {
    year: '2024',
    event: 'Things really took off. $4.7M in revenue. The systems worked. The business ran without me on every job.',
  },
  {
    year: '2025',
    event: 'Started rebranding the company — expanding beyond painting into roofing, siding, and restoration to take over more markets.',
  },
  {
    year: '2026',
    event: 'Launched Paint Pays. Sharing everything that got us here so other contractors can skip the hard lessons.',
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
          {/* Video */}
          <div>
            <VideoPlayer />
          </div>

          {/* Story */}
          <div>
            <h2 className="text-3xl font-black mb-6">
              I&apos;m not a guru.{' '}
              <span className="text-[#F5C518]">I&apos;m a contractor.</span>
            </h2>

            <div className="space-y-4 text-[#888888] leading-relaxed">
              <p>
                I started my company in 2020 with my brother and a few friends. No
                business plan. No systems. Just us doing the work, showing up every day, and figuring
                it out as we went. We did $160K that first year.
              </p>
              <p>
                For the first two years, it was grinding on the tools every single day. Me and my
                brother painting side by side. $160K in 2020. $180K in 2021. Good money, but I was
                the business. If I stopped working, everything stopped.
              </p>
              <p>
                In 2022, I made the decision that changed everything. I stepped off the tools and
                trained one of my guys to run the crews instead. That year we hit $1.7 million. The
                year after, $2.6 million. I wasn&apos;t painting anymore — I was building a company.
              </p>
              <p>
                By 2024, we were doing $4.7 million a year. Real crews, real
                systems, real infrastructure. The business ran without me on every job site.
              </p>
              <p>
                In 2025, we started rebranding — expanding beyond painting into roofing, siding, and
                historical restoration. We built trust in Buffalo over five years. Now we&apos;re using
                that reputation to take over more of the market.
              </p>
              <p className="text-white font-semibold">
                Paint Pays is everything I wish I had when I started. Five years. Zero to $5M. No
                gurus, no theory — just the exact systems that built a real company in the real world.
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

      {/* Lifestyle Photos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4 text-center">
            This Is What The Work Is For
          </p>
          <h2 className="text-3xl font-black text-center mb-4 leading-tight">
            Build a business that funds your life.{' '}
            <span className="text-[#F5C518]">Not the other way around.</span>
          </h2>
          <p className="text-[#888888] text-center max-w-xl mx-auto mb-12 leading-relaxed">
            When the systems run without you, your time becomes yours again.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {[
              { src: '/lifestyle/boat.jpg', caption: "The boat doesn't move itself — the systems do.", position: 'object-[25%_65%]' },
              { src: '/lifestyle/truck-camper.jpg', caption: 'Reading Steven Furtick on the water. Because Fridays are mine now.', position: 'object-center' },
              { src: '/lifestyle/mercedes.jpg', caption: 'Pulled up to the dealership. Drove home in the AMG.', position: 'object-[50%_100%]' },
              { src: '/lifestyle/jetski-book.jpg', caption: 'New truck. New camper. New chapter.', position: 'object-center' },
            ].map((item) => (
              <div key={item.src} className="relative group rounded-xl overflow-hidden aspect-square sm:aspect-video bg-[#141414]">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full h-full object-cover ${item.position} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-white text-xs sm:text-sm font-semibold leading-snug">
                  {item.caption}
                </p>
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
