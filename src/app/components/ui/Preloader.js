"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#070F1C] flex flex-col items-center justify-center"
        >
          {/* Central Logo/Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-full border-2 p-2 border-[#C9A94E]/20 flex items-center justify-center relative">
              <div className="relative w-15 h-15">
                <Image
                  src="/logo.png"
                  alt="Stamatis.AI Logo"
                  fill
                  className="object-contain"
                  priority // Ensures the logo loads immediately for SEO/LCP
                />
              </div>
              {/* Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] border-t-2 border-[#C9A94E] rounded-full"
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="font-playfair text-white text-xl font-bold tracking-widest mb-2">
              STAMATIS<span className="text-[#C9A94E]">.AI</span>
            </p>
            <p className="font-mono text-[10px] text-[#8899BB] uppercase tracking-[0.3em]">
              Initializing Diagnostic Engine... {progress}%
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-48 h-[2px] bg-white/5 mt-6 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#C9A94E]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}