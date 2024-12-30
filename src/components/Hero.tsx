import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight, Briefcase } from 'lucide-react'

export default function Hero({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="max-w-[2000px] mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className={`${bebasNeue.className} text-8xl md:text-9xl font-bold text-black leading-none hover:text-blue-600 transition-colors`}>
            BOLD<br />VIBRANT<br />STYLE
          </h1>
          <p className="text-xl text-black font-semibold">
            Saintwear: Where fashion meets attitude for individuals and businesses
          </p>
          <div className="flex space-x-4">
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-black transition-colors text-lg px-8 py-6"
            >
              Shop Collection <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-lg px-8 py-6"
            >
              Business Solutions <Briefcase className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
          <Image
            src="/hero.png?height=800&width=800"
            alt="Saintwear Showcase"
            width={800}
            height={800}
            className="relative z-10 group-hover:scale-95 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

