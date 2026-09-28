import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, Download, CheckCircle2, AlertTriangle, RefreshCw, ZoomIn, ZoomOut, Move, ShieldCheck, Sparkles } from 'lucide-react';

interface PhotoSpec {
  id: string;
  country: string;
  label: string;
  width: number;
  height: number;
  unit: string;
  headHeightPct: string;
  maxSizeKb: number;
  notes: string;
}

const PHOTO_SPECS: Record<string, PhotoSpec> = {
  us: {
    id: 'us',
    country: 'United States (DS-160 / US Visa)',
    label: '2x2 inches (51x51mm)',
    width: 600,
    height: 600,
    unit: '600 × 600 px',
    headHeightPct: '50% - 69% (1 to 1 3/8 inches)',
    maxSizeKb: 240,
    notes: 'Square format, pure white background, eyeglass reflection prohibited.'
  },
  schengen: {
    id: 'schengen',
    country: 'Schengen Area (Europe)',
    label: '35x45 mm (Standard EU)',
    width: 413,
    height: 531,
    unit: '413 × 531 px (300 DPI)',
    headHeightPct: '70% - 80% (32 - 36mm)',
    maxSizeKb: 300,
    notes: 'Light grey or white background, face directly facing camera.'
  },
  india: {
    id: 'india',
    country: 'India (e-Visa / Passport)',
    label: '35x35 mm / 2x2 in',
    width: 600,
    height: 600,
    unit: '600 × 600 px',
    headHeightPct: '60% - 70%',
    maxSizeKb: 300,
    notes: 'White background, front view with full face visible.'
  },
  uk: {
    id: 'uk',
    country: 'United Kingdom (UKVI)',
    label: '35x45 mm',
    width: 413,
    height: 531,
    unit: '413 × 531 px',
    headHeightPct: '70% - 80% (29 - 34mm)',
    maxSizeKb: 512,
    notes: 'Cream or light grey background, no shadows behind head.'
  },
  canada: {
    id: 'canada',
    country: 'Canada (IRCC / Visa)',
    label: '35x45 mm / 50x70 mm',
    width: 420,
    height: 540,
    unit: '420 × 540 px',
    headHeightPct: '70% - 80% (31 - 36mm)',
    maxSizeKb: 400,
    notes: 'Pure white background, neutral facial expression.'
  }
};

export function PhotoResizer() {
  const [selectedCountry, setSelectedCountry] = useState<string>('us');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('visa-photo.jpg');
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState<number>(1);
  const [panX, setPanX] = useState<number>(0);
  const [panY, setPanY] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBiometricOverlay, setShowBiometricOverlay] = useState(true);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [outputFileSizeKb, setOutputFileSizeKb] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageObjRef = useRef<HTMLImageElement | null>(null);
  const isDraggingCanvasRef = useRef(false);
  const startDragPosRef = useRef({ x: 0, y: 0 });

  const currentSpec = PHOTO_SPECS[selectedCountry] || PHOTO_SPECS.us;

  // Load image when file is picked
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPEG, PNG, or WebP).');
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ''));
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);
      setZoom(1);
      setPanX(0);
      setPanY(0);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Re-draw canvas whenever image, spec, zoom, or pan changes
  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      imageObjRef.current = img;
      renderCanvas();
    };
  }, [imageSrc, selectedCountry, zoom, panX, panY]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageObjRef.current;
    if (!canvas || !img) return;

    const targetW = currentSpec.width;
    const targetH = currentSpec.height;

    canvas.width = targetW;
    canvas.height = targetH;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill clean solid white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, targetW, targetH);

    // Calculate aspect scale to cover target canvas
    const imgAspect = img.width / img.height;
    const targetAspect = targetW / targetH;

    let drawW: number;
    let drawH: number;

    if (imgAspect > targetAspect) {
      drawH = targetH * zoom;
      drawW = drawH * imgAspect;
    } else {
      drawW = targetW * zoom;
      drawH = drawW / imgAspect;
    }

    const drawX = (targetW - drawW) / 2 + panX;
    const drawY = (targetH - drawH) / 2 + panY;

    // Enable high quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    // Export preview and compute file size
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setProcessedUrl(url);
          setOutputFileSizeKb(Math.round(blob.size / 1024));
        }
      },
      'image/jpeg',
      0.92
    );
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `${fileName}-${currentSpec.id}-visa-photo.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.94);
    link.click();
  };

  // Canvas mouse drag interactions for repositioning
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingCanvasRef.current = true;
    startDragPosRef.current = { x: e.clientX - panX, y: e.clientY - panY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingCanvasRef.current) return;
    setPanX(e.clientX - startDragPosRef.current.x);
    setPanY(e.clientY - startDragPosRef.current.y);
  };

  const handleMouseUp = () => {
    isDraggingCanvasRef.current = false;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Consular Biometric Standard Engine</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Visa &amp; Passport Photo Resizer
        </h1>
        <p className="text-slate-600 text-sm lg:text-base mt-2">
          Resize, crop, and align your photo to 100% exact consular biometric dimensions for US, Schengen, UK, Canada &amp; India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Controls & Spec Selector */}
        <div className="lg:col-span-5 space-y-6">
          {/* Country Spec Selector */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              1. Select Destination / Consular Standard
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:ring-2 focus:ring-[#00a896] focus:border-transparent transition-all outline-none"
            >
              {Object.values(PHOTO_SPECS).map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.country} — {spec.label}
                </option>
              ))}
            </select>

            {/* Spec Details Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5 text-slate-600">
              <div className="flex justify-between font-medium">
                <span className="text-slate-500">Target Canvas:</span>
                <span className="text-slate-900 font-bold">{currentSpec.unit}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-slate-500">Required Head Height:</span>
                <span className="text-slate-900 font-semibold">{currentSpec.headHeightPct}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-slate-500">Max File Size:</span>
                <span className="text-slate-900 font-semibold">&le; {currentSpec.maxSizeKb} KB</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 italic">
                {currentSpec.notes}
              </p>
            </div>
          </div>

          {/* Upload / Re-upload Box */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              2. Upload Your Portrait Photo
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                isDragging
                  ? 'border-[#00a896] bg-emerald-50/50'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                className="hidden"
                id="photo-file-input"
              />
              <label htmlFor="photo-file-input" className="cursor-pointer block">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mx-auto text-[#00a896] mb-3">
                  <Camera className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {imageSrc ? 'Change / Re-upload Photo' : 'Upload Your Photo'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Drag &amp; drop or click to browse (JPEG, PNG up to 15MB)
                </p>
              </label>
            </div>
          </div>

          {/* Biometric Checklist */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Consular Compliance Checks
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Plain white / light neutral background with no patterned wall.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Neutral facial expression, mouth closed, both eyes clearly open.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No eyeglasses or tinted lenses (strictly enforced by US and Schengen).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Even lighting without heavy shadows across face or behind ears.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Editor Canvas & Result */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Interactive Alignment &amp; Preview</h2>
            {imageSrc && (
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showBiometricOverlay}
                  onChange={(e) => setShowBiometricOverlay(e.target.checked)}
                  className="rounded border-slate-300 text-[#00a896] focus:ring-[#00a896]"
                />
                Show Biometric Oval Guide
              </label>
            )}
          </div>

          {/* Interactive Workspace */}
          {imageSrc ? (
            <div>
              {/* Canvas viewport container with fixed aspect ratio preview */}
              <div
                className="relative mx-auto bg-slate-100 rounded-2xl overflow-hidden border border-slate-300 flex items-center justify-center select-none shadow-inner"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: '440px',
                  cursor: isDraggingCanvasRef.current ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* The actual hidden/processing canvas */}
                <canvas ref={canvasRef} className="max-w-full max-h-full object-contain pointer-events-none" />

                {/* Biometric Oval Guide Overlay */}
                {showBiometricOverlay && (
                  <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-6">
                    <div
                      className="w-48 h-64 border-2 border-dashed border-emerald-500/80 rounded-[50%] flex flex-col items-center justify-center"
                      style={{ boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.25)' }}
                    >
                      <div className="w-12 border-t border-emerald-400/80 my-auto"></div>
                      <span className="text-[10px] text-emerald-700 bg-white/90 px-2 py-0.5 rounded font-bold shadow-xs">
                        Align Face Here
                      </span>
                    </div>
                  </div>
                )}

                {/* Drag Hint Badge */}
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[10px] flex items-center gap-1.5 pointer-events-none">
                  <Move className="w-3 h-3" />
                  Drag photo to position
                </div>
              </div>

              {/* Zoom & Adjustment Controls */}
              <div className="flex items-center justify-between gap-4 mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(2)))}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-slate-700 w-12 text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(3, +(z + 0.1).toFixed(2)))}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => { setZoom(1); setPanX(0); setPanY(0); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>

              {/* Ready & Download Output Section */}
              <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-bold text-emerald-950">Photo Formatted &amp; Ready</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Resolution: <span className="font-semibold">{currentSpec.width} × {currentSpec.height} px</span> • Estimated size: <span className="font-semibold">{outputFileSizeKb} KB</span>
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00a896] hover:bg-[#009282] active:scale-95 text-white font-bold text-sm shadow-md transition-all duration-150 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Consular Photo
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-slate-200 rounded-2xl py-20 px-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Upload className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">No Photo Loaded</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Upload your portrait photo on the left to preview, align with biometric guides, and download exact consular specifications.
              </p>
            </div>
          )}

          {/* Legal / Consular Disclaimer */}
          <div className="pt-4 border-t border-slate-100 flex items-start gap-2.5 text-[11px] text-slate-500">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-700">Official Consular Notice:</strong> Embassy standards strictly mandate recent photographs (taken within the last 6 months) with authentic facial features and no AI manipulation of natural features. Always cross-check specific visa application guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
