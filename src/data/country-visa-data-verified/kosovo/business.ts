export default {
  country: 'kosovo',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs and Diaspora of the Republic of Kosovo',
  channels: ['Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 working days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '40 EUR',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Nationwide',
    validity: 'Up to 90 days',
    maxStay: '90 days within 180 days',
    invitationRequired: true,
    processing: '15 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'Up to 90 days',
    stickerMultiple: 'Up to 90 days'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 6 months beyond intended stay with minimum 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs, 35x45mm size, white background, neutral expression',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Visa Application Form',
      description: 'Completed and signed Kosovo visa application form',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Business Invitation Letter',
      description: 'Invitation letter from the host entity in Kosovo, indicating company registration details and purpose of visit',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Employer Cover Letter',
      description: 'Official letter from the Indian company detailing applicant profile, purpose of trip, and guarantee of expenses',
      icon: 'document',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations showing entry and exit from Kosovo',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservation or guarantee of accommodation from host in Kosovo',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Medical Insurance',
      description: 'Medical coverage minimum of EUR 30,000 valid in Kosovo for the entire stay',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof',
      description: 'Personal bank statements for the last 6 months along with Income Tax Returns (ITR)',
      icon: 'bank',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Application Online',
      description: 'Complete the visa application form on the official MFA Kosovo Visa portal'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Assemble mandatory documents including business invitation letter, company NOC, and financial records'
    },
    {
      step: 3,
      title: 'Submit Application & Pay Fee',
      description: 'Submit dossier and pay the 40 EUR consular fee at the designated Kosovo Embassy/Consulate accredited for India'
    },
    {
      step: 4,
      title: 'Visa Processing & Passport Collection',
      description: 'Track application status and collect passport with entry visa sticker upon approval'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a valid multiple-entry Schengen visa or residence permit from a Schengen member state are exempt from visa requirements for stays up to 90 days within a 180-day period.'
  }
};