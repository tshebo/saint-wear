"use client";
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
import {
  RiFacebookLine,
  RiInstagramLine,
  RiWhatsappLine,
} from "@remixicon/react";

type ContactInfo = {
  icon: React.ReactNode;
  text: string;
  link?: string;
  hover?: boolean;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function Contact({ bebasNeue }: { bebasNeue: any }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="h-6 w-6" />,
      text: "+27(0) 78 070 0179",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      text: "sales@saintwear.co.za",
      link: "mailto:sales@saintwear.co.za",
      hover: true,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "2 Risana Avenue, Unit 68 Bolderview, Risana, Johnannesburg, 2197",
    },
  ];

  const socialLinks = [
    {
      Icon: RiInstagramLine,
      link: "https://instagram.com/saintwearsa",
      label: "Instagram",
    },
    {
      Icon: RiFacebookLine,
      link: "https://facebook.com/saintwearsa",
      label: "Facebook",
    },
    {
      Icon: RiWhatsappLine,
      link: "https://wa.me/27662143840?text=Hello, I have a business query!",
      label: "Whatsapp",
    },
  ];

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formState.name) newErrors.name = "Name is required.";
    if (!formState.email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="mb-12 lg:mb-16 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: "url('/logo-r.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.5)",
            }}
          />

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
                Have a question or want to collaborate? Reach out to us.
                We&apos;d love to hear from you!
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
                  <p className="text-white/70">
                    We&apos;ll get back to you soon.
                  </p>
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
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400 transition-colors min-h-[160px]"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
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
