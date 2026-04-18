"use client";
import { useParams } from "next/navigation";
import { JOBS } from "@/app/constants";
import { useState } from "react";
import { useFormSubmit } from "@/app/hooks/useFormSubmit";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function JobApplicationPage() {
  const { slug } = useParams();
  const job = JOBS.find((j) => j.slug === slug);
  const [submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useFormSubmit("mbdqobvz");

  if (!job) {
    return (
      <div className="min-h-screen bg-surface-strong flex items-center justify-center p-4">
        <div className="text-center text-text-primary dark:text-white">
          <h1 className="text-2xl font-playfair">Position not found.</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface-strong text-text-primary dark:text-white transition-colors duration-300">
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 mt-16 sm:mt-20">
        <div className="max-w-2xl mx-auto">
          <Fade triggerOnce direction="up">
            <div className="mb-8 sm:mb-12 border-b border-gray-200 dark:border-white/10 pb-6 sm:pb-8">
              <span className="text-accent-purple font-mono text-xs uppercase tracking-widest">
                {job.department}
              </span>
              <h1 className="text-3xl sm:text-4xl font-playfair font-bold mt-2 text-text-primary dark:text-white">
                Apply for {job.title}
              </h1>
              <p className="text-text-secondary dark:text-medical-slate mt-4 leading-relaxed font-dmSans">
                {job.description}
              </p>
            </div>
          </Fade>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary/10 border border-secondary/30 p-8 sm:p-12 rounded-2xl text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-secondary">
                Application Submitted
              </h2>
              <p className="text-text-secondary dark:text-medical-slate mt-2 font-dmSans">
                Our clinical recruitment team will review your profile shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={(e) => handleSubmit(e, `JOB APPLICATION: ${job.title}`)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div 
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-xs font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                    Full Name
                  </label>
                  <input 
                    name="Applicant Name" 
                    required 
                    className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                  />
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-xs font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                    Email Address
                  </label>
                  <input 
                    name="Applicant Email" 
                    type="email" 
                    required 
                    className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                  />
                </motion.div>
              </div>

              <motion.div 
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-xs font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                  Portfolio / LinkedIn URL
                </label>
                <input 
                  name="Portfolio Link" 
                  required 
                  className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300" 
                />
              </motion.div>

              {/* Dynamic Job-Specific Question */}
              <motion.div 
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label className="text-xs font-bold text-text-secondary dark:text-medical-slate uppercase tracking-widest">
                  Why are you a fit for {job.title}?
                </label>
                <textarea 
                  name="Cover Letter" 
                  rows={5} 
                  required 
                  className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-3 rounded-lg outline-none focus:border-primary dark:focus:border-primary text-text-primary dark:text-white transition-all duration-300 resize-none font-dmSans" 
                  placeholder="Share your experience related to this role..."
                />
              </motion.div>

              <motion.button 
                disabled={state.submitting} 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-br from-primary to-gold-light text-navy-900 font-bold rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Submitting..." : "Submit Application →"}
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
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}