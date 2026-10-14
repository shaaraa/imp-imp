import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imperial-ic.am"),
  title: "Imperial Implant Center | New Website Coming Soon",
  description:
    "Our new official website is coming soon. Imperial Implant Center in Yerevan, Armenia is open and welcoming patients for advanced implantology and cosmetic dental care.",
  keywords: [
    "Imperial Implant Center",
    "Dental Implants Yerevan",
    "Dentist Yerevan Armenia",
    "Oral Surgery Yerevan",
    "Aesthetic Dentistry",
    "Imperial IC",
  ],
  authors: [{ name: "Imperial Implant Center" }],
  openGraph: {
    title: "Imperial Implant Center | New Website Coming Soon",
    description:
      "Our new website is currently under development. Visit us at 29 Papazian St, Yerevan, Armenia or call (010) 320105.",
    images: [{ url: "/Imp_logo.png", width: 1200, height: 630, alt: "Imperial Implant Center Yerevan" }],
  },
  icons: {
    icon: "/Imp_logo.png",
    apple: "/Imp_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-zinc-50 text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
