import { Car, Calendar, Plane, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImageWithFallback from '../components/ImageWithFallback';
import { images } from '../data/images';

const features = [
  {
    id: 'comfortable',
    icon: Car,
    title: 'Comfortable Journeys',
    description:
      'Well-maintained, clean vehicles and experienced chauffeurs ensuring smooth and pleasant travel across every destination.',
  },
  {
    id: 'flexible',
    icon: Calendar,
    title: 'Flexible Travel Plans',
    description:
      'Customizable schedules and routes adapted to your personal, family or group travel requirements.',
  },
  {
    id: 'airport-outstation',
    icon: Plane,
    title: 'Airport & Outstation Travel',
    description:
      'Dependable airport transfers between Pondicherry and Chennai or regional airports, plus one-way and round-trip outstation cabs.',
  },
  {
    id: 'personalized',
    icon: Compass,
    title: 'Personalized Trip Planning',
    description:
      'Tailored itineraries and dedicated travel support for sightseeing, weekend getaways, family holidays and heritage tours.',
  },
];

function FeatureBlock({ feature, delay }) {
  const { icon: Icon, title, description } = feature;

  return (
    <div
      className={`reveal reveal-delay-${delay} group flex gap-4 sm:gap-5`}
    >
      {/* Icon container */}
      <div className="shrink-0 mt-0.5" aria-hidden="true">
        <div
          className="w-11 h-11 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center
            group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors duration-300"
        >
          <Icon size={20} className="text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
        </div>
      </div>

      {/* Text */}
      <div>
        <h3 className="font-serif font-semibold text-base text-navy-900 mb-1.5 leading-snug">
          {title}
        </h3>
        <p className="font-sans text-sm text-navy-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-navy-50"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left / Top on mobile — image */}
          <div className="reveal order-1 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-navy-900/10 border border-navy-100 bg-navy-100">
              <ImageWithFallback
                src={images.about.whyTravelWithUs}
                fallback={images.hero.pondicherry}
                alt="Premium travel experience from Pondicherry"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Subtle decorative accent borders */}
            <div
              className="absolute -bottom-3 -right-3 w-28 h-28 rounded-2xl border-2 border-gold-300/40 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -left-3 w-20 h-20 rounded-2xl border border-navy-200 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>

          {/* Right / Bottom on mobile — content */}
          <div className="order-2">
            <span className="reveal section-label mb-3 block">
              OUR PROMISE
            </span>
            <h2
              id="why-us-heading"
              className="reveal reveal-delay-1 section-heading mb-4"
            >
              Why Travel With Us?
            </h2>
            <span className="reveal reveal-delay-2 gold-line mb-6 block" />
            <p className="reveal reveal-delay-2 text-navy-600 font-sans text-base leading-relaxed mb-8 sm:mb-10">
              We believe travel should be comfortable, dependable and completely stress-free. Every journey we plan is
              tailored around your comfort and schedule — from initial enquiry to your final arrival.
            </p>

            {/* Feature blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {features.map((feature, i) => (
                <FeatureBlock key={feature.id} feature={feature} delay={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
