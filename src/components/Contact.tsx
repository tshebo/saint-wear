'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react";

type ContactInfo = {
  icon: React.ReactNode;
  text: string;
  link?: string;
  hover?: boolean;
};

export default function Contact({ bebasNeue }: { bebasNeue: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="h-6 w-6" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      text: "info@saintwear.com",
      link: "mailto:info@saintwear.com",
      hover: true,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "123 Fashion Street, Style City, ST 12345",
    },
  ];

  const socialLinks = [
    {
      Icon: Instagram,
      link: "https://instagram.com/saintwear",
      label: "Instagram",
    },
    { Icon: Twitter, link: "https://twitter.com/saintwear", label: "Twitter" },
    {
      Icon: Facebook,
      link: "https://facebook.com/saintwear",
      label: "Facebook",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-black to-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            GET IN
            <br />
            TOUCH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-8">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Have a question or want to collaborate? Reach out to us. We'd
                love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-white group"
                  >
                    <div className="text-yellow-400">{info.icon}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`text-lg ${
                          info.hover
                            ? "hover:text-yellow-400 transition-colors"
                            : ""
                        }`}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <p className="text-lg">{info.text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white/70 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex space-x-6">
                  {socialLinks.map(({ Icon, link, label }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white hover:text-yellow-400 transition-colors transform hover:scale-110 duration-300"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-yellow-400" />
                  <h3 className="text-white text-xl font-semibold">
                    Message Sent!
                  </h3>
                  <p className="text-white/70">We'll get back to you soon.</p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-yellow-400 text-black hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors"
                    />
                    <Textarea
                      placeholder="Your Message"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors min-h-[160px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black hover:bg-white hover:text-blue-600 transition-all duration-300 group h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
