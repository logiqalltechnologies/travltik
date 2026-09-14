import React from 'react';

interface Props {
  onNo: () => void;
  onYes: () => void;
  countryName: string;
  purpose: string;
}

export function VisaStatusQuestion({ onNo, onYes, countryName, purpose }: Props) {
  return (
    <div
      className="my-6 sm:my-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-50/50 border border-slate-200/90 shadow-md max-w-2xl mx-auto text-center animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-[#00a896]/10 text-[#00a896] flex items-center justify-center mx-auto mb-3.5 text-2xl font-bold shadow-2xs">
        🛂
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
        Do you already have a {countryName} visa?
      </h3>
      <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-md mx-auto">
        This helps us show you the right information for your {purpose} trip.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3.5 max-w-md mx-auto">
        <button
          type="button"
          onClick={onYes}
          className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm bg-emerald-50 text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-all cursor-pointer active:scale-95 shadow-2xs"
        >
          ✓ Yes, I have a visa
        </button>
        
        <button
          type="button"
          onClick={onNo}
          className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm bg-indigo-50 text-indigo-700 border-2 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 transition-all cursor-pointer active:scale-95 shadow-2xs"
        >
          ✗ No, I need one
        </button>
      </div>
    </div>
  );
}

export default VisaStatusQuestion;
