import { bebasNeue } from '@/lib/fonts'

export default function CategoryGrid() {
  const categories = ['New Arrivals', 'Best Sellers', 'Summer Vibes', 'Accessories']
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-b border-black">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-6 hover:bg-black hover:text-white transition-colors cursor-pointer">
          <h2 className={`${bebasNeue.className} text-2xl font-bold`}>{category}</h2>
        </div>
      ))}
    </div>
  )
}
