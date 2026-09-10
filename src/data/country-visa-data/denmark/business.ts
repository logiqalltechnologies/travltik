export default {
  country: 'denmark',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign Affairs of Denmark / Royal Danish Embassy, New Delhi',
  channels: ['ApplyVisa MFA Portal', 'VFS Global Application Centre', 'Royal Danish Embassy'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '1680 INR'
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
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended departure from the Schengen area, issued within the last 10 years, with at least 2 consecutive blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent color photographs meeting Schengen standards: 35x45mm, white background, neutral expression, 70-80% face coverage, taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'ApplyVisa Cover Letter & Receipt',
      description: 'Signed cover letter and payment receipt generated after filling out the official online visa application form on the Danish MFA ApplyVisa portal.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'invitation_letter',
      title: 'Official Danish Business Invitation (VU1 Form)',
      description: 'Official invitation from the host company in Denmark, registered online via VU1 ID or issued on company letterhead stating purpose, exact dates, itinerary, and financial sponsorship details.',
      icon: 'envelope',
      mandatory: true
    },
    {
      key: 'employer_letter',
      title: 'Cover Letter from Indian Employer',
      description: 'Official letter from the Indian company on letterhead stating applicant’s role, salary, employment duration, purpose of visit, and confirming financial responsibility for the trip.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Round-trip flight reservations showing entry and exit dates for the Schengen zone matching the travel dates.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations for the duration of stay or confirmation of accommodation arrangements provided by the Danish inviting company.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Medical Insurance',
      description: 'Insurance policy valid for all Schengen countries with minimum medical coverage of €30,000, including emergency hospital treatment and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & ITR',
      description: 'Personal bank statements for the last 6 months signed/stamped by the bank, along with Income Tax Returns (ITR V) for the last 3 assessment years and salary slips for the last 3-6 months.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'company_proof',
      title: 'Indian Company Incorporation & Business Proof',
      description: 'Certificate of Incorporation/GST Registration of the Indian employer, and prior correspondence or contracts proving existing trade/business relations if applicable.',
      icon: 'briefcase',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Online Application & Pay Fee',
      description: 'Complete the Schengen business visa application on the official Danish Ministry of Foreign Affairs portal (ApplyVisa.um.dk) and pay the 90 EUR consular fee.'
    },
    {
      step: 2,
      title: 'Obtain Official VU1 Business Invitation',
      description: 'Ensure the host organisation in Denmark completes and registers the VU1 online invitation form or provides an official signed business invitation letter.'
    },
    {
      step: 3,
      title: 'Book VFS Global Appointment',
      description: 'Schedule an appointment at a VFS Global Denmark Visa Application Centre in India for biometrics and document submission.'
    },
    {
      step: 4,
      title: 'Attend Appointment & Submit Biometrics',
      description: 'Present the printed ApplyVisa cover letter, receipt, and mandatory documents at VFS Global. Pay the local VFS service fee and provide biometric data (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Track Application & Passport Collection',
      description: 'Monitor application status online via VFS Global tracking. Receive processed passport containing the Schengen sticker via courier or collect in person.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-Day Rule applies strictly: Maximum 90 days stay in any 180-day window across the Schengen Area. Biometric collection (VIS) is mandatory unless biometrics were captured for a Schengen visa within the preceding 59 months. Insurance must cover emergency repatriation and COVID-19 medical treatment.'
  }
};