import { Button } from "@/components/ui/button"

export default function Navbar({ bebasNeue }: { bebasNeue: any }) {
  return (
    <nav className="max-w-[2000px] mx-auto flex justify-between items-center py-6 px-8">
      <div 
        className={`${bebasNeue.className} text-3xl font-bold text-black hover:text-blue-600 transition-colors`}
      >
        SAINTWEAR
      </div>
      <div className="hidden md:flex space-x-6">
        {['About', 'Collection', 'Lookbook', 'Business', 'Contact'].map((item) => (
          <Button 
            key={item}
            variant="ghost" 
            className="text-black hover:text-blue-600 transition-colors"
          >
            {item}
          </Button>
        ))}
      </div>
      <Button variant="outline" className="md:hidden">Menu</Button>
    </nav>
  )
}

