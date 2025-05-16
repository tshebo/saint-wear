import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingBtn from "@/components/social-btn";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saint Wear",
  description: "Where fashion meets attitude. Discover bold, vibrant styles and custom business solutions at Saintwear.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics/>
        <div className="bg-yellow-400">
          <Navbar bebasNeue={bebasNeue} />
        </div>
        {children}
        <FloatingBtn/>
        <Footer bebasNeue={bebasNeue} />
      </body>
    </html>
  );
}
