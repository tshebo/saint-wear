'use client'

import { useState } from 'react'
import { ShoppingBag, User, Menu, Search, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { bebasNeue } from '@/lib/fonts'

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-4 border-b border-black">
      <div className={`${bebasNeue.className} text-3xl font-bold text-black order-1`}>
        SAINTWEAR
      </div>
      <div className="hidden md:flex space-x-4 order-2">
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">Shop</Button>
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">About</Button>
        <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors">Contact</Button>
      </div>
      <div className="flex items-center space-x-4 order-3">
        <Button 
          variant="ghost" 
          size="icon"
          className="text-black hover:text-white hover:bg-black transition-colors"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <Search className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-black hover:text-white hover:bg-black transition-colors"
        >
          <ShoppingBag className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-black hover:text-white hover:bg-black transition-colors"
        >
          <User className="h-5 w-5" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-black hover:text-white hover:bg-black transition-colors md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors justify-start">Shop</Button>
              <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors justify-start">About</Button>
              <Button variant="ghost" className="text-black hover:text-white hover:bg-black transition-colors justify-start">Contact</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      {isSearchVisible && (
        <div className="w-full order-4 mt-4 relative">
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-full pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-black hover:text-white hover:bg-black transition-colors"
            onClick={() => setIsSearchVisible(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
    </nav>
  )
}

