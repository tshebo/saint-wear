import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function OurStory({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-[2000px] mx-auto relative">
        <div className="max-w-xl mb-6 lg:mb-8">
          <h2
            className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none mb-4`}
          >
            SET APART.<br/>STYLED DIFFERENT.
          </h2>
          <div className="w-20 h-1 bg-white opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Saint Wear is a Christian-owned streetwear and
            lifestyle brand designed for the <b>young</b>,<b>bold</b>, and <b>unashamed</b>.
            Every thread we stitch is a declaration — of <b>purpose</b>,
            of <b>faith</b>, of <b>identity</b>. We&#39;re not here to fit in.
            We’re here to stand out for Jesus.
              </p>
            </div>
         
          </div>

          <div className="relative">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg group">
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500" />

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/sw-story.jpg?height=600&width=800"
                  alt="Saintwear Design Process"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Border Decoration */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg transform scale-95 group-hover:scale-100 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
