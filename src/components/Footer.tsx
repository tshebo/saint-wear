import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer({ bebasNeue }: { bebasNeue: any }) {
  return (
    <footer className="bg-black text-white py-24 px-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>ABOUT SAINTWEAR</h3>
            <p className="text-lg">Redefining urban fashion with bold, vibrant styles for individuals and businesses. From street to boardroom, we&#39;ve got you covered.</p>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>QUICK LINKS</h3>
            <ul className="space-y-4 text-lg">
              {['About Us', 'Our Collection', 'Business Solutions', 'Lookbook', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`${bebasNeue.className} text-3xl font-bold mb-6`}>CONNECT</h3>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-blue-600 transition-colors"
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

