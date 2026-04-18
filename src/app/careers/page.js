"use client";
import { JOBS } from "@/app/constants";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-surface-strong text-text-primary dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 mt-16 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <Fade triggerOnce direction="up">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-bold text-accent-purple uppercase tracking-widest mb-4">
              Join the Mission
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              Open <span className="text-primary italic">Positions</span>
            </h1>
            <p className="text-text-secondary dark:text-medical-slate text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl leading-relaxed">
              We are building the AI platform that will change how every radiologist on the planet works. Come build with us.
            </p>
          </Fade>

          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {JOBS.map((job) => (
              <motion.div key={job.slug} variants={itemVariants}>
                <Link href={`/careers/${job.slug}`} className="group block">
                  <motion.div 
                    whileHover={{ 
                      x: 8,
                      backgroundColor: "transparent"
                    }}
                    className="p-6 sm:p-8 border border-surface dark:border-white/10 rounded-xl bg-surface dark:bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between transition-all duration-300 hover:border-accent-purple/40 dark:hover:border-accent-purple/40"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-3 text-xs sm:text-sm text-text-secondary dark:text-medical-slate font-mono uppercase tracking-tighter">
                        <span>{job.type}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <motion.div 
                      className="text-accent-purple text-2xl group-hover:translate-x-2 transition-transform duration-300 mt-4 sm:mt-0 ml-0 sm:ml-4"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}