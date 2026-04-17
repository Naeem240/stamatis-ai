"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-16 flex items-center justify-between h-[72px] ${
        scrolled || isOpen
          ? "bg-[#070F1C]/95 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 z-[110]">
        <div className="relative w-10 h-10 transition-transform duration-300 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Stamatis.AI Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-playfair text-xl font-bold tracking-tight text-white">
          Stamatis<span className="text-[#C9A94E]">.AI</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`font-dmSans text-sm font-medium transition-all duration-300 hover:text-white ${
              pathname === link.href ? "text-[#C9A94E]" : "text-[#8899BB]"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/request-demo" className="w-full p-4 rounded-xl bg-gradient-to-r from-[#C9A94E] to-[#F0D080] text-[#0A1628] font-bold text-lg">
                Request Demo
              </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <button 
        className="lg:hidden z-[110] p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#070F1C] flex flex-col pt-32 px-10 lg:hidden z-[100]"
          >
            <div className="flex flex-col gap-8 backdrop-blur-3xl bg-[#070F1C] p-8 rounded-xl ">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`font-playfair text-3xl font-bold transition-all ${
                    pathname === link.href ? "text-[#C9A94E]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-[1px] bg-white/10 w-full my-4" />
              <Link href="/request-demo" className="w-full p-4 rounded-xl bg-gradient-to-r from-[#C9A94E] to-[#F0D080] text-[#0A1628] font-bold text-lg">
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}