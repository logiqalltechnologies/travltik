// src/lib/firebase.ts
// Firebase Client SDK — Dynamic import to prevent SSR issues

let firebaseApp: any = null;
let auth: any = null;
let googleProvider: any = null;

let signInWithPopupFn: any = null;
let signInWithRedirectFn: any = null;
let getRedirectResultFn: any = null;

let preloadPromise: Promise<void> | null = null;

export async function preloadFirebase() {
  if (preloadPromise) return preloadPromise;
  preloadPromise = (async () => {
    try {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const authModule = await import('firebase/auth');
      const { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } = authModule;
      
      const firebaseConfig = {
        apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || import.meta.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || import.meta.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || import.meta.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || import.meta.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      };
      
      firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      auth = getAuth(firebaseApp);
      googleProvider = new GoogleAuthProvider();
      googleProvider.addScope('email');
      googleProvider.addScope('profile');
      googleProvider.setCustomParameters({ prompt: 'select_account' });

      signInWithPopupFn = signInWithPopup;
      signInWithRedirectFn = signInWithRedirect;
      getRedirectResultFn = getRedirectResult;
    } catch (e) {
      console.warn('[Firebase] Preload failed:', e);
    }
  })();
  return preloadPromise;
}

export async function getFirebaseAuth() {
  await preloadFirebase();
  return { auth, googleProvider };
}

export async function loginWithGooglePopup() {
  await preloadFirebase();
  if (!auth || !googleProvider) throw new Error('Firebase not initialized');
  const fn = signInWithPopupFn || (await import('firebase/auth')).signInWithPopup;
  return await fn(auth, googleProvider);
}

let redirectInProgress = false;

export async function loginWithGoogleRedirect(returnPath: string = '/traveller/dashboard') {
  if (redirectInProgress) return;
  redirectInProgress = true;
  try {
    await preloadFirebase();
    if (!auth || !googleProvider) throw new Error('Firebase not initialized');
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('google_auth_return', returnPath);
      sessionStorage.setItem('google_auth_role', returnPath.includes('service-provider') ? 'expert' : 'seeker');
    }
    const fn = signInWithRedirectFn || (await import('firebase/auth')).signInWithRedirect;
    await fn(auth, googleProvider);
  } catch (e) {
    console.warn('[Firebase] Redirect error:', e);
    redirectInProgress = false;
  }
}

export async function getGoogleRedirectResult() {
  try {
    await preloadFirebase();
    if (!auth) return null;
    const fn = getRedirectResultFn || (await import('firebase/auth')).getRedirectResult;
    const result = await fn(auth);
    return result;
  } catch (e) {
    console.warn('[Firebase] Redirect result error:', e);
    return null;
  }
}

let popupWindow: Window | null = null;

export function focusAuthPopup() {
  if (popupWindow && !popupWindow.closed) {
    popupWindow.focus();
  }
}

export async function loginWithGooglePopupWithFallback(returnPath: string = '/traveller/dashboard'): Promise<any> {
  await preloadFirebase();
  try {
    return await loginWithGooglePopup();
  } catch (error: any) {
    const code = error?.code || '';
    const msg = error?.message || '';

    // If user cancelled / closed popup, don't fallback to redirect — simply cancel cleanly
    if (
      code === 'auth/popup-closed-by-user' ||
      code === 'auth/cancelled-popup-request' ||
      msg.includes('popup-closed') ||
      msg.includes('closed-by-user')
    ) {
      throw error;
    }

    // If popup was blocked or blocked by browser COOP policy, fallback to redirect
    if (
      code === 'auth/popup-blocked' || 
      msg.includes('popup-blocked') || 
      msg.includes('Cross-Origin-Opener-Policy') || 
      msg.includes('window.closed') ||
      msg.includes('opener')
    ) {
      console.warn('[Firebase] Popup blocked or restricted by browser COOP, falling back to redirect...');
      await loginWithGoogleRedirect(returnPath);
      return { status: 'redirecting' };
    }

    throw error;
  }
}

if (typeof window !== "undefined") {
  preloadFirebase();
}
