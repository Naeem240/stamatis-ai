"use client";
import React from 'react';
import { motion } from "framer-motion";
import CountUpNumber from "../ui/CountUpNumber";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const InvestorPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base-dark via-base-dark to-secondary-dark text-text-primary dark:text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,78,0.1),transparent_50%)] opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/30 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Series A · Institutional Engagement Open</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Unified diagnostic imaging,<br />
              <em className="text-primary-light">across every organ system.</em>
            </h1>
            <p className="text-lg md:text-xl text-text-primary dark:text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              STAMATIS.AI is building the Locus Platform — an agentic AI engine designed to replace the fragmented landscape of narrow, single-indication imaging tools with one unified, patent-protected architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#inquiry" className="inline-flex items-center gap-3 bg-primary text-base-dark px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                Request Investor Briefing <span>→</span>
              </a>
              <a href="#platform" className="inline-flex items-center gap-3 bg-transparent text-text-primary dark:text-white border px-8 py-4 rounded-lg hover:border-secondary hover:text-secondary transition-colors">
                Explore the Platform <span>↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-surface text-text-primary dark:text-white -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-surface dark:bg-base-lightAlt rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8 border-r border-border last:border-r-0 hover:bg-bg-soft transition-colors text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Stage</div>
              <div className="text-2xl md:text-3xl font-bold text-base-dark dark:text-text-primary mb-1">Series A</div>
              <div className="text-sm text-text-tertiary">Institutional round in active development</div>
            </div>
            <div className="p-6 md:p-8 border-r border-border last:border-r-0 hover:bg-bg-soft transition-colors text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">IP Portfolio</div>
              <div className="text-2xl md:text-3xl font-bold text-base-dark dark:text-text-primary mb-1">
                <CountUpNumber end={3} duration={2} />
                {' '}Filings
              </div>
              <div className="text-sm text-text-tertiary">US non-provisional · Divisional · PCT international</div>
            </div>
            <div className="p-6 md:p-8 border-r border-border last:border-r-0 hover:bg-bg-soft transition-colors text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Patent Status</div>
              <div className="text-2xl md:text-3xl font-bold text-base-dark dark:text-text-primary mb-1">Allowable</div>
              <div className="text-sm text-text-tertiary">Claims in condition for allowance at USPTO</div>
            </div>
            <div className="p-6 md:p-8 hover:bg-bg-soft transition-colors text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Ownership</div>
              <div className="text-2xl md:text-3xl font-bold text-base-dark dark:text-text-primary mb-1">
                <CountUpNumber end={100} duration={2} suffix="%" />
              </div>
              <div className="text-sm text-text-tertiary">Fully owned by the Company · no TTO · no royalty</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We're Building */}
      <section id="platform" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">What we're building</div>
              <h2 className="font-playfair text-4xl md:text-5xl text-primary dark:text-white mb-6 leading-tight">
                One engine. Every organ system. No fragmentation.
              </h2>
              <p className="text-secondary dark:text-text-secondary leading-relaxed mb-4 text-base md:text-lg">
                Radiology is fragmenting under workload pressure while AI arrives in narrow, uncoordinated point solutions. Hospitals cannot integrate twenty separate vendor contracts to cover enterprise imaging — and single-indication tools miss the cross-organ patterns that matter clinically.
              </p>
              <p className="text-secondary dark:text-text-secondary leading-relaxed text-base md:text-lg">
                <strong className="text-primary dark:text-white">Locus is different.</strong> A single patent-protected core engine with organ-specific modules for brain, heart, lungs, liver, and pancreas. One architecture. One integration. One validation framework.
              </p>
              <p className="text-secondary dark:text-text-secondary leading-relaxed mt-4 text-base md:text-lg">
                The first product — Locus.brain for glioma detection on MRI — enters FDA 510(k) validation on a defined regulatory path. The platform expands module-by-module, de-risked by each clearance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-96 h-96">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <radialGradient id="coreGrad">
                      <stop offset="0%" stopColor="#C9A94E"/>
                      <stop offset="100%" stopColor="#A67C3D"/>
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="6" result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <g stroke="#5DB8A0" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3,3">
                    <line x1="200" y1="200" x2="200" y2="60"/>
                    <line x1="200" y1="200" x2="330" y2="120"/>
                    <line x1="200" y1="200" x2="330" y2="280"/>
                    <line x1="200" y1="200" x2="70" y2="280"/>
                    <line x1="200" y1="200" x2="70" y2="120"/>
                  </g>
                  <circle cx="200" cy="200" r="130" fill="none" stroke="#4A90D9" strokeWidth="0.5" strokeOpacity="0.35"/>
                  <circle cx="200" cy="200" r="100" fill="none" stroke="#C9A94E" strokeWidth="0.5" strokeOpacity="0.25"/>
                  <circle cx="200" cy="200" r="54" fill="url(#coreGrad)" filter="url(#glow)"/>
                  <text x="200" y="198" textAnchor="middle" fontFamily="Playfair Display" fontSize="18" fontWeight="700" fill="var(--text-primary)">LOCUS</text>
                  <text x="200" y="216" textAnchor="middle" fontFamily="DM Sans" fontSize="9" fill="#F0D080">CORE ENGINE</text>
                  <g fontFamily="DM Sans" fontSize="10" fontWeight="600" fill="var(--text-primary)">
                    <circle cx="200" cy="60" r="28" fill="var(--bg-surface)" stroke="#F4A261" strokeWidth="2.5"/>
                    <text x="200" y="58" textAnchor="middle" fontSize="9" fill="var(--text-primary)">brain</text>
                    <text x="200" y="70" textAnchor="middle" fontSize="7" fill="#F4A261" fontWeight="700">LEAD</text>
                    <circle cx="330" cy="120" r="28" fill="var(--bg-surface)" stroke="#4A90D9" strokeWidth="1.5"/>
                    <text x="330" y="124" textAnchor="middle" fontSize="9" fill="var(--text-primary)">heart</text>
                    <circle cx="330" cy="280" r="28" fill="var(--bg-surface)" stroke="#4A90D9" strokeWidth="1.5"/>
                    <text x="330" y="284" textAnchor="middle" fontSize="9" fill="var(--text-primary)">lungs</text>
                    <circle cx="70" cy="280" r="28" fill="var(--bg-surface)" stroke="#4A90D9" strokeWidth="1.5"/>
                    <text x="70" y="284" textAnchor="middle" fontSize="9" fill="var(--text-primary)">liver</text>
                    <circle cx="70" cy="120" r="28" fill="var(--bg-surface)" stroke="#4A90D9" strokeWidth="1.5"/>
                    <text x="70" y="118" textAnchor="middle" fontSize="8" fill="var(--text-primary)">pancreas</text>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IP Moat */}
      <section id="ip" className="py-16 md:py-24 px-4 bg-surface-strong text-text-primary dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold uppercase tracking-wider text-text-primary dark:text-white mb-4">The moat</div>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Fully owned. Allowable. Globally filed.</h2>
            <p className="text-text-primary dark:text-white max-w-4xl mx-auto mb-16 leading-relaxed">
              A defensible IP position built deliberately over two years — allowable US claims, a divisional for breadth, and international protection via PCT. One hundred percent owned by the Company. No university technology transfer office. No royalty. No gatekeeper on commercial decisions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "✓", status: "Allowable", title: "US Non-Provisional", desc: "Application 19/200,539 — claims found allowable at USPTO. Formal issuance expected late 2026." },
              { icon: "📄", status: "Filed Apr 2026", title: "Divisional Application", desc: "Additional claim scope separated from the parent to maximize protection breadth across platform elements." },
              { icon: "🌍", status: "Filed Apr 2026", title: "PCT International", desc: "International filing rights preserved across PCT member states. National phase strategy under founder control." },
              { icon: "🛡️", status: "100% Owned", title: "No Royalty Drag", desc: "Fully owned by Cornerstone Eagle LLC. No university license. No TTO approval required on commercial decisions." }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/5 border border-secondary/20 rounded-xl p-6 hover:border-secondary/40 transition-colors"
              >
                <div className="bg-secondary/15 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-secondary text-xl">{card.icon}</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">{card.status}</div>
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-text-primary dark:text-white text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform/Modules */}
      <section className="py-16 md:py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">The platform</div>
              <h2 className="font-playfair text-4xl md:text-5xl text-text-primary dark:text-white mb-6">Staged organ-by-organ rollout.</h2>
              <p className="text-secondary dark:text-text-secondary leading-relaxed mb-4 text-base md:text-lg">
                Each module reuses the shared core architecture, meaning every successive clearance is faster, less expensive, and less risky than the one before it.
              </p>
              <p className="text-secondary dark:text-text-secondary leading-relaxed text-base md:text-lg">
                The lead indication — glioma on brain MRI — enters 510(k) validation on a defined predicate path. Cardiac and pulmonary modules follow once the core platform is cleared.
              </p>
            </motion.div>
            <motion.div
              className="lg:col-span-2 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: "Locus.brain", desc: "Glioma detection & characterization · MRI", tag: "Lead", tagColor: "bg-primary text-base-dark" },
                { name: "Locus.heart", desc: "Cardiac structure & function · MRI/CT", tag: "Roadmap", tagColor: "bg-text-tertiary text-white" },
                { name: "Locus.lungs", desc: "Pulmonary disease · CT", tag: "Roadmap", tagColor: "bg-text-tertiary text-white" },
                { name: "Locus.liver", desc: "Hepatic disease · MRI/CT", tag: "Roadmap", tagColor: "bg-text-tertiary text-white" },
                { name: "Locus.pancreas", desc: "Pancreatic disease · MRI/CT", tag: "Roadmap", tagColor: "bg-text-tertiary text-white" }
              ].map((module, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-surface-strong border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-bg-soft rounded-lg flex items-center justify-center">
                    <span className="text-secondary text-xl">⚡</span>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-playfair text-lg md:text-xl text-primary dark:text-white mb-1">{module.name}</h4>
                    <p className="text-secondary dark:text-text-secondary text-sm md:text-base">{module.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded ${module.tagColor}`}>
                      {module.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 md:py-24 px-4 bg-surface-strong text-text-primary dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold uppercase tracking-wider text-text-primary dark:text-white mb-4">Traction</div>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">Built with conviction. Funded by founders. Ready to scale.</h2>
            <p className="text-white/75 max-w-3xl mx-auto mb-16 leading-relaxed">
              Every number below is audited, verifiable, and reflects real commitment to the platform. No pre-revenue inflation. No placeholder claims.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: "$866K", type: "currency", end: 866, prefix: "$", suffix: "K", label: "Founder capital invested", sub: "IRC §174 capitalized R&D · fully auditable" },
              { num: "$800K+", type: "currency", end: 800, prefix: "$", suffix: "K+", label: "Capitalized research & development", sub: "Infrastructure · engineering · IP · validation prep" },
              { num: "3", type: "number", end: 3, label: "Patent filings", sub: "US non-provisional · divisional · PCT international" },
              { num: "510(k)", type: "text", label: "Defined regulatory pathway", sub: "FDA Pre-Submission planned · glioma lead indication" },
              { num: "CMO", type: "text", label: "Chief Medical Officer engaged", sub: "Double board-certified · Texas physician network" },
              { num: "2026", type: "year", end: 2026, label: "Target patent issuance", sub: "USPTO notice of allowability received" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-surface-strong border-t-4 border-secondary rounded-lg p-8"
              >
                <div className="font-playfair text-4xl font-bold text-primary mb-3 italic">
                  {item.type === "text" ? (
                    item.num
                  ) : item.type === "currency" ? (
                    <>
                      {item.prefix}
                      <CountUpNumber
                        end={item.end}
                        duration={2.5}
                        separator=","
                      />
                      {item.suffix}
                    </>
                  ) : item.type === "year" ? (
                    <CountUpNumber
                      end={item.end}
                      duration={2}
                    />
                  ) : (
                    <CountUpNumber
                      end={item.end}
                      duration={2}
                    />
                  )}
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-text-primary dark:text-white text-sm leading-relaxed">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold uppercase tracking-wider text-text-primary dark:text-white mb-4">Leadership</div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-6">A team built for execution.</h2>
            <p className="text-secondary dark:text-text-secondary max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
              Founder capital, technical depth, and clinical leadership — aligned on a single thesis about where diagnostic imaging goes next.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Lucas Stamatis", role: "Founder & CEO", desc: "Inventor on US 19/200,539. Founder-funded the platform through patent allowance. Leads strategy, fundraising, and commercial partnerships." },
              { name: "Sajed Khan", role: "Co-Founder & CTO", desc: "Leads platform architecture, model development, and engineering execution. Personal capital contribution to platform build." },
              { name: "Dr. Rao Kamran Ali, MD", role: "Chief Medical Officer", desc: "Double board-certified interventional pain management. Founder & CEO of a 13-location North Texas physician network." }
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border border-border rounded-xl p-8 hover:border-primary/40 transition-colors"
              >
                <div className="w-14 h-14 bg-bg-soft rounded-full flex items-center justify-center mb-6">
                  <span className="text-secondary text-xl">👤</span>
                </div>
                <h4 className="font-playfair text-lg md:text-xl text-primary dark:text-white mb-2">{member.name}</h4>
                <div className="text-secondary font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</div>
                <p className="text-secondary dark:text-text-secondary text-sm md:text-base leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-8 bg-secondary rounded flex-shrink-0 mt-1"></div>
              <div>
                <strong className="text-primary dark:text-white">Clinical & Scientific Advisory Board.</strong> Forming Q2–Q3 2026. Active conversations underway with neuroradiology, regulatory, and health-system operator candidates. Full advisor roster will be announced alongside Series A close.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section id="inquiry" className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-base-dark border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Investor Engagement</div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary dark:text-white mb-6">Let's talk.</h2>
            <p className="text-secondary dark:text-text-secondary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              STAMATIS.AI welcomes inquiries from accredited investors with experience in healthcare AI, medical devices, and regulated software. A full briefing, clinical roadmap, and data room are available to qualified parties following a mutual NDA.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="bg-white border border-border rounded-2xl p-10 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Direct Contact</h4>
              <div className="font-playfair text-xl text-primary mb-1">Lucas Stamatis</div>
              <div className="text-secondary mb-4">Founder & CEO</div>
              <a href="mailto:lucas@stamatis.ai" className="text-secondary hover:text-secondary-dark font-semibold">
                lucas@stamatis.ai →
              </a>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Company</h4>
              <div className="font-playfair text-xl text-primary mb-1">Cornerstone Eagle LLC</div>
              <div className="text-secondary mb-4">dba STAMATIS.AI · Texas LLC</div>
              <a href="mailto:lucas@stamatis.ai" className="text-secondary hover:text-secondary-dark font-semibold">
                Request investor materials →
              </a>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, delay: 0.4 }}
            className="text-text-tertiary text-sm mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            This page is informational and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any offering of securities will be made only to accredited investors under exempt private placement rules, through definitive offering documents furnished directly to qualified recipients. Patent applications referenced are pending and subject to USPTO examination. The Locus Platform is not FDA-cleared for commercial use.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
