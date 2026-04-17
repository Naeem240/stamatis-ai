"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden pt-20">
      {/* Background Grid Pattern [cite: 112, 115] */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#C9A94E 1px, transparent 1px), linear-gradient(90deg, #C9A94E 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      
      {/* Radial Glow [cite: 118] */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl z-10">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-bold text-gold uppercase tracking-widest">
              Patent Pending US 19/200,539
            </span>
            <span className="px-3 py-1 rounded-full bg-medical-blue/10 border border-medical-blue/30 text-[10px] font-bold text-medical-blue uppercase tracking-widest">
              Harvard LOA Signed 
            </span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tighter">
            AI That Doesn't Just <br />
            <span className="text-gold italic">Detect Disease.</span> <br />
            It Diagnoses It. 
          </h1>

          <div className="w-12 h-1 bg-gold mb-8" /> 

          <p className="font-dmSans text-lg md:text-xl text-medical-slate max-w-xl mb-10 leading-relaxed">
            Stamatis.AI is a patent-protected full-body AI diagnostic platform. 
            Providing surgical precision through medical intelligence. 
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/request-demo" className="px-8 py-4 rounded-lg bg-gradient-to-br from-gold to-gold-light text-navy-900 font-bold hover:translate-y-[-2px] transition-transform">
              Request a Demo 
            </Link>
            <Link href="/platform" className="px-8 py-4 rounded-lg border border-white/20 font-semibold hover:bg-white/5 transition-colors">
              View Platform 
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}