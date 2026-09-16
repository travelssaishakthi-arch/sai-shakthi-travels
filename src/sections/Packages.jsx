import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Compass } from 'lucide-react';

function scrollToContactWithPrefill(name) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', { detail: { packageName: name } })
  );
  const target = document.querySelector('#contact');
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Packages() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-navy-50"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <span className="reveal section-label mb-3 block">
            TRAVEL PACKAGES
          </span>
          <h2
            id="packages-heading"
            className="reveal reveal-delay-1 section-heading max-w-2xl mx-auto"
          >
            Journeys Designed Around You
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-5 mb-5" />
          <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Choose a destination or tell us what you have in mind. We can help
            plan a comfortable journey from Pondicherry.
          </p>
        </div>

        {/* ── Package cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
              delay={(i % 3) + 1}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="reveal mt-14">
          <div
            className="bg-navy-950 rounded-xl px-8 py-8
              flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Compass size={16} className="text-gold-400" aria-hidden="true" />
                <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gold-400">
                  Custom Journey
                </span>
              </div>
              <p className="font-serif font-semibold text-xl text-white leading-snug mb-1.5">
                Can&apos;t find the right package?
              </p>
              <p className="font-sans text-sm text-navy-300 leading-relaxed max-w-sm">
                Tell us what kind of journey you have in mind and we&apos;ll help
                you create a customized travel plan.
              </p>
            </div>

            <button
              id="packages-custom-trip-btn"
              onClick={() => scrollToContactWithPrefill('Custom Travel Plan')}
              className="btn-primary shrink-0 w-full sm:w-auto"
              aria-label="Plan a custom trip — scroll to enquiry form"
            >
              Plan a Custom Trip
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
