"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JuicyBestsellers from "@/components/JuicyBestsellers";
import SkinConcerns from "@/components/SkinConcerns";
import ReviewsWall from "@/components/ReviewsWall";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#141414]">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Header Navigation */}
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        {/* Main Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. "THE JUICY ONES (bestsellers)" */}
          <JuicyBestsellers />

          {/* 3. "WHAT'S YOUR SKIN craving?" */}
          <SkinConcerns />

          {/* 4. "#SQUISHEDIT your words." Community UGC Wall */}
          <ReviewsWall />
        </main>

        {/* 5. Monumental Crimson Red Footer */}
        <Footer />

        {/* Drawers & Overlays */}
        <CartDrawer />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </CartProvider>
  );
}
