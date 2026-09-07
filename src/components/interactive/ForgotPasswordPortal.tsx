import { useState, useEffect } from "react";
import { Mail, ArrowLeft, CheckCircle, Lock, Eye, EyeOff } from "lucide-react";

export function ForgotPasswordPortal() {
    const [email, setEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [codeSent, setCodeSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const [isGoogleAccount, setIsGoogleAccount] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const sp = new URLSearchParams(window.location.search);
            const qEmail = sp.get("email");
            if (qEmail) {
                setEmail(qEmail);
            } else {
                const stored = localStorage.getItem("seeker_email") || "";
                if (stored) setEmail(stored);
            }
        }
    }, []);

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setIsGoogleAccount(false);
        
        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            if (res.ok) {
                setCodeSent(true);
                setIsGoogleAccount(false);
                if (data.otp) setOtpCode(data.otp);
                setMessage(data.message || "Verification code sent to your email.");
            } else {
                if (data?.isGoogleAccount) {
                    setIsGoogleAccount(true);
                }
                setError(data.message || "Failed to send verification code.");
            }
        } catch (err: any) {
            console.error("Forgot password error:", err);
            setError("Server connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!otpCode || otpCode.length < 6) {
            setError("Please enter the 6-digit verification code.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/verify-reset-code", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, token: otpCode })
            });
            const data = await res.json();
            if (res.ok && data.verified) {
                setOtpVerified(true);
                setMessage("Code verified successfully! Now create your new password.");
            } else {
                setError(data.message || "Invalid or expired verification code.");
            }
        } catch (err: any) {
            console.error("OTP verification error:", err);
            setError("Server connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: otpCode, password })
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess(true);
            } else {
                setError(data.message || "Password reset failed. Please request a new code.");
            }
        } catch (err: any) {
            console.error("Reset password error:", err);
            setError("Server connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-xs flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 font-sans overflow-y-auto no-scrollbar font-sans">
            
            {/* Top Back Button & Logo Header */}
            <div className="w-full max-w-md flex items-center justify-between mb-3 px-1 shrink-0 gap-2">
                <a href="/login" className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white transition-colors bg-white/15 px-3.5 py-1.5 rounded-full border border-white/25 backdrop-blur-md shadow-sm shrink-0">
                    <ArrowLeft className="w-3.5 h-3.5" /> <span>Back to Login</span>
                </a>
                <a href="/" className="shrink-0">
                    <img src="/logo.png?v=8" alt="TravlTik Logo" className="h-6 sm:h-7 w-auto object-contain" />
                </a>
            </div>

            {/* Main Portal Card */}
            <div className="bg-white rounded-[32px] p-5 sm:p-8 max-w-md w-[94vw] sm:w-full shadow-2xl border border-slate-200/80 space-y-5 text-slate-900 relative animate-fade-up max-h-[88vh] overflow-y-auto no-scrollbar my-auto text-center">
                
                {/* Centered Logo */}
                <div className="flex justify-center pt-1">
                    <a href="/" className="inline-block">
                        <img src="/logo.png?v=3" alt="TravlTik Logo" className="h-8 sm:h-9 w-auto max-h-[38px] object-contain mx-auto" />
                    </a>
                </div>

                        {success ? (
                            <div className="space-y-6">
                                <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                    <CheckCircle className="w-10 h-10 text-emerald-600 animate-pulse" />
                                </div>
                                <h2 className="text-2xl font-bold text-black">Password Reset Complete! 🎉</h2>
                                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                                    Your password has been successfully reset. You can now log in using your new credentials.
                                </p>
                                <div className="pt-4">
                                    <a href="/login">
                                        <button className="w-full bg-black hover:bg-neutral-900 text-white py-4 rounded-xl font-bold transition-all shadow-md text-sm cursor-pointer">
                                            Log In Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ) : !codeSent ? (
                            /* Step 1: Input Email */
                            <form onSubmit={handleSendOtp} className="space-y-6 text-left">
                                <div className="text-center mb-6">
                                    <h1 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                                        Reset Password
                                    </h1>
                                    <p className="text-slate-500 text-sm font-semibold leading-normal">
                                        Enter your registered email and we'll send you a verification code to set a new password.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Email Address</label>
                                    <div className="relative">
                                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="user@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full h-12 pl-12 pr-5 rounded-xl border border-slate-250 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-black font-semibold transition-all text-sm text-black shadow-sm"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold text-center leading-relaxed space-y-3">
                                        <p>{error}</p>
                                    </div>
                                )}

                                {isGoogleAccount ? (
                                    <div className="space-y-3 pt-1">
                                        <a
                                            href="/login"
                                            className="w-full h-12 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center justify-center gap-3 cursor-pointer"
                                        >
                                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                            </svg>
                                            <span>Continue with Google to Log In</span>
                                        </a>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 bg-black hover:bg-slate-900 disabled:bg-slate-300 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {loading ? "Sending code..." : "Send Verification Code"}
                                    </button>
                                )}
                            </form>
                        ) : !otpVerified ? (
                            /* Step 2: Input Verification Code ONLY */
                            <form onSubmit={handleVerifyOtp} className="space-y-6 text-left">
                                <div className="text-center mb-4">
                                    <h1 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                                        Verification Required
                                    </h1>
                                    <p className="text-slate-500 text-sm font-semibold leading-normal">
                                        Verification code has been sent to <strong className="text-black">{email}</strong>.
                                    </p>
                                </div>

                                {message && (
                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold text-center">
                                        {message}
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Enter Code</label>
                                    <input
                                        type="text"
                                        maxLength={6}
                                        required
                                        placeholder="6-digit Code"
                                        value={otpCode}
                                        onChange={(e) => setOtpCode(e.target.value)}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-250 bg-slate-50 text-center font-bold tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-black text-black shadow-sm"
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs font-semibold text-center leading-relaxed">
                                        {error}
                                    </div>
                                )}

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => { setCodeSent(false); setError(""); setMessage(""); }}
                                        className="w-1/3 h-12 border border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center cursor-pointer"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-2/3 h-12 bg-black hover:bg-slate-900 disabled:bg-slate-300 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {loading ? "Verifying..." : "Verify Code"}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            /* Step 3: Enter New Password ONLY (Unlocked after Verification) */
                            <form onSubmit={handleResetPassword} className="space-y-6 text-left">
                                <div className="text-center mb-4">
                                    <h1 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                                        Choose New Password
                                    </h1>
                                    <p className="text-slate-500 text-sm font-semibold leading-normal">
                                        Your code is verified! Please configure a secure password.
                                    </p>
                                </div>

                                {message && (
                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold text-center">
                                        {message}
                                    </div>
                                )}

                                {/* Code display (read-only verified) */}
                                <div className="space-y-2 relative">
                                    <label className="text-xs font-bold text-slate-400 tracking-wide uppercase">Verified Code</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            disabled
                                            value={otpCode}
                                            className="w-full h-12 px-4 rounded-xl border border-emerald-250 bg-emerald-50 text-center font-bold tracking-widest text-lg text-emerald-800 cursor-not-allowed"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center bg-emerald-100 border border-emerald-200 p-1 rounded-full shadow-sm">
                                            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                {/* Connected Passwords Indicator Area */}
                                <div className={`space-y-4 border-l-4 pl-4 transition-all duration-300 ${
                                    !password && !confirmPassword ? 'border-slate-200' :
                                    password === confirmPassword ? 'border-emerald-500 bg-emerald-50/10 py-2 rounded-r-md' : 'border-rose-500 bg-rose-50/10 py-2 rounded-r-md'
                                }`}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">New Credentials</span>
                                        {password && confirmPassword && (
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                                password === confirmPassword ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                            }`}>
                                                {password === confirmPassword ? '✓ Passwords Match' : '✗ Passwords Do Not Match'}
                                            </span>
                                        )}
                                    </div>

                                    {/* Password field */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">New Password</label>
                                        <div className="relative">
                                            <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                required
                                                placeholder="Enter new password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full h-12 pl-12 pr-10 rounded-xl border border-slate-250 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-black font-semibold transition-all text-sm text-black shadow-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password field */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Confirm New Password</label>
                                        <div className="relative">
                                            <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                required
                                                placeholder="Confirm new password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full h-12 pl-12 pr-10 rounded-xl border border-slate-250 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-black font-semibold transition-all text-sm text-black shadow-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs font-semibold text-center leading-relaxed">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-12 bg-black hover:bg-slate-900 disabled:bg-slate-300 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {loading ? "Resetting password..." : "Confirm Password Reset"}
                                </button>
                            </form>
                        )}
            </div>
        </div>
    );
}
