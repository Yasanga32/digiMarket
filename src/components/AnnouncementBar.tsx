"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const announcements = [
    "INSTANT DISPATCH VIA WHATSAPP",
    "100% REPLACEMENT WARRANTY",
    "GOOGLE AI PRO & CHATGPT PLUS IN STOCK",
    "USE CODE DIGI10 FOR 10% OFF",
    "24/7 LIVE ACTIVATION SUPPORT",
  ];

  const tickerItems = [...announcements, ...announcements, ...announcements, ...announcements];

  return (
    <div className="bg-[#0F172A] text-white text-xs md:text-[13px] font-semibold tracking-wider uppercase py-2.5 overflow-hidden select-none border-b border-neutral-800">
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
            <span className="mx-4 text-neutral-200">{text}</span>
            <span className="text-[#2563EB] text-sm">✹</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
