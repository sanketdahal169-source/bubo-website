"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HOTEL } from "@/lib/theme";
import { useUIStore } from "@/store/useUIStore";

export function HeroSection() {
  const { openBookingModal } = useUIStore();

  const scrollToNext = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lobby.png"
          alt="Hotel Bubo Himalaya Reception Lobby"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Location badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-300" />
            <span className="text-sm text-white/90">
              Thamel, Kathmandu, Nepal
            </span>
          </div>

          {/* Hotel name */}
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
            Hotel Bubo
            <br />
            <span className="text-brand-300">Himalaya</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed sm:text-xl">
            {HOTEL.tagline}. Experience traditional Nepali charm in the heart
            of Thamel.
          </p>

          {/* Stars */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: HOTEL.stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-400 text-brand-400" />
            ))}
            <span className="ml-2 text-sm text-white/70">
              Budget Friendly · Central Location
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openBookingModal}
              className="bg-brand-600 hover:bg-brand-700 text-white shadow-warm"
            >
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white bg-white/5 backdrop-blur-sm"
              asChild
            >
              <a href="/rooms">Explore Rooms</a>
            </Button>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto"
          >
            {[
              { value: "0.1km", label: "To Thamel Market" },
              { value: "$6+", label: "Per Night" },
              { value: "24/7", label: "Front Desk" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-brand-300">{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
