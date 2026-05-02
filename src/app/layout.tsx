import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Bubo Himalaya | Thamel, Kathmandu",
    template: "%s | Hotel Bubo Himalaya",
  },
  description:
    "Experience authentic Nepali hospitality in the heart of Thamel, Kathmandu. Hotel Bubo Himalaya offers comfortable rooms with free WiFi, breakfast, and airport shuttle.",
  keywords: [
    "Hotel Bubo Himalaya",
    "Thamel hotel",
    "Kathmandu hotel",
    "Nepal hotel",
    "budget hotel Kathmandu",
    "Thamel accommodation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hotel Bubo Himalaya | Thamel, Kathmandu",
    description:
      "Your gateway to the Himalayas. Comfortable rooms, warm hospitality, and prime location in Thamel.",
    siteName: "Hotel Bubo Himalaya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}
