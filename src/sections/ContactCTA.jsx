import { Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Contact numbers — edit here when needed
const CONTACTS = [
  { label: 'Call Now', number: '9087504138', display: '+91 90875 04138' },
  { label: 'Call Now', number: '8098504138', display: '+91 80985 04138' },
];

export default function ContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      aria-label="Contact CTA — Planning your next journey"
      className="py-16 lg:py-20 bg-navy-50 border-y border-navy-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >

          {/* Left — text */}
          <div className="text-center lg:text-left max-w-lg">
            <span className="reveal section-label mb-3 block lg:justify-start">
              Get In Touch
            </span>
            <h2 className="reveal reveal-delay-1 font-serif font-semibold text-2xl md:text-3xl text-navy-900 mb-3 leading-snug">
              Planning Your Next Journey?
            </h2>
            <span className="reveal reveal-delay-2 gold-line mb-4 block lg:mx-0 mx-auto" />
            <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base leading-relaxed">
              Speak with SAI SHAKTHI TRAVELS and get a travel plan that fits
              your needs.
            </p>
          </div>

          {/* Right — call buttons */}
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {CONTACTS.map(({ label, number, display }) => (
              <a
                key={number}
                href={`tel:${number}`}
                id={`cta-call-${number}`}
                aria-label={`${label} — ${display}`}
                className="group flex items-center gap-3
                  bg-white border border-navy-200 rounded-lg px-6 py-4
                  hover:border-gold-300 hover:shadow-md
                  transition-all duration-300 ease-out
                  focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              >
                <div
                  className="w-10 h-10 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center shrink-0
                    group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <Phone
                    size={16}
                    className="text-navy-700 group-hover:text-gold-600 transition-colors duration-300"
                  />
                </div>
                <div className="text-left">
                  <span className="block font-sans text-[10px] font-semibold tracking-widest uppercase text-gold-600 mb-0.5">
                    {label}
                  </span>
                  <span className="block font-serif font-semibold text-base text-navy-900 tracking-wide">
                    {display}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
