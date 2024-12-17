import { bebasNeue } from '@/lib/fonts'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`${bebasNeue.className} text-2xl font-bold mb-4`}>ABOUT US</h3>
            <p>Saintwear is all about bold, vibrant style for the modern fashion enthusiast.</p>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-2xl font-bold mb-4`}>QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-2xl font-bold mb-4`}>CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2025 Saintwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
