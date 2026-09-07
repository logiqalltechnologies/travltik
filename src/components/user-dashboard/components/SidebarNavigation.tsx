import React from "react";
import { ChevronLeft, LogOut, X } from "lucide-react";

function getAppDisplayTitle(app: any): string {
  if (!app) return "Canada  Student Visa";

  const dest = (app.destination || app.country || app.targetDest || "").trim();
  let vType = (app.visaType || "").trim();

  // Normalize visa type into clean professional title (e.g. Student Visa, Work Visa, Tourist Visa)
  if (vType.toLowerCase().includes("student") || app.purpose?.toLowerCase().includes("study")) {
    vType = "Student Visa";
  } else if (vType.toLowerCase().includes("work") || app.purpose?.toLowerCase().includes("work")) {
    vType = "Work Visa";
  } else if (vType.toLowerCase().includes("tourist") || vType.toLowerCase().includes("visitor") || app.purpose?.toLowerCase().includes("tourism")) {
    vType = "Tourist Visa";
  } else if (vType.toLowerCase().includes("pr") || app.purpose?.toLowerCase().includes("pr")) {
    vType = "PR Visa";
  } else if (!vType) {
    vType = "Student Visa";
  }

  const countryName = dest || "Canada";
  return `${countryName}  ${vType}`;
}

export function SidebarNavigation({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  activeTab,
  setActiveTab,
  navSections,
  allNavItems,
  visasProcessingState,
  selectedApplicationId,
  setSelectedApplicationId,
  handleLogout
}: {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (val: boolean) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navSections: Array<{
    title: string;
    items: Array<{
      id: string;
      label: string;
      icon: any;
      count?: number;
      badge?: string;
      badgeColor?: string;
    }>;
  }>;
  allNavItems?: Array<{
    id: string;
    label: string;
    icon: any;
    count?: number;
    badge?: string;
    badgeColor?: string;
  }>;
  applicationsCount?: number;
  visasProcessingState?: any[];
  selectedApplicationId?: string | null;
  luggagePercent?: number;
  readinessScore?: number;
  setSelectedApplicationId?: (id: string | null) => void;
  handleLogout: () => void;
}) {
  const safeNavItems = allNavItems || (navSections || []).flatMap((s: any) => s.items || []);
  return (
    <>
      {/* Desktop Collapsible Left Sidebar */}
      <aside className={`hidden lg:flex bg-white border-r border-slate-200/80 flex-col justify-between transition-all duration-300 z-30 shrink-0 select-none ${isSidebarCollapsed ? "w-20" : "w-64"}`}>
        <div className="p-3.5 space-y-5 overflow-y-auto max-h-[calc(100vh-120px)] no-scrollbar">
          <div className="flex items-center justify-between px-2 pb-1 border-b border-slate-100">
            {!isSidebarCollapsed ? (
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Menu
              </span>
            ) : <div className="w-3" />}
            <button
              type="button"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              className="p-1 rounded-lg border border-slate-200/80 hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className={`w-3.5 h-3.5 transition-transform ${isSidebarCollapsed ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Grouped Navigation Sections */}
          <nav className="space-y-4">
            {navSections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-1">
                {!isSidebarCollapsed && section.title && section.title !== "DASHBOARD" && (
                  <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 py-1">
                    {section.title}
                  </h5>
                )}
                <div className="space-y-0.5">
                  {section.items.map(item => {
                    const isActive = activeTab === item.id;
                    const IconComp = item.icon;
                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          onClick={() => {
                            setActiveTab(item.id);
                            if (item.id === "cases") {
                              setSelectedApplicationId?.(null);
                            }
                          }}
                          title={item.label}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isActive && !selectedApplicationId
                              ? "bg-slate-100 text-slate-950 font-bold shadow-2xs"
                              : isActive
                              ? "bg-slate-50 text-slate-900 font-bold"
                              : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <IconComp className={`w-4 h-4 shrink-0 ${isActive ? "text-slate-950 stroke-[2.2]" : "text-slate-500 stroke-[1.8]"}`} />
                            {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                          </div>
                          {!isSidebarCollapsed && (
                            item.count !== undefined ? (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 min-w-[20px] text-center">
                                {item.count}
                              </span>
                            ) : item.badge ? (
                              <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md ${item.badgeColor || 'bg-slate-100 text-slate-700'}`}>
                                {item.badge}
                              </span>
                            ) : null
                          )}
                        </button>

                        {/* Nested Active Applications List */}
                        {item.id === "cases" && !isSidebarCollapsed && (
                          <div className="ml-5 pl-2.5 my-1.5 space-y-1 border-l-2 border-slate-200">
                            {visasProcessingState && visasProcessingState.length > 0 ? (
                              visasProcessingState.map((app: any) => {
                                const isAppSelected = activeTab === "cases" && selectedApplicationId === app.id;
                                const displayTitle = getAppDisplayTitle(app);
                                const appStatus = app.status || "In Review";
                                const isApproved = appStatus.toLowerCase().includes("approved");
                                const isRejected = appStatus.toLowerCase().includes("reject");

                                return (
                                  <button
                                    key={app.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveTab("cases");
                                      setSelectedApplicationId?.(app.id);
                                    }}
                                    title={displayTitle}
                                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                                      isAppSelected
                                        ? "bg-teal-50 text-[#00a896] font-extrabold shadow-2xs border border-teal-200/60"
                                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 min-w-0 flex-1">
                                      <span className={`w-2 h-2 rounded-full shrink-0 ${
                                        isApproved ? "bg-emerald-500" : isRejected ? "bg-rose-500" : "bg-amber-500"
                                      }`} />
                                      <span className="truncate text-slate-800 font-bold">{displayTitle}</span>
                                    </div>
                                  </button>
                                );
                              })
                            ) : (
                              <div className="px-2 py-1 text-[11px] text-slate-400 italic">
                                No active applications
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-slate-100 space-y-1">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl font-semibold text-xs text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isMobileSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setIsMobileSidebarOpen(false)} />
        <aside className={`absolute top-0 left-0 w-72 h-full bg-white shadow-2xl flex flex-col justify-between p-4 transform transition-transform duration-300 overflow-y-auto ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <img src="/logo.png?v=3" alt="TravlTik Logo" className="h-9 sm:h-10 max-h-[42px] w-auto object-contain" />
              <button onClick={() => setIsMobileSidebarOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {safeNavItems.map((item: any) => {
                const isActive = activeTab === item.id;
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        if (item.id === "cases") {
                          setSelectedApplicationId?.(null);
                        }
                        setIsMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        isActive && !selectedApplicationId
                          ? "bg-slate-900 text-white shadow-md"
                          : isActive
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <IconComp className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.count !== undefined && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {item.count}
                        </span>
                      )}
                    </button>

                    {item.id === "cases" && (
                      <div className="ml-6 pl-2.5 my-1 space-y-1 border-l-2 border-slate-200">
                        {visasProcessingState && visasProcessingState.length > 0 ? (
                          visasProcessingState.map((app: any) => {
                            const isAppSelected = activeTab === "cases" && selectedApplicationId === app.id;
                            const displayTitle = getAppDisplayTitle(app);
                            const appStatus = app.status || "In Review";
                            const isApproved = appStatus.toLowerCase().includes("approved");
                            const isRejected = appStatus.toLowerCase().includes("reject");

                            return (
                              <button
                                key={app.id}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveTab("cases");
                                  setSelectedApplicationId?.(app.id);
                                  setIsMobileSidebarOpen(false);
                                }}
                                className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                                  isAppSelected
                                    ? "bg-teal-50 text-[#00a896] font-extrabold border border-teal-200/60"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                                    isApproved ? "bg-emerald-500" : isRejected ? "bg-rose-500" : "bg-amber-500"
                                  }`} />
                                  <span className="truncate text-slate-800 font-bold">{displayTitle}</span>
                                </div>
                              </button>
                            );
                          })
                        ) : (
                          <div className="px-2.5 py-1 text-xs text-slate-400 italic">
                            No active applications
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs text-rose-600 hover:bg-rose-50 transition-all mt-4 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </aside>
      </div>
    </>
  );
}
