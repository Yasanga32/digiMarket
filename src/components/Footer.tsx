"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const shopLinks = [
    { label: "Skincare", href: "#shop" },
    { label: "Makeup", href: "#shop" },
    { label: "Collections", href: "#collections" },
  ];

  const plumoLinks = [
    { label: "About", href: "#about" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Journal", href: "#journal" },
  ];

  const helpLinks = [
    { label: "Shipping & returns", href: "#shipping" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const followLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <footer className="bg-[#B83226] text-white pt-16 sm:pt-20 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Grid (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-14">
          
          {/* Column 1: SHOP */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-white/70 uppercase mb-4">
              SHOP
            </span>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-base sm:text-lg text-white hover:text-white/80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: PLUMO */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-white/70 uppercase mb-4">
              PLUMO
            </span>
            <ul className="space-y-3">
              {plumoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-base sm:text-lg text-white hover:text-white/80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-white/70 uppercase mb-4">
              HELP
            </span>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-base sm:text-lg text-white hover:text-white/80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-white/70 uppercase mb-4">
              FOLLOW
            </span>
            <ul className="space-y-3">
              {followLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-base sm:text-lg text-white hover:text-white/80 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-6 pb-4 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/80 gap-3">
          <p>© 2026 Plumo Beauty Inc.</p>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>

      {/* Monumental Edge-to-Edge PLUMO Branding */}
      <div className="w-full overflow-hidden leading-none text-center pointer-events-none mt-2 sm:mt-4">
        <span className="font-display font-black text-[22vw] leading-[0.74] tracking-tighter text-white uppercase block w-full select-none translate-y-3 sm:translate-y-6">
          PLUMO
        </span>
      </div>
    </footer>
  );
}
