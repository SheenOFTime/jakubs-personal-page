// src/app/auth/registracia/page.tsx

"use client"

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Register</h2>
      <p>To register, sign in with Google:</p>
      <Link href="/auth/prihlasenie">Go to Login</Link>
    </div>
  );
}
