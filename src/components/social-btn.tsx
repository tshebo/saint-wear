"use client";
import React, { useState } from "react";
import { PhoneIcon, X } from "lucide-react";
import { RiInstagramLine, RiFacebookLine, RiWhatsappLine } from "@remixicon/react";

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleOpen();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        <div
          className={`absolute transition-all duration-300 ease-in-out ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <PhoneIcon className="h-6 w-6 " />
        </div>
        <div
          className={`absolute transition-all duration-300 ease-in-out ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <X className="h-6 w-6" />
        </div>
      </button>

      <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-2">
      <a
          href="https://api.whatsapp.com/send/?phone=27662143840&text=Hello%2C+I+have+a+business+query%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-75 opacity-0"
          } bg-gradient-to-br from-red-600 to-blue-700 hover:from-red-800 hover:to-blue-800`}
          aria-label="Contact us on WhatsApp"
          tabIndex={isOpen ? 0 : -1}
        >
          <RiWhatsappLine className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/SaintWearSA/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-75 opacity-0"
          } bg-gradient-to-br from-red-600 to-blue-700 hover:from-red-800 hover:to-blue-800`}
          aria-label="Contact us on Facebook"
          tabIndex={isOpen ? 0 : -1}
        >
          <RiFacebookLine className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/saintwearsa"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-white ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-75 opacity-0"
          } bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-600`}
          aria-label="Follow us on Instagram"
          tabIndex={isOpen ? 0 : -1}
        >
          <RiInstagramLine className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
