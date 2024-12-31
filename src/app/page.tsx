import { Montserrat, Bebas_Neue } from "next/font/google";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Featured from "@/components/Featured";
import WearTheAttitude from "@/components/WearTheAttitude";
import BusinessSolutions from "@/components/BusinessSolutions";
import Contact from "@/components/Contact";
import JoinTheMovement from "@/components/JoinTheMovement";
import Footer from "@/components/Footer";
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
  return (
    <main className={`min-h-screen ${montserrat.className} cursor-none`}>
      <CustomCursor />
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
