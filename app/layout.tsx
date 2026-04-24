import type { Metadata } from 'next';
import { Inter, Inter_Tight, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://founderescapes.com'),
  title: 'Founder Escapes — Adventure Travel for Founders',
  description:
    'Small-group adventure trips for founders and operators. Genuinely wild places, real food, and the unstructured conversations that rarely happen at offsites.',
  openGraph: {
    title: 'Founder Escapes — Adventure Travel for Founders',
    description:
      'Small-group adventure trips for founders and operators. Genuinely wild places, real food, and the unstructured conversations that rarely happen at offsites.',
    type: 'website',
    url: 'https://founderescapes.com',
    siteName: 'Founder Escapes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founder Escapes — Adventure Travel for Founders',
    description: 'Small-group adventure trips for founders and operators.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${cormorant.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
