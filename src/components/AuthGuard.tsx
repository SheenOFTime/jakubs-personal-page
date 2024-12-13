// src/components/AuthGuard.tsx
'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/prihlasenie"); // Redirect to your login page
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  if (session) {
    return <>{children}</>;
  }

  return null;
};

export default AuthGuard;
