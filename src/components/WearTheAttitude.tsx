import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type AccentColor = "blue" | "purple" | "yellow" | "red";

interface StyleItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: AccentColor;
}

export default function WearTheAttitude({ bebasNeue }: { bebasNeue: any }) {
  const styles: StyleItem[] = [
    {
      title: "Street Style",
      description: "Urban-inspired casual wear with attitude",
      image: "/hero.png",
      alt: "Model wearing street style fashion",
      accent: "blue",
    },
    {
      title: "Urban Chic",
      description: "Sophisticated city fashion that stands out",
      image: "/hero.png",
      alt: "Urban chic fashion showcase",
      accent: "purple",
    },
    {
      title: "Bold Patterns",
      description: "Eye-catching designs that make a statement",
      image: "/hero.png",
      alt: "Bold pattern fashion display",
      accent: "yellow",
    },
    {
      title: "Corporate Edge",
      description: "Professional wear with modern flair",
      image: "/hero.png",
      alt: "Professional attire with edge",
      accent: "red",
    },
  ];

  const accentColors: Record<AccentColor, string> = {
    blue: "bg-slate-900",
    purple: "bg-purple-600",
    yellow: "bg-yellow-400",
    red: "bg-red-600",
  };

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
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="w-20 h-1 bg-white opacity-50 mb-6" />
          <h2
            className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none`}
          >
            WEAR THE
            <br />
            ATTITUDE
          </h2>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {styles.map((style, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                {/* Color Overlay */}
                <div
                  className={`absolute inset-0 ${
                    accentColors[style.accent]
                  } transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-overlay`}
                />

                {/* Image */}
                <div className="aspect-square">
                  <Image
                    src={style.image}
                    alt={style.alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Hover Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white/90 text-sm mb-2">
                      {style.description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-white text-xs font-medium">
                        Explore Collection
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3
                  className={`${bebasNeue.className} text-2xl sm:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors`}
                >
                  {style.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
