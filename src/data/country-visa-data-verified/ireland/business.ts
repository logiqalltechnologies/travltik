export default {
  country: 'ireland',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Immigration Service Delivery (ISD), Department of Justice, Ireland',
  channels: [
    'AVATS Online Portal',
    'VFS Global Ireland Visa Application Centre',
    'Embassy of Ireland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15-20 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€60 (Single Entry) / €100 (Multiple Entry)',
    vfsServiceFee: 'INR 2,210'
  },
  eVisa: {
    available: false,
    portal: 'https://www.visas.inis.gov.ie/avats/OnlineHome.aspx',
    territorialScope: 'Republic of Ireland',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per visit'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months after intended departure from Ireland, with at least 2 blank pages. Include previous passports if applicable.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within last 6 months) color passport photographs, 35x45mm with a white background, non-reflective glass, neutral expression.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'AVATS Online Application Summary Sheet',
      description: 'Printed and signed AVATS online application summary sheet following electronic form submission.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Applicant Cover Letter',
      description: 'Detailed signed letter stating purpose of business visit, dates of stay, details of hosting organization, and undertaking to observe visa conditions.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Indian Employer Support Letter',
      description: 'Official letter from current Indian employer confirming designation, employment duration, purpose of trip, and explicit confirmation of financial responsibility.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Irish Host Company Invitation Letter',
      description: 'Official letter on corporate letterhead from the host company in Ireland detailing the nature of business, stay dates, and confirmation of financial/accommodation responsibility if covered.',
      icon: 'mail',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements & ITR)',
      description: 'Original bank statements for the last 6 months certified by the bank, alongside ITR acknowledgment forms for the past 3 fiscal years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation showing entry and exit dates matching the requested visa duration.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations or official statement of accommodation coverage within the host invitation letter.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Travel Insurance',
      description: 'Travel medical insurance policy with minimum coverage of €30,000 for emergency medical expenses, valid for the duration of stay in Ireland.',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete AVATS Online Application',
      description: 'Access the official Ireland AVATS portal, complete the Short Stay "C" Business visa form, and print the summary sheet.'
    },
    {
      step: 2,
      title: 'Pay Fees and Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Ireland Visa Application Centre in India and pay consular/service fees.'
    },
    {
      step: 3,
      title: 'Attend Appointment and Provide Biometrics',
      description: 'Submit original physical documents, signed summary sheet, passport, and provide biometric data at VFS Global.'
    },
    {
      step: 4,
      title: 'Dossier Assessment and Passport Dispatch',
      description: 'Application is assessed by the Embassy of Ireland, New Delhi / ISD. Processed passport is returned via secure courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Ireland is not part of the Schengen Area; Schengen Visas are invalid for entry. Note that under the Short Stay Visa Waiver Scheme, certain UK C-visas may qualify for entry into Ireland, but primary business travel directly from India requires an Irish Short Stay "C" Business Visa.'
  }
};