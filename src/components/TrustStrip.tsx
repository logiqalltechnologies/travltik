export default function TrustStrip() {
  return (
    <div className="w-full bg-slate-50/90 border-y border-slate-200/80 py-4 px-4 sm:px-6 shadow-2xs">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
        
        {/* Badge 1: SECURE SSL ENCRYPTION (Green padlock with checkmark) */}
        <div className="flex items-center gap-3 justify-center sm:justify-start px-2 py-1">
          <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
            <div className="w-8 h-7 bg-[#54B828] rounded-md relative flex items-center justify-center shadow-xs mt-2">
              <div className="absolute -top-2.5 w-4.5 h-3.5 border-[2.5px] border-[#54B828] rounded-t-full bg-transparent" />
              <svg className="w-4 h-4 text-white stroke-[3.5] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="leading-tight text-left">
            <span className="block text-xs sm:text-sm font-black text-slate-800 tracking-tight uppercase">
              SECURE
            </span>
            <span className="block text-[9.5px] sm:text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
              SSL ENCRYPTION
            </span>
          </div>
        </div>

        {/* Badge 2: SECURE CHECKOUT (Gradient outline card with blue padlock) */}
        <div className="flex items-center gap-3 justify-center sm:justify-start px-2 py-1">
          <div className="w-9 h-9 rounded-xl p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shrink-0 shadow-xs flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-2 border-[2px] border-indigo-600 rounded-t-xs" />
                <div className="w-4 h-3 bg-indigo-600 rounded-xs flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="leading-tight text-left">
            <span className="block text-xs sm:text-sm font-black text-slate-800 tracking-tight uppercase">
              SECURE
            </span>
            <span className="block text-[9.5px] sm:text-[10.5px] font-bold text-indigo-600 uppercase tracking-wider">
              CHECKOUT
            </span>
          </div>
        </div>

        {/* Badge 3: Norton SECURED (Gold badge with verified checkmark & Symantec) */}
        <div className="flex items-center gap-3 justify-center sm:justify-start px-2 py-1">
          <div className="relative flex items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#FCB316] flex items-center justify-center border border-amber-300 shadow-xs p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-slate-950 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="leading-tight text-left">
            <div className="flex items-baseline gap-1">
              <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">Norton</span>
              <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-tight">SECURED</span>
            </div>
            <span className="block text-[9.5px] font-medium text-slate-500">
              powered by Symantec
            </span>
          </div>
        </div>

        {/* Badge 4: VeriSign Secured (Maroon ring with checkmark) */}
        <div className="flex items-center gap-3 justify-center sm:justify-start px-2 py-1">
          <div className="w-9 h-9 rounded-full border-2 border-[#9E1B32] flex items-center justify-center bg-white shrink-0 shadow-xs">
            <svg className="w-4.5 h-4.5 text-[#9E1B32] stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="leading-tight text-left">
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-black text-[#9E1B32] tracking-tight">VeriSign</span>
              <span className="text-[8px] font-bold text-slate-400">®</span>
            </div>
            <span className="block text-[9.5px] font-bold text-slate-700 uppercase tracking-wider">
              Secured
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
