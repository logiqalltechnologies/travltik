export default {
  country: 'lithuania',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Embassy of the Republic of Lithuania in New Delhi / Migration Department under the Ministry of the Interior (MIGRIS)',
  channels: [
    'VFS Global Lithuania Visa Application Centre',
    'Embassy of the Republic of Lithuania in New Delhi',
    'MIGRIS Official Portal (for e-invitations)'
  ],
  processingTime: {
    eVisa: 'N/A (eVisa not available for Schengen Short-Stay Visa)',
    standardSticker: '15 calendar days (may extend up to 45 days if additional scrutiny is required)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (approx. INR 8,100)',
    vfsServiceFee: 'EUR 15.90 (approx. INR 1,430) + applicable courier/convenience fees'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Schengen Area',
    validity: 'Up to 5 years (as determined by the consulate)',
    maxStay: '90 days within any 180-day period',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within 180 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
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
      description: 'Two recent color photographs (taken within the last 6 months), 35x45mm size, against a neutral light/white background, with 70-80% face coverage.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Harmonised Schengen Visa Application Form',
      description: 'Completed and signed Schengen visa application form (filled via E-KONSULAT / official application platform and printed).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'official_invitation',
      title: 'Official E-Invitation via MIGRIS',
      description: 'Official electronic invitation letter registered by the hosting Lithuanian company/partner through the Lithuanian Migration Department system (MIGRIS) with a valid invitation reference code.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Covering Letter from Indian Employer',
      description: 'Original cover letter on Indian company letterhead detailing the company profile, applicant position, purpose of visit, length of stay, and commitment of financial coverage.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation showing flight numbers and travel dates into and out of the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation or official documentation of accommodation provided by the host organization in Lithuania.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Travel health insurance policy with minimum coverage of EUR 30,000, valid across all Schengen member states, covering emergency medical care, hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Personal & Company)',
      description: 'Personal and company bank statements for the last 3-6 months stamped and signed by the bank, demonstrating sufficient financial means (minimum EUR 40/day in Lithuania), plus Income Tax Returns (ITR) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'business_registration',
      title: 'Proof of Business Entity Registration',
      description: 'Copy of Indian company registration certificate, GST registration, or Partnership Deed proving legal status of the sending organization.',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain MIGRIS Electronic Invitation',
      description: 'Ensure the inviting business partner in Lithuania registers an official invitation number via the MIGRIS portal.'
    },
    {
      step: 2,
      title: 'Fill Application Form & Schedule Appointment',
      description: 'Complete the official Schengen visa application form online and schedule a biometric appointment at the nearest VFS Global Lithuania Visa Application Centre.'
    },
    {
      step: 3,
      title: 'Assemble Visa Dossier',
      description: 'Gather all mandatory documents including cover letter, MIGRIS invitation code, financial statements, travel insurance, and flight itinerary.'
    },
    {
      step: 4,
      title: 'Submit Biometrics and Pay Fees',
      description: 'Attend the VFS Global center to submit physical documents, enroll biometric data (fingerprints & photo), and pay statutory fees.'
    },
    {
      step: 5,
      title: 'Track Application & Collect Passport',
      description: 'Monitor the application status through VFS tracking and retrieve the passport with the visa sticker upon consular decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day limitation. Travelers must carry copies of their invitation letter, travel health insurance policy, proof of return transport, and proof of sufficient subsistence funds (EUR 40/day) for verification by border control officers at Schengen entry points.'
  }
};