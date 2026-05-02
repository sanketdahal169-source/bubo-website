import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Users, Maximize2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { Card, CardBody, CardFooter } from "@/components/base/Card";
import { Badge } from "@/components/base/Badge";
import { Button } from "@/components/base/Button";
import { ROOMS } from "@/lib/theme";
import { formatPrice } from "@/lib/utils";
import { BookRoomButton } from "./_components/BookRoomButton";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Explore our comfortable room options at Hotel Bubo Himalaya — from budget singles to spacious twin rooms, all with free WiFi and breakfast.",
};

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
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
            Accommodations
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Rooms & Rates
          </h1>
        </div>
      </div>

      <Section cream>
        <SectionHeading
          eyebrow="Our Rooms"
          title="Choose Your Perfect Stay"
          subtitle={`All rooms include free WiFi, air conditioning, 42" LCD TV, attached bathroom, and complimentary breakfast.`}
        />

        <div className="space-y-10">
          {ROOMS.map((room, i) => (
            <Card key={room.id} className="overflow-hidden">
              <div
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <div className="relative aspect-video lg:aspect-auto lg:w-2/5 flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <CardBody>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="font-display text-2xl font-bold text-earth-900">
                        {room.name}
                      </h2>
                      <div className="text-right flex-shrink-0">
                        <p className="text-2xl font-bold text-brand-600">
                          {formatPrice(room.price)}
                        </p>
                        <p className="text-xs text-earth-500">per night</p>
                      </div>
                    </div>

                    <p className="text-earth-600 leading-relaxed mb-5">
                      {room.description}
                    </p>

                    <div className="flex items-center gap-5 text-sm text-earth-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="h-4 w-4 text-brand-400" />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-brand-400" />
                        Up to {room.occupancy} guests
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-brand-500 flex-shrink-0" />
                          <span className="text-sm text-earth-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter className="border-t border-earth-100">
                    <BookRoomButton />
                    <Badge variant="gold">Breakfast Included</Badge>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
