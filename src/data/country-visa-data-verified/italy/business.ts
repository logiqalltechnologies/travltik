export default {
  country: 'italy',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation (MAECI) / Embassy of Italy in India',
  channels: ['VFS Global Visa Application Centre', 'Embassy / Consulate General of Italy'],
  processingTime: {
    eVisa: 'N/A (eVisa not available for Schengen Area)',
    standardSticker: '15 calendar days (may extend up to 45 days under the Schengen Visa Code if further assessment is required)',
    expressSticker: 'N/A (No express or expedited service available)'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR (payable in INR as per official diplomatic exchange rate)',
    vfsServiceFee: 'approx. ₹1,364 - ₹1,800 INR (VFS service fee varies slightly by application center)'
  },
  eVisa: {
    available: false,
    portal: 'N/A (Official visa information portal: https://vistoperitalia.esteri.it/)',
    territorialScope: 'Schengen Area (29 member states)',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days per stay within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen area, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color photos, 35x45mm, white background, neutral expression, 70-80% face coverage, no headwear except religious reasons.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly filled and signed Short-Stay Schengen (Type C) visa application form.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Cover Letter',
      description: 'Official dispatch letter on Indian employer letterhead specifying employee details, position, duration, detailed itinerary, and confirming financial sponsorship of the trip.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Italian Corporate Invitation Letter',
      description: 'Official Italian host invitation letter (Lettera di invito per affari) signed by host company, accompanied by copy of host signatory ID and recent Visura Camerale (Chamber of Commerce registration).',
      icon: 'mail',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation detailing arrival and departure dates in the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the full stay duration or explicit declaration of hosted accommodation on the Italian company invitation form.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Schengen-compliant travel medical insurance policy with minimum medical coverage of 30,000 EUR, including emergency hospitalization and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Certified personal bank statements for the last 6 months showing sufficient funds, along with employer company bank statements (if corporate sponsored) and Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Business Credentials',
      description: 'Payslips for the last 3 months, employment contract, and Certificate of Incorporation or GST Registration if applicant owns the business.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Confirm requirement for Schengen Short-Stay Type C Business Visa based on duration (<90 days within 180 days) and identify correct Italian consular jurisdiction in India.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Gather all verified documents including official Italian business invite (Lettera di invito), Visura Camerale, employer cover letter, insurance, and 6 months bank statements.'
    },
    {
      step: 3,
      title: 'Submit and Pay Fee',
      description: 'Book and attend appointment at VFS Global Italy Centre, submit physical dossier, record biometric data, and pay the 90 EUR consular fee plus VFS service fees.'
    },
    {
      step: 4,
      title: 'Receive Clearance',
      description: 'Track visa application via VFS portal and collect passport with stamped visa sticker upon consular decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Strict adherence to Schengen 90/180-day limitation. Main destination or primary point of stay must be Italy. Italian host company Visura Camerale must be recent (issued within 6 months).'
  }
};