"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Wallet,
  Landmark,
  Coins,
  MessageSquare,
  Copy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface PlanDetails {
  id: string;
  name: string;
  duration: string;
  priceLKR: number;
  priceUSD: number;
  category: string;
}

interface CheckoutFlowProps {
  initialPlan?: PlanDetails;
  onBackToStore?: () => void;
}

type PaymentMethodType = "wallet" | "bank" | "crypto";

export default function CheckoutFlow({
  initialPlan = {
    id: "google-ai-pro",
    name: "Google AI Pro",
    duration: "Google AI Pro 18M",
    priceLKR: 1990,
    priceUSD: 6.99,
    category: "google ai",
  },
  onBackToStore,
}: CheckoutFlowProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");

  // Step 1: Contact details
  const [name, setName] = useState("rangika");
  const [whatsappNumber, setWhatsappNumber] = useState("+94 716513556");
  const [email, setEmail] = useState("rangikapriyani32@gmail.com");

  // Step 2: Payment details
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("bank");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  // Success / Placed Order modal
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Pricing calculations
  const basePrice = currency === "LKR" ? initialPlan.priceLKR : initialPlan.priceUSD;
  const finalPrice = Math.max(0, basePrice - discount);
  const formattedPrice =
    currency === "LKR"
      ? `LKR ${finalPrice.toLocaleString()}`
      : `$${finalPrice.toFixed(2)}`;

  const applyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "plumo15" || couponCode.trim().toLowerCase() === "digi10") {
      const discountVal = currency === "LKR" ? 250 : 1.0;
      setDiscount(discountVal);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'DIGI10' or 'PLUMO15'");
    }
  };

  const getMethodDisplayName = (method: PaymentMethodType) => {
    switch (method) {
      case "bank":
        return "Bank Transfer";
      case "crypto":
        return "Crypto (USDT)";
      case "wallet":
        return "Wallet Balance";
      default:
        return "Bank Transfer";
    }
  };

  // Step 3: Place order action
  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    const message = `*NEW ORDER CONFIRMED - ${initialPlan.name}*
Plan: ${initialPlan.duration}
Total Due: ${formattedPrice}
Name: ${name}
WhatsApp: ${whatsappNumber}
Notification Email: ${email}
Payment Method: ${getMethodDisplayName(selectedMethod)}

Hello! I have placed my order. Please send the payment confirmation and activation details.`;

    const cleanNumber = "94716513556";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab after a brief feedback
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-14 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-2xl">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-neutral-700 transition-colors">
            store
          </Link>
          <span>/</span>
          <span className="text-neutral-600">{initialPlan.category}</span>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">checkout</span>
        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
            Complete your order
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 mt-2">
            Your details, payment, then a final check before you place your order.
          </p>
        </div>

        {/* Horizontal Step Indicator */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          {/* Step 1: Details */}
          <div className="flex items-center gap-2">
            {step > 1 ? (
              <span className="w-7 h-7 rounded-lg bg-[#2A7255] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            ) : (
              <span className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                1
              </span>
            )}
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 1 ? "text-[#2563EB]" : "text-neutral-700"
              }`}
            >
              Details
            </span>
          </div>

          {/* Connector Line 1 */}
          <div
            className={`h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] transition-colors ${
              step > 1 ? "bg-[#2A7255]" : "bg-neutral-300"
            }`}
          />

          {/* Step 2: Payment */}
          <div className="flex items-center gap-2">
            {step > 2 ? (
              <span className="w-7 h-7 rounded-lg bg-[#2A7255] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            ) : (
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  step === 2
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "border border-neutral-300 text-neutral-400 bg-white"
                }`}
              >
                2
              </span>
            )}
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 2 ? "text-[#2563EB]" : step > 2 ? "text-neutral-700" : "text-neutral-400"
              }`}
            >
              Payment
            </span>
          </div>

          {/* Connector Line 2 */}
          <div
            className={`h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] transition-colors ${
              step > 2 ? "bg-[#2A7255]" : "bg-neutral-300"
            }`}
          />

          {/* Step 3: Confirm */}
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                step === 3
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "border border-neutral-300 text-neutral-400 bg-white"
              }`}
            >
              3
            </span>
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 3 ? "text-[#2563EB]" : "text-neutral-400"
              }`}
            >
              Confirm
            </span>
          </div>
        </div>

        {/* Selected Plan Summary Card */}
        <div className="relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#2563EB] before:rounded-l-2xl overflow-hidden pl-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-100 via-pink-50 to-indigo-100 border border-purple-200/60 flex items-center justify-center text-purple-600 flex-shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 fill-purple-500 text-purple-600" />
            </div>

            <div>
              <h3 className="font-bold text-base text-neutral-900 leading-snug">
                {initialPlan.name}
              </h3>
              <p className="text-xs font-mono text-neutral-500 mt-0.5">
                {initialPlan.duration}
              </p>
              <p className="text-sm font-bold text-neutral-900 mt-1">
                {formattedPrice} total
              </p>
            </div>
          </div>

          {/* Currency Toggle Pill */}
          <div className="flex items-center self-start sm:self-center bg-neutral-100 p-1 rounded-xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                currency === "USD"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              USD
            </button>
            <button
              type="button"
              onClick={() => setCurrency("LKR")}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                currency === "LKR"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              LKR
            </button>
          </div>
        </div>

        {/* Step Views with Framer Motion */}
        <AnimatePresence mode="wait">
          
          {/* ================= STEP 1: Details ================= */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-neutral-400 mr-2">
                  01
                </span>
                <h2 className="text-xl font-bold text-neutral-900 inline">
                  Who&apos;s this for?
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Add the contact details for this order.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Your name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  />
                </div>

                {/* WhatsApp number */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-neutral-800">
                      WhatsApp number
                    </label>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      with country code
                    </span>
                  </div>
                  <input
                    type="tel"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="+94 71xxxxxxx"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  />
                </div>
              </div>

              {/* Notification Email Field */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-2">
                  Notification Email (for delivery confirmation)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                />
              </div>

              <p className="text-xs text-neutral-500 pt-1">
                Double-check your WhatsApp number so we can reach you about your order.
              </p>
            </motion.div>
          )}

          {/* ================= STEP 2: How will you pay? ================= */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Main Card: How will you pay? */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-neutral-400 mr-2">
                    02
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 inline">
                    How will you pay?
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    We confirm manually within 15–30 minutes.
                  </p>
                </div>

                {/* Payment Options */}
                <div className="space-y-4">
                  {/* Option 1: Wallet Balance (Full Width) */}
                  <div
                    onClick={() => setSelectedMethod("wallet")}
                    className={`relative rounded-2xl border p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all ${
                      selectedMethod === "wallet"
                        ? "border-[#2563EB] bg-blue-50/20 shadow-sm"
                        : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 flex-shrink-0 shadow-2xs">
                      <Wallet className="w-5 h-5 text-neutral-600 stroke-[1.8]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-neutral-900">
                        Wallet Balance
                      </h4>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Balance: LKR 0 · charge LKR 1,990
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Not enough balance ·{" "}
                        <span className="text-[#2563EB] hover:underline font-medium">
                          top up
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Options Grid (Bank Transfer & Crypto) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Option 2: Bank Transfer */}
                    <div
                      onClick={() => setSelectedMethod("bank")}
                      className={`relative rounded-2xl border p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all ${
                        selectedMethod === "bank"
                          ? "border-[#2563EB] ring-2 ring-[#2563EB]/20 bg-blue-50/20 shadow-sm"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-600 flex-shrink-0 shadow-2xs">
                        <Landmark className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-sm text-neutral-900">
                          Bank Transfer
                        </h4>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          Local bank transfer
                        </p>
                      </div>
                    </div>

                    {/* Option 3: Crypto */}
                    <div
                      onClick={() => setSelectedMethod("crypto")}
                      className={`relative rounded-2xl border p-4 sm:p-5 flex items-center gap-4 cursor-pointer transition-all ${
                        selectedMethod === "crypto"
                          ? "border-[#2563EB] ring-2 ring-[#2563EB]/20 bg-blue-50/20 shadow-sm"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-600 flex-shrink-0 shadow-2xs">
                        <Coins className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-sm text-neutral-900">
                          Crypto
                        </h4>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          USDT · BTC · Binance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtotal & Total Due Box */}
              <div className="bg-[#F0F5FA] rounded-2xl p-5 sm:p-6 border border-blue-100/70">
                <div className="flex justify-between items-center text-xs font-semibold text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-mono text-neutral-800">
                    {formattedPrice}
                  </span>
                </div>

                <div className="border-b border-dashed border-neutral-300/80 my-3.5" />

                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-neutral-900">
                    Total due
                  </span>
                  <span className="text-base sm:text-lg font-mono font-black text-neutral-900">
                    {formattedPrice}
                  </span>
                </div>
              </div>

              {/* Add a Coupon Code Link & Drawer */}
              <div className="px-1">
                {!showCouponInput ? (
                  <button
                    type="button"
                    onClick={() => setShowCouponInput(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#2563EB] hover:text-[#1D4ED8] font-medium"
                  >
                    <span className="text-[10px]">▶</span>
                    <span>Add a coupon code (optional)</span>
                  </button>
                ) : (
                  <div className="flex gap-2 max-w-sm mt-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code (e.g. DIGI10)"
                      className="flex-1 rounded-xl border border-neutral-300 px-3.5 py-2 text-xs text-neutral-900 uppercase font-mono focus:outline-none focus:border-[#2563EB]"
                    />
                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="bg-[#2563EB] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#1D4ED8]"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {couponApplied && (
                  <p className="text-xs text-emerald-600 font-medium mt-1.5">
                    ✓ Coupon applied! Discount deducted.
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ================= STEP 3: Review the details ================= */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Review Card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-neutral-400 mr-2">
                    03
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 inline">
                    Review the details
                  </h2>
                </div>

                {/* Review Rows */}
                <div className="space-y-4 pt-1">
                  {/* Row 1: Plan */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 font-normal">Plan</span>
                    <span className="font-medium text-neutral-900">{initialPlan.duration}</span>
                  </div>

                  <div className="border-b border-dashed border-neutral-200" />

                  {/* Row 2: Name */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 font-normal">Name</span>
                    <span className="font-medium text-neutral-900">{name}</span>
                  </div>

                  <div className="border-b border-dashed border-neutral-200" />

                  {/* Row 3: WhatsApp */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 font-normal">WhatsApp</span>
                    <span className="font-mono text-neutral-900">{whatsappNumber}</span>
                  </div>

                  <div className="border-b border-dashed border-neutral-200" />

                  {/* Row 4: Notification Email */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 font-normal">Notification Email</span>
                    <span className="font-medium text-neutral-900">{email}</span>
                  </div>

                  <div className="border-b border-dashed border-neutral-200" />

                  {/* Row 5: Payment */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 font-normal">Payment</span>
                    <span className="font-medium text-neutral-900">
                      {getMethodDisplayName(selectedMethod)}
                    </span>
                  </div>

                  <div className="border-b border-dashed border-neutral-200" />
                </div>

                {/* Total due today box */}
                <div className="bg-[#F0F5FA] rounded-2xl p-5 sm:p-6 border border-blue-100/70 flex items-center justify-between mt-6">
                  <span className="text-sm sm:text-base font-semibold text-neutral-700">
                    Total due today
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-neutral-900 tracking-tight">
                    {formattedPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Bottom Navigation Controls */}
        <div className="border-t border-neutral-200/80 pt-6 mt-8 flex items-center justify-between">
          {/* Back button */}
          <button
            type="button"
            onClick={() => {
              if (step > 1) {
                setStep((prev) => (prev - 1) as 1 | 2 | 3);
              } else if (onBackToStore) {
                onBackToStore();
              } else {
                window.location.href = "/";
              }
            }}
            className="border border-neutral-200 bg-white hover:bg-neutral-50 rounded-xl px-5 py-2.5 text-neutral-600 hover:text-neutral-900 font-medium text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* Step indicator text */}
          <span className="text-xs text-neutral-400 font-mono">
            step {step} of 3
          </span>

          {/* Action button */}
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => (prev + 1) as 1 | 2 | 3)}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl px-7 py-3 font-semibold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl px-7 py-3 font-semibold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <span>Place order</span>
            </button>
          )}
        </div>

        {/* Confirmation Modal */}
        <AnimatePresence>
          {orderPlaced && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-neutral-200 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Order Placed Successfully!
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We are opening WhatsApp with your order details pre-filled. Our dispatch team will verify and deliver your account details right away.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="w-full bg-[#141414] hover:bg-black text-white py-3 rounded-xl font-semibold text-sm"
                  >
                    Return to Store
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
