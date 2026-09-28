import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Mail, KeyRound, Building2, User, ArrowLeft, LogOut, CheckCircle2, LayoutDashboard, FileText, Headphones, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { requestOtp, verifyOtp, getSession, clearSession, getPendingOtp, ALLOWED_DOMAINS, type AuthUser } from '../lib/auth';

type Step = 'auth' | 'otp' | 'dashboard';
type Mode = 'login' | 'register';

export default function ClientPortal() {
  const [step, setStep] = useState<Step>('auth');
  const [mode, setMode] = useState<Mode>('login');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [otp, setOtp] = useState('');
  const [demoCode, setDemoCode] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const session = getSession();
    if (session) { setUser(session); setStep('dashboard'); }
    else if (getPendingOtp()) setStep('otp');
  }, []);

  const handleRequestOtp = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = requestOtp(email, name, company, mode);
      setLoading(false);
      if (!result.ok) { setError(result.error); return; }
      setDemoCode(result.demoCode);
      setSuccessMsg('Verification code sent. Check your email (demo: code shown below).');
      setStep('otp');
    }, 600);
  };

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = verifyOtp(otp);
      setLoading(false);
      if (!result.ok) { setError(result.error); return; }
      setUser(result.user);
      setDemoCode(null);
      setStep('dashboard');
      setSuccessMsg('');
    }, 500);
  };

  const handleLogout = () => {
    clearSession();
    setUser(null);
    setStep('auth');
    setOtp('');
    setEmail('');
    setName('');
    setCompany('');
    setDemoCode(null);
  };

  return (
    <div className="min-h-screen bg-bg text-text relative">
      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.15), transparent 55%)' }} />
      <header className="relative z-20 max-w-[1100px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><ArrowLeft size={16} />Tophcomm</Link>
        <div className="flex items-center gap-2"><Shield size={18} className="text-blue-400" /><span className="font-semibold tracking-tight">Client Portal</span></div>
        {user && <button onClick={handleLogout} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"><LogOut size={14} />Sign out</button>}
      </header>
      <main className="relative z-10 max-w-[480px] mx-auto px-6 pb-20 pt-8">
        <AnimatePresence mode="wait">
          {step === 'auth' && (
            <motion.div key="auth" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-medium tracking-tight mb-2">{mode === 'login' ? 'Welcome back' : 'Create client account'}</h1>
                <p className="text-muted text-sm">Secured with email-domain validation and OTP clearance.</p>
              </div>
              <div className="flex rounded-lg border border-white/10 p-1 mb-6 bg-white/5">
                <button type="button" onClick={() => { setMode('login'); setError(''); }} className={`flex-1 py-2.5 rounded-md text-sm font-medium transition-colors ${mode === 'login' ? 'bg-white text-black' : 'text-muted hover:text-white'}`}>Sign in</button>
                <button type="button" onClick={() => { setMode('register'); setError(''); }} className={`flex-1 py-2.5 rounded-md text-sm font-medium transition-colors ${mode === 'register' ? 'bg-white text-black' : 'text-muted hover:text-white'}`}>Register</button>
              </div>
              <form onSubmit={handleRequestOtp} className="space-y-4">
                {mode === 'register' && (
                  <>
                    <label className="block"><span className="text-xs text-muted mb-1.5 flex items-center gap-1.5"><User size={12} /> Full name</span>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors" placeholder="Juan Dela Cruz" autoComplete="name" /></label>
                    <label className="block"><span className="text-xs text-muted mb-1.5 flex items-center gap-1.5"><Building2 size={12} /> Company (optional)</span>
                      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors" placeholder="Your company" autoComplete="organization" /></label>
                  </>
                )}
                <label className="block"><span className="text-xs text-muted mb-1.5 flex items-center gap-1.5"><Mail size={12} /> Work email</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors" placeholder="you@company.com" autoComplete="email" /></label>
                {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}
                <button type="submit" disabled={loading} className="btn btn-solid w-full justify-center" style={{ height: 46 }}>{loading ? 'Sending…' : 'Send verification code'}</button>
              </form>
              <p className="mt-6 text-[11px] text-muted/80 leading-relaxed text-center">Access is limited to authorized domains (e.g. {ALLOWED_DOMAINS.slice(0, 4).join(', ')}…). OTP expires in 10 minutes.</p>
            </motion.div>
          )}
          {step === 'otp' && (
            <motion.div key="otp" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center mx-auto mb-4"><KeyRound className="text-blue-400" size={26} /></div>
                <h1 className="text-2xl font-medium tracking-tight mb-2">Enter verification code</h1>
                <p className="text-muted text-sm">We sent a 6-digit code to <span className="text-white">{email || 'your email'}</span></p>
              </div>
              {demoCode && (
                <div className="mb-5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center">
                  <p className="text-xs text-amber-200/80 mb-1">Demo mode — use this code</p>
                  <p className="text-2xl font-mono tracking-[0.35em] text-amber-300 font-semibold">{demoCode}</p>
                </div>
              )}
              {successMsg && !error && <p className="mb-4 text-sm text-green-400/90 flex items-center gap-2 justify-center"><CheckCircle2 size={16} /> {successMsg}</p>}
              <form onSubmit={handleVerify} className="space-y-4">
                <label className="block"><span className="text-xs text-muted mb-1.5 block">6-digit OTP</span>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))} required className="w-full h-14 px-4 rounded-lg bg-white/5 border border-white/12 text-white text-center text-2xl font-mono tracking-[0.4em] placeholder:text-white/20 focus:outline-none focus:border-blue-500/60 transition-colors" placeholder="······" autoFocus /></label>
                {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}
                <button type="submit" disabled={loading || otp.length !== 6} className="btn btn-solid w-full justify-center disabled:opacity-50" style={{ height: 46 }}>{loading ? 'Verifying…' : 'Verify & continue'}</button>
                <button type="button" onClick={() => { setStep('auth'); setOtp(''); setError(''); setDemoCode(null); }} className="w-full text-sm text-muted hover:text-white py-2 transition-colors">Back to sign in</button>
              </form>
            </motion.div>
          )}
          {step === 'dashboard' && user && (
            <motion.div key="dash" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} style={{ maxWidth: 640, margin: '0 auto' }}>
              <div className="glass p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg font-semibold shrink-0">{user.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <h1 className="text-xl font-medium tracking-tight">{user.name}</h1>
                    <p className="text-sm text-muted">{user.email}</p>
                    {user.company && <p className="text-xs text-muted/80 mt-0.5">{user.company}</p>}
                    <p className="text-[11px] text-green-400/90 mt-2 flex items-center gap-1"><CheckCircle2 size={12} /> OTP verified · session active</p>
                  </div>
                </div>
              </div>
              <h2 className="text-sm uppercase tracking-wider text-muted mb-4">Quick access</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[{ icon: LayoutDashboard, label: 'Projects & status', desc: 'Deployment overview' }, { icon: FileText, label: 'Documents', desc: 'Contracts & SOWs' }, { icon: Headphones, label: 'Support', desc: 'Open a ticket' }, { icon: Settings, label: 'Account', desc: 'Profile & security' }].map((item) => (
                  <button key={item.label} type="button" className="glass p-4 text-left hover:border-white/25 transition-colors group">
                    <item.icon size={20} className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-muted">{item.desc}</div>
                  </button>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-muted/70">Client portal · secured by domain + OTP. Connect Supabase Auth for production email delivery.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
