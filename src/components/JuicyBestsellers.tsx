"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Plus, Sparkles, Code2, Cpu, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

type Category = "All" | "AI Models" | "Developer Tools" | "Productivity";

interface Product {
  id: string;
  name: string;
  category: "AI Models" | "Developer Tools" | "Productivity";
  priceLKR: number;
  priceUSD: number;
  subtitle: string;
  rating: number;
  reviews: string;
  image: string;
  badge?: {
    text: string;
    type: "blue" | "dark" | "emerald";
  };
}

const products: Product[] = [
  {
    id: "google-ai-pro",
    name: "Google AI Pro 18M",
    category: "AI Models",
    priceLKR: 1990,
    priceUSD: 6.99,
    subtitle: "Gemini Advanced · 2TB Cloud Storage · Dedicated",
    rating: 4.9,
    reviews: "3,820",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=85",
    badge: {
      text: "Bestseller",
      type: "blue",
    },
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus & GPT-4o",
    category: "AI Models",
    priceLKR: 2750,
    priceUSD: 9.5,
    subtitle: "GPT-4o Voice, Canvas & DALL-E · 1-Month",
    rating: 4.8,
    reviews: "4,190",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=85",
    badge: {
      text: "Limited Stock",
      type: "dark",
    },
  },
  {
    id: "claude-pro",
    name: "Claude Pro / Sonnet 3.7",
    category: "AI Models",
    priceLKR: 2990,
    priceUSD: 9.99,
    subtitle: "High-Context Coding Model · Priority Compute",
    rating: 4.9,
    reviews: "2,410",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=700&q=85",
    badge: {
      text: "Top Rated",
      type: "emerald",
    },
  },
  {
    id: "copilot-dev",
    name: "GitHub Copilot + JetBrains",
    category: "Developer Tools",
    priceLKR: 2400,
    priceUSD: 8.5,
    subtitle: "All-IDE AI Code Assistant · Private License",
    rating: 4.8,
    reviews: "1,980",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=85",
  },
];

const categories: Category[] = ["All", "AI Models", "Developer Tools", "Productivity"];

export default function JuicyBestsellers() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const { addItem } = useCart();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="bestsellers" className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.5rem] tracking-tight uppercase text-[#0F172A]">
              TRENDING SOFTWARE
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#2563EB]">
              (best value)
            </span>
          </div>

          <Link
            href="/#bestsellers"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
          >
            <span>View all 24 tools</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 select-none ${
                  isActive
                    ? "text-white"
                    : "text-neutral-700 bg-white border border-neutral-300 hover:border-black"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#0F172A] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col cursor-pointer"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-black/[0.06] shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.85] contrast-[1.1]"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm text-white ${
                          product.badge.type === "blue"
                            ? "bg-[#2563EB]"
                            : product.badge.type === "emerald"
                            ? "bg-emerald-600"
                            : "bg-[#0F172A]"
                        }`}
                      >
                        {product.badge.text}
                      </span>
                    </div>
                  )}

                  {/* Quick Buy Button Overlay */}
                  <Link
                    href={`/checkout?plan=${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-[#2563EB] text-neutral-900 hover:text-white shadow-md text-xs font-bold transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:scale-105 flex items-center gap-1"
                  >
                    <span>Get Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Details */}
                <div className="mt-3.5 flex flex-col">
                  {/* Name & Price Row */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                      LKR {product.priceLKR.toLocaleString()}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                    {product.subtitle}
                  </p>

                  {/* Rating Stars & Count */}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex items-center text-[#2563EB]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#2563EB] text-[#2563EB]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {product.rating} ({product.reviews} activations)
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
