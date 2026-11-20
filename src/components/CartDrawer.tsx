"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalCount } =
    useCart();

  const freeShippingThreshold = 45;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-neutral-200"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-neutral-900" />
                <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
                  Your Squishy Bag ({totalCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#FAF7F2] px-6 py-4 border-b border-neutral-200">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-2">
                <span>
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping.toFixed(2)} more for FREE shipping!`
                    : "🎉 You unlocked FREE standard shipping!"}
                </span>
                <span>{progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#B83226]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-neutral-800 text-base">Your bag is empty</h3>
                  <p className="text-sm text-neutral-500 mt-1 max-w-xs mx-auto">
                    Fill it up with jelly hydration and squishy pigment!
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-sm"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="font-bold text-sm text-neutral-900 leading-snug">
                            {item.name}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-400 hover:text-[#B83226] text-xs p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-neutral-200 rounded-full px-2 py-1 bg-[#FAF7F2]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-0.5 text-neutral-600 hover:text-black"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-0.5 text-neutral-600 hover:text-black"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-sm text-neutral-900">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-200 bg-white space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-neutral-900">
                      {subtotal >= freeShippingThreshold ? (
                        <span className="text-[#B83226] font-bold">FREE</span>
                      ) : (
                        "$4.95"
                      )}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex justify-between items-baseline">
                  <span className="text-base font-bold text-neutral-900">Total</span>
                  <span className="text-xl font-black text-neutral-900">
                    ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 4.95)).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => alert("Proceeding to Checkout! Thank you for choosing PLUMO.")}
                  className="w-full bg-[#141414] hover:bg-black text-white py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99]"
                >
                  <span>Checkout Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-neutral-500">
                  Tax included. 30-day squishy glow guarantee.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
