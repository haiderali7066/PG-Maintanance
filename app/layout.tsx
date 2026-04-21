import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from "@/components/Whatsapp";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perfect General Maintenance | Yasil Energy Group",
  description:
    "Perfect General Maintenance specializes in facility management, building maintenance, and repair services for residential and commercial properties across the UAE.",
  keywords: [
    "facility maintenance UAE",
    "building maintenance UAE",
    "property maintenance services",
    "repair services UAE",
    "commercial maintenance UAE",
    "residential maintenance UAE",
    "Yasil Energy Group subsidiaries",
  ],
  openGraph: {
    title: "Perfect General Maintenance",
    description:
      "Reliable facility and building maintenance solutions for residential and commercial properties across the UAE.",
    url: "https://pgm.yasilenergy.com/",
    siteName: "Perfect General Maintenance",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect General Maintenance",
    description:
      "UAE-based maintenance company offering building, facility, and repair services for all property types.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar/>
        {children}
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  );
}