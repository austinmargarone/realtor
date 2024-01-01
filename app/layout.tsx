import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Austin Margarone | Realtor",
  description:
    "Austin Margarone is a realtor in the Greater Rochester Area of NY State.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#cccccc]	dark:bg-[#666666]`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
