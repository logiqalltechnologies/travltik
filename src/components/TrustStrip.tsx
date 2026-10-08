export default function TrustStrip() {
  const badges = [
    { title: "100% Escrow Protected", desc: "Funds released upon milestone approval" },
    { title: "MARA & RCIC Affiliates", desc: "Government-registered legal experts" },
    { title: "Bank-Grade Encryption", desc: "256-bit SSL document security" },
    { title: "Verified Reviews", desc: "Only confirmed applicants submit ratings" },
  ];

  return (
    <div className="bg-slate-100 border-y border-slate-200 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-3 justify-center text-left">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-slate-900">{b.title}</p>
              <p className="text-[11px] text-slate-500 hidden sm:block">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
