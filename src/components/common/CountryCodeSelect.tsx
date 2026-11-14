import React, { useState, useRef, useEffect, useId } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { ALL_COUNTRY_DIAL_CODES, POPULAR_COUNTRY_CODES, type CountryDialCode } from '../../data/countryDialCodes';

interface CountryCodeSelectProps {
  value: string; // e.g. "+91"
  onChange: (dialCode: string, country?: CountryDialCode) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}

export function CountryCodeSelect({
  value,
  onChange,
  className = '',
  size = 'md',
  id
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  // Find currently selected country (fallback to India if not matched)
  const selectedCountry = 
    ALL_COUNTRY_DIAL_CODES.find((c) => c.code === value) ||
    POPULAR_COUNTRY_CODES.find((c) => c.code === value) ||
    { country: 'India', code: value || '+91', iso: 'IN', flag: '🇮🇳' };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filter countries by search query
  const query = search.trim().toLowerCase();
  const filteredCountries = query
    ? ALL_COUNTRY_DIAL_CODES.filter(
        (c) =>
          c.country.toLowerCase().includes(query) ||
          c.code.includes(query) ||
          c.iso.toLowerCase().includes(query)
      )
    : ALL_COUNTRY_DIAL_CODES;

  const sizeClasses = {
    sm: 'h-9 px-2 text-xs',
    md: 'h-11 sm:h-10 px-2.5 text-xs sm:text-sm',
    lg: 'h-12 px-3 text-sm'
  }[size];

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id={selectId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch('');
        }}
        className={`w-full ${sizeClasses} flex items-center justify-between gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-900 font-semibold cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#481268]/20 focus:border-[#481268]`}
        title={`Country Dial Code: ${selectedCountry.country} (${selectedCountry.code})`}
      >
        <div className="flex items-center gap-1.5 truncate">
          <span className="text-base leading-none select-none">{selectedCountry.flag}</span>
          <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-800">
            {selectedCountry.code} ({selectedCountry.iso})
          </span>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu - Full A to Z Alphabetical List */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-72 sm:w-80 max-h-72 bg-white rounded-2xl border border-slate-200 shadow-2xl z-[99999] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
          {/* Search Input Bar */}
          <div className="p-2 border-b border-slate-100 bg-slate-50/90 sticky top-0 z-10 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code (+91, UK, Canada)..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#481268]/30 focus:border-[#481268] text-slate-800 placeholder:text-slate-400 font-medium"
              />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 pr-1">
              A–Z
            </span>
          </div>

          {/* Countries List - Start to End Alphabetically */}
          <div className="overflow-y-auto flex-1 divide-y divide-slate-50 p-1">
            {filteredCountries.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400">
                No country found matching "{search}"
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = selectedCountry.code === c.code && selectedCountry.country === c.country;
                return (
                  <button
                    key={`${c.iso}-${c.code}`}
                    type="button"
                    onClick={() => {
                      onChange(c.code, c);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 text-left rounded-lg text-xs transition-colors cursor-pointer ${
                      isSelected ? 'bg-purple-50 text-purple-900 font-bold' : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-base select-none">{c.flag}</span>
                      <span className="truncate font-medium">{c.country}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <span className="font-bold text-slate-500 font-mono text-[11px]">{c.code}</span>
                      <span className="text-[10px] text-slate-400">({c.iso})</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-purple-700 ml-1" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
