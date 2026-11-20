"use client";

import React from "react";
import { Sparkles, Droplets, ShieldCheck, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "Jelly Moisture Matrix™",
    description: "Holds up to 1,000x its weight in water to lock in bounce all day without any greasy residue.",
  },
  {
    icon: ShieldCheck,
    title: "Derm-Tested & Gentle",
    description: "Safe for reactive, acne-prone, and sensitized skin barriers. Fragrance-free and hypoallergenic.",
  },
  {
    icon: Sparkles,
    title: "Squishy Pigment Tech",
    description: "Color that melts into cheeks and lips like a natural post-facial flush that never streaks.",
  },
  {
    icon: HeartHandshake,
    title: "100% Vegan & Leaping Bunny",
    description: "Cruelty-free formulas housed in fully recyclable frosted glass and PCR pumps.",
  },
];

export default function ValuesSection() {
  return (
    <section id="ingredients" className="py-20 bg-[#FAF7F2] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#B83226] uppercase">
            Clinically Proven · Made For Every Skin
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-neutral-900 mt-2">
            WHY YOUR SKIN CRAVES JELLY
          </h2>
          <p className="text-neutral-600 mt-4 text-base">
            Traditional skincare sits on top. Our squishy hydro-gel formulas cushion into every pore for skin that looks like you drank three gallons of water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#B83226]/10 text-[#B83226] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
