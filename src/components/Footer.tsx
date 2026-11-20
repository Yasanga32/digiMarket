"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const productLinks = [
    { label: "Google AI Pro 18M", href: "/checkout?plan=google-ai-pro" },
    { label: "ChatGPT Plus & GPT-4o", href: "/#bestsellers" },
    { label: "Claude Pro / Sonnet 3.7", href: "/#bestsellers" },
    { label: "GitHub Copilot + JetBrains", href: "/#bestsellers" },
  ];

  const digiLinks = [
    { label: "About DIGI", href: "/#about" },
    { label: "Warranty Policy", href: "/#warranty" },
    { label: "My Accounts", href: "/my-accounts" },
    { label: "Activation Guide", href: "/my-accounts" },
  ];

  const helpLinks = [
    { label: "WhatsApp Support", href: "https://wa.me/94716513556" },
    { label: "Order Tracking", href: "/my-accounts" },
    { label: "Payment Verification", href: "/checkout" },
    { label: "Contact Us", href: "https://wa.me/94716513556" },
  ];

  const communityLinks = [
    { label: "WhatsApp Community", href: "https://wa.me/94716513556" },
    { label: "Telegram Channel", href: "https://t.me" },
    { label: "Discord Server", href: "https://discord.com" },
  ];

  return (
    <footer className="bg-[#0B0F19] text-white pt-16 sm:pt-20 overflow-hidden relative select-none border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Grid (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-14">
          
          {/* Column 1: PRODUCTS */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-[#2563EB] uppercase mb-4">
              PRODUCTS
            </span>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-sm sm:text-base text-neutral-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: DIGI */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-[#2563EB] uppercase mb-4">
              DIGI
            </span>
            <ul className="space-y-3">
              {digiLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-sm sm:text-base text-neutral-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-[#2563EB] uppercase mb-4">
              HELP
            </span>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-bold text-sm sm:text-base text-neutral-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: COMMUNITY */}
          <div>
            <span className="block text-[11px] font-bold tracking-widest text-[#2563EB] uppercase mb-4">
              COMMUNITY
            </span>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm sm:text-base text-neutral-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-6 pb-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 gap-3">
          <p>© 2026 DIGI Software Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">● 100% Guaranteed Activations</span>
          </div>
        </div>

      </div>

      {/* Monumental Edge-to-Edge DIGI Branding */}
      <div className="w-full overflow-hidden leading-none text-center pointer-events-none mt-2 sm:mt-4">
        <span className="font-display font-black text-[22vw] leading-[0.74] tracking-tighter text-white/90 uppercase block w-full select-none translate-y-3 sm:translate-y-6">
          DIGI
        </span>
      </div>
    </footer>
  );
}
