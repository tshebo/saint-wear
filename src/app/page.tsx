'use client'
import { Montserrat, Bebas_Neue } from "next/font/google";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Featured from "@/components/Featured";
import WearTheAttitude from "@/components/WearTheAttitude";
import BusinessSolutions from "@/components/BusinessSolutions";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
    <main className={`min-h-screen ${montserrat.className} `}>
      {/* <CustomCursor/> */}
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
  );
}
