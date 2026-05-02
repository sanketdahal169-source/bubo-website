"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, HOTEL } from "@/lib/theme";
import { useUIStore } from "@/store/useUIStore";
import { Button } from "@/components/base/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, openBookingModal } =
    useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !isMobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-card"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
                isTransparent
                  ? "bg-white/20 group-hover:bg-white/30"
                  : "bg-brand-600 group-hover:bg-brand-700"
              )}
            >
              <Mountain
                className={cn(
                  "h-5 w-5",
                  isTransparent ? "text-white" : "text-white"
                )}
              />
            </div>
            <div className="leading-tight">
              <p
                className={cn(
                  "font-display text-base font-bold leading-none transition-colors",
                  isTransparent ? "text-white" : "text-earth-900"
                )}
              >
                Bubo Himalaya
              </p>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-widest transition-colors",
                  isTransparent ? "text-white/70" : "text-brand-600"
                )}
              >
                Hotel · Thamel
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? isTransparent
                        ? "bg-white/20 text-white"
                        : "bg-brand-50 text-brand-700"
                      : isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-earth-700 hover:text-brand-700 hover:bg-brand-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="md"
              onClick={openBookingModal}
              className={cn(
                isTransparent &&
                  "bg-white text-brand-700 hover:bg-brand-50 shadow-none"
              )}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-earth-700 hover:bg-brand-50"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-earth-100 shadow-deep overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-earth-700 hover:bg-brand-50 hover:text-brand-700"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button className="mt-3 w-full" onClick={openBookingModal}>
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
