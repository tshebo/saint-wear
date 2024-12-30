import { Button } from "@/components/ui/button"

export default function JoinTheMovement({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-yellow-400 py-24 px-8">
      <div className="max-w-[2000px] mx-auto text-center">
        <h2 className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-8`}>JOIN THE MOVEMENT</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xl">
            Be the first to know about new collections, exclusive events, and the latest from Saintwear for both individuals and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 border-2 border-black bg-transparent placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button 
              className="bg-blue-600 text-white hover:bg-black transition-colors px-8 py-6"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

