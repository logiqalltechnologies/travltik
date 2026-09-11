export default {
  country: 'italy',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation (MAECI) / Embassy of Italy',
  channels: ['VFS Global', 'Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '1600 INR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure date from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (within 6 months) photos, 35x45mm, white background, 70-80% face coverage, neutral facial expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed and signed Schengen Short-Stay Visa Application Form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight travel reservation or itinerary covering entry and exit from Italy/Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel bookings for the entire duration of stay OR official Declaration of Proof of Hospitality (Dichiarazione di Ospitalità) from a host in Italy.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Insurance',
      description: 'Comprehensive travel health insurance with a minimum coverage of €30,000 for emergency medical treatment and repatriation, valid across all Schengen states.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Income Tax Returns',
      description: 'Original bank statements for the last 6 months duly stamped and signed by the bank, along with Income Tax Returns (ITR-V) for the last 3 financial years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'noc_employment',
      title: 'No Objection Certificate (NOC) / Leave Authorization',
      description: 'Official leave sanction letter / NOC from employer along with last 3 months salary slips. For self-employed: Business registration / GST certificate.',
      icon: 'file-text',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Jurisdiction & Eligibility',
      description: 'Verify application eligibility based on legal residence in India for the last 6 months to determine the appropriate Italian Embassy/Consulate jurisdiction.'
    },
    {
      step: 2,
      title: 'Prepare Documentation Dossier',
      description: 'Gather all required paper documents including 6-month bank statements, 3-year ITRs, employer NOC, travel insurance, and flight/hotel bookings.'
    },
    {
      step: 3,
      title: 'Schedule VFS Appointment & Submit Application',
      description: 'Book an appointment via VFS Global Italy portal, pay consular fee (90 EUR) and service charges, submit physical dossier, and provide biometrics.'
    },
    {
      step: 4,
      title: 'Track Dossier & Receive Passport',
      description: 'Track processing status online through VFS Global and collect passport stamped with Schengen visa sticker upon completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to the Schengen 90/180-day rule. Italy must be the main destination (longest duration of stay) or first point of entry if equal stay days across multiple Schengen countries. Travel health insurance must provide minimum €30,000 emergency coverage without deductibles.'
  }
};