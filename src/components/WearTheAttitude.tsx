import Image from "next/image";

export default function WearTheAttitude({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h2
          className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-12 text-white`}
        >
          WEAR THE ATTITUDE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            "Street Style",
            "Urban Chic",
            "Bold Patterns",
            "Corporate Edge",
          ].map((style, index) => (
            <div key={index} className="space-y-4 group">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-color"></div>
                <Image
                  src={`/hero.png?height=600&width=600&text=${style}`}
                  alt={`Model showcasing ${style}`}
                  width={600}
                  height={600}
                  className="aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p
                className={`${bebasNeue.className} text-2xl font-bold text-white group-hover:text-blue-600 transition-colors`}
              >
                {style}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
