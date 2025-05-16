// metadata.js for Contact Page
export const metadata = {
  // Basic SEO Metadata
  title: "Contact Saint Wear | Get in Touch with Our Team",
  description:
    "Have questions about Saint Wear products? Contact our team for sales inquiries, support, and business opportunities. We'll get back to you promptly.",
  keywords:
    "Saint Wear contact, clothing brand contact, custom apparel contact, Johannesburg clothing company, South African apparel contact",

  // Open Graph / Facebook Metadata
  openGraph: {
    title: "Contact Saint Wear | Let's Connect",
    description:
      "Have questions? We'd love to hear from you. Send us a message and we'll get back to you shortly.",
    url: "https://saintwear.co.za/contact",
    siteName: "Saint Wear",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/saintwear.co.za/logo-r.png", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Saint Wear Contact - Get in touch with our team",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Contact Saint Wear | Let's Connect",
    description:
      "Have questions about Saint Wear products? Reach out to our team for prompt assistance.",
    images: ["/saintwear.co.za/logo-r.png"], // Replace with your actual image path
    creator: "@saintwearsa",
    site: "@saintwearsa",
  },

  // Canonical URL
  alternates: {
    canonical: "https://saintwear.co.za/contact",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  // Structured data for local business (Google Rich Results)
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },

  // Additional metadata for e-commerce
  category: "Contact",
  applicationName: "Saint Wear",
  other: {
    "facebook-domain-verification": "your-facebook-domain-verification", // Replace with actual code if you have one
  },
};

// Optional: JSON-LD Structured Data for local business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Saint Wear",
  image: "https://saintwear.co.za/logo-r.png", // Replace with actual image
  "@id": "https://saintwear.co.za",
  url: "https://saintwear.co.za",
  telephone: "+27780700179",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Risana Avenue, Unit 68 Bolderview",
    addressLocality: "Johannesburg",
    postalCode: "2197",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.1052, // Replace with actual coordinates
    longitude: 28.025, // Replace with actual coordinates
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "16:00",
  },
  sameAs: [
    "https://instagram.com/saintwearsa",
    "https://facebook.com/saintwearssa",
  ],
}; /*}

// Implementation in Contact Page
// To implement this metadata, you would typically:
// 1. Import the metadata object into your page
// 2. Use Next.js Metadata API to apply it to your page
// Example:
/*
import { metadata, localBusinessSchema } from './metadata';

export { metadata };

// To add the JSON-LD schema to the page:
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {/* Rest of your contact page component */
    </>
  );
}
*/
