// Tour Packages data — from Pondicherry
// All images reference centralized local paths with fallback protection
import { images, destinationFallbacks, fallbacks } from './images';

export const packages = [
  {
    slug: 'pondicherry-local',
    title: 'Pondicherry Local Experience',
    description:
      'Discover Pondicherry itself — the French Quarter, Promenade Beach, Auroville and serene ashrams at a comfortable pace.',
    image: images.destinations.pondicherry,
    fallback: destinationFallbacks.pondicherry,
    label: 'From Pondicherry',
    destination: 'Pondicherry',
  },
  {
    slug: 'pondicherry-auroville',
    title: 'Pondicherry + Auroville',
    description:
      "Combine Pondicherry's coastal charm with Auroville's unique experimental township and the iconic Matrimandir.",
    image: images.destinations.auroville,
    fallback: destinationFallbacks.auroville,
    label: 'From Pondicherry',
    destination: 'Pondicherry + Auroville',
  },
  {
    slug: 'mahabalipuram-heritage',
    title: 'Mahabalipuram Heritage Trip',
    description:
      "A guided journey to the UNESCO shore temples, Arjuna's Penance rock relief and the ancient Five Rathas.",
    image: images.destinations.mahabalipuram,
    fallback: destinationFallbacks.mahabalipuram,
    label: 'From Pondicherry',
    destination: 'Mahabalipuram',
  },
  {
    slug: 'gingee-tiruvannamalai',
    title: 'Gingee & Tiruvannamalai Journey',
    description:
      'Explore the dramatic Gingee fort hilltop followed by the sacred Arunachala Hill and Tiruvannamalai temple complex.',
    image: images.destinations.gingee,
    fallback: destinationFallbacks.gingee,
    label: 'From Pondicherry',
    destination: 'Gingee & Tiruvannamalai',
  },
  {
    slug: 'chidambaram-pichavaram',
    title: 'Chidambaram & Pichavaram Escape',
    description:
      'Visit the legendary Nataraja Temple in Chidambaram then cruise through the Pichavaram mangrove waterways.',
    image: images.destinations.pichavaram,
    fallback: destinationFallbacks.pichavaram,
    label: 'From Pondicherry',
    destination: 'Chidambaram & Pichavaram',
  },
  {
    slug: 'custom-tamil-nadu-tour',
    title: 'Custom Tamil Nadu Tour',
    description:
      'Tell us where you want to go. We build a comfortable, flexible itinerary around your schedule, group size and preferences.',
    image: images.services.customizedTrip,
    fallback: fallbacks.destination,
    label: 'From Pondicherry',
    destination: 'Custom Tamil Nadu Tour',
  },
];
