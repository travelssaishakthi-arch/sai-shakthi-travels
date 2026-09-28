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

// Fallback images
import fbHero from '../assets/images/fallbacks/fallback-hero.jpg';
import fbDestination from '../assets/images/fallbacks/fallback-destination.jpg';
import fbService from '../assets/images/fallbacks/fallback-service.jpg';
import fbFleet from '../assets/images/fallbacks/fallback-fleet.jpg';
import fbGallery from '../assets/images/fallbacks/fallback-gallery.jpg';

// Curated high-resolution local fallback photos
export const fallbacks = {
  hero: fbHero,
  whyUs: whyTravelWithUs,
  destination: fbDestination,
  service: fbService,
  fleet: fbFleet,
  gallery: fbGallery,
};

// Destination-specific curated fallbacks
export const destinationFallbacks = {
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
};

// Fleet-specific curated fallbacks
export const fleetFallbacks = {
  sedan: fleetSedan,
  suv: fleetSuv,
  innova: fleetInnova,
  tempoTraveller: fleetTempoTraveller,
};

// Service-specific curated fallbacks
export const serviceFallbacks = {
  outstationCab: srvOutstationCab,
  airportTransfer: srvAirportTransfer,
  holidayTour: srvHolidayTour,
  familyTrip: srvFamilyTrip,
  corporateTravel: srvCorporateTravel,
  oneWayTrip: srvOneWayTrip,
  roundTrip: srvRoundTrip,
  customizedTrip: srvCustomizedTrip,
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
