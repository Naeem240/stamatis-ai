"use client";
import { TEAM } from "@/app/constants";
import { Fade } from "react-awesome-reveal";

export default function Team() {
  return (
    <section id="team" className="py-24 px-8 md:px-16 bg-[#070F1C]">
      <div className="max-w-6xl mx-auto">
        <Fade triggerOnce>
          <span className="text-[#C9A94E] font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">Leadership</span>
          <h2 className="font-playfair text-4xl md:text-5xl mb-16 text-white italic">The Minds Behind the Intelligence</h2>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {TEAM.map((member, i) => (
            <div key={i} className="group cursor-default">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white/5 border border-white/10 rounded-sm">
                {/* Placeholder for professional headshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1C] to-transparent opacity-60" />
              </div>
              <h3 className="font-playfair text-xl text-white font-bold">{member.name}</h3>
              <p className="text-[#C9A94E] text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
              <p className="text-[#8899BB] text-sm mt-2 font-dmSans">{member.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}