"use client";

import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { Button } from "@/components/base/Button";
import { useUIStore } from "@/store/useUIStore";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { containerX } from "@/lib/theme";

export function CtaSection() {
  const { openBookingModal } = useUIStore();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-700 to-earth-900">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500/10" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-earth-800/30" />

      <div className={containerX}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Mountain className="h-8 w-8 text-brand-200" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto">
            Book your stay at Hotel Bubo Himalaya today and experience Kathmandu's
            warmth, culture, and history.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openBookingModal}
              className="bg-white text-brand-700 hover:bg-brand-50 shadow-none"
            >
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/20"
              asChild
            >
              <a href="tel:+97714255622">Call Us Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
