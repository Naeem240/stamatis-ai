"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { METRICS } from "@/app/constants";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { motion } from "framer-motion";
import CountUpNumber from "../components/ui/CountUpNumber";
import Link from "next/link";

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const [state, handleSubmit] = useFormSubmit("mvzdwvzb");


  return (
    <main className="min-h-screen bg-surface-strong pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

        {/* Left Side: Authority & Context */}
        <div>
          <Fade triggerOnce direction="up">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
              Clinical Access
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-text-primary dark:text-white leading-tight">
              Experience <br />
              <span className="text-primary italic">Surgical Precision.</span>
            </h1>
            <p className="text-text-secondary dark:text-medical-slate text-base sm:text-lg mb-10 leading-relaxed font-dmSans">
              Schedule a technical deep-dive into the Stamatis Engine. Discover how our
              patent-pending probabilistic masking achieves 96.47% accuracy in under 15 seconds.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 dark:border-white/10 pt-10">
              {METRICS.slice(0, 2).map((stat, i) => {
                // Parse the value to extract number and suffix
                const isPercentage = stat.value.includes('%');
                const isTime = stat.value.includes('s');
                let numValue = parseFloat(stat.value);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-text-primary dark:text-white font-playfair">
                      <CountUpNumber
                        end={numValue}
                        decimals={isPercentage ? 2 : 0}
                        duration={2.5}
                        suffix={isPercentage ? '%' : isTime ? 's' : ''}
                      />
                    </p>
                    <p className="text-[10px] text-primary uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Fade>
        </div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-surface border border-surface dark:border-white/10 p-6 sm:p-8 md:p-12 rounded-2xl backdrop-blur-sm relative overflow-hidden transition-colors duration-300"
        >
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/5 blur-3xl rounded-full" />

          {submitted ? (
            <Fade triggerOnce className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
              >
                ✓
              </motion.div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 text-text-primary dark:text-white">
                Inquiry Received
              </h2>
              <p className="text-text-secondary dark:text-medical-slate">
                A clinical implementation specialist will contact your institution within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Send another inquiry
              </button>
            </Fade>
          ) : (
            <form className="space-y-6 relative z-10" onSubmit={(e) => handleSubmit(e, "NEW DEMO REQUEST: Stamatis Engine")}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="text-[10px] font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                      Full Name
                    </label>
                    <input 
                      required 
                      className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                      name="Full Name" 
                      placeholder="Full Name" 
                    />
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="text-[10px] font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                      Institution
                    </label>
                    <input 
                      required 
                      className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                      name="Institution" 
                      placeholder="Hospital/Clinic" 
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-[10px] font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                    Professional Email
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                    name="Email" 
                    placeholder="Email" 
                  />
                </motion.div>

                <motion.div 
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="text-[10px] font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                    Department of Interest
                  </label>
                  <select 
                    name="Department" 
                    className="bg-white dark:bg-navy-800 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option>Radiology & Imaging</option>
                    <option>Neurology</option>
                    <option>Cardiology</option>
                    <option>Research & Development</option>
                    <option>Investment/Partnership</option>
                  </select>
                </motion.div>

                <motion.div 
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-[10px] font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                    Message
                  </label>
                  <textarea 
                    rows={4} 
                    className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300 resize-none" 
                    placeholder="Describe your diagnostic requirements..." 
                    name="Message"
                  />
                </motion.div>
              </div>

              <motion.button 
                disabled={state.submitting} 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-br from-primary to-gold-light text-navy-900 font-bold rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Submitting..." : "Request Technical Demo →"}
              </motion.button>

              {state.succeeded && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-secondary font-dmSans"
                >
                  ✓ Thank you! Our team will reach out shortly.
                </motion.div>
              )}

              <p className="text-[10px] text-text-tertiary dark:text-medical-slate/50 text-center font-mono">
                BY SUBMITTING, YOU AGREE TO OUR CLINICAL DATA <Link href="/privacy-policy" className="underline hover:no-underline">PRIVACY</Link> PROTOCOLS.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </main>
  );
}