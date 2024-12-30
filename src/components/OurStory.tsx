import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurStory({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-blue-600 py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h2
          className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-12 text-white`}
        >
          OUR STORY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-white">
              Born from the streets and raised in the vibrant culture of urban
              life, Saintwear is more than just clothing – it&#39;s a statement for
              individuals and businesses alike.
            </p>
            <p className="text-xl text-white">
              We believe in the power of self-expression through bold colors,
              daring patterns, and cutting-edge designs that defy convention,
              whether you&#39;re an individual or a forward-thinking company.
            </p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Button>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/hero.png?height=600&width=800"
              alt="Saintwear Design Process"
              width={800}
              height={600}
              className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
