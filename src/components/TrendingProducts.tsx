import { bebasNeue } from '@/lib/fonts'
import trendingProducts from '@/data/trendingProducts'

export default function TrendingProducts() {
  return (
    <div className="py-16 border-b border-black">
      <h2 className={`${bebasNeue.className} text-4xl md:text-6xl font-bold mb-8`}>TRENDING NOW</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="space-y-4">
            <div className="bg-black aspect-square overflow-hidden">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105" />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-black font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}