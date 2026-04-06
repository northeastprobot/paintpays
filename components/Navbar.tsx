'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Watch', href: '/episodes' },
  { label: 'Listen', href: '/podcast' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Merch', href: '/merch' },
  { label: 'Mission', href: '/mission' },
];

function PPLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Square frame */}
      <rect x="2" y="2" width="44" height="44" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      {/* P letters - stylized monogram */}
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fill="white"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-1"
      >
        PP
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <PPLogo className="w-9 h-9" />
            <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
              PAINT PAYS
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#AAAAAA] hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="ml-2 px-5 py-2 bg-gold text-black text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] transition-all duration-300 lg:hidden flex flex-col items-center justify-center ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-semibold tracking-wide hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-gold text-black text-lg font-semibold rounded-sm hover:bg-gold-light transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </>
  );
}
