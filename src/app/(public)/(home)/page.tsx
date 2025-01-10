// src/app/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import AuthHomeView from "../../../sections/AuthHomeView";
import NonAuthHomeView from "../../../sections/NonAuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return session ? <AuthHomeView session={session} /> : <NonAuthHomeView />;
}
