import { fleet } from '../data/fleet';
import FleetCard from '../components/FleetCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Fleet() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="fleet"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-navy-950"
      aria-labelledby="fleet-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="reveal section-label text-gold-400 mb-3 block">
            OUR FLEET
          </span>
          <h2
            id="fleet-heading"
            className="reveal reveal-delay-1 section-heading-light max-w-2xl mx-auto"
          >
            Choose the Right Ride for Your Journey
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-4 mb-4" />
          <p className="reveal reveal-delay-2 text-navy-300 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Comfortable travel options for solo trips, families, groups
            and special occasions.
          </p>
        </div>

        {/* ── Vehicle cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, i) => (
            <FleetCard
              key={vehicle.id}
              vehicle={vehicle}
              delay={i + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
