"use client";
import { JOBS } from "@/app/constants";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";


export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#070F1C] text-white">
      <Navbar />
      <section className="py-32 px-8 md:px-16 mt-20">
        <div className="max-w-4xl mx-auto">
          <Fade triggerOnce>
            <span className="inline-block px-3 py-1 rounded-full bg-[#9B7FD4]/10 border border-[#9B7FD4]/30 text-[11px] font-bold text-[#9B7FD4] uppercase tracking-widest mb-4">
              Join the Mission
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
              Open <span className="text-[#C9A94E] italic">Positions</span>
            </h1>
            <p className="text-[#8899BB] text-lg mb-16 max-w-2xl leading-relaxed">
              We are building the AI platform that will change how every radiologist on the planet works. Come build with us[cite: 790].
            </p>
          </Fade>

          <div className="flex flex-col gap-4">
            {JOBS.map((job) => (
              <Fade key={job.slug} triggerOnce direction="up" cascade>
                <Link href={`/careers/${job.slug}`} className="group">
                  <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-between transition-all group-hover:border-[#9B7FD4]/40 group-hover:bg-white/[0.04]">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#C9A94E] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex gap-4 mt-2 text-sm text-[#8899BB] font-mono uppercase tracking-tighter">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="text-[#9B7FD4] text-2xl group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}