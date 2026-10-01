import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from '@/components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mprog.eu'),
  title: {
    default: 'Mobile Product Genius | Driven by Innovation. Defined by Experience.',
    template: '%s | Mobile Product Genius',
  },
  description:
    'International automotive consulting, training & coaching, and VIP event execution across Europe, Middle East & North Africa. Certified OEM expertise.',
  keywords: [
    'Mobile Product Genius',
    'MProG',
    'Automotive Consulting',
    'Automotive Training',
    'Sales Coaching',
    'VIP Events',
    'Motor Show Presentation',
    'EV Training',
    'Luxury Customer Experience',
    'BMW Group',
    'Mercedes-Benz',
    'München',
  ],
  authors: [{ name: 'Mobile Product Genius UG' }],
  creator: 'Mobile Product Genius UG',
  publisher: 'Mobile Product Genius UG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: 'https://www.mprog.eu',
    siteName: 'Mobile Product Genius',
    title: 'Mobile Product Genius | Driven by Innovation. Defined by Experience.',
    description:
      'Wirkungsvolle Produkt und Verkaufstrainings, strategische Beratung und exklusive VIP-Eventumsetzung für führende globale Luxusmarken.',
    images: [
      {
        url: '/assets/images/hero-saidi-bmw7.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile Product Genius - Automotive Consulting & Event Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Product Genius | Driven by Innovation. Defined by Experience.',
    description:
      'Automotive training, strategic dealership consulting & VIP event execution across Europe, Middle East & North Africa.',
    images: ['/assets/images/hero-saidi-bmw7.jpg'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mobile Product Genius UG',
  alternateName: ['MProG', 'MPG'],
  url: 'https://www.mprog.eu',
  logo: 'https://www.mprog.eu/assets/images/mprog-logo.png',
  image: 'https://www.mprog.eu/assets/images/hero-saidi-bmw7.jpg',
  description:
    'Over 15 years of international expertise in automotive product & sales training, dealership consulting, and VIP event execution.',
  email: 'info@mprog.eu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ruth-Drexel-Strasse 17',
    addressLocality: 'München',
    postalCode: '81927',
    addressCountry: 'DE',
  },
  areaServed: ['Europe', 'Middle East', 'North Africa'],
  sameAs: ['https://www.mprog.eu'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080D0A] text-[#F5F6F4] antialiased min-h-screen flex flex-col font-sans">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
