import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * Dispatches pre-fill event (destination + message) and scrolls to the enquiry form.
 * @param {string} destination - destination name for the select dropdown
 * @param {string} packageTitle - full package title for the message field
 */
function planJourney(destination, packageTitle) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', {
      detail: {
        destination,
        message: `Interested in the "${packageTitle}" package.`,
      },
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
 * PackageCard — reusable premium tour package card.
 * @param {Object} pkg   - one entry from src/data/packages.js
 * @param {number} delay - reveal delay index 1–6
 */
export default function PackageCard({ pkg, delay }) {
  const { title, description, image, fallback, label, destination } = pkg;
  const delayClass = delay >= 1 && delay <= 6 ? `reveal-delay-${delay}` : '';

  return (
    <article
      className={`reveal ${delayClass} group flex flex-col
        bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1 hover:border-gold-200`}
      aria-label={`Package: ${title}`}
    >
      {/* Image with fallback */}
      <div className="img-zoom-container aspect-[16/10] relative overflow-hidden bg-navy-100 shrink-0">
        <ImageWithFallback
          src={image}
          fallback={fallback}
          alt={`${title} — tour from Pondicherry`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* "Custom Quote" badge */}
        <div className="absolute top-3 right-3" aria-hidden="true">
          <span className="inline-flex items-center px-2.5 py-1
            bg-gold-500/90 backdrop-blur-sm rounded-full
            font-sans text-[10px] font-bold text-white tracking-widest uppercase">
            Custom Quote
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Origin label */}
        <div className="flex items-center gap-1.5" aria-label={`Departing from ${label}`}>
          <MapPin size={11} className="text-gold-500 shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] text-navy-500 font-medium">{label}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-semibold text-[18px] text-navy-900 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-navy-500 leading-relaxed flex-1">
          {description}
        </p>

        {/* CTA row */}
        <div className="pt-3 border-t border-navy-100 mt-auto flex items-center justify-between gap-3">
          <button
            onClick={() => planJourney(destination, title)}
            id={`pkg-journey-${pkg.slug}`}
            className="w-full btn-primary text-xs sm:text-sm px-4 py-2.5 min-h-[44px] justify-center"
            aria-label={`Plan the ${title} journey`}
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span>Plan This Journey</span>
            <ArrowRight size={14} aria-hidden="true" className="ml-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
