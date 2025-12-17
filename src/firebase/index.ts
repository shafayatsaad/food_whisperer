import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { useAuthContext } from './provider';
import { useEffect, useState } from 'react';

// Re-export providers and hooks
export * from './provider';
export * from './client-provider';

export function useAuth() {
  const auth = useAuthContext();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no auth service, we are in mock mode. user state is managed manually.
    if (!auth) {
      setLoading(false);
      return;
    };
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  // These wrapper functions handle the Firebase Auth interactions.
  // We type the parameters as strings to satisfy TypeScript and ensure data integrity.
  const signUp = async (email: string, password: string) => {
    if (!auth) {
        // Mock Sign Up
        console.log("Mock Sign Up:", email);
        const mockUser = { uid: "mock-user-123", email, displayName: "Mock User", photoURL: "https://picsum.photos/seed/mock/100/100" };
        setUser(mockUser);
        return Promise.resolve({ user: mockUser });
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email: string, password: string) => {
    if (!auth) {
         // Mock Sign In
        console.log("Mock Sign In:", email);
         const mockUser = { uid: "mock-user-123", email, displayName: "Mock User", photoURL: "https://picsum.photos/seed/mock/100/100" };
        setUser(mockUser);
        return Promise.resolve({ user: mockUser });
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    if (!auth) {
         // Mock Sign Out
        console.log("Mock Sign Out");
        setUser(null);
        return Promise.resolve();
    }
    return firebaseSignOut(auth);
  };

  return { user, loading, signUp, signIn, signOut };
}
