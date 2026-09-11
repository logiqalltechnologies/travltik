export default {
  country: 'estonia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Ministry of Foreign Affairs of Estonia / Embassy of Estonia, New Delhi',
  channels: ['VFS Global Visa Application Centre', 'Embassy of Estonia, New Delhi'],
  externalServiceProvider: 'VFS Global',
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '80 EUR',
    vfsServiceFee: '24 EUR (INR equivalent)'
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
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per 180-day period'
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
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white background, meeting ICAO standard specification.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly completed online application form via the official Estonian Ministry of Foreign Affairs portal (visa.mfa.ee), printed and signed by the applicant.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Round-Trip Flight Itinerary',
      description: 'Confirmed round-trip flight reservations showing travel entry into and exit from the Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, rental agreement, or an officially registered invitation letter covering the entire duration of stay in Estonia.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Schengen-compliant travel insurance covering medical emergencies, hospitalization, and repatriation with a minimum coverage of 30,000 EUR for the entire duration of travel.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Personal Financial Proof',
      description: 'Original bank statements for the last 6 months certified and stamped by the bank, demonstrating sufficient funds (minimum 108 EUR per day of stay).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the preceding 3 financial years.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / Business Status',
      description: 'No Objection Certificate (NOC) and payslips for the last 3 months from employer; or business registration documents and company bank statements if self-employed.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Visa Form',
      description: 'Fill out the Schengen visa application form on the official Estonian Ministry of Foreign Affairs portal (visa.mfa.ee) and print the completed document.'
    },
    {
      step: 2,
      title: 'Book VFS Appointment',
      description: 'Schedule an appointment at the nearest VFS Global Visa Application Centre handling Estonia visa applications in India.'
    },
    {
      step: 3,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend the VFS application center to submit physical documents, pay the 80 EUR consular fee plus service fees, and complete biometric data collection.'
    },
    {
      step: 4,
      title: 'Passport Retrieval',
      description: 'Track the processing status online and collect the passport with the visa sticker from VFS or receive it via courier service upon decision.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies strictly across all member countries. Biometric collection (fingerprints and photo) is mandatory unless previously registered in the Visa Information System (VIS) within the last 59 months. Travel insurance must remain valid across all Schengen states.'
  }
};