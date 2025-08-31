
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-headline',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moemoeenterprise.com'),
  title: {
    default: 'MoeMoe Enterprises | Courier & Cleaning in Atlanta',
    template: '%s | MoeMoe Enterprises',
  },
  description: 'MoeMoe Enterprises offers professional courier and cleaning services in Atlanta, Tucker, and surrounding Georgia areas. Get a free quote for fast, reliable service.',
  keywords: ['courier service Atlanta', 'cleaning service Atlanta', 'delivery service Georgia', 'office cleaning Tucker GA', 'MoeMoe Enterprises'],
  openGraph: {
    title: 'MoeMoe Enterprises | Reliable Courier & Cleaning in Atlanta, GA',
    description: 'Fast, reliable, and professional services for your home and business needs.',
    url: 'https://moemoeenterprise.com',
    siteName: 'MoeMoe Enterprises',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoeMoe Enterprises | Reliable Courier & Cleaning in Atlanta, GA',
    description: 'Your trusted partner for courier and cleaning services in the greater Atlanta area.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("font-body antialiased bg-background text-foreground", fontBody.variable, fontHeadline.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
