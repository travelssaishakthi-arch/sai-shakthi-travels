import {
  WHATSAPP_NUMBER,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
} from '../config/contact';

// Re-export for convenience & backwards compatibility
export { PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER };
export const PHONE_PRIMARY = PRIMARY_PHONE;
export const PHONE_SECONDARY = SECONDARY_PHONE;

export const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Builds the structured WhatsApp enquiry message from form data.
 * @param {Object} form - { name, mobile, destination, travelDate, persons, vehicle, message }
 * @returns {string}
 */
export function buildEnquiryMessage({
  name,
  mobile,
  destination,
  travelDate,
  persons,
  vehicle,
  message,
}) {
  const lines = [
    'Hello SAI SHAKTHI TRAVELS,',
    '',
    'I would like to enquire about a trip.',
    '',
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    `Destination: ${destination}`,
    `Travel Date: ${travelDate || 'Not specified'}`,
    `Persons: ${persons}`,
    `Vehicle: ${vehicle || 'Not specified'}`,
    `Message: ${message?.trim() || 'No additional message'}`,
    '',
    'Please contact me regarding this enquiry.',
  ];
  return lines.join('\n');
}

/**
 * Opens WhatsApp in a new tab with the given pre-built message.
 * @param {string} message - plain text message
 */
export function openWhatsApp(message) {
  const url = `${WA_URL}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Opens WhatsApp with a simple greeting (used by floating button).
 */
export function openWhatsAppGreeting() {
  const text = 'Hello SAI SHAKTHI TRAVELS, I would like to enquire about a trip from Pondicherry.';
  openWhatsApp(text);
}
