'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function RegisterPage() {
  // Google sign-in handler
  const handleGoogleRegister = async () => {
    await signIn('google', { callbackUrl: '/' }); // Adjust callbackUrl if needed
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Registrácia</h2>
      <p>Na registráciu sa prihláste pomocou Google:</p>
      
      {/* Google Sign-in Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoogleRegister}
        style={{ marginBottom: '20px' }}
      >
        Registrujte sa cez Google
      </Button>

      {/* Redirect link to Prihlásenie */}
      <p>
        Už máte účet?{' '}
        <Link href="/auth/prihlasenie" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          Prihláste sa
        </Link>
      </p>
    </div>
  );
}
