"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

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
      className={`h-[72px] backdrop-blur-md backdrop-brightness-60 fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-8 md:px-16 py-2 ${
        scrolled || isOpen
          ? "bg-navy-900/95 dark:bg-navy-900/95 dark:backdrop-blur-md border-b border-surface dark:border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">

      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-1 z-[110]">
        <div className="relative w-15 h-15 transition-transform duration-300 hover:scale-105">
          <Image
            src="/stamatis-logo-only.png"
            alt="Stamatis.AI Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-playfair text-2xl font-extrabold tracking-tight text-text-primary dark:text-white">
          STAMATIS<span className="text-[#C9A94E]">.AI</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`font-dmSans text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${
              pathname === link.href
                ? "text-primary border-primary"
                : "text-text-secondary dark:text-medical-slate border-transparent hover:text-primary hover:border-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="cursor-pointer relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 transition-all duration-300"
          aria-label="Toggle theme"
        >
          <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            exit={{ rotate: 360, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414l2.12 2.12a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414zM2.05 6.464l2.12 2.12a1 1 0 101.414-1.414L3.464 5.05a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.div>
        </button>
        
        <Link href="/request-demo" className="px-6 py-3 rounded-lg bg-[#C9A94E] text-black font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
          Request Demo
        </Link>
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="lg:hidden flex items-center gap-4">
        {/* Theme Toggle for Mobile */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 transition-all duration-300 text-text-primary dark:text-white"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414l2.12 2.12a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414zM2.05 6.464l2.12 2.12a1 1 0 101.414-1.414L3.464 5.05a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        
        <button 
          className="z-[110] p-2 text-text-primary dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-[2px] bg-current transition-all ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`w-full h-[2px] bg-current transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-[2px] bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer - Left Side */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 lg:hidden z-[99]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Left Side Drawer */}
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 h-full w-64 bg-surface-strong dark:bg-navy-900 shadow-2xl lg:hidden z-[100]"
            >
              {/* Drawer Content */}
              <div className="flex flex-col h-full pt-24 px-6 border h-screen bg-surface">
                {/* Navigation Links */}
                <div className="flex flex-col gap-6 flex-1">
                  {NAV_LINKS.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className={`font-playfair text-xl font-bold transition-all duration-300 pb-1 border-b-2 ${
                        pathname === link.href 
                          ? "text-primary border-primary" 
                          : "text-text-primary dark:text-white border-transparent hover:text-primary hover:border-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="h-[1px] bg-gray-200 dark:bg-white/10 w-full my-4" />
                
                {/* Request Demo Button */}
                <Link href="/request-demo" className="w-full p-4 rounded-lg bg-[#C9A94E] text-black font-bold text-center hover:shadow-lg transition-all duration-300 mb-5">
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
}