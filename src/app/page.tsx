import { montserrat } from '@/lib/fonts'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CategoryGrid from '@/components/CategoryGrid'
import TrendingProducts from '@/components/TrendingProducts'
import ModelShowcase from '@/components/ModelShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={`min-h-screen bg-yellow-400 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <Navbar />
        <HeroSection />
        <CategoryGrid />
        <TrendingProducts />
        <ModelShowcase />
      </div>
      <Footer />
    </main>
  )
}