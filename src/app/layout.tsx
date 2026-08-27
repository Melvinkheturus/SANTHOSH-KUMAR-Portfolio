import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profsanthoshkumar.com"),
  title: "Prof. Santhosh Kumar | Principal - ASET College of Science & Technology",
  description: "Senior Academic Leader, Industry Professional, Educator, and Principal of ASET College of Science and Technology. 15+ years of institutional development and academic governance.",
  keywords: [
    "Prof. Santhosh Kumar",
    "Principal ASET College",
    "Academic Leader",
    "ASET College of Science and Technology",
    "Higher Education Leadership",
    "Safety Engineering Expert",
    "Grade IOSH UK",
  ],
  authors: [{ name: "Prof. Santhosh Kumar" }],
  openGraph: {
    title: "Prof. Santhosh Kumar | Principal - ASET College",
    description: "Academic Leader • Industry Professional • Educator • Professional Trainer",
    url: "https://profsanthoshkumar.com",
    siteName: "Prof. Santhosh Kumar Profile",
    images: [
      {
        url: "/images/prof-santhosh-kumar.jpg",
        width: 1200,
        height: 1600,
        alt: "Prof. Santhosh Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-white text-[#18181b] selection:bg-zinc-900 selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
