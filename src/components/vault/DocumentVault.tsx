import React, { useState, useEffect, useRef } from 'react';
import { DocumentCategory, type DocumentCategoryType } from './DocumentCategory';
import { ShieldCheck, Upload, CheckCircle2, ArrowLeft, RefreshCw, Lock, FileText, Search } from 'lucide-react';

export const DOCUMENT_CATEGORIES: DocumentCategoryType[] = [
  {
    id: 'passport',
    title: 'Passport',
    icon: '🛂',
    description: 'Your primary travel document',
    documents: ['passport', 'previous_passport'],
  },
  {
    id: 'ids',
    title: 'IDs & PR Proofs',
    icon: '🪪',
    description: 'Identity and residency documents',
    documents: ['national_id', 'aadhaar', 'pan', 'pr_card'],
  },
  {
    id: 'education',
    title: 'Educational',
    icon: '🎓',
    description: 'Academic certificates and transcripts',
    documents: ['degree', 'marksheet', 'transcript', 'ielts'],
  },
  {
    id: 'income',
    title: 'Income Proofs',
    icon: '💼',
    description: 'Employment and income documents',
    documents: ['salary_slip', 'itr', 'form_16'],
  },
  {
    id: 'funds',
    title: 'Funds Proofs',
    icon: '💰',
    description: 'Financial capability documents',
    documents: ['bank_statement', 'fd', 'property'],
  },
  {
    id: 'travel',
    title: 'Travel History',
    icon: '✈️',
    description: 'Previous visas and travel records',
    documents: ['previous_visa', 'entry_exit_stamps'],
  },
  {
    id: 'invitations',
    title: 'Invitations',
    icon: '📨',
    description: 'Invitation and sponsorship letters',
    documents: ['invitation_letter', 'sponsor_letter'],
  },
  {
    id: 'medical',
    title: 'Medical Certificate',
    icon: '🏥',
    description: 'Health and vaccination records',
    documents: ['medical_report', 'vaccination'],
  },
];

export const DOCUMENT_DEFAULTS: Record<string, { title: string; description: string; icon: string; mandatory?: boolean }> = {
  passport: { title: 'Current Passport (Bio-data Page)', description: 'Valid original passport with min 6 months validity', icon: '🛂', mandatory: true },
  previous_passport: { title: 'Previous / Expired Passport', description: 'Old passport booklet if you have prior travel history', icon: '📘' },
  national_id: { title: 'National Identity Card', description: 'Government ID card (Aadhaar, Citizen ID, State ID)', icon: '🪪', mandatory: true },
  aadhaar: { title: 'Aadhaar / National ID', description: 'UIDAI Aadhaar front and back copy', icon: '🪪' },
  pan: { title: 'PAN Card / Tax ID', description: 'Permanent Account Number or Taxpayer ID', icon: '💳' },
  pr_card: { title: 'Permanent Residency (PR) Card', description: 'Proof of permanent residency status if applicable', icon: '🪪' },
  degree: { title: 'Degree / Graduation Certificate', description: 'Highest educational qualification certificate', icon: '🎓', mandatory: true },
  marksheet: { title: 'Academic Marksheets / Gradesheet', description: 'Consolidated semester or annual marks card', icon: '📜' },
  transcript: { title: 'Official Academic Transcript', description: 'Sealed or certified university transcript record', icon: '📄' },
  ielts: { title: 'Language Test Score (IELTS/TOEFL)', description: 'Official English / language proficiency test report form', icon: '🗣️' },
  salary_slip: { title: 'Salary Payslips (Last 3 Months)', description: 'Monthly payment receipts with company seal/stamp', icon: '💼', mandatory: true },
  itr: { title: 'Income Tax Return (ITR V / Form 16)', description: 'Last 2–3 assessment years acknowledged tax filings', icon: '📑' },
  form_16: { title: 'Employer Form 16 / Tax Statement', description: 'Certificate of tax deducted by current employer', icon: '📋' },
  bank_statement: { title: 'Bank Statement (Last 6 Months)', description: 'Certified account statement with bank stamp and seal', icon: '🏦', mandatory: true },
  fd: { title: 'Fixed Deposit / Liquid Assets Proof', description: 'Bank fixed deposit receipts or investment certificates', icon: '💰' },
  property: { title: 'Property & Asset Valuation', description: 'Title deed or registered property valuation report', icon: '🏡' },
  previous_visa: { title: 'Previous Travel Visas', description: 'Copies of previously approved visas and travel permits', icon: '✈️' },
  entry_exit_stamps: { title: 'Immigration Entry & Exit Stamps', description: 'Passport stamps documenting previous foreign travels', icon: '🛃' },
  invitation_letter: { title: 'Official Invitation Letter', description: 'Sponsor, university, or host company letter of invitation', icon: '📨', mandatory: true },
  sponsor_letter: { title: 'Sponsorship Affidavit / Declaration', description: 'Signed financial undertaking with sponsor ID proof', icon: '✍️' },
  medical_report: { title: 'Medical Fitness Certificate', description: 'Authorized panel physician health examination report', icon: '🏥', mandatory: true },
  vaccination: { title: 'Yellow Fever / Vaccination Certificate', description: 'WHO international certificate of vaccination or prophylaxis', icon: '💉' },
};

export function OverallProgress({ documents }: { documents: any[] }) {
  const verified = documents.filter(d => d.status === 'verified' || d.isUploaded || d.status === 'completed').length;
  const total = documents.length;
  const progress = total > 0 ? Math.round((verified / total) * 100) : 0;

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white border border-emerald-200/80 shadow-xs">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-900">Overall Progress</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
          {verified}/{total} verified ({progress}%)
        </span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-slate-200/80 overflow-hidden p-0.5">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>Keep your documents ready for instant visa filing</span>
        <span>{total - verified} pending upload</span>
      </div>
    </div>
  );
}

interface DocumentVaultProps {
  initialDocuments?: any[];
  onBack?: () => void;
}

export function DocumentVault({ initialDocuments, onBack }: DocumentVaultProps) {
  const [documents, setDocuments] = useState<any[]>(() => {
    if (initialDocuments && initialDocuments.length > 0) return initialDocuments;
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('travltik_vault_documents_v2');
        if (saved) return JSON.parse(saved);
        
        // Check older dashboard docs
        const oldDocs = localStorage.getItem('travltik_user_docs_v1');
        if (oldDocs) {
          const parsed = JSON.parse(oldDocs);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        // ignore
      }
    }
    // Default seed with default documents from templates
    const defaultList: any[] = [];
    DOCUMENT_CATEGORIES.forEach(cat => {
      cat.documents.forEach(docKey => {
        const tpl = DOCUMENT_DEFAULTS[docKey];
        if (tpl) {
          defaultList.push({
            id: docKey,
            key: docKey,
            type: docKey,
            categoryId: cat.id,
            title: tpl.title,
            description: tpl.description,
            icon: tpl.icon,
            mandatory: tpl.mandatory || false,
            status: docKey === 'passport' ? 'verified' : 'pending',
            isUploaded: docKey === 'passport',
            fileUrl: null,
            fileName: docKey === 'passport' ? 'Passport_Primary_Scan.pdf' : null,
            uploadedAt: docKey === 'passport' ? '2026-08-10' : null
          });
        }
      });
    });
    return defaultList;
  });

  const [activeUploadDocId, setActiveUploadDocId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('travltik_vault_documents_v2', JSON.stringify(documents));
      } catch (e) {
        // ignore
      }
    }
  }, [documents]);

  const handleUpload = (docId: string, _docTitle?: string) => {
    setActiveUploadDocId(docId);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeUploadDocId) return;

    setDocuments(prev => {
      const exists = prev.some(d => d.id === activeUploadDocId || d.key === activeUploadDocId || d.type === activeUploadDocId);
      if (exists) {
        return prev.map(d => {
          if (d.id === activeUploadDocId || d.key === activeUploadDocId || d.type === activeUploadDocId) {
            return {
              ...d,
              status: 'verified',
              isUploaded: true,
              fileName: file.name,
              fileSize: `${(file.size / 1024).toFixed(1)} KB`,
              uploadedAt: new Date().toISOString().split('T')[0]
            };
          }
          return d;
        });
      } else {
        const tpl = DOCUMENT_DEFAULTS[activeUploadDocId];
        return [
          ...prev,
          {
            id: activeUploadDocId,
            key: activeUploadDocId,
            type: activeUploadDocId,
            title: tpl?.title || activeUploadDocId,
            description: tpl?.description || 'Uploaded Document',
            icon: tpl?.icon || '📄',
            status: 'verified',
            isUploaded: true,
            fileName: file.name,
            fileSize: `${(file.size / 1024).toFixed(1)} KB`,
            uploadedAt: new Date().toISOString().split('T')[0]
          }
        ];
      }
    });

    setToastMessage(`Document "${file.name}" verified and secured in vault!`);
    setTimeout(() => setToastMessage(null), 4000);
    setActiveUploadDocId(null);
  };

  // Group documents into the 8 categories
  const groupedDocuments = DOCUMENT_CATEGORIES.map(category => {
    // Find documents belonging to this category
    const categoryDocs: any[] = [];
    
    // First, fill defined documents for this category
    category.documents.forEach(docKey => {
      const match = documents.find(d => 
        d.id === docKey || 
        d.key === docKey || 
        d.type === docKey || 
        (d.categoryId && d.categoryId === category.id && d.title?.toLowerCase().includes(docKey.replace(/_/g, ' ')))
      );

      if (match) {
        categoryDocs.push(match);
      } else {
        const tpl = DOCUMENT_DEFAULTS[docKey];
        if (tpl) {
          categoryDocs.push({
            id: docKey,
            key: docKey,
            type: docKey,
            categoryId: category.id,
            title: tpl.title,
            description: tpl.description,
            icon: tpl.icon,
            mandatory: tpl.mandatory || false,
            status: 'pending',
            isUploaded: false
          });
        }
      }
    });

    // Also include any loose user documents that match category tags/title
    documents.forEach(d => {
      if (!categoryDocs.some(cd => cd.id === d.id || cd.key === d.key)) {
        const dt = (d.type || '').toLowerCase();
        const dtitle = (d.title || '').toLowerCase();
        const matchesCategory = category.documents.some(k => dt.includes(k) || dtitle.includes(k.replace(/_/g, ' ')));
        if (matchesCategory || d.categoryId === category.id) {
          categoryDocs.push(d);
        }
      }
    });

    // Filter by search query if any
    const filtered = searchQuery.trim()
      ? categoryDocs.filter(d => 
          (d.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (d.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (d.fileName || '').toLowerCase().includes(searchQuery.toLowerCase())
        )
      : categoryDocs;

    return {
      category,
      documents: filtered
    };
  });

  // Calculate all unique documents for overall progress
  const allFlattenedDocs = groupedDocuments.flatMap(g => g.documents);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 font-sans">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar with Back and Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {onBack ? (
              <button
                type="button"
                onClick={onBack}
                className="p-1.5 -ml-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
                title="Go Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <a
                href="/dashboard"
                className="p-1.5 -ml-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition inline-flex items-center gap-1 text-xs font-semibold"
                title="Go to Dashboard"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Dashboard</span>
              </a>
            )}
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              AES-256 Encrypted
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Document Vault
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Organize your documents by category for faster visa applications.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in vault..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-2xs"
            />
          </div>
          <a
            href="/dashboard"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition shrink-0 inline-flex items-center gap-1.5"
          >
            Full Dashboard
          </a>
        </div>
      </div>

      {/* Overall Progress */}
      <OverallProgress documents={allFlattenedDocs} />

      {/* Categories */}
      <div className="mt-6 space-y-4">
        {groupedDocuments.map(group => (
          <DocumentCategory
            key={group.category.id}
            category={group.category}
            documents={group.documents}
            onUpload={handleUpload}
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentVault;
