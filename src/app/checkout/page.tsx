"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CheckoutFlow, { PlanDetails } from "@/components/CheckoutFlow";
import WhatsAppButton from "@/components/WhatsAppButton";

const planCatalog: Record<string, PlanDetails> = {
  "google-ai-pro": {
    id: "google-ai-pro",
    name: "Google AI Pro",
    duration: "Google AI Pro 18M",
    priceLKR: 1990,
    priceUSD: 6.99,
    category: "google ai",
  },
  "antigravity-ultra": {
    id: "antigravity-ultra",
    name: "Antigravity AI Ultra",
    duration: "Antigravity 12M Pro Access",
    priceLKR: 2490,
    priceUSD: 8.99,
    category: "ai accounts",
  },
  "claude-pro": {
    id: "claude-pro",
    name: "Claude Pro / Sonnet 3.7",
    duration: "Claude Pro 3M Dedicated",
    priceLKR: 2990,
    priceUSD: 9.99,
    category: "ai accounts",
  },
  "chatgpt-plus": {
    id: "chatgpt-plus",
    name: "ChatGPT Plus & GPT-4o",
    duration: "ChatGPT Plus 6M Shared/Private",
    priceLKR: 2750,
    priceUSD: 9.5,
    category: "ai accounts",
  },
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planKey = searchParams.get("plan") || "google-ai-pro";
  const selectedPlan = planCatalog[planKey] || planCatalog["google-ai-pro"];

  return (
    <>
      <CheckoutFlow initialPlan={selectedPlan} />
      <WhatsAppButton />
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
          <p className="text-sm font-mono text-neutral-500">Loading checkout...</p>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
