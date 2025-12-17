'use client';

import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase/config';
import type {FirebaseApp} from 'firebase/app';
import type {Auth} from 'firebase/auth';
import type {Firestore} from 'firebase/firestore';
import {useEffect, useState} from 'react';

export function FirebaseClientProvider({children}: {children: React.ReactNode}) {
  const [firebase, setFirebase] = useState<{
    app: FirebaseApp | null;
    auth: Auth | null;
    firestore: Firestore | null;
  }>({
    app: null,
    auth: null,
    firestore: null,
  });

  useEffect(() => {
    const { app, auth, firestore } = initializeFirebase();
    setFirebase({ app, auth, firestore });
  }, []);

  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
