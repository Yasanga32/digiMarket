"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Star, Pause, Play, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const storySlides = [
  {
    id: "squish-mask",
    name: "Overnight Squish Mask",
    tagline: "Hyaluronic sleep mask · wake up bouncy",
    price: 36,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=200&q=80",
    badge: "Best Seller",
  },
  {
    id: "glaze-tint",
    name: "Glaze Lip Squish Tint",
    tagline: "Peptide sheer jelly stain · high shine",
    price: 22,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=200&q=80",
    badge: "Viral Favourite",
  },
];

const customerAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
];

export default function Hero() {
  const { addItem } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Auto-advance story slides if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storySlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const activeProduct = storySlides[currentSlide];

  const handleAddToCart = () => {
    addItem({
      id: activeProduct.id,
      name: activeProduct.name,
      subtitle: activeProduct.tagline,
      price: activeProduct.price,
      image: activeProduct.thumb,
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Typography & CTA ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="tracking-tight select-none">
                <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.6rem] leading-[0.85] uppercase text-[#141414] block">
                  SKIN, BUT
                </span>
                <span className="font-editorial italic font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[7.6rem] leading-[0.92] text-[#B83226] block -mt-1 sm:-mt-2">
                  juicier.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg md:text-[1.2rem] text-[#3F3D39] max-w-lg leading-relaxed font-normal"
            >
              Jelly-textured skincare and squishy colour that plumps, bounces and glows.
              Clinically proven, fragrance-free, made for every skin type.
            </motion.p>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex items-center gap-4"
            >
              <a
                href="#shop"
                className="group relative inline-flex items-center gap-3 bg-[#141414] hover:bg-black text-white px-8 py-4 rounded-full font-medium text-base tracking-tight shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Shop bestsellers</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Social Proof / Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-5 pt-4 border-t border-black/[0.06]"
            >
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2.5">
                {customerAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-[#FAF7F2] overflow-hidden shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`Customer ${i + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Stars & Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#B83226]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B83226] text-[#B83226]" />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-[#141414]">4.9/5</span>
                </div>
                <span className="text-xs sm:text-[13px] text-neutral-600 font-normal">
                  from 12,400+ squishy reviews
                </span>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Media Card ================= */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl relative"
            >
              {/* Outer Tablet / Story Viewer Bezel */}
              <div className="relative rounded-[2.2rem] sm:rounded-[2.75rem] border-[6px] sm:border-[8px] border-[#66686C]/40 bg-[#141414] shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[1.15/1]">
                
                {/* Background Hero Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0.8, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover object-center filter brightness-[0.98] contrast-[1.03]"
                    />
                    {/* Top gradient for story header visibility */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
                    {/* Bottom gradient for badge contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Story Controls Bar */}
                <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-6 z-20 flex flex-col gap-3">
                  {/* Progress bars (Segments) */}
                  <div className="flex items-center gap-1.5 w-full">
                    {storySlides.map((slide, idx) => (
                      <div
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className="h-1 bg-white/30 rounded-full flex-1 overflow-hidden cursor-pointer backdrop-blur-sm"
                      >
                        <motion.div
                          className="h-full bg-white rounded-full"
                          initial={{ width: idx < currentSlide ? "100%" : "0%" }}
                          animate={{
                            width:
                              idx < currentSlide
                                ? "100%"
                                : idx === currentSlide && isPlaying
                                ? "100%"
                                : idx === currentSlide && !isPlaying
                                ? "50%"
                                : "0%",
                          }}
                          transition={{
                            duration: idx === currentSlide && isPlaying ? 6 : 0.2,
                            ease: "linear",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Header info & Pause button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#B83226] flex items-center justify-center text-white font-bold text-xs shadow-md border border-white/40">
                        P
                      </div>
                      <div className="flex items-center gap-1.5 text-white drop-shadow">
                        <span className="font-bold text-sm tracking-tight">plumo</span>
                        <span className="text-white/80 text-sm font-normal">
                          {activeProduct.name}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-sm"
                      aria-label={isPlaying ? "Pause story" : "Play story"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-white text-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Floating Bottom Product Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 z-20"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/80 flex items-center justify-between gap-3 sm:gap-4 transition-transform">
                    {/* Left: Thumbnail & Info */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-200/60 shadow-sm">
                        <Image
                          src={activeProduct.thumb}
                          alt={activeProduct.name}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-neutral-900 truncate">
                          {activeProduct.name}
                        </h3>
                        <p className="text-xs text-neutral-500 truncate hidden xs:block">
                          {activeProduct.tagline}
                        </p>
                        <p className="font-bold text-sm sm:text-base text-neutral-900 mt-0.5">
                          ${activeProduct.price}
                        </p>
                      </div>
                    </div>

                    {/* Right: Red CTA Button */}
                    <button
                      onClick={handleAddToCart}
                      className={`flex-shrink-0 bg-[#B83226] hover:bg-[#9E281F] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 active:scale-95 shadow-md flex items-center gap-1.5 ${
                        addedAnimation ? "bg-emerald-600 hover:bg-emerald-700" : ""
                      }`}
                    >
                      {addedAnimation ? (
                        <>
                          <span>Added</span>
                          <Check className="w-4 h-4 stroke-[3]" />
                        </>
                      ) : (
                        <>
                          <span>Shop</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="flex justify-end mt-3 pr-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 font-medium bg-neutral-100/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-[#B83226]" />
                  Skin, but juicier ritual
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
