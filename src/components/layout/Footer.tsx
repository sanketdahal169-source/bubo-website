import Link from "next/link";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";
import { HOTEL, NAV_LINKS } from "@/lib/theme";
import { containerX } from "@/lib/theme";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-earth-950 to-earth-900 text-cream">
      <div className={containerX}>
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600">
                <Mountain className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-cream leading-none">
                  Hotel Bubo Himalaya
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-300 mt-0.5">
                  Thamel · Kathmandu · Nepal
                </p>
              </div>
            </div>
            <p className="text-earth-300 text-sm leading-relaxed max-w-xs">
              Experience the warmth of Nepali hospitality in the heart of
              Thamel. Your adventure begins and ends with us.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={`tel:${HOTEL.phone[0]}`}
                className="flex items-center gap-2 text-sm text-earth-300 hover:text-brand-300 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />
                {HOTEL.phone[0]} / {HOTEL.phone[1]}
              </a>
              <a
                href={`mailto:${HOTEL.email}`}
                className="flex items-center gap-2 text-sm text-earth-300 hover:text-brand-300 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />
                {HOTEL.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-earth-300">
                <MapPin className="h-3.5 w-3.5 text-brand-400 flex-shrink-0 mt-0.5" />
                {HOTEL.address}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-earth-300 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">
              Hotel Info
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-earth-300">
              <li>Check-in: {HOTEL.checkIn}</li>
              <li>Check-out: {HOTEL.checkOut}</li>
              <li>Free Airport Shuttle</li>
              <li>Complimentary Breakfast</li>
              <li>24-hr Front Desk</li>
              <li>Free High-Speed WiFi</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-earth-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-earth-500">
            © {new Date().getFullYear()} Hotel Bubo Himalaya P. Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-earth-500">
            Nursing Chowk, Thamel, Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
