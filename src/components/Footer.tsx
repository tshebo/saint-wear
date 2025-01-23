import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
} from "@remixicon/react";

export default function Footer({ bebasNeue }: { bebasNeue: any }) {
  return (
    <footer className="bg-black text-white py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>
              ABOUT SAINTWEAR
            </h3>
            <p className="text-lg">
              Redefining urban fashion with bold, vibrant styles for individuals
              and businesses. From street to boardroom, we&#39;ve got you covered.
            </p>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>
              QUICK LINKS
            </h3>
            <ul className="space-y-4 text-lg">
              {[
                { name: "Home", href: "/" },
                { name: "Our Collections", href: "/collections" },
                { name: "Business Solutions", href: "/business" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>
              CONNECT
            </h3>
            <div className="flex space-x-6">
              {[
                {
                  Icon: RiInstagramLine,
                  href: "https://instagram.com/saintwearsa",
                },
                {
                  Icon: RiFacebookLine,
                  href: "https://facebook.com/saintwearsa",
                },
                {
                  Icon: RiWhatsappLine,
                  href: "https://wa.me/27662143840?text=Hello%2C%20I%20would%20like%20a%20quote%20!",
                },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
