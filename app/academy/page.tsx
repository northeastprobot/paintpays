import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academy | Paint Pays',
  description:
    'Self-paced courses for painting business owners. Get the exact playbooks used to build a $5M painting company.',
};

const courses = [
  {
    icon: '📐',
    title: 'The $1M Blueprint',
    subtitle: 'Foundation Course',
    description:
      "The complete roadmap to hitting your first $1M in painting revenue. From pricing to hiring to marketing — every system I built is laid out step-by-step.",
    modules: [
      'Pricing for profit (not just to win jobs)',
      'Building your first sales process',
      'Hiring and onboarding crews that stick',
      'Marketing that generates leads year-round',
      'Cash flow management for painting contractors',
    ],
    price: '$297',
    badge: null,
    cardStyle: 'border border-[#F5C518]',
  },
  {
    icon: '👷',
    title: 'Crew Management Mastery',
    subtitle: 'Operations Course',
    description:
      "Stop being the only person who can run a job. This course teaches you how to build, train, and keep the crews that make your business run without you.",
    modules: [
      'Where to find reliable painters',
      'The onboarding system that reduces turnover',
      'How to structure foreman roles',
      'Accountability without micromanaging',
      'Building a subcontractor network',
    ],
    price: '$197',
    badge: 'BESTSELLER',
    cardStyle: 'border border-white',
  },
  {
    icon: '🤝',
    title: 'Sales & Estimating Pro',
    subtitle: 'Revenue Course',
    description:
      "Most contractors lose 40% of their revenue before the job even starts. This course shows you how to estimate right, close confidently, and stop leaving money on the table.",
    modules: [
      'Production rate estimating system',
      'How to present prices without flinching',
      'Handling objections like a pro',
      'The follow-up sequence that closes deals',
      'Upselling and add-on strategies',
    ],
    price: '$197',
    badge: null,
    cardStyle: 'border border-[#222222]',
  },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Paint Pays Academy
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            The Exact Playbooks I Used to Build a{' '}
            <span className="text-[#F5C518]">$5M Company</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Self-paced courses built for painting contractors who are serious about scaling. No fluff,
            no theory — just systems that work in the real world.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-[#141414] rounded-xl p-8 flex flex-col relative ${course.cardStyle}`}
            >
              {course.badge && (
                <span className="absolute -top-3 left-6 bg-[#F5C518] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  {course.badge}
                </span>
              )}

              <div className="text-4xl mb-4">{course.icon}</div>
              <p className="text-[#888888] text-xs uppercase tracking-widest font-bold mb-2">
                {course.subtitle}
              </p>
              <h2 className="text-xl font-black text-white mb-3">{course.title}</h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-6">{course.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {course.modules.map((mod) => (
                  <li key={mod} className="flex items-start gap-2 text-sm text-white">
                    <span className="text-[#F5C518] mt-0.5">✓</span>
                    {mod}
                  </li>
                ))}
              </ul>

              <div className="text-3xl font-black text-white mb-4">{course.price}</div>
              <Link
                href="/contact"
                className="bg-[#F5C518] text-black px-6 py-3 rounded font-black text-sm text-center hover:bg-[#f0b800] transition-colors"
              >
                Get Instant Access
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222]">
        <div className="max-w-3xl mx-auto bg-[#141414] border border-[#F5C518] rounded-2xl p-12 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-3xl font-black mb-4">
            Get All 3 Courses — <span className="text-[#F5C518]">Save 30%</span>
          </h2>
          <p className="text-[#888888] mb-2">
            Everything you need to scale your painting business, bundled together.
          </p>
          <p className="text-white text-sm mb-8">
            <span className="line-through text-[#888888]">$691</span>{' '}
            <span className="text-[#F5C518] text-2xl font-black">$497</span>
          </p>
          <Link
            href="/contact"
            className="bg-[#F5C518] text-black px-10 py-4 rounded font-black text-lg hover:bg-[#f0b800] transition-colors inline-block"
          >
            Get the Full Bundle
          </Link>
        </div>
      </section>
    </div>
  );
}
