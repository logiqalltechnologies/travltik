export default {
  country: 'ireland',
  fromCountry: 'India',
  visaCategory: 'Employment / Work Visa',
  authority: 'Immigration Service Delivery (ISD), Department of Justice',
  channels: [
    'AVATS Online Portal',
    'VFS Global Application Centre',
    'Embassy of Ireland, New Delhi'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: '20 to 40 working days',
    expressSticker: 'Not Available'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '€60 (Single Entry Long Stay "D")',
    vfsServiceFee: '₹2,680 INR'
  },
  eVisa: {
    available: false,
    portal: 'https://www.visas.inis.gov.ie/avats/OnlineHome.aspx',
    territorialScope: 'Republic of Ireland',
    validity: '90 days (for initial entry)',
    maxStay: 'Duration of Employment Permit (1 to 2 years initial)',
    invitationRequired: true,
    processing: '20 to 40 working days'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: '90-day initial entry window (extended upon IRP registration in Ireland)',
    stickerMultiple: 'Up to duration of Employment Permit (post-IRP registration)'
  },
  entryType: 'Single Entry',
  documents: [
    {
      key: 'passport',
      title: 'Valid Indian Passport',
      description: 'Original passport valid for at least 12 months beyond the intended arrival date with at least 2 blank pages',
      icon: 'passport',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs (35x45mm)',
      description: 'Two identical recent photos, white background, compliant with Irish consular standards',
      icon: 'photo',
      mandatory: true
    },
    {
      key: 'visa_form',
      title: 'AVATS Application Summary Sheet',
      description: 'Signed and dated AVATS online summary sheet generated after online registration',
      icon: 'form',
      mandatory: true
    },
    {
      key: 'employment_permit',
      title: 'DETE Employment Permit',
      description: 'Official Employment Permit issued by the Department of Enterprise, Trade and Employment (DETE)',
      icon: 'file',
      mandatory: true
    },
    {
      key: 'employment_contract',
      title: 'Employment Contract & Employer Letter',
      description: 'Signed contract and letter from the Irish employer detailing job title, annual salary, and employment start date',
      icon: 'work',
      mandatory: true
    },
    {
      key: 'qualifications_cv',
      title: 'Proof of Qualifications & Resume',
      description: 'Comprehensive CV and relevant academic/professional qualifications supporting the job offer',
      icon: 'certificate',
      mandatory: true
    },
    {
      key: 'bank_statement',
      title: 'Financial Proof & Bank Statements',
      description: 'Original 6-month bank statements demonstrating financial independence prior to first salary payment',
      icon: 'bank',
      mandatory: true
    },
    {
      key: 'travel_insurance',
      title: 'Medical Travel Insurance',
      description: 'Comprehensive private medical insurance coverage for health and emergency medical care',
      icon: 'insurance',
      mandatory: true
    },
    {
      key: 'cover_letter',
      title: 'Signed Cover Letter',
      description: 'Applicant statement detailing travel purpose, employer contact details, and intent to abide by visa rules',
      icon: 'letter',
      mandatory: true
    },
    {
      key: 'vfs_receipt',
      title: 'VFS Appointment Receipt',
      description: 'Appointment booking confirmation and logistics receipt for submission at VFS Global',
      icon: 'calendar',
      mandatory: true
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Obtain DETE Employment Permit',
      description: 'Ensure your sponsor employer in Ireland secures an approved Employment Permit (General or Critical Skills) from DETE.'
    },
    {
      step: 2,
      title: 'Complete AVATS Application Online',
      description: 'Fill out the Long Stay "D" Employment Visa form on the official AVATS portal and print the summary sheet.'
    },
    {
      step: 3,
      title: 'Submit Dossier at VFS Global',
      description: 'Book an appointment at an authorized VFS Global centre in India, submit physical documents, and pay service fees.'
    },
    {
      step: 4,
      title: 'Visa Issuance & IRP Registration',
      description: 'Receive your entry visa, travel to Ireland, and register at Burgh Quay / local Garda office within 90 days for an Irish Residence Permit (IRP Stamp 1).'
    }
  ],
  specialRequirements: {
    entry_rules: 'Mandatory active Employment Permit issued by DETE required prior to visa application. The visa grants entry into Ireland; workers must register with Immigration Service Delivery (ISD) within 90 days of arrival to receive an Irish Residence Permit (IRP) Stamp 1.'
  }
};