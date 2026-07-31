'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";
import Cursor from "@/components/ui/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <PersonSchema />
      <Cursor />
      {children}
    </body>
  );
}