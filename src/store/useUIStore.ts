"use client";

import { create } from "zustand";

interface UIStore {
  isMobileMenuOpen: boolean;
  isBookingModalOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileMenuOpen: false,
  isBookingModalOpen: false,
  toggleMobileMenu: () =>
    set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openBookingModal: () =>
    set({ isBookingModalOpen: true, isMobileMenuOpen: false }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
}));
