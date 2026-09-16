import { GOOGLE_SHEETS_WEB_APP_URL, EMAIL_ADDRESS } from '../config/contact';

/**
 * Submits enquiry form payload to Google Apps Script Web App.
 * Uses text/plain Content-Type to avoid CORS preflight options request.
 * 
 * Payload structure includes business notification metadata so the
 * backend Apps Script can process email dispatch natively and securely
 * without exposing SMTP credentials or API keys on the frontend.
 *
 * @param {Object} payload - { name, mobile, destination, travelDate, persons, vehicle, message }
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function submitEnquiryToGoogleSheets(payload) {
  try {
    const enrichedPayload = {
      ...payload,
      timestamp: new Date().toISOString(),
      businessEmail: EMAIL_ADDRESS,
      source: 'SAI SHAKTHI TRAVELS Website Enquiry',
    };

    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(enrichedPayload),
    });

    if (!response.ok && response.status !== 0) {
      throw new Error(`Server returned status ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending enquiry to Google Sheets:', error);
    return {
      success: false,
      error: error.message || 'Failed to submit enquiry',
    };
  }
}
