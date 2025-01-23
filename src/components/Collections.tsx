
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
                <Button className="w-full bg-yellow-400 text-black hover:bg-slate-900 hover:text-white transition-colors group">
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

const ITEMS_PER_PAGE = 20; // Number of items to display per page

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrollY, setScrollY] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Collection | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // New state for current page

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
      image: "/logo-black.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Urban Classic Hoodie",
      category: "Streetwear",
      image: "/sw (1).webp",
      isNew: true,
    },
    {
      id: 3,
      name: "Collection 1",
      category: "Streetwear",
      image: "/sw (2).webp",
      isNew: true,
    },
    {
      id: 4,
      name: "Collection 2",
      category: "Streetwear",
      image: "/sw (3).webp",
      isNew: true,
    },
    {
      id: 5,
      name: "Collection 3",
      category: "Streetwear",
      image: "/sw (4).webp",
      isNew: true,
    },
    {
      id: 6,
      name: "Collection 4",
      category: "Streetwear",
      image: "/sw (5).webp",
      isNew: true,
    },
    {
      id: 7,
      name: "Collection 5",
      category: "Streetwear",
      image: "/sw (6).webp",
      isNew: true,
    },
    {
      id: 8,
      name: "Collection 6",
      category: "Streetwear",
      image: "/sw (7).webp",
      isNew: true,
    },
    {
      id: 9,
      name: "Collection 7",
      category: "Streetwear",
      image: "/sw (8).webp",
      isNew: true,
    },
    {
      id: 10,
      name: "Collection 8",
      category: "Streetwear",
      image: "/sw (9).webp",
      isNew: true,
    },
    {
      id: 11,
      name: "Collection 9",
      category: "Streetwear",
      image: "/sw (10).webp",
      isNew: true,
    },
    {
      id: 12,
      name: "Collection 10",
      category: "Streetwear",
      image: "/sw (11).webp",
      isNew: true,
    },
    {
      id: 13,
      name: "Collection 11",
      category: "Streetwear",
      image: "/sw (12).webp",
      isNew: true,
    },
    {
      id: 14,
      name: "Collection 12",
      category: "Streetwear",
      image: "/sw (13).webp",
      isNew: true,
    },
    {
      id: 15,
      name: "Collection 13",
      category: "Streetwear",
      image: "/sw (14).webp",
      isNew: true,
    },
    {
      id: 16,
      name: "Collection 14",
      category: "Streetwear",
      image: "/sw (15).webp",
      isNew: true,
    },
    {
      id: 17,
      name: "Collection 15",
      category: "Streetwear",
      image: "/sw (16).webp",
      isNew: true,
    },
    {
      id: 18,
      name: "Collection 16",
      category: "Streetwear",
      image: "/sw (17).webp",
      isNew: true,
    },
    {
      id: 19,
      name: "Collection 17",
      category: "Streetwear",
      image: "/sw (18).webp",
      isNew: true,
    },
    {
      id: 20,
      name: "Collection 18",
      category: "Streetwear",
      image: "/sw (19).webp",
      isNew: true,
    },
    {
      id: 21,
      name: "Collection 19",
      category: "Streetwear",
      image: "/sw (20).webp",
      isNew: true,
    },
    {
      id: 22,
      name: "Collection 20",
      category: "Streetwear",
      image: "/sw (21).webp",
      isNew: true,
    },
    {
      id: 23,
      name: "Collection 21",
      category: "Streetwear",
      image: "/sw (22).webp",
      isNew: true,
    },
    {
      id: 24,
      name: "Collection 22",
      category: "Streetwear",
      image: "/sw (23).webp",
      isNew: true,
    },
    {
      id: 25,
      name: "Collection 23",
      category: "Streetwear",
      image: "/sw (24).webp",
      isNew: true,
    },
    {
      id: 26,
      name: "Collection 24",
      category: "Streetwear",
      image: "/sw (25).webp",
      isNew: true,
    },
    {
      id: 27,
      name: "Collection 25",
      category: "Streetwear",
      image: "/sw (26).webp",
      isNew: true,
    },
    {
      id: 28,
      name: "Collection 26",
      category: "Streetwear",
      image: "/sw (27).webp",
      isNew: true,
    },
    {
      id: 29,
      name: "Collection 27",
      category: "Streetwear",
      image: "/sw (28).webp",
      isNew: true,
    },
    {
      id: 30,
      name: "Collection 28",
      category: "Streetwear",
      image: "/sw (29).webp",
      isNew: true,
    },
    {
      id: 31,
      name: "Collection 29",
      category: "Streetwear",
      image: "/sw (30).webp",
      isNew: true,
    },
    {
      id: 32,
      name: "Collection 30",
      category: "Streetwear",
      image: "/sw (31).webp",
      isNew: true,
    },
    {
      id: 33,
      name: "Collection 31",
      category: "Streetwear",
      image: "/sw (32).webp",
      isNew: true,
    },
    {
      id: 34,
      name: "Collection 32",
      category: "Streetwear",
      image: "/sw (33).webp",
      isNew: true,
    },
    {
      id: 35,
      name: "Collection 33",
      category: "Streetwear",
      image: "/sw (34).webp",
      isNew: true,
    },
    {
      id: 36,
      name: "Collection 34",
      category: "Streetwear",
      image: "/sw (35).webp",
      isNew: true,
    },
    {
      id: 37,
      name: "Collection 35",
      category: "Streetwear",
      image: "/sw (36).webp",
      isNew: true,
    },
    {
      id: 38,
      name: "Collection 36",
      category: "Streetwear",
      image: "/sw (37).webp",
      isNew: true,
    },
    {
      id: 39,
      name: "Collection 37",
      category: "Streetwear",
      image: "/sw (38).webp",
      isNew: true,
    },
    {
      id: 40,
      name: "Collection 38",
      category: "Streetwear",
      image: "/sw (39).webp",
      isNew: true,
    },
    {
      id: 41,
      name: "Collection 39",
      category: "Streetwear",
      image: "/sw (40).webp",
      isNew: true,
    },
    {
      id: 42,
      name: "Collection 40",
      category: "Streetwear",
      image: "/sw (41).webp",
      isNew: true,
    },
  ];

  const filteredCollections =
    activeCategory === "All"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCollections.length / ITEMS_PER_PAGE);

  // Calculate the collections to display for the current page
  const displayedCollections = filteredCollections.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          backgroundImage: "url('/sw (30).webp')", // Replace with your image path
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
        <div className="absolute left-0 bottom-0 w-40 h-40 bg-slate-900/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-40 h-40 bg-slate-900/10 rounded-full blur-3xl" />
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
                      : "text-black hover:text-yellow-600 border-black hover:border-yellow-400"
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
            {displayedCollections.map((item) => (
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
                        className={`${bebasNeue.className} text-xl group-hover:text-yellow-400 transition-colors`}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-yellow-600/80 mt-2 tracking-wide uppercase">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center py-4">
        <Button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

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
