"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { bookingSchema, BookingFormData } from "@/lib/validators";
import { useUIStore } from "@/store/useUIStore";
import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";

export function BookingModal() {
  const { isBookingModalOpen, closeBookingModal } = useUIStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { guests: 1 },
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Booking data:", data);
    toast.success("Booking inquiry sent! We'll contact you within 24 hours.");
    reset();
    closeBookingModal();
  };

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeBookingModal}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2"
          >
            <div className="bg-white rounded-2xl shadow-deep max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-earth-100">
                <div>
                  <h2 className="font-display text-xl font-bold text-earth-900">
                    Book Your Stay
                  </h2>
                  <p className="text-sm text-earth-500 mt-0.5">
                    Hotel Bubo Himalaya · Thamel, Kathmandu
                  </p>
                </div>
                <button
                  onClick={closeBookingModal}
                  className="p-2 rounded-lg text-earth-400 hover:text-earth-700 hover:bg-earth-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    placeholder="John"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                  />
                </div>

                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  error={errors.phone?.message}
                  {...register("phone")}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-earth-800">
                    Room Type
                  </label>
                  <select
                    className="rounded-lg border border-earth-200 bg-white px-3.5 py-2.5 text-sm text-earth-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    {...register("roomType")}
                  >
                    <option value="deluxe-twin">Deluxe Twin Room — from $22/night</option>
                    <option value="economy">Economy Room — from $14/night</option>
                    <option value="standard">Standard Room — from $6/night</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Check-in"
                    type="date"
                    error={errors.checkIn?.message}
                    {...register("checkIn")}
                  />
                  <Input
                    label="Check-out"
                    type="date"
                    error={errors.checkOut?.message}
                    {...register("checkOut")}
                  />
                </div>

                <Input
                  label="Guests"
                  type="number"
                  min="1"
                  max="4"
                  error={errors.guests?.message}
                  {...register("guests")}
                />

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Send Booking Inquiry
                </Button>

                <p className="text-xs text-earth-400 text-center">
                  We&apos;ll confirm availability and contact you within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
