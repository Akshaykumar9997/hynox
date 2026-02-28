import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Playfair Display for premium serif typography
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
})

// <CHANGE> Using Inter for clean sans-serif body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

export const metadata: Metadata = {
  title: "HYNOX | Enterprise IT Systems & Dedicated Support for Scaling Businesses",
  description:
    "Reduce downtime, increase efficiency, and scale operations with HYNOX Enterprise IT Solutions. Trusted partner for high-ticket IT projects (₹80L-1Cr) in India. 24/7 dedicated support, system integration, and cloud infrastructure.",
  keywords: [
    "enterprise IT support India",
    "business IT solutions",
    "IT system integration",
    "dedicated IT support team",
    "cloud infrastructure management",
    "enterprise software integration",
    "24/7 IT monitoring",
    "high-end IT support",
    "premium enterprise IT",
    "IT consulting India",
    "system optimization services"
  ],
  authors: [{ name: "HYNOX Enterprise IT Solutions" }],
  creator: "HYNOX",
  publisher: "HYNOX Enterprise IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hynox.com",
    siteName: "HYNOX Enterprise IT Solutions",
    title: "Enterprise IT Systems & Dedicated Support | HYNOX",
    description: "Your trusted partner for enterprise-grade IT systems, 24/7 support, and scalable infrastructure solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HYNOX Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYNOX | Enterprise IT Systems & Dedicated Support",
    description: "Reduce downtime and scale operations with HYNOX enterprise IT solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // <CHANGE> JSON-LD Schema for Enterprise IT Services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "HYNOX Enterprise IT Solutions",
    "description": "Enterprise IT Systems, Dedicated Support, Cloud Infrastructure, and System Integration for Scaling Businesses",
    "url": "https://hynox.com",
    "logo": "https://hynox.com/logo.png",
    "image": "https://hynox.com/og-image.png",
    "telephone": "+91-XXXXXXXXXX",
    "email": "contact@hynox.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "priceRange": "₹₹₹₹",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Enterprise Information Technology Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dedicated IT Support Team",
            "description": "24/7 dedicated IT support and monitoring for enterprise operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Integration & Optimization",
            "description": "Legacy and modern system integration for seamless operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & Infrastructure Management",
            "description": "Scalable cloud solutions and infrastructure management"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    }
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* <CHANGE> JSON-LD Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
