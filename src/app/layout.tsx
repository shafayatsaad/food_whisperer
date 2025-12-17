// This is the root layout component. It acts as the main wrapper for the entire application.
// Every page in the app is rendered inside this structure. We use it to set up global providers
// (like Firebase and Toast notifications) and apply global styles (like fonts and CSS).

'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase/client-provider';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { PreLoader } from '@/components/ui/pre-loader';

// This is a client component, but we can still define metadata
// export const metadata: Metadata = {
//   title: 'Food Whisperer',
//   description: 'Autonomous Food Rescue Dispatch System for Bangladesh',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show pre-loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Food Whisperer</title>
        <meta name="description" content="Autonomous Food Rescue Dispatch System for Bangladesh" />
      </head>
      <body className="font-body antialiased">
        <PreLoader loading={loading} />
        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}>
          <FirebaseClientProvider>
            {children}
          </FirebaseClientProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
