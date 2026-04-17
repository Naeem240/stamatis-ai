"use client";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070F1C] border-t border-white/5 pt-20 pb-10 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Stamatis.AI" fill className="object-contain" />
              </div>
              <span className="font-playfair text-xl font-bold text-white">
                Stamatis<span className="text-[#C9A94E]">.AI</span>
              </span>
            </div>
            <p className="text-[#8899BB] text-sm max-w-sm leading-relaxed mb-6 font-dmSans">
              Cornerstone Eagle LLC · Texas LLC <br />
              Patent Pending US 19/200,539 <br />
              Building the future of surgical precision through AI.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0,3).map((link) => (
                <li key={link.href}>
                  <a href={`${link.href}`} className="text-[#8899BB] hover:text-[#C9A94E] text-sm transition-colors font-dmSans">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Legal Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/request-demo" className="text-[#8899BB] text-sm font-dmSans underline cursor-pointer hover:text-white">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#8899BB] text-sm font-dmSans underline cursor-pointer hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#8899BB] text-sm font-dmSans underline cursor-pointer hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-mono tracking-tighter">
            © {currentYear} STAMATIS.AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            <div className="w-4 h-4 bg-white/10 rounded-full cursor-pointer hover:bg-[#C9A94E]/40 transition-colors" />
            <div className="w-4 h-4 bg-white/10 rounded-full cursor-pointer hover:bg-[#C9A94E]/40 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}