"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HIGHLIGHTS = [
  "Free complimentary breakfast for all guests",
  "Free airport pickup & drop shuttle service",
  "Prime location in Thamel — walk to top sights",
  "Traditional Nepali architecture & warm hospitality",
  "24-hour front desk and multilingual staff",
  "Free high-speed WiFi throughout the hotel",
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="about" cream>
      <div
        ref={ref}
        className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-deep">
            <Image
              src="/images/lobby.png"
              alt="Hotel Bubo Himalaya Reception"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/30 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white rounded-2xl px-5 py-4 shadow-warm">
            <p className="text-3xl font-bold font-display leading-none">10+</p>
            <p className="text-xs mt-1 opacity-80">Years of Hospitality</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <SectionHeading
            eyebrow="About Us"
            title="A Heritage of Warm Nepali Hospitality"
            subtitle="Situated in the vibrant Thamel neighbourhood, Hotel Bubo Himalaya blends traditional Nepali architecture with comfortable modern amenities — the perfect base for your Himalayan adventure."
            center={false}
          />

          <ul className="mt-2 space-y-3">
            {HIGHLIGHTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-earth-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
