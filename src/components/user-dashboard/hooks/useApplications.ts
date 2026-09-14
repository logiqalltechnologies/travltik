import { useState } from "react";
import { normalizeCountryName, getFlagEmoji } from "../utils/countryHelpers";

export function useApplications({
  email,
  documents = [],
  selectedDestination = "United States",
  selectedPassport = "India",
  selectedPurpose = "Tourism / Vacation",
  onSyncJourneyParams,
  onSwitchTab,
  showToastMsg
}: {
  email?: string;
  documents?: any[];
  selectedDestination?: string;
  selectedPassport?: string;
  selectedPurpose?: string;
  onSyncJourneyParams?: (dest: string, pass: string, purp: string) => void;
  onSwitchTab?: (tab: string) => void;
  showToastMsg?: (msg: string) => void;
}) {
  const [visasProcessingState, setVisasProcessingState] = useState<any[]>([]);
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("appId") || null;
    }
    return null;
  });

  // Application naming & creation modal states
  const [showNewAppModal, setShowNewAppModal] = useState(false);
  const [newAppName, setNewAppName] = useState("");
  const [newAppDest, setNewAppDest] = useState("");
  const [newAppPass, setNewAppPass] = useState("India");
  const [newAppPurpose, setNewAppPurpose] = useState("Tourism / Vacation");
  const [editingAppId, setEditingAppId] = useState<string | null>(null);
  const [editingAppName, setEditingAppName] = useState("");
  const [copiedTrackingId, setCopiedTrackingId] = useState<string | null>(null);

  const persistApplicationsToDB = (apps: any[]) => {
    try {
      const userEmail = email || (typeof window !== 'undefined' ? (localStorage.getItem("seeker_email") || "") : "");
      if (userEmail && Array.isArray(apps)) {
        fetch('/api/user/vault-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'save_applications',
            email: userEmail,
            applications: apps
          })
        }).catch(e => console.warn('Failed saving applications to DB:', e));
      }
    } catch(e) {}
  };

  const handleCreateNewApplication = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const targetDest = normalizeCountryName(newAppDest || selectedDestination || "United States");
    const targetPass = normalizeCountryName(newAppPass || selectedPassport || "India");
    let targetPurp = newAppPurpose || selectedPurpose || "Tourism / Vacation";
    const appName = (newAppName || "").trim();
    const appNameLower = appName.toLowerCase();

    if (appNameLower.includes('student') || appNameLower.includes('study') || appNameLower.includes('education') || appNameLower.includes('university') || appNameLower.includes('college')) {
      targetPurp = 'Study / Education';
    } else if (appNameLower.includes('work') || appNameLower.includes('job') || appNameLower.includes('employment')) {
      targetPurp = 'Work / Employment';
    } else if (appNameLower.includes('business')) {
      targetPurp = 'Business';
    } else if (appNameLower.includes('pr') || appNameLower.includes('permanent')) {
      targetPurp = 'Permanent Residency';
    }

    const purpLower = targetPurp.toLowerCase();
    const isStud = purpLower.includes('study') || purpLower.includes('student');
    const isWk = purpLower.includes('work') || purpLower.includes('job');
    const isBiz = purpLower.includes('business');
    const isPr = purpLower.includes('pr') || purpLower.includes('permanent');

    const finalAppName = appName || `${targetDest} ${isStud ? 'Student' : isWk ? 'Work' : isBiz ? 'Business' : isPr ? 'PR' : 'Tourist'} 2026`;
    
    const uniqueAppId = `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const destCode = targetDest.slice(0, 2).toUpperCase();
    const uniqueTrackingId = `TT-${destCode}-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const flag = getFlagEmoji(targetDest);
    const visaType = isStud 
      ? (targetDest.toLowerCase().includes('canada') ? 'Canada Study Permit (Student Visa)' : `${targetDest} Student Visa`) 
      : isWk 
      ? `${targetDest} Skilled Worker Visa` 
      : isBiz
      ? `${targetDest} Business Visa`
      : isPr
      ? `${targetDest} Permanent Residency`
      : `${targetDest} Tourist Visa`;

    const genuineUploadedDocsCount = (documents || []).filter(
      (d: any) => d && (d.fileData || d.isRealUpload || (d.scannedMethod === 'OCR Scanned' && d.id && !d.id.startsWith('doc_req_') && d.id !== 'global_passport'))
    ).length;

    const newCase = {
      id: uniqueAppId,
      customName: finalAppName,
      title: finalAppName,
      trackingId: uniqueTrackingId,
      destination: targetDest,
      destinationFlag: flag,
      visaType,
      purpose: isStud ? 'study' : isWk ? 'work' : isBiz ? 'business' : isPr ? 'pr' : 'tourism',
      passport: targetPass,
      status: genuineUploadedDocsCount > 0 ? "Required Documents & AI Verified" : "Requirements & Eligibility Active",
      stage: genuineUploadedDocsCount > 0 ? "Document Vault Verification" : "Requirements & Document Collection",
      progress: genuineUploadedDocsCount > 0 ? Math.min(35, 15 + genuineUploadedDocsCount * 5) : 10,
      documentsCount: genuineUploadedDocsCount,
      addonsCount: 0,
      submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      targetDate: "Consular Filing Ready",
      createdAt: new Date().toISOString()
    };

    let existingCases: any[] = [];
    try {
      existingCases = JSON.parse(localStorage.getItem("active_visa_cases") || "[]");
    } catch(e) {}
    const updatedCases = [newCase, ...existingCases.filter((c: any) => c.id !== uniqueAppId)];
    setVisasProcessingState(updatedCases);
    try {
      localStorage.setItem("active_visa_cases", JSON.stringify(updatedCases));
    } catch(e) {}
    persistApplicationsToDB(updatedCases);

    if (onSyncJourneyParams) {
      onSyncJourneyParams(targetDest, targetPass, targetPurp);
    }

    try {
      localStorage.setItem("user_journey_destination", targetDest);
      localStorage.setItem("user_journey_passport", targetPass);
      localStorage.setItem("user_journey_purpose", targetPurp);
      localStorage.setItem("seeker_target_destination", targetDest);
      localStorage.setItem("seeker_nationality", targetPass);
    } catch(e) {}

    setShowNewAppModal(false);
    setNewAppName("");
    setNewAppDest("");
    setNewAppPass("");
    setNewAppPurpose("");

    if (onSwitchTab) {
      onSwitchTab("cases");
    }
    if (showToastMsg) {
      showToastMsg(`✓ Application "${appName}" added to your dashboard! (Tracking ID: ${uniqueTrackingId})`);
    }
  };

  const handleRenameApplication = (appId: string, newName: string) => {
    if (!newName.trim()) return;
    const updated = visasProcessingState.map(c => c.id === appId ? { ...c, customName: newName.trim() } : c);
    setVisasProcessingState(updated);
    try {
      localStorage.setItem("active_visa_cases", JSON.stringify(updated));
    } catch(e) {}
    persistApplicationsToDB(updated);
    setEditingAppId(null);
    setEditingAppName("");
    if (showToastMsg) showToastMsg("Application name updated!");
  };

  const handleDeleteApplication = (appId: string) => {
    if (confirm("Are you sure you want to remove this visa application from your dashboard?")) {
      const updated = visasProcessingState.filter(c => c.id !== appId);
      setVisasProcessingState(updated);
      try {
        localStorage.setItem("active_visa_cases", JSON.stringify(updated));
      } catch(e) {}
      persistApplicationsToDB(updated);
      if (showToastMsg) showToastMsg("Application removed from dashboard.");
    }
  };

  const handleCopyTrackingId = (trackingId: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(trackingId);
      setCopiedTrackingId(trackingId);
      if (showToastMsg) showToastMsg(`Tracking ID ${trackingId} copied!`);
      setTimeout(() => setCopiedTrackingId(null), 2500);
    }
  };

  return {
    visasProcessingState,
    setVisasProcessingState,
    selectedApplicationId,
    setSelectedApplicationId,
    showNewAppModal,
    setShowNewAppModal,
    newAppName,
    setNewAppName,
    newAppDest,
    setNewAppDest,
    newAppPass,
    setNewAppPass,
    newAppPurpose,
    setNewAppPurpose,
    editingAppId,
    setEditingAppId,
    editingAppName,
    setEditingAppName,
    copiedTrackingId,
    persistApplicationsToDB,
    handleCreateNewApplication,
    handleRenameApplication,
    handleDeleteApplication,
    handleCopyTrackingId
  };
}
