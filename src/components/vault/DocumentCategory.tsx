import React, { useState } from 'react';
import { ChevronDown, Upload, CheckCircle2, Clock, FileText } from 'lucide-react';

export interface DocumentCategoryType {
  id: string;
  title: string;
  icon: string;
  description: string;
  documents: string[];
}

interface Props {
  category: DocumentCategoryType;
  documents: any[];
  onUpload?: (docId: string, docTitle?: string) => void;
  onViewDoc?: (doc: any) => void;
}

export function DocumentCategory({ category, documents, onUpload, onViewDoc }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const completed = documents.filter(d => d.status === 'verified' || d.isUploaded || d.status === 'completed').length;
  const total = documents.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mb-4 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all">
      {/* Category Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/80 transition cursor-pointer select-none text-left"
      >
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <span className="text-2xl sm:text-3xl shrink-0 p-1.5 rounded-xl bg-slate-50 border border-slate-100">{category.icon}</span>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">{category.title}</h3>
            <p className="text-xs text-slate-500 truncate">{category.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Progress */}
          <div className="text-right">
            <div className="text-xs sm:text-sm font-bold text-slate-900">
              {completed}/{total}
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500">completed</div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-14 sm:w-20 h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Chevron */}
          <div className={`p-1 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-700' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Documents List */}
      {isOpen && (
        <div className="border-t border-slate-100 divide-y divide-slate-100 bg-slate-50/30">
          {documents.length === 0 ? (
            <div className="py-6 px-4 text-center text-xs text-slate-400">
              No documents currently in this category.
            </div>
          ) : (
            documents.map((doc, idx) => {
              const isVerified = doc.status === 'verified' || doc.isUploaded || doc.status === 'completed';
              return (
                <div
                  key={doc.id || doc.key || idx}
                  className="p-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                      isVerified ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/60' : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {doc.icon || <FileText className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-xs sm:text-sm font-semibold text-slate-900 truncate block">
                          {doc.title || doc.name || doc.label}
                        </strong>
                        {doc.mandatory && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {doc.description || doc.hint || (isVerified ? (doc.docNumber || 'Verified on file') : 'Pending upload')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Pending</span>
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => onUpload ? onUpload(doc.id || doc.key, doc.title) : null}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer"
                      title={isVerified ? "Re-upload / Update Document" : "Upload Document"}
                    >
                      <Upload className="w-3.5 h-3.5 text-[#00a896]" />
                      <span className="hidden sm:inline">{isVerified ? 'Update' : 'Upload'}</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default DocumentCategory;
