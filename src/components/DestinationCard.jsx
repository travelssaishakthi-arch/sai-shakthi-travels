import { ArrowRight, MapPin } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * Dispatches a prefill event and smoothly scrolls to the enquiry section.
 * The EnquiryForm listens for this event and populates the destination select.
 */
function planTrip(destinationName) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', {
      detail: { destination: destinationName, message: '' },
    })
  );
  const target = document.querySelector('#contact');
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/**
 * DestinationCard — reusable destination card.
 * @param {Object}  destination - one entry from src/data/destinations.js
 * @param {number}  delay       - reveal delay index 1–4
 */
export default function DestinationCard({ destination, delay }) {
  const { name, route, categoryLabel, description, image, fallback } = destination;
  const delayClass = delay >= 1 && delay <= 6 ? `reveal-delay-${delay}` : '';
  const displayRoute = route || `Pondicherry to ${name}`;

  return (
    <article
      className={`reveal ${delayClass} group flex flex-col
        bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1 hover:border-gold-200`}
      aria-label={`Destination: ${displayRoute}`}
    >
      {/* Image with consistent ratio and fallback */}
      <div className="img-zoom-container aspect-[16/10] relative overflow-hidden bg-navy-100 shrink-0">
        <ImageWithFallback
          src={image}
          fallback={fallback}
          alt={`${displayRoute} travel — SAI SHAKTHI TRAVELS`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle bottom gradient for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3" aria-hidden="true">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1
            bg-navy-950/60 backdrop-blur-sm border border-white/10 rounded-full
            font-sans text-[10px] font-semibold text-gold-300 tracking-widest uppercase">
            <MapPin size={8} />
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-2.5">
        <span className="font-sans text-[11px] font-semibold tracking-wider text-gold-600 uppercase">
          {displayRoute}
        </span>
        <h3 className="font-serif font-semibold text-[17px] text-navy-900 leading-snug">
          {name}
        </h3>
        <p className="font-sans text-sm text-navy-500 leading-relaxed flex-1">
          {description}
        </p>

        {/* CTA */}
        <div className="pt-3 border-t border-navy-100">
          <button
            onClick={() => planTrip(name)}
            id={`dest-plan-${destination.slug}`}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold
              text-navy-700 hover:text-gold-600 transition-colors duration-200 group/btn"
            aria-label={`Plan a trip to ${name}`}
          >
            Plan This Trip
            <ArrowRight
              size={14}
              className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
