"use client";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { LOCUS_MODULES } from "@/app/constants";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Platform() {
  return (
    <section id="platform" className="py-10 sm:py-10 px-4 sm:px-8 md:px-16 border-t border-surface dark:border-white/5 bg-surface-strong transition-colors duration-300 backdrop-brightness-10">
      <div className=" max-w-6xl mx-auto">
        <Fade triggerOnce direction="up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-bold text-primary uppercase tracking-widest mb-4">
            The Platform
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl mb-12 text-text-primary dark:text-white">
            One Engine. <span className="text-primary italic">Six Organ Systems.</span>
          </h2>
        </Fade>

        {/* Engine Architecture Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-surface border border-surface dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 backdrop-blur-sm relative overflow-hidden transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center relative z-10">
            
            {/* Input Phase */}
            <motion.div variants={itemVariants} className="space-y-4">
              <span className=" text-[14px] font-bold text-accent-blue uppercase tracking-widest">01. Input Source</span>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 mt-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20 hover:border-accent-blue/40 transition-all duration-300 cursor-default overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop" 
                  alt="Brain MRI Scan" 
                  className="w-full h-auto rounded-lg mb-4 object-cover max-h-[200px]"
                />
                <p className="text-sm text-text-secondary dark:text-gray-300 font-mono leading-relaxed">
                  3D MRI or CT scan <br /> (NIfTI / DICOM)
                </p>
              </motion.div>
            </motion.div>

            {/* Central Engine Logic */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest text-center">02. Stamatis Engine</span>
              {[
                { label: "Probabilistic Masking", claim: "", color: "#4A90D9" },
                { label: "Multimodal Embedding", claim: "", color: "#C9A94E" },
                { label: "RL Feedback Loop", claim: "", color: "#5DB8A0" }
              ].map((step) => (
                <motion.div 
                  key={step.label}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-lg bg-surface-soft border border-surface dark:border-white/10 flex justify-between items-center group hover:border-primary/40 transition-colors duration-300 cursor-default"
                >
                  <div>
                    <p className="text-sm font-bold text-text-primary dark:text-white">{step.label}</p>
                    <p className="text-[10px] text-text-tertiary dark:text-gray-500 font-mono">{step.claim}</p>
                  </div>
                  <motion.div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: step.color }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Output Phase */}
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">03. Diagnostic Output</span>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <ul className="text-xs text-text-secondary dark:text-gray-300 space-y-2 font-mono">
                  <li className="flex justify-between"><span>Confirmed Condition</span> <span className="text-text-primary dark:text-white">ICD-10</span></li>
                  <li className="flex justify-between"><span>Severity Volume</span> <span className="text-text-primary dark:text-white">cm³</span></li>
                  <li className="flex justify-between"><span>Confidence Score</span> <span className="text-secondary">96.4%</span></li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Locus Modules Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {LOCUS_MODULES.map((mod) => (
            <motion.div 
              key={mod.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-6 sm:p-8 rounded-xl bg-surface dark:bg-white/[0.03] border border-surface dark:border-white/10 transition-all duration-300 cursor-default relative overflow-hidden group hover:border-primary/30"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="text-3xl sm:text-4xl mb-6 relative z-10"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {mod.icon}
              </motion.div>
              
              <h3 className="font-playfair text-lg sm:text-xl font-bold mb-1 text-text-primary dark:text-white relative z-10">
                {mod.name}
              </h3>
              <p className="text-text-secondary dark:text-medical-slate text-sm mb-6 relative z-10">{mod.diseases}</p>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter relative z-10 inline-block ${
                mod.status === "In Development" 
                  ? "bg-accent-blue/20 text-accent-blue dark:bg-accent-blue/20 dark:text-accent-blue" 
                  : "bg-gray-200 dark:bg-white/10 text-text-secondary dark:text-medical-slate"
              }`}>
                {mod.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}