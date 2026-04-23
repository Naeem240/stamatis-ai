"use client";
import { TEAM } from "@/app/constants";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Team() {
  return (
    <section id="team" className="relative py-10 sm:py-10 px-4 sm:px-8 md:px-16 bg-surface transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Fade triggerOnce direction="up">
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">Leadership</span>
          <h2 className="font-playfair text-4xl md:text-5xl mb-12 sm:mb-16 text-text-primary dark:text-white italic">
            The Minds Behind the Intelligence
          </h2>
        </Fade>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TEAM.map((member, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-default"
            >
              {/* Image or Placeholder Container */}
              <motion.div 
                className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface border border-surface dark:border-white/10 rounded-sm group-hover:border-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                {/* Image Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                {/* Show image if available, else show initial */}
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center z-10"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-5xl font-playfair font-bold text-primary/20">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Member Info */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <h3 className="font-playfair text-lg sm:text-xl text-text-primary dark:text-white font-bold">
                  {member.name}
                </h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
                <p className="text-text-secondary dark:text-medical-slate text-sm mt-2 font-dmSans">
                  {member.detail}
                </p>
              </motion.div>

              {/* Decorative line on hover */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-4"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}