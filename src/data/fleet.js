// Fleet data — all images reference centralized local paths with fallback protection
import { images, fleetFallbacks } from './images';

export const fleet = [
  {
    id: 'sedan',
    name: 'Sedan',
    tagline: 'Comfortable & Efficient',
    description:
      'Ideal for solo travellers and small groups. Comfortable for city rides and outstation journeys.',
    features: [
      'City & outstation travel',
      'Compact and fuel-efficient',
      'Air-conditioned cabin',
    ],
    image: images.fleet.sedan,
    fallback: fleetFallbacks.sedan,
    imageAlt: 'SAI SHAKTHI TRAVELS Pondicherry sedan cab service',
  },
  {
    id: 'suv',
    name: 'SUV',
    tagline: 'Spacious & Reliable',
    description:
      'Spacious and comfortable for families and longer journeys. Handles highway drives with ease.',
    features: [
      'Family & group travel',
      'Higher ground clearance',
      'Ample boot space',
    ],
    image: images.fleet.suv,
    fallback: fleetFallbacks.suv,
    imageAlt: 'SAI SHAKTHI TRAVELS Pondicherry SUV taxi for family journeys',
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    tagline: 'Premium Family Travel',
    description:
      'A trusted name in premium family travel. Spacious seating and generous luggage capacity.',
    features: [
      'Premium cabin comfort',
      'Generous luggage space',
      'Suitable for long journeys',
    ],
    image: images.fleet.innova,
    fallback: fleetFallbacks.innova,
    imageAlt: 'SAI SHAKTHI TRAVELS Pondicherry Toyota Innova cab rental',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    tagline: 'Group Travel Made Easy',
    description:
      'Comfortable option for larger families and groups. Suitable for tours, pilgrimages and outings.',
    features: [
      'Larger group capacity',
      'Comfortable seating arrangement',
      'Suitable for tours & pilgrimages',
    ],
    image: images.fleet.tempoTraveller,
    fallback: fleetFallbacks.tempoTraveller,
    imageAlt: 'SAI SHAKTHI TRAVELS Pondicherry Tempo Traveller for group tours',
  },
];
