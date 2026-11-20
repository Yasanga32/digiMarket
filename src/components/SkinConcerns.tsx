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

const categories: Concern[] = [
  {
    id: "coding-agents",
    title: "Coding & AI Agents",
    productCount: 14,
    headline: "Need coding power?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=85",
    alt: "Cyber matrix terminal code screen",
  },
  {
    id: "creative-ai",
    title: "Creative & Design AI",
    productCount: 8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=85",
    alt: "Generative AI colorful futuristic gradient",
  },
  {
    id: "api-infra",
    title: "API Credits & Cloud",
    productCount: 6,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    alt: "High performance server rack data center",
  },
  {
    id: "dev-packs",
    title: "Student & Dev Packs",
    productCount: 12,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=85",
    alt: "Developers collaborating on high performance workstations",
  },
];

export default function SkinConcerns() {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.5rem] tracking-tight uppercase text-[#0F172A]">
              WHAT ARE YOU
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#2563EB]">
              building?
            </span>
          </div>

          <Link
            href="#bestsellers"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
          >
            <span>All software categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* 1. Large Feature Card: Coding & AI Agents */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-6 group relative rounded-[2rem] overflow-hidden bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow cursor-pointer min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-7"
          >
            <div className="absolute inset-0">
              <Image
                src={categories[0].image}
                alt={categories[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
            </div>

            {/* Top-left Editorial Heading */}
            <div className="relative z-10">
              <span className="font-editorial italic text-3xl sm:text-4xl md:text-[2.6rem] text-white drop-shadow-sm font-normal">
                {categories[0].headline}
              </span>
            </div>

            {/* Bottom-left Pill Badge */}
            <div className="relative z-10 self-start">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 sm:px-4 shadow-lg border border-white/80 flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    {categories[0].title}
                  </h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {categories[0].productCount} TOOLS AVAILABLE
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2 & 3. Middle Column (Creative AI + API credits) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-5 lg:gap-6">
            
            {/* Middle Top: Creative & Design AI */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-[2rem] overflow-hidden bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-[210px] sm:h-[230px] flex items-end p-5"
            >
              <div className="absolute inset-0">
                <Image
                  src={categories[1].image}
                  alt={categories[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Pill Badge */}
              <div className="relative z-10 w-full">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                      {categories[1].title}
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                      {categories[1].productCount} TOOLS
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Bottom: API Credits & Cloud */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-[2rem] overflow-hidden bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-[210px] sm:h-[230px] flex items-end p-5"
            >
              <div className="absolute inset-0">
                <Image
                  src={categories[2].image}
                  alt={categories[2].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Pill Badge */}
              <div className="relative z-10 w-full">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                      {categories[2].title}
                    </h3>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                      {categories[2].productCount} TOOLS
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 4. Tall Vertical Card: Student & Dev Packs */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-3 group relative rounded-[2rem] overflow-hidden bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow cursor-pointer min-h-[360px] sm:min-h-[440px] flex items-end p-6 sm:p-7"
          >
            <div className="absolute inset-0">
              <Image
                src={categories[3].image}
                alt={categories[3].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 350px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Pill Badge */}
            <div className="relative z-10 w-full">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/80 inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    {categories[3].title}
                  </h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {categories[3].productCount} TOOLS
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
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
