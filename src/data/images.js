// Centralized image mapping configuration
// To replace an image with your own photo, simply keep the filename in src/assets/images/

// Hero images
import heroPondicherry from '../assets/images/hero/hero-pondicherry.png';

// About section images
import whyTravelWithUs from '../assets/images/about/why-travel-with-us.jpg';

// Destination images
import destPondicherry from '../assets/images/destinations/pondicherry.jpg';
import destAuroville from '../assets/images/destinations/auroville.jpg';
import destCuddalore from '../assets/images/destinations/cuddalore.jpg';
import destChunnambar from '../assets/images/destinations/chunnambar.jpg';
import destParadiseBeach from '../assets/images/destinations/paradise-beach.jpg';
import destMarakkanam from '../assets/images/destinations/marakkanam.jpg';
import destMahabalipuram from '../assets/images/destinations/mahabalipuram.jpg';
import destGingee from '../assets/images/destinations/gingee.jpg';
import destChidambaram from '../assets/images/destinations/chidambaram.jpg';
import destPichavaram from '../assets/images/destinations/pichavaram.jpg';
import destTiruvannamalai from '../assets/images/destinations/tiruvannamalai.jpg';
import destKanchipuram from '../assets/images/destinations/kanchipuram.jpg';
import destChennai from '../assets/images/destinations/chennai.jpg';
import destKodaikanal from '../assets/images/destinations/kodaikanal.jpg';
import destYercaud from '../assets/images/destinations/yercaud.jpg';
import destThanjavur from '../assets/images/destinations/thanjavur.jpg';
import destVelankanni from '../assets/images/destinations/velankanni.jpg';

// Service images
import srvOutstationCab from '../assets/images/services/outstation-cab.jpg';
import srvAirportTransfer from '../assets/images/services/airport-transfer.jpg';
import srvHolidayTour from '../assets/images/services/holiday-tour.jpg';
import srvFamilyTrip from '../assets/images/services/family-trip.jpg';
import srvCorporateTravel from '../assets/images/services/corporate-travel.jpg';
import srvOneWayTrip from '../assets/images/services/one-way-trip.jpg';
import srvRoundTrip from '../assets/images/services/round-trip.jpg';
import srvCustomizedTrip from '../assets/images/services/customized-trip.jpg';

// Fleet images
import fleetSedan from '../assets/images/fleet/sedan.jpg';
import fleetSuv from '../assets/images/fleet/suv.jpg';
import fleetInnova from '../assets/images/fleet/innova.jpg';
import fleetTempoTraveller from '../assets/images/fleet/tempo-traveller.jpg';

// Gallery images
import gal01 from '../assets/images/gallery/gallery-01.jpg';
import gal02 from '../assets/images/gallery/gallery-02.jpg';
import gal03 from '../assets/images/gallery/gallery-03.jpg';
import gal04 from '../assets/images/gallery/gallery-04.jpg';
import gal05 from '../assets/images/gallery/gallery-05.jpg';
import gal06 from '../assets/images/gallery/gallery-06.jpg';
import gal07 from '../assets/images/gallery/gallery-07.jpg';
import gal08 from '../assets/images/gallery/gallery-08.jpg';
import gal09 from '../assets/images/gallery/gallery-09.jpg';
import gal10 from '../assets/images/gallery/gallery-10.jpg';

// Curated high-resolution fallback photos
export const fallbacks = {
  hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
  whyUs: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
  destination: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  service: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
  fleet: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  gallery: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
};

// Destination-specific curated fallbacks
export const destinationFallbacks = {
  pondicherry: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  auroville: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
  cuddalore: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  chunnambar: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  paradiseBeach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  marakkanam: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
  mahabalipuram: 'https://images.unsplash.com/photo-1600100397608-f010f421a996?auto=format&fit=crop&w=800&q=80',
  gingee: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
  chidambaram: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&w=800&q=80',
  pichavaram: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  tiruvannamalai: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80',
  kanchipuram: 'https://images.unsplash.com/photo-1600100397608-f010f421a996?auto=format&fit=crop&w=800&q=80',
  chennai: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  kodaikanal: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  yercaud: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
  thanjavur: 'https://images.unsplash.com/photo-1600100397608-f010f421a996?auto=format&fit=crop&w=800&q=80',
  velankanni: 'https://images.unsplash.com/photo-1548625361-195fe579b940?auto=format&fit=crop&w=800&q=80',
};

// Fleet-specific curated fallbacks
export const fleetFallbacks = {
  sedan: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  suv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
  innova: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  tempoTraveller: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
};

// Service-specific curated fallbacks
export const serviceFallbacks = {
  outstationCab: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
  airportTransfer: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
  holidayTour: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  familyTrip: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
  corporateTravel: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  oneWayTrip: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  roundTrip: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  customizedTrip: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
};

// Centralized image mapping object
export const images = {
  hero: {
    pondicherry: heroPondicherry,
  },
  about: {
    whyTravelWithUs,
  },
  destinations: {
    pondicherry: destPondicherry,
    auroville: destAuroville,
    cuddalore: destCuddalore,
    chunnambar: destChunnambar,
    paradiseBeach: destParadiseBeach,
    marakkanam: destMarakkanam,
    mahabalipuram: destMahabalipuram,
    gingee: destGingee,
    chidambaram: destChidambaram,
    pichavaram: destPichavaram,
    tiruvannamalai: destTiruvannamalai,
    kanchipuram: destKanchipuram,
    chennai: destChennai,
    kodaikanal: destKodaikanal,
    yercaud: destYercaud,
    thanjavur: destThanjavur,
    velankanni: destVelankanni,
  },
  services: {
    outstationCab: srvOutstationCab,
    airportTransfer: srvAirportTransfer,
    holidayTour: srvHolidayTour,
    familyTrip: srvFamilyTrip,
    corporateTravel: srvCorporateTravel,
    oneWayTrip: srvOneWayTrip,
    roundTrip: srvRoundTrip,
    customizedTrip: srvCustomizedTrip,
  },
  fleet: {
    sedan: fleetSedan,
    suv: fleetSuv,
    innova: fleetInnova,
    tempoTraveller: fleetTempoTraveller,
  },
  gallery: {
    gal01,
    gal02,
    gal03,
    gal04,
    gal05,
    gal06,
    gal07,
    gal08,
    gal09,
    gal10,
  },
};
