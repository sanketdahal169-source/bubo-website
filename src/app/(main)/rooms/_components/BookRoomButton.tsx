"use client";

import { Button } from "@/components/base/Button";
import { useUIStore } from "@/store/useUIStore";

export function BookRoomButton() {
  const { openBookingModal } = useUIStore();
  return (
    <Button size="md" onClick={openBookingModal}>
      Book This Room
    </Button>
  );
}
