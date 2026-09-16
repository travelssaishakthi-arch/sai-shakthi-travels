// Services data — all images reference centralized local paths with fallback protection
import { images, serviceFallbacks } from './images';

export const services = [
  {
    id: 'outstation-cab',
    iconName: 'Car',
    title: 'Pondicherry Outstation Cabs',
    description:
      'Comfortable and reliable outstation cab services for one-way and round-trip journeys across Tamil Nadu.',
    image: images.services.outstationCab,
    fallback: serviceFallbacks.outstationCab,
  },
  {
    id: 'airport-transfers',
    iconName: 'Plane',
    title: 'Pondicherry Airport Taxi',
    description:
      'Convenient airport pickup and drop transfers between Pondicherry and Chennai or regional airports.',
    image: images.services.airportTransfer,
    fallback: serviceFallbacks.airportTransfer,
  },
  {
    id: 'holiday-tours',
    iconName: 'Map',
    title: 'Pondicherry Tour Services',
    description:
      'Explore holiday tour packages and sightseeing journeys designed around Pondicherry, heritage sites and hill stations.',
    image: images.services.holidayTour,
    fallback: serviceFallbacks.holidayTour,
  },
  {
    id: 'family-trips',
    iconName: 'Users',
    title: 'Family & Group Trips',
    description:
      'Spacious cabs and tempo travellers for family vacations and group travel starting from Pondy.',
    image: images.services.familyTrip,
    fallback: serviceFallbacks.familyTrip,
  },
  {
    id: 'corporate-travel',
    iconName: 'Briefcase',
    title: 'Corporate Travel',
    description:
      'Professional executive cabs and dependable travel arrangements for business meetings and corporate requirements.',
    image: images.services.corporateTravel,
    fallback: serviceFallbacks.corporateTravel,
  },
  {
    id: 'one-way-trips',
    iconName: 'ArrowRight',
    title: 'One-Way Drop Taxi',
    description:
      'Convenient one-way cab travel from Puducherry to Chennai, Bangalore and surrounding cities with zero return fare.',
    image: images.services.oneWayTrip,
    fallback: serviceFallbacks.oneWayTrip,
  },
  {
    id: 'round-trips',
    iconName: 'RefreshCw',
    title: 'Round-Trip Cab Service',
    description:
      'Dedicated Pondicherry cab service for same-day and multi-day round-trip travel at transparent rates.',
    image: images.services.roundTrip,
    fallback: serviceFallbacks.roundTrip,
  },
  {
    id: 'customized-trips',
    iconName: 'Compass',
    title: 'Pondicherry Customized Trips',
    description:
      'Personalized travel plans built completely around your preferred destinations, stops and timeline.',
    image: images.services.customizedTrip,
    fallback: serviceFallbacks.customizedTrip,
  },
];
