"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

type Category = "All" | "Skincare" | "Makeup" | "Sets";

interface Product {
  id: string;
  name: string;
  category: "Skincare" | "Makeup" | "Sets";
  price: number;
  subtitle: string;
  rating: number;
  reviews: string;
  image: string;
  badge?: {
    text: string;
    type: "red" | "dark";
  };
}

const products: Product[] = [
  {
    id: "plump-drops",
    name: "Plump Drops",
    category: "Skincare",
    price: 38,
    subtitle: "5% peptide serum · bounce + glow",
    rating: 4.9,
    reviews: "2,184",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85",
    badge: {
      text: "Bestseller",
      type: "red",
    },
  },
  {
    id: "jelly-tint",
    name: "Jelly Tint",
    category: "Makeup",
    price: 22,
    subtitle: "Squishy colour that actually lasts",
    rating: 4.8,
    reviews: "3,642",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85",
    badge: {
      text: "Limited",
      type: "dark",
    },
  },
  {
    id: "jelly-cleanser",
    name: "Jelly Cleanser",
    category: "Skincare",
    price: 26,
    subtitle: "Melts everything, strips nothing",
    rating: 4.9,
    reviews: "1,532",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e075c3?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "cloud-barrier-cream",
    name: "Cloud Barrier Cream",
    category: "Skincare",
    price: 42,
    subtitle: "Ceramide + oat · calm, cushioned skin",
    rating: 4.8,
    reviews: "1,213",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85",
  },
];

const categories: Category[] = ["All", "Skincare", "Makeup", "Sets"];

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
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[3.5rem] tracking-tight uppercase text-[#141414]">
              THE JUICY ONES
            </h2>
            <span className="font-editorial italic font-normal text-3xl sm:text-4xl md:text-[3.2rem] text-[#B83226]">
              (bestsellers)
            </span>
          </div>

          <Link
            href="#shop"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141414] hover:text-[#B83226] transition-colors"
          >
            <span>Shop all 24</span>
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
                    className="absolute inset-0 bg-[#141414] rounded-full"
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
                <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-white border border-black/[0.04] shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm text-white ${
                          product.badge.type === "red"
                            ? "bg-[#B83226]"
                            : "bg-[#451421]"
                        }`}
                      >
                        {product.badge.text}
                      </span>
                    </div>
                  )}

                  {/* Quick Add Button Overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({
                        id: product.id,
                        name: product.name,
                        subtitle: product.subtitle,
                        price: product.price,
                        image: product.image,
                      });
                    }}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/95 hover:bg-[#B83226] text-neutral-900 hover:text-white shadow-md flex items-center justify-center transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                    aria-label={`Add ${product.name} to bag`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Details */}
                <div className="mt-3.5 flex flex-col">
                  {/* Name & Price Row */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#141414] tracking-tight group-hover:text-[#B83226] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-bold text-sm sm:text-base text-[#141414]">
                      ${product.price}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                    {product.subtitle}
                  </p>

                  {/* Rating Stars & Count */}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex items-center text-[#B83226]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#B83226] text-[#B83226]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {product.rating} ({product.reviews})
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
