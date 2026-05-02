import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hotel Bubo Himalaya. Call us, email us, or send a message. Our team is available 24/7 to assist you.",
};

export default function ContactPage() {
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
            Reach Out
          </p>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
