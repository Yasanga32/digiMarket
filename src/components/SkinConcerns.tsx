"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Concern {
  id: string;
  title: string;
  productCount: number;
  image: string;
  headline?: string;
  alt: string;
}

const concerns: Concern[] = [
  {
    id: "dehydration",
    title: "Dehydration",
    productCount: 13,
    headline: "Thirsty skin?",
    image: "https://images.unsplash.com/photo-1608248597359-0f09b558f6df?auto=format&fit=crop&w=1000&q=85",
    alt: "Macro red jelly skincare texture swatch",
  },
  {
    id: "dullness",
    title: "Dullness",
    productCount: 8,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=85",
    alt: "Glass dropper dispensing clear glowing serum droplet",
  },
  {
    id: "barrier-repair",
    title: "Barrier repair",
    productCount: 6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85",
    alt: "Whipped cloud ceramide barrier cream swirl",
  },
  {
    id: "lips-cheeks",
    title: "Lips & cheeks",
    productCount: 9,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    alt: "Editorial model with glassy skin and deep berry jelly tint lips",
  },
];

export default function SkinConcerns() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.5rem] tracking-tight uppercase text-[#141414]">
              WHAT&apos;S YOUR SKIN
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#B83226]">
              craving?
            </span>
          </div>

          <Link
            href="#concerns"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141414] hover:text-[#B83226] transition-colors"
          >
            <span>All concerns</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* 1. Large Feature Card: Dehydration / "Thirsty skin?" (Left, spans 6 cols on md, 6 on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-6 group relative rounded-[2rem] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={concerns[0].image}
                alt={concerns[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Top-left Editorial Heading */}
            <div className="relative z-10">
              <span className="font-editorial italic text-3xl sm:text-4xl md:text-[2.6rem] text-[#141414] drop-shadow-sm font-normal">
                {concerns[0].headline}
              </span>
            </div>

            {/* Bottom-left Pill Badge */}
            <div className="relative z-10 self-start">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 sm:px-4 shadow-lg border border-white/80 flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    {concerns[0].title}
                  </h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {concerns[0].productCount} PRODUCTS
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#B83226] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2 & 3. Middle Column (Dullness + Barrier repair, spans 6 cols on md, 3 on lg) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-5 lg:gap-6">
            
            {/* Middle Top: Dullness */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-[2rem] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-[210px] sm:h-[230px] flex items-end p-5"
            >
              <div className="absolute inset-0">
                <Image
                  src={concerns[1].image}
                  alt={concerns[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Pill Badge */}
              <div className="relative z-10 w-full">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                      {concerns[1].title}
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                      {concerns[1].productCount} PRODUCTS
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#B83226] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Bottom: Barrier repair */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-[2rem] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-[210px] sm:h-[230px] flex items-end p-5"
            >
              <div className="absolute inset-0">
                <Image
                  src={concerns[2].image}
                  alt={concerns[2].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Pill Badge */}
              <div className="relative z-10 w-full">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                      {concerns[2].title}
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                      {concerns[2].productCount} PRODUCTS
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#B83226] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 4. Tall Vertical Card: Lips & cheeks (Right column, spans 6 cols on md, 3 on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-3 group relative rounded-[2rem] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer min-h-[360px] sm:min-h-[440px] flex items-end p-6 sm:p-7"
          >
            <div className="absolute inset-0">
              <Image
                src={concerns[3].image}
                alt={concerns[3].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 350px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Pill Badge */}
            <div className="relative z-10 w-full">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    {concerns[3].title}
                  </h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {concerns[3].productCount} PRODUCTS
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#B83226] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
