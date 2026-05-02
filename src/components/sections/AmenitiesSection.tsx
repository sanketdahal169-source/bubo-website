"use client";

import { motion } from "framer-motion";
import {
  Wifi, Utensils, Coffee, Car, DollarSign, Shirt,
  MapPin, ParkingSquare, Bike, Scissors, Luggage, Star,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AMENITIES } from "@/lib/theme";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi, Utensils, Coffee, Car, DollarSign, Shirt,
  MapPin, ParkingSquare, Bike, Scissors, Luggage, Star,
};

export function AmenitiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section cream>
      <SectionHeading
        eyebrow="Facilities"
        title="Everything You Need for a Comfortable Stay"
        subtitle="From free airport transfers to 24-hour room service, we've got every detail covered."
      />

      <div
        ref={ref}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {AMENITIES.map((amenity, i) => {
          const Icon = iconMap[amenity.icon] ?? Star;
          return (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-card hover:shadow-warm transition-shadow text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <p className="text-xs font-medium text-earth-700 leading-tight">
                {amenity.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
