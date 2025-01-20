"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener("resize", checkDevice);

    // Mouse position listener
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Only add mousemove listener if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div
      className="fixed w-4 h-4 bg-slate-900 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out hidden md:block"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: isHovering ? "scale(2.5)" : "scale(1)",
      }}
    />
  );
}
