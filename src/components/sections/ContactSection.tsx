"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/base/Section";
import { Input, Textarea } from "@/components/base/Input";
import { Button } from "@/components/base/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { contactSchema, ContactFormData } from "@/lib/validators";
import { HOTEL } from "@/lib/theme";

const INFO_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: `${HOTEL.phone[0]} / ${HOTEL.phone[1]}`,
    href: `tel:${HOTEL.phone[0]}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: HOTEL.email,
    href: `mailto:${HOTEL.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: HOTEL.address,
    href: HOTEL.mapUrl,
  },
  {
    icon: Clock,
    label: "Reception",
    value: "Open 24 hours, 7 days a week",
    href: undefined,
  },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
  };

  return (
    <Section>
      <SectionHeading
        eyebrow="Get in Touch"
        title="We'd Love to Hear from You"
        subtitle="Have questions about your stay? Our friendly team is here to help 24/7."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 gap-12 lg:grid-cols-5"
      >
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-earth-400">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1 text-sm text-earth-800 hover:text-brand-600 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-earth-800">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 rounded-3xl border border-earth-100 bg-cream p-8 shadow-card space-y-5"
        >
          <Input
            label="Your Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register("name")}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Phone (optional)"
              type="tel"
              placeholder="+1 234 567 8900"
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>
          <Input
            label="Subject"
            placeholder="Room inquiry, booking question, etc."
            error={errors.subject?.message}
            {...register("subject")}
          />
          <Textarea
            label="Message"
            placeholder="Tell us how we can help you..."
            error={errors.message?.message}
            {...register("message")}
          />
          <Button
            type="submit"
            size="lg"
            loading={isSubmitting}
            className="w-full"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
