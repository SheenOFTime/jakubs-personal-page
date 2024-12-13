'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link'; // Import Link from Next.js

export default function LoginPage() {
  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Login</h2>
      <button onClick={handleGoogleSignIn} style={{ marginBottom: '20px' }}>
        Sign in with Google
      </button>
      <p>
        Nemáte účet?{' '}
        <Link href="/auth/registracia" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          Registruj sa
        </Link>
      </p>
    </div>
  );
}