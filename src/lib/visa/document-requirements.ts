// src/lib/visa/document-requirements.ts
import { DOCUMENT_REQUIREMENTS, type DocumentRequirement } from './types';

export function normalizePurpose(purpose: string): string {
  const p = (purpose || '').toLowerCase().trim().replace(/[- ]/g, '_');
  if (p === 'study' || p === 'student') return 'student';
  if (p === 'work' || p === 'employment') return 'work';
  if (p === 'family' || p === 'family_visit' || p === 'spouse') return 'family_visit';
  if (p === 'business') return 'business';
  if (p === 'tourism' || p === 'tourist' || p === 'visitor' || p === 'transit' || p === 'general') return 'tourism';
  return p;
}

export function getDocumentsForRoute(
  destinationCountry: string,
  purpose: string
): DocumentRequirement[] {
  const normPurpose = normalizePurpose(purpose);
  const destLower = (destinationCountry || '').toLowerCase();
  
  // Check if destination is a Schengen country
  const schengenCountries = [
    'france', 'germany', 'italy', 'spain', 'greece', 'netherlands', 'switzerland', 
    'portugal', 'austria', 'belgium', 'hungary', 'poland', 'czech', 'slovakia', 
    'slovenia', 'croatia', 'bulgaria', 'romania', 'sweden', 'norway', 'finland', 
    'denmark', 'iceland', 'estonia', 'latvia', 'lithuania', 'luxembourg', 'malta', 'liechtenstein'
  ];
  const isSchengen = schengenCountries.some(c => destLower.includes(c));

  const applicableDocs: DocumentRequirement[] = [];

  for (const item of DOCUMENT_REQUIREMENTS) {
    // Clone so modifications (hints/titles/descriptions) don't mutate static definition
    const doc: DocumentRequirement = { ...item };
    let include = false;

    // Check purpose applicability
    if (doc.purpose_applicability.includes(normPurpose) || doc.purpose_applicability.includes(purpose.toLowerCase())) {
      include = true;
    }

    // Special case 1: Hotel Booking
    // Mandatory for tourism and business. Excluded for student, work, and family_visit (staying with host/dorm/sponsor)
    if (doc.key === 'hotel_booking') {
      if (normPurpose !== 'tourism' && normPurpose !== 'business') {
        include = false;
      }
    }

    // Special case 2: Invitation Letter
    // Mandatory for student, work, business, and family_visit. Excluded for tourism (unless staying with host)
    if (doc.key === 'invitation_letter') {
      const invitationPurposes = ['family_visit', 'business', 'student', 'work'];
      if (!invitationPurposes.includes(normPurpose)) {
        include = false;
      } else {
        include = true;
        doc.mandatory = true;
        if (normPurpose === 'student') {
          doc.title = 'Invitation Letter (University Offer)';
          doc.description = 'Official unconditional admission offer or Confirmation of Enrolment from accredited university';
          doc.hint = 'Must verify course name, study start/end dates, and institutional accreditation';
        } else if (normPurpose === 'work') {
          doc.title = 'Invitation Letter (Employer Sponsorship)';
          doc.description = 'Official employer job offer and approved work sponsorship certificate on corporate letterhead';
          doc.hint = 'Must be on company letterhead with employer tax & business registration details';
        } else if (normPurpose === 'family_visit') {
          doc.title = 'Invitation Letter (Host)';
          doc.description = 'Official invitation letter from host family member residing in destination country';
          doc.hint = 'Must state host legal residency status, residential address, and accommodation guarantee';
        } else if (normPurpose === 'business') {
          doc.title = 'Invitation Letter (Host Company)';
          doc.description = 'Official corporate invitation letter from counterpart company or conference organizer';
          doc.hint = 'Must state purpose of visit, scheduled meeting agenda, and financial responsibility';
        }
      }
    }

    // Special case 3: Detailed Itinerary
    // Mandatory for tourism and business. Recommended for family_visit. Excluded for student & work.
    if (doc.key === 'detailed_itinerary') {
      if (normPurpose === 'tourism' || normPurpose === 'business') {
        include = true;
        doc.mandatory = true;
      } else if (normPurpose === 'family_visit') {
        include = true;
        doc.mandatory = false; // Recommended for family visit
        doc.hint = 'Recommended: Day-by-day plan of cities and tourist attractions planned during visit';
      } else {
        include = false;
      }
    }

    // Special case 4: Covering Letter purpose-specific tailoring
    if (doc.key === 'covering_letter') {
      include = true;
      doc.mandatory = true;
      if (normPurpose === 'student') {
        doc.title = 'Covering Letter (SOP)';
        doc.description = 'Statement of Purpose (SOP) explaining academic background, course selection, and career objectives';
        doc.hint = 'Must be signed and dated by applicant explaining genuine student intent';
      } else if (normPurpose === 'work') {
        doc.title = 'Covering Letter (Employer / Applicant)';
        doc.description = 'Covering letter detailing professional role, qualifications, and employment contract details';
      }
    }

    // Special case 5: Schengen-specific insurance requirement
    if (doc.key === 'travel_insurance' && isSchengen) {
      doc.hint = 'Minimum €30,000 coverage required for Schengen countries';
    }

    if (include) {
      applicableDocs.push(doc);
    }
  }

  // Sort by priority (1 = highest priority)
  return applicableDocs.sort((a, b) => a.priority - b.priority);
}

export function getRequiredDocumentsForRoute(
  destinationCountry: string,
  purpose: string
): DocumentRequirement[] {
  return getDocumentsForRoute(destinationCountry, purpose).filter(d => d.mandatory);
}

export function isDocumentRequired(
  destinationCountry: string,
  purpose: string,
  documentKey: string
): boolean {
  const docs = getDocumentsForRoute(destinationCountry, purpose);
  return docs.some(d => d.key === documentKey && d.mandatory);
}
