'use client'

import { Montserrat, Bebas_Neue } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Featured from "@/components/Featured";
import WearTheAttitude from "@/components/WearTheAttitude";
import BusinessSolutions from "@/components/BusinessSolutions";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Note: Since this is a client component ('use client'),
// we'll need to add the SEO metadata using Head from next/head
// rather than using the App Router metadata API

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionBottom = section.getBoundingClientRect().bottom
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('animate-fade-in')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Saintwear | Bold Fashion for Individuals & Businesses</title>
        <meta name="description" content="Saintwear: Where fashion meets attitude for individuals and businesses. Discover bold, vibrant styles and custom business solutions." />
        
        {/* Standard SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="fashion, custom clothing, business apparel, bold style, Saintwear, South Africa, Christian Clothing, printing solutions, custom printing" />
        <meta name="author" content="Saintwear" />
        
        {/* OpenGraph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saintwear.co.za/" />
        <meta property="og:title" content="Saintwear | Bold Fashion for Individuals & Businesses" />
        <meta property="og:description" content="Where fashion meets attitude. Discover bold, vibrant styles and custom business solutions at Saintwear." />
        <meta property="og:image" content="https://saintwear.co.za/logo-black.png" />
        <meta property="og:image:alt" content="Saintwear Fashion Showcase" />
        <meta property="og:site_name" content="Saintwear" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saintwear.co.za/" />
        <meta name="twitter:title" content="Saintwear | Bold Fashion for Individuals & Businesses" />
        <meta name="twitter:description" content="Where fashion meets attitude. Discover bold, vibrant styles and custom business solutions at Saintwear." />
        <meta name="twitter:image" content="https://saintwear.co.za/logo-black.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-black.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://saintwear.co.za/" />
      </Head>

      <main className={`min-h-screen ${montserrat.className} `}>
        <div className="bg-yellow-400">
          <Hero bebasNeue={bebasNeue} />
        </div>
        <OurStory bebasNeue={bebasNeue} />
        <Featured bebasNeue={bebasNeue} />
        <WearTheAttitude bebasNeue={bebasNeue} />
        <BusinessSolutions bebasNeue={bebasNeue} />
        <Contact bebasNeue={bebasNeue} />
        {/* <JoinTheMovement bebasNeue={bebasNeue} /> */}
      </main>
    </>
  );
}
