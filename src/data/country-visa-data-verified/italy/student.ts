export default {
  country: 'italy',
  fromCountry: 'India',
  visaCategory: 'Student Visa',
  authority: 'Ministry of Foreign Affairs and International Cooperation (MAECI) / Embassy of Italy in India',
  channels: [
    'Universitaly Portal (Pre-enrollment)',
    'VFS Global Italy Visa Application Centre',
    'Embassy of Italy, New Delhi / Consulate General in Mumbai & Kolkata'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '15 to 90 days',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '50 EUR (approx. INR 4,500 for National Long-Stay Type D Study Visa)',
    vfsServiceFee: 'INR 1,200 - INR 1,800 (varies by VFS centre location)'
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
    stickerSingleDouble: 'Up to 90 days (Short Stay / Language Course Type C)',
    stickerMultiple: '365 days (National Visa Type D, renewable in Italy)'
  },
  entryType: 'Multiple Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 3 months beyond the intended stay/visa validity, issued within the last 10 years, with at least 2 blank pages.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent passport-size photographs (35x45mm), sharp focus, white background, neutral expression, taken within the last 6 months.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'National Visa Application Form (Type D)',
      description: 'Duly filled and signed National (Type D) Visa Application Form for stays exceeding 90 days.',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'universitaly_summary',
      title: 'Universitaly Summary Sheet',
      description: 'Printed Summary of the Pre-enrollment application validated by the Italian University/Institution via the Universitaly portal.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'academic_qualifications',
      title: 'Academic Certificates & Qualification Verification',
      description: 'Apostilled educational qualifications (Degree/Diploma certificates, transcripts) along with CIMEA Statement of Comparability / Verification or Dichiarazione di Valore (DoV) issued by the Italian diplomatic mission.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'financial_proof',
      title: 'Proof of Financial Means',
      description: 'Documentation demonstrating personal or parental financial coverage (minimum ~€6,947.33 per academic year / €534.41 per month based on current Italian social allowance). Acceptable: Sanctioned Education Loan, personal bank account statements (last 6 months with official bank seal), or official Italian/European scholarship award letter.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed university dormitory booking, official lease agreement, or Declaration of Hospitality (Dichiarazione di Ospitalità) signed by an Italian resident along with host ID/permit copy for at least 30 days.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Reservation',
      description: 'Round-trip or one-way flight itinerary showing student travel dates to Italy.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Travel Health Insurance',
      description: 'International health insurance covering minimum €30,000 for urgent medical expenses and repatriation for the initial period before registering with the Italian National Health Service (SSN).',
      icon: 'insurance',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Universitaly Pre-Enrollment & Academic Credential Verification',
      description: 'Complete pre-enrollment on the Universitaly portal, select the degree program, and obtain CIMEA verification or Dichiarazione di Valore (DoV) for Indian educational credentials.'
    },
    {
      step: 2,
      title: 'Document Preparation & Financial Assembly',
      description: 'Assemble mandatory documents including education loan sanction letter / bank statements (last 6 months), validated Universitaly summary sheet, proof of accommodation, and health insurance.'
    },
    {
      step: 3,
      title: 'Book Appointment & Submit Dossier at VFS Global',
      description: 'Schedule an appointment at the designated VFS Italy Application Centre, present the complete physical application dossier, provide biometric data, and pay the 50 EUR consular fee and VFS service charge.'
    },
    {
      step: 4,
      title: 'Consular Assessment & Visa Issuance',
      description: 'Track the application status while the Italian Embassy/Consulate reviews the dossier. Receive the passport with National Visa Type D sticker.'
    },
    {
      step: 5,
      title: 'Post-Arrival Permesso di Soggiorno Application',
      description: 'Within 8 working days of entering Italy, purchase a "Marca da Bollo" (duty stamp) and submit the Residence Permit kit (Permesso di Soggiorno per studio) at an authorized Sportello Amico Post Office.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Holders of a National Type D Student Visa must apply for an Italian Residence Permit (Permesso di Soggiorno per motivi di studio) at an authorized Italian Post Office (Poste Italiane - Sportello Amico) within 8 working days of initial entry into Italy. Retain all post office deposit receipts as proof of legal residence until the physical residence card is issued.'
  }
};