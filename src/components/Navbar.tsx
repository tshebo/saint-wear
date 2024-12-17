'use client'
import { ShoppingBag, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { bebasNeue } from '@/lib/fonts'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-black">
      <div className={`${bebasNeue.className} text-3xl font-bold text-black`}>
        SAINTWEAR
      </div>
      <div className="hidden md:flex space-x-6">
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">Shop</Button>
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">About</Button>
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">Contact</Button>
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingBag className="h-6 w-6 text-black" />
        <User className="h-6 w-6 text-black" />
        <Menu className="h-6 w-6 text-black md:hidden" />
      </div>
    </nav>
  )
}
