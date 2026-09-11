export default {
  country: 'spain',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Spanish Embassy in New Delhi',
  channels: ['https://www.exteriores.gob.es/Embajadas/NEWDELHI/en/Pages/Inicio.aspx', 'BLS International', 'Embassy Direct'],
  processingTime: { eVisa: 'N/A', standardSticker: '30 working days', expressSticker: 'N/A' },
  fees: { eVisaTotal: 'N/A', stickerConsularStandard: '80 EUR', vfsServiceFee: '17 EUR' },
  eVisa: { available: false, portal: 'N/A', territorialScope: 'N/A', validity: 'N/A', maxStay: 'N/A', invitationRequired: false, processing: 'N/A' },
  stayDuration: { eVisa: 'N/A', stickerSingleDouble: 'Over 90 days', stickerMultiple: 'Over 90 days' },
  entryType: 'Multiple Entry',
  documents: [
    { key: 'passport', title: 'Valid Indian Passport', description: 'Passport valid for at least 6 months beyond the intended stay, with at least two blank pages', icon: '📘', mandatory: true },
    { key: 'photographs', title: 'Passport Photographs (35x45mm)', description: 'White background, 6 months recent, neutral expression', icon: '📸', mandatory: true },
    { key: 'visa_form', title: 'National Visa Application Form', description: 'Completed and signed national visa application form', icon: '📋', mandatory: true },
    { key: 'work_authorization', title: 'Work Authorization', description: 'Copy of the initial work and residence authorization issued by the Spanish Delegation or Sub-delegation of the Government', icon: '💼', mandatory: true },
    { key: 'employment_contract', title: 'Employment Contract', description: 'A copy of the employment contract stamped by the Foreigners Office in Spain', icon: '📄', mandatory: true },
    { key: 'criminal_record', title: 'Criminal Record Certificate', description: 'Apostilled police clearance certificate from India, translated into Spanish by a sworn translator', icon: '📜', mandatory: true },
    { key: 'medical_certificate', title: 'Medical Certificate', description: 'Official medical certificate stating the applicant does not suffer from diseases with public health implications, translated into Spanish', icon: '🩺', mandatory: true }
  ],
  steps: [
    { step: 1, title: 'Employer Obtains Authorization', description: 'Your employer in Spain must obtain the initial work authorization from the Spanish authorities' },
    { step: 2, title: 'Prepare Documents', description: 'Gather your passport, photos, apostilled criminal record, and medical certificate (all translated to Spanish)' },
    { step: 3, title: 'Book Appointment', description: 'Schedule an appointment at the designated BLS International visa application center' },
    { step: 4, title: 'Submit Application', description: 'Attend the appointment, submit documents, provide biometrics, and pay the consular and service fees' },
    { step: 5, title: 'Collect Visa & Apply for TIE', description: 'Collect your passport with the visa sticker, travel to Spain, and apply for your Foreigner Identity Card (TIE) within 30 days of arrival' }
  ],
  specialRequirements: { entry_rules: 'National visa allows entry and stay over 90 days; must register for TIE (Tarjeta de Identidad de Extranjero) within 1 month of arrival in Spain' }
};