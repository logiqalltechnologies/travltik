import React, { useEffect } from 'react';
import { ExpertProfileDetail } from './ExpertProfileDetail';
import { dummyExperts } from '../../data/dummyExperts';

interface ExpertProfileModalProps {
  expert: any;
  isOpen?: boolean;
  onClose: () => void;
  onBookClick?: (expert: any) => void;
}

export function ExpertProfileModal({ expert, isOpen, onClose }: ExpertProfileModalProps) {
  if (!isOpen || !expert) return null;

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, []);

  const related = dummyExperts.filter(e => e.id !== expert.id).slice(0, 4);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl bg-[#f8fafc] rounded-3xl shadow-2xl overflow-y-auto border border-slate-200 my-auto transform transition-all duration-300 max-h-[92vh] flex flex-col font-sans text-slate-900 overscroll-contain custom-scrollbar p-2 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ExpertProfileDetail 
          expert={expert} 
          relatedExperts={related} 
          isModal={true} 
          onClose={onClose} 
        />
      </div>
    </div>
  );
}
