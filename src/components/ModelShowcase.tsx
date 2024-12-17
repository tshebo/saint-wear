'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { bebasNeue } from '@/lib/fonts'

export default function ModelShowcase() {
  const models = [
    { title: 'Street Style', alt: 'Model wearing Saintwear street style' },
    { title: 'Urban Chic', alt: 'Model showcasing Saintwear urban chic' },
    { title: 'Bold Patterns', alt: 'Model presenting Saintwear bold patterns' }
  ]

  return (
    <div className="py-16 border-b border-black">
      <h2 className={`${bebasNeue.className} text-4xl md:text-6xl font-bold mb-8`}>WEAR THE ATTITUDE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <div key={index} className="space-y-6">
            <div className="relative aspect-[3/4] hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src="/hero.png?height=600&width=450"
                alt={model.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <p className="text-lg font-semibold">{model.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button size="lg" className="bg-black text-white hover:bg-white hover:text-black transition-colors text-lg px-8 py-6">
          Explore Lookbook
        </Button>
      </div>
    </div>
  )
}