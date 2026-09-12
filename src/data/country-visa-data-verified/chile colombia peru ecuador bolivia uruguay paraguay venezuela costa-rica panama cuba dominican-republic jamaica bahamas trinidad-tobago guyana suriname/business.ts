export default {
  country: 'chile colombia peru ecuador bolivia uruguay paraguay venezuela costa-rica panama cuba dominican-republic jamaica bahamas trinidad-tobago guyana suriname',
  fromCountry: 'India',
  visaCategory: 'Business Visa',
  authority: 'Respective Embassy/Consulate of the Destination Country in India or its Ministry of Foreign Affairs',
  channels: ['Official Embassy/Consulate Website', 'Embassy Direct', 'VFS Global (for Suriname eVisa)', 'Visa on Arrival (for Bolivia and Jamaica)'],
  processingTime: {
    eVisa: '3-7 working days (for countries offering online applications)',
    standardSticker: '5-20 working days (Varies significantly by country)',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'Varies by country (e.g., Suriname: $204 - $360 USD + $14 VFS fee; Colombia: $229 USD; Bahamas: $100 - $110 USD)',
    stickerConsularStandard: 'Varies by country: $30 to $250 USD (e.g., Peru: INR 2,700; Bolivia: $30; Ecuador: $250; Panama: $60; Venezuela: $60; Dominican Republic: $150-$200)',
    vfsServiceFee: 'N/A for most (Embassy Direct), except Suriname eVisa which has a $14 USD VFS service fee'
  },
  eVisa: {
    available: true,
    portal: 'Varies by country. Colombia: https://tramitesmre.cancilleria.gov.co/tramites/enlinea/solicitudVisa.xhtml | Suriname: https://suriname.vfsevisa.com/suriname/online/home/index | Chile: https://tramites.minrel.gov.cl/ | Bahamas: https://mocas.gov.bs/ | Bolivia: https://portalmre.rree.gob.bo/formvisas/ | Uruguay: https://tramites.gub.uy/',
    territorialScope: 'Valid only for entry into the respective issuing country',
    validity: 'Varies (typically 90 days to 2 years depending on the country)',
    maxStay: '30 to 90 days per entry (Varies by country)',
    invitationRequired: true,
    processing: '3-7 working days'
  },
  stayDuration: {
    eVisa: '30 to 90 days (Varies by country)',
    stickerSingleDouble: 'Up to 30-90 days (Varies by country; e.g., Bolivia/Panama/Cuba/Jamaica/Guyana: 30 days; Chile/Peru/Ecuador/Uruguay/Paraguay/Venezuela: 90 days)',
    stickerMultiple: 'Up to 90-180 days (Varies by country and approval)'
  },
  entryType: 'Single / Multiple Entry (Varies by country and approval)',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Original passport with at least 6 months validity from the date of entry and at least two blank pages. Copies of previous visas and passport pages with personal data.', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent passport-sized photographs (taken within 6 months), white background, matte finish, neutral expression, full face visible, no head covering (unless for religious reasons).', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'Duly Filled and Signed Visa Application Form', description: 'Completed online or physical visa application form, signed by the applicant. Specific portal details will be on the respective embassy website.', icon: '📋', mandatory: true },
    { key: 'flight_booking', title: 'Confirmed Round-Trip Flight Itinerary', description: 'Proof of confirmed return flight tickets showing entry and exit dates for the destination country.', icon: '✈️', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Confirmed hotel bookings for the entire duration of stay, or a notarized invitation letter from the host company/individual in the destination country stating accommodation arrangements.', icon: '🏨', mandatory: true },
    { key: 'travel_insurance', title: 'Comprehensive Travel Insurance', description: 'Travel insurance covering the entire duration of stay, with a minimum coverage of 30,000 EUR (or equivalent USD) for medical emergencies, hospitalization, and repatriation. While not universally mandated, it is highly recommended for all business travel.', icon: '🛡️', mandatory: true },
    { key: 'bank_statement', title: 'Financial Proof', description: 'Original bank statements for the last 3-6 months, stamped and signed by the bank, showing sufficient funds to cover the stay. Income Tax Returns (ITR) for the last 3 years.', icon: '🏦', mandatory: true },
    { key: 'invitation_letter_host', title: 'Invitation Letter from Host Company', description: 'Original invitation letter from the inviting company in the destination country, on company letterhead, stating the purpose of visit, duration, contact details, and financial responsibility (if applicable).', icon: '✉️', mandatory: true },
    { key: 'letter_indian_employer', title: 'Letter from Indian Employer', description: 'Original letter from the applicant\'s Indian employer, on company letterhead, stating the applicant\'s position, purpose of visit, duration, and confirming financial responsibility for the trip.', icon: '🏢', mandatory: true },
    { key: 'company_registration', title: 'Indian Company Registration Documents', description: 'Copies of the Indian company\'s registration certificate, Memorandum of Association (MOA), Articles of Association (AOA), and latest audited financial statements.', icon: '📄', mandatory: true },
    { key: 'business_cards', title: 'Business Cards', description: 'Applicant\'s business card and the business card of the contact person in the host company (if available).', icon: '📇', mandatory: true },
    { key: 'yellow_fever', title: 'Yellow Fever Vaccination Certificate', description: 'Mandatory for travelers arriving from or transiting through Yellow Fever endemic areas. Required for entry into Bolivia, Colombia, Ecuador, Guyana, Panama, Peru, Suriname, and parts of Venezuela. Certificate must be issued at least 10 days before travel.', icon: '💉', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Gather Required Documents', description: 'Collect all necessary personal, financial, and business-related documents as specified by the destination country\'s embassy/consulate.' },
    { step: 2, title: 'Complete Visa Application Form', description: 'Fill out the visa application form accurately, either online or manually, as per the embassy\'s instructions. Ensure all details match your passport and supporting documents.' },
    { step: 3, title: 'Schedule an Appointment', description: 'Contact the respective embassy or consulate in India to schedule a visa interview or document submission appointment. Some countries may allow direct submission without an interview.' },
    { step: 4, title: 'Pay Visa Fees', description: 'Pay the applicable visa processing fees as instructed by the embassy. Keep the payment receipt for submission.' },
    { step: 5, title: 'Submit Application', description: 'Attend the appointment and submit your complete application package, including all original documents and copies, to the embassy/consulate.' },
    { step: 6, title: 'Attend Interview (If Required)', description: 'Be prepared to attend a visa interview if requested by the embassy, where you may be asked about your travel purpose and itinerary.' },
    { step: 7, title: 'Collect Passport with Visa', description: 'Once processed, collect your passport with the affixed visa from the embassy/consulate or via courier, as per their collection procedure.' }
  ],
  specialRequirements: {
    entry_rules: 'Visa requirements for Indian citizens for business purposes are mandatory for all listed countries. However, several countries offer visa exemptions for Indian nationals holding valid visas (such as US, Canada, UK, or Schengen visas), including Chile, Peru, Colombia, Costa Rica, Panama, and the Dominican Republic. \n\n**Yellow Fever Vaccination**: A Yellow Fever vaccination certificate is mandatory for travelers to Bolivia, Colombia, Ecuador, Guyana, Panama, Peru, Suriname, and parts of Venezuela, especially if arriving from or transiting through a Yellow Fever endemic country. The certificate must be issued at least 10 days prior to travel. \n\n**Visa Fees**: Consular visa fees vary significantly by country, typically ranging from 30 USD to 250 USD (or equivalent in local currency). Suriname business eVisa fees range from 204 USD to 360 USD depending on validity. Applicants must refer to the specific embassy/consulate website for the exact, up-to-date fee schedule. VFS or other service provider fees are generally not applicable except for Suriname eVisa applications processed via VFS Global.'
  }
};