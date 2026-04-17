"use client";
import { INVESTOR_STATS } from "@/app/constants";
import { motion } from "framer-motion";

export default function Investors() {
  return (
    <section id="investors" className="py-24 px-8 md:px-16 bg-[#0A1628] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <h2 className="font-playfair text-4xl text-white mb-6">Built for <span className="text-[#C9A94E]">Scale.</span></h2>
            <p className="text-[#8899BB] font-dmSans leading-relaxed">
              We are currently in a high-growth phase, backed by patent-protected IP and clinical partnerships with leading medical institutions.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {INVESTOR_STATS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-white/[0.02] text-center"
              >
                <p className="text-[10px] text-[#8899BB] uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-[#C9A94E] mb-1">{stat.value}</p>
                <p className="text-xs text-white opacity-40 font-mono">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}