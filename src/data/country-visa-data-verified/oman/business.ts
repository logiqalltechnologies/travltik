export default {
  country: 'oman',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Royal Oman Police (ROP) Directorate General of Passports & Civil Status',
  channels: [
    'https://evisa.rop.gov.om',
    'Embassy of the Sultanate of Oman, New Delhi',
    'Authorized Oman Visa Processing Centers / Agencies'
  ],
  processingTime: {
    eVisa: '3-5 working days',
    standardSticker: '5-7 working days',
    expressSticker: '2-3 working days'
  },
  fees: {
    eVisaTotal: '20 OMR (approx. ₹4,350)',
    stickerConsularStandard: '20 OMR (approx. ₹4,350)',
    vfsServiceFee: '₹1,500 (if processed through authorized service agent)'
  },
  eVisa: {
    available: true,
    portal: 'https://evisa.rop.gov.om',
    territorialScope: 'Nationwide',
    validity: '3 months from date of issue',
    maxStay: '30 days',
    invitationRequired: true,
    processing: '3-5 working days'
  },
  stayDuration: {
    eVisa: '30 days',
    stickerSingleDouble: '30 days',
    stickerMultiple: '30 days per visit (valid for 1 year)'
  },
  entryType: 'Single / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months from the intended date of arrival in Oman, with at least 2 blank pages.',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size color photographs (35x45mm) on a white background, taken within the last 6 months, neutral expression, without headgear unless worn for religious reasons.',
      icon: '📸',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Completed and signed Royal Oman Police online application form printout or eVisa confirmation form.',
      icon: '📋',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Invitation Letter from Omani Sponsor/Company',
      description: 'Official invitation letter from the host Omani company detailing the nature of business, duration of stay, and guaranteeing financial responsibility. Must include the Omani Commercial Registration (CR) number and Chamber of Commerce registration (Computer Paper).',
      icon: '🏢',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Employer Covering Letter',
      description: 'Official letter from the Indian employer on company letterhead stating the applicant’s designation, purpose of travel, itinerary, and confirming financial coverage for the trip.',
      icon: '✉️',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip or onward flight tickets demonstrating entry and exit dates from Oman.',
      icon: '✈️',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel booking or official guarantee of accommodation provided by the inviter in Oman.',
      icon: '🏨',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Valid travel insurance policy covering emergency medical treatments, hospitalization, and repatriation expenses for the entire duration of stay in Oman.',
      icon: '🛡️',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Original bank statements of the Indian company or personal applicant account for the last 6 months, stamped and signed by the bank, demonstrating sufficient funds.',
      icon: '🏦',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain Omani Invitation Documents',
      description: 'Secure an official business invitation letter along with copies of the host company’s Commercial Registration (CR) certificate and Chamber of Commerce card from your Omani partner.'
    },
    {
      step: 2,
      title: 'Fill Online Application',
      description: 'Visit the official Royal Oman Police eVisa portal (evisa.rop.gov.om), select the appropriate Business eVisa category (or Sponsor-backed visa type), and complete the online application.'
    },
    {
      step: 3,
      title: 'Upload Supporting Documents',
      description: 'Upload high-resolution scans of the applicant’s passport, 35x45mm photo, Indian employer cover letter, and host invitation documentation.'
    },
    {
      step: 4,
      title: 'Pay Visa Fees',
      description: 'Pay the statutory visa application fee (20 OMR) using a international credit or debit card online.'
    },
    {
      step: 5,
      title: 'Receive Approved eVisa',
      description: 'Track application status online. Once approved (typically within 3-5 working days), download and print the official Oman eVisa notification document.'
    },
    {
      step: 6,
      title: 'Travel and Entry',
      description: 'Present the printed eVisa document, original passport, host contact details, and travel health insurance upon arrival at Oman immigration checkpoints.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Visitors entering on a Business Visa must strictly engage only in non-remunerated business activities (meetings, negotiations, site visits). Gainful employment or receiving local wages under a Business Visa is strictly prohibited. Extensions beyond 30 days require local sponsor assistance via the ROP counter before visa expiration.'
  }
};