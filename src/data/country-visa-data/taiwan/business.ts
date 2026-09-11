export default {
  country: 'taiwan',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Taipei Economic and Cultural Center (TECC) in India',
  channels: [
    'https://visawebapp.boca.gov.tw/', // Online application form portal
    'Embassy Direct (Taipei Economic and Cultural Center in India)'
  ],
  processingTime: {
    eVisa: 'N/A', // Not a true e-Visa for Indian business travelers
    standardSticker: '5 working days',
    expressSticker: '2 working days'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 3,300 (Single Entry) / INR 6,600 (Multiple Entry)',
    stickerConsularExpress: 'INR 4,950 (Single Entry) / INR 9,900 (Multiple Entry)', // 50% extra for express processing
    vfsServiceFee: 'N/A' // Applications are typically submitted directly to TECC
  },
  eVisa: {
    available: false, // Online system is for form filling, not e-visa issuance for Indians
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: false, // Not applicable for e-Visa
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days per entry (within overall visa validity)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond the intended stay, with a minimum of two blank pages for visa stamping. Include copies of all used pages and the biodata page.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within the last 6 months) passport-sized (3.5 x 4.5 cm) color photographs with a white background, showing a full face, front view, and neutral expression. No glasses or head coverings (unless for religious reasons).',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed online visa application form (available at https://visawebapp.boca.gov.tw/), printed, and signed by the applicant. Ensure all information is accurate and matches passport details.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight itinerary showing entry and exit dates from Taiwan.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking for the entire duration of stay in Taiwan, or a letter from the inviting Taiwanese company stating accommodation arrangements.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Insurance',
      description: 'Travel insurance policy covering the entire duration of stay in Taiwan. While not always strictly mandatory for short-term visitor visas, it is highly recommended for medical emergencies and unforeseen events.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements for the last 3-6 months, showing sufficient funds to cover all expenses during the stay in Taiwan. Must be stamped and signed by the bank.',
      icon: '🏦',
      mandatory: true
    },
    {
      key: 'invitation_letter_taiwan',
      title: 'Invitation Letter from Taiwan Company',
      description: 'Original invitation letter from the inviting company in Taiwan, on company letterhead. It must clearly state the purpose of the visit, proposed duration, and guarantee of expenses and the applicant\'s return to India.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'company_letter_india',
      title: 'Letter from Indian Company',
      description: 'Original letter from the applicant\'s Indian employer/company, on company letterhead. It should state the applicant\'s position, purpose of visit, duration of stay, and guarantee of expenses and the applicant\'s return to India.',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'company_registration_taiwan',
      title: 'Taiwan Company Registration',
      description: 'Copy of the business registration certificate of the inviting company in Taiwan.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'company_registration_india',
      title: 'Indian Company Registration',
      description: 'Copy of the business registration certificate of the applicant\'s Indian company.',
      icon: '📄',
      mandatory: true
    },
    {
      key: 'business_card',
      title: 'Business Card',
      description: 'Applicant\'s business card.',
      icon: '📇',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Employment Proof',
      description: 'Employment certificate or last 3 months\' salary slips from the Indian employer.',
      icon: '💼',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Complete Online Application Form',
      description: 'Visit the official Bureau of Consular Affairs (BOCA) website (https://visawebapp.boca.gov.tw/) to fill out the visa application form. Print the completed form and sign it.'
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      description: 'Collect all mandatory documents as per the checklist, ensuring they are original where specified and copies are clear. Organize them in the required order.'
    },
    {
      step: 3,
      title: 'Pay Visa Fee',
      description: 'Prepare the visa fee in Indian Rupees (INR) as specified. The fee is typically paid at the Taipei Economic and Cultural Center (TECC) office during application submission.'
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit the printed application form along with all supporting documents (originals and copies) and the visa fee to the Taipei Economic and Cultural Center (TECC) in New Delhi or Chennai during their designated submission hours.'
    },
    {
      step: 5,
      title: 'Collect Visa',
      description: 'Once the visa is processed, collect your passport with the affixed visa sticker from the TECC office during their specified collection hours. Check all details on the visa sticker for accuracy.'
    }
  ],
  specialRequirements: {
    entry_rules: 'All visitors must adhere to Taiwan\'s immigration laws and regulations. Overstaying a visa is strictly prohibited and can result in fines, deportation, and future entry bans. Ensure all documents are in English or accompanied by certified English translations.'
  }
};