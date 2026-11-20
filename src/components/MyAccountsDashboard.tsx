"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  Eye,
  EyeOff,
  ExternalLink,
  Search,
  MessageCircle,
  FileText,
  AlertTriangle,
  RotateCw,
  Wallet,
  LogOut,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderSubscription {
  id: string;
  orderCode: string;
  serviceName: string;
  planType: string;
  placedDate: string;
  expiryDate: string;
  status: "active" | "expired" | "processing";
  price: string;
  loginEmail: string;
  loginPass: string;
  validityDays: number;
  warrantyDays: number;
  loginUrl: string;
  progress: {
    placed: string;
    payment: string;
    processing: string;
    ready: string;
  };
  rules: string[];
}

const mockOrders: OrderSubscription[] = [
  {
    id: "ord-1",
    orderCode: "BJN268812822",
    serviceName: "ChatGPT Plus",
    planType: "Shared",
    placedDate: "Aug 12, 2026",
    expiryDate: "Sep 12, 2026",
    status: "expired",
    price: "LKR 1,190.00",
    loginEmail: "stewing_stimuli18f@icloud.com",
    loginPass: "PlumoPlus@2026#",
    validityDays: 30,
    warrantyDays: 30,
    loginUrl: "https://chatgpt.com/login",
    progress: {
      placed: "Aug 12, 2026",
      payment: "confirmed",
      processing: "done",
      ready: "live now",
    },
    rules: [
      "Get the OTP from the button below.",
      "Do not change any settings in the account.",
      "Login with only 2 devices you own.",
      "Never try to share or resell the account.",
      "Contact us for any assistance.",
    ],
  },
  {
    id: "ord-2",
    orderCode: "BJN268787104",
    serviceName: "Google AI Pro",
    planType: "Private 18M",
    placedDate: "Jul 7, 2026",
    expiryDate: "Jan 7, 2028",
    status: "active",
    price: "LKR 1,990.00",
    loginEmail: "rangikapriyani32@gmail.com",
    loginPass: "GoogleAI#Master99",
    validityDays: 540,
    warrantyDays: 540,
    loginUrl: "https://gemini.google.com",
    progress: {
      placed: "Jul 7, 2026",
      payment: "confirmed",
      processing: "done",
      ready: "live now",
    },
    rules: [
      "Access Google AI Pro and Gemini Advanced directly.",
      "Dedicated private mailbox activation.",
      "Do not modify recovery phone numbers.",
      "24/7 Priority support via WhatsApp.",
    ],
  },
];

export default function MyAccountsDashboard() {
  const [selectedOrderId, setSelectedOrderId] = useState<string>("ord-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  const activeOrder =
    mockOrders.find((o) => o.id === selectedOrderId) || mockOrders[0];

  const filteredOrders = mockOrders.filter(
    (o) =>
      o.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.orderCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(activeOrder.loginEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(activeOrder.loginPass);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24 text-[#141414]">
      
      {/* Top Notice Banner */}
      <div className="bg-neutral-100 border-b border-neutral-200/80 text-center py-2 px-4 text-xs text-neutral-600">
        <span>Our WhatsApp number has changed. </span>
        <a
          href="https://wa.me/94716513556"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563EB] hover:underline font-semibold"
        >
          Message us at +94716513556 ↗
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
          <Link href="/" className="hover:text-neutral-700">
            My account
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold">Orders</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              Your orders
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              rangikapriyani32@gmail.com · 2 orders · 2 completed
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Current Wallet Balance: LKR 0.00")}
              className="bg-white border border-neutral-300 hover:border-black text-neutral-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-2xs flex items-center gap-1.5"
            >
              <Wallet className="w-4 h-4 text-neutral-500" />
              <span>Wallet (LKR 0)</span>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-white border border-neutral-300 hover:border-black text-neutral-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-2xs flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4 text-neutral-500" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        {/* 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: Order History Sidebar ================= */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-neutral-200/90 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
              <span className="font-bold text-sm text-neutral-900">Order history</span>
              <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                {mockOrders.length}
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search orders..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Order Cards List */}
            <div className="space-y-2.5 pt-1">
              {filteredOrders.map((order) => {
                const isSelected = order.id === selectedOrderId;
                return (
                  <div
                    key={order.id}
                    onClick={() => {
                      setSelectedOrderId(order.id);
                      setShowPassword(false);
                    }}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-[#2563EB] bg-blue-50/30 shadow-2xs"
                        : "border-neutral-200 hover:border-neutral-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Logo Icon */}
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0 text-neutral-800">
                        {order.serviceName.includes("Google") ? (
                          <Sparkles className="w-4 h-4 text-purple-600" />
                        ) : (
                          <span className="font-bold text-xs">AI</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-neutral-900 truncate">
                          {order.serviceName}
                        </h4>
                        <p className="text-[11px] font-mono text-neutral-500 truncate">
                          {order.planType} · {order.orderCode.slice(0, 8)}...
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mb-1" />
                      <span className="text-[11px] font-medium text-neutral-500">
                        {order.placedDate.slice(0, 6)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Active Subscription Detail ================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Card 1: Subscription Header & Status */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-2xs">
                    {activeOrder.serviceName.includes("Google") ? (
                      <Sparkles className="w-6 h-6 text-purple-600 fill-purple-200" />
                    ) : (
                      <span className="font-bold text-base">AI</span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900">
                      {activeOrder.serviceName}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {activeOrder.planType}
                    </p>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {activeOrder.orderCode} · placed {activeOrder.placedDate}
                    </p>
                  </div>
                </div>

                {/* Status Pill Badge */}
                <div>
                  {activeOrder.status === "expired" ? (
                    <span className="inline-flex items-center gap-1.5 bg-[#FAF0E6] text-[#8C4A1F] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8D4C2]">
                      <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                      Subscription expired
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="pt-2">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  PROGRESS
                </span>

                {/* Progress Lines */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="h-1 bg-[#1E5D43] rounded-full" />
                  <div className="h-1 bg-[#1E5D43] rounded-full" />
                  <div className="h-1 bg-[#1E5D43] rounded-full" />
                  <div className="h-1 bg-[#1E5D43] rounded-full" />
                </div>

                {/* Step Labels */}
                <div className="grid grid-cols-4 text-xs gap-2">
                  <div>
                    <span className="block font-semibold text-neutral-800">Order placed</span>
                    <span className="block text-[11px] text-neutral-500">{activeOrder.progress.placed}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-neutral-800">Payment received</span>
                    <span className="block text-[11px] text-neutral-500">{activeOrder.progress.payment}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-neutral-800">Processing</span>
                    <span className="block text-[11px] text-neutral-500">{activeOrder.progress.processing}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-neutral-800">Ready</span>
                    <span className="block text-[11px] text-emerald-600 font-semibold">{activeOrder.progress.ready}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Renewal Card (if expired or due) */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-neutral-900">
                  Renew your {activeOrder.serviceName} access
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B83226]">
                  <span className="w-2 h-2 rounded-full bg-[#B83226]" />
                  Payment due
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-lg font-medium">
                  Validity <strong className="font-bold">{activeOrder.validityDays} days</strong>
                </span>
                <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-lg font-medium">
                  Warranty <strong className="font-bold">{activeOrder.warrantyDays} days</strong>
                </span>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-sm text-neutral-900">Renewal payment due</h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Renewal date · {activeOrder.expiryDate}
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Your plan has ended. Renew your plan to use {activeOrder.serviceName} again.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/checkout"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Reactivate {activeOrder.serviceName}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Login instructions & account rules */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-neutral-900">
                Login instructions & account rules
              </h3>

              {/* 3 Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                  <div className="w-5 h-5 rounded-md border border-neutral-300 text-xs font-mono font-bold flex items-center justify-center text-neutral-600 mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-xs text-neutral-900">Copy your login</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-snug">
                    Copy the email and password shown below.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                  <div className="w-5 h-5 rounded-md border border-neutral-300 text-xs font-mono font-bold flex items-center justify-center text-neutral-600 mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-xs text-neutral-900">Open {activeOrder.serviceName}</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-snug">
                    Use the direct portal link and paste your credentials.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                  <div className="w-5 h-5 rounded-md border border-neutral-300 text-xs font-mono font-bold flex items-center justify-center text-neutral-600 mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-xs text-neutral-900">Verify if asked</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-snug">
                    Come back here and request a verification code only when prompted.
                  </p>
                </div>
              </div>

              {/* Warning Amber Box: Read before signing in */}
              <div className="rounded-xl border border-amber-200 bg-[#FFFDF5] p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Read before signing in</span>
                </div>
                <ul className="list-disc list-inside text-xs text-amber-900/90 space-y-1 pl-1">
                  {activeOrder.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4: Login details (Credentials & Copy buttons) */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm space-y-5">
              <div>
                <h3 className="font-bold text-base text-neutral-900">Login details</h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Keep these details private and do not change them.
                </p>
              </div>

              {/* Email Row */}
              <div>
                <span className="block text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase mb-1">
                  EMAIL
                </span>
                <div className="flex items-center justify-between gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3">
                  <span className="font-mono text-xs sm:text-sm text-neutral-900 truncate">
                    {activeOrder.loginEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors shadow-2xs"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Password Row */}
              <div>
                <span className="block text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase mb-1">
                  PASSWORD
                </span>
                <div className="flex items-center justify-between gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3">
                  <span className="font-mono text-xs sm:text-sm text-neutral-900">
                    {showPassword ? activeOrder.loginPass : "••••••••••••••••"}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyPassword}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors shadow-2xs"
                    >
                      {copiedPass ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>copy</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors shadow-2xs"
                    >
                      {showPassword ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>hide</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>reveal</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Action Button: Open and Sign In */}
            <a
              href={activeOrder.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Open {activeOrder.serviceName} and sign in</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Verification Code Box */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-neutral-900">
                  {activeOrder.serviceName} asking for a verification code?
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Shared plans require a screenshot of the verification screen.
                </p>
              </div>
              <button
                onClick={() => setOtpModalOpen(true)}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex-shrink-0 transition-colors shadow-2xs"
              >
                Get verification code
              </button>
            </div>

            {/* WhatsApp Trouble Login Banner */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-4 sm:p-5 shadow-sm flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <a
                  href={`https://wa.me/94716513556?text=Help%20with%20Order%20${activeOrder.orderCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-800 hover:text-[#2563EB]"
                >
                  Trouble logging in? Message us on WhatsApp
                </a>
              </div>
              <span className="font-mono text-neutral-400 font-semibold">
                {activeOrder.orderCode}
              </span>
            </div>

            {/* Thank you & Invoice Bar */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    THANK YOU
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900 mt-0.5">
                    Thanks for buying with PLUMO Digital!
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Get important notices, product updates, coupons, and early access to new deals.
                  </p>
                </div>
                <a
                  href="https://wa.me/94716513556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 self-start sm:self-center"
                >
                  <span>Join the community</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 mr-2">Total paid</span>
                  <span className="font-mono font-bold text-base text-neutral-900">
                    {activeOrder.price}
                  </span>
                </div>
                <button
                  onClick={() => setInvoiceModalOpen(true)}
                  className="inline-flex items-center gap-1.5 border border-neutral-200 text-xs font-semibold text-neutral-700 px-3.5 py-1.5 rounded-lg hover:bg-neutral-50 shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500" />
                  <span>invoice</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Verification Code OTP Modal */}
      <AnimatePresence>
        {otpModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-neutral-200 space-y-4"
            >
              <h3 className="text-lg font-bold text-neutral-900">
                Request Verification Code (OTP)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For shared subscriptions, verification codes are dispatched instantly via our automated WhatsApp helper.
              </p>
              <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl font-mono text-center text-xl font-bold tracking-widest text-[#2563EB]">
                482 910
              </div>
              <p className="text-[11px] text-neutral-500 text-center">
                Code expires in 4 minutes. Refresh if expired.
              </p>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setOtpModalOpen(false)}
                  className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-2.5 rounded-xl text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/94716513556?text=Need%20OTP%20for%20${activeOrder.orderCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-xs font-semibold text-center"
                >
                  WhatsApp OTP
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Invoice Modal */}
      <AnimatePresence>
        {invoiceModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-200 space-y-4"
            >
              <div className="flex justify-between items-baseline border-b pb-3">
                <h3 className="font-bold text-lg text-neutral-900">INVOICE #{activeOrder.orderCode}</h3>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">PAID</span>
              </div>
              <div className="text-xs space-y-2 text-neutral-600">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span className="font-semibold text-neutral-900">rangikapriyani32@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Product:</span>
                  <span className="font-semibold text-neutral-900">{activeOrder.serviceName} ({activeOrder.planType})</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-mono text-neutral-900">{activeOrder.placedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment:</span>
                  <span className="font-semibold text-neutral-900">Bank Transfer (Confirmed)</span>
                </div>
                <div className="pt-2 border-t flex justify-between text-sm font-bold text-neutral-900">
                  <span>Total Paid:</span>
                  <span className="font-mono">{activeOrder.price}</span>
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setInvoiceModalOpen(false)}
                  className="bg-neutral-900 hover:bg-black text-white px-5 py-2 rounded-xl text-xs font-semibold"
                >
                  Close Invoice
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
