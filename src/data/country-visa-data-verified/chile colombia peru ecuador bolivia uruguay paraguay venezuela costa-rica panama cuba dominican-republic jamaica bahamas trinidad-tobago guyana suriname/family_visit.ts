export default {
  country: 'chile colombia peru ecuador bolivia uruguay paraguay venezuela costa-rica panama cuba dominican-republic jamaica bahamas trinidad-tobago guyana suriname',
  fromCountry: 'India',
  visaCategory: 'Family Visit Visa',
  authority: 'Ministry of Foreign Affairs / Consular Section of Respective Embassies',
  channels: ['Embassy Direct', 'Official Online Portals', 'VFS Global (for Suriname eVisa)'],
  processingTime: {
    eVisa: '3-10 working days (e.g., Suriname, Bahamas, Colombia online)',
    standardSticker: '5-30 working days (varies significantly by country; some require home ministry approval)',
    expressSticker: 'N/A (Generally not available for family/tourist categories)'
  },
  fees: {
    eVisaTotal: 'Varies (e.g., Suriname: USD 33 + USD 14 fee; Bahamas: USD 100; Colombia: USD 52 study fee + USD 82 visa fee)',
    stickerConsularStandard: 'Varies by country (typically USD 30 to USD 200, e.g., Peru: USD 30, Paraguay: USD 100, Ecuador: USD 80, Chile: USD 50-60)',
    vfsServiceFee: 'Varies (e.g., USD 14 for Suriname eVisa processing via VFS portal; otherwise mostly Embassy Direct with no VFS fee)'
  },
  eVisa: {
    available: true, // Available for select countries in this list (e.g., Suriname, Bahamas, Colombia, Chile online application).
    portal: 'Suriname: https://suriname.vfsevisa.com | Colombia: https://tramitesmre.cancilleria.gov.co | Chile: https://tramites.minrel.gov.co | Bahamas: https://mfa.gov.bs',
    territorialScope: 'Valid only for entry into the issuing country',
    validity: 'Varies by country (typically 90 days to 1 year)',
    maxStay: 'Varies by country (typically 30 to 90 days)',
    invitationRequired: true, // Family visit always requires an invitation.
    processing: '3-10 working days'
  },
  stayDuration: {
    eVisa: '30 to 90 days (depending on the country)',
    stickerSingleDouble: '30 to 90 days (up to 180 days for Peru/Colombia if visa-exempt via US/Schengen visa)',
    stickerMultiple: 'Up to 90 days per entry (subject to consular discretion)'
  },
  entryType: 'Single / Multiple Entry (Varies by country and consular discretion)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport with at least six months validity from the date of entry and at least two blank pages. Copies of all used and unused pages, including the biodata page.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent passport-sized photographs (35x45mm) with a white background, taken within the last 6 months, showing a neutral expression and full face without head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Application Form', description: 'Duly completed and signed visa application form, available on the respective embassy\'s official website. Ensure all sections are accurately filled.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Flight Itinerary', description: 'Confirmed round-trip flight bookings showing entry and exit dates for the destination country. Do not purchase non-refundable tickets until visa is approved.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Invitation letter from the host family in the destination country, stating the purpose of visit, duration of stay, and accommodation details. The letter must include the host\'s full name, address, contact details, and relationship to the applicant.', icon: '🏨', mandatory: true },
    { key: 'invitation_letter', title: 'Invitation Letter from Host', description: 'Original invitation letter from the host family, duly attested/notarized if required by the specific country\'s embassy. It should clearly state the host\'s commitment to cover accommodation and living expenses if applicable.', icon: '✉️', mandatory: true },
    { key: 'host_documents', title: 'Host\'s Documents', description: 'Copy of host\'s passport/national ID and proof of legal residency in the destination country (e.g., residency card, visa copy). Proof of address (e.g., utility bill) of the host.', icon: '👤', mandatory: true },
    { key: 'relationship_proof', title: 'Proof of Relationship', description: 'Documents proving the relationship between the applicant and the host (e.g., birth certificates, marriage certificates, family register, notarized affidavits).', icon: '👨‍👩‍👧‍👦', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Insurance', description: 'Comprehensive travel insurance covering the entire duration of stay, with a minimum coverage for medical emergencies, hospitalization, and repatriation. While not universally mandatory for all these countries, it is highly recommended and often required by consular sections.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, showing sufficient funds to cover personal expenses during the stay. Additionally, Income Tax Returns (ITR) for the last 2-3 years and recent salary slips (if employed) or business registration documents (if self-employed).', icon: '🏦', mandatory: true },
    { key: 'employment_proof', title: 'Employment/Occupation Proof', description: 'If employed: No Objection Certificate (NOC) from employer, employment contract, and recent salary slips. If self-employed: Business registration certificate and company bank statements. If student: Student ID card and NOC from educational institution. If retired: Proof of retirement and pension statements.', icon: '💼', mandatory: true },
    { key: 'cover_letter', title: 'Cover Letter', description: 'A personal cover letter from the applicant explaining the purpose of the visit, duration of stay, and detailed itinerary.', icon: '📝', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Check Specific Embassy Requirements', description: 'Visit the official website of the embassy/consulate of your destination country in India to confirm the latest requirements, fees, and application procedures, as these can vary significantly and are subject to change.' },
    { step: 2, title: 'Gather and Prepare Documents', description: 'Collect all mandatory documents as per the checklist. Ensure all documents are complete, accurate, and translated into English or Spanish/Portuguese if required, and attested where necessary. Make photocopies of all originals.' },
    { step: 3, title: 'Complete Application Form', description: 'Fill out the visa application form accurately and completely, either online or manually, as per the embassy\'s instructions. Print and sign the form.' },
    { step: 4, title: 'Schedule Appointment', description: 'Book an appointment at the respective embassy/consulate or authorized visa application center (if applicable) for submission of documents and biometric data (if required). Confirm appointment details and required documents for the appointment.' },
    { step: 5, title: 'Submit Application', description: 'Attend the appointment, submit the application along with all required original and photocopied documents, and pay the visa fees. Be prepared for a short interview if requested by the consular officer.' },
    { step: 6, title: 'Track Application', description: 'Monitor the status of your visa application through the provided tracking system or by contacting the embassy/consulate directly if no tracking is available.' },
    { step: 7, title: 'Collect Passport', description: 'Once processed, collect your passport with the visa sticker from the embassy/consulate or via courier service, as per the instructions provided during submission.' }
  ],
  specialRequirements: {
    entry_rules: 'Yellow Fever vaccination certificate is recommended for travelers visiting certain regions within Bolivia, Colombia, Ecuador, Guyana, Peru, Suriname, and Venezuela. It is mandatory if arriving from or transiting through a country with risk of Yellow Fever transmission. Visa-free entry is available for Indian citizens visiting Jamaica (up to 30 days) and Trinidad & Tobago (up to 90 days) for tourism/family visits. Additionally, many of these countries (e.g., Chile, Colombia, Peru, Uruguay, Costa Rica, Panama, Dominican Republic) offer visa-free entry to Indian citizens holding valid visas or permanent residency from the US, Canada, UK, or Schengen zone.'
  }
};