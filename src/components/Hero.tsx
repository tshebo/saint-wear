import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Briefcase, MessageCircle } from "lucide-react";

export default function Hero({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #030917 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Decorative Element */}
            <div className="w-16 h-1 bg-black hidden sm:block" />

            {/* Main Content */}
            <div className="space-y-6">
              <h1
                className={`${bebasNeue.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black leading-[0.9] hover:text-white transition-colors`}
              >
                DRIP
                <br />
                WITH
                <br />
                PURPOSE
              </h1>
              <p className="text-lg sm:text-xl text-black/80 font-medium max-w-2xl leading-relaxed">
             Don’t Just Wear It. Live It!A bold expression of KingdomCulture. Street-Ready. Spirit-Led.Faith-Rooted.
              </p>
            </div>

            {/* Buttons with Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=27662143840&text=Hello%2C+I+have+a+business+query%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-600 transition-all duration-300 text-base sm:text-lg w-full px-8 py-6 shadow-lg hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center">
                    Contact Us
                    <MessageCircle className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transform group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </a>
              <Link href="/business" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300 text-base sm:text-lg w-full px-8 py-6 group"
                >
                  <span className="flex items-center justify-center">
                    Business Solutions
                    <Briefcase className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transform group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Image Container with Multiple Effects */}
            <div className="relative">
              {/* Blue Background Shape */}
              <div className="absolute inset-0 bg-slate-900 transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 rounded-lg" />

              {/* Main Image Container */}
              <div className="relative z-10 aspect-square max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl group">
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500 z-10" />

                {/* Image */}
                <Image
                  src="/sw (1).webp"
                  alt="Saintwear Showcase"
                  fill
                  className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Border Decoration */}
                <div className="absolute inset-0 border border-white/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
