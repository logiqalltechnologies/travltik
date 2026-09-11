export default {
  country: 'nepal',
  fromCountry: 'India',
  visaCategory: 'Visa-Free / Tourist Entry',
  authority: 'Department of Immigration, Ministry of Home Affairs, Nepal',
  channels: [
    'https://nepalembassyindia.gov.np',
    'https://nepalimmigration.gov.np'
  ],
  processingTime: {
    eVisa: 'N/A',
    standardSticker: 'N/A',
    expressSticker: 'N/A'
  },
  fees: {
    eVisaTotal: 'N/A',
    stickerConsularStandard: '0 INR / 0 NPR (Visa-exempt)',
    vfsServiceFee: 'N/A'
  },
  eVisa: {
    available: false,
    portal: 'N/A',
    territorialScope: 'N/A',
    validity: 'N/A',
    maxStay: 'Unlimited (Under 1950 Indo-Nepal Treaty of Peace and Friendship)',
    invitationRequired: false,
    processing: 'N/A'
  },
  stayDuration: {
    eVisa: 'N/A',
    stickerSingleDouble: 'N/A (Visa-free)',
    stickerMultiple: 'N/A (Visa-free)'
  },
  entryType: 'Freedom of Movement / Multiple Entry',
  documents: [
    {
      key: 'identity_proof',
      title: 'Valid Indian Passport or Voter ID Card',
      description: 'Indian citizens must present either a valid Passport or an original Voter ID card issued by the Election Commission of India. (Aadhaar, PAN, and Driving License are not accepted for air travel entry).',
      icon: '📘',
      mandatory: true
    },
    {
      key: 'photographs',
      title: 'Passport Photographs',
      description: 'Recent passport-sized photographs may be requested at border checkpoints or airport immigration.',
      icon: '📸',
      mandatory: false
    },
    {
      key: 'flight_booking',
      title: 'Return/Onward Flight Ticket',
      description: 'Recommended for air travel to demonstrate entry/exit plans.',
      icon: '✈️',
      mandatory: false
    },
    {
      key: 'accommodation',
      title: 'Proof of Accommodation',
      description: 'Hotel booking or address of host in Nepal for immigration entry registry.',
      icon: '🏨',
      mandatory: false
    }
  ],
  steps: [
    {
      step: 1,
      title: 'Carry Approved Identification',
      description: 'Ensure you carry either an original valid Indian Passport or an original Election Commission Voter ID Card.'
    },
    {
      step: 2,
      title: 'Travel to Nepal',
      description: 'Proceed via air or official overland border crossings.'
    },
    {
      step: 3,
      title: 'Complete Immigration Arrival Card',
      description: 'Fill out the arrival card provided on-board or at the immigration arrival hall.'
    },
    {
      step: 4,
      title: 'Immigration Clearance',
      description: 'Present your identity document at the immigration counter to receive entry clearance. No visa fee or visa application form is required.'
    }
  ],
  specialRequirements: {
    entry_rules: 'Under the 1950 Indo-Nepal Treaty of Peace and Friendship, Indian citizens enjoy freedom of movement and do not require a visa to enter Nepal. Entry requires either a valid Indian Passport or an official Voter ID card.'
  }
};