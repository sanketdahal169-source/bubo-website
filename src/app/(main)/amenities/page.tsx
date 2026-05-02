import type { Metadata } from "next";
import Image from "next/image";
import {
  Wifi, Utensils, Coffee, Car, DollarSign, Shirt,
  MapPin, ParkingSquare, Bike, Scissors, Luggage, Star,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { AMENITIES } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Amenities & Facilities",
  description:
    "Hotel Bubo Himalaya offers free WiFi, airport shuttle, on-site restaurant, laundry, tour desk, and much more in the heart of Thamel.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi, Utensils, Coffee, Car, DollarSign, Shirt,
  MapPin, ParkingSquare, Bike, Scissors, Luggage, Star,
};

const DETAILS = [
  {
    title: "Free High-Speed WiFi",
    body: "Stay connected throughout your stay with complimentary high-speed internet access available in all rooms and common areas.",
  },
  {
    title: "On-site Restaurant",
    body: "Start your day with a complimentary breakfast and enjoy authentic Nepali cuisine alongside international dishes at our in-house restaurant.",
  },
  {
    title: "Coffee Shop / Café",
    body: "Grab a freshly brewed Nepali tea or coffee and relax before heading out to explore Kathmandu's many attractions.",
  },
  {
    title: "Free Airport Shuttle",
    body: "Arrive hassle-free. We provide complimentary pickup and drop service from Tribhuvan International Airport — just let us know your flight details.",
  },
  {
    title: "Currency Exchange",
    body: "Convenient on-site currency exchange service so you can get local NPR without having to search for a bank or exchange bureau.",
  },
  {
    title: "Tour Desk",
    body: "Our knowledgeable tour desk staff can help arrange trekking, cultural tours, rafting, and any Himalayan adventure you have in mind.",
  },
];

export default function AmenitiesPage() {
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
            Facilities
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Amenities
          </h1>
        </div>
      </div>

      <Section cream>
        <SectionHeading
          eyebrow="What's Included"
          title="Everything for a Comfortable Stay"
          subtitle="We've carefully curated a range of services and facilities to ensure your time in Kathmandu is enjoyable and stress-free."
        />

        {/* Icon grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mb-16">
          {AMENITIES.map((amenity) => {
            const Icon = iconMap[amenity.icon] ?? Star;
            return (
              <div
                key={amenity.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-card text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <p className="text-xs font-medium text-earth-700 leading-tight">
                  {amenity.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((detail) => (
            <div
              key={detail.title}
              className="rounded-2xl border border-earth-100 bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                {detail.title}
              </h3>
              <p className="text-sm text-earth-600 leading-relaxed">
                {detail.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
