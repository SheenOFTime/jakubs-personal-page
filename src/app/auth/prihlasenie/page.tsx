// src/app/auth/prihlasenie/page.tsx

'use client';
import { signIn } from 'next-auth/react';
//import { useRouter } from 'next/navigation';

export default function LoginPage() {
  //const router = useRouter();

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Login</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}
