const STORAGE_KEY = 'tophcomm_client_session';
const OTP_KEY = 'tophcomm_pending_otp';
const OTP_TTL_MS = 10 * 60 * 1000;
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

export const ALLOWED_DOMAINS = [
  'tophcomm.systems', 'tophcomm.com', 'fssoftwares.com', 'fs-softwares.com',
  'gmail.com', 'outlook.com', 'yahoo.com', 'company.ph', 'corp.ph',
];

export type AuthUser = { email: string; name: string; company?: string; verifiedAt: number; expiresAt: number };
export type PendingOtp = { email: string; name: string; company?: string; code: string; createdAt: number; expiresAt: number; mode: 'register' | 'login' };

function generateOtp(): string { return String(Math.floor(100000 + Math.random() * 900000)); }
export function extractDomain(email: string): string {
  const parts = email.trim().toLowerCase().split('@');
  return parts.length === 2 ? parts[1] : '';
}
export function isValidEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
export function isAllowedDomain(email: string): boolean {
  const domain = extractDomain(email);
  if (!domain) return false;
  return ALLOWED_DOMAINS.some((d) => domain === d || domain.endsWith('.' + d));
}
export function getSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw) as AuthUser;
    if (Date.now() > user.expiresAt) { localStorage.removeItem(STORAGE_KEY); return null; }
    return user;
  } catch { return null; }
}
export function clearSession(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(OTP_KEY);
}
export function requestOtp(email: string, name: string, company: string | undefined, mode: 'register' | 'login'): { ok: true; demoCode: string } | { ok: false; error: string } {
  const normalized = email.trim().toLowerCase();
  if (!isValidEmailFormat(normalized)) return { ok: false, error: 'Enter a valid email address.' };
  if (!isAllowedDomain(normalized)) return { ok: false, error: `Email domain not authorized. Allowed: ${ALLOWED_DOMAINS.slice(0, 5).join(', ')}…` };
  if (mode === 'register' && (!name || name.trim().length < 2)) return { ok: false, error: 'Full name is required (min 2 characters).' };
  const code = generateOtp();
  const pending: PendingOtp = { email: normalized, name: name.trim() || normalized.split('@')[0], company: company?.trim() || undefined, code, createdAt: Date.now(), expiresAt: Date.now() + OTP_TTL_MS, mode };
  localStorage.setItem(OTP_KEY, JSON.stringify(pending));
  return { ok: true, demoCode: code };
}
export function verifyOtp(code: string): { ok: true; user: AuthUser } | { ok: false; error: string } {
  try {
    const raw = localStorage.getItem(OTP_KEY);
    if (!raw) return { ok: false, error: 'No pending verification. Request a new code.' };
    const pending = JSON.parse(raw) as PendingOtp;
    if (Date.now() > pending.expiresAt) { localStorage.removeItem(OTP_KEY); return { ok: false, error: 'Code expired. Request a new one.' }; }
    if (pending.code !== code.trim()) return { ok: false, error: 'Invalid verification code.' };
    const user: AuthUser = { email: pending.email, name: pending.name, company: pending.company, verifiedAt: Date.now(), expiresAt: Date.now() + SESSION_TTL_MS };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    localStorage.removeItem(OTP_KEY);
    return { ok: true, user };
  } catch { return { ok: false, error: 'Verification failed. Try again.' }; }
}
export function getPendingOtp(): PendingOtp | null {
  try {
    const raw = localStorage.getItem(OTP_KEY);
    if (!raw) return null;
    const pending = JSON.parse(raw) as PendingOtp;
    if (Date.now() > pending.expiresAt) { localStorage.removeItem(OTP_KEY); return null; }
    return pending;
  } catch { return null; }
}
