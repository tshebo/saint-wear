"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Printer,
  Users,
  Briefcase,
  Package,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function CorporatePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section with Parallax */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
              <div>
                <div className="w-20 h-1 bg-white mb-8 transform origin-left transition-all duration-1000 ease-out scale-x-100" />
                <h1
                  className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-6 opacity-0 animate-fadeIn`}
                >
                  CORPORATE
                  <br />
                  PRINTING
                  <br />
                  SOLUTIONS
                </h1>
                <p className="text-xl text-white/90 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
                  Premium custom printing services for businesses. From uniforms
                  to promotional materials, we deliver quality at scale.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className=" bg-white text-blue-600 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className=" bg-white text-blue-600 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 group"
                >
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="relative transform transition-all duration-1000 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 transform rotate-6 rounded-3xl transition-all duration-500 hover:rotate-3" />
              <Image
                src="/hero.png"
                alt="Corporate Printing Solutions"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-blue-400/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000">
            <h2
              className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold mb-6`}
            >
              COMPREHENSIVE BUSINESS SOLUTIONS
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end printing and branding solutions tailored for corporate
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Printer className="h-8 w-8" />,
                title: "Custom Printing",
                description:
                  "High-quality screen printing, embroidery, and digital printing services",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Uniform Programs",
                description:
                  "Managed uniform solutions for your entire organization",
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Promotional Items",
                description: "Branded merchandise and corporate gifts",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Business Essentials",
                description: "Corporate stationery and marketing materials",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Scalable Solutions",
                description: "Flexible programs that grow with your business",
              },
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Quality Guarantee",
                description: "Consistent quality across all orders, guaranteed",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl 
                  ${activeService === index ? "ring-2 ring-blue-500" : ""}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="text-blue-600 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Scroll Animations */}
      <section className="bg-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-1000 hover:scale-105">
              <Image
                src="/hero.png"
                alt="Corporate Printing Process"
                width={600}
                height={400}
                className="rounded-lg shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2
                className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold transform transition-all duration-1000`}
              >
                WHY CHOOSE US
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
                    title: "Premium Quality",
                    description:
                      "Industry-leading printing technology and materials",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-blue-600" />,
                    title: "Fast Turnaround",
                    description: "Quick delivery without compromising quality",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                    title: "Dedicated Support",
                    description: "Personal account manager for your business",
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                    title: "Bulk Pricing",
                    description: "Competitive rates for large orders",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 transform transition-all duration-500 hover:translate-x-2"
                  >
                    <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 transition-colors duration-300 hover:text-blue-600">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 hover:text-gray-900">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Hover Animations */}
      <section className="bg-blue-600 py-20 transform transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000`}
          >
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto transform transition-all duration-1000">
            Let's discuss how we can help elevate your brand with our corporate
            printing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
