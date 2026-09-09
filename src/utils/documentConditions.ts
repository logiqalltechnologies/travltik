/**
 * src/utils/documentConditions.ts
 * Shared helper for parsing and generating official document conditions,
 * guaranteeing 100% data fidelity between VisaCountryResultPortal and UserDashboard.
 */

export function parseDocumentConditions(title: string, description: string, rawConditions?: string[]): string[] {
  if (Array.isArray(rawConditions) && rawConditions.length > 1) {
    return rawConditions.map(s => String(s).trim()).filter(Boolean);
  }

  const tLow = (title || '').toLowerCase();
  const desc = (description || '').trim();

  // 1. Specific tailored condition breakdowns for common visa document types

  // PHOTO must be checked BEFORE passport — "Two Color Passport Photographs" must NOT
  // fall into the passport block. If title contains 'photo' or 'picture', return photo specs only.
  if (tLow.includes('photo') || tLow.includes('picture')) {
    return [
      'Two recent identical color photographs taken within the last 6 months',
      'Biometric format: 35mm × 45mm on a plain white background, 70–80% face coverage',
      'Neutral expression, eyes clearly open and visible, no tinted glasses or head coverings (except for religious reasons)'
    ];
  }

  // Passport document (physical passport) — only when title is about the passport itself, not photographs
  if (tLow.includes('passport') && !tLow.includes('photo') && !tLow.includes('photograph') && !tLow.includes('size')) {
    return [
      'Original passport valid for at least 6-12 months beyond intended stay with minimum 2 blank visa pages',
      'Must be in undamaged physical condition with machine-readable bio-data page intact',
      'Accompanied by copies of all previous visas and international entry/exit stamps'
    ];
  }

  if (tLow.includes('enrolment') || tLow.includes('coe') || tLow.includes('admission') || tLow.includes('acceptance') || tLow.includes('cas') || tLow.includes('i-20') || tLow.includes('loa') || tLow.includes('pal')) {
    return [
      desc || 'Official Confirmation of Enrolment (CoE) / Unconditional admission letter from accredited institution',
      'Must confirm registered course name, CRICOS/DLI provider code, study start and end dates',
      'Must verify valid electronic tracking number (PRISMS / SEVIS / CAS reference) matching passport details'
    ];
  }

  if (tLow.includes('academic') || tLow.includes('certificate') || tLow.includes('transcript') || tLow.includes('degree') || tLow.includes('mark sheet')) {
    return [
      'Original degree certificates and consolidated mark sheets (Class 10th, 12th, Bachelor\'s / Master\'s)',
      'Official provisional passing certificate and university transcripts in sealed institutional envelope',
      'Certified English translations for any academic certificates issued in regional languages'
    ];
  }

  if (tLow.includes('english') || tLow.includes('language') || tLow.includes('proficiency') || tLow.includes('score') || tLow.includes('ielts') || tLow.includes('pte') || tLow.includes('toefl')) {
    return [
      'Official standardized score report (IELTS Academic, TOEFL iBT, PTE Academic, or Cambridge English)',
      'Score report must meet designated consular cutoff across all individual sub-bands',
      'Test date must be within 2 years of visa application submission date'
    ];
  }

  // Financial / funds block — split by purpose context
  // Student-specific: education loan, blocked account, GIC, maintenance fund
  const isStudentFinancial = tLow.includes('education loan') || tLow.includes('blocked') || tLow.includes('gic') || tLow.includes('maintenance fund') || tLow.includes('blocked deposit') || tLow.includes('blocked account');
  if (isStudentFinancial) {
    return [
      desc || 'Verifiable evidence of tuition fees + annual living maintenance + return travel allowance',
      'Official original bank statements for the past 3 to 6 months bearing official bank stamp and branch seal',
      'Approved education loan sanction letter or government blocked deposit certificate with verified source of funds'
    ];
  }

  // General financial / bank statements — Tourism, Business, PR (NO education loan)
  if (tLow.includes('financial') || tLow.includes('fund') || tLow.includes('bank') || tLow.includes('solvency') || tLow.includes('statement')) {
    return [
      desc || '6 months bank statements with official branch seal showing sufficient funds for trip',
      'Latest 2 years Income Tax Return (ITR) or Form 16 as proof of stable income',
      'No Objection Certificate (NOC) from employer / school / college granting leave for travel'
    ];
  }

  if (tLow.includes('tuition') || tLow.includes('fee receipt') || tLow.includes('payment receipt')) {
    return [
      'Official university fee payment receipt or electronic international SWIFT wire transfer confirmation',
      'Receipt must clearly show applicant student ID, university bank details, and paid currency amount',
      'Confirms 1st semester or full academic year tuition fee settlement'
    ];
  }

  if (tLow.includes('sop') || tLow.includes('purpose') || tLow.includes('motivation') || tLow.includes('statement')) {
    return [
      'Comprehensive personal statement explaining course selection, academic background, and future career plans',
      'Clear justification of genuine student or visitor intent with ties demonstrating intent to return home',
      'Original self-authored statement signed and dated by the applicant'
    ];
  }

  if (tLow.includes('recommendation') || tLow.includes('lor') || tLow.includes('cv') || tLow.includes('resume')) {
    return [
      'Two formal academic or professional recommendation letters printed on official institutional letterhead',
      'Must contain recommender\'s full name, designation, official email, and contact phone number',
      'Updated academic curriculum vitae (CV) detailing full educational history without unexplainable gaps'
    ];
  }

  if (tLow.includes('insurance') || tLow.includes('medical') || tLow.includes('health') || tLow.includes('oshc')) {
    const isSchengenDoc = tLow.includes('schengen') || desc.toLowerCase().includes('schengen') || desc.includes('30,000') || desc.includes('€30,000');
    if (isSchengenDoc) {
      return [
        'Valid Schengen travel medical insurance with minimum coverage of €30,000 covering emergency medical care and hospitalization',
        'Policy must be valid across all 29 Schengen member states and cover the entire duration of intended stay',
        'Must include repatriation of remains and emergency medical evacuation with zero or minimal deductible'
      ];
    }
    const isStudentDoc = tLow.includes('student') || tLow.includes('oshc') || desc.toLowerCase().includes('student');
    if (isStudentDoc) {
      return [
        'Valid overseas student health cover (OSHC) or comprehensive student medical insurance policy',
        'Policy must be active from departure date and cover the entire academic study duration',
        'Must include hospitalization, emergency medical evacuation, and repatriation of remains'
      ];
    }
    return [
      'Valid international travel medical insurance policy covering emergency medical care and hospitalization',
      'Policy must be active from departure date and cover the entire duration of stay in destination country',
      'Must include repatriation of remains and emergency medical evacuation with zero or minimal deductible'
    ];
  }

  if (tLow.includes('covering') || tLow.includes('cover letter') || tLow.includes('motivation letter')) {
    return [
      'Signed personal covering letter addressed to the Embassy / Consulate explaining purpose of visit and travel itinerary',
      'Must include exact travel dates, planned accommodation details, and source of financial sponsorship',
      'Must be signed and dated by the applicant with full name, passport number, and contact details'
    ];
  }

  if (tLow.includes('itinerary') && !tLow.includes('flight') && !tLow.includes('ticket')) {
    return [
      'Day-by-day travel plan detailing cities to visit, daily scheduled activities, and transit dates',
      'Must clearly reference corresponding confirmed flight bookings, train journeys, and hotel reservations',
      'Dates must align exactly with visa application validity and entry/exit timeline'
    ];
  }

  if (tLow.includes('invitation')) {
    return [
      'Formal invitation letter on official institutional/corporate letterhead or signed personal invitation from host',
      'Must state applicant full name, passport number, purpose of visit, duration of stay, and relationship with host',
      'Accompanied by copy of host valid passport, national ID card, resident permit, or company registration certificate'
    ];
  }

  if (tLow.includes('flight') || tLow.includes('ticket') || tLow.includes('air booking') || tLow.includes('flight itinerary')) {
    return [
      'Confirmed round-trip flight booking or verifiable travel itinerary showing passenger name and PNR',
      'Must match planned travel dates, entry port, and departure within approved visa validity',
      'Include all domestic and international transit flight legs if applicable'
    ];
  }

  if (tLow.includes('hotel') || tLow.includes('accommodation') || tLow.includes('stay')) {
    return [
      'Confirmed hotel reservations, host accommodation voucher, or university hall booking confirmation',
      'Must cover the entire duration of stay showing applicant name and full property contact details'
    ];
  }

  if (tLow.includes('employment') || tLow.includes('job') || tLow.includes('salary') || tLow.includes('work') || tLow.includes('offer') || tLow.includes('lmia') || tLow.includes('contract')) {
    return [
      'Official employment offer letter or sponsorship certificate on corporate letterhead',
      'Past 3 to 6 months original stamped salary slips and Form 16 / ITR tax returns',
      'No Objection Certificate (NOC) from employer granting approved leave of absence'
    ];
  }

  // 2. Generic fallback if none matched: split description into distinct sentences / conditions
  if (desc) {
    const parts = desc
      .split(/(?<=[.!?])\s+(?=[A-Z0-9])|;\s*|\n+/)
      .map(s => s.trim().replace(/^[-•*]\s*/, ''))
      .filter(s => s.length > 5);

    if (parts.length > 1) {
      return parts.slice(0, 3);
    }

    if (desc.includes(' with at least ')) {
      const sub = desc.split(' with at least ');
      return [
        sub[0].trim(),
        'Must have at least ' + sub[1].trim()
      ];
    }
    if (desc.includes('; and ')) {
      const sub = desc.split('; and ');
      return sub.map(s => s.trim()).filter(Boolean);
    }
    return [
      desc,
      'Must be fully authentic, legible, and verified in accordance with consular requirements'
    ];
  }

  return ['Official consular requirement for visa application'];
}
