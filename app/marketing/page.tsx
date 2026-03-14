import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing | Paint Pays',
  description:
    'Done-for-you marketing for painting contractors. Website, SEO, ads, and AI phone agents.',
};

const services = [
  {
    icon: '🌐',
    title: 'Website & SEO',
    description:
      'A high-converting painting contractor website built to rank locally on Google and turn visitors into booked estimates. Includes on-page SEO, Google Business Profile optimization, and local citation building.',
    includes: [
      'Custom website design (mobile-first)',
      'Local SEO setup and optimization',
      'Google Business Profile management',
      'Monthly SEO reporting',
    ],
    price: 'Starting at $1,500/mo',
  },
  {
    icon: '📱',
    title: 'Facebook & Instagram Ads',
    description:
      'Done-for-you ad campaigns that generate a consistent flow of painting leads in your service area. Thomas runs the same system that drives leads for his own $5M company.',
    includes: [
      'Ad creative and copywriting',
      'Audience targeting and setup',
      'Weekly optimization and A/B testing',
      'Lead tracking and reporting',
    ],
    price: 'Starting at $1,000/mo + ad spend',
  },
  {
    icon: '🤖',
    title: 'AI Phone Agent + CRM',
    description:
      'An AI that answers your calls after hours, qualifies leads, books estimates, and syncs everything to your CRM. Stop losing jobs because you couldn\'t answer the phone.',
    includes: [
      'Custom AI phone agent setup',
      'CRM integration (DripJobs, HubSpot, etc.)',
      'Automated follow-up sequences',
      'Call recording and transcripts',
    ],
    price: 'Starting at $500/mo',
  },
];

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Done-For-You Marketing
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Let Us Run Your Marketing.{' '}
            <span className="text-[#F5C518]">You Run Your Business.</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            The same marketing system that drives $5M in annual revenue for Northeast Pro Services —
            deployed and managed for your painting company.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#141414] border border-[#222222] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-black mb-3">{service.title}</h2>
                <p className="text-[#888888] leading-relaxed mb-4">{service.description}</p>
                <p className="text-[#F5C518] font-black text-lg">{service.price}</p>
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#888888]">
                      <span className="text-[#F5C518] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222] bg-[#141414]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Ready to fill your <span className="text-[#F5C518]">schedule?</span>
          </h2>
          <p className="text-[#888888] mb-8">
            Book a free marketing audit and we&apos;ll show you exactly where you&apos;re leaving
            money on the table.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5C518] text-black px-10 py-4 rounded font-black text-lg hover:bg-[#f0b800] transition-colors"
          >
            Get a Free Marketing Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
