"use client";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-strong backdrop-brightness-10 border-t border-surface dark:border-white/5 pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-8 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              
              <span className="font-playfair text-xl font-bold text-text-primary dark:text-white">
                STAMATIS<span className="text-primary">.AI</span>
              </span>
            </Link>
            <p className="text-text-secondary dark:text-medical-slate text-sm max-w-sm leading-relaxed mb-6 font-dmSans">
              Cornerstone Eagle LLC · Texas LLC <br />
              Patent Pending US 19/200,539 <br />
              Patent-protected, multi-organ diagnostic AI. Built for clinical scale
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-text-primary dark:text-white font-bold text-xs uppercase tracking-widest mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${link.href}`} 
                    className="text-text-secondary dark:text-medical-slate hover:text-primary dark:hover:text-primary text-sm transition-colors duration-300 font-dmSans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact/Resources Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-text-primary dark:text-white font-bold text-xs uppercase tracking-widest mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/request-demo" 
                  className="text-text-secondary dark:text-medical-slate text-sm font-dmSans hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-text-secondary dark:text-medical-slate text-sm font-dmSans hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="text-text-secondary dark:text-medical-slate text-sm font-dmSans hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-[10px] text-text-tertiary dark:text-gray-500 font-mono tracking-tighter">
            © {currentYear} STAMATIS.AI. ALL RIGHTS RESERVED.
          </motion.p>
          
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-4 h-4 bg-gray-300 dark:bg-white/10 rounded-full hover:bg-primary dark:hover:bg-primary transition-colors duration-300"
              aria-label="Social media link"
            />
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-4 h-4 bg-gray-300 dark:bg-white/10 rounded-full hover:bg-primary dark:hover:bg-primary transition-colors duration-300"
              aria-label="Social media link"
            />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}