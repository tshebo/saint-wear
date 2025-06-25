"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { NextFont } from "next/dist/compiled/@next/font";

export default function Featured({ bebasNeue }: { bebasNeue: NextFont }) {
  const collections = [
    {
      title: "Elevated",
      description: "Bold. Daring. Unforgettable.",
      tags: ["New Season", "Trending"],
      image: "/sw (34).webp",
      alt: "Model wearing urban streetwear against city backdrop",
    },
    {
      title: "Layered",
      description: "Bold. Daring. Unforgettable.",
      tags: ["Limited Edition", "Best Seller"],
      image: "/sw (15).webp",
      alt: "Street style fashion showcase in urban setting",
    },
    {
      title: "Urban",
      description: "Bold. Daring. Unforgettable.",
      tags: ["Premium", "Exclusive"],
      image: "/ft-sect.jpg",
      alt: "Urban fashion with bold patterns and colors",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-yellow-400 to-yellow-300 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-[2000px] mx-auto relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 lg:mb-16">
          <div>
            <div className="w-16 h-1 bg-black mb-6 hidden sm:block" />
            <h2
              className={`${bebasNeue.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-none`}
            >
              HOLY THREADZ FOR A NEW GENERATION
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-black/70 mt-4 sm:mt-0">
            FROM STATEMENT TEES TO HOODIES, AND SWEATERS – OUR GEAR IS MADE TO
            INSPIRE, UPLIFT AND START CONVERSATIONS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-slate-900 transform group-hover:scale-95 transition-transform duration-500 rounded-lg" />
                <Link href="/collections">
                  <div className="relative z-10 aspect-[3/4] transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  </div>
                </Link>
              </div>

              {false && (
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-semibold bg-slate-900 text-white px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`${bebasNeue.className} text-2xl sm:text-3xl font-bold group-hover:text-blue-600 transition-colors flex items-center`}
                    >
                      {item.title}
                      <ArrowRight className="ml-2 h-6 w-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-base sm:text-lg text-black/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-20">
          <div className="w-16 h-1 bg-black mx-auto mb-8" />
          <h3
            className={`${bebasNeue.className} text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight`}
          >
            STYLE MEETS SCRIPTURE,
            <br />
            CULTURE MEETS CALLING
          </h3>
        </div>
      </div>
    </section>
  );
}
