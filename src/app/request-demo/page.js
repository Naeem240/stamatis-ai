"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { METRICS } from "@/app/constants";

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#070F1C] pt-32 pb-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Authority & Context */}
        <div>
          <Fade triggerOnce>
            <span className="text-[#C9A94E] font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
              Clinical Access
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Experience <br />
              <span className="text-[#C9A94E] italic">Surgical Precision.</span>
            </h1>
            <p className="text-[#8899BB] text-lg mb-10 leading-relaxed font-dmSans">
              Schedule a technical deep-dive into the Stamatis Engine. Discover how our 
              patent-pending probabilistic masking achieves 96.47% accuracy in under 15 seconds.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
              {METRICS.slice(0, 2).map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white font-playfair">{stat.value}</p>
                  <p className="text-[10px] text-[#C9A94E] uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        {/* Right Side: The Inquiry Portal */}
        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A94E]/5 blur-3xl rounded-full" />
          
          {submitted ? (
            <Fade triggerOnce className="text-center py-12">
              <div className="w-16 h-16 bg-[#5DB8A0]/20 text-[#5DB8A0] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
              <h2 className="font-playfair text-3xl font-bold mb-4">Inquiry Received</h2>
              <p className="text-[#8899BB]">A clinical implementation specialist will contact your institution within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-[#C9A94E] underline underline-offset-4"
              >
                Send another inquiry
              </button>
            </Fade>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-[#8899BB] uppercase tracking-widest">Full Name</label>
                    <input required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E] text-white transition-all" placeholder="Dr. Stamatis" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-[#8899BB] uppercase tracking-widest">Institution</label>
                    <input required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E] text-white transition-all" placeholder="Medical Center" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#8899BB] uppercase tracking-widest">Professional Email</label>
                  <input type="email" required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E] text-white transition-all" placeholder="name@hospital.org" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#8899BB] uppercase tracking-widest">Department of Interest</label>
                  <select className="bg-[#0A1628] border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E] text-white transition-all appearance-none cursor-pointer">
                    <option>Radiology & Imaging</option>
                    <option>Neurology</option>
                    <option>Cardiology</option>
                    <option>Research & Development</option>
                    <option>Investment/Partnership</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#8899BB] uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E] text-white transition-all" placeholder="Describe your diagnostic requirements..."></textarea>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#C9A94E] to-[#F0D080] text-[#0A1628] font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(201,169,78,0.3)] active:scale-[0.98]">
                Request Technical Demo →
              </button>

              <p className="text-[10px] text-[#8899BB]/50 text-center font-mono">
                BY SUBMITTING, YOU AGREE TO OUR CLINICAL DATA PRIVACY PROTOCOLS.
              </p>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}