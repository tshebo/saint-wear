'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div 
      className="fixed w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out"
      style={{ 
        left: `${mousePosition.x}px`, 
        top: `${mousePosition.y}px`,
        transform: isHovering ? 'scale(2.5)' : 'scale(1)'
      }}
    />
  )
}
