"use client";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { LOCUS_MODULES, METRICS } from "@/app/constants";

export default function Platform() {
  return (
    <section id="platform" className="py-24 px-8 md:px-16 border-t border-white/5 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <Fade triggerOnce>
          <span className="text-gold font-bold tracking-widest text-xs uppercase">The Platform</span>
          <div className="w-12 h-[2px] bg-gold my-4" />
          <h2 className="font-playfair text-4xl md:text-5xl mb-12">One Engine. Six Organ Systems.</h2>
        </Fade>

        {/* Engine Architecture Visualization */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Input */}
            <div className="p-6 rounded-xl bg-medical-blue/10 border border-medical-blue/20">
              <p className="text-medical-blue font-bold text-[10px] uppercase mb-2">Input Source</p>
              <p className="text-sm text-gray-300 font-mono">3D MRI or CT scan (NIfTI/DICOM)</p>
            </div>

            {/* Central Engine Logic */}
            <div className="flex flex-col gap-4">
              {[
                { n: "01", t: "Probabilistic Masking", c: "#4A90D9" },
                { n: "02", t: "Multimodal Embedding", c: "#C9A94E" },
              ].map((step) => (
                <div key={step.n} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4">
                  <span className="text-xl font-black opacity-20" style={{ color: step.c }}>{step.n}</span>
                  <p className="text-sm font-bold">{step.t}</p>
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="p-6 rounded-xl bg-gold/10 border border-gold/20">
              <p className="text-gold font-bold text-[10px] uppercase mb-2">Diagnostic Output</p>
              <ul className="text-xs text-gray-300 space-y-1 font-mono">
                <li>• ICD-10 Code Confirmation</li>
                <li>• Severity Volume (cm³)</li>
                <li>• Confidence Score: 96.4%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Locus Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCUS_MODULES.map((mod) => (
            <motion.div 
              key={mod.name}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }}
              className="p-8 rounded-xl bg-white/[0.03] border border-white/10 transition-all cursor-default"
            >
              <div className="text-4xl mb-4">{mod.icon}</div>
              <h3 className="font-playfair text-xl font-bold mb-1">{mod.name}</h3>
              <p className="text-medical-slate text-sm mb-6">{mod.diseases}</p>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                mod.status === "In Development" ? "bg-medical-blue/20 text-medical-blue" : "bg-white/10 text-medical-slate"
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