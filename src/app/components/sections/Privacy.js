"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { useRef } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SectionNumber({ number }) {
  return (
    <span className="absolute -left-0 md:-left-0 top-0 text-4xl sm:text-5xl font-bold text-primary/20 dark:text-primary/10 font-playfair ">
      {number}
    </span>
  );
}

function PolicySection({ number, title, children }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 sm:pl-16 py-8 sm:py-12 border-l-2 border-primary/20 dark:border-primary/10"
    >
      <SectionNumber number={number} />
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-white mb-4 sm:mb-6 font-playfair">
        {title}
      </h2>
      <div className="text-text-secondary dark:text-medical-slate text-sm sm:text-base leading-relaxed font-dmSans">
        {children}
      </div>
    </motion.section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span className="text-text-secondary dark:text-medical-slate text-sm sm:text-base font-dmSans">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Privacy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-surface dark:bg-navy-900 transition-colors duration-300">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 dark:bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/6 dark:bg-secondary/4 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent-purple/5 dark:bg-accent-purple/3 blur-[100px] rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-32">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-24"
        >
          <Fade cascade damping={0.1} triggerOnce direction="down">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 dark:border-primary/15 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">
              Legal
            </span>
          </Fade>
          
          <Fade cascade damping={0.2} delay={0.2} triggerOnce>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary dark:text-white mb-6 font-playfair">
              Clinical Data <br />
              <span className="text-primary italic">Privacy Policy</span>
            </h1>
          </Fade>

          <Fade cascade damping={0.2} delay={0.4} triggerOnce>
            <p className="text-text-secondary dark:text-medical-slate text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-dmSans">
              Stamatis.AI is committed to protecting the privacy of healthcare professionals, 
              hospital partners, and any clinical data shared with our platform.
            </p>
          </Fade>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
          />
        </motion.header>

        {/* Effective Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <span className="text-text-secondary dark:text-medical-slate text-sm font-dmSans">
            EFFECTIVE DATE:
          </span>
          <span className="px-4 py-2 rounded-lg bg-surface-strong dark:bg-white/5 border border-surface dark:border-white/10">
            <span className="text-text-primary dark:text-white font-bold text-sm">
              April 22, 2026
            </span>
          </span>
          <span className="text-text-secondary dark:text-medical-slate text-sm font-dmSans">
            ·
          </span>
          <span className="text-text-secondary dark:text-medical-slate text-sm font-dmSans">
            Cornerstone Eagle LLC · Texas LLC
          </span>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-2">
          <PolicySection
            number="01"
            title="Who We Are"
          >
            <p className="mb-4">
              Stamatis.AI is a product of Cornerstone Eagle LLC, a Texas limited liability company. 
              We develop patent-pending multi-organ diagnostic AI systems for clinical deployment. 
              Our platform is covered under US Patent Pending 19/200,539.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/20">
              <p className="text-text-primary dark:text-white text-sm font-medium">
                For privacy inquiries, contact us at:{" "}
                <a href="mailto:privacy@stamatis.ai" className="text-primary hover:underline">
                  privacy@stamatis.ai
                </a>
              </p>
            </div>
          </PolicySection>

          <PolicySection
            number="02"
            title="Information We Collect"
          >
            <p className="mb-4 font-medium text-text-primary dark:text-white">
              We collect two categories of information through our platform and demo request form:
            </p>
            <div className="grid gap-6 mt-6">
              <div className="p-5 rounded-xl bg-surface-strong dark:bg-white/5 border border-surface dark:border-white/10">
                <h3 className="text-text-primary dark:text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Provider & Institutional Contact Data
                </h3>
                <BulletList items={[
                  "Name and professional title",
                  "Professional email address",
                  "Hospital or health system affiliation",
                  "Department of interest (e.g., Radiology & Imaging)",
                  "Diagnostic requirements or use-case descriptions submitted via message field"
                ]} />
              </div>
              <div className="p-5 rounded-xl bg-surface-strong dark:bg-white/5 border border-surface dark:border-white/10">
                <h3 className="text-text-primary dark:text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Clinical & Technical Data
                </h3>
                <BulletList items={[
                  "De-identified or anonymized imaging data shared for technical evaluation",
                  "Diagnostic workflow information provided for integration scoping",
                  "System configuration or EHR integration requirements"
                ]} />
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-accent-blue/10 dark:bg-accent-blue/5 border border-accent-blue/20">
              <p className="text-text-secondary dark:text-medical-slate text-sm">
                <strong className="text-accent-blue">Important:</strong> Stamatis.AI does not accept, store, or process 
                individually identifiable patient health information (PHI) through this form or demo portal. 
                All clinical data submitted must be de-identified in accordance with HIPAA Safe Harbor or 
                Expert Determination standards prior to submission.
              </p>
            </div>
          </PolicySection>

          <PolicySection
            number="03"
            title="How We Use This Information"
          >
            <BulletList items={[
              "To respond to technical demo requests and schedule evaluations",
              "To assess integration fit with your hospital system or radiology department",
              "To improve our diagnostic AI models using de-identified imaging data (with explicit written agreement only)",
              "To communicate updates about Stamatis.AI products relevant to your stated department of interest",
              "To comply with legal and regulatory obligations"
            ]} />
          </PolicySection>

          <PolicySection
            number="04"
            title="HIPAA Compliance"
          >
            <p className="mb-4">
              Stamatis.AI operates as a Business Associate under HIPAA where applicable. 
              Any arrangement involving Protected Health Information (PHI) will be governed by 
              a signed Business Associate Agreement (BAA) prior to any data exchange.
            </p>
            <div className="p-5 rounded-xl bg-secondary/10 dark:bg-secondary/5 border border-secondary/20 mt-6">
              <h3 className="text-text-primary dark:text-white font-bold mb-4">
                We implement the following safeguards:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Encryption of data in transit (TLS 1.2+) and at rest (AES-256)",
                  "Access controls limited to authorized personnel only",
                  "Audit logging for all data access events",
                  "Incident response procedures aligned with HIPAA Breach Notification Rule"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary dark:text-medical-slate text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </PolicySection>

          <PolicySection
            number="05"
            title="Data Sharing & Disclosure"
          >
            <p className="mb-4">
              We do not sell, rent, or trade your information. We may share data only in 
              the following limited circumstances:
            </p>
            <BulletList items={[
              "With service providers (e.g., cloud infrastructure, AWS) under strict confidentiality agreements",
              "With academic or research partners under IRB-approved protocols, using only de-identified data",
              "As required by law, court order, or to protect the safety of individuals",
              "In connection with a merger or acquisition, with prior notice to affected parties"
            ]} />
          </PolicySection>

          <PolicySection
            number="06"
            title="Data Retention"
          >
            <div className="p-5 rounded-xl bg-surface-strong dark:bg-white/5 border border-surface dark:border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-text-primary dark:text-white font-bold mb-2">
                    Contact & Demo Request Data
                  </h4>
                  <p className="text-text-secondary dark:text-medical-slate text-sm">
                    Retained for up to 24 months from the date of submission, or until a 
                    formal business relationship is established or declined.
                  </p>
                </div>
                <div>
                  <h4 className="text-text-primary dark:text-white font-bold mb-2">
                    De-identified Clinical Data
                  </h4>
                  <p className="text-text-secondary dark:text-medical-slate text-sm">
                    Retained only for the duration of the evaluation unless otherwise agreed in writing.
                  </p>
                </div>
              </div>
            </div>
          </PolicySection>

          <PolicySection
            number="07"
            title="Your Rights"
          >
            <p className="mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <BulletList items={[
              "Access the personal information we hold about you",
              "Request correction of inaccurate information",
              "Request deletion of your data",
              "Withdraw consent for non-essential communications at any time",
              "Lodge a complaint with a relevant supervisory authority"
            ]} />
            <div className="mt-6 p-4 rounded-xl bg-primary/10 dark:bg-primary/5 border border-primary/20">
              <p className="text-text-secondary dark:text-medical-slate text-sm">
                To exercise any of these rights, contact{" "}
                <a href="mailto:privacy@stamatis.ai" className="text-primary hover:underline font-medium">
                  privacy@stamatis.ai
                </a>
              </p>
            </div>
          </PolicySection>

          <PolicySection
            number="08"
            title="Cookies & Analytics"
          >
            <p>
              Our website may use essential cookies for functionality and anonymized analytics 
              to improve user experience. We do not use advertising trackers or third-party 
              behavioral profiling tools.
            </p>
          </PolicySection>

          <PolicySection
            number="09"
            title="Children's Privacy"
          >
            <p>
              Our platform is intended solely for healthcare professionals and institutional users. 
              We do not knowingly collect information from individuals under the age of 18.
            </p>
          </PolicySection>

          <PolicySection
            number="10"
            title="Changes to This Policy"
          >
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices 
              or legal requirements. Material changes will be communicated via email to registered 
              contacts or posted prominently on our website. Continued use of our platform after 
              such changes constitutes acceptance of the updated policy.
            </p>
          </PolicySection>
        </div>

        {/* Footer Note */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-surface dark:border-white/10 text-center"
        >
          <p className="text-text-muted dark:text-white/40 text-sm font-dmSans">
            © {new Date().getFullYear()} Stamatis.AI — A product of Cornerstone Eagle LLC. 
            All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}