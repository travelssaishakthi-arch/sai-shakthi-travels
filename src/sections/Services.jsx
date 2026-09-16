import { MessageCircle } from 'lucide-react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

function scrollToContact() {
  const target = document.querySelector('#contact');
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <span className="reveal section-label mb-3 block">
            OUR SERVICES
          </span>
          <h2
            id="services-heading"
            className="reveal reveal-delay-1 section-heading max-w-2xl mx-auto"
          >
            Travel Services Designed Around You
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-5 mb-5" />
          <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From everyday travel to memorable getaways, we provide comfortable
            and flexible travel solutions for every journey.
          </p>
        </div>

        {/* ── 8-card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={(i % 4) + 1}
            />
          ))}
        </div>

        {/* ── Inline CTA ── */}
        <div className="reveal mt-14">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6
              bg-navy-50 border border-navy-100 rounded-xl px-8 py-7"
          >
            <div className="text-center sm:text-left">
              <p className="font-serif font-semibold text-lg text-navy-900 leading-snug mb-1">
                Need a Custom Travel Plan?
              </p>
              <p className="font-sans text-sm text-navy-500 leading-relaxed">
                Tell us your requirements and we&apos;ll help you plan your journey.
              </p>
            </div>
            <button
              id="services-enquire-btn"
              onClick={scrollToContact}
              className="btn-primary shrink-0 w-full sm:w-auto"
              aria-label="Enquire about a custom travel plan"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Enquire Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
