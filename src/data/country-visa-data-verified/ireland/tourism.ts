export default {
  country: 'ireland',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Immigration Service Delivery (ISD), Department of Justice, Ireland',
  channels: [
    'AVATS Online Portal',
    'VFS Global Visa Application Centre',
    'Embassy of Ireland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (AVATS form online, physical sticker required)',
    standardSticker: '20 to 40 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€60 (Single Entry) / €100 (Multiple Entry)',
    vfsServiceFee: 'INR 2,470'
  },
  eVisa: {
    available: false,
    portal: 'https://www.visas.inis.gov.ie/avats/OnlineHome.aspx',
    territorialScope: 'Republic of Ireland',
    validity: 'Up to 90 days',
    maxStay: '90 days',
    invitationRequired: false,
    processing: '20 to 40 working days'
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
      description: 'Original passport valid for at least 6 months beyond the intended departure date from Ireland, with at least 2 blank pages, plus full colour copies of all previous passports and visas.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two identical recent passport-sized photographs (35x45mm) on a plain white background, taken within the last 6 months, matching Irish visa photograph guidelines.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'AVATS Online Application Summary Sheet',
      description: 'Signed AVATS online application summary printout generated after completing the online form, including the transaction fee receipt.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Signed Cover Letter',
      description: 'Detailed cover letter signed and dated by the applicant detailing travel purpose, dates, accommodation details, and full commitment to leave Ireland prior to visa expiry.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation or detailed travel itinerary. (Do not purchase actual non-refundable tickets prior to visa decision).',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of stay in Ireland or host invitation letter with proof of host status.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Comprehensive Travel Medical Insurance',
      description: 'Travel health insurance policy covering emergency medical expenses and repatriation for the duration of stay, valid in Ireland.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Original stamped bank statements for the last 6 consecutive months demonstrating clear proof of sufficient funds, accompanied by Indian Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'noc_letter',
      title: 'Employment Proof / NOC Letter',
      description: 'Original letter from current employer stating position, salary, approved leave dates, and confirmation of return to work. For self-employed, provide company registration and GST certificates.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete AVATS Application',
      description: 'Fill out the official Irish visa application online via the AVATS portal, download the summary sheet, and pay the visa fee online.'
    },
    {
      step: 2,
      title: 'Book VFS Global Appointment',
      description: 'Schedule an in-person appointment at the nearest VFS Global Ireland Visa Application Centre in India to submit physical documents and biometrics.'
    },
    {
      step: 3,
      title: 'Submit Dossier and Biometrics',
      description: 'Attend the VFS centre to submit your physical application bundle, valid original passport, and enrol biometric identifiers.'
    },
    {
      step: 4,
      title: 'Track Application & Receive Passport',
      description: 'Track processing progress online. Once adjudicated by the Embassy of Ireland, collect your passport containing the visa sticker from VFS or via courier.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Ireland is NOT part of the Schengen Area. Schengen visas are not valid for entry to Ireland. Indian nationals traveling on a standard tourist visa must obtain a dedicated Short Stay C Irish Visa. Under the British-Irish Visa Scheme (BIVS), travelers with an eligible UK visitor visa endorsed with "BIVS" may visit Ireland after first clearing UK border control, but direct travel from India to Ireland requires an Irish visa.'
  }
};