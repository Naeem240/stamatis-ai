"use client";
import { useParams } from "next/navigation";
import { JOBS } from "@/app/constants";
import { useState } from "react";

export default function JobApplicationPage() {
  const { slug } = useParams();
  const job = JOBS.find((j) => j.slug === slug);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return <div className="p-20 text-center text-white">Position not found.</div>;

  return (
    <main className="min-h-screen bg-[#070F1C] text-white">
      <section className="py-32 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="text-[#9B7FD4] font-mono text-xs uppercase tracking-widest">{job.department}</span>
            <h1 className="text-4xl font-playfair font-bold mt-2">Apply for {job.title}</h1>
            <p className="text-[#8899BB] mt-4 leading-relaxed">{job.description}</p>
          </div>

          {submitted ? (
            <div className="bg-[#5DB8A0]/10 border border-[#5DB8A0]/30 p-12 rounded-2xl text-center">
              <h2 className="text-2xl font-playfair font-bold text-[#5DB8A0]">Application Submitted</h2>
              <p className="text-[#8899BB] mt-2">Our clinical recruitment team will review your profile shortly[cite: 808].</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#8899BB] uppercase tracking-widest">Full Name</label>
                  <input required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#8899BB] uppercase tracking-widest">Email Address</label>
                  <input type="email" required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#8899BB] uppercase tracking-widest">Portfolio / LinkedIn URL</label>
                <input required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E]" />
              </div>

              {/* Dynamic Job-Specific Question */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#8899BB] uppercase tracking-widest">
                  Why are you a fit for {job.title}?
                </label>
                <textarea rows={5} required className="bg-white/5 border border-white/10 p-3 rounded-lg outline-none focus:border-[#C9A94E]" placeholder="Share your experience related to this role..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#C9A94E] to-[#F0D080] text-[#0A1628] font-bold rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99]">
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}