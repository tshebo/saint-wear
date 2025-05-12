import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingBtn from "@/components/social-btn";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saint Wear",
  description: "Saint Wear Ecom Showcase",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-yellow-400">
          <Navbar bebasNeue={bebasNeue} />
        </div>
        {children}
        <Footer bebasNeue={bebasNeue} />
      </body>
    </html>
  );
}
