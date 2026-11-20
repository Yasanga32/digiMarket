import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLUMO® | Skin, but juicier.",
  description: "Jelly-textured skincare and squishy colour that plumps, bounces and glows. Clinically proven, fragrance-free, made for every skin type.",
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
      <body className="min-h-screen bg-[#FAF7F2] text-[#141414] antialiased selection:bg-[#B83226] selection:text-white">
        {children}
      </body>
    </html>
  );
}
