'use client'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { bebasNeue } from '@/lib/fonts'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 border-b border-black">
      <div className="space-y-8">
        <h1 className={`${bebasNeue.className} text-7xl md:text-8xl font-bold text-black leading-none`}>
          BOLD<br />VIBRANT<br />STYLE
        </h1>
        <p className="text-xl text-black font-semibold">
          Elevate your wardrobe with our daring collection
        </p>
        <Button size="lg" className="bg-black text-white hover:bg-white hover:text-black transition-colors text-lg px-8 py-6">
          Shop Now <ChevronRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4"></div>
        <Image
          src="/hero.png?height=600&width=600"
          alt="Saintwear Collection"
          width={600}
          height={600}
          className="relative z-10"
        />
      </div>
    </div>
  )
}
