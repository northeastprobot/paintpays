import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Paint Pays | Painting Changed My Life',
  description:
    'Premium media brand for painting contractors. Conversations, coaching, and free game from a $5M painting company owner.',
  keywords:
    'painting business, painting contractor, painting company, paint pays, painting podcast, painting coaching',
  openGraph: {
    title: 'Paint Pays | Painting Changed My Life',
    description:
      'Premium media brand for painting contractors. Conversations, coaching, and free game from a $5M painting company owner.',
    siteName: 'Paint Pays',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paint Pays | Painting Changed My Life',
    description:
      'Premium media brand for painting contractors. Conversations, coaching, and free game from a $5M painting company owner.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-dark-bg text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
