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
} from "lucide-react";

export default function Contact({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h2
          className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-12 text-white`}
        >
          GET IN TOUCH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-xl text-white">
              Have a question or want to collaborate? Reach out to us. We'd love
              to hear from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white">
                <Phone className="h-6 w-6" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <Mail className="h-6 w-6" />
                <a
                  href="mailto:info@saintwear.com"
                  className="text-lg hover:text-yellow-400 transition-colors"
                >
                  info@saintwear.com
                </a>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <MapPin className="h-6 w-6" />
                <p className="text-lg">
                  123 Fashion Street, Style City, ST 12345
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              {[
                { Icon: Instagram, link: "https://instagram.com/saintwear" },
                { Icon: Twitter, link: "https://twitter.com/saintwear" },
                { Icon: Facebook, link: "https://facebook.com/saintwear" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-white text-black placeholder-gray-500"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white text-black placeholder-gray-500"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-white text-black placeholder-gray-500"
              rows={5}
            />
            <Button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-white hover:text-blue-600 transition-colors w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
