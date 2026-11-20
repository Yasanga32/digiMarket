"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TextReview {
  type: "text";
  id: string;
  rating: number;
  quote: string;
  tags: string[];
  author: string;
  product: string;
  theme: "white" | "red" | "yellow";
}

interface ImageCard {
  type: "image";
  id: string;
  src: string;
  alt: string;
}

type CardItem = TextReview | ImageCard;

export default function ReviewsWall() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.6rem] tracking-tight uppercase text-[#141414]">
              #SQUISHEDIT
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#B83226]">
              your words.
            </span>
          </div>

          {/* Overall Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[#B83226]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#B83226] text-[#B83226]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-neutral-800">
              4.9 / 5 · 12,400+ reviews
            </span>
          </div>
        </div>

        {/* 4-Column UGC & Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5">
            {/* 1A: UGC Photo (Holding Tint in bedroom) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-200 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85"
                alt="Customer holding Plumo Jelly Tint"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </motion.div>

            {/* 1B: White Text Review */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.04] shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-[#B83226] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B83226] text-[#B83226]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-neutral-800">
                  &ldquo;Colour lasts through lunch and a coffee. Takes two coats to get it even, hence four stars.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-[#F8E5E7] text-[#9E281F] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Dry lips
                  </span>
                  <span className="bg-[#F8E5E7] text-[#9E281F] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Tint lover
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-neutral-100">
                <span className="font-bold text-neutral-900">Priya N.</span>
                <span className="text-neutral-400">Jelly Tint</span>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5">
            {/* 2A: Red Feature Review Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#B83226] text-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-white mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-white text-white" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-white">
                  &ldquo;Three weeks in and the flaky patch on my cheek is just gone. It sinks in before I have finished blinking.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Dehydrated
                  </span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Bounce
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-white/20">
                <span className="font-bold text-white">Maya T.</span>
                <span className="text-white/80">Plump Drops</span>
              </div>
            </motion.div>

            {/* 2B: UGC Photo (Two laughing friends with glowing skin) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-200 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85"
                alt="Two smiling women with dewy skin"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5">
            {/* 3A: UGC Photo (Male model with dew droplet on cheek) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-200 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"
                alt="Model with glazed skin and moisture drop"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </motion.div>

            {/* 3B: White Text Review */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.04] shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-[#B83226] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B83226] text-[#B83226]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-neutral-800">
                  &ldquo;Put it on before bed expecting nothing. Woke up genuinely bouncy. Now a standing Sunday thing.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-[#F8E5E7] text-[#9E281F] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Sensitive
                  </span>
                  <span className="bg-[#F8E5E7] text-[#9E281F] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Redness
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-neutral-100">
                <span className="font-bold text-neutral-900">Sam K.</span>
                <span className="text-neutral-400">Overnight Squish Mask</span>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col gap-5">
            {/* 4A: Soft Butter Yellow Review Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FCF5D8] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center text-[#B83226] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B83226] text-[#B83226]" />
                  ))}
                </div>
                <p className="font-editorial italic text-base sm:text-[1.08rem] leading-snug text-[#3B3216]">
                  &ldquo;I have tried every barrier cream on the shelf. This is the first one that does not sit on top like a raincoat.&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="bg-[#F0E4B8] text-[#54451A] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Dry
                  </span>
                  <span className="bg-[#F0E4B8] text-[#54451A] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Barrier
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-6 pt-3 border-t border-[#EBDCA8]">
                <span className="font-bold text-[#3B3216]">Jess W.</span>
                <span className="text-[#6B5E33]">Cloud Barrier Cream</span>
              </div>
            </motion.div>

            {/* 4B: UGC Photo (Applying cloud barrier cream to cheek) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/4.8] w-full rounded-3xl overflow-hidden bg-neutral-200 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85"
                alt="Applying cloud cream to cheek"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
