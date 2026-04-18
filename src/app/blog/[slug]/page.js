"use client";
import { useParams } from "next/navigation";
import { BLOG_POSTS } from "@/app/constants";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function BlogDetailsPage() {
  const params = useParams();
  
  // Find the specific post data using the dynamic slug
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  // Fallback if the post isn't found
  if (!post) {
    return (
      <main className="min-h-screen bg-surface-strong flex items-center justify-center text-text-primary dark:text-white transition-colors duration-300">
        <h1 className="text-lg sm:text-xl font-playfair">404 | Article Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface-strong text-text-primary dark:text-white transition-colors duration-300">
      
      {/* Article Detail Header */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16 mt-16 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Link href="/blog" className="text-text-secondary dark:text-medical-slate hover:text-primary dark:hover:text-primary text-xs font-dmSans mb-8 sm:mb-12 block group">
            <motion.span 
              className="group-hover:translate-x-[-4px] inline-block transition-transform"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span> Back to Insights
          </Link>

          <Fade triggerOnce direction="up">
            {/* Tag & Date */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">
                {post.tag}
              </span>
              <div className="w-[2px] h-4 bg-gray-300 dark:bg-white/10" />
              <span className="text-sm text-text-secondary dark:text-medical-slate font-mono">
                {post.date}
              </span>
            </div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 tracking-tight leading-[1.1] text-text-primary dark:text-white"
            >
              {post.title}
            </motion.h1>

            {/* Related Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className={`aspect-[2/1] w-full rounded-2xl ${post.imagePlaceholder.bg} border border-gray-200 dark:border-white/10 flex items-center justify-center text-5xl sm:text-6xl lg:text-7xl mb-12 sm:mb-16 relative overflow-hidden`}
            >
              {post.imagePlaceholder.icon}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 dark:opacity-80" />
            </motion.div>

            {/* Article Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-dmSans text-base sm:text-lg text-text-secondary dark:text-medical-slate leading-relaxed max-w-3xl space-y-6"
            >
              <p>
                In this article, we would explore the specific methodologies and clinical advantages of <strong className="text-text-primary dark:text-white">{post.title}</strong>, particularly focusing on how it integrates with the Stamatis Engine architecture.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 text-text-primary dark:text-white italic font-playfair py-4 bg-primary/5 dark:bg-primary/10 px-6 rounded-r-lg">
                "Our patent-pending technique allows clinicians to isolate pathological structures in 3D volumes while drastically reducing computational overhead."
              </blockquote>
              <p>
                The primary challenge with analyzing 1,133-scan test sets, as detailed in our Locus.Brain POC, has always been balancing accuracy with inference time. While traditional diagnostic workflows might take minutes per organ system, the Stamatis Engine aims to deliver full 3D diagnostics in under ~15s.
              </p>
              <p>
                This breakthrough represents years of research and development, combining probabilistic masking, multimodal embeddings, and reinforcement learning feedback loops into a unified diagnostic platform.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200 dark:border-white/10"
            >
              <p className="text-text-secondary dark:text-medical-slate mb-6 font-dmSans">
                Ready to see the Stamatis Engine in action?
              </p>
              <Link 
                href="/request-demo" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-primary to-gold-light text-navy-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Request a Demo →
              </Link>
            </motion.div>
          </Fade>
        </div>
      </section>
    </main>
  );
}