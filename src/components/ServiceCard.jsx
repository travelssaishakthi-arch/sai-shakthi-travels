import {
  Car,
  Plane,
  Map,
  Users,
  Briefcase,
  ArrowRight,
  RefreshCw,
  Compass,
} from 'lucide-react';

// Map string icon names from data file to actual Lucide components
const ICON_MAP = {
  Car,
  Plane,
  Map,
  Users,
  Briefcase,
  ArrowRight,
  RefreshCw,
  Compass,
};

/**
 * ServiceCard — reusable card for a single travel service.
 * @param {Object} service  - one entry from src/data/services.js
 * @param {number} delay    - reveal animation delay index (1–6)
 */
export default function ServiceCard({ service, delay }) {
  const { iconName, title, description } = service;
  const Icon = ICON_MAP[iconName] ?? Car;
  const delayClass = delay <= 6 ? `reveal-delay-${delay}` : '';

  return (
    <article
      className={`reveal ${delayClass} card-base group flex flex-col gap-4 p-6`}
      aria-label={`Service: ${title}`}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center
          shrink-0 group-hover:bg-gold-50 group-hover:border-gold-200
          transition-colors duration-300"
        aria-hidden="true"
      >
        <Icon
          size={20}
          className="text-navy-700 group-hover:text-gold-600 transition-colors duration-300"
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-serif font-semibold text-[17px] text-navy-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="font-sans text-sm text-navy-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 -mx-6 -mb-6 bg-gradient-to-r from-gold-400 to-transparent
          scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-lg"
        aria-hidden="true"
      />
    </article>
  );
}
