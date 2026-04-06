'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Fade-in on scroll hook ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useFadeIn();
  return (
    <section ref={ref} id={id} className={`fade-section ${className}`}>
      {children}
    </section>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          Painting Changed
          <br />
          My Life.
        </h1>
        <p className="text-muted-light text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Now I&rsquo;m showing others how to build the same thing.
        </p>
        <Link
          href="/episodes"
          className="inline-block px-8 py-4 bg-gold text-black font-semibold text-base sm:text-lg rounded-sm hover:bg-gold-light transition-colors"
        >
          Watch the Latest Episode →
        </Link>

        {/* Credibility bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-muted text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <span className="text-white font-semibold">$5M+</span> Revenue
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <span className="flex items-center gap-2">
            <span className="text-white font-semibold">1,100+</span> Projects
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <span className="flex items-center gap-2">
            <span className="text-white font-semibold">10+</span> Years
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT PILLARS ─── */
function ContentPillars() {
  return (
    <Section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* The Conversations */}
          <div className="bg-dark-card border border-border rounded-lg p-8 md:p-10 hover:border-[#333] transition-colors group">
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">The Conversations</h3>
            <p className="text-muted leading-relaxed mb-6">
              Real talk with painters, entrepreneurs, and industry leaders about what it
              actually takes to build something great.
            </p>
            <Link
              href="/podcast"
              className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
            >
              Listen Now →
            </Link>
          </div>

          {/* The Playbook */}
          <div className="bg-dark-card border border-border rounded-lg p-8 md:p-10 hover:border-[#333] transition-colors group">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">The Playbook</h3>
            <p className="text-muted leading-relaxed mb-6">
              Everything I&rsquo;ve learned building a $5M painting company: systems, sales,
              hiring, marketing, mindset. No gatekeeping.
            </p>
            <Link
              href="/learn"
              className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
            >
              Start Learning →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── LATEST EPISODES ─── */
const placeholderEpisodes = [
  {
    num: 47,
    title: 'How I Closed a $180K Commercial Job',
    guest: 'Thomas Clark',
    duration: '42 min',
  },
  {
    num: 46,
    title: 'Hiring Your First Project Manager',
    guest: 'Guest TBA',
    duration: '38 min',
  },
  {
    num: 45,
    title: 'Marketing That Actually Gets Calls',
    guest: 'Guest TBA',
    duration: '51 min',
  },
];

function LatestEpisodes() {
  return (
    <Section className="py-24 md:py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Episodes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderEpisodes.map((ep) => (
            <div
              key={ep.num}
              className="bg-dark-card border border-border rounded-lg overflow-hidden hover:border-[#333] transition-colors group"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-[#1A1A1A] flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-muted text-xs mb-2">
                  <span>EP {ep.num}</span>
                  <span>·</span>
                  <span>{ep.duration}</span>
                </div>
                <h3 className="text-white font-semibold leading-snug mb-1">{ep.title}</h3>
                <p className="text-muted text-sm">{ep.guest}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/episodes"
            className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
          >
            View All Episodes →
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* ─── FEATURED FREE GAME ─── */
const topicPills = ['Sales', 'Hiring', 'Marketing', 'Estimating', 'Systems', 'Mindset'];

function FeaturedFreeGame() {
  return (
    <Section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Game. Real Results.
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-lg">
              No courses to buy. No paywall. Just the strategies that took me from a truck
              and a sprayer to a $5M company.
            </p>
            <div className="flex flex-wrap gap-3">
              {topicPills.map((topic) => (
                <Link
                  key={topic}
                  href={`/learn?topic=${topic.toLowerCase()}`}
                  className="px-4 py-2 bg-dark-card border border-border rounded-full text-sm text-muted-light hover:text-white hover:border-[#444] transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div className="aspect-video bg-dark-card border border-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#222] flex items-center justify-center mb-3 hover:bg-gold/20 transition-colors cursor-pointer">
                <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-muted text-sm">Featured Video</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── ABOUT / ORIGIN STORY ─── */
function AboutStory() {
  return (
    <Section className="py-24 md:py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/5] bg-dark-card border border-border rounded-lg flex items-center justify-center order-2 lg:order-1">
            <p className="text-muted text-sm">Photo</p>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by a Painter.
              <br />
              For Painters.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I started with a truck, a sprayer, and zero business knowledge. No mentor.
                No playbook. Every lesson came from getting it wrong first.
              </p>
              <p>
                Today, Northeast Pro Services does over $5 million a year. But the money
                isn&rsquo;t the point. It&rsquo;s the life it built. For me, for my family,
                for my crew, for every contractor I&rsquo;ve been able to help along the way.
              </p>
              <p>
                Paint Pays exists because this industry gave me everything, and I believe
                it&rsquo;s my responsibility to give back. Every video, every conversation,
                every piece of free game, it&rsquo;s all because I know what&rsquo;s possible
                when someone shows you the way.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-gold font-medium text-sm hover:text-gold-light transition-colors"
            >
              Read the Full Story →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── THE MISSION ─── */
function Mission() {
  return (
    <Section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why We Do This</h2>
        <div className="space-y-3 text-muted-light text-lg md:text-xl leading-relaxed mb-10">
          <p>We believe painting isn&rsquo;t just a trade. It&rsquo;s a calling.</p>
          <p>
            We believe the work of your hands can build a life beyond what you imagined.
          </p>
          <p>
            We believe in generosity over gatekeeping. Service over self-promotion.
          </p>
          <p>
            We believe if you&rsquo;ve been blessed with knowledge, you have a duty to share it.
          </p>
          <p>
            We believe iron sharpens iron, and this community makes all of us better.
          </p>
        </div>
        <p className="text-gold italic text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          &ldquo;As each one has received a gift, use it to serve one another, as good
          stewards of God&rsquo;s varied grace.&rdquo;
          <span className="block mt-1 text-gold/70 not-italic text-sm">1 Peter 4:10</span>
        </p>
        <Link
          href="/mission"
          className="inline-block px-6 py-3 border border-gold text-gold text-sm font-medium rounded-sm hover:bg-gold hover:text-black transition-colors"
        >
          Our Mission &amp; Values →
        </Link>
      </div>
    </Section>
  );
}

/* ─── ECOSYSTEM / TOOLS ─── */
function Ecosystem() {
  return (
    <Section className="py-24 md:py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools We Built for Painters</h2>
          <p className="text-muted max-w-xl mx-auto">
            Everything we teach on Paint Pays, we built the software to actually do it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-dark-card border border-border rounded-lg p-8 hover:border-[#333] transition-colors">
            <div className="text-2xl mb-3 font-bold">PaintCostPro</div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The all-in-one platform for painting contractors. CRM, estimates, AI phone,
              marketing, crew management.
            </p>
            <a
              href="https://paintcostpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
            >
              Try PaintCostPro →
            </a>
          </div>
          <div className="bg-dark-card border border-border rounded-lg p-8 hover:border-[#333] transition-colors">
            <div className="text-2xl mb-3 font-bold">PaintCost</div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Free instant paint cost estimator for homeowners. The simplest way to price
              a painting job.
            </p>
            <a
              href="https://paintcost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-medium text-sm hover:text-gold-light transition-colors"
            >
              Try PaintCost →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── NEWSLETTER ─── */
function Newsletter() {
  return (
    <Section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get the Game Before It Drops
        </h2>
        <p className="text-muted mb-8">
          New episodes, strategies, and resources sent straight to your inbox. No spam.
          Just signal.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-dark-card border border-border rounded-sm text-white placeholder:text-muted text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gold text-black font-semibold text-sm rounded-sm hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-muted text-xs mt-4">Join 2,000+ painting contractors</p>
      </div>
    </Section>
  );
}

/* ─── MERCH PREVIEW ─── */
const merchItems = [
  { name: 'Paint Pays Tee', type: 'T-Shirt' },
  { name: 'PPYS Hoodie', type: 'Hoodie' },
  { name: 'Paint Pays Cap', type: 'Hat' },
];

function MerchPreview() {
  return (
    <Section className="py-24 md:py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wear the Brand</h2>
          <p className="text-muted max-w-lg mx-auto">
            Premium gear for painters who take their craft seriously.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchItems.map((item) => (
            <div
              key={item.name}
              className="bg-dark-card border border-border rounded-lg overflow-hidden hover:border-[#333] transition-colors group"
            >
              <div className="aspect-square bg-[#1A1A1A] flex items-center justify-center">
                <p className="text-muted text-sm">{item.type}</p>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/merch"
            className="inline-block px-6 py-3 border border-gold text-gold text-sm font-medium rounded-sm hover:bg-gold hover:text-black transition-colors"
          >
            Shop Merch →
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* ─── HOMEPAGE ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <ContentPillars />
      <LatestEpisodes />
      <FeaturedFreeGame />
      <AboutStory />
      <Mission />
      <Ecosystem />
      <Newsletter />
      <MerchPreview />
    </>
  );
}
