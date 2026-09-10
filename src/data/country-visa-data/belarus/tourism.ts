export default {
  country: 'belarus',
  fromCountry: 'India',
  visaCategory: 'Tourist Visa',
  authority: 'Embassy of the Republic of Belarus in the Republic of India / Ministry of Foreign Affairs of the Republic of Belarus',
  channels: [
    'Official eVisa Portal (e-pasluga.by)',
    'Embassy of the Republic of Belarus in New Delhi'
  ],
  processingTime: {
    eVisa: '7 calendar days',
    standardSticker: '5 business days',
    expressSticker: 'Within 48 hours (usually next working day)'
  },
  fees: {
    eVisaTotal: 'EUR 66 (~₹5940)', // EUR 60 consular + EUR 6 service fee
    stickerConsularStandard: 'EUR 60 (~₹5400)', //
    vfsServiceFee: 'Not applicable (apply directly via Embassy or eVisa portal)'
  },
  eVisa: {
    available: true,
    portal: 'https://e-pasluga.by', //
    territorialScope: 'Nationwide (all international airports, land, and rail border crossings)', //
    validity: 'Up to 30 days from issue', //
    maxStay: '30 days per stay', //
    invitationRequired: false, // Not explicitly mentioned as mandatory for tourism eVisa.
    processing: '7 calendar days' //
  },
  stayDuration: {
    eVisa: 'Up to 30 days', //
    stickerSingleDouble: 'Up to 90 days', // For short-term tourist visa
    stickerMultiple: 'Up to 90 days per stay (for short-term multiple entry)' //
  },
  entryType: 'Single / Double / Multiple Entry (for sticker visa); Single Entry (for eVisa)', //
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months from the date of entry with a minimum of 2 blank pages. Old passports, if any, should also be submitted.', icon: '📘', mandatory: true }, //
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'Two recent (not older than 6 months) color photographs with a white background, full face visible.', icon: '📸', mandatory: true }, //
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed and personally signed visa application form (filled in block letters in English or Russian).', icon: '📋', mandatory: true }, //
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking/tickets.', icon: '✈️', mandatory: true }, //
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel booking on the letterhead of the hotel in Belarus or an invitation letter if staying with a host.', icon: '🏨', mandatory: true }, //
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Medical insurance policy valid in Belarus for the entire duration of stay, with a minimum coverage of EUR 10,000. The territorial validity should include the Republic of Belarus.', icon: '🛡️', mandatory: true }, //
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements (stamped and updated for the last 3 months with bank seal) showing sufficient funds (at least US $25 or EUR 25 per day of stay, or US $600 per month). Pay slips from work are also acceptable. Debit/credit cards may be considered with a bank statement issued not later than 10 days before arrival.', icon: '🏦', mandatory: true }, //
    { key: 'invitation_letter_tourism', title: 'Invitation from Tourist Organization (for Sticker Visa)', description: 'Original invitation from a registered tourist organization in Belarus with a tourist voucher, specifying exact dates and cities (mandatory for sticker visa applications).', icon: '✉️', mandatory: true } //
  ],
  steps: [
    { step: 1, title: 'Choose Visa Route', description: 'Determine whether to apply for an eVisa online or a sticker visa at the Embassy based on eligibility and travel plans.' }, //
    { step: 2, title: 'Prepare Documentation', description: 'Assemble all mandatory verified documents as per the chosen visa type (eVisa or sticker visa).' }, //
    { step: 3, title: 'Submit Application & Pay Fee', description: 'For eVisa, apply online and pay the fee. For sticker visa, book an appointment via email (india.consul@mfa.gov.by) and submit documents at the Embassy, paying the statutory consular fees at the designated bank.' }, //
    { step: 4, title: 'Receive Clearance', description: 'Track your application status. Once approved, download and print the eVisa or collect your passport with the visa stamp from the Embassy.' } //
  ],
  specialRequirements: {
    entry_rules: '1. **Registration:** Foreign nationals staying more than 10 calendar days must register with local authorities. If staying in a hotel, the hotel handles this automatically.\n2. **Financial Proof at Entry:** Border officers may request proof of sufficient funds (US $25 or EUR 25 per day, or US $600 per month) upon arrival.\n3. **Transit via Russia:** If transiting through the Russian Federation (including any air flight), a Russian transit visa is required.\n4. **Visa-Free Entry (Conditional):** Indian nationals can enter Belarus visa-free for up to 30 days *only* via Minsk National Airport if they possess a valid, used multiple-entry EU or Schengen visa, have return tickets, sufficient funds, and medical insurance. This visa-free regime does NOT apply if arriving from or departing to the Russian Federation.\n5. **Embassy Appointment:** Starting October 7, 2024, all visa applications at the Embassy require a prior appointment booked via email (india.consul@mfa.gov.by).'
  }
};