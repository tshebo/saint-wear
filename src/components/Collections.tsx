"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Eye } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Collection = {
  id: number;
  name: string;
  category: string;
  image: string;
  isNew?: boolean;
};

function Modal({
  item,
  isOpen,
  onClose,
}: {
  item: Collection;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl rounded-xl bg-white shadow-2xl transform transition-all">
          <div className="absolute right-4 top-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-black/10"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image Section */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className={`${bebasNeue.className} text-3xl font-bold`}>
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                        New Arrival
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Premium quality {item.category.toLowerCase()} piece designed
                    for style and comfort. Made with high-quality materials and
                    attention to detail.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Material</div>
                      <div className="font-medium">Premium Cotton</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Style</div>
                      <div className="font-medium">Contemporary</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8">
                <Button className="w-full bg-yellow-400 text-black hover:bg-blue-600 hover:text-white transition-colors group">
                  View Full Details
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrollY, setScrollY] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Collection | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "All",
    "New Arrivals",
    "Streetwear",
    "Athleisure",
    "Business",
  ];

  const collections = [
    {
      id: 1,
      name: "Urban Classic Hoodie",
      category: "Streetwear",
      image: "/hero.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Tech Performance Jacket",
      category: "Athleisure",
      image: "/hero.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Business Casual Polo",
      category: "Business",
      image: "/hero.png",
    },
    {
      id: 4,
      name: "Street Art Tee",
      category: "Streetwear",
      image: "/hero.png",
    },
    {
      id: 5,
      name: "Sport Performance Tee",
      category: "Athleisure",
      image: "/hero.png",
      isNew: true,
    },
    {
      id: 6,
      name: "Modern Fit Blazer",
      category: "Business",
      image: "/hero.png",
    },
  ];

  const filteredCollections =
    activeCategory === "All"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          backgroundImage: "url('/hero.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Add a dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/90 to-yellow-500/90" />

        {/* Your existing dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Rest of your content remains the same */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {" "}
          {/* Added relative here */}
          <div className="text-center relative">
            <div className="w-20 h-1 bg-black mb-8 mx-auto" />
            <h1
              className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-black mb-6 tracking-tight`}
            >
              OUR COLLECTIONS
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium">
              Discover our latest collections featuring premium quality
              streetwear, athleisure, and business attire.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 bottom-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b backdrop-blur-sm sticky top-0 z-30 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`
                  relative overflow-hidden text-lg py-6 px-8 transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "text-blue-600 hover:text-yellow-600 border-blue-600 hover:border-yellow-400"
                  }
                `}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute inset-0 bg-black/5" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((item) => (
              <div key={item.id} className="group relative">
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Button
                      size="icon"
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-yellow-400 hover:text-black backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                    >
                      <Eye className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`${bebasNeue.className} text-xl group-hover:text-blue-600 transition-colors`}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-blue-600/80 mt-2 tracking-wide uppercase">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </main>
  );
}
