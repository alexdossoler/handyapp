import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppyHandy - Professional Handyman Services | Quality Home Repairs",
  description: "Quality home repairs and improvements you can trust. Professional handyman services including plumbing, electrical, carpentry, and more. Licensed & insured. Call (864) 743-3178 for a free quote.",
  keywords: "handyman services, home repairs, plumbing, electrical, carpentry, home improvement, licensed handyman, professional repairs, quality workmanship, Greenville SC",
  authors: [{ name: "AppyHandy", url: "https://appyhandy.com" }],
  creator: "AppyHandy",
  publisher: "AppyHandy",
  category: "Home Services",
  classification: "Local Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://appyhandy.com'),
  icons: {
    icon: [
      { url: '/logo-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/logo-icon.svg'
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AppyHandy - Professional Handyman Services",
    description: "Quality home repairs and improvements you can trust. From small fixes to major projects, we handle it all with expertise and care.",
    url: 'https://appyhandy.com',
    siteName: 'AppyHandy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AppyHandy - Professional Handyman Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppyHandy - Professional Handyman Services',
    description: 'Quality home repairs and improvements you can trust. Licensed & insured handyman services.',
    images: ['/og-image.jpg'],
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AppyHandy",
              "image": "https://appyhandy.com/og-image.jpg",
              "description": "Professional handyman services for quality home repairs and improvements. Licensed & insured.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Greenville",
                "addressRegion": "SC",
                "addressCountry": "US",
                "postalCode": "29601"
              },
              "telephone": "+18647433178",
              "url": "https://appyhandy.com",
              "email": "info@appyhandy.com",
              "priceRange": "$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-17:00"
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Check"],
              "currenciesAccepted": "USD",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "34.8526",
                  "longitude": "-82.3940"
                },
                "geoRadius": "50000"
              },
              "areaServed": "Greenville, SC and surrounding areas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Handyman Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Plumbing Repairs",
                      "description": "Professional plumbing installation and repair services",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "AppyHandy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Work",
                      "description": "Safe electrical installation and repair services",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "AppyHandy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpentry & Woodwork",
                      "description": "Custom carpentry and woodworking services",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "AppyHandy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Renovation",
                      "description": "Complete home renovation and improvement services",
                      "provider": {
                        "@type": "LocalBusiness",
                        "name": "AppyHandy"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewBody": "Excellent service! Fixed our kitchen faucet quickly and professionally."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/appyhandy",
                "https://www.instagram.com/appyhandy",
                "https://www.linkedin.com/company/appyhandy"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://appyhandy.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Handyman Services",
                  "item": "https://appyhandy.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Gallery",
                  "item": "https://appyhandy.com/#gallery"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
