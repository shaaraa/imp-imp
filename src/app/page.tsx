"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Sparkles,
  Clock,
  Mail,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Calendar,
  ShieldCheck,
  Compass,
  Crown,
  ChevronRight,
  Sun,
  Moon,
  Send,
  X,
} from "lucide-react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  // Target launch date (90 days from now)
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 89,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    // Check saved VIP status
    const saved = localStorage.getItem("imperial_vip_access");
    if (saved) setIsSubmitted(true);

    // Calculate dynamic countdown
    const target = new Date();
    target.setDate(target.getDate() + 90);
    target.setHours(10, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      localStorage.setItem("imperial_vip_access", email);
    }, 900);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setInquirySent(false);
      setInquiryName("");
      setInquiryPhone("");
    }, 2000);
  };

  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={16}>
      {/* Top Navigation & Status Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-between pb-8 sm:pb-12 border-b border-zinc-200/40 dark:border-zinc-800/60"
      >
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Grand Unveiling In Progress
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-medium px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">Concierge Desk</span>
            <span className="sm:hidden">Inquire</span>
          </button>

          <button
            onClick={handleToggleTheme}
            aria-label="Toggle visual mode"
            className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-800 backdrop-blur-md transition-all duration-200 text-zinc-700 dark:text-zinc-300 cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </motion.header>

      {/* Main Content Area with Staggered Reveal */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mt-6 sm:mt-10">
        {/* Brand Logo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-8 sm:mb-10 animate-float"
        >
          {/* Ambient luminous glow behind the logo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/25 via-amber-400/30 to-teal-400/25 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition duration-700 animate-pulse-glow" />

          {/* Luxury Crown & Emerald Bezel Frame */}
          <div className="relative p-[1.5px] rounded-[30px] bg-gradient-to-b from-amber-300/60 via-emerald-400/30 to-amber-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]">
            <div className="px-8 py-6 sm:px-12 sm:py-8 rounded-[28px] bg-white/95 backdrop-blur-2xl ring-1 ring-black/5 hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/Imp_logo.png"
                alt="Imperial Implant Center Logo"
                width={340}
                height={140}
                priority
                className="w-56 sm:w-72 md:w-80 h-auto object-contain mx-auto drop-shadow-sm select-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Tagline & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="space-y-4 max-w-2xl px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-amber-500" />
            <span>The Royal Standard of Dental Artistry</span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.18]"
          >
            Where Surgical Mastery Meets{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 bg-clip-text text-transparent italic font-normal">
              Royal Elegance.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Imperial Implant Center is preparing to redefine modern implantology. We fuse state-of-the-art 3D guided surgery with bespoke aesthetic ceramic crowns.
          </p>
        </motion.div>

        {/* Live Launch Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="mt-10 sm:mt-12 w-full max-w-lg"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase font-medium text-zinc-500 dark:text-zinc-400 mb-4 tracking-wider">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Anticipated Opening Countdown</span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-sm"
              >
                <span className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* VIP Priority Notification Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mt-8 sm:mt-10 w-full max-w-md px-2"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email for VIP access..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-md transition-all shadow-inner"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Notify Me</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-3 text-sm backdrop-blur-md"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                <strong>Privilege Reserved!</strong> You are on the founding VIP list for our private launch.
              </span>
            </motion.div>
          )}

          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2.5">
            Strict confidentiality guaranteed. Exclusive founding member benefits included.
          </p>
        </motion.div>

        {/* Clinical Highlights / Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left"
        >
          <div className="p-5 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 backdrop-blur-md hover:border-emerald-500/40 transition-colors duration-300">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              3D Guided Implant Surgery
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Sub-millimeter CBCT navigation for gentle, minimally invasive precision and rapid recovery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 backdrop-blur-md hover:border-amber-500/40 transition-colors duration-300">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
              <Crown className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Crown & Smile Architecture
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Master-ceramist zirconia crowns crafted to match individual facial contours with pristine translucency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 backdrop-blur-md hover:border-teal-500/40 transition-colors duration-300">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Royal Comfort Sanctuary
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Private luxury suites, gentle twilight sedation, and personalized concierge care from consultation to smile.
            </p>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 w-full border-t border-zinc-200/40 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>State-of-the-Art Surgical Facility • Opening Soon</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-emerald-500 transition-colors cursor-pointer"
            >
              Consultation Inquiry
            </button>
            <a
              href="mailto:contact@imperialimplantcenter.com"
              className="hover:text-emerald-500 transition-colors"
            >
              contact@imperialimplantcenter.com
            </a>
          </div>

          <div>
            © 2026 Imperial Implant Center. All Rights Reserved.
          </div>
        </motion.footer>
      </div>

      {/* Concierge Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-zinc-900/95 border border-zinc-800 text-white shadow-2xl backdrop-blur-xl z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <Crown className="w-4 h-4" />
                <span>Imperial Private Concierge</span>
              </div>
              <h3 className="text-xl font-bold text-white">Priority Consultation Inquiry</h3>
              <p className="text-xs text-zinc-400 mt-1 mb-6">
                Receive priority appointment scheduling and a private preliminary consultation upon launch.
              </p>

              {inquirySent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="font-semibold text-emerald-300">Inquiry Received</h4>
                  <p className="text-xs text-emerald-200/80">
                    Our patient coordinator will contact you directly with founding consultation privileges.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alexander Vance"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Priority Request</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AuroraBackground>
  );
}
