export default {
  country: 'belarus',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Embassy of the Republic of Belarus in the Republic of India / Consulate General of the Republic of Belarus in Mumbai',
  channels: [
    'Embassy / Consulate (New Delhi / Mumbai)',
    'Prior appointment via email to Embassy/Consulate'
  ],
  processingTime: {
    eVisa: 'Not applicable for Work Visa',
    standardSticker: '5 working days',
    expressSticker: '2 working days (within 48 hours)'
  },
  fees: {
    eVisaTotal: 'Not applicable for Work Visa',
    stickerConsularStandard: 'EUR 60 (~₹ 5,500 - exact amount determined by consular officer)',
    stickerConsularExpress: 'EUR 120 (~₹ 11,000 - exact amount determined by consular officer)',
    vfsServiceFee: '₹0 (Embassy/Consulate does not charge additional service fees)'
  },
  eVisa: {
    available: false,
    portal: 'Not applicable for Work Visa',
    territorialScope: 'Not applicable for Work Visa',
    validity: 'Not applicable for Work Visa',
    maxStay: 'Not applicable for Work Visa',
    invitationRequired: false,
    processing: 'Not applicable for Work Visa'
  },
  stayDuration: {
    eVisa: 'Not applicable for Work Visa',
    stickerSingleDouble: 'Up to 90 days (Short-term Work Visa)',
    stickerMultiple: 'Up to 1 year or longer (Long-term Work Visa, renewable)'
  },
  entryType: 'Single / Double / Multiple Entry (depending on visa type and purpose)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months from the date of entry with a minimum of 2 blank pages. All old passports, if any, should also be submitted.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'One recent (not older than 6 months) color photograph, full face, with a light/white background.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'One duly completed visa application form, filled in block letters in English or Russian, and signed personally by the applicant.', icon: '📋', mandatory: true },
    { key: 'visa_support_documents', title: 'Visa Support Documents (Work Permit)', description: 'Original visa support documents. For a work visa, this includes a notarized copy of the special employment permit issued by the local Citizenship and Migration authority of Belarus, or official information confirming that such a permit has been issued. The employer in Belarus must initiate this process.', icon: '📄', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Original employment contract from the Belarusian employer.', icon: '💼', mandatory: true },
    { key: 'medical_insurance', title: 'Medical Insurance', description: 'Copy of medical insurance valid in Belarus with a minimum coverage of EUR 10,000. The territorial validity should include the Republic of Belarus.', icon: '🛡️', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Itinerary', description: 'Confirmed return flight booking or tickets to a third country.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Hotel booking confirmation on the letterhead of the hotel in Belarus, or scanned copies of a rental agreement if renting private apartments (including proof of ownership and registration certificate of the lessor).', icon: '🏨', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Bank statements for a period of not less than 3 months prior to the date of visa submission, or a pay slip from the workplace. Proof of monetary funds equivalent to at least US $600 for each month of stay, or US $25 for each day of stay if less than one month.', icon: '🏦', mandatory: true },
    { key: 'police_clearance', title: 'Police Clearance Certificate (PCC)', description: 'A Police Clearance Certificate may be required.', icon: '📜', mandatory: true },
    { key: 'educational_work_documents', title: 'Educational and Work Experience Documents', description: 'Educational certificates and work experience documents relevant to the job offer.', icon: '🎓', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Secure Employment and Work Permit', description: 'The Belarusian employer must first secure a genuine job offer and obtain a special employment permit from the local Citizenship and Migration authority.' },
    { step: 2, title: 'Book Visa Appointment', description: 'Send an email to the Embassy/Consulate to book a prior appointment for visa application submission. A personal interview is required.' },
    { step: 3, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents, including the work permit and employment contract.' },
    { step: 4, title: 'Submit Application and Pay Fee', description: 'Submit the application in person at the Embassy/Consulate. The consular officer will specify the exact INR amount for the visa fee, which must be deposited at an RBL Bank branch. The deposit slip must be brought back to the Embassy/Consulate on the same day.' },
    { step: 5, title: 'Receive Visa and Register on Arrival', description: 'Track the application. Upon receiving the visa and arriving in Belarus, register with the local citizenship and migration office of the Ministry of Interior within 10 business days. If staying in a hotel, the hotel will arrange this.' }
  ],
  specialRequirements: {
    entry_rules: 'A work permit must be obtained by the employer in Belarus before the visa application. Registration with the local citizenship and migration office is mandatory within 10 business days of arrival for stays exceeding 10 days. Foreign nationals transiting through Russia to Belarus require a Russian transit visa.'
  }
};