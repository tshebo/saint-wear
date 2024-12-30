import Image from "next/image";

export default function Featured({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-yellow-400 py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h2
          className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-12`}
        >
          FEATURED
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            "Urban Pulse Collection",
            "Street Dreams Series",
            "Bold Statement Line",
          ].map((item, index) => (
            <div key={index} className="space-y-4 group">
              <div className="relative overflow-hidden bg-blue-600">
                <Image
                  src={`/hero.png?height=800&width=600&text=${item}`}
                  alt={item}
                  width={600}
                  height={800}
                  className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3
                className={`${bebasNeue.className} text-3xl font-bold group-hover:text-blue-600 transition-colors`}
              >
                {item}
              </h3>
              <p className="text-lg">Bold. Daring. Unforgettable.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
