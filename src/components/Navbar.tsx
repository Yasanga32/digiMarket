"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Journal", href: "#journal" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md transition-all border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-neutral-800 hover:text-black tracking-tight transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B83226] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center Brand Logo */}
        <div className="flex-1 lg:flex-none text-center">
          <Link
            href="/"
            className="inline-flex items-baseline font-display text-3xl sm:text-4xl md:text-[2.6rem] font-black tracking-tight uppercase text-neutral-950 hover:opacity-95 transition-opacity"
          >
            PLUMO
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B83226] ml-0.5 translate-y-[-0.75rem]" />
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#contact"
            className="hidden md:inline-block text-[15px] font-medium text-neutral-800 hover:text-black tracking-tight transition-colors"
          >
            Contact
          </Link>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-800 hover:text-black transition-colors rounded-full hover:bg-black/5"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Cart Bag Pill */}
          <button
            onClick={openCart}
            className="relative bg-[#141414] hover:bg-black text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-all active:scale-95 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden xs:inline">Bag</span>
            <span className="bg-[#B83226] text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-neutral-200 bg-[#FAF7F2] px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-neutral-800 hover:text-[#B83226] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200/80">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-neutral-600 hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
