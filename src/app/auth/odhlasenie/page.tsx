// src/app/auth/odhlasenie/page.tsx

"use client"

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Odhlasenie() {
  return (
    <div>
      <h1>Odhlásenie</h1>
      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
