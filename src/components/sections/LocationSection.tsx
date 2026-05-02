"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { Badge } from "@/components/base/Badge";
import { Button } from "@/components/base/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ATTRACTIONS, HOTEL } from "@/lib/theme";

const typeBadge: Record<string, "gold" | "earth" | "forest" | "neutral"> = {
  "UNESCO Heritage Site": "gold",
  "Buddhist Temple": "earth",
  "Historical Garden": "forest",
  "Royal Palace Museum": "earth",
  "Shopping & Dining": "gold",
  Airport: "neutral",
};

export function LocationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section dark>
      <SectionHeading
        eyebrow="Location"
        title="Heart of Thamel"
        subtitle="Steps away from Kathmandu's most iconic landmarks, markets, and trekking agencies."
        light
      />

      <div ref={ref} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Attractions list */}
        <div className="space-y-4">
          {ATTRACTIONS.map((attraction, i) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600/20">
                  <MapPin className="h-4 w-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">
                    {attraction.name}
                  </p>
                  <Badge
                    variant={typeBadge[attraction.type] ?? "neutral"}
                    className="mt-1 text-[10px]"
                  >
                    {attraction.type}
                  </Badge>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <p className="text-sm font-bold text-brand-300">
                  {attraction.distance}
                </p>
                <p className="text-xs text-earth-400 flex items-center gap-1 mt-0.5 justify-end">
                  <Clock className="h-3 w-3" />
                  {attraction.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map / address card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Embed-style placeholder */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-earth-800 border border-white/10">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/30 border-2 border-brand-400">
                <MapPin className="h-8 w-8 text-brand-400" />
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-bold text-cream">
                  Hotel Bubo Himalaya
                </p>
                <p className="text-sm text-earth-400 mt-1">
                  Nursing Chowk, Thamel
                </p>
                <p className="text-sm text-earth-400">Kathmandu, Nepal</p>
              </div>
              <Button
                size="sm"
                asChild
                className="mt-2"
              >
                <a
                  href={HOTEL.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact quick info */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "From Airport", value: "~20 min", note: "Free Shuttle" },
              { label: "From City Center", value: "0.7 km", note: "10 min walk" },
              { label: "Check-in", value: "12:00 PM", note: "Flexible on request" },
              { label: "Check-out", value: "11:00 AM", note: "Late check-out available" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <p className="text-xs text-earth-400">{item.label}</p>
                <p className="text-lg font-bold text-brand-300 mt-0.5">
                  {item.value}
                </p>
                <p className="text-xs text-earth-500 mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
