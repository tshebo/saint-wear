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
        <div className="max-w-xl mb-12 lg:mb-16">
          <h2
            className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none mb-4`}
          >
            OUR STORY
          </h2>
          <div className="w-20 h-1 bg-white opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Born from the streets and raised in the vibrant culture of urban
                life, Saintwear is more than just clothing – it&#39;s a
                statement for individuals and businesses alike.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                We believe in the power of self-expression through bold colors,
                daring patterns, and cutting-edge designs that defy convention,
                whether you&#39;re an individual or a forward-thinking company.
              </p>
            </div>
            {/* <div className="pt-4">
              <Button
                size="lg"
                variant="outline"
                className="text-primary border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 group"
              >
                <span className="flex items-center">
                  Learn More 
                  <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"/>
                </span>
              </Button>
            </div> */}
          </div>

          <div className="relative">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg group">
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500" />

              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/sw (17).webp?height=600&width=800"
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
