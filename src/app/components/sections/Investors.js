"use client";
import { INVESTOR_STATS } from "@/app/constants";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Investors() {
  return (
    <section id="investors" className="relative py-10 sm:py-10 px-4 sm:px-8 md:px-16 bg-surface-strong border-y border-surface dark:border-white/5 transition-colors duration-300 overflow-hidden">
      {/* Banner Image Background */}
      <div className="absolute top-0 left-0 right-0 h-full sm:h-full z-0 opacity-70 blur-xs dark:opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=400&fit=crop" 
          alt="Hospital Facility" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start lg:items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1"
          >
            <Fade triggerOnce direction="up">
              <h2 className="font-playfair text-4xl md:text-5xl text-text-primary dark:text-white mb-6">
                Built for <span className="text-primary">Scale.</span>
              </h2>
              <p className="text-text-secondary dark:text-medical-slate font-dmSans leading-relaxed">
                We are currently in a high-growth phase, backed by patent-protected IP and clinical partnerships with leading medical institutions.
              </p>
            </Fade>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {INVESTOR_STATS.map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
               
                className="p-6 sm:p-8 border border-surface rounded-xl bg-surface-strong text-center transition-all duration-300 hover:border-primary/40"
              >
                <p className="text-[10px] text-text-secondary dark:text-medical-slate uppercase tracking-[0.2em] mb-2 font-bold">
                  {stat.label}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-text-tertiary dark:text-white/40 font-mono">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}