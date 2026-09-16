import { useState, useEffect, useRef, useCallback } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Loader2, RefreshCw, MessageSquare } from 'lucide-react';
import { DROPDOWN_DESTINATIONS } from '../data/destinations';
import { submitEnquiryToGoogleSheets } from '../services/enquiryService';
import {
  buildEnquiryMessage,
  openWhatsApp,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
} from '../utils/whatsapp';

const VEHICLE_OPTIONS = [
  'Sedan (Dzire / Etios - 4 Seater)',
  'SUV (Innova / Ertiga - 6-7 Seater)',
  'Toyota Innova Crysta (Luxury - 7 Seater)',
  'Tempo Traveller (12-14 Seater)',
  'Tempo Traveller (17-20 Seater)',
  'Urbania / Mini Bus (Group)',
];

const EMPTY_FORM = {
  name: '',
  mobile: '',
  destination: '',
  travelDate: '',
  persons: '',
  vehicle: '',
  message: '',
};

const EMPTY_ERRORS = {
  name: '',
  mobile: '',
  destination: '',
  travelDate: '',
  persons: '',
  vehicle: '',
};

// Returns today's date in YYYY-MM-DD format (for date min attribute)
function todayISO() {
  return new Date().toISOString().split('T')[0];
}

// Clean and validate Indian 10-digit mobile number
function cleanMobile(raw) {
  return raw.replace(/\s+/g, '');
}

function isValidIndianMobile(number) {
  const cleaned = cleanMobile(number);
  return /^[6-9]\d{9}$/.test(cleaned);
}

// Validate a single field; returns error string or ''
function validateField(name, value) {
  switch (name) {
    case 'name':
      return value && value.trim().length >= 2
        ? ''
        : 'Please enter your full name.';
    case 'mobile':
      return isValidIndianMobile(value)
        ? ''
        : 'Please enter a valid 10-digit Indian mobile number (e.g. 9087504138).';
    case 'destination':
      return value ? '' : 'Please select your destination.';
    case 'travelDate':
      return value ? '' : 'Please select your intended travel date.';
    case 'persons':
      return value && parseInt(value, 10) >= 1
        ? ''
        : 'Please enter the number of persons (minimum 1).';
    case 'vehicle':
      return value ? '' : 'Please select your preferred vehicle type.';
    default:
      return '';
  }
}

// Shared input/select class helpers
const fieldClass =
  'w-full px-4 py-3 rounded-lg border border-navy-200 font-sans text-sm text-navy-900 placeholder:text-navy-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm';

const errorFieldClass =
  'w-full px-4 py-3 rounded-lg border border-red-400 font-sans text-sm text-navy-900 placeholder:text-navy-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50/20 shadow-sm';

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p role="alert" className="flex items-center gap-1.5 text-red-600 font-sans text-xs mt-1 font-medium">
      <AlertCircle size={13} aria-hidden="true" className="shrink-0" />
      {msg}
    </p>
  );
}

function Label({ htmlFor, required, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-sans text-xs font-semibold text-navy-800 tracking-wide mb-1.5"
    >
      {children}
      {required && (
        <span className="text-gold-600 ml-0.5" aria-hidden="true">*</span>
      )}
    </label>
  );
}

export default function EnquiryForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState('');
  const nameRef = useRef(null);

  // Listen for prefill events from DestinationCard / PackageCard
  useEffect(() => {
    const handler = (e) => {
      const { packageName, destination, message } = e.detail ?? {};
      const dest = destination || packageName || '';
      setForm((prev) => ({
        ...prev,
        destination: dest,
        ...(message ? { message } : {}),
      }));
      setErrors((prev) => ({ ...prev, destination: '' }));
      // Focus name field after short scroll delay
      setTimeout(() => nameRef.current?.focus(), 400);
    };
    window.addEventListener('prefill-enquiry', handler);
    return () => window.removeEventListener('prefill-enquiry', handler);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const validate = () => {
    const newErrors = {
      name:        validateField('name', form.name),
      mobile:      validateField('mobile', form.mobile),
      destination: validateField('destination', form.destination),
      travelDate:  validateField('travelDate', form.travelDate),
      persons:     validateField('persons', form.persons),
      vehicle:     validateField('vehicle', form.vehicle),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const payload = {
      name: form.name.trim(),
      mobile: cleanMobile(form.mobile),
      destination: form.destination,
      travelDate: form.travelDate,
      persons: form.persons,
      vehicle: form.vehicle,
      message: form.message.trim(),
    };

    // Prepare WhatsApp text
    const waMessage = buildEnquiryMessage(payload);
    setLastSubmittedMsg(waMessage);

    try {
      // 1. Send data to Google Apps Script Web App
      const result = await submitEnquiryToGoogleSheets(payload);

      // 2. Open WhatsApp in new tab with the structured message
      openWhatsApp(waMessage);

      if (result.success) {
        setSubmitStatus('success');
        setForm(EMPTY_FORM);
        setErrors(EMPTY_ERRORS);
      } else {
        // If sheet submission had an issue, WhatsApp is still opened
        setSubmitStatus('error');
        setErrorMessage('Failed to save to online sheet. You can continue sending your enquiry via WhatsApp or call us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      openWhatsApp(waMessage);
      setSubmitStatus('error');
      setErrorMessage('Network connection issue. Please use WhatsApp or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors(EMPTY_ERRORS);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  // SUCCESS STATE
  if (submitStatus === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center gap-6 text-center
          py-14 px-8 rounded-2xl bg-white border border-gold-200/80 shadow-xl shadow-navy-950/5 animate-fade-in"
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shadow-sm">
          <CheckCircle size={36} aria-hidden="true" />
        </div>

        <div className="max-w-md">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
            Thank you for your enquiry!
          </h3>
          <p className="text-navy-600 font-sans text-sm sm:text-base leading-relaxed">
            Your travel request has been received.<br />
            Our team will contact you shortly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md pt-2">
          {lastSubmittedMsg && (
            <button
              onClick={() => openWhatsApp(lastSubmittedMsg)}
              className="btn-primary w-full sm:flex-1 justify-center text-xs sm:text-sm py-3.5"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare size={16} aria-hidden="true" />
              Chat on WhatsApp
            </button>
          )}

          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="btn-navy w-full sm:flex-1 justify-center text-xs sm:text-sm py-3.5"
            aria-label={`Call ${PRIMARY_PHONE}`}
          >
            <Phone size={15} aria-hidden="true" />
            Call {PRIMARY_PHONE}
          </a>
        </div>

        <div className="pt-2 border-t border-navy-100 w-full max-w-md flex flex-col items-center gap-2">
          <button
            onClick={handleReset}
            className="text-navy-600 hover:text-gold-600 font-sans text-xs font-semibold inline-flex items-center gap-1.5 transition-colors py-1"
          >
            <RefreshCw size={13} aria-hidden="true" />
            Send Another Enquiry
          </button>
          <div className="flex gap-4 font-sans text-xs text-navy-500">
            <span>Alt Phone:</span>
            <a href={`tel:${SECONDARY_PHONE}`} className="hover:text-gold-600 font-medium transition-colors">
              +91 {SECONDARY_PHONE}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Travel enquiry form"
      className="bg-navy-50/70 border border-navy-100 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg shadow-navy-950/5 relative"
    >
      {/* ERROR BANNER IF SUBMISSION FAILED */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 font-sans text-xs sm:text-sm space-y-2 animate-fade-in"
        >
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle size={16} className="text-red-600 shrink-0" />
            <span>Something went wrong. Please try again or contact us directly.</span>
          </div>
          <p className="text-red-700 text-xs pl-6">
            {errorMessage || 'You can also reach our desk immediately using the call buttons below.'}
          </p>
          <div className="pt-2 flex flex-wrap gap-2 pl-6">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
            >
              <Phone size={12} /> Call {PRIMARY_PHONE}
            </a>
            <a
              href={`tel:${SECONDARY_PHONE}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
            >
              <Phone size={12} /> Call {SECONDARY_PHONE}
            </a>
          </div>
        </div>
      )}

      {/* Row 1: Name + Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <Label htmlFor="enq-name" required>Full Name</Label>
          <input
            id="enq-name"
            ref={nameRef}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.name ? 'enq-name-err' : undefined}
            className={errors.name ? errorFieldClass : fieldClass}
          />
          <span id="enq-name-err"><FieldError msg={errors.name} /></span>
        </div>

        {/* Mobile Number */}
        <div>
          <Label htmlFor="enq-mobile" required>Mobile Number</Label>
          <input
            id="enq-mobile"
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            maxLength={10}
            inputMode="numeric"
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.mobile ? 'enq-mobile-err' : undefined}
            className={errors.mobile ? errorFieldClass : fieldClass}
          />
          <span id="enq-mobile-err"><FieldError msg={errors.mobile} /></span>
        </div>
      </div>

      {/* Row 2: Destination + Travel Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Destination */}
        <div>
          <Label htmlFor="enq-destination" required>Destination</Label>
          <select
            id="enq-destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.destination ? 'enq-dest-err' : undefined}
            className={`${errors.destination ? errorFieldClass : fieldClass} cursor-pointer`}
          >
            <option value="">— Select a destination —</option>
            {DROPDOWN_DESTINATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <span id="enq-dest-err"><FieldError msg={errors.destination} /></span>
        </div>

        {/* Travel Date */}
        <div>
          <Label htmlFor="enq-date" required>Travel Date</Label>
          <input
            id="enq-date"
            type="date"
            name="travelDate"
            value={form.travelDate}
            onChange={handleChange}
            min={todayISO()}
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.travelDate ? 'enq-date-err' : undefined}
            className={errors.travelDate ? errorFieldClass : fieldClass}
          />
          <span id="enq-date-err"><FieldError msg={errors.travelDate} /></span>
        </div>
      </div>

      {/* Row 3: Persons + Vehicle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Number of Persons */}
        <div>
          <Label htmlFor="enq-persons" required>Number of Persons</Label>
          <input
            id="enq-persons"
            type="number"
            name="persons"
            value={form.persons}
            onChange={handleChange}
            placeholder="e.g. 4"
            min={1}
            inputMode="numeric"
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.persons ? 'enq-persons-err' : undefined}
            className={errors.persons ? errorFieldClass : fieldClass}
          />
          <span id="enq-persons-err"><FieldError msg={errors.persons} /></span>
        </div>

        {/* Vehicle */}
        <div>
          <Label htmlFor="enq-vehicle" required>Preferred Vehicle</Label>
          <select
            id="enq-vehicle"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-required="true"
            aria-describedby={errors.vehicle ? 'enq-vehicle-err' : undefined}
            className={`${errors.vehicle ? errorFieldClass : fieldClass} cursor-pointer`}
          >
            <option value="">— Select a vehicle —</option>
            {VEHICLE_OPTIONS.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          <span id="enq-vehicle-err"><FieldError msg={errors.vehicle} /></span>
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="enq-message">Message / Additional Requirements</Label>
        <textarea
          id="enq-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          disabled={isSubmitting}
          placeholder="Any specific pick-up address, timings, one-way/round-trip details..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <div className="space-y-3 pt-2">
        <button
          type="submit"
          id="enq-submit-btn"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-4 text-sm font-semibold tracking-wide disabled:opacity-75 disabled:cursor-not-allowed"
          aria-label={isSubmitting ? 'Sending Enquiry...' : 'Submit Travel Enquiry'}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin text-white" aria-hidden="true" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send size={16} className="text-white" aria-hidden="true" />
              <span>Submit Travel Enquiry</span>
            </>
          )}
        </button>

        {/* Direct Call row */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={`tel:${PRIMARY_PHONE}`}
            id="enq-call-primary"
            aria-label={`Call SAI SHAKTHI TRAVELS on ${PRIMARY_PHONE}`}
            className="btn-navy flex-1 justify-center text-xs py-3"
          >
            <Phone size={14} aria-hidden="true" />
            Call {PRIMARY_PHONE}
          </a>
          <a
            href={`tel:${SECONDARY_PHONE}`}
            id="enq-call-secondary"
            aria-label={`Call SAI SHAKTHI TRAVELS on ${SECONDARY_PHONE}`}
            className="btn-navy flex-1 justify-center text-xs py-3"
          >
            <Phone size={14} aria-hidden="true" />
            Call {SECONDARY_PHONE}
          </a>
        </div>
      </div>

      <p className="text-navy-400 font-sans text-[11px] text-center leading-relaxed">
        Your enquiry is recorded securely in our scheduling system and automatically opens in WhatsApp for immediate response.
      </p>
    </form>
  );
}
