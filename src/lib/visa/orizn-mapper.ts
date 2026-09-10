// src/lib/visa/orizn-mapper.ts
// Maps Orizn raw response → StructuredVisaRequirements (the format ai-requirements.ts uses)
// Missing fields → sensible defaults, never throws

import type { OrignRawResponse } from './orizn-client';
import type {
  StructuredVisaRequirements,
  DocumentRequiredItem,
  FinancialProofItem,
  OtherRequirementItem,
} from '../../pages/api/visa/ai-requirements';

function mapRequirementType(requirement: string): string {
  switch (requirement?.toLowerCase()) {
    case 'visa_free':      return 'Visa Free';
    case 'visa_on_arrival': return 'Visa on Arrival';
    case 'e_visa':         return 'e-Visa';
    case 'eta':            return 'ETA (Electronic Travel Authorization)';
    case 'visa_required':  return 'Visa Required';
    default:               return requirement || 'Visa Required';
  }
}

function mapDocuments(docs: string[] | undefined): DocumentRequiredItem[] {
  if (!Array.isArray(docs) || !docs.length) {
    return [{
      title: 'Valid Passport',
      description: 'Passport valid for at least 6 months beyond your stay.',
      is_mandatory: true,
    }];
  }
  return docs.map((doc, idx) => ({
    title: doc.length > 60 ? doc.slice(0, 60) : doc,
    description: doc,
    is_mandatory: idx < 3, // first 3 assumed mandatory
  }));
}

function mapHowToApply(process: string[] | undefined, requirement: string): string[] {
  if (Array.isArray(process) && process.length) return process;
  // Sensible defaults based on requirement type
  switch (requirement?.toLowerCase()) {
    case 'visa_free':
      return ['No visa required. Carry valid passport.', 'Check entry requirements before travel.'];
    case 'visa_on_arrival':
      return ['Arrive at port of entry.', 'Proceed to Visa on Arrival counter.', 'Submit documents and pay fee.'];
    case 'e_visa':
      return ['Visit official e-Visa portal.', 'Fill application form online.', 'Upload required documents.', 'Pay fee online.', 'Receive e-Visa via email.'];
    default:
      return ['Contact nearest embassy or consulate.', 'Submit visa application with required documents.', 'Attend interview if required.'];
  }
}

function mapCost(cost: string | undefined): StructuredVisaRequirements['costs'] {
  if (!cost) {
    return { visa_fee: 'Check official embassy website', service_fee: 'Varies', total_fee: 'Varies', notes: 'Fees subject to change. Verify before applying.' };
  }
  return {
    visa_fee: cost,
    service_fee: 'Included or separate per application center',
    total_fee: cost,
    notes: 'Fees subject to change. Verify at official embassy website.',
  };
}

function mapProcessingTime(days: string | number | undefined): string {
  if (!days) return 'Refer to official embassy website';
  const num = typeof days === 'number' ? days : parseInt(String(days), 10);
  if (!isNaN(num)) return `${num} working day${num !== 1 ? 's' : ''}`;
  return String(days);
}

export function mapOrignToStructured(
  raw: OrignRawResponse,
  fromCountry: string,
  toCountry: string,
  purpose: string
): StructuredVisaRequirements {
  try {
    const d = raw.data;
    const req = d.requirement || 'visa_required';
    const visaType = mapRequirementType(req);
    const isVisaFree = req === 'visa_free';
    const stayDays = d.visa_free_days ? `${d.visa_free_days} days` : undefined;

    const financialProofs: FinancialProofItem[] = isVisaFree ? [] : [
      {
        type: 'Bank Statement',
        minimum_balance_or_amount: null,
        time_frame: 'Last 3-6 months',
        notes: 'To demonstrate sufficient funds for the trip.',
      },
    ];

    const otherRequirements: OtherRequirementItem[] = [];
    if (Array.isArray(d.tips) && d.tips.length) {
      d.tips.forEach(tip => {
        otherRequirements.push({ category: 'Travel Tip', details: tip });
      });
    }
    if (d.country_info?.currency) {
      otherRequirements.push({ category: 'Currency', details: d.country_info.currency });
    }
    if (d.country_info?.language) {
      otherRequirements.push({ category: 'Official Language', details: d.country_info.language });
    }

    const result: StructuredVisaRequirements = {
      passport_country: fromCountry,
      destination_country: toCountry,
      purpose_of_visit: purpose,
      visa_type: visaType,
      source_url: `https://visa.orizn.app`,
      official_source_name: 'Orizn Visa Intelligence',
      overview: d.description || `${visaType} requirements for ${fromCountry} passport holders traveling to ${toCountry}.`,
      processing_time: mapProcessingTime(d.processing_days),
      stay_duration: stayDays,
      validity_and_stay: {
        visa_validity: stayDays ? `Up to ${stayDays}` : undefined,
        max_stay_per_entry: stayDays,
        entry_type: 'Single / Multiple — check official source',
      },
      documents_required: mapDocuments(d.documents_required),
      financial_proofs: financialProofs,
      other_requirements: otherRequirements,
      how_to_apply: mapHowToApply(d.process, req),
      costs: mapCost(d.cost),
      processing_and_timing: {
        apply_window: isVisaFree ? 'Not applicable' : 'At least 4-6 weeks before travel',
        decision_time: mapProcessingTime(d.processing_days),
        max_extension: 'Refer to immigration authority',
      },
    };

    return result;
  } catch (err) {
    console.error('[ORIZN Mapper] Error mapping response:', err);
    throw err; // Let resolver handle it → returns null
  }
}
