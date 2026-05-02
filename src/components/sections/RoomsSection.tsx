"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Maximize2, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { Card, CardBody, CardFooter } from "@/components/base/Card";
import { Badge } from "@/components/base/Badge";
import { Button } from "@/components/base/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ROOMS } from "@/lib/theme";
import { useUIStore } from "@/store/useUIStore";
import { formatPrice } from "@/lib/utils";

export function RoomsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { openBookingModal } = useUIStore();

  return (
    <Section id="rooms">
      <SectionHeading
        eyebrow="Accommodations"
        title="Comfortable Rooms for Every Traveller"
        subtitle="From budget-friendly singles to spacious twins — all rooms include free WiFi, air conditioning, and complimentary breakfast."
      />

      <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ROOMS.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <Card className="h-full flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold">From {formatPrice(room.price)}/night</Badge>
                </div>
              </div>
              <CardBody className="flex-1">
                <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-sm text-earth-600 leading-relaxed mb-4">
                  {room.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-earth-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    Up to {room.occupancy} guests
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {room.features.slice(0, 3).map((f) => (
                    <Badge key={f} variant="neutral" className="text-[11px]">
                      {f}
                    </Badge>
                  ))}
                </div>
              </CardBody>
              <CardFooter>
                <Button
                  size="sm"
                  onClick={openBookingModal}
                  className="flex-1"
                >
                  Book Now
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/rooms">Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/rooms" className="inline-flex items-center gap-2">
            View All Rooms
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
