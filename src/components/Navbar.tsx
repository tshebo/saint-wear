'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Navbar({ bebasNeue }: { bebasNeue: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = ['About', 'Collection', 'Lookbook', 'Business', 'Contact']

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[2000px] mx-auto flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8">
          {/* Logo */}
          <div 
            className={`${bebasNeue.className} text-2xl sm:text-3xl font-bold text-black hover:text-blue-600 transition-colors cursor-pointer`}
          >
            SAINTWEAR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-6">
            {navItems.map((item) => (
              <Button 
                key={item}
                variant="ghost" 
                className="text-black hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"/>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b">
            <div className={`${bebasNeue.className} text-2xl font-bold`}>
              MENU
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-4">
              {navItems.map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  className="w-full justify-between text-left text-lg hover:bg-blue-50 hover:text-blue-600 transition-all group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"/>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t mt-auto">
            <Button 
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}