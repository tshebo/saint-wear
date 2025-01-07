"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Printer, Users, Package, Briefcase } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const portfolioItems = [
  {
    category: "Custom Printing",
    items: [
      {
        title: "Tech Corp Branded Apparel",
        image: "/placeholder.svg?height=400&width=600&text=Tech+Corp+Apparel",
        description:
          "Full range of custom printed apparel for Tech Corp's 5000+ employees.",
      },
      {
        title: "StartUp Inc. Office Makeover",
        image: "/placeholder.svg?height=400&width=600&text=StartUp+Inc+Office",
        description:
          "Complete office branding including wall graphics, signage, and printed materials.",
      },
      {
        title: "EcoFriendly Co. Sustainable Prints",
        image: "/placeholder.svg?height=400&width=600&text=EcoFriendly+Prints",
        description:
          "Eco-friendly printing solutions for company's green initiative.",
      },
    ],
  },
  {
    category: "Uniform Programs",
    items: [
      {
        title: "National Retail Chain Uniforms",
        image:
          "/placeholder.svg?height=400&width=600&text=Retail+Chain+Uniforms",
        description: "Nationwide uniform program for 10,000+ retail employees.",
      },
      {
        title: "Healthcare Provider Staff Attire",
        image:
          "/placeholder.svg?height=400&width=600&text=Healthcare+Staff+Attire",
        description:
          "Customized medical uniforms for a network of hospitals and clinics.",
      },
      {
        title: "Hotel Group Hospitality Wear",
        image:
          "/placeholder.svg?height=400&width=600&text=Hotel+Hospitality+Wear",
        description:
          "Elegant and practical uniforms for a luxury hotel chain's staff.",
      },
    ],
  },
  {
    category: "Promotional Items",
    items: [
      {
        title: "Annual Tech Conference Swag",
        image:
          "/placeholder.svg?height=400&width=600&text=Tech+Conference+Swag",
        description:
          "Comprehensive range of branded merchandise for a major tech conference.",
      },
      {
        title: "Bank's Customer Appreciation Gifts",
        image: "/placeholder.svg?height=400&width=600&text=Bank+Customer+Gifts",
        description:
          "High-quality promotional items for a bank's VIP customer program.",
      },
      {
        title: "Sports Team Fan Merchandise",
        image: "/placeholder.svg?height=400&width=600&text=Sports+Team+Merch",
        description:
          "Official licensed merchandise for a professional sports team.",
      },
    ],
  },
  {
    category: "Business Essentials",
    items: [
      {
        title: "Law Firm Stationery Suite",
        image: "/placeholder.svg?height=400&width=600&text=Law+Firm+Stationery",
        description:
          "Premium stationery and business cards for a prestigious law firm.",
      },
      {
        title: "Real Estate Agency Marketing Kit",
        image:
          "/placeholder.svg?height=400&width=600&text=Real+Estate+Marketing",
        description:
          "Comprehensive marketing materials for a growing real estate agency.",
      },
      {
        title: "Startup Pitch Deck & Materials",
        image: "/placeholder.svg?height=400&width=600&text=Startup+Pitch+Deck",
        description:
          "Eye-catching pitch deck and leave-behind materials for a tech startup.",
      },
    ],
  },
];

const PortfolioItem = ({
  item,
}: {
  item: { title: string; image: string; description: string };
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-0">
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3
                className={`${bebasNeue.className} text-2xl font-bold text-blue-600`}
              >
                {item.title}
              </h3>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle
            className={`${bebasNeue.className} text-3xl font-bold text-blue-600`}
          >
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(portfolioItems[0].category);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6`}
          >
            OUR PORTFOLIO
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Explore our diverse range of corporate printing solutions. From
            custom apparel to comprehensive branding projects, we deliver
            quality at scale.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start mb-8 overflow-x-auto flex-wrap">
              {portfolioItems.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className={`${bebasNeue.className} text-xl px-6 py-3`}
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {portfolioItems.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <PortfolioItem item={item} />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold text-white mb-6`}
          >
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your corporate printing vision to
            life. Our team is ready to deliver exceptional quality and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Link
                target="_blank"
                href="https://wa.me/27662143840?text=Hello%2C%20I%20would%20like%20a%20quote%20!"
              >
                Request a Quote
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Send us an email</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
