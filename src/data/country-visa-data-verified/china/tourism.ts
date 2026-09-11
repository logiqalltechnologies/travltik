export default {
  country: 'china',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: "Embassy of the People's Republic of China in India / Chinese Visa Application Service Center (CVASC)",
  channels: ['https://www.visaforchina.cn/', 'Chinese Visa Application Service Center (CVASC)'],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '4 working days',
    expressSticker: '3 working days' // Refers to Express service
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: 'INR 2000', // Consular fee for single entry L visa for Indian citizens
    vfsServiceFee: 'INR 2000' // Regular service fee charged by CVASC
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
    stickerSingleDouble: 'Up to 30 days per entry', // Typical maximum stay per entry for L visa
    stickerMultiple: 'Up to 30 days per entry' // Typical maximum stay per entry for L visa
  },
  entryType: 'Single / Double / Multiple Entry', // China offers these options for L visa
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport valid for at least 6 months beyond the intended stay, with at least two blank visa pages. A photocopy of the passport\'s data page is also required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'One recent (within 6 months) color passport-sized photo (35x45mm) with a white background, front view, neutral expression, without head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed online visa application form printed from the Chinese Visa Application Service Center (CVASC) website, with signature.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Round-trip flight itinerary/booking confirmation showing entry and exit dates for China.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel reservations for the entire duration of stay in China, OR an invitation letter from a relevant entity or individual in China (including inviter\'s details, relationship, travel dates, itinerary, and copy of inviter\'s ID).', icon: '🏨', mandatory: true },
    { key: 'previous_visas', title: 'Photocopies of Previous Chinese Visas', description: 'Photocopies of any previous Chinese visas and entry/exit stamps (if applicable).', icon: '📜', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Complete Online Application Form', description: 'Fill out the visa application form accurately on the Chinese Visa Application Service Center (CVASC) website (www.visaforchina.cn) and print it out.' },
    { step: 2, title: 'Book an Appointment', description: 'Schedule an appointment online through the CVASC website for submission of documents and biometrics at your nearest CVASC.' },
    { step: 3, title: 'Prepare Documents', description: 'Gather all required documents as per the checklist provided by CVASC for a Tourist (L) visa, ensuring all photocopies are clear.' },
    { step: 4, title: 'Submit Application and Biometrics', description: 'Visit the chosen CVASC in person on your appointment date to submit your application, provide fingerprints, and other biometric data. All applicants are required to submit in person.' },
    { step: 5, title: 'Pay Fees', description: 'Pay the consular fee and CVASC service fee at the center. Payment methods may vary by center.' },
    { step: 6, title: 'Collect Passport', description: 'Collect your passport with the visa from the CVASC once the application is processed, either in person or via courier service (if opted and available).' }
  ],
  specialRequirements: {
    entry_rules: 'All applicants are required to submit their applications in person at the Chinese Visa Application Service Center (CVASC) and have their fingerprints collected. Applicants must apply at the CVASC within their designated consular jurisdiction.'
  }
};