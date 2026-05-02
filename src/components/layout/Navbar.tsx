"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain, Phone, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, HOTEL } from "@/lib/theme";
import { useUIStore } from "@/store/useUIStore";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, openBookingModal } =
    useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !isMobileMenuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar — only on home when not scrolled */}
      <AnimatePresence>
        {isTransparent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-end gap-6 px-8 py-2 text-[11px] text-white/60 tracking-wide"
          >
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              {HOTEL.mobile}
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>{HOTEL.email}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navbar */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "py-3 px-4 sm:px-6" : "py-0 px-0"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500",
            scrolled ? "max-w-5xl" : "max-w-7xl px-4 sm:px-6 lg:px-8"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled
                ? "h-14 px-5 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-earth-100/80"
                : "h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300",
                  isTransparent
                    ? "bg-white/15 border border-white/25 group-hover:bg-white/25"
                    : "bg-brand-600 group-hover:bg-brand-700 shadow-sm"
                )}
              >
                <Mountain className="h-4.5 w-4.5 text-white" strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <p
                  className={cn(
                    "font-display text-[15px] font-bold leading-none tracking-tight transition-colors duration-300",
                    isTransparent ? "text-white" : "text-earth-900"
                  )}
                >
                  Bubo Himalaya
                </p>
                <p
                  className={cn(
                    "text-[9px] uppercase tracking-[0.18em] mt-0.5 transition-colors duration-300",
                    isTransparent ? "text-white/50" : "text-brand-500"
                  )}
                >
                  Hotel · Thamel
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 group",
                      isTransparent
                        ? active
                          ? "text-white"
                          : "text-white/65 hover:text-white"
                        : active
                        ? "text-brand-700"
                        : "text-earth-600 hover:text-earth-900"
                    )}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute bottom-0.5 left-3.5 right-3.5 h-px rounded-full transition-all duration-300 origin-center",
                        isTransparent ? "bg-white" : "bg-brand-500",
                        active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              {/* Book Now button */}
              <button
                onClick={openBookingModal}
                className={cn(
                  "hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300",
                  isTransparent
                    ? "bg-white text-brand-700 hover:bg-brand-50 shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_2px_8px_rgba(162,84,45,0.35)] hover:shadow-[0_4px_14px_rgba(162,84,45,0.45)]"
                )}
              >
                <CalendarDays className="h-3.5 w-3.5" />
                Book Now
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  "md:hidden p-2 rounded-xl transition-colors",
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-earth-700 hover:bg-earth-100"
                )}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-4 mt-1 rounded-2xl bg-white shadow-[0_16px_48px_rgba(0,0,0,0.18)] border border-earth-100 overflow-hidden"
          >
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-earth-700 hover:bg-earth-50 hover:text-earth-900"
                    )}
                  >
                    {active && (
                      <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="px-3 pb-3">
              <button
                onClick={openBookingModal}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm"
              >
                <CalendarDays className="h-4 w-4" />
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
