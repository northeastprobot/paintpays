import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Paint Pays | Build a Painting Business That Actually Pays',
  description:
    'Paint Pays gives serious painting contractors the systems, coaching, and marketing to scale past $1M — without working 80-hour weeks. Built by Thomas, who grew a $5M painting company in Buffalo, NY.',
  keywords: 'painting business coaching, painting contractor coaching, painting business marketing, painting company systems',
  openGraph: {
    title: 'Paint Pays | Build a Painting Business That Actually Pays',
    description:
      'Paint Pays gives serious painting contractors the systems, coaching, and marketing to scale past $1M.',
    siteName: 'Paint Pays',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#0a0a0a] text-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
