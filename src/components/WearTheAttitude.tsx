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
      description: "Urban-inspired casual wear",
      image: "/sw (20).webp",
      alt: "Model wearing street style fashion",
      accent: "blue",
    },
    {
      title: "Casual and Relaxed",
      description: "Sophisticated casual fashion that stands out",
      image: "",
      alt: "",
      accent: "purple",
    },
    {
      title: "Bold Patterns",
      description: "Eye-catching designs that make a statement",
      image: "",
      alt: "",
      accent: "yellow",
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
            MORE THAN MERCH.
            <br />
            IT&apos;S A MOVEMENT
          </h2>
        </div>

        {/* Grid: One image + one bullet list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: First image card */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <div
                className={`absolute inset-0 ${
                  accentColors[styles[0].accent]
                } transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-overlay`}
              />
              <div className="aspect-square">
                <Image
                  src={styles[0].image}
                  alt={styles[0].alt}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/90 text-sm mb-2">
                    {styles[0].description}
                  </p>
                </div>
              </div>
            </div>
            <h3
              className={`${bebasNeue.className} text-2xl sm:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors`}
            >
              {styles[0].title}
            </h3>
          </div>

          {/* Right: Bullet list */}
          <ul className="space-y-6 text-white text-lg">
            {styles.slice(1).map((style, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 text-yellow-400">•</span>
                <div>
                  <h4 className={`${bebasNeue.className} text-xl font-bold`}>
                    {style.title}
                  </h4>
                  <p className="text-white/80 text-base">{style.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
