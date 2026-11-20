"use client";

import React from "react";
import Image from "next/image";
import { Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "squish-mask",
    name: "Overnight Squish Mask",
    subtitle: "Hyaluronic sleep mask · wake up bouncy",
    price: 36,
    rating: "4.9",
    reviews: "3,820",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    badge: "Hero Product",
  },
  {
    id: "glaze-tint",
    name: "Glaze Lip Squish Tint",
    subtitle: "Peptide sheer jelly stain · high shine",
    price: 22,
    rating: "4.8",
    reviews: "4,190",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    badge: "Viral Favourite",
  },
  {
    id: "bounce-cleanser",
    name: "Bouncy Jelly Milk Cleanser",
    subtitle: "Melt makeup & hydrate without stripping",
    price: 28,
    rating: "4.9",
    reviews: "2,410",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    badge: "New Arrival",
  },
  {
    id: "nectar-drops",
    name: "Peptide Nectar Plump Serum",
    subtitle: "Quadruple hyaluronic acid + barrier booster",
    price: 42,
    rating: "5.0",
    reviews: "1,980",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    badge: "Award Winner",
  },
];

export default function ProductGrid() {
  const { addItem } = useCart();

  return (
    <section id="shop" className="py-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#B83226] uppercase">
              The Full Jelly Lineup
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-neutral-900 mt-2">
              SQUISHY BESTSELLERS
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base mt-3 md:mt-0">
            Formulated with elastic moisture spheres that burst on contact to deliver long-lasting dewy bounce.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-4 border border-neutral-200/60 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#B83226] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="flex items-center text-[#B83226]">
                    <Star className="w-3.5 h-3.5 fill-[#B83226]" />
                  </div>
                  <span className="text-xs font-bold text-neutral-800">{product.rating}</span>
                  <span className="text-xs text-neutral-500">({product.reviews})</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bold text-base text-neutral-900 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                  {product.subtitle}
                </p>
              </div>

              {/* Price & Add to Bag */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200/80">
                <span className="font-black text-lg text-neutral-900">
                  ${product.price}
                </span>
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      subtitle: product.subtitle,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="bg-[#141414] hover:bg-[#B83226] text-white p-2.5 rounded-full transition-colors flex items-center justify-center shadow-sm"
                  aria-label={`Add ${product.name} to bag`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
