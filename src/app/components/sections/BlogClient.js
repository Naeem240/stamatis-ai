"use client";
import { BLOG_POSTS } from "@/app/constants";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
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

export default function BlogClient() {
  return (
    <main className="min-h-screen bg-surface-strong text-text-primary dark:text-white transition-colors duration-300">      
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto">
          <Fade triggerOnce direction="up">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-[11px] font-bold text-secondary uppercase tracking-widest mb-4">
              Intelligence Feed
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 tracking-tight">
              Latest <span className="text-primary italic">Insights</span>
            </h1>
          </Fade>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {BLOG_POSTS.map((post) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] transition-all duration-500 hover:border-primary/40 dark:hover:border-primary/40 hover:bg-gray-100 dark:hover:bg-white/[0.05] h-full flex flex-col">
                    
                    {/* Image Placeholder */}
                    <motion.div 
                      className={`aspect-[16/9] w-full ${post.imagePlaceholder.bg} flex items-center justify-center text-4xl sm:text-5xl transition-transform duration-700 group-hover:scale-105 relative`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {post.imagePlaceholder.icon}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </motion.div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                          {post.tag}
                        </span>
                        <span className="text-[10px] text-text-tertiary dark:text-gray-500 font-mono">
                          {post.date}
                        </span>
                      </div>

                      <h2 className="font-playfair text-xl sm:text-2xl font-bold leading-snug text-text-primary dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 flex-grow">
                        {post.title}
                      </h2>
                      
                      <motion.div 
                        className="mt-6 flex items-center gap-2 text-sm font-bold text-text-primary dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        Read Analysis <span className="text-primary">→</span>
                      </motion.div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}