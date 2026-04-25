"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import CountUpNumber from "../ui/CountUpNumber";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 overflow-hidden pt-28 pb-16 bg-surface-strong transition-colors duration-300">
      {/* Background gradient with subtle brand accent */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/4 dark:bg-secondary/4 blur-[100px] rounded-full" />
      </div>
      {/* Full-width Background Image behind Headline */}
      <div className="fixed inset-0 z-0 border opacity-60 blur-xs">
        <img
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&h=1000&fit=crop"
          alt="MRI Machine Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-strong/60 via-transparent to-surface-strong" />
      </div>

      <div className="relative max-w-6xl z-10 mx-auto w-full  text-center sm:text-left">
        <Fade cascade damping={0.08} triggerOnce>
          {/* Certification Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center sm:flex-row gap-2 mb-8 sm:mb-10"
          >
            <span className="inline-block w-fit px-3 py-1.5 rounded-full bg-black border border-primary/25 text-[10px] font-bold text-[#C9A94E] uppercase tracking-[0.15em]">
              ✓ Agentic healthcare intelligence
            </span>
            <span className="inline-block w-fit px-3 py-1.5 rounded-full bg-primary/12 border border-primary/25 text-[10px] font-bold text-primary uppercase tracking-[0.15em]">
              🔒 Patent Pending US 19/200,539
            </span>
            <span className="inline-block w-fit px-3 py-1.5 rounded-full bg-secondary/12 border border-secondary/25 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">
              ✓ Clinical & institutional partnerships forming
            </span>
          </motion.div>



          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6 sm:mb-8 text-text-primary dark:text-white tracking-tight max-w-5xl relative z-10"
          >
            Unified AI For <br />
            <span className="text-[#C9A94E] italic">Diagnostic Imaging,</span> <br />
            Built Across Every Organ System.
          </motion.h1>

          {/* Subtitle with key metric */}
          <motion.p
            variants={itemVariants}
            className="font-dmSans text-lg sm:text-xl md:text-2xl text-text-secondary dark:text-medical-slate max-w-3xl mb-8 sm:mb-12 leading-relaxed"
          >
            Under active validation <span className="text-primary font-bold">Designed for clinical-grade deployment across enterprise radiology..</span> 
          </motion.p>

          {/* Key Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-14 max-w-2xl"
          >
            <div className="border-l-2 border-primary pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-white">
                {/* <CountUpNumber end={96.47} decimals={2} duration={2.5} suffix="%" /> */}
                Under active validation
              </p>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-medical-slate mt-1">Accuracy</p>
            </div>
            <div className="border-l-2 border-secondary pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-white">
                {/* &lt;<CountUpNumber end={15} duration={1.5} suffix="s" /> */}
                Multi-site validation planned Q3 2026
              </p>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-medical-slate mt-1">Analysis Time</p>
            </div>
            <div className="border-l-2 border-accent-blue pl-4">
              <p className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-white">
                {/* <CountUpNumber end={6} duration={1} /> */}
                Patent-protected architecture.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-medical-slate mt-1">6 Organ Systems</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-fit"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/request-demo"
                className="border inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-navy-900 font-bold hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
              >
                Schedule Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/platform"
                className="bg-[#C9A94E] text-black inline-flex items-center gap-2 px-8 py-4 rounded-xl border-primary/30 dark:border-primary/20 font-semibold text-text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-base sm:text-lg"
              >
                Explore Platform
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </Fade>
      </div>
    </section>
  );
}
