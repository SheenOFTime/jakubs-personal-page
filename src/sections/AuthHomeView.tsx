// src/sections/AuthHomeView.tsx

import React from "react";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

interface AuthHomeViewProps {
  session: Session;
}

const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session }) => {
  // Redirect if the user is authenticated
  if (session) {
    redirect("/prispevok");
    return null; // Avoid rendering anything after redirect
  }

  return null; // Alternatively, render fallback UI if needed
};

export default AuthHomeView;
