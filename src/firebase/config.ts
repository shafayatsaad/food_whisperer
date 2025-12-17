import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// This configuration object holds the keys needed to connect to our Firebase backend.
// We use environment variables (process.env.NEXT_PUBLIC_...) to keep these secrets safe 
// and not hardcoded in the codebase, which is a security best practice.
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Validate that the required environment variables are set
const isMockMode = !firebaseConfig.apiKey;

if (isMockMode) {
  console.warn(
    "⚠️ Firebase API Key is missing. Running in MOCK MODE. Authentication will be simulated and data will not be persisted."
  );
}

function initializeFirebase() {
  if (isMockMode) {
    return { app: null, auth: null, firestore: null };
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}

export { initializeFirebase };
