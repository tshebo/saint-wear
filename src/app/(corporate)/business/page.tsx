"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default function CorporatePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqItems = [
    {
      question: "What types of corporate printing services do you offer?",
      answer:
        "We offer a wide range of corporate printing services including custom screen printing, embroidery, digital printing, uniform programs, promotional items, business essentials like stationery and marketing materials, and more. Our solutions are scalable and can be tailored to meet your specific business needs.",
    },
    {
      question: "How do you ensure consistent quality across large orders?",
      answer:
        "We use state-of-the-art printing technology and high-quality materials to ensure consistency across all orders, regardless of size. Our quality control process includes multiple checkpoints throughout production, and we offer a quality guarantee on all our products.",
    },
    {
      question: "What is the typical turnaround time for corporate orders?",
      answer:
        "Turnaround times can vary depending on the complexity and size of the order. However, we pride ourselves on our fast turnaround times without compromising on quality. For standard orders, we typically deliver within 7-10 business days. For urgent requests, we offer expedited services. Please contact us for a more accurate estimate based on your specific needs.",
    },
    {
      question: "Do you offer bulk pricing for large corporate orders?",
      answer:
        "Yes, we offer competitive bulk pricing for large corporate orders. The more you order, the more you save. We can provide custom quotes based on your specific requirements and order volume. Please reach out to our sales team for detailed pricing information.",
    },
    {
      question:
        "Can you handle nationwide distribution for corporate uniform programs?",
      answer:
        "We have experience managing nationwide uniform programs for large corporations. Our logistics team can handle distribution to multiple locations across the country, ensuring that all your employees receive their uniforms in a timely manner.",
    },
  ];

  return (
    <main className="relative scroll-smooth">
      {/* Hero Section with Parallax */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-24 lg:py-32 relative overflow-hidden">
        <FadeInSection>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
                transform: `translateY(${scrollY * 0.2}px) scale(${
                  1 + scrollY * 0.0005
                })`,
                opacity: Math.max(0.1, 0.5 - scrollY * 0.0005),
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
                <div>
                  <div className="w-20 h-1 bg-black mb-8 transform origin-left transition-all duration-1000 ease-out scale-x-100" />
                  <h1
                    className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-none mb-6 opacity-0 animate-fadeIn`}
                  >
                    CORPORATE
                    <br />
                    PRINTING
                    <br />
                    SOLUTIONS
                  </h1>
                  <p className="text-xl text-black/90 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
                    Premium custom printing services for businesses. From
                    uniforms to promotional materials, we deliver quality at
                    scale.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className=" bg-black text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Link href="https://api.whatsapp.com/send/?phone=27662143840&text=Hello%2C+I+have+a+business+query%21&type=phone_number&app_absent=0">
                      <span className="flex items-center">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="default"
                    className="bg-black text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Link href="/portfolio">View Catalog</Link>
                  </Button>
                </div>
              </div>
              <div className="relative transform transition-all duration-1000 hover:scale-105 animate-float">
                <div className="absolute inset-0 bg-black/70 transform rotate-6 rounded-3xl transition-all duration-500 hover:rotate-3" />
                <Image
                  src="/sw-corp.jpg"
                  alt="Corporate Printing Solutions"
                  width={800}
                  height={600}
                  className="relative rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-blue-400/30"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-20 lg:py-32">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000">
              <h2
                className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold mb-6`}
              >
                COMPREHENSIVE BUSINESS SOLUTIONS
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end printing and branding solutions tailored for
                corporate needs
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
                  description:
                    "Consistent quality across all orders, guaranteed",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-2
                  ${activeService === index ? "ring-2 ring-yellow-500" : ""}`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="text-yellow-400 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
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
        </FadeInSection>
      </section>

      {/* Benefits Section with Scroll Animations */}
      <section className="bg-gray-50 py-20 lg:py-32 overflow-hidden">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-1000 hover:scale-105">
                <Image
                  src="/logo-r.png"
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
                      icon: <CheckCircle2 className="h-6 w-6 " />,
                      title: "Premium Quality",
                      description:
                        "Industry-leading printing technology and materials",
                    },
                    {
                      icon: <Clock className="h-6 w-6 " />,
                      title: "Fast Turnaround",
                      description:
                        "Quick delivery without compromising quality",
                    },
                    {
                      icon: <Users className="h-6 w-6 " />,
                      title: "Dedicated Support",
                      description: "Personal account manager for your business",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 " />,
                      title: "Bulk Pricing",
                      description: "Competitive rates for large orders",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 transform transition-all duration-500 hover:translate-x-2"
                    >
                      <div className="transform transition-all duration-300 text-yellow-400 hover:scale-110 hover:rotate-6 animate-pulse">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 transition-colors duration-300 hover:text-yellow-600">
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
        </FadeInSection>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold mb-6`}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our corporate printing
                services
              </p>
            </div>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() =>
                      setActiveFAQ(activeFAQ === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-lg">
                      {item.question}
                    </span>
                    {activeFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-yellow-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-yellow-600 transition-transform duration-300" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section with Hover Animations */}
      <section className="bg-black py-20 transform transition-all duration-1000">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className={`${bebasNeue.className} text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-1000`}
            >
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto transform transition-all duration-1000">
              Let&#39;s discuss how we can help elevate your brand with our
              corporate printing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://wa.me/27662143840?text=I'm%20interested%20in%20getting%20a%20quote%20for%20corporate%20printing%20services">
                  Request Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/portfolio">View Catalog</Link>
              </Button>
            </div>
          </div>
        </FadeInSection>
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: rotate(0);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }

        .max-h-0 {
          max-height: 0;
        }
        .max-h-96 {
          max-height: 24rem;
        }
      `}</style>
    </main>
  );
}
