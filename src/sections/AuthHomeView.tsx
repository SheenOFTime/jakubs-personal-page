// src/sections/AuthHomeView.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation"; // Import redirect helper if using Next.js
import NonAuthHomeView from "../sections/NonAuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  // Fetch the session on the server
  const session = await getServerSession(authOptions);

  // If the user is authenticated, redirect to the Prispevok page
  if (session) {
    // Redirect to Prispevok if authenticated
    redirect("/prispevok");
  }

  // If the user is unauthenticated, show the unauthenticated homepage
  return <NonAuthHomeView />;
}
