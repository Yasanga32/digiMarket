"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedTags = [
  "Overnight Squish Mask",
  "Jelly Tint",
  "Hyaluronic Plumper",
  "Barrier Cream",
  "Glow Drops",
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 border border-neutral-200 z-10"
          >
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search juicy skincare, squishy tints..."
                className="w-full text-lg font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
              />
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Trending Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-[#B83226] hover:text-white px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    <span>{tag}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
