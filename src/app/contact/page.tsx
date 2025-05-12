"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "@remixicon/react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formState;
    if (!name || !email || !message) {
      alert("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeyNUF9ZemQVD4DaTxuerZgml58IzxTMR1oNHss8rNE0jmC0w/formResponse";
    const formData = new URLSearchParams();
    formData.append("entry.818281177", formState.name);
    formData.append("entry.107340153", formState.email);
    formData.append("entry.836366557", formState.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      text: "+27(0) 78 070 0179",
      href: "tel:+27780700179",
      label: "Call us",
    },
    {
      icon: Mail,
      text: "sales@saintwear.co.za",
      href: "mailto:sales@saintwear.co.za",
      label: "Email us",
    },
    {
      icon: MapPin,
      text: "2 Risana Avenue, Unit 68 Bolderview, Risana, Johnannesburg, 2197",
      href: "https://maps.app.goo.gl/biuDyZcwNyBLrAS46",
      label: "Visit us",
    },
    {
      icon: Clock,
      text: "Mon-Fri",
      href: "#",
      label: "Opening hours",
    },
  ];

  const socialMedia = [
    {
      icon: RiInstagramFill,
      link: "https://instagram.com/saintwearsa",
      label: "Instagram",
    },
    {
      icon: RiFacebookCircleFill,
      link: "https://facebook.com/saintwearssa",
      label: "Facebook",
    },
    {
      icon: RiWhatsappFill,
      link: "https://wa.me/27662143840?text=Hello, I have a business query!",
      label: "WhatsApp",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Pattern */}
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

        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div className="w-20 h-1 bg-black mb-8 mx-auto transform origin-left animate-scale-x" />
            <h1
              className={`${bebasNeue.className} text-5xl sm:text-6xl lg:text-8xl font-bold text-black mb-6 tracking-tight animate-fade-in`}
            >
              LET&#39;S CONNECT
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium animate-fade-in-up">
              Have questions? We&#39;d love to hear from you. Send us a message
              and we&#39;ll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative -mt-10 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="relative p-8 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-t-4 border-yellow-400 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3
                    className={`${bebasNeue.className} text-3xl font-bold text-green-600 mb-4`}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for contacting us. We&#39;ll get back to you
                    shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="bg-yellow-400 text-black hover:bg-slate-900 hover:text-white transition-all duration-300 group"
                  >
                    Send Another Message
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="space-y-4">
                    {[
                      {
                        id: "name",
                        label: "Your Name",
                        type: "text",
                        placeholder: "John Doe",
                      },
                      {
                        id: "email",
                        label: "Your Email",
                        type: "email",
                        placeholder: "john@example.com",
                      },
                    ].map((field) => (
                      <div key={field.id} className="relative group">
                        <label
                          htmlFor={field.id}
                          className={`block text-sm font-medium transition-colors duration-300 ${
                            activeField === field.id
                              ? "text-yellow-500"
                              : "text-gray-700 group-hover:text-yellow-500"
                          }`}
                        >
                          {field.label}
                        </label>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formState[field.id as keyof typeof formState]}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField(field.id)}
                          onBlur={() => setActiveField(null)}
                          className="mt-1 w-full border-gray-300 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
                          required
                        />
                        {field.id === "email" &&
                          !isValidEmail(formState.email) && (
                            <p className="text-red-500 text-sm mt-1">
                              Please enter a valid email address.
                            </p>
                          )}
                      </div>
                    ))}
                    <div className="relative group">
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium transition-colors duration-300 ${
                          activeField === "message"
                            ? "text-yellow-500"
                            : "text-gray-700 group-hover:text-yellow-500"
                        }`}
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        className="mt-1 w-full border-gray-300 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
                        required
                      />
                      {!formState.message && (
                        <p className="text-red-500 text-sm mt-1">
                          Message cannot be empty.
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 text-black hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-102 group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-t-4 border-yellow-400 group">
                <div className="p-8 space-y-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {contactInfo.map(
                    ({ icon: Icon, text, href, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        className="flex items-center space-x-4 text-gray-600 hover:text-yellow-400 transition-all duration-300 group/item relative z-10"
                      >
                        <div className="bg-yellow-100 p-3 rounded-full group-hover/item:bg-yellow-200 transition-all duration-300 transform group-hover/item:scale-110">
                          <Icon className="h-6 w-6 text-black" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-yellow-500">
                            {label}
                          </span>
                          <span className="text-lg font-medium">{text}</span>
                        </div>
                      </a>
                    )
                  )}
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-t-4 border-yellow-400 group">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3
                    className={`${bebasNeue.className} text-2xl font-bold text-black mb-6 relative z-10`}
                  >
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4 relative z-10">
                    {socialMedia.map(({ icon: Icon, link, label }, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label={label}
                      >
                        <div className="bg-yellow-100 p-4 rounded-full hover:bg-yellow-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                          <Icon className="h-6 w-6 text-black transform group-hover:scale-110 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
