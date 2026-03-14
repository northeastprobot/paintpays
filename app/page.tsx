import Link from 'next/link';
import { PPIcon as PPMonogram } from '@/components/PaintPaysLogo';
import VideoPlayer from '@/components/VideoPlayer';

// ── Stats Bar ──────────────────────────────────────────────────────────────
const stats = [
  { value: '$5M+', label: 'Revenue Generated' },
  { value: '1,100+', label: 'Projects Completed' },
  { value: '10+', label: 'Years in the Trades' },
  { value: '100s', label: 'of Contractors Coached' },
];

// ── Pain Points ────────────────────────────────────────────────────────────
const painPoints = [
  {
    icon: '⏰',
    text: 'Working 60+ hours a week and still not paying yourself enough',
  },
  {
    icon: '👷',
    text: "Can't find or keep good crews no matter what you try",
  },
  {
    icon: '💸',
    text: 'Leaving money on the table with every estimate',
  },
  {
    icon: '📋',
    text: 'No systems — everything falls apart when you step away',
  },
];

// ── Services ───────────────────────────────────────────────────────────────
const services = [
  {
    icon: '🎓',
    badge: null,
    title: 'Paint Pays Academy',
    subtitle: 'Self-Paced Courses',
    description:
      'Get the exact playbooks I used to build a $5M company — available on demand.',
    courses: ['The $1M Blueprint', 'Crew Management Mastery', 'Sales & Estimating Pro'],
    price: 'Starting at $297',
    cta: 'Browse Courses →',
    href: '/academy',
    cardStyle: 'border border-[#F5C518] bg-[#141414]',
    ctaStyle: 'text-[#F5C518] hover:text-[#f0b800]',
    premium: false,
  },
  {
    icon: '🎯',
    badge: 'MOST POPULAR',
    title: 'Group Coaching',
    subtitle: 'Monthly Coaching Program',
    description:
      'Weekly group calls, accountability, templates, and a community of serious painting contractors.',
    courses: [],
    price: '$497 / month',
    cta: 'Join the Program →',
    href: '/coaching',
    cardStyle: 'border border-white bg-[#141414]',
    ctaStyle: 'text-white hover:text-[#F5C518]',
    premium: false,
  },
  {
    icon: '👑',
    badge: null,
    title: '1-on-1 Mentorship',
    subtitle: 'Private Mentorship',
    description:
      'Direct access to Thomas. Custom growth plan. For contractors serious about hitting $1M+.',
    courses: [],
    price: '$3,000 / month',
    cta: 'Apply Now →',
    href: '/coaching',
    cardStyle: 'bg-[#F5C518]',
    ctaStyle: 'text-black hover:text-[#141414] font-black',
    premium: true,
  },
];

// ── Testimonials ───────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      'I went from $180K to $420K in one season after joining Paint Pays. The crew management system alone was worth 10x what I paid.',
    name: 'Jake M.',
    location: 'Ohio',
  },
  {
    quote:
      "Thomas doesn't give you fluff. He tells you exactly what to do. My close rate went from 40% to 68% in 60 days.",
    name: 'Marcus T.',
    location: 'Pennsylvania',
  },
  {
    quote:
      "I finally stopped being the only one who could run a job. My foreman runs everything now. I coach Little League on Fridays.",
    name: 'Ryan C.',
    location: 'New York',
  },
];

// ── Marketing Features ─────────────────────────────────────────────────────
const marketingFeatures = [
  {
    icon: '🌐',
    title: 'Website & SEO',
    description:
      'A high-converting painting website built to rank locally and turn visitors into booked jobs.',
  },
  {
    icon: '📱',
    title: 'Facebook & Instagram Ads',
    description:
      'Done-for-you ad campaigns that drive consistent lead flow for your painting business.',
  },
  {
    icon: '🤖',
    title: 'AI Phone Agent + CRM',
    description:
      'An AI that answers your calls after hours, qualifies leads, and syncs everything to your CRM.',
  },
];

// ── Credentials ────────────────────────────────────────────────────────────
const credentials = [
  '$5M+ in annual revenue',
  '700+ projects completed',
  'Buffalo, NY based — real WNY winters, real competition',
  'Built in-house crews + subcontractor networks',
  'Built AI systems and marketing that run without me',
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow */}
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            For Painting Business Owners
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 max-w-4xl">
            Built a $5M Painting Company.{' '}
            <span className="text-[#F5C518]">Now I&apos;ll Show You How.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#888888] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Paint Pays gives serious painting contractors the systems, coaching, and marketing to
            scale past $1M — without working 80-hour weeks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/academy"
              className="bg-[#F5C518] text-black px-8 py-4 rounded font-black text-base hover:bg-[#f0b800] transition-colors text-center"
            >
              Explore the Academy
            </Link>
            <Link
              href="/coaching"
              className="border border-white text-white px-8 py-4 rounded font-bold text-base hover:bg-white hover:text-black transition-colors text-center"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto w-full mt-16 border-t border-[#222222] pt-10 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#F5C518]">{stat.value}</div>
                <div className="text-[#888888] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#222222]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14 max-w-2xl mx-auto leading-tight">
            You&apos;re good at painting.{' '}
            <span className="text-[#888888]">Running a business is different.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <div
                key={point.text}
                className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-6 flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0">{point.icon}</span>
                <p className="text-[#888888] leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#F5C518] font-bold text-lg mt-12">
            That&apos;s exactly where I was. Here&apos;s what changed everything.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
            Three ways to work with{' '}
            <span className="text-[#F5C518]">Paint Pays</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-xl p-8 relative flex flex-col ${service.cardStyle}`}
              >
                {service.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C518] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    {service.badge}
                  </span>
                )}

                <div className="text-4xl mb-4">{service.icon}</div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${service.premium ? 'text-black/60' : 'text-[#888888]'}`}>
                  {service.subtitle}
                </p>
                <h3 className={`text-xl font-black mb-3 ${service.premium ? 'text-black' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${service.premium ? 'text-black/70' : 'text-[#888888]'}`}>
                  {service.description}
                </p>

                {service.courses.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {service.courses.map((course) => (
                      <li key={course} className="text-xs text-[#888888] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#F5C518] rounded-full inline-block" />
                        {course}
                      </li>
                    ))}
                  </ul>
                )}

                <div className={`text-2xl font-black mt-auto mb-4 ${service.premium ? 'text-black' : 'text-white'}`}>
                  {service.price}
                </div>

                <Link
                  href={service.href}
                  className={`font-bold text-sm transition-colors ${service.ctaStyle}`}
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-[#141414] py-24 px-4 sm:px-6 lg:px-8 border-y border-[#222222]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              About Thomas
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
              I&apos;m not a guru.{' '}
              <span className="text-[#F5C518]">I&apos;m a contractor.</span>
            </h2>
            <p className="text-[#888888] leading-relaxed mb-8">
              I started Northeast Pro Services with a truck and a sprayer. Today it does over $5
              million a year in Western New York. I learned everything the hard way — crew problems,
              cash flow issues, bad clients, wrong hires. Paint Pays is everything I wish I had when
              I was starting out. No theory. Just what actually works.
            </p>

            <ul className="space-y-3">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <span className="text-[#F5C518] font-black mt-0.5">✓</span>
                  <span className="text-white text-sm">{cred}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-block mt-8 text-[#F5C518] font-bold text-sm hover:underline"
            >
              Read the full story →
            </Link>
          </div>

          {/* Video */}
          <VideoPlayer />
        </div>
      </section>

      {/* ── SCRIPTURE ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-y border-[#222222]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed italic">
            &ldquo;Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.&rdquo;
          </p>
          <p className="mt-4 text-[#F5C518] text-sm font-bold uppercase tracking-widest">Galatians 6:9</p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
            What contractors are saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#141414] border border-[#222222] rounded-xl p-8 flex flex-col"
              >
                <span className="text-[#F5C518] text-5xl font-black leading-none mb-4">&ldquo;</span>
                <p className="text-white leading-relaxed flex-1">{t.quote}</p>
                <div className="mt-6 pt-6 border-t border-[#222222]">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-[#888888] text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONE-FOR-YOU MARKETING ── */}
      <section className="bg-[#141414] py-24 px-4 sm:px-6 lg:px-8 border-y border-[#222222]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Done-For-You Marketing
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Let us run your marketing while you run your business
          </h2>
          <p className="text-[#888888] text-lg mb-14 max-w-2xl mx-auto">
            The same marketing system that drives $5M in annual revenue — deployed for your company.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {marketingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0a0a0a] border border-[#222222] rounded-xl p-8 text-left"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-black text-lg mb-2">{feature.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block border border-[#F5C518] text-[#F5C518] px-8 py-4 rounded font-bold hover:bg-[#F5C518] hover:text-black transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #2a1f00 0%, #F5C518 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-black leading-tight">
            Ready to build a painting business that actually pays?
          </h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
            Most contractors stay stuck because they keep doing what they&apos;ve always done. One
            conversation can change your trajectory.
          </p>
          <Link
            href="/coaching"
            className="inline-block bg-black text-[#F5C518] px-10 py-5 rounded font-black text-lg hover:bg-[#0a0a0a] transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
