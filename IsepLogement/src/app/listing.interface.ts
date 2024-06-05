export interface Listing {
  id: number;
  pictures: string[]; // Array of picture URLs
  title: string;
  exclusiveOffer: boolean;
  author: string;
  description: string;
  roommates: string[];
  numberOfRooms: number;
  surface: number; // Surface area in square meters
  city: string;
  postalCode: string;
}
