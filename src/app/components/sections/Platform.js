"use client";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { LOCUS_MODULES } from "@/app/constants";

export default function Platform() {
  return (
    <section id="platform" className="py-24 px-8 md:px-16 border-t border-white/5 bg-[#070F1C]">
      <div className="max-w-6xl mx-auto">
        <Fade triggerOnce>
          <span className="inline-block px-3 py-1 rounded-full bg-[#C9A94E]/10 border border-[#C9A94E]/30 text-[11px] font-bold text-[#C9A94E] uppercase tracking-widest mb-4">
            The Platform
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl mb-12 text-white">
            One Engine. <span className="text-[#C9A94E] italic">Six Organ Systems.</span>
          </h2>
        </Fade>

        {/* Engine Architecture Visualization */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-16 backdrop-blur-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            
            {/* Input Phase */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#4A90D9] uppercase tracking-widest">01. Input Source</span>
              <div className="p-6 rounded-xl bg-[#4A90D9]/10 border border-[#4A90D9]/20">
                <p className="text-sm text-gray-300 font-mono leading-relaxed">
                  3D MRI or CT scan <br /> (NIfTI / DICOM)
                </p>
              </div>
            </div>

            {/* Central Engine Logic (The Patent-Pending Part) */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#C9A94E] uppercase tracking-widest text-center">02. Stamatis Engine</span>
              {[
                { label: "Probabilistic Masking", claim: "Claims 1-4", color: "#4A90D9" },
                { label: "Multimodal Embedding", claim: "Claims 5-8", color: "#C9A94E" },
                { label: "RL Feedback Loop", claim: "Claims 13-16", color: "#5DB8A0" }
              ].map((step) => (
                <div key={step.label} className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center group hover:border-[#C9A94E]/40 transition-colors">
                  <div>
                    <p className="text-sm font-bold text-white">{step.label}</p>
                    <p className="text-[10px] text-gray-500 font-mono">{step.claim}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                </div>
              ))}
            </div>

            {/* Output Phase */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#C9A94E] uppercase tracking-widest">03. Diagnostic Output</span>
              <div className="p-6 rounded-xl bg-[#C9A94E]/10 border border-[#C9A94E]/20">
                <ul className="text-xs text-gray-300 space-y-2 font-mono">
                  <li className="flex justify-between"><span>Confirmed Condition</span> <span className="text-white">ICD-10</span></li>
                  <li className="flex justify-between"><span>Severity Volume</span> <span className="text-white">cm³</span></li>
                  <li className="flex justify-between"><span>Confidence Score</span> <span className="text-[#5DB8A0]">96.4%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Locus Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCUS_MODULES.map((mod) => (
            <motion.div 
              key={mod.name}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(201,169,78,0.3)" }}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/10 transition-all cursor-default relative overflow-hidden group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{mod.icon}</div>
              <h3 className="font-playfair text-xl font-bold mb-1 text-white">{mod.name}</h3>
              <p className="text-[#8899BB] text-sm mb-6">{mod.diseases}</p>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                mod.status === "In Development" ? "bg-[#4A90D9]/20 text-[#4A90D9]" : "bg-white/10 text-[#8899BB]"
              }`}>
                {mod.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}