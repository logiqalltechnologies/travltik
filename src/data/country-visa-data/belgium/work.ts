export default {
  country: 'belgium',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Belgian Immigration Office (Office des Étrangers / Dienst Vreemdelingenzaken) / Embassy of Belgium',
  channels: ['TLScontact', 'Embassy / Consulate'],
  processingTime: { eVisa: 'N/A', standardSticker: '15-20 working days (after work permit approval)', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '180 EUR', vfsServiceFee: '1900 INR (approx. 21 EUR)' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Initial 3-6 months (for entry to apply for residence permit)', stickerMultiple: 'N/A' },
  entryType: 'Single Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Valid for at least 6 months beyond the intended stay with at least 2 blank pages. Previous passports, if any, should also be submitted.', icon: 'passport', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'Two recent (not older than 6 months) passport-sized photographs with a white background, meeting Schengen specifications.', icon: 'photo', mandatory: true },
    { key: 'visa_form', title: 'D-Visa Application Form', description: 'Duly completed and signed long-stay visa application form. Can be filled online via VisaOnWeb (if available) or printed and filled manually.', icon: 'form', mandatory: true },
    { key: 'work_permit', title: 'Work Permit (Single Permit)', description: 'Original and copy of the Single Permit (work permit + residence permit authorization) issued by the competent Belgian regional authority (Flanders, Wallonia, or Brussels-Capital Region). This is a prerequisite for the visa application.', icon: 'certificate', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'Original and copy of the signed employment contract with the Belgian employer, detailing terms, salary, and duration.', icon: 'contract', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'A medical certificate issued by a doctor approved by the Belgian Embassy/Consulate, confirming the applicant is free from diseases that could endanger public health.', icon: 'health', mandatory: true },
    { key: 'pcc', title: 'Police Clearance Certificate (PCC)', description: 'Original and copy of a Police Clearance Certificate (PCC) issued by the Passport Office in India, apostilled by the Ministry of External Affairs (MEA), India, and legalized by the Belgian Embassy/Consulate. Must be recent (not older than 6 months).', icon: 'police', mandatory: true },
    { key: 'accommodation', title: 'Proof of Accommodation', description: 'Proof of accommodation in Belgium for the initial period (e.g., rental agreement, employer-provided accommodation letter, temporary hotel booking).', icon: 'hotel', mandatory: true },
    { key: 'travel_insurance', title: 'Travel Medical Insurance', description: 'Proof of travel medical insurance covering the initial period of stay (e.g., 30 days) until Belgian social security coverage commences. Minimum coverage of 30,000 EUR for medical emergencies, hospitalization, and repatriation.', icon: 'insurance', mandatory: true },
    { key: 'flight_itinerary', title: 'Flight Itinerary', description: 'Confirmed one-way flight booking to Belgium.', icon: 'flight', mandatory: true },
    { key: 'administrative_fee_proof', title: 'Proof of Administrative Fee Payment', description: 'Proof of payment of the administrative fee for the Single Permit application in Belgium (if applicable and not paid by the employer).', icon: 'receipt', mandatory: true },
    { key: 'educational_qualifications', title: 'Educational Qualifications & CV', description: 'Copies of educational diplomas, professional certificates, and a detailed Curriculum Vitae (CV).', icon: 'education', mandatory: false }
  ],
  steps: [
    { step: 1, title: 'Secure Work Permit (Single Permit)', description: 'The Belgian employer must first apply for and obtain a Single Permit (work permit + residence permit authorization) for the applicant from the relevant regional authority in Belgium.' },
    { step: 2, title: 'Complete D-Visa Application Form', description: 'Fill out the long-stay D-visa application form accurately. This can often be done online via the VisaOnWeb portal or by printing and completing a physical form.' },
    { step: 3, title: 'Gather Mandatory Documents', description: 'Collect all required documents as per the checklist, ensuring they are apostilled/legalized by the Ministry of External Affairs (MEA), India, and the Belgian Embassy/Consulate where specified (e.g., PCC, medical certificate).' },
    { step: 4, title: 'Schedule Appointment', description: 'Book an appointment with TLScontact, the official visa application center for Belgium in India, or directly with the Embassy/Consulate if applicable.' },
    { step: 5, title: 'Submit Application and Pay Fees', description: 'Attend the appointment, submit the complete application dossier, and pay the consular visa fee (180 EUR) and the TLScontact service fee (1900 INR).' },
    { step: 6, title: 'Attend Biometrics', description: 'Provide biometric data (fingerprints and digital photograph) at the visa application center, if not already done during submission.' },
    { step: 7, title: 'Track and Receive Visa', description: 'Track the status of your application online. Once processed, collect your passport with the D-visa sticker from the application center.' },
    { step: 8, title: 'Register in Belgium', description: 'Upon arrival in Belgium, register at the local municipality (commune/gemeente) of your place of residence within 8 days to complete the residence permit formalities.' }
  ],
  specialRequirements: {
    entry_rules: 'A valid Work Permit (Single Permit) issued by the competent Belgian regional authority is mandatory before applying for the D-visa. The D-visa allows entry into Belgium, after which the visa holder must register at the local municipality within 8 days to obtain a residence permit and finalize their legal stay.',
    document_legalization: 'Several documents, including the Police Clearance Certificate and Medical Certificate, require apostille from the Ministry of External Affairs (MEA), India, and subsequent legalization by the Belgian Embassy/Consulate in India before submission.'
  }
};