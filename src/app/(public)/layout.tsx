// src/app/(public)/layout.tsx

import { Metadata } from 'next'; // Ensure this is imported

export const metadata: Metadata = {
  title: "Public | SnapZoska", // Correct the spelling of 'metadata'
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
