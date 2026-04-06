import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Paint Pays',
  description:
    'Tips, systems, and strategies for painting business owners who want to scale past $1M.',
};

const posts = [
  {
    category: 'Estimating',
    title: 'The Exact Production Rate System I Use to Estimate Every Job',
    excerpt:
      "Stop guessing on estimates. Here's the production rate spreadsheet I've used on 700+ jobs, plus how to customize it for your market.",
    date: 'March 2026',
    readTime: '8 min read',
  },
  {
    category: 'Crew Management',
    title: 'Why Your Best Painter Keeps Quitting (And How to Fix It)',
    excerpt:
      "Turnover is killing your margins. This is the real reason painters leave, and the simple system that cut my turnover by 60%.",
    date: 'February 2026',
    readTime: '6 min read',
  },
  {
    category: 'Marketing',
    title: 'The $0 Marketing Strategy That Filled My Schedule in Year One',
    excerpt:
      "Before I ran ads, before SEO, I built my first $500K from three marketing moves that cost nothing but time. Here's exactly what I did.",
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    category: 'Sales',
    title: 'How I Raised My Prices 40% and Won More Jobs',
    excerpt:
      "Counterintuitive but true: when I stopped trying to be the cheapest, I started winning better clients. Here's how the pricing mindset shift works.",
    date: 'December 2025',
    readTime: '5 min read',
  },
  {
    category: 'Systems',
    title: 'The One Hire That Freed Me From Running Every Job',
    excerpt:
      "The day I hired my first real foreman (not just a lead painter), everything changed. Here's the role, the pay structure, and the onboarding process.",
    date: 'November 2025',
    readTime: '9 min read',
  },
  {
    category: 'Finance',
    title: 'Cash Flow Basics for Painting Contractors (Nobody Teaches This)',
    excerpt:
      "I almost went broke with $800K in revenue. Here's the simple cash flow system that saved my business and keeps $100K in the account at all times.",
    date: 'October 2025',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Estimating', 'Crew Management', 'Marketing', 'Sales', 'Systems', 'Finance'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            The Paint Pays Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">
            Real Strategies for{' '}
            <span className="text-[#F5C518]">Real Painting Contractors</span>
          </h1>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            No fluff. No theory. Just actionable systems from a contractor who&apos;s been in the
            trenches and built a $5M company.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
        <div className="max-w-5xl mx-auto flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                cat === 'All'
                  ? 'bg-[#F5C518] text-black'
                  : 'bg-[#141414] text-[#888888] border border-[#222222] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-[#141414] border border-[#222222] rounded-xl overflow-hidden hover:border-[#F5C518] transition-colors group cursor-pointer"
            >
              <div className="h-2 bg-[#F5C518]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#F5C518] text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-[#888888] text-xs">·</span>
                  <span className="text-[#888888] text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-black text-lg mb-3 leading-tight group-hover:text-[#F5C518] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-[#888888] text-xs">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#222222] bg-[#141414]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-3">
            Get strategies in your inbox
          </h2>
          <p className="text-[#888888] text-sm mb-8">
            Weekly tips for painting contractors who are serious about building a real business.
            No spam. Unsubscribe anytime.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#0a0a0a] border border-[#222222] rounded px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#F5C518] transition-colors"
            />
            <button className="bg-[#F5C518] text-black px-6 py-3 rounded font-black hover:bg-[#f0b800] transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
