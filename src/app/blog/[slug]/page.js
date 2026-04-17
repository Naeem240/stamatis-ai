"use client";
import { useParams } from "next/navigation";
import { BLOG_POSTS } from "@/app/constants";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function BlogDetailsPage() {
  const params = useParams();
  
  // Find the specific post data using the dynamic slug
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  // Fallback if the post isn't found
  if (!post) {
    return (
      <main className="min-h-screen bg-[#070F1C] flex items-center justify-center text-white">
        <h1 className="text-xl">404 | Article Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070F1C] text-white">
      
      {/* Article Detail Header */}
      <section className="py-32 px-8 md:px-16 mt-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Link href="/blog" className="text-[#8899BB] hover:text-[#C9A94E] text-xs font-dmSans mb-12 block group">
            <span className="group-hover:translate-x-[-4px] inline-block transition-transform">←</span> Back to Insights
          </Link>

          <Fade triggerOnce>
            {/* Tag & Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-bold text-[#5DB8A0] uppercase tracking-widest">
                {post.tag}
              </span>
              <div className="w-[2px] h-4 bg-white/10" />
              <span className="text-sm text-[#8899BB] font-mono">
                {post.date}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            {/* Related Image Placeholder (as defined in post constant) */}
            <div className={`aspect-[2/1] w-full rounded-2xl ${post.imagePlaceholder.bg} border border-white/10 flex items-center justify-center text-7xl mb-16 relative overflow-hidden`}>
              {post.imagePlaceholder.icon}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1C]/80 to-transparent opacity-90" />
            </div>

            {/* Article Content (Placeholder for actual content later) */}
            <div className="font-dmSans text-lg text-[#8899BB] leading-relaxed max-w-3xl space-y-6">
              <p>
                In this article, we would explore the specific methodologies and clinical advantages of <strong className="text-white">{post.title}</strong>, particularly focusing on how it integrates with the Stamatis Engine architecture.
              </p>
              <blockquote className="border-l-2 border-[#C9A94E] pl-6 text-white italic font-playfair">
                "Our patent-pending technique allows clinicians to isolate pathological structures in 3D volumes while drastically reducing computational overhead."
              </blockquote>
              <p>
                The primary challenge with analyzing 1,133-scan test sets, as detailed in our Locus.Brain POC, has always been balancing accuracy with inference time. While traditional diagnostic workflows might take minutes per organ system, the Stamatis Engine aims to deliver full 3D diagnostics in under ~15s.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
}