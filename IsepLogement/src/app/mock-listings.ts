// mock-listings.ts

import { Listing } from './listing.interface';

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    pictures: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
    title: 'Luxury Apartment with Panoramic View',
    exclusiveOffer: true,
    author: 'John Doe',
    description:
      'This stunning apartment offers breathtaking views of the city skyline...',
    roommates: ['Alice', 'Bob'],
    numberOfRooms: 3,
    surface: 120,
    city: 'Paris',
    postalCode: '75001',
  },
  {
    id: 2,
    pictures: [
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
    ],
    title: 'Cozy House with Garden',
    exclusiveOffer: false,
    author: 'Jane Smith',
    description:
      'Charming house located in a quiet neighborhood, perfect for families...',
    roommates: [],
    numberOfRooms: 4,
    surface: 180,
    city: 'Lyon',
    postalCode: '69001',
  },
  {
    id: 3,
    pictures: [
      'https://example.com/image5.jpg',
      'https://example.com/image6.jpg',
    ],
    title: 'Modern Studio Apartment',
    exclusiveOffer: true,
    author: 'Alice Johnson',
    description:
      'Sleek and stylish studio apartment in the heart of the city...',
    roommates: [],
    numberOfRooms: 1,
    surface: 60,
    city: 'Issy-les-Moulineaux',
    postalCode: '92130',
  },
  {
    id: 4,
    pictures: [
      'https://example.com/image7.jpg',
      'https://example.com/image8.jpg',
    ],
    title: 'Spacious Villa with Pool',
    exclusiveOffer: false,
    author: 'Michael Brown',
    description:
      'Luxurious villa with ample space and a private swimming pool...',
    roommates: [],
    numberOfRooms: 6,
    surface: 300,
    city: 'Versailles',
    postalCode: '78000',
  },
];
export const MOCK_SAVED_LISTINGS: Listing[] = [
  {
    id: 4,
    pictures: [
      'https://example.com/image7.jpg',
      'https://example.com/image8.jpg',
    ],
    title: 'Spacious Villa with Pool',
    exclusiveOffer: false,
    author: 'Michael Brown',
    description:
      'Luxurious villa with ample space and a private swimming pool...',
    roommates: [],
    numberOfRooms: 6,
    surface: 300,
    city: 'Versailles',
    postalCode: '78000',
  },
];
