import { Mail, Phone } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PHONE_PRIMARY, PHONE_SECONDARY } from '../utils/whatsapp';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left column (2/5) — brand info ── */}
          <div className="lg:col-span-2">
            <span className="reveal section-label mb-4 block">
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="reveal reveal-delay-1 section-heading mb-4"
            >
              Let&apos;s Plan Your<br />
              <span className="italic text-gold-600">Perfect Trip</span>
            </h2>
            <span className="reveal reveal-delay-2 gold-line mb-6 block" />
            <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base leading-relaxed mb-8 max-w-md">
              Tell us your travel requirements and our team will help you plan
              your journey from Pondicherry.
            </p>

            {/* Contact details */}
            <div className="reveal reveal-delay-3 space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-200
                    flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Mail size={15} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-navy-500 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:travelssaishakthi@gmail.com"
                    className="font-sans text-sm text-navy-700 hover:text-gold-600
                      transition-colors duration-200 break-all"
                  >
                    travelssaishakthi@gmail.com
                  </a>
                </div>
              </div>

              {/* Primary Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-200
                    flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Phone size={15} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-navy-500 mb-0.5">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE_PRIMARY}`}
                    aria-label={`Call primary number ${PHONE_PRIMARY}`}
                    className="font-sans text-sm text-navy-700 hover:text-gold-600
                      transition-colors duration-200 block"
                  >
                    {PHONE_PRIMARY}
                  </a>
                  <a
                    href={`tel:${PHONE_SECONDARY}`}
                    aria-label={`Call secondary number ${PHONE_SECONDARY}`}
                    className="font-sans text-sm text-navy-700 hover:text-gold-600
                      transition-colors duration-200 block"
                  >
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick note */}
            <div className="reveal reveal-delay-4 mt-8 p-4 rounded-lg bg-navy-50 border border-navy-100">
              <p className="font-sans text-xs text-navy-500 leading-relaxed">
                <span className="font-semibold text-navy-700">How it works:</span>{' '}
                Fill in your travel details and click{' '}
                <em>Send Enquiry on WhatsApp</em>. Your message will be
                prepared and sent directly to our team via WhatsApp.
              </p>
            </div>
          </div>

          {/* ── Right column (3/5) — enquiry form ── */}
          <div className="reveal reveal-delay-2 lg:col-span-3">
            <EnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
}
