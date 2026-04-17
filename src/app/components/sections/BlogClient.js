"use client";
import { BLOG_POSTS } from "@/app/constants";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";


export default function BlogClient() {
  return (
    <main className="min-h-screen bg-[#070F1C] text-white">      
      <section className="py-32 px-8 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          <Fade triggerOnce>
            <span className="inline-block px-3 py-1 rounded-full bg-[#5DB8A0]/10 border border-[#5DB8A0]/30 text-[11px] font-bold text-[#5DB8A0] uppercase tracking-widest mb-4">
              Intelligence Feed
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-16 tracking-tight">
              Latest <span className="text-[#C9A94E] italic">Insights</span>
            </h1>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-[#C9A94E]/40 hover:bg-white/[0.05]">
                  
                  {/* Image Placeholder */}
                  <div className={`aspect-[16/9] w-full ${post.imagePlaceholder.bg} flex items-center justify-center text-5xl transition-transform duration-700 group-hover:scale-105`}>
                    {post.imagePlaceholder.icon}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070F1C] via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold text-[#C9A94E] uppercase tracking-[0.2em]">
                        {post.tag}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono underline decoration-white/10">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="font-playfair text-2xl font-bold leading-snug group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read Analysis <span className="text-[#C9A94E]">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}