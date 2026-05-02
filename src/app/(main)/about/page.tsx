import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Mountain } from "lucide-react";
import { Section, SectionHeading } from "@/components/base/Section";
import { HOTEL } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hotel Bubo Himalaya — a heritage-inspired hotel in Thamel, Kathmandu, committed to delivering warm Nepali hospitality.",
};

const VALUES = [
  {
    title: "Warm Nepali Hospitality",
    body: "From the moment you arrive, our team treats every guest like family. Expect smiles, helpful local tips, and genuine care.",
  },
  {
    title: "Heritage Architecture",
    body: "Our reception and common areas reflect traditional Newari craftsmanship with carved woodwork and brick detailing.",
  },
  {
    title: "Budget-Friendly Comfort",
    body: "We believe great accommodation shouldn't break the bank. Our rooms offer modern comforts at prices every traveller can afford.",
  },
  {
    title: "Commitment to Sustainability",
    body: "We strive to reduce our environmental footprint through responsible sourcing, energy efficiency, and supporting local communities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative h-64 md:h-80 flex items-end overflow-hidden bg-earth-950">
        <Image
          src="/images/lobby.png"
          alt="Hotel Bubo Himalaya Reception Lobby"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-2">
            Our Story
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      <Section cream>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Gateway to the Himalayas"
              subtitle={HOTEL.description}
              center={false}
            />
            <div className="space-y-3 mt-6">
              {[
                "Family-run hotel with over 10 years of experience",
                "Prime location in the heart of Thamel, Kathmandu",
                "Proud to serve guests from over 50 countries",
                "Traditional Nepali architecture with modern amenities",
                "Committed to sustainable and responsible tourism",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-sm text-earth-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-deep">
            <Image
              src="/images/lobby.png"
              alt="Hotel Bubo Himalaya Lobby"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-earth-900/80 backdrop-blur-sm p-4">
              <div className="flex items-center gap-3">
                <Mountain className="h-8 w-8 text-brand-400" />
                <div>
                  <p className="text-sm font-bold text-cream">
                    Hotel Bubo Himalaya P. Ltd.
                  </p>
                  <p className="text-xs text-earth-400">
                    Nursing Chowk, Thamel, Kathmandu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionHeading
          eyebrow="Our Values"
          title="What Sets Us Apart"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white border border-earth-100 p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-earth-600 leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
