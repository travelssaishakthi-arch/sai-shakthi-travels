import { Check, MessageSquare } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * FleetCard — reusable card for a single vehicle in the fleet.
 * @param {Object} vehicle  - one entry from src/data/fleet.js
 * @param {number} delay    - reveal animation delay index (1–6)
 */
export default function FleetCard({ vehicle, delay }) {
  const { name, tagline, description, features, image, fallback, imageAlt } = vehicle;
  const delayClass = delay <= 6 ? `reveal-delay-${delay}` : '';

  const handleGetQuote = () => {
    // Pre-fill preferred vehicle in enquiry form
    window.dispatchEvent(
      new CustomEvent('prefill-enquiry', {
        detail: {
          destination: '',
          message: `Interested in booking ${name} (${tagline}).`,
        },
      })
    );
    const target = document.querySelector('#contact');
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <article
      className={`reveal ${delayClass} group bg-white rounded-xl border border-navy-100
        shadow-sm overflow-hidden flex flex-col
        transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-gold-200`}
      aria-label={`Vehicle: ${name}`}
    >
      {/* Image with fallback */}
      <div className="img-zoom-container aspect-[16/9] bg-navy-100 shrink-0 overflow-hidden">
        <ImageWithFallback
          src={image}
          fallback={fallback}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header */}
        <div>
          <span className="block font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-gold-600 mb-1">
            {tagline}
          </span>
          <h3 className="font-serif font-semibold text-xl text-navy-900 leading-snug">
            {name}
          </h3>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-navy-500 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5" aria-label={`${name} features`}>
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 font-sans text-xs text-navy-600"
            >
              <Check
                size={13}
                className="text-gold-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <button
            onClick={handleGetQuote}
            id={`fleet-quote-${vehicle.id}`}
            className="btn-navy w-full justify-center text-xs sm:text-sm font-semibold py-3 px-5 min-h-[44px]"
            aria-label={`Get a quote for ${name}`}
          >
            <MessageSquare size={15} aria-hidden="true" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </article>
  );
}
