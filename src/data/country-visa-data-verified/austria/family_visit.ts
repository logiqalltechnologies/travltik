export default {
  country: 'austria',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Embassy of Austria in New Delhi / VFS Global',
  channels: [
    'VFS Global Official Portal (for application form and appointment booking)',
    'VFS Global Application Centre (New Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, and other cities)',
    'Embassy of Austria / Consulates in India'
  ],
  processingTime: {
    eVisa: 'Not applicable',
    standardSticker: '15 working days (can extend up to 45 days in exceptional cases)',
    expressSticker: 'Not available'
  },
  fees: {
    eVisaTotal: 'Not applicable',
    stickerConsularStandard: '90 EUR',
    vfsServiceFee: 'Varies by location (approx. ₹1,500 - ₹2,500)'
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
    eVisa: 'Not applicable',
    stickerSingleDouble: 'Up to 90 days within any 180-day period',
    stickerMultiple: 'Up to 90 days within any 180-day period'
  },
  entryType: 'Single, Double, or Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 3 months beyond your intended departure from the Schengen area, issued within the last 10 years, with a minimum of 2 blank pages. Copies of previous visas, if any, are also required.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35×45mm)', description: 'One recent color photograph (not older than 6 months), 35x45mm, portrait format, with a white background.', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Schengen Visa Application Form', description: 'Completely filled out and signed Schengen visa application form.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed return flight booking/reservation.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel bookings or an invitation letter from your host in Austria. For family visits, an invitation letter is crucial.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Travel medical insurance valid across the Schengen area for the entire stay, with a minimum coverage of €30,000 for medical emergencies and repatriation. Must be from a Schengen-approved insurance provider.', icon: '🛡️', mandatory: true },
    { key: 'financial_proof', title: 'Financial Proof', description: 'Personal bank statements for the last 3-6 months, stamped and signed by the bank. Income Tax Returns (ITR-V or acknowledgement) for the last 2 assessment years. Recent salary slips (last 3 months) and an employment letter/leave approval letter from your employer. If sponsored, an official affidavit of support and the sponsor\'s financial documents are required.', icon: '🏦', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter explaining the purpose of your visit, detailed travel itinerary, and dates of travel.', icon: '📝', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Original signed invitation letter from the family member/friend residing in Austria. This letter should include their address, contact details, and a copy of their residency permit if they are not an Austrian citizen.', icon: '✉️', mandatory: true },
    { key: 'proof_of_relationship', title: 'Proof of Relationship', description: 'Documents proving your relationship with the inviting family member (e.g., marriage certificate, birth certificate).', icon: '👨‍👩‍👧‍👦', mandatory: true },
    { key: 'proof_of_ties', title: 'Proof of Ties to India', description: 'Documents demonstrating your intention to return to India, such as an employment letter, leave approval from your employer, business registration documents (for self-employed), or property ownership.', icon: '🏠', mandatory: true },
    { key: 'minor_consent', title: 'Parental Consent for Minors', description: 'For applicants under 18, a notarized parental consent letter from the non-traveling parent(s) or legal guardian(s), along with their passport copies or government ID. Birth certificate and proof of custody/legal travel permissions if applicable.', icon: '👨‍👧', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Identify Visa Type', description: 'Determine that a Schengen Short-Stay Visa (Type C) for Family Visit is the correct category.' },
    { step: 2, title: 'Prepare Documentation', description: 'Gather all mandatory documents as per the checklist, ensuring they are complete and accurate. Documents not in English or German may require certified translations.' },
    { step: 3, title: 'Fill Application Form', description: 'Complete the online Schengen visa application form, print it, and sign it.' },
    { step: 4, title: 'Book an Appointment', description: 'Schedule an appointment at your nearest VFS Global Visa Application Centre in India.' },
    { step: 5, title: 'Submit Application & Pay Fees', description: 'Attend your appointment in person at the VFS Global centre to submit your application, provide biometric data (fingerprints and photo), and pay the consular and VFS service fees.' },
    { step: 6, title: 'Track Application', description: 'Track the status of your visa application online using the reference number provided by VFS Global.' },
    { step: 7, title: 'Receive Clearance', description: 'Collect your passport from the VFS Global centre once a decision has been made, or opt for courier delivery.' }
  ],
  specialRequirements: {
    entry_rules: 'Indian passport holders require a Schengen visa for short stays in Austria. The visa allows travel within all 27 Schengen member states for up to 90 days within any 180-day period. Biometric data submission is mandatory.'
  }
};