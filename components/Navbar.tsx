'use client';
import Link from 'next/link';
import { PaintPaysLogo } from './PaintPaysLogo';
import { useState } from 'react';

const navLinks = [
  { label: 'Academy', href: '/academy' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <PaintPaysLogo size={36} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#888888] hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/coaching"
              className="bg-[#F5C518] text-black px-5 py-2 rounded font-bold text-sm hover:bg-[#f0b800] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#222222] px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[#888888] hover:text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/coaching"
            className="mt-4 block text-center bg-[#F5C518] text-black px-5 py-2 rounded font-bold text-sm"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
