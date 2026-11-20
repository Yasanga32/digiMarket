"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewsWall() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.6rem] tracking-tight uppercase text-[#0F172A]">
              #DIGIFAST
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#2563EB]">
              developer words.
            </span>
          </div>

          {/* Overall Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[#2563EB]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-neutral-800">
              4.9 / 5 · 18,200+ verified activations
            </span>
          </div>
        </div>

        {/* 4-Column UGC & Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5">
            {/* 1A: Developer photo with dual monitors */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=85"
                alt="Developer workstation setup"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover filter brightness-[0.85]"
              />
            </motion.div>

            {/* 1B: White Text Review */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.04] shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-[#2563EB] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-neutral-800">
                  &ldquo;Ordered Google AI Pro at 2 AM, got login credentials on WhatsApp in 6 minutes. Working flawlessly.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Instant Dispatch
                  </span>
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Gemini 1.5 Pro
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-neutral-100">
                <span className="font-bold text-neutral-900">Kasun D.</span>
                <span className="text-neutral-400">Software Engineer</span>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5">
            {/* 2A: Blue Feature Review Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between min-h-[220px] border border-neutral-800"
            >
              <div>
                <div className="flex items-center text-[#2563EB] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-white">
                  &ldquo;Renewed my Claude Pro subscription for the 3rd time. No VPN needed, private session, super smooth.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Verified Private
                  </span>
                  <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    3-Months Active
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-white/10">
                <span className="font-bold text-white">Dilshan P.</span>
                <span className="text-neutral-400">Tech Lead</span>
              </div>
            </motion.div>

            {/* 2B: UGC Photo */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=85"
                alt="Tech team celebrating deployment"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover filter brightness-[0.85]"
              />
            </motion.div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5">
            {/* 3A: UGC Photo */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"
                alt="Freelance developer portrait"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover filter brightness-[0.85]"
              />
            </motion.div>

            {/* 3B: White Text Review */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.04] shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-[#2563EB] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-neutral-800">
                  &ldquo;Saved over 60% compared to direct dollar billing from Sri Lanka. Instant WhatsApp support whenever asked.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Best Pricing
                  </span>
                  <span className="bg-blue-50 text-[#2563EB] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    LKR Bank Transfer
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-neutral-100">
                <span className="font-bold text-neutral-900">Ravindu M.</span>
                <span className="text-neutral-400">Fullstack Dev</span>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-5">
            {/* 4A: Soft Slate Review Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#EFF6FF] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between min-h-[220px] border border-blue-100"
            >
              <div>
                <div className="flex items-center text-[#2563EB] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-[#1E3A8A]">
                  &ldquo;Was skeptical at first, but their replacement warranty is 100% legit. Got a new key in 10 minutes when needed.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-blue-200/60 text-[#1E3A8A] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Warranty Honored
                  </span>
                  <span className="bg-blue-200/60 text-[#1E3A8A] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    5-Star Service
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-blue-200/60">
                <span className="font-bold text-[#1E3A8A]">Chathura K.</span>
                <span className="text-blue-500">Freelancer</span>
              </div>
            </motion.div>

            {/* 4B: UGC Photo */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85"
                alt="UI/UX Designer working"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover filter brightness-[0.85]"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
