// src/components/visa/DocumentChecklist.tsx
import React from 'react';
import type { DocumentRequirement } from '../../lib/visa/types';
import { getDocumentsForRoute } from '../../lib/visa/document-requirements';
import { CheckCircle } from 'lucide-react';

interface DocumentChecklistProps {
  destinationCountry: string;
  purpose: string;
  onToggle: (key: string) => void;
  checkedItems: Record<string, boolean>;
}

export function DocumentChecklist({ 
  destinationCountry, 
  purpose, 
  onToggle, 
  checkedItems 
}: DocumentChecklistProps) {
  
  const documents = getDocumentsForRoute(destinationCountry, purpose);
  
  // Group documents into Mandatory and Recommended
  const mandatoryDocs = documents.filter(d => d.mandatory);
  const optionalDocs = documents.filter(d => !d.mandatory);
  
  return (
    <div className="space-y-6 text-left">
      {/* Mandatory Documents */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
          <span className="text-rose-500">*</span>
          Mandatory Documents ({mandatoryDocs.length})
        </h3>
        <div className="space-y-3">
          {mandatoryDocs.map((doc) => (
            <DocumentItem
              key={doc.key}
              doc={doc}
              checked={Boolean(checkedItems[doc.key])}
              onToggle={() => onToggle(doc.key)}
              mandatory={true}
            />
          ))}
        </div>
      </div>
      
      {/* Optional / Recommended Documents */}
      {optionalDocs.length > 0 && (
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
            <span className="text-slate-400">○</span>
            Recommended Documents ({optionalDocs.length})
          </h3>
          <div className="space-y-3">
            {optionalDocs.map((doc) => (
              <DocumentItem
                key={doc.key}
                doc={doc}
                checked={Boolean(checkedItems[doc.key])}
                onToggle={() => onToggle(doc.key)}
                mandatory={false}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Notes */}
      <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/90 text-xs text-amber-900 space-y-1 shadow-2xs">
        <p className="font-bold">📌 Important Consular Notes:</p>
        <ul className="list-disc pl-4 space-y-0.5 text-amber-800">
          <li>All documents must be in English or accompanied by certified official translations.</li>
          <li>Original documents may be required for physical verification during consular appointment.</li>
          <li>Ensure passport bio-data and visa application details match without typographical errors.</li>
        </ul>
      </div>
    </div>
  );
}

function DocumentItem({ 
  doc, 
  checked, 
  onToggle, 
  mandatory 
}: { 
  doc: DocumentRequirement; 
  checked: boolean; 
  onToggle: () => void; 
  mandatory: boolean;
}) {
  return (
    <div 
      onClick={onToggle}
      className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
        checked 
          ? 'bg-emerald-50/60 border-emerald-300 shadow-2xs' 
          : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-2xs'
      }`}
    >
      <div className="flex-shrink-0 pt-0.5">
        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
          checked 
            ? 'bg-emerald-600 border-emerald-600 text-white' 
            : 'border-slate-300 bg-white hover:border-emerald-500'
        }`}>
          {checked && <CheckCircle className="w-3.5 h-3.5 stroke-[3] text-white" />}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base leading-none">{doc.icon}</span>
          <span className={`text-sm font-bold ${
            checked ? 'text-slate-950' : 'text-slate-900'
          }`}>
            {doc.title}
          </span>
          {mandatory && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200/70 uppercase">
              Required
            </span>
          )}
          {doc.key === 'covering_letter' && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/70 uppercase">
              All Routes
            </span>
          )}
        </div>
        <p className={`text-xs mt-1 leading-relaxed ${
          checked ? 'text-slate-700' : 'text-slate-600'
        }`}>
          {doc.description}
        </p>
        {doc.hint && (
          <p className="text-[11px] text-slate-500 mt-1 italic">
            💡 {doc.hint}
          </p>
        )}
      </div>
    </div>
  );
}
export default DocumentChecklist;
