"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ComingSoonPage() {
  return (
    <AuroraBackground
      showRadialGradient={true}
      animationSpeed={18}
      className="bg-zinc-50 text-slate-900 justify-between py-10 px-4 sm:px-6 md:px-8"
    >
      {/* Top Status Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-center pt-2 sm:pt-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
            Official Website Under Construction
          </span>
        </div>
      </motion.div>

      {/* Center Main Stage */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center my-auto py-8">
        {/* Transparent Logo with ZERO borders or background boxes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 select-none"
        >
          <Image
            src="/Imp_logo.png"
            alt="Imperial Implant Center"
            width={400}
            height={160}
            priority
            className="w-64 sm:w-80 md:w-96 h-auto object-contain mx-auto drop-shadow-sm"
          />
        </motion.div>

        {/* Minimal Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-3 max-w-xl px-2"
        >
          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Our New Website is{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent italic font-normal">
              Coming Soon.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            We are designing a new digital experience. Our clinic in Yerevan is fully open and welcoming patients.
          </p>
        </motion.div>

        {/* Quick Direct Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full"
        >
          <a
            href="tel:+37410320105"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call (010) 320105</span>
          </a>

          <a
            href="https://www.instagram.com/imperialimplant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer backdrop-blur-sm"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>@imperialimplant</span>
          </a>

          <a
            href="https://www.facebook.com/IMIMCE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer backdrop-blur-sm"
          >
            <FacebookIcon className="w-4 h-4 text-blue-600" />
            <span>Facebook</span>
          </a>
        </motion.div>

        {/* Minimal Yerevan Clinic Details Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-600 bg-white/60 border border-slate-200/60 rounded-2xl py-3 px-6 backdrop-blur-md shadow-sm"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>29 Papazian St, Yerevan, Armenia</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Mon – Fri: 10:00 – 19:00</span>
          </div>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.65 }}
        className="w-full text-center py-4 border-t border-slate-200/40 text-xs text-slate-500"
      >
        © 2026 Imperial Implant Center • Yerevan, Armenia. All rights reserved.
      </motion.footer>
    </AuroraBackground>
  );
}
