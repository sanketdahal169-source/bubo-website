export const sectionY = "py-20 md:py-28";
export const sectionYSm = "py-12 md:py-16";
export const containerX = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
export const containerXNarrow = "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8";

export const HOTEL = {
  name: "Hotel Bubo Himalaya",
  tagline: "Your Gateway to the Himalayas",
  description:
    "A charming heritage-inspired hotel nestled in the heart of Thamel, Kathmandu — where Nepali warmth meets modern comfort.",
  address: "Nursing Chowk, Thamel, Kathmandu, Nepal",
  phone: ["+977-01-4255622", "+977-01-4254213"],
  mobile: "+977-9843728648",
  email: "info@hotelbubohimalaya.com",
  website: "www.hotelbubohimalaya.com",
  mapUrl:
    "https://maps.google.com/?q=Hotel+Bubo+Himalaya,+Thamel,+Kathmandu,+Nepal",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  stars: 2,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const ROOMS = [
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    size: "194 sq ft",
    occupancy: 2,
    price: 22,
    image: "/images/lobby.png",
    description:
      "Elegantly appointed twin room with traditional Nepali décor, air conditioning, and modern amenities for a comfortable stay.",
    features: [
      "Twin Beds",
      "Air Conditioning",
      "42\" LCD TV",
      "Free WiFi",
      "Attached Bathroom",
      "Free Bottled Water",
    ],
  },
  {
    id: "economy",
    name: "Economy Room",
    size: "204 sq ft",
    occupancy: 2,
    price: 14,
    image: "/images/lobby.png",
    description:
      "Comfortable and spacious economy room ideal for budget travelers seeking quality accommodation in Thamel.",
    features: [
      "Full Bed",
      "Air Conditioning",
      "42\" LCD TV",
      "Free WiFi",
      "Attached Bathroom",
      "Desk & Seating",
    ],
  },
  {
    id: "standard",
    name: "Standard Room",
    size: "180 sq ft",
    occupancy: 2,
    price: 6,
    image: "/images/lobby.png",
    description:
      "Our most affordable option — clean, cozy, and perfectly located for exploring Kathmandu's best sights.",
    features: [
      "Single/Double Bed",
      "Air Conditioning",
      "Free WiFi",
      "Attached Bathroom",
      "24-hr Room Service",
      "Complimentary Breakfast",
    ],
  },
] as const;

export const AMENITIES = [
  { icon: "Wifi", label: "Free High-Speed WiFi" },
  { icon: "Utensils", label: "On-site Restaurant" },
  { icon: "Coffee", label: "Coffee Shop / Café" },
  { icon: "Car", label: "Free Airport Shuttle" },
  { icon: "DollarSign", label: "Currency Exchange" },
  { icon: "Shirt", label: "Laundry & Dry Cleaning" },
  { icon: "MapPin", label: "Tour Desk" },
  { icon: "ParkingSquare", label: "Parking Facilities" },
  { icon: "Bike", label: "Bicycle Rental" },
  { icon: "Scissors", label: "Hair Salon" },
  { icon: "Luggage", label: "Luggage Storage" },
  { icon: "Star", label: "24-hr Room Service" },
] as const;

export const ATTRACTIONS = [
  {
    name: "Kathmandu Durbar Square",
    distance: "1.3 km",
    time: "5 min drive",
    type: "UNESCO Heritage Site",
  },
  {
    name: "Swayambhunath Stupa",
    distance: "2.5 km",
    time: "10 min drive",
    type: "Buddhist Temple",
  },
  {
    name: "Garden of Dreams",
    distance: "0.5 km",
    time: "7 min walk",
    type: "Historical Garden",
  },
  {
    name: "Narayanhity Palace Museum",
    distance: "0.8 km",
    time: "10 min walk",
    type: "Royal Palace Museum",
  },
  {
    name: "Thamel Market",
    distance: "0.1 km",
    time: "2 min walk",
    type: "Shopping & Dining",
  },
  {
    name: "Tribhuvan International Airport",
    distance: "7 km",
    time: "20 min drive",
    type: "Airport",
  },
] as const;
