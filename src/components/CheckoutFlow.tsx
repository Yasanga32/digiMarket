"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Copy, Check, MessageSquare } from "lucide-react";
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

  // Step 2: Payment details
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "card" | "usdt">("bank");
  const [paymentRef, setPaymentRef] = useState("");
  const [copied, setCopied] = useState(false);

  // Copy helper
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedPrice =
    currency === "LKR"
      ? `LKR ${initialPlan.priceLKR.toLocaleString()}`
      : `$${initialPlan.priceUSD.toFixed(2)}`;

  // Generate WhatsApp message for Step 3
  const handleConfirmOrder = () => {
    const message = `*NEW ORDER - ${initialPlan.name}*
Plan: ${initialPlan.duration}
Price: ${formattedPrice}
Name: ${name}
WhatsApp: ${whatsappNumber}
Payment Method: ${paymentMethod.toUpperCase()}
Reference: ${paymentRef || "Pending Verification"}

Please verify and activate my access. Thank you!`;

    const cleanNumber = "94716513556"; // Business WhatsApp number
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 1
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "border border-neutral-300 text-neutral-500 bg-white"
              }`}
            >
              1
            </span>
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 1 ? "text-[#2563EB]" : "text-neutral-600"
              }`}
            >
              Details
            </span>
          </div>

          <div className="h-[1px] bg-neutral-300 flex-1 max-w-[80px] sm:max-w-[120px]" />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 2
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "border border-neutral-300 text-neutral-500 bg-white"
              }`}
            >
              2
            </span>
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 2 ? "text-[#2563EB]" : "text-neutral-500"
              }`}
            >
              Payment
            </span>
          </div>

          <div className="h-[1px] bg-neutral-300 flex-1 max-w-[80px] sm:max-w-[120px]" />

          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                step === 3
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "border border-neutral-300 text-neutral-500 bg-white"
              }`}
            >
              3
            </span>
            <span
              className={`text-xs sm:text-sm font-semibold ${
                step === 3 ? "text-[#2563EB]" : "text-neutral-500"
              }`}
            >
              Confirm
            </span>
          </div>
        </div>

        {/* Selected Plan Summary Card */}
        <div className="relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#2563EB] before:rounded-l-2xl overflow-hidden pl-6">
          <div className="flex items-center gap-4">
            {/* Sparkle Icon Box */}
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

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {/* STEP 1: Details */}
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

              <p className="text-xs text-neutral-500 pt-1">
                Double-check your WhatsApp number so we can reach you about your order.
              </p>
            </motion.div>
          )}

          {/* STEP 2: Payment */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-neutral-400 mr-2">
                  02
                </span>
                <h2 className="text-xl font-bold text-neutral-900 inline">
                  Select payment method
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Choose how you would like to pay for your account.
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    paymentMethod === "bank"
                      ? "border-[#2563EB] bg-blue-50/50 text-[#2563EB] font-bold shadow-sm"
                      : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  <span className="block text-sm">Bank Transfer</span>
                  <span className="block text-[10px] text-neutral-500 font-normal mt-0.5">
                    LKR Instant
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    paymentMethod === "card"
                      ? "border-[#2563EB] bg-blue-50/50 text-[#2563EB] font-bold shadow-sm"
                      : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  <span className="block text-sm">Visa / Master</span>
                  <span className="block text-[10px] text-neutral-500 font-normal mt-0.5">
                    Online Link
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("usdt")}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    paymentMethod === "usdt"
                      ? "border-[#2563EB] bg-blue-50/50 text-[#2563EB] font-bold shadow-sm"
                      : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  <span className="block text-sm">USDT (Crypto)</span>
                  <span className="block text-[10px] text-neutral-500 font-normal mt-0.5">
                    Binance / TRC20
                  </span>
                </button>
              </div>

              {/* Bank Details Box */}
              {paymentMethod === "bank" && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                        Commercial Bank of Ceylon
                      </span>
                      <p className="font-mono text-base font-bold text-neutral-900 mt-0.5">
                        8001 2490 1204
                      </p>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        Account Name: <span className="font-semibold">Plumo Digital Tech</span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy("800124901204")}
                      className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-100 shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Reference Number input */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 mb-2">
                  Transaction Reference or Note (Optional)
                </label>
                <input
                  type="text"
                  value={paymentRef}
                  onChange={(e) => setPaymentRef(e.target.value)}
                  placeholder="e.g. Ref #12345 or sender name"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 3: Confirm */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-neutral-400 mr-2">
                  03
                </span>
                <h2 className="text-xl font-bold text-neutral-900 inline">
                  Review & Place Order
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  We will contact you on WhatsApp with your login credentials and activation key.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Plan</span>
                  <span className="font-bold text-neutral-900">{initialPlan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Duration</span>
                  <span className="font-mono text-neutral-800">{initialPlan.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Customer Name</span>
                  <span className="font-semibold text-neutral-900">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">WhatsApp Number</span>
                  <span className="font-mono text-neutral-900">{whatsappNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Payment</span>
                  <span className="font-semibold text-neutral-900 uppercase">
                    {paymentMethod}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-200 flex justify-between items-baseline">
                  <span className="font-bold text-neutral-900">Total Due</span>
                  <span className="font-black text-lg text-[#2563EB]">{formattedPrice}</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Instant automated delivery is supported via WhatsApp. You will receive immediate support from our team once your message is sent.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Controls */}
        <div className="border-t border-neutral-200/80 pt-6 mt-6 flex items-center justify-between">
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

          {/* Continue / Complete button */}
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
              onClick={handleConfirmOrder}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl px-7 py-3 font-semibold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Confirm on WhatsApp →</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
