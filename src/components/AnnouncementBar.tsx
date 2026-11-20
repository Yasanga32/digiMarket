"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const announcements = [
    "CLEAN • VEGAN • DERM-TESTED",
    "FREE SHIPPING OVER $45",
    "FREE MINI JELLY TINT WITH EVERY ORDER",
    "AUTUMN SALE — 20% OFF THE WHOLE ROUTINE",
  ];

  // Repeat for continuous seamless loop
  const tickerItems = [...announcements, ...announcements, ...announcements, ...announcements];

  return (
    <div className="bg-[#B83226] text-white text-xs md:text-[13px] font-semibold tracking-wider uppercase py-2 overflow-hidden select-none border-b border-[#9E281F]">
      <motion.div
        className="flex whitespace-nowrap items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {tickerItems.map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="mx-4">{text}</span>
            <span className="text-white/80 text-sm">✹</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
