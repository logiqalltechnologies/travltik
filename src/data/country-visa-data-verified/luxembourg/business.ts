export default {
  country: 'luxembourg',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Ministry of Foreign and European Affairs, Luxembourg / Embassy of the Grand Duchy of Luxembourg in New Delhi',
  channels: [
    'VFS Global Luxembourg Visa Application Centre',
    'Embassy of the Grand Duchy of Luxembourg in New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A (Schengen Short-Stay Visa requires physical biometrics)',
    standardSticker: '15 calendar days',
    expressSticker: 'Up to 45 calendar days if detailed examination is required'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'EUR 90 (Approx. ₹8,100)',
    vfsServiceFee: 'INR 2,070 (inclusive of GST)'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'Schengen Area',
    validity: 'N/A',
    maxStay: 'N/A',
    invitationRequired: true,
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
      description: 'Original passport valid for at least 3 months beyond intended departure from Schengen area, with at least 2 blank pages, issued within the last 10 years.',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two recent (taken within 6 months) color passport photos, size 35x45mm, white background, 70-80% face coverage, no headgear except religious reasons.',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'Schengen Visa Application Form',
      description: 'Duly filled and signed Schengen visa application form (signed by applicant in all designated places).',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'business_invitation',
      title: 'Official Business Invitation Letter',
      description: 'Invitation letter from the host company in Luxembourg stating the exact purpose, duration of stay, itinerary, and who bears the travel/living costs.',
      icon: 'file-text',
      mandatory: true
    },
    {
      key: 'employer_cover_letter',
      title: 'Employer Cover Letter & NOC',
      description: 'Covering letter on Indian company letterhead detailing position, tenure, purpose of travel, business contact in Luxembourg, and confirmation of leave.',
      icon: 'briefcase',
      mandatory: true
    },
    {
      key: 'flight_booking',
      title: 'Flight Itinerary',
      description: 'Confirmed round-trip flight reservation or detailed travel itinerary showing dates of entry and exit from Schengen territory.',
      icon: 'flight',
      mandatory: true
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Confirmed hotel reservations covering the entire duration of stay in Luxembourg/Schengen area or declaration of accommodation by host company.',
      icon: 'hotel',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Schengen Travel Health Insurance',
      description: 'Medical insurance policy covering entire Schengen zone with minimum coverage of EUR 30,000 for emergency medical expenses, hospitalization, and repatriation.',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Personal & Business Bank Statements',
      description: 'Original personal bank statements for the last 6 months stamped/signed by the bank. Company bank statements if company is funding the trip.',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'itr_returns',
      title: 'Income Tax Returns (ITR)',
      description: 'Personal Income Tax Returns (ITR-V) or Form 16 for the last 3 financial years.',
      icon: 'file-check',
      mandatory: true
    },
    {
      key: 'company_registration',
      title: 'Proof of Indian Entity Registration',
      description: 'Certificate of Incorporation, GST Registration, or Partnership Deed of the Indian employer/sending company.',
      icon: 'building',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Prepare Documentation & Business Invitation',
      description: 'Obtain official business invitation letter from Luxembourg counterpart and assemble required company, financial, and personal travel documents.'
    },
    {
      step: 2,
      title: 'Complete Schengen Visa Application Form',
      description: 'Fill out the official Schengen Visa application form accurately with details matching supporting documents.'
    },
    {
      step: 3,
      title: 'Book Appointment at VFS Global',
      description: 'Schedule a biometric and document submission appointment at the nearest VFS Global Luxembourg Visa Application Centre in India.'
    },
    {
      step: 4,
      title: 'Attend VFS Appointment & Pay Fees',
      description: 'Submit physical documents, pay the 90 EUR consular fee plus VFS service fees, and complete biometric enrollment (fingerprints and photo).'
    },
    {
      step: 5,
      title: 'Visa Processing & Passport Collection',
      description: 'Track application status online. Collect passport with visa sticker via courier or in-person at VFS Centre upon completion of processing.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Subject to Schengen 90/180-day rule. First point of entry should ideally be Luxembourg or the primary business activities must be conducted in Luxembourg. Biometric data is valid for 59 months for subsequent Schengen visa applications. Travel health insurance must explicitly cover COVID-19 and repatriation costs.'
  }
};