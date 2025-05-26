import Image from "next/image";

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
      title: "Street Styl",
      description: "Urban-inspired casual wear",
      image: "/wta.webp",
      alt: "Model wearing street style fashion",
      accent: "blue",
    },
    {
      title: "Kingdom-centered designs",
      description: "",
      image: "",
      alt: "",
      accent: "purple",
    },
    {
      title: "Quality that you can feel.",
      description: "",
      image: "",
      alt: "",
      accent: "yellow",
    },
    {
      title: "A voice for the next generation",
      description: "",
      image: "",
      alt: "",
      accent: "yellow",
    },
    {
      title: "Created with excellence -- as unto the Lord",
      description: "",
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

      <div className="max-w-[1600px] mx-auto relative">
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Card */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4">
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
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </div>
{/*             <h3
              className={`${bebasNeue.className} text-3xl sm:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors text-center`}
            >
              {styles[0].title}
            </h3> */}
          </div>

          {/* Right: Enhanced Bullet List */}
          <div className="space-y-6">
            {styles.slice(1).map((style, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-white/10 rounded-xl p-4 hover:border-yellow-400 transition-all group"
              >
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                </div>
                <h4
                  className={`${bebasNeue.className} text-xl sm:text-2xl text-white font-bold group-hover:text-yellow-400 transition-colors`}
                >
                  {style.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
