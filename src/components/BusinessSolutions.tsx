import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BusinessSolutions({ bebasNeue }: { bebasNeue: any }) {
  return (
    <section className="bg-blue-600 py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h2
          className={`${bebasNeue.className} text-6xl md:text-8xl font-bold mb-12 text-white`}
        >
          BUSINESS SOLUTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-white">
              Elevate your brand with Saintwear&#39;s corporate solutions. From
              custom uniforms to event merchandise, we bring our bold style to
              your business needs.
            </p>
            <ul className="text-xl text-white space-y-2">
              <li>✓ Custom Corporate Apparel</li>
              <li>✓ Event Merchandise</li>
              <li>✓ Brand Collaboration Opportunities</li>
              <li>✓ Bulk Order Discounts</li>
            </ul>
            <Button className="bg-yellow-400 text-black hover:bg-white hover:text-blue-600 transition-colors">
              Get a Quote
            </Button>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/hero.png?height=600&width=800&text=Business Solutions"
              alt="Saintwear Business Solutions"
              width={800}
              height={600}
              className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
