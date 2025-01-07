import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Printer,
  Palette,
  Building2,
  Package,
  Badge,
  Users,
} from "lucide-react";
import Link from "next/link";
interface BusinessFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BusinessSolutions({ bebasNeue }: { bebasNeue: any }) {
  const features: BusinessFeature[] = [
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Custom Printing",
      description:
        "High-quality screen printing, embroidery, and digital prints",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Services",
      description: "Professional design team to bring your ideas to life",
    },
    {
      icon: <Badge className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Wide range of fabrics suitable for any printing technique",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Bulk Orders",
      description:
        "Volume discounts with consistent quality across large orders",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
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

      <div className="max-w-[2000px] mx-auto relative">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="w-20 h-1 bg-white opacity-50 mb-6" />
          <h2
            className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none`}
          >
            BUSINESS
            <br />
            SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Transform your brand with Saintwear&apos;s professional printing
                solutions. Our printing facility delivers exceptional quality
                for all your business needs - from custom uniforms to
                promotional merchandise.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Whether you need screen printing, embroidery, or digital prints,
                our expert team ensures perfect execution on every order.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-yellow-400 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg group"
              >
                <Link
                  target="_blank"
                  href="https://wa.me/27662143840?text=Hi, i would like a quote!"
                >
                  <span className="flex items-center">
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-yellow-400/20 transform -rotate-3 scale-105" />

              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay" />
                <Image
                  src="/hero.png"
                  alt="Saintwear Custom Printing Facility"
                  width={800}
                  height={600}
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Printer className="w-5 h-5" />
                  <span className="font-semibold">
                    10K+ Custom Prints Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
