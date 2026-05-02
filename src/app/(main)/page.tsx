import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <LocationSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
