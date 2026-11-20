import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "PLUMO Digital | AI Accounts & Software Subscriptions",
  description: "Get instant access to Google AI Pro, Antigravity AI, Claude, and developer tools with immediate activation and 24/7 WhatsApp support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital,wght@0,600;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#141414] antialiased selection:bg-[#2563EB] selection:text-white">
        {children}
        {/* Global Sticky WhatsApp Floating Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
