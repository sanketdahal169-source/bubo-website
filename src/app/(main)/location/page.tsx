import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Clock, ExternalLink, Phone, Car } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { Badge } from "@/components/base/Badge";
import { Button } from "@/components/base/Button";
import { ATTRACTIONS, HOTEL } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Location & Directions",
  description:
    "Hotel Bubo Himalaya is located at Nursing Chowk, Thamel, Kathmandu — steps away from Kathmandu Durbar Square, Garden of Dreams, and more.",
};

export default function LocationPage() {
  return (
    <>
      <div className="relative h-64 md:h-80 flex items-end overflow-hidden bg-earth-950">
        <Image
          src="/images/lobby.png"
          alt="Hotel Bubo Himalaya"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-2">
            Where to Find Us
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Location & Directions
          </h1>
        </div>
      </div>

      <Section cream>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Address"
              title="Heart of Thamel, Kathmandu"
              subtitle="Our prime location puts you within walking distance of Kathmandu's top attractions, markets, and trekking agencies."
              center={false}
            />

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-earth-900">Address</p>
                  <p className="text-sm text-earth-600">{HOTEL.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-earth-900">Phone</p>
                  <p className="text-sm text-earth-600">
                    {HOTEL.phone[0]} / {HOTEL.phone[1]}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-earth-900">
                    Airport Transfer
                  </p>
                  <p className="text-sm text-earth-600">
                    Free shuttle from Tribhuvan International Airport (~7 km,
                    20 min). Contact us with your flight details.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <a
                href={HOTEL.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </a>
            </Button>
          </div>

          {/* Attractions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-6">
              Nearby Attractions
            </h2>
            <div className="space-y-3">
              {ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.name}
                  className="flex items-center justify-between rounded-2xl bg-white border border-earth-100 p-4 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50">
                      <MapPin className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-earth-900">
                        {attraction.name}
                      </p>
                      <Badge variant="gold" className="mt-1 text-[10px]">
                        {attraction.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-sm font-bold text-brand-600">
                      {attraction.distance}
                    </p>
                    <p className="text-xs text-earth-400 flex items-center gap-1 mt-0.5 justify-end">
                      <Clock className="h-3 w-3" />
                      {attraction.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
