export default {
  country: 'latvia',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of Latvia in New Delhi / Office of Citizenship and Migration Affairs (OCMA)',
  channels: ['VFS Global', 'Embassy / Consulate'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 calendar days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: '25 EUR (approx. ₹2,250)'
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
    stickerSingleDouble: 'Up to 90 days within a 180-day period',
    stickerMultiple: 'Up to 90 days within a 180-day period'
  },
  entryType: 'Single / Double / Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport issued within the last 10 years, valid for at least 3 months beyond the intended departure date from the Schengen territory, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-sized color photos (35x45mm) taken within the last 6 months on a plain white background, 80% face coverage, without borders or edits.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Latvian Electronic Visa Application Form',
      description: 'Completed and submitted online via the official Latvian PMLP portal (visa.pmlp.gov.lv), printed, dated, and physically signed by the applicant.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservations showing entry and exit dates from the Schengen Area.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations, tour vouchers, or rental agreements covering the total duration of stay across all Schengen destinations.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'Medical insurance policy valid for all Schengen states with minimum coverage of €30,000 including emergency medical treatment, hospital care, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof (Bank Statements)',
      description: 'Original bank account statements for the last 6 months, stamped and signed by the issuing bank branch, reflecting sufficient daily funds (minimum €14/day with prepaid lodging or €70/day without).',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr',
      title: 'Income Tax Returns (ITR)',
      description: 'Income Tax Returns (ITR-V) or Form 16 for the last 3 assessment years.',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'employment_proof',
      title: 'Proof of Employment / NOC',
      description: 'Employment contract, salary slips for the last 3 months, and an approved leave letter/NOC from employer. For self-employed: Business registration documents and GST returns.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Personal Cover Letter',
      description: 'Signed cover letter outlining travel dates, purpose of visit, trip itinerary, and breakdown of travel expenses.',
      icon: 'file',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Fill Online Application Form',
      description: 'Complete the official electronic Schengen visa form on the Latvian PMLP Portal (visa.pmlp.gov.lv), submit it electronically, and print out the completed form.'
    },
    {
      step: 2,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule an appointment at the designated VFS Global Latvia Visa Application Centre in India.'
    },
    {
      step: 3,
      title: 'Submit Application & Biometrics',
      description: 'Attend your appointment in person to submit the signed form, original passport, supporting documents, pay the visa and service fees, and record biometric data.'
    },
    {
      step: 4,
      title: 'Track Dossier & Passport Retrieval',
      description: 'Monitor your visa application status online via VFS Global and collect your passport upon processing completion.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Schengen 90/180-day limitation strictly applies. Applicants must hold a minimum financial subsistence equivalent to €14 per day of stay if accommodation is pre-booked, or €70 per day if unbooked. Travel insurance must cover full duration of stay throughout the Schengen area.'
  }
};