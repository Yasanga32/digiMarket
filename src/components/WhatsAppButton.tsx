"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "+94716513556",
  defaultMessage = "Hi! I would like to inquire about purchasing Google AI / Antigravity accounts.",
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Speech Bubble / Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 mr-1 bg-white text-neutral-800 text-xs sm:text-sm font-medium py-2.5 px-4 rounded-2xl shadow-xl border border-neutral-200/80 flex items-center gap-2 max-w-xs"
          >
            <span>Need help or instant activation? Chat with us!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-neutral-700 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sticky Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] transition-colors group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Glow Animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.541 1.79.82 2.791.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.773-5.766zm6.732 10.457c-.29.813-1.442 1.493-2.366 1.54-.632.032-1.458-.168-3.412-.976-2.5-1.034-4.108-3.593-4.233-3.76-.124-.167-1.019-1.354-1.019-2.582 0-1.229.645-1.834.873-2.083.229-.25.5-.312.667-.312.167 0 .333.002.479.009.156.007.365-.06.57.433.219.521.749 1.834.814 1.968.065.135.109.292.022.469-.088.177-.132.287-.261.438-.13.151-.274.337-.391.453-.13.13-.266.271-.115.531.151.26.671 1.107 1.442 1.794.992.884 1.83 1.159 2.091 1.289.261.13.414.115.568-.062.156-.177.667-.771.844-1.036.177-.265.354-.224.594-.135.24.089 1.521.719 1.782.849.26.13.433.193.498.302.065.11.065.636-.225 1.449zm-6.732-14.629c-5.514 0-10 4.486-10 10 0 1.833.494 3.551 1.355 5.035l-1.44 5.257 5.437-1.426c1.427.79 3.053 1.223 4.648 1.223 5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
        </svg>

        {/* Online Status Green Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </motion.a>
    </div>
  );
}
