export default {
  country: 'finland',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry for Foreign Affairs of Finland / Embassy of Finland, New Delhi',
  channels: ['Official Portal', 'VFS Global', 'Embassy of Finland'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '33 EUR'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
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
      description: 'Original passport valid for at least 3 months beyond the intended date of departure from the Schengen area, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs (35x45mm) taken within the last 6 months against a plain white or light grey background, showing full face without headgear.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Application Form',
      description: 'Duly completed and signed Schengen visa application form completed via the official online portal or printed.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Invitation Letter',
      description: 'Signed invitation letter from the Finnish host company stating the precise nature, duration, and schedule of the business activities, contact details, and who will cover travel/accommodation expenses.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Employer Covering / Dispatch Letter',
      description: 'Original letter on Indian company letterhead detailing the applicant\'s position, salary, length of employment, purpose of travel, and confirmation of financial responsibility for the trip.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservation/itinerary showing entry into and exit from Finland and the Schengen area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking confirmation, voucher, or formal commitment of host accommodation covering the entire stay in Finland.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Compliant Schengen medical insurance policy with a minimum coverage of EUR 30,000 for emergency medical treatment and repatriation, valid across all Schengen member states for the entire trip duration.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Original bank statements for the past 3 to 6 months stamped and signed by the bank, demonstrating sufficient funds (minimum EUR 50/day if self-funded), along with Income Tax Returns (ITR-V) for the last 3 years.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'business_registration',
      title: 'Proof of Business Entity',
      description: 'Certificate of Incorporation, GST registration, or Partnership Deed of the Indian employer/sending company.',
      icon: 'building',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Check Visa Eligibility',
      description: 'Verify travel dates, purpose of visit (Business Visa - Short Stay Type C), and mandatory requirements.'
    },
    {
      step: 2,
      title: 'Prepare Documentation',
      description: 'Obtain the official Finnish invitation letter, employer dispatch letter, travel insurance (€30,000 coverage), bank statements, and confirmed itineraries.'
    },
    {
      step: 3,
      title: 'Complete Online Application & Book Appointment',
      description: 'Fill out the Schengen visa application form on the official Finland visa platform and schedule an appointment at the nearest VFS Global centre in India.'
    },
    {
      step: 4,
      title: 'Submit Dossier and Pay Fees',
      description: 'Attend the VFS Global appointment to submit physical documents, provide biometric data (fingerprints and photo), and pay the €90 consular fee plus service fees.'
    },
    {
      step: 5,
      title: 'Receive Visa Clearance',
      description: 'Track the application status online and collect the passport with the Schengen sticker visa upon approval.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180 rule applies strictly across member states. Passport must be valid for at least 3 months beyond the intended departure date from the Schengen Area. Travel medical insurance with minimum coverage of €30,000 is legally required.'
  }
};