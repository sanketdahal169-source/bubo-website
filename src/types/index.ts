export interface Room {
  id: string;
  name: string;
  size: string;
  occupancy: number;
  price: number;
  image: string;
  description: string;
  features: readonly string[];
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Attraction {
  name: string;
  distance: string;
  time: string;
  type: string;
}

export interface NavLink {
  label: string;
  href: string;
}
