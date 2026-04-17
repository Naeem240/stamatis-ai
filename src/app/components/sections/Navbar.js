"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Standard scroll listener to trigger background changes
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 md:px-16 flex items-center justify-between h-[72px] ${
        scrolled 
          ? "bg-[#070F1C]/95 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      {/* Brand Logo */}
<div className="flex items-center gap-3 cursor-pointer">
  <div className="relative w-15 h-15"> 
    <Image 
      src="/logo.png" 
      alt="Stamatis.AI Logo" 
      fill
      className="object-contain"
      priority // Ensures the logo loads immediately for SEO/LCP
    />
  </div>
  <span className="font-playfair text-xl font-bold tracking-tight text-white">
    Stamatis<span className="text-[#C9A94E]">.AI</span>
  </span>
</div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a 
            key={link.href} 
            href={`#${link.href}`} 
            className="font-dmSans text-sm font-medium text-[#8899BB] hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}

        {/* Action Button - Premium Gold Border style */}
        <button className="px-6 py-2 rounded-md border border-[#C9A94E]/40 bg-[#C9A94E]/10 text-[#C9A94E] font-semibold text-sm hover:bg-[#C9A94E]/20 transition-all">
          Request Demo
        </button>
      </div>
    </nav>
  );
}