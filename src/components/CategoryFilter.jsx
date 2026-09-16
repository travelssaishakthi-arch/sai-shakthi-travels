import { CATEGORIES } from '../data/destinations';

/**
 * CategoryFilter — elegant filter pill buttons for destinations.
 * @param {string}   active   - current active category id
 * @param {Function} onChange - callback(categoryId)
 */
export default function CategoryFilter({ active, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter destinations by category"
      className="flex flex-wrap justify-center gap-2"
    >
      {CATEGORIES.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            id={`filter-${id}`}
            onClick={() => onChange(id)}
            aria-pressed={isActive}
            className={`
              px-5 py-2.5 rounded-sm font-sans text-sm font-medium tracking-wide
              border transition-all duration-250 ease-out
              focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2
              ${isActive
                ? 'bg-gold-500 text-white border-gold-500 shadow-md shadow-gold-500/20'
                : 'bg-transparent text-navy-200 border-navy-600 hover:border-gold-500 hover:text-gold-400'
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
