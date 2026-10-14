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
  metadataBase: new URL("https://imperialimplantcenter.vercel.app"),
  title: "Imperial Implant Center | Coming Soon",
  description:
    "Experience the pinnacle of dental implantology and restorative aesthetics. Imperial Implant Center is launching soon. Reserve your priority consultation access.",
  keywords: [
    "Imperial Implant Center",
    "Dental Implants",
    "Aesthetic Dentistry",
    "Cosmetic Dentistry",
    "Coming Soon",
    "Precision Implantology",
  ],
  authors: [{ name: "Imperial Implant Center" }],
  openGraph: {
    title: "Imperial Implant Center — The Pinnacle of Dental Artistry",
    description:
      "Where surgical precision meets aesthetic mastery. Imperial Implant Center is opening soon.",
    images: [{ url: "/Imp_logo.png", width: 1200, height: 630, alt: "Imperial Implant Center" }],
  },
  icons: {
    icon: "/Imp_logo.png",
    apple: "/Imp_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
